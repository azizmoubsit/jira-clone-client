"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

import GithubIcon from "@/components/common/github-icon";
import { GoogleIcon } from "@/components/common/google-icon";
import OrSeparator from "@/components/common/or-separator";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import FormInput from "@/components/form/input";
import { sleep } from "@/lib/utils";
import { signInSchmea } from "./authSechma";

type formValues = z.infer<typeof signInSchmea>;

export const SignInCard = () => {
  const form = useForm<formValues>({
    resolver: zodResolver(signInSchmea),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: formValues) => {
    try {
      await sleep(200);
      console.log({ values });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
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
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>
      <OrSeparator />
      <CardFooter className="p-7 flex flex-col gap-y-4">
        <Button className="w-full" variant="secondary" disabled={false}>
          <GoogleIcon />
          Sign in with Google
        </Button>
        <Button className="w-full" variant="secondary" disabled={false}>
          <GithubIcon />
          Sign in with Github
        </Button>
        <div>
          Don&apos;t have an account?
          <Button
            variant="link"
            asChild
            className="text-link font-semibold"
          >
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </CardFooter>
    </>
  );
};
