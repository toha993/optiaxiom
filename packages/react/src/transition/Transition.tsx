import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { createSlot } from "@radix-ui/react-slot";
import { forwardRef, type ReactElement, useRef } from "react";

import * as styles from "./Transition.css";
import { TransitionGlobalConfig } from "./TransitionGlobalConfig";
import { useTransitionStatus } from "./useTransitionStatus";

const Slot = createSlot("@optiaxiom/react/Transition");

export type TransitionProps = styles.TransitionVariants & {
  children: ReactElement;
  "data-side"?: "bottom" | "left" | "right" | "top";
  skipAnimations?: boolean;
};

export const Transition = forwardRef<HTMLDivElement, TransitionProps>(
  (
    { children, duration = "md", skipAnimations, type = "fade", ...props },
    outerRef,
  ) => {
    const innerRef = useRef<HTMLElement>(null);
    const transitionStatus = useTransitionStatus(innerRef);
    const ref = useComposedRefs(outerRef, innerRef);

    return skipAnimations || TransitionGlobalConfig.skipAnimations ? (
      <Slot ref={ref}>{children}</Slot>
    ) : (
      <Slot
        ref={ref}
        {...styles.transition(
          {
            duration,
            type: transitionStatus ? type : undefined,
          },
          undefined,
        )}
        {...props}
      >
        {children}
      </Slot>
    );
  },
);

Transition.displayName = "@optiaxiom/react/Transition";
