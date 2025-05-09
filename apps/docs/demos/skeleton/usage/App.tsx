import { Flex, Skeleton } from "@optiaxiom/react";

export function App() {
  return (
    <Flex w="full">
      <Skeleton />
      <Skeleton h="56" />
      <Skeleton circle size="56" />
    </Flex>
  );
}
