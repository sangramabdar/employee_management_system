"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidPathHandler = exports.errorHandlingMiddleWare = void 0;
const response_body_builder_1 = __importDefault(require("./response-body-builder"));
async function errorHandlingMiddleWare(error, request, response, next) {
    let responseBody = new response_body_builder_1.default();
    responseBody.setError(error.message);
    if (!error.statusCode) {
        //to handle implicit error
        response.status(500);
        responseBody.setStatusCode(500);
    }
    else {
        //to handle explicit error
        response.status(error.statusCode);
        responseBody.setStatusCode(error.statusCode);
    }
    return response.json(responseBody);
}
exports.errorHandlingMiddleWare = errorHandlingMiddleWare;
function invalidPathHandler(request, response, next) {
    response.status(404).json({
        error: "invalid path",
    });
}
exports.invalidPathHandler = invalidPathHandler;
