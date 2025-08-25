import axios, { AxiosResponse } from "axios";
import TokenService from "./TokenService";

const hostname = "https://gateway.24.144.77.108.nip.io";
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
