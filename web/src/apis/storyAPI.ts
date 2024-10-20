import { API_URL } from "@/constants/Config";
import axiosInstance from "./api";

export const createStory = async (formData: FormData) => {
  return axiosInstance(`${API_URL}/story`, {
    method: "POST",
    data: formData,
  }).then((res) => res.data);
};

export const getStoryByUser = async (user_id: string) => {
  return axiosInstance(`${API_URL}/story`, {
    params: {
      user_id,
    },
  }).then((res) => res.data);
};

export const deleteStory = async (story_id: string, user_id: string) => {
  return axiosInstance(`${API_URL}/story`, {
    params: {
      story_id,
      user_id,
    },
    method: "DELETE",
  });
};

export const getStoryProfile = async (
  user_id: string,
  limit: number,
  offset: number
) => {
  return axiosInstance(`${API_URL}/story/profile`, {
    params: {
      user_id,
      limit,
      offset,
    },
  }).then((res) => res.data);
};
