import { VariantProps, cva } from "class-variance-authority";

export type VariantType = "h1" | "h2" | "h3" | "p" | "small";

export const Tags: Record<VariantType, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  small: "span",
};

export const Sizes: Record<VariantType, string> = {
  h1: "text-6xl font-bold leading-loose tracking-tight",
  h2: "text-5xl font-bold leading-relaxed tracking-tight",
  h3: "text-[40px] font-semibold leading-normal",
  p: "text-lg",
  small: "text-base",
};

export const TextCVA = cva("", {
  variants: {
    color: {
      general: "text-white",
      "less-general": "text-base-content",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      red: "text-error",
      green: "text-success",
      blue: "text-info",
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    color: "general",
    align: "left",
  },
});

export type TextVariantProps = NonNullable<VariantProps<typeof TextCVA>>;
