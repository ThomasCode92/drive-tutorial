import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "~/server/db";
import {
  files as fileSchema,
  folders as folderSchema,
} from "~/server/db/schema";

import DriveContents from "../../drive-contents";

async function getAllParents(folderId: number) {
  const parents = [];
  let currentId: number | null = folderId;
  while (currentId != null) {
    const folders = await db
      .selectDistinct()
      .from(folderSchema)
      .where(eq(folderSchema.id, currentId));

    if (!folders[0]) throw new Error("parent folder not found");

    parents.unshift(folders[0]);
    currentId = folders[0]?.parent; // parent can be null
  }

  return parents;
}

export default async function GoogleDriveClone(props: {
  params: Promise<{ folderId: number }>;
}) {
  const params = await props.params;
  const { data, success } = z
    .object({ folderId: z.coerce.number() })
    .safeParse(params);

  if (!success) return <div>Invalid Folder ID</div>;

  const folderId = data.folderId;
  const parentsPromise = getAllParents(folderId);

  const foldersPromise = db
    .select()
    .from(folderSchema)
    .where(eq(folderSchema.parent, folderId));
  const filesPromise = db
    .select()
    .from(fileSchema)
    .where(eq(fileSchema.parent, folderId));

  const [folders, files, parents] = await Promise.all([
    foldersPromise,
    filesPromise,
    parentsPromise,
  ]);

  return <DriveContents folders={folders} files={files} parents={parents} />;
}
