import React, { FC, ReactNode } from "react";
import { Text } from "..";

export interface CardTitleProps {
  children: ReactNode;
}
const CardTitle: FC<CardTitleProps> = ({ children }) => {
  return (
    <Text variant="h3" colorStyle="primary">
      {children}
    </Text>
  );
};

export default CardTitle;
