import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Tbody,
  Td,
  Spinner,
  Flex,
  Heading,
  Box,
  Tfoot,
  Th,
} from "@chakra-ui/react";

import { Employee } from "../api/employee";
import EmployeeRow from "./Employee";
import { Stack, Center } from "@chakra-ui/react";

interface EmployeeListProps {
  employees: Employee[] | null;
  handleDeleteEmployee: Function;
  handleUpdateEmployee: Function;
  error: string;
}

function EmployeeList({
  employees,
  handleDeleteEmployee,
  handleUpdateEmployee,
  error,
}: EmployeeListProps) {
  if (employees?.length === 0)
    return (
      <Flex justifyContent="center" alignItems="center" direction="column">
        {error ? (
          <Heading>Not Found</Heading>
        ) : (
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            <Heading textAlign="center">Loading</Heading>
          </Stack>
        )}
      </Flex>
    );

  return (
    <TableContainer
      m="10"
      bg="blue.300"
      borderRadius="2xl"
      color="white"
      maxWidth={{
        lg: "800px",
        sm: "600px",
      }}
      margin="auto"
      my="2"
      rounded="md"
    >
      <Table variant="simple" size="md">
        <TableCaption color="white">Employee Table</TableCaption>
        <Thead>
          <Tr>
            <Td>Name</Td>
            <Td>Age</Td>
            <Td>Salary</Td>
            <Td>Actions</Td>
          </Tr>
        </Thead>
        <Tbody>
          {employees?.slice(0, employees.length).map((employee: any) => {
            return (
              <EmployeeRow
                handleDeleteEmployee={handleDeleteEmployee}
                handleUpdateEmployee={handleUpdateEmployee}
                key={employee._id}
                {...employee}
              />
            );
          })}
        </Tbody>
        {/* <Tfoot>
          {employees?.slice(employees.length - 1).map(employee => {
            return (
              <EmployeeRow
                handleDeleteEmployee={handleDeleteEmployee}
                handleUpdateEmployee={handleUpdateEmployee}
                key={employee._id}
                {...employee}
              />
            );
          })}
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
}

export default EmployeeList;
