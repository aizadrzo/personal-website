import React, { FC, ComponentProps, useState } from "react";
import { Text } from "..";
import { cn } from "@/utils";

export interface TabProps {
  title: string;
  children: string;
  openByDefault?: boolean;
  name?: ComponentProps<"input">["name"];
}
const Tab: FC<TabProps> = ({
  title,
  children,
  openByDefault,
  name = "accordion-1",
}) => {
  const [isOpen, setOpen] = useState(openByDefault || false);

  const toggleAccordion = () => setOpen(!isOpen);

  return (
    <div
      className={cn("rounded-md ", {
        "bg-base-200": isOpen,
        "hover:bg-base-200": !isOpen,
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
          <Text variant="small-p" colorStyle="secondary">
            {children}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Tab;
