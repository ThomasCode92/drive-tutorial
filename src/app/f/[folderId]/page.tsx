import { db } from "~/server/db";
import {
  files as fileSchema,
  folders as folderSchema,
} from "~/server/db/schema";

import DriveContents from "../../drive-contents";

export default async function GoogleDriveClone() {
  const folders = await db.select().from(folderSchema);
  const files = await db.select().from(fileSchema);

  return <DriveContents folders={folders} files={files} />;
}
