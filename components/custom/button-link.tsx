import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { VariantProps } from "class-variance-authority";

interface ButtonPropsBase
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode; // Explicitly set the type for children
}
export type ButtonLinkProps = {
  href: string;
  leftSection?: React.JSX.Element;
  rightSection?: React.JSX.Element;
} & ButtonPropsBase;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      href,
      className,
      variant,
      size,
      leftSection,
      rightSection,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {leftSection && <div className="mr-2">{leftSection}</div>}
        {children}
        {rightSection && <div className="ml-2">{rightSection}</div>}
      </Link>
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { ButtonLink, buttonVariants };
