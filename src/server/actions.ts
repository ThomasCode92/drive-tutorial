"use server";

import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { UTApi } from "uploadthing/server";

import { db } from "~/server/db";
import { files_table as fileSchema } from "~/server/db/schema";

const utApi = new UTApi();

export async function deleteFile(fileId: number) {
  const session = await auth();
  if (!session.userId) return { error: "Unauthorized" };

  const [file] = await db
    .select()
    .from(fileSchema)
    .where(
      and(eq(fileSchema.id, fileId), eq(fileSchema.ownerId, session.userId)),
    );

  if (!file) return { error: "File not found" };

  await utApi.deleteFiles([file.url.replace("https://utfs.io/f/", "")]); // TODO: add fileKey to db schema
  await db.delete(fileSchema).where(eq(fileSchema.id, fileId));

  return { success: true };
}
