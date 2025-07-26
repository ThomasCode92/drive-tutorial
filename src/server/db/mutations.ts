import { db } from "~/server/db";
import {
  type File,
  folders_table as folderSchema,
  files_table as filesSchema,
} from "~/server/db/schema";

export async function onboardUser(userId: string) {
  const [rootFolder] = await db
    .insert(folderSchema)
    .values({ name: "root", parent: null, ownerId: userId })
    .$returningId();

  const rootFolderId = rootFolder!.id;

  await db.insert(folderSchema).values([
    { name: "Trash", parent: rootFolderId, ownerId: userId },
    { name: "Shared", parent: rootFolderId, ownerId: userId },
    { name: "Documents", parent: rootFolderId, ownerId: userId },
  ]);

  return rootFolderId;
}

export function createFile(
  file: Pick<File, "name" | "size" | "url" | "parent">,
  userId: string,
) {
  return db.insert(filesSchema).values({ ...file, ownerId: userId });
}
