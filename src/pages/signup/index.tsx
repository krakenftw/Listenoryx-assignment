import SignupForm from "@/components/signup/SignupForm";
import SocialSignup from "@/components/signup/SocialSignup";
import { Separator } from "@/components/ui/separator";

export default function SignupPage() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center ">
      <div className="h-full w-full md:w-1/2 flex flex-col p-4 pt-[60px]">
        <h1 className="text-3xl font-bold py-10">
          Signup with email or phone number
        </h1>
        <SignupForm />
        <div className="w-full flex items-center ">
          <Separator className="flex-grow flex-1 px-2 my-8" />
          <span className="mx-2">or</span>
          <Separator className="flex-grow flex-1 px-2 my-8" />
        </div>
        <SocialSignup />
        <span className="py-4 text-center">
          Already have an account?
          <strong className="text-primary">Sign In</strong>
        </span>
      </div>
    </div>
  );
}
