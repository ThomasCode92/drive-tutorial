import { useUser } from "@clerk/nextjs";
import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";

export default function UserIdentification() {
  const posthog = usePostHog();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      posthog.identify(user.id, {
        email: user.emailAddresses[0]?.emailAddress,
      });
    } else {
      posthog.reset();
    }
  }, [posthog, user]);

  return null; // Do not render anything
}
