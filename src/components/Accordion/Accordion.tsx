import React, { FC, ReactNode } from "react";
import Tab, { TabProps } from "./Tab";
import { cn } from "@/utils";

interface AccordionProps {
  children: ReactNode;
}

type AccordionComponent = FC<AccordionProps> & { Tab: FC<TabProps> };

const Accordion: AccordionComponent = ({ children }) => {
  return (
    <div className={cn("join join-vertical w-full space-y-4")}>{children}</div>
  );
};

Accordion.Tab = Tab;
export default Accordion;
