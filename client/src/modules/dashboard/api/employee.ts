import { BASE_URL } from "../../../api/constants";
import {
  postRequest,
  getRequest,
  deleteRequest,
  putRequest,
} from "../../../api/requests";

interface Employee {
  name: string;
  age: number;
  salary: number;
}

const DEFAULT_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const EMPLOYEE_URL = BASE_URL + "/employees";

async function saveEmployee(employee: Employee) {
  const accessToken = localStorage.getItem("token");

  const result = await postRequest(EMPLOYEE_URL, employee, {
    Authorization: "Bearer " + accessToken,
    ...DEFAULT_HEADERS,
  });

  return result;
}

async function getEmployees() {
  const accessToken = localStorage.getItem("token");

  const result = await getRequest(EMPLOYEE_URL, {
    Authorization: "Bearer " + accessToken,
    ...DEFAULT_HEADERS,
  });

  return result;
}

async function deleteEmployee(id: string) {
  const accessToken = localStorage.getItem("token");

  const result = await deleteRequest(EMPLOYEE_URL + "/" + id, {
    Authorization: "Bearer " + accessToken,
    ...DEFAULT_HEADERS,
  });

  return result;
}
async function updateEmployee(id: string, employee: any) {
  const accessToken = localStorage.getItem("token");

  const result = await putRequest(EMPLOYEE_URL + "/" + id, employee, {
    Authorization: "Bearer " + accessToken,
    ...DEFAULT_HEADERS,
  });

  return result;
}

export { saveEmployee, getEmployees, deleteEmployee, updateEmployee };
export type { Employee };
