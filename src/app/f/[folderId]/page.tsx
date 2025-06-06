import { z } from "zod";

import * as queries from "~/server/db/queries";

import DriveContents from "../../drive-contents";

export default async function GoogleDriveClone(props: {
  params: Promise<{ folderId: number }>;
}) {
  const params = await props.params;
  const { data, success } = z
    .object({ folderId: z.coerce.number() })
    .safeParse(params);

  if (!success) return <div>Invalid Folder ID</div>;

  const [folders, files, parents] = await Promise.all([
    queries.getAllFolders(data.folderId),
    queries.getAllFiles(data.folderId),
    queries.getAllParentsForFolder(data.folderId),
  ]);

  return <DriveContents folders={folders} files={files} parents={parents} />;
}
