"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import GithubIcon from "@/components/common/github-icon";
import { GoogleIcon } from "@/components/common/google-icon";
import OrSeparator from "@/components/common/or-separator";
import FormInput from "@/components/form/input";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { sleep } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import { signUpSchmea } from "./authSechmas";

export const SignUpCard = () => {
  const form = useForm<z.infer<typeof signUpSchmea>>({
    resolver: zodResolver(signUpSchmea),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async () => {
    try {
      await sleep(200);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-2xl">Sing up</CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href="/privacy-policy" className="text-link">
            Privacy policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="text-link">
            Terms of service
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <Separator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormInput
              control={form.control}
              name="name"
              label="Name"
              placeholder="Enter your name"
              disabled={false}
            />
            <FormInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
              disabled={false}
            />
            <FormInput
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="********"
              disabled={false}
            />
            <Button className="w-full" isLoading={false}>
              Sign up
            </Button>
          </form>
        </Form>
      </CardContent>
      <OrSeparator />
      <CardFooter className="p-7 flex flex-col gap-y-4">
        <Button className="w-full" variant="secondary" disabled={false}>
          <GoogleIcon />
          Sign up with Google
        </Button>
        <Button className="w-full" variant="secondary" disabled={false}>
          <GithubIcon />
          Sign up with Github
        </Button>
        <div>
          Already have an account?
          <Button
            variant="link"
            asChild
            className="text-link font-semibold"
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </CardFooter>
    </>
  );
};
