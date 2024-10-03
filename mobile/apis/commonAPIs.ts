import { API_URL } from "@/config";
import axiosInstance from "./api";

export const getNavbarAmountNew = async (user_id: string) => {
  return axiosInstance(`${API_URL}/navbar/amount`, {
    params: { user_id },
  }).then((res) => res.data);
};
