import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
} from "react";

import { Calendar } from "../calendar";
import { useDateRangePickerContext } from "../date-range-picker-context";
import { Flex } from "../flex";
import { PopoverContent } from "../popover-content";
import * as styles from "./DateRangePickerContent.css";

type DateRangePickerContentProps = ComponentPropsWithoutRef<
  typeof PopoverContent
> &
  Pick<ComponentPropsWithoutRef<typeof Calendar>, "holiday" | "weekend"> & {
    /**
     * Display content inside the popover after the calendar.
     */
    addonAfter?: ReactNode;
    /**
     * Display content inside the popover before the calendar.
     */
    addonBefore?: ReactNode;
  };

export const DateRangePickerContent = forwardRef<
  HTMLInputElement,
  DateRangePickerContentProps
>(({ addonAfter, addonBefore, children, holiday, weekend, ...props }, ref) => {
  const { setValue, value } = useDateRangePickerContext(
    "DateRangePickerContent",
  );

  return (
    <PopoverContent gap="8" maxW={undefined} ref={ref} {...props}>
      <Flex {...styles.panels()}>
        {addonBefore}
        <Calendar
          holiday={holiday}
          mode="range"
          onValueChange={setValue}
          value={value}
          weekend={weekend}
        />
        {addonAfter}
      </Flex>
      {children}
    </PopoverContent>
  );
});

DateRangePickerContent.displayName = "@optiaxiom/react/DateRangePickerContent";
