import { db } from "~/server/db";
import { type File, files_table as filesSchema } from "~/server/db/schema";

export function createFile(file: Omit<File, "id">, _userId: string) {
  return db.insert(filesSchema).values(file);
}
