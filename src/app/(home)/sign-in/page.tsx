import { SignInButton } from "@clerk/nextjs";

import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <Button
      size="lg"
      className="cursor-pointer rounded-full bg-white px-8 py-6 text-lg font-semibold text-black transition-all duration-200 hover:scale-105 hover:bg-gray-100"
      asChild
    >
      <SignInButton forceRedirectUrl="/drive" />
    </Button>
  );
}
