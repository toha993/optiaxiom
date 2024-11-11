import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { forwardRef } from "react";

import {
  AlertDialogContextProvider,
  useAlertDialogContext,
} from "../alert-dialog-context";
import { AnimatePresence } from "../animate-presence";
import { Box, type BoxProps } from "../box";
import { Flex } from "../flex";
import { Transition } from "../transition";
import * as styles from "./AlertDialogContent.css";

type AlertDialogContentProps = BoxProps<
  typeof RadixAlertDialog.Content,
  NonNullable<styles.DialogVariants>
>;

export const AlertDialogContent = forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>(({ children, size = "sm", ...props }, ref) => {
  const { open } = useAlertDialogContext("AlertDialogContent");

  return (
    <AnimatePresence>
      {open && (
        <RadixAlertDialog.Portal forceMount>
          <Transition>
            <Box asChild {...styles.overlay()}>
              <RadixAlertDialog.Overlay />
            </Box>
          </Transition>

          <Flex {...styles.container()}>
            <Box flex="1" pointerEvents="none" />

            <Transition data-side="bottom" type="fade">
              <Box asChild {...styles.content({ size })}>
                <RadixAlertDialog.Content ref={ref} {...props}>
                  <AlertDialogContextProvider open={open}>
                    {children}
                  </AlertDialogContextProvider>
                </RadixAlertDialog.Content>
              </Box>
            </Transition>

            <Box flex="1" pointerEvents="none" />
            <Box flex="1" pointerEvents="none" />
          </Flex>
        </RadixAlertDialog.Portal>
      )}
    </AnimatePresence>
  );
});

AlertDialogContent.displayName = "@optiaxiom/react/AlertDialogContent";
