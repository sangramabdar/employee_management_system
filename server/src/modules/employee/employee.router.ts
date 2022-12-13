import { Router } from "express";
import { validateEmployeeDto } from "./employee.dto";

import { validateId, validateToken } from "../../common/helper/validation";
import EmployeeController from "./employee.controller";

const employeeRouter = Router();

employeeRouter.use("/", validateToken);
employeeRouter.use("/:id", validateId);

employeeRouter.get("/:id", EmployeeController.getEmployee);
employeeRouter.get("", EmployeeController.getAllEmployees);
employeeRouter.post("/", validateEmployeeDto, EmployeeController.saveEmployee);
employeeRouter.put(
  "/:id",
  validateEmployeeDto,
  EmployeeController.updateEmployee
);
employeeRouter.delete("/:id", EmployeeController.deleteEmployee);

export default employeeRouter;
