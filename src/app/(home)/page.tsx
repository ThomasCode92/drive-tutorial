import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <form
      action={async () => {
        "use server";
        const session = await auth();
        if (!session.userId) return redirect("/sign-in");
        redirect("/drive");
      }}
    >
      <Button
        size="lg"
        className="cursor-pointer rounded-full bg-white px-8 py-6 text-lg font-semibold text-black transition-all duration-200 hover:scale-105 hover:bg-gray-100"
        type="submit"
      >
        Get Started
      </Button>
    </form>
  );
}
