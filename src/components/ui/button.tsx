import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "cva";

import { cn } from "@/lib/utils";

const buttonVariants = cva({
   base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
   variants: {
      intent: {
         none: "",
         primary: [
            "bg-primary hover:bg-primary-active active:bg-primary-active text-zinc-800 hover:text-zinc-900 active:text-zinc-900",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-primary/70",
         ],
         secondary: [
            "bg-secondary hover:bg-secondary-active active:bg-secondary-active text-zinc-900 hover:text-zinc-950 active:text-zinc-950",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-secondary/70",
         ],
         grayscale: [
            "bg-zinc-900 hover:bg-zinc-950 active:bg-zinc-950 text-zinc-200 hover:text-zinc-50 active:text-zinc-50",
            "dark:bg-zinc-200 dark:hover:bg-zinc-50 dark:active:bg-zinc-50 dark:text-zinc-800 dark:hover:text-zinc-900 dark:active:text-zinc-900",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400",
         ],
         discrete: [
            "bg-zinc-200 hover:bg-zinc-800 active:bg-zinc-800 text-zinc-700 hover:text-zinc-50 active:text-zinc-50",
            "dark:bg-zinc-800 dark:hover:bg-zinc-200 dark:active:bg-zinc-200 dark:text-zinc-200 dark:hover:text-zinc-900 dark:active:text-zinc-900",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-zinc-200 dark:focus-visible:ring-zinc-800",
         ],
         ghost: [
            "bg-transparent hover:bg-zinc-200 focus-visible:bg-zinc-200 text-zinc-600 hover:text-zinc-800",
            "dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900",
         ],
         success: [
            "bg-emerald-500 hover:bg-teal-600 active:bg-teal-600",
            "text-zinc-100 hover:text-zinc-50 active:text-zinc-50",
            "focus-visible:outline-emerald-500/50",
         ],
         destructive: [
            "bg-red-500 hover:bg-rose-600 active:bg-rose-600",
            "text-zinc-100 hover:text-zinc-50 active:text-zinc-50",
            "focus-visible:outline-red-500/50",
         ],
         opaque: [
            "bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-700",
            "text-zinc-700 hover:text-zinc-800 active:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200 dark:active:text-zinc-200",
         ],
         outline: [
            "border border-zinc-300 dark:border-zinc-700",
            "hover:bg-zinc-300 active:bg-zinc-300 dark:hover:bg-zinc-700 dark:active:bg-zinc-700",
            "text-zinc-600 hover:text-zinc-800 active:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-50 dark:active:text-zinc-50",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-800",
         ],
         link: [
            "bg-transparent focus-visible:underline focus-visible:text-zinc-800 dark:focus-visible:text-zinc-200 hover:underline text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200",
         ],
      },
      size: {
         xs: "h-8 px-2",
         sm: "h-9 px-3",
         md: "h-10 px-4",
         lg: "h-11 px-6",
         icon: "h-10 w-10 px-0 shrink-0",
      },
   },
   defaultVariants: {
      intent: "primary",
      size: "md",
   },
});

export interface ButtonProps
   extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size">,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ asChild, intent, size, className, ...props }, ref) => {
      const Comp: any = asChild ? Slot : "button";
      return (
         <Comp
            aria-disabled={props?.disabled}
            className={cn(buttonVariants({ intent, size, className }))}
            ref={ref}
            {...props}
         />
      );
   },
);
Button.displayName = "Button";

export { Button, buttonVariants };
