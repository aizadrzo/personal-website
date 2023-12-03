import React, { FC, ComponentProps } from "react";
import Image from "next/image";

interface CardImageProps {
  src: NonNullable<ComponentProps<"input">["src"]>;
  alt?: ComponentProps<"input">["alt"];
}

const CardImage: FC<CardImageProps> = ({ src, alt }) => {
  return <Image src={src} sizes="100%" alt={alt || "cardImage1"} />;
};

export default CardImage;
