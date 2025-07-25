import "server-only"; // Ensure this file is only run on the server

import { and, eq, isNull } from "drizzle-orm";

import { db } from "~/server/db";
import {
  files_table as fileSchema,
  folders_table as folderSchema,
} from "~/server/db/schema";

export async function getAllParentsForFolder(folderId: number) {
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

export async function getRootFolderForUser(ownerId: string) {
  const folders = await db
    .select()
    .from(folderSchema)
    .where(and(eq(folderSchema.ownerId, ownerId), isNull(folderSchema.parent)));
  return folders[0];
}

export function getAllFolders(folderId: number) {
  return db
    .select()
    .from(folderSchema)
    .where(eq(folderSchema.parent, folderId))
    .orderBy(folderSchema.name);
}

export async function getFolderById(folderId: number) {
  const folders = await db
    .select()
    .from(folderSchema)
    .where(eq(folderSchema.id, folderId));
  return folders[0];
}

export function getAllFiles(folderId: number) {
  return db
    .select()
    .from(fileSchema)
    .where(eq(fileSchema.parent, folderId))
    .orderBy(fileSchema.name);
}
