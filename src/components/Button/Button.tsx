import React, { ButtonHTMLAttributes, FC } from "react";
import { ButtonCVA, ButtonVariantProps } from "./Button.classnames";
import { cn } from "@/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

const Button: FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  colorStyle,
  ...props
}) => {
  return (
    <button
      className={cn(ButtonCVA({ variant, size, colorStyle, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";
export default Button;
