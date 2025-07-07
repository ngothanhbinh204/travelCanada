import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

// Khai báo variants
const buttonVariants = cva(
  " items-center min-h-[48px] justify-center cursor-pointer font-medium transition-colors disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        main: "button_primary",
        close:
          "bg-white rounded-xs uppercase px-5 py-3 text-xs text-link hover:bg-link hover:!text-white",
        white:
          "bg-white underline text-[14px] px- py-3 md:text-[16px] text-primary hover:bg-primary hover:text-white ",
        no_bg:
          "inline-block text-primary bg-none cursor-pointer rounded-sm px-5 py-3 transition-colors text-primary group pl-0 pr-5 text-lg font-semibold text-left",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    const Comp = props.href ? "a" : "button";
    return (
      <Comp
        className={clsx(
          buttonVariants({ variant, size }),
          className,
          "inline-flex gap-3 group"
        )}
        ref={ref}
        href={props.href}
        {...props}
      >
        {icon && (
          <span className="mr-2 order-2 transform transition-transform duration-200 group-hover:translate-x-1">
            {icon}
          </span>
        )}{" "}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
