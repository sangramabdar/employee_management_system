enum Status {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

interface Result {
  data?: any;
  status?: Status;
  error?: string;
  statusCode?: number;
}

const BASE_URL = "http://localhost:8080/api";

export { Status, BASE_URL };
export type { Result };
