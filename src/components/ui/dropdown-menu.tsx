"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cva,VariantProps } from "cva";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
      inset?: boolean;
   }
>(({ className, inset, children, ...props }, ref) => (
   <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
         "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
         inset && "pl-8",
         className,
      )}
      {...props}>
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
   </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
   <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
         "z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-zinc-50 p-1 text-zinc-500 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400",
         className,
      )}
      {...props}
   />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContentVariants = cva({
   base: "z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
   variants: {
      intent: {
         default: "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300",
         invert: "dark:border-zinc-200 dark:bg-zinc-50 dark:text-zinc-700 border-zinc-800 bg-zinc-950 text-zinc-300",
      },
   },
   defaultVariants: {
      intent: "default",
   },
});

const DropdownMenuContent = React.forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> &
      VariantProps<typeof DropdownMenuContentVariants>
>(({ className, sideOffset = 8, intent, ...props }, ref) => (
   <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
         ref={ref}
         sideOffset={sideOffset}
         className={cn(DropdownMenuContentVariants({ intent, className }))}
         {...props}
      />
   </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const dropdownMenuItemsVariants = cva({
   base: "relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
   variants: {
      intent: {
         default: "focus:bg-zinc-200 focus:text-zinc-900 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",
         danger:
            "text-red-500 focus:bg-red-200 focus:text-rose-600 dark:text-red-400 dark:focus:bg-red-700 dark:focus:text-rose-100",
      },
   },
   defaultVariants: {
      intent: "default",
   },
});

const DropdownMenuItem = React.forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.Item>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> &
      VariantProps<typeof dropdownMenuItemsVariants> & {}
>(({ intent, className, ...props }, ref) => (
   <DropdownMenuPrimitive.Item ref={ref} className={cn(dropdownMenuItemsVariants({ intent, className }))} {...props} />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
   <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
         "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-zinc-300 outline-none transition-colors focus:bg-zinc-800 focus:text-zinc-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
         className,
      )}
      checked={checked}
      {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
         <DropdownMenuPrimitive.ItemIndicator>
            <Check className="h-4 w-4" />
         </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
   </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
   <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
         "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-zinc-300 outline-none transition-colors focus:bg-zinc-800 focus:text-zinc-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
         className,
      )}
      {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
         <DropdownMenuPrimitive.ItemIndicator>
            <Circle className="h-2 w-2 fill-current" />
         </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
   </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.Label>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
      inset?: boolean;
   }
>(({ className, inset, ...props }, ref) => (
   <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
      {...props}
   />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
   <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn("my-1 h-px bg-zinc-200 dark:bg-zinc-800", className)}
      {...props}
   />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
   return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuPortal,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuTrigger,
};
