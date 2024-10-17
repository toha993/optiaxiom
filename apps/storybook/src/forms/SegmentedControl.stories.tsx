import type { Meta, StoryObj } from "@storybook/react";

import {
  SegmentedControl,
  SegmentedControlItem,
} from "@optiaxiom/react/unstable";
import {
  IconDeviceImac,
  IconDeviceMobile,
  IconDeviceTablet,
} from "@tabler/icons-react";

export default {
  args: {
    children: (
      <>
        <SegmentedControlItem
          aria-label="Desktop"
          icon={<IconDeviceImac />}
          key="desktop"
          value="desktop"
        />
        <SegmentedControlItem
          aria-label="Tablet"
          icon={<IconDeviceTablet />}
          key="tablet"
          value="tablet"
        />
        <SegmentedControlItem
          aria-label="Mobile"
          icon={<IconDeviceMobile />}
          key="mobile"
          value="mobile"
        />
      </>
    ),
  },
  component: SegmentedControl,
} as Meta<typeof SegmentedControl>;

type Story = StoryObj<typeof SegmentedControl>;

export const Basic: Story = {
  args: {
    defaultValue: "desktop",
  },
};

export const Multiple: Story = {
  args: {
    defaultValue: ["desktop", "mobile"],
    type: "multiple",
  },
};

export const DisabledGroup: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledItem: Story = {
  args: {
    children: (
      <>
        <SegmentedControlItem
          aria-label="Desktop"
          disabled
          icon={<IconDeviceImac />}
          key="desktop"
          value="desktop"
        />
        <SegmentedControlItem
          aria-label="Tablet"
          icon={<IconDeviceTablet />}
          key="tablet"
          value="tablet"
        />
        <SegmentedControlItem
          aria-label="Mobile"
          icon={<IconDeviceMobile />}
          key="mobile"
          value="mobile"
        />
      </>
    ),
  },
};