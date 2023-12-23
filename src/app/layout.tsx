import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config/site";
import { cn } from "@/lib/utils";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: {
      default: config.title,
      template: `%s · ${config.title}`,
   },
   description: config.description,
   // themeColor: [
   //    { media: "(prefers-color-scheme: light)", color: "white" },
   //    { media: "(prefers-color-scheme: dark)", color: "black" },
   // ],
};

export default function RootLayout({ children }: React.PropsWithChildren) {
   return (
      <html lang="en-US">
         <body className={cn("min-h-[100svh] bg-zinc-50 dark:bg-zinc-950", GeistSans.className)}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
               {children}
               <TailwindIndicator />
            </ThemeProvider>
            <Analytics />
            <SpeedInsights />
         </body>
      </html>
   );
}
