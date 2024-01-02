import React, { ComponentPropsWithRef } from "react";
import { ButtonCVA, ButtonVariantProps } from "./Button.classnames";
import { cn } from "@/utils";

type ButtonProps = ComponentPropsWithRef<"button"> & ButtonVariantProps

const Button = ({
  className,
  size,
  variant,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(ButtonCVA({ variant, size, className }))}
    {...props}
  >
    {children}
  </button>
);
export default Button;
