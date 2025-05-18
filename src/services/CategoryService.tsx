import axios, { AxiosResponse } from "axios";
import TokenService from "./TokenService";

const hostname = "http://api-gateway-tcp:8078";
const categoryEndpoint = `${hostname}/category`;

TokenService.setHeaders(axios);

interface Category {
  id: number;
  name: string;
  image: string;
}

function getAllCategories(): Promise<Category[]> {
  return axios
    .get<Category[]>(`${categoryEndpoint}/getAll`)
    .then((response: AxiosResponse<Category[]>) => response.data);
}

export default getAllCategories;
