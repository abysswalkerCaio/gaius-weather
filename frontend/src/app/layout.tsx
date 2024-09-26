import type { Metadata } from "next";
import { Providers } from "./providers";
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
      <body className="bg-zinc-300 dark:bg-zinc-800">
        <Providers>
          <main className="m-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
