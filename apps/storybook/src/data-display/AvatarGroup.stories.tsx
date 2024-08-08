import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarGroup } from "@optiaxiom/react";

export default {
  component: AvatarGroup,
} as Meta<typeof AvatarGroup>;

type Story = StoryObj<typeof AvatarGroup>;

const users = [
  {
    email: "",
    id: "AM",
    name: "Assign to me",
    src: "https://images.unsplash.com/photo-1715029005043-e88d219a3c48?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    email: "emily.chen@example.com",
    id: "EC",
    name: "Emily Chen",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    email: "michael.rodriguez@example.com",
    id: "MR",
    name: "Michael Rodriguez",
  },
  {
    email: "sarah.patel@example.com",
    id: "SP",
    name: "Sarah Patel",
  },
];

export const Horizontal: Story = {
  render: () => {
    return (
      <AvatarGroup maxItems={2} size="lg">
        {users.map((user) => (
          <Avatar
            colorScheme="blue"
            key={user.id}
            name={user.name}
            src={user.src}
          >
            {user.id}
          </Avatar>
        ))}
      </AvatarGroup>
    );
  },
};

export const withTooltipHorizontal: Story = {
  render: () => {
    return (
      <AvatarGroup maxItems={2} withTooltip>
        {users.map((user) => (
          <Avatar
            colorScheme="blue"
            key={user.id}
            name={user.name}
            size="lg"
            src={user.src}
          >
            {user.id}
          </Avatar>
        ))}
      </AvatarGroup>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    return (
      <AvatarGroup orientation="vertical" size="lg">
        {users.map((user) => (
          <Avatar
            colorScheme="blue"
            key={user.id}
            name={user.name}
            src={user.src}
          >
            {user.id}
          </Avatar>
        ))}
      </AvatarGroup>
    );
  },
};
