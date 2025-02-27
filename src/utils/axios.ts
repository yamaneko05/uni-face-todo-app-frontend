import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.API_SERVER_HOST,
  adapter: "fetch",
  fetchOptions: { cache: "no-cache" },
});
