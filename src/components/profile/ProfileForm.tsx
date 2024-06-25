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
import { CameraIcon, PersonIcon } from "@radix-ui/react-icons";
import { useRef } from "react";

const formSchema = z.object({
  profilePicture: z.instanceof(File),
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  number: z
    .string()
    .regex(/^\d+$/, { message: "Number must contain only digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  street: z.string().min(1, { message: "Street is required." }),
  city: z.string().min(1, { message: "City is required." }),
  district: z.string().min(1, { message: "District is required." }),
});

export default function ProfileForm() {
  const inputRef = useRef(null);
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
          name="profilePicture"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full flex items-center justify-center">
                  <Input
                    ref={inputRef}
                    className="hidden"
                    type="file"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                  <div
                    onClick={inputRef.current}
                    className="border relative rounded-full  h-20 w-20 flex items-center justify-center"
                  >
                    <PersonIcon className="w-5 h-5" />
                    <div className="absolute right-1 bottom-1">
                      <CameraIcon className="text-foreground bg-background" />
                    </div>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
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
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Street" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="District" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
          <Button className="w-1/2" type="submit">
            Save
          </Button>
          <Button
            className="w-1/2"
            variant={"outline"}
            type="button"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
