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
}) => {
  return (
    <button
      className={cn(
        ButtonCVA({ variant, size, colorStyle, className, active })
      )}
      {...props}
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";
export default Button;
