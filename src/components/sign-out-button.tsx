"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const SignOutButton = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: (ctx) => {
          setIsPending(false);
        },
        onError: (ctx) => {
          console.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("You're signed out. See you next time!");
          router.push("/auth/login");
        },
      },
    });
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleSignOut}
      disabled={isPending}
    >
      Sign Out
    </Button>
  );
};
