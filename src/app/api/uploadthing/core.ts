/* eslint-disable @typescript-eslint/only-throw-error */

import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";

import * as mutations from "~/server/db/mutations";
import * as queries from "~/server/db/queries";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .input(z.object({ folderId: z.number() }))
    .middleware(async ({ input }) => {
      const user = await auth();
      if (!user.userId) throw new UploadThingError("Unauthorized");

      const folder = await queries.getFolderById(input.folderId);
      if (!folder) throw new UploadThingError("Folder not found");

      if (folder.ownerId !== user.userId)
        throw new UploadThingError("Unauthorized");

      return { userId: user.userId, parent: folder.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);

      const uploadedFile = { ...file, parent: metadata.parent };
      await mutations.createFile(uploadedFile, metadata.userId);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
