import { BASE_URL } from "../../../common/api/constants";
import { postRequest } from "../../../common/api/requests";

interface SignUpInfo {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SIGNUP_URL = BASE_URL + "/auth/signup";

async function signUpUser(signUpInfo: SignUpInfo | null) {
  const result = await postRequest(SIGNUP_URL, signUpInfo);
  return result;
}

export { signUpUser };
export type { SignUpInfo };
