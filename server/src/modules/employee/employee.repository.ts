import Database from "../../config/db";

import { ObjectId } from "mongodb";
import { EmployeeDto } from "./employee.dto";

async function getAllEmployees(userId: string) {
  let db = await Database.getDb();

  let employees = await db
    .collection("employees")
    .find({
      createdById: userId,
    })
    .toArray();

  if (!employees) return null;

  return employees;
}

async function getEmployeeById(id: string) {
  let db = await Database.getDb();
  const _id = new ObjectId(id);

  const findObject = { _id };

  const employee = await db.collection("employees").findOne(findObject);

  if (!employee) return null;
  return employee;
}

async function saveEmployee(employee: EmployeeDto) {
  let db = await Database.getDb();

  let insertResult = await db.collection("employees").insertOne(employee);

  return insertResult;
}
async function updateEmployeeById(
  id: string,
  employee: EmployeeDto,
  userId: string
) {
  let db = await Database.getDb();
  let _id = new ObjectId(id);

  let updateObject = { _id, createdById: userId };
  let updateResult = await db.collection("employees").updateOne(updateObject, {
    $set: employee,
  });

  if (updateResult.matchedCount === 0) return null;
  return "updated";
}
async function deleteEmployee(id: string, userId: string) {
  let db = await Database.getDb();
  let _id = new ObjectId(id);

  let deleteObject = { _id, createdById: userId };
  let deleteResult = await db.collection("employees").deleteOne(deleteObject);

  if (deleteResult.deletedCount === 0) return null;

  return "deleted";
}

export {
  getAllEmployees,
  saveEmployee,
  updateEmployeeById,
  deleteEmployee,
  getEmployeeById,
};
