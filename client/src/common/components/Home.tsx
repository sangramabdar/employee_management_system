import { Box, Center, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LinkButton({ children }: any) {
  return (
    <Box width="100px" backgroundColor="whiteAlpha.500" textAlign="center">
      {children}
    </Box>
  );
}

function Home() {
  return (
    <Center bg="blue.400" h="100vh" color="white">
      <Stack spacing="2">
        <LinkButton>
          <Link to="/login">login</Link>
        </LinkButton>
        <LinkButton>
          <Link to="/signup">signup</Link>
        </LinkButton>
      </Stack>
    </Center>
  );
}

export default Home;
