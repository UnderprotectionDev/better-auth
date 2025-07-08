"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signUp } from "@/lib/auth-client";

export const RegisterForm = () => {
  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const name = String(formData.get("name"));
    if (!name) {
      toast.error("Please enter your name");
      return;
    }

    const email = String(formData.get("email"));
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const password = String(formData.get("password"));
    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    await signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onRequest: (ctx) => {},
        onResponse: (ctx) => {
          console.log(ctx);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: (ctx) => {
          console.log(ctx);
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </div>

      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};
