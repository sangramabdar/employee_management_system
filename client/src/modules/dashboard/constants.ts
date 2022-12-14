import * as yup from "yup";
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

export { employeeSchema, initialEmloyeeValues };
