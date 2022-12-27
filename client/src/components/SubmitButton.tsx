import { Flex, Button } from "@chakra-ui/react";

interface SubmitButtonProps {
  title: string;
  disabled: boolean;
}

function SubmitButton({ title, disabled }: SubmitButtonProps) {
  return (
    <Flex justifyContent="center">
      <Button
        mt="20px"
        variant="solid"
        backgroundColor="blackAlpha.200"
        type="submit"
        disabled={disabled}
      >
        {title}
      </Button>
    </Flex>
  );
}

export default SubmitButton;
