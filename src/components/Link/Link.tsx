import React, { ComponentProps, FC } from "react";
import { cn } from "@/utils";
import { LinkCVA, LinkVariantProps } from "./Link.classnames";

interface LinkProps extends ComponentProps<"a">, LinkVariantProps {}

const Link: FC<LinkProps> = ({
  colorStyle = "primary",
  isBold = false,
  children,
  className,
  ...props
}) => (
  <a className={cn(LinkCVA({ colorStyle, isBold, className }))} {...props}>
    {children}
  </a>
);

export default Link;
