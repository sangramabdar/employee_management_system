import {
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
import React, { useState, useEffect } from "react";
import { Status } from "../../../api/constants";
import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";
import { saveEmployee } from "../api/saveEmployee";
import * as yup from "yup";
import { useToast, Box } from "@chakra-ui/react";

const employeeSchema = yup.object().shape({
  name: yup.string().required("Required"),
  age: yup
    .number()
    .min(18, "age must be greater than 18")
    .max(60, "age must be less than 60")
    .required("Required")
    .integer("age must be integer"),
  salary: yup.number().required("Required").integer("salary must be integer"),
});

const initialEmloyeeValues = {
  name: "",
  age: "",
  salary: "",
};

function AddButton({ handleAddEmployee }: any) {
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = (values: any) => {
    values["age"] = Number.parseInt(values["age"]);
    values["salary"] = Number.parseInt(values["salary"]);
    setEmployeeInfo({ ...values });
    setIsDisabled(true);
    showLoadingToast();
  };

  const showLoadingToast = () => {
    toast({
      status: "loading",
      description: "Processing",
      duration: null,
      position: "top",
    });
  };

  const showErrorToast = () => {
    toast({
      status: "error",
      description: "Something went wrong",
      duration: 1000,
      position: "top",
    });
  };

  const showSuccessToast = () => {
    toast({
      status: "success",
      description: "Added",
      duration: 2000,
      position: "top",
    });
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
    initialValues: initialEmloyeeValues,
    onSubmit: onSubmit,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [employeeInfo, setEmployeeInfo] = useState<any | null>(null);

  useEffect(() => {
    if (!employeeInfo) return;
    setTimeout(() => {
      saveEmployeeService(employeeInfo);
    }, 1000);
  }, [employeeInfo]);

  const saveEmployeeService = async (employeeInfo: any) => {
    const result = await saveEmployee(employeeInfo);

    setEmployeeInfo(null);
    setIsDisabled(false);
    toast.closeAll();

    if (result.status === Status.ERROR) {
      showErrorToast();
      return;
    }

    showSuccessToast();
    resetForm();
    onClose();
    handleAddEmployee(result.data);
  };

  return (
    <Box p="5">
      <Button onClick={onOpen}>Add Employee</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => {
          resetForm();
          onClose();
        }}
      >
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
                value={values.age!!}
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
                value={values.salary!!}
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
    </Box>
  );
}

export default AddButton;
