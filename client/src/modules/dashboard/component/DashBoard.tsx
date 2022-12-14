import EmployeeList from "./EmployeeList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import { getEmployees } from "../api/saveEmployee";
import { Status } from "../../../api/constants";
import { Box, Button, useToast } from "@chakra-ui/react";

function DashBoard() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<any[]>([]);
  const [error, setError] = useState("");
  const toast = useToast();

  useEffect(() => {
    setTimeout(() => {
      getEmployeesService();
    }, 2000);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) return;
    navigate("/login");
  });

  const showErrorToast = (message: string) => {
    toast({
      position: "top",
      status: "error",
      description: message,
      duration: 1000,
    });
  };

  const getEmployeesService = async () => {
    const result = await getEmployees();

    if (result.statusCode === 403) {
      showErrorToast("token is expired , plz log in again");
      localStorage.removeItem("token");
      navigate("/", {
        replace: true,
      });
      return;
    }

    if (result.status === Status.ERROR) {
      return;
    }

    if (result.data.length === 0) {
      setError("Nothing");
      return;
    }

    setEmployees(result.data);
  };

  const handleAddEmployee = (employee: any) => {
    setEmployees([...employees, employee]);
  };

  const handleDeleteEmployee = (_id: string) => {
    const updatedEmployees = employees.filter(employee => employee._id !== _id);

    if (updatedEmployees.length === 0) {
      setError("Nothing");
    }
    setEmployees(updatedEmployees);
  };

  const handleUpdateEmployee = () => {
    // const updatedEmployees = employees.map(employee => {
    //   if (employee._id === updatedEmployee._id) {
    //     employee = { ...updatedEmployee };
    //   }
    //   return employee;
    // });
    // setEmployees(updatedEmployees);

    getEmployeesService();
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <Box h="full">
      <Button
        variant="solid"
        onClick={handleLogOut}
        position="fixed"
        top="20px"
        right="20px"
      >
        LogOut
      </Button>

      <AddButton handleAddEmployee={handleAddEmployee} />
      <EmployeeList
        handleDeleteEmployee={handleDeleteEmployee}
        handleUpdateEmployee={handleUpdateEmployee}
        employees={employees}
        error={error}
      />
    </Box>
  );
}

export default DashBoard;
