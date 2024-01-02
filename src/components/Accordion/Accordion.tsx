import React, { PropsWithChildren } from "react";
import Tab, { TabProps } from "./Tab";
import { cn } from "@/utils";

type AccordionComponent = PropsWithChildren & { Tab: TabProps };

const Accordion = ({ children }:AccordionComponent) => {
  return (
    <div className={cn("join join-vertical w-full space-y-4")}>{children}</div>
  );
};

Accordion.Tab = Tab;
export default Accordion;
