import { SocialIcon } from "react-social-icons";

export default function SocialSignup() {
  return (
    <div className="flex flex-col gap-4">
      <div className="py-7 border-[1px] rounded-lg items-center flex gap-4 justify-center border-border w-full h-10">
        <SocialIcon
          url="www.google.com"
          style={{ height: "30px", width: "30px" }}
        />{" "}
        Signup with gmail
      </div>
      <div className="py-7 border-[1px] rounded-lg items-center flex gap-4 justify-center border-border w-full h-10">
        <SocialIcon
          url="www.facebook.com"
          style={{ height: "30px", width: "30px" }}
        />{" "}
        Signup with Facebook
      </div>
      <div className="py-7 border-[1px] rounded-lg items-center flex gap-4 justify-center border-border w-full h-10">
        <SocialIcon
          url="www.apple.com"
          style={{ height: "30px", width: "30px" }}
        />{" "}
        Signup with Apple
      </div>
    </div>
  );
}
