import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
   const emojis = ["🤔", "😣", "😫", "😥", "😓", "🫠", "😞", "😖", "😢", "😟", "😧", "😰", "😨"];
   const randi = Math.floor(Math.random() * emojis.length);

   return (
      <>
         <head>
            <title>Page not found</title>
         </head>
         <main className="flex min-h-[100svh] flex-col items-center justify-center gap-4">
            <p className="text-lg font-bold">PAGE NOT FOUND {emojis[randi]}</p>
            <Link href="/" className={cn(buttonVariants({ intent: "link" }), "h-auto p-0")}>
               Return to site
            </Link>
         </main>
      </>
   );
}
