import { VariantProps, cva } from "class-variance-authority";

export const ButtonCVA = cva("btn", {
  variants: {
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    },
    variant: {
      contain: "",
      outline: "btn-outline",
      ghost: "btn-ghost",
    },
  },
  defaultVariants: {
    variant: "contain",
    size: "md",
  },
});

export type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonCVA>>;
