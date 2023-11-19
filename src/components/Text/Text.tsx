import React, { FC, ReactNode } from "react";
import { cn } from "@/utils";

type Variant = "h1" | "h2" | "h3" | "p" | "small";

interface TextProps {
  variant: Variant;
  className?: string;
  children: ReactNode;
}

const Text: FC<TextProps> = ({ variant, children, className, ...rest }) => {
  const tags: Record<Variant, keyof JSX.IntrinsicElements> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    small: "span",
  };

  const sizes: Record<Variant, string> = {
    h1: "text-6xl font-bold leading-loose tracking-tight",
    h2: "text-5xl font-bold leading-relaxed tracking-tight",
    h3: "text-[40px] font-semibold leading-normal",
    p: "text-lg",
    small: "text-base",
  };

  const Tag = tags[variant];
  const sizeClasses = sizes[variant];

  return <Tag className={cn(sizeClasses, className)}>{children}</Tag>;
};

export default Text;
