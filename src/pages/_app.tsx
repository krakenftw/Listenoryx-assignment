import Navbar from "@/components/core/Navbar";
import { ThemeProvider } from "@/lib/themeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
