import React, { ReactNode } from "react";
import { cn } from "@/utils";
import {
  Sizes,
  Tags,
  TextCVA,
  TextVariantProps,
  VariantType,
} from "./Text.classnames";

type TextProps = {
  variant: VariantType;
  className?: string;
  children: ReactNode;
} & TextVariantProps;

const Text = ({
  variant,
  children,
  className,
  colorStyle,
  align,
}: TextProps) => {
  const Tag = Tags[variant];
  const SizeClassNames = Sizes[variant];

  return (
    <Tag
      className={cn(SizeClassNames, TextCVA({ align, colorStyle, className }))}
    >
      {children}
    </Tag>
  );
};

export default Text;
