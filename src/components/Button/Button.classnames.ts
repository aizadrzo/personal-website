import { VariantProps, cva } from "class-variance-authority";

export const ButtonCVA = cva("btn rounded-md", {
  variants: {
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    },
    variant: {
      contain: "btn-primary hover:bg-[#2c2c2c]",
      outline: "btn-outline bg-white hover:bg-[#e0e0e0] hover:text-primary",
      link: "btn-link underline-offset-2 btn-primary",
    },
  },
  defaultVariants: {
    variant: "contain",
    size: "md",
  },
});

export type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonCVA>>;
