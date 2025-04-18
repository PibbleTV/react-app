import axios, { AxiosResponse } from "axios";


const hostname = "http://localhost:8078/auth";

axios.defaults.withCredentials = true;

function login(email: string, password: string): Promise<string> {
  return axios
    .post<string>(`${hostname}/login`, { email, password })
    .then((response: AxiosResponse<string>) => response.data);
}

function register(
  username: string,
  email: string,
  password: string,
  defaultBackgroundPic: string,
  defaultProfilePic: string
): Promise<string> {
  return axios

    .post<string>(`${hostname}/register`, {

      username,
      email,
      password,
      defaultBackgroundPic,
      defaultProfilePic,
    })
    .then((response: AxiosResponse<string>) => {
      return response.data;
    });
}


export { login, register };

