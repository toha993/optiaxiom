import { Box, Stack } from "@optiaxiom/react";

import { Container } from "../Container";

export function App() {
  return (
    <Stack>
      <Container h="96">
        <Box size="1/2">size=1/2</Box>
      </Container>

      <Container h="96">
        <Box size="2/3">size=2/3</Box>
      </Container>

      <Container h="96">
        <Box size="full">size=full</Box>
      </Container>
    </Stack>
  );
}