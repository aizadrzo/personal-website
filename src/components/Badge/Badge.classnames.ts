import { VariantProps, cva } from "class-variance-authority";

export const BadgeCVA = cva("badge rounded-md", {
  variants: {
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
      lg: "badge-lg",
    },
    colorStyle: {
      black: "badge-primary",
      gray: "badge-secondary",
      blue: "badge-info",
      red: "badge-error",
      yellow: "badge-warning",
    },
    isOutline: {
      true: "badge-outline",
    },
    defaultVariants: {
      size: "md",
      colorStyle: "primary",
      isOutline: false,
    },
  },
});

export type BadgeVariantsProps = NonNullable<VariantProps<typeof BadgeCVA>>;
