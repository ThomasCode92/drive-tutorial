import { z } from "zod";

import { db } from "~/server/db";
import {
  files as fileSchema,
  folders as folderSchema,
} from "~/server/db/schema";

import DriveContents from "../../drive-contents";

export default async function GoogleDriveClone(props: {
  params: Promise<{ folderId: number }>;
}) {
  const params = await props.params;
  const { data, success } = z
    .object({ folderId: z.coerce.number() })
    .safeParse(params);

  if (!success) return <div>Invalid Folder ID</div>;

  const folderId = data.folderId;
  console.log(folderId);

  const folders = await db.select().from(folderSchema);
  const files = await db.select().from(fileSchema);

  return <DriveContents folders={folders} files={files} />;
}
