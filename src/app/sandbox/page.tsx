import { mockFiles, mockFolders } from "~/lib/mock-data";
import { db } from "~/server/db";
import { files, folders } from "~/server/db/schema";

export default function SandboxPage() {
  return (
    <div className="mx-96 flex flex-col gap-4">
      Seed Function
      <form
        action={async () => {
          "use server";

          console.log("Seeding database...");

          const foldersResult = await db.insert(folders).values(
            mockFolders.map((folder, idx) => ({
              id: idx + 1,
              name: folder.name,
              parent: idx !== 0 ? 1 : null,
            })),
          );
          const filesResult = await db.insert(files).values(
            mockFiles.map((file, idx) => ({
              id: idx + 1,
              name: file.name,
              size: 5000,
              url: file.url,
              parent: (idx % 3) + 1,
            })),
          );

          console.log("Folders inserted:", foldersResult[0].affectedRows);
          console.log("Files inserted:", filesResult[0].affectedRows);
        }}
      >
        <button type="submit">Seed</button>
      </form>
    </div>
  );
}
