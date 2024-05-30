import { Avatar, Flex } from "@optiaxiom/react";

export function App() {
  return (
    <Flex flexDirection="row" gap="10">
      <Avatar
        alt="John Snow"
        size="xl"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      >
        JS
      </Avatar>
      <Avatar
        alt="Daenerys Targaryen"
        size="lg"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      >
        DT
      </Avatar>
      <Avatar alt="Jamie Lannister" size="md">
        JL
      </Avatar>
      <Avatar size="sm">+2</Avatar>
      <Avatar name="Ned Stark" size="xs">
        NS
      </Avatar>
    </Flex>
  );
}
