import Image from "next/image";
import { Inter } from "next/font/google";
import AnywhereSVG from "@/components/svg/anywhereSvg";
import { ThemeToggle } from "@/components/core/ThemeToggle";
import { ThemeProvider } from "@/lib/themeProvider";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main
        className={`flex flex-col md:flex-row h-screen w-full items-center justify-center md:justify-evenly p-8 md:p-24 ${inter.className}`}
      >
        <h1 className="absolute top-3 left-3 md:top-8 md:left-8 font-bold text-2xl">
          Listenoryx
        </h1>
        <GridPattern
          width={25}
          height={25}
          strokeDasharray={"4 2"}
          className={cn(
            "z-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
        <ThemeToggle classNames="absolute top-3 right-3 md:top-8 md:right-8 cursor-pointer" />
        <div className="z-10 w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 ">
          <AnywhereSVG width="700" height="350" />
        </div>
        <div className="z-10 w-full md:w-1/2 text-center md:text-left flex pl-0 md:pl-20 flex-col gap-6 justify-center items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold">Anywhere you are</h1>
          <h2 className="text-foreground/60 text-xl md:text-2xl w-full md:w-2/3">
            Sell houses easily with the help of Listenoryx. Our platform
            simplifies the process, providing you with the tools and resources
            needed to reach potential buyers efficiently.
          </h2>
          <div className="w-1/2 flex px-1/2 flex-col items-center gap-2">
            <Button className="w-full hidden md:visible">Start Now</Button>
            <div className="visible md:hidden bg-primary w-16 h-16 flex items-center justify-center rounded-full">-></div>
            <span className="cursor-pointer text-foreground/50">Skip</span>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
