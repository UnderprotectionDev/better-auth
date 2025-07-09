"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onError: (ctx) => {
          console.error(ctx.error.message);
        },
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  };

  return (
    <Button variant="destructive" size="sm" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};
