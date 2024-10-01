import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Gaius Weather",
  description: "Weather application developed using Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-r from-zinc-100 to-zinc-300 dark:bg-gradient-to dark:from-zinc-800 dark:to-zinc-900 grid grid-rows-[80px_auto_auto] min-h-screen grid-cols-1 font-roboto">
        <Providers>
          <Header />
          <main className="p-6 md:p-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
