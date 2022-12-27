import {
  useToast,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { Status } from "../../../api/constants";
import InputField from "../../../components/InputField";
import { updateEmployee } from "../api/employee";
import { employeeSchema } from "../constants";
import { useNavigate } from "react-router-dom";

function UpdateButton(props: any) {
  const { _id, name, age, salary } = props;

  const navigate = useNavigate();
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [employeeInfo, setEmployeeInfo] = useState<any | null>(null);

  const initialEmloyeeValues = {
    name: name as string,
    age: age as number,
    salary: salary as number,
  };

  const onSubmit = (values: any) => {
    values["age"] = Number.parseInt(values["age"]);
    values["salary"] = Number.parseInt(values["salary"]);
    setEmployeeInfo({ ...values });
    setIsDisabled(true);
    showLoadingToast();
  };

  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    resetForm,
  } = useFormik({
    validationSchema: employeeSchema,
    onSubmit: onSubmit,
    initialValues: initialEmloyeeValues,
    enableReinitialize: true,
  });

  const showLoadingToast = () => {
    toast({
      status: "loading",
      description: "Updating",
      duration: null,
      position: "top",
    });
  };

  const showErrorToast = (message: string) => {
    toast({
      status: "error",
      description: message,
      duration: 1000,
      position: "top",
    });
  };

  const showSuccessToast = () => {
    toast({
      status: "success",
      description: "Updated",
      duration: 2000,
      position: "top",
    });
  };

  useEffect(() => {
    if (!employeeInfo) return;
    updateEmployeeService(employeeInfo);
  }, [employeeInfo]);

  const updateEmployeeService = async (employeeInfo: any) => {
    const result = await updateEmployee(_id, employeeInfo);

    setEmployeeInfo(null);
    setIsDisabled(false);
    toast.closeAll();

    if (result.statusCode === 403) {
      showErrorToast("token is expired , plz log in again");
      localStorage.removeItem("token");
      navigate("/", {
        replace: true,
      });
      return;
    }

    if (result.status === Status.ERROR) {
      showErrorToast(result.error!!);
      return;
    }

    showSuccessToast();
    resetForm();
    onClose();

    let { handleDeleteEmployee, handleUpdateEmployee, ...otherProps } = props;

    handleUpdateEmployee({ ...otherProps, ...employeeInfo });
  };

  const handleOnClose = () => {
    resetForm();
    onClose();
  };

  return (
    <>
      <Button backgroundColor="blackAlpha.200" onClick={onOpen}>
        Update
      </Button>
      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <InputField
                label="Name"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                error={errors.name}
                touched={touched.name}
              />
              <InputField
                label="Age"
                name="age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age as any}
                error={
                  errors.age?.includes("number")
                    ? "age must be number"
                    : errors.age
                }
                touched={touched.age}
              />
              <InputField
                label="Salary"
                name="salary"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.salary as any}
                error={
                  errors.salary?.includes("number")
                    ? "salary must be number"
                    : errors.salary
                }
                touched={touched.salary}
              />
              <Flex justifyContent="center">
                <Button
                  mt="20px"
                  variant="solid"
                  backgroundColor="blackAlpha.200"
                  type="submit"
                  isDisabled={isDisabled}
                >
                  submit
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateButton;
