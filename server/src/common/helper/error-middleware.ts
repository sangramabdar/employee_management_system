import { Response, Request, NextFunction } from "express";
import { CustomError } from "./exceptions";
import ResponseBodyBuilder from "./response-body-builder";

async function errorHandlingMiddleWare(
  error: CustomError | any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  let responseBody = new ResponseBodyBuilder<string>();

  responseBody.setError(error.message);

  if (!error.statusCode) {
    //to handle implicit error
    response.status(500);
    responseBody.setStatusCode(500);
  } else {
    //to handle explicit error
    response.status(error.statusCode);
    responseBody.setStatusCode(error.statusCode);
  }

  return response.json(responseBody);
}

function invalidPathHandler(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.status(404).json({
    error: "invalid path",
  });
}

export { errorHandlingMiddleWare, invalidPathHandler };
