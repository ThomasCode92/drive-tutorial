import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";
import * as queries from "~/server/db/queries";
import * as mutations from "~/server/db/mutations";

export default async function DrivePage() {
  const session = await auth();
  if (!session.userId) return redirect("/sign-in");

  const rootFolder = await queries.getRootFolderForUser(session.userId);

  if (!rootFolder) {
    return (
      <form
        action={async () => {
          "use server";
          const rootFolderId = await mutations.onboardUser(session.userId);
          return redirect(`/f/${rootFolderId}`);
        }}
      >
        <Button>Create Folder</Button>
      </form>
    );
  }

  return redirect(`/f/${rootFolder.id}`);
}
