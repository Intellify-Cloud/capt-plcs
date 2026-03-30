import axios from "axios";
import { useSessionStore } from "@/store/useSessionStore";
import { useAlertStore } from "@/store/useAlertStore";

export const broadsheetApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BROADSHEET_API_URL,
});

broadsheetApi.interceptors.request.use((config) => {
  const token = useSessionStore.getState().token;
  if (token) {
    config.headers["Authorization"] = `Shuttle.Access token=${token}`;
  }
  return config;
});

broadsheetApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const push = useAlertStore.getState().push;
    if (error.response?.status === 401) {
      push("Unauthorized");
    } else {
      const message =
        error.response?.data?.message ??
        error.response?.data ??
        error.message ??
        "An unexpected error occurred.";
      push(typeof message === "string" ? message : JSON.stringify(message));
    }
    return Promise.reject(error);
  }
);
