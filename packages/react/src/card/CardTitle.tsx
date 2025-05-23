import { createSlot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

import { Heading, type HeadingProps } from "../heading";
import { useCardContext } from "./CardContext";

const Slot = createSlot("@optiaxiom/react/CardTitle");

export type CardTitleProps = HeadingProps<"h2">;

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  ({ asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "h2";
    const { labelId } = useCardContext("@optiaxiom/react/CardTitle");

    return (
      <Heading
        asChild
        fontSize="md"
        fontWeight="500"
        id={labelId}
        ref={ref}
        {...props}
      >
        <Comp>{children}</Comp>
      </Heading>
    );
  },
);

CardTitle.displayName = "@optiaxiom/react/CardTitle";
