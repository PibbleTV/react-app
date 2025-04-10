import axios, { AxiosResponse } from "axios";

const hostname = "http://localhost:8078/api-category";

interface Category {
  id: number;
  name: string;
  image: string;
}

function getAllCategories(): Promise<Category[]> {
  return axios
    .get<Category[]>(`${hostname}/getAll`)
    .then((response: AxiosResponse<Category[]>) => response.data);
}

export default getAllCategories;
