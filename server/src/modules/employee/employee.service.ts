import e, { Request } from "express";
import { NotFound, Unauthorized } from "../../common/helper/exceptions";
import {
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  saveEmployee,
  updateEmployeeById,
} from "./employee.repository";

async function getEmployeesService(req: Request) {
  let employees = await getAllEmployees();
  if (!employees) throw new NotFound("employees");
  return employees;
}

async function getEmployeeService(req: Request) {
  let id = req.params["id"];
  let employee = await getEmployeeById(id);

  if (!employee) throw new NotFound("emlpoyee");

  return employee;
}

async function saveEmployeeService(req: Request) {
  let employee = req.body;
  let user = (req as any).user;

  employee.createdById = user._id;

  let result = await saveEmployee(employee);

  return {
    _id: result.insertedId,
  };
}

async function updateEmployeeService(req: Request) {
  let employee = req.body;
  let id = req.params["id"];
  let userId = (req as any).user._id;

  let employeeExists = await checkEmployeeExistsOrNot(req);

  if (!employeeExists) throw new NotFound("employee");

  let result = await updateEmployeeById(id, employee, userId);

  if (!result) throw new Unauthorized();

  return result;
}

async function deleteEmployeeService(req: Request) {
  let id = req.params["id"];
  let userId = (req as any).user._id;

  let employeeExists = await checkEmployeeExistsOrNot(req);

  if (!employeeExists) throw new NotFound("employee");

  let result = await deleteEmployee(id, userId);

  if (!result) throw new Unauthorized();

  return result;
}

async function checkEmployeeExistsOrNot(req: Request) {
  let id = req.params["id"];
  let employee = await getEmployeeById(id);

  return employee ? true : false;
}

export {
  getEmployeeService,
  deleteEmployeeService,
  getEmployeesService,
  updateEmployeeService,
  saveEmployeeService,
};
