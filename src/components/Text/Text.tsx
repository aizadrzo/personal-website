import React, { FC, ReactNode } from "react";
import { cn } from "@/utils";
import {
  Sizes,
  Tags,
  TextCVA,
  TextVariantProps,
  VariantType,
} from "./Text.classnames";

interface TextProps extends TextVariantProps {
  variant: VariantType;
  className?: string;
  children: ReactNode;
}

const Text: FC<TextProps> = ({
  variant,
  children,
  className,
  color,
  align,
}) => {
  const Tag = Tags[variant];
  const SizeClassNames = Sizes[variant];

  return (
    <Tag className={cn(SizeClassNames, TextCVA({ align, color, className }))}>
      {children}
    </Tag>
  );
};

export default Text;
