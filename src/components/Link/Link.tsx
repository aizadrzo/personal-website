import React, { ComponentProps } from "react";
import { cn } from "@/utils";
import { LinkCVA, LinkVariantProps } from "./Link.classnames";

type LinkProps = ComponentProps<"a"> & LinkVariantProps

const Link = ({
  colorStyle = "primary",
  isBold = false,
  children,
  className,
  href,
  ...props
}: LinkProps) => (
  <a
    href={href}
    className={cn(LinkCVA({ colorStyle, isBold, className }))}
    {...props}
  >
    {children}
  </a>
);

export default Link;
