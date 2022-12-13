import { BASE_URL } from "../../../common/api/constants";
import { postRequest } from "../../../common/api/requests";

interface LoginInfo {
  email: string;
  password: string;
}

const LOGIN_URL = BASE_URL + "/auth/login";

async function loginUser(loginInfo: LoginInfo | null) {
  const result = await postRequest(LOGIN_URL, loginInfo);
  return result;
}

export { loginUser };
export type { LoginInfo };
