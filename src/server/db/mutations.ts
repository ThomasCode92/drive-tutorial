import { db } from "~/server/db";
import { type File, files_table as filesSchema } from "~/server/db/schema";

export function createFile(
  file: Pick<File, "name" | "size" | "url" | "parent">,
  userId: string,
) {
  return db.insert(filesSchema).values({ ...file, ownerId: userId });
}
