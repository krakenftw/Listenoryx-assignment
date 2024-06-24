import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function BackButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <div className="self-start flex items-center pb-4 m-0 gap-2">
        <ChevronLeftIcon />
        <span>back</span>
      </div>
    </Link>
  );
}
