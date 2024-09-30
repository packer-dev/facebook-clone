import { API_URL } from "@/constants/Config";
import axiosInstance from "./api";

export const uploadMedia = async (formData: any) =>
  axiosInstance(`${API_URL}/upload/media`, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
    data: formData,
  }).then((res) => res.data);
