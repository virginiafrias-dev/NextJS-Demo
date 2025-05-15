import { LoginResponseType } from "@/types/auth.types";
import httpInternalApi from "../common/http.internal.service";
import httpExternalApi from "../common/http.external.service";

class AuthAPI {
  login = async (
    username: string,
    password: string
  ): Promise<LoginResponseType> =>
    httpExternalApi.httpPost(`/auth/login`, { username, password });

  loginInternal = async (
    username: string,
    password: string
  ): Promise<LoginResponseType> =>
    httpInternalApi.httpPostPublic(`/auth/login`, { username, password });
}

const authAPI = new AuthAPI();
export default authAPI;
