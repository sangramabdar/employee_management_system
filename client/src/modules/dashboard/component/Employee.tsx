import { Td, Tr } from "@chakra-ui/react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function EmployeeRow(props: any) {
  const { name, age, salary } = props;

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{age}</Td>
      <Td>{salary}</Td>
      <Td p="2">
        <DeleteButton {...props} />
        <UpdateButton {...props} />
      </Td>
    </Tr>
  );
}

export default EmployeeRow;
