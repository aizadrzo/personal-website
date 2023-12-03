import React, { FC, ReactNode } from "react";
import { cn } from "@/utils";
import CardTitle, { CardTitleProps } from "./CardTitle";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className={cn("card border border-base-400 rounded-lg p-4")}>
      {children}
    </div>
  );
};

Card.Title = CardTitle;
export default Card;
