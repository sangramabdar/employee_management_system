import { Button, useToast } from "@chakra-ui/react";
import { Status } from "../../../api/constants";
import { deleteEmployee } from "../api/saveEmployee";

function DeleteButton(props: any) {
  const { _id, handleDeleteEmployee } = props;
  const toast = useToast();

  const showSuccessToast = () => {
    toast({
      status: "success",
      description: "Deleted",
      duration: 2000,
      position: "top-right",
    });
  };

  const deleteEmployeeService = async () => {
    const result = await deleteEmployee(_id);
    if (result.status === Status.ERROR) {
      return;
    }
    showSuccessToast();
    handleDeleteEmployee(_id);
  };

  const handleOnDelete = () => {
    deleteEmployeeService();
  };

  return (
    <Button mr="5" onClick={handleOnDelete}>
      Delete
    </Button>
  );
}
export default DeleteButton;
