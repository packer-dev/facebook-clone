import { API_URL } from "@/constants/Config";
import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 20000,
});

const applyToken = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const handleTokenError = (error: any) => {
  console.error("Request error:", error);
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(applyToken, handleTokenError);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          break;
        case 403:
          console.error("Access denied. You do not have permission.");
          alert("You do not have permission to access this resource.");
          break;
        case 404:
          console.error("Resource not found:", data.message || "Not Found");
          alert("The requested resource was not found.");
          break;
        case 500:
          console.error(
            "Server error:",
            data.message || "Internal Server Error"
          );
          alert("An internal server error occurred. Please try again later.");
          break;
        default:
          console.error(
            `Error: ${status}`,
            data.message || "An error occurred"
          );
          alert("An error occurred. Please try again.");
          break;
      }
    } else if (error.request) {
      console.error("No response from server:", error.request);
      alert("No response from the server. Please check your network.");
    } else {
      console.error("Error:", error.message);
      alert("An unexpected error occurred.");
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
