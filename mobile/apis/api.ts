import { API_URL } from "@/config";
import axios, { InternalAxiosRequestConfig } from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

const applyToken = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const token = await SecureStore.getItemAsync("token");
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
          Alert.alert("You do not have permission to access this resource.");
          break;
        case 404:
          console.error("Resource not found:", data.message || "Not Found");
          Alert.alert("The requested resource was not found.");
          break;
        case 500:
          console.error(
            "Server error:",
            data.message || "Internal Server Error"
          );
          Alert.alert(
            "An internal server error occurred. Please try again later."
          );
          break;
        default:
          console.error(
            `Error: ${status}`,
            data.message || "An error occurred"
          );
          Alert.alert("An error occurred. Please try again.");
          break;
      }
    } else if (error.request) {
      console.error("No response from server:", error.request);
      Alert.alert("No response from the server. Please check your network.");
    } else {
      console.error("Error:", error.message);
      Alert.alert("An unexpected error occurred.");
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
