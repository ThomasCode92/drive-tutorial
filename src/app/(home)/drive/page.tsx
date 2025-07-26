import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";
import * as mutations from "~/server/db/mutations";
import * as queries from "~/server/db/queries";

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
        <Button
          size="lg"
          className="cursor-pointer rounded-full bg-white px-8 py-6 text-lg font-semibold text-black transition-all duration-200 hover:scale-105 hover:bg-gray-100"
          type="submit"
        >
          Create Your Drive
        </Button>
      </form>
    );
  }

  return redirect(`/f/${rootFolder.id}`);
}
