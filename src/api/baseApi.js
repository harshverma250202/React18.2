import axios from "axios";
const backendUrl = "";

export const baseApi = axios.create({
  baseURL: `${backendUrl}`,
});
