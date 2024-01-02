import React, { ComponentProps, useState, ReactNode } from "react";
import { Text } from "..";
import { cn } from "@/utils";

export type TabProps = {
  title: string;
  children: ReactNode;
  openByDefault?: boolean;
  name?: ComponentProps<"input">["name"];
}
const Tab = ({
  title,
  children,
  openByDefault,
  name = "accordion-1",
}:TabProps) => {
  const [isOpen, setOpen] = useState(openByDefault || false);

  const toggleAccordion = () => setOpen(!isOpen);

  return (
    <div
      className={cn("rounded-md ", {
        "bg-base-200 border-2 border-base-300": isOpen,
        "bg-base-200 border-2 border-base-300 hover:bg-base-300": !isOpen,
      })}
    >
      <div
        className={cn("collapse collapse-plus join-item", {
          "collapse-open": isOpen,
          "collapse-close": !isOpen,
        })}
      >
        <input
          type="radio"
          name={name}
          checked={false} // TODO: figure out why false is working instead of 'isOpen'
          onChange={toggleAccordion}
          className="hover:cursor-pointer"
        />
        <div className="collapse-title">
          <Text variant="p" className="font-semibold">
            {title}
          </Text>
        </div>
        <div className={cn("collapse-content", { "pt-4": isOpen })}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Tab;
