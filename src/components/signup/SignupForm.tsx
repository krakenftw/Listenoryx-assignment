"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BackButton from "../ui/BackButton";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  number: z
    .string()
    .regex(/^\d+$/, { message: "Number must contain only digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  gender: z.string().min(1, { message: "Gender is required." }),
});

export default function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onCancel = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <BackButton href="/" />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your mobile number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Gender" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 items-center justify-center text-foreground/60">
          <CheckCircledIcon className="text-primary" />{" "}
          <span>
            By signing up. you agree to the
            <strong className="text-primary/60"> Terms of service </strong>
            and <strong className="text-primary/60">Privacy policy.</strong>
          </span>
        </div>
        <div className="flex ">
          <Button
            className="w-full flex items-center justify-center"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>{" "}
    </Form>
  );
}
