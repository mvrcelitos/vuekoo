import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Main } from "@/components/ui/main";
import { cn } from "@/lib/utils";

export default function NotFound() {
   const emojis = ["🤔", "😣", "😫", "😥", "😓", "🫠", "😞", "😖", "😢", "😟", "😧", "😰", "😨"];
   const randi = Math.floor(Math.random() * emojis.length);

   return (
      <>
         <head>
            <title>Page not found · vuekoo/auth</title>
         </head>
         <Main className="min-h-[100svh] items-center justify-center">
            <p className="text-lg font-bold">PAGE NOT FOUND {emojis[randi]}</p>
            <Link href="/" className={cn(buttonVariants({ intent: "link" }), "h-auto p-0")}>
               Return to site
            </Link>
         </Main>
      </>
   );
}
