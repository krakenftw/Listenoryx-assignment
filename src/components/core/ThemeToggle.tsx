"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle({ classNames }: { classNames: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className={classNames}>
      <div
        onClick={() => {
          setTheme(theme == "dark" ? "light" : "dark");
        }}
        className="border-2 border-border p-2 rounded-xl"
      >
        {theme == "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </div>
  );
}
