import React, { ComponentPropsWithRef, FC } from "react";
import { ButtonCVA, ButtonVariantProps } from "./Button.classnames";
import { cn } from "@/utils";

interface ButtonProps
  extends ComponentPropsWithRef<"button">,
    ButtonVariantProps {}

const Button: FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  colorStyle,
  active,
  ...props
}) => (
  <button
    className={cn(ButtonCVA({ variant, size, colorStyle, className, active }))}
    {...props}
  >
    {children}
  </button>
);
export default Button;
