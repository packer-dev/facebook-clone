import { API_URL } from "../config";

export const uploadMedia = async (formData: any) => {
  return fetch(`${API_URL}/upload/media`, {
    method: "POST",
    body: formData,
  }).then((res) => res.json());
};
