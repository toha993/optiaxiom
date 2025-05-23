import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

import { AngleMenuButton } from "../angle-menu-button";
import { Button } from "../button";

export type DropdownMenuTriggerProps = ComponentPropsWithoutRef<typeof Button>;

export const DropdownMenuTrigger = forwardRef<
  HTMLButtonElement,
  DropdownMenuTriggerProps
>(({ asChild, children, ...props }, ref) => {
  return (
    <RadixMenu.Trigger asChild ref={ref} {...props}>
      {asChild ? children : <AngleMenuButton>{children}</AngleMenuButton>}
    </RadixMenu.Trigger>
  );
});

DropdownMenuTrigger.displayName = "@optiaxiom/react/DropdownMenuTrigger";
