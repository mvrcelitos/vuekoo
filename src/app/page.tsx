import Link from "next/link";
import { Github, Twitter } from "lucide-react";

import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
   return (
      <div className="flex min-h-svh flex-col">
         <main className="mx-auto flex h-full w-full max-w-2xl grow grid-cols-1 flex-col items-start gap-8 p-8 md:py-16">
            <div className="flex w-full flex-col gap-2 xs:flex-row xs:items-center xs:justify-between">
               <Link href="/" className="flex flex-col">
                  <h1 className="text-2xl font-bold uppercase text-zinc-950 dark:text-zinc-50">
                     VUEK<span className="text-primary">O</span>O
                  </h1>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">Applications central.</p>
               </Link>
               <div className="flex items-center gap-2">
                  <Link
                     href="https://github.com/mvrcelitos"
                     className={buttonVariants({ intent: "ghost", size: "icon" })}>
                     <Github className="h-6 w-6 shrink-0" size={24} />
                  </Link>
                  <Link
                     href="https://twitter.com/mvrcelitos"
                     className={buttonVariants({ intent: "ghost", size: "icon" })}>
                     <Twitter className="h-6 w-6 shrink-0 fill-current" size={24} />
                  </Link>
                  <ModeToggle />
               </div>
            </div>
            <div className="flex flex-col gap-2">
               <h2
                  id="project"
                  className="relative text-lg font-semibold text-zinc-950 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:opacity-50 before:hover:content-['#'] dark:text-zinc-50">
                  PROJECTS
               </h2>
               <ul className="flex flex-col gap-1">
                  <li className="group/li border-l-2 border-l-primary pl-4 duration-150 hover:border-l-primary-active">
                     <Link href="https://auth.vuekoo.com" className="grid grid-cols-1">
                        <div className="flex items-center gap-1">
                           <h3 className="text-base font-medium text-zinc-900 underline-offset-2 group-hover/li:underline dark:text-zinc-100">
                              vuekoo/auth
                           </h3>
                           <span className="-mt-1 flex select-none items-center justify-center rounded-full bg-primary px-1 py-0.5 text-xs font-medium">
                              NEW
                           </span>
                        </div>
                        <p className="-mt-1 truncate bg-transparent text-sm text-zinc-600 dark:text-zinc-300">
                           An saas to manage the authentication and the users permissions.
                        </p>
                     </Link>
                  </li>
               </ul>
            </div>
         </main>
         <Footer />
      </div>
   );
}
