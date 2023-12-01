import React, { FC, ComponentProps } from "react";
import { BadgeCVA, BadgeVariantsProps } from "./Badge.classnames";
import { cn } from "@/utils";

interface BadgeProps extends ComponentProps<"div">, BadgeVariantsProps {}

const Badge: FC<BadgeProps> = ({
  size,
  colorStyle,
  isOutline,
  children,
  ...props
}) => {
  return (
    <div className={cn(BadgeCVA({ size, colorStyle, isOutline }))} {...props}>
      {children}
    </div>
  );
};

export default Badge;
