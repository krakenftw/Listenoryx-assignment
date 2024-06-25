import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex items-center justify-between px-4 py-4">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl">Listenoryx</h1>
        </Link>
        <ThemeToggle classNames="cursor-pointer" />
      </div>
    </div>
  );
}
