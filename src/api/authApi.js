import { baseApi } from "./baseApi";

export const register = async ({
  username,
  email,
  password,
  phone,
}) => {
  const response = await baseApi.post("/api/auth/local/register", {
    username,
    email,
    password,
    phone,
  });
  return {
    data: response.data,
  };
};
