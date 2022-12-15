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

const BASE_URL = "https://employee-management-system-two.vercel.app/api";

// const BASE_URL = "http://localhost:5050/api";

export { Status, BASE_URL };
export type { Result };
