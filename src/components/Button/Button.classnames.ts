import { VariantProps, cva } from "class-variance-authority";

export const ButtonCVA = cva("text-slate-100 btn", {
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
    colorStyle: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      blue: "btn-info",
      red: "btn-error",
      yellow: "btn-warning",
      green: "btn-green",
    },
  },
  defaultVariants: {
    variant: "contain",
    size: "md",
    colorStyle: "primary",
  },
});

export type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonCVA>>;
