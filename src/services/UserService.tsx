import axios from "axios";
import TokenService from "./TokenService";
import { IUser } from "../types/user.type";

const hostname = "http://localhost:8078/user";

TokenService.setHeaders(axios);

function saveUser() {
  return axios
    .post<string>(`${hostname}/saveUser`, null, {})
    .then((response) => {
      return response.data;
    });
}

const getUserByName = async (name: string): Promise<IUser> => {
  const response = await axios.get("/getUserById", { params: { name }});

  const data = response.data;

  return {
    uid: data.id,
    username: data.username,
    bgPic: data.background_picture,
    profilePic: data.profile_picture,
    isBanned: data.is_banned,
  };
};

const getUserByAccessToken = async (): Promise<IUser> => {
  const response = await axios.get(`${hostname}/getUserByToken`);

  const data = response.data;

  return {
    uid: data.id,
    username: data.username,
    bgPic: data.background_picture,
    profilePic: data.profile_picture,
    isBanned: data.is_banned,
  };
};

export { saveUser, getUserByName, getUserByAccessToken };
