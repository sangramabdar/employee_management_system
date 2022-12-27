import { Button, Center, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

function LinkButton({ children }: any) {
  return (
    <Button
      mt="20px"
      variant="solid"
      backgroundColor="blackAlpha.200"
      width="100px"
      textAlign="center"
      size="lg"
    >
      {children}
    </Button>
  );
}

function Home() {
  return (
    <>
      <Center
        display="flex"
        flexDirection="column"
        bg="blue.400"
        h="100vh"
        color="white"
      >
        <Text color="white" fontSize="3xl" as="b">
          Employee Management System
        </Text>
        <Stack spacing="2">
          <LinkButton>
            <Link to="/login">Login</Link>
          </LinkButton>
          <LinkButton>
            <Link to="/signup">Signup</Link>
          </LinkButton>
        </Stack>
      </Center>
    </>
  );
}

export default Home;
