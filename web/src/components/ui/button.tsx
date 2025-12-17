import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-dark-second",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-dark-second",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:bg-dark-second",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-dark-second ",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:bg-dark-second",
        link: "text-primary underline-offset-4 hover:underline dark:bg-dark-second",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonAttributeProps = {
  iconClassName?: string;
};

type Radius = "full" | (string & Object);

type StyleShortType = "absolute-center" | "fixed-center" | "flex-center";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: string;
  text?: string;
  attrs?: ButtonAttributeProps;
  radius?: Radius;
  upload?: boolean;
  styleShort?: StyleShortType;
}

const renderStyleShort = (styleShort?: StyleShortType) => {
  switch (styleShort) {
    case "absolute-center":
      return "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2";
    case "fixed-center":
      return "fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2";
    case "flex-center":
      return "flex items-center justify-center";

    default:
      return "";
  }
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    delete props.loading;
    const Comp = asChild ? Slot : "button";
    const _className = cn(
      buttonVariants({
        variant,
        size,
        className: `${className} ${renderStyleShort(props.styleShort)}`.trim(),
      })
    );
    if (props.icon !== null) {
      return (
        <Comp className={_className} {...props}>
          <div className="flex items-center gap-2">
            <i
              className={`${props.icon} ${
                props.attrs?.iconClassName ?? ""
              }`.trim()}
            />
            {(props.text || props.children) && (
              <span>{props.text || props.children}</span>
            )}
          </div>
        </Comp>
      );
    }
    return <Comp className={_className} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
