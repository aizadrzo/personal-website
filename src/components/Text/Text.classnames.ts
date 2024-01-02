import { VariantProps, cva } from "class-variance-authority";

export type VariantType = "h1" | "h2" | "h3" | "p" | "small";

export const Tags: Record<VariantType, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  small: "small",
};

export const Sizes: Record<VariantType, string> = {
  h1: "sm:text-6xl sm:leading-relaxed text-5xl font-bold leading-relaxed tracking-tight",
  h2: "sm:text-5xl sm:leading-relaxed text-4xl font-bold tracking-tight",
  h3: "sm:text-3xl text-2xl font-semibold leading-normal",
  p: "text-xl",
  small: "text-base sm:text-md",
};

export const TextCVA = cva("", {
  variants: {
    colorStyle: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    colorStyle: "primary",
    align: "left",
  },
});

export type TextVariantProps = NonNullable<VariantProps<typeof TextCVA>>;
