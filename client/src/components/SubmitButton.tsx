import { Flex, Button } from "@chakra-ui/react";

interface SubmitButtonProps {
  title: string;
}

function SubmitButton({ title }: SubmitButtonProps) {
  return (
    <Flex justifyContent="center">
      <Button
        mt="20px"
        variant="solid"
        backgroundColor="blackAlpha.200"
        type="submit"
      >
        {title}
      </Button>
    </Flex>
  );
}

export default SubmitButton;
