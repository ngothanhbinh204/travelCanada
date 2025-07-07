import * as React from "react";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import clsx from "clsx";

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
export const SheetTitle = SheetPrimitive.Title;

export const SheetContent = React.forwardRef(
  (
    { className, children, side = "right", onBack, showBack = false, ...props },
    ref
  ) => (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" />

      <SheetPrimitive.Content
        ref={ref}
        className={clsx(
          "fixed top-0 left-0 w-full max-w-full h-screen z-50 bg-white shadow-lg transition ease-in-out duration-300",
          side === "right" && "right-0 top-0 h-full w-3/4 sm:w-full",
          className
        )}
        {...props}
      >
        {children}
        {/* <SheetClose className="absolute right-4 top-4 text-gray-400 hover:text-black">
          <X className="w-5 h-5" />
        </SheetClose> */}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
);
