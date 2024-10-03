import { API_URL } from "@/config";
import axiosInstance from "./api";

export const createPost = async (formData: any) => {
  return axiosInstance(`${API_URL}/post`, {
    data: formData,
    method: "POST",
  }).then((res) => res.data);
};

export const editPost = async (formData: any) => {
  return axiosInstance(`${API_URL}/post`, {
    data: formData,
    method: "PUT",
  }).then((res) => res.data);
};

export const deletePost = async (postId: string) => {
  return axiosInstance(`${API_URL}/post`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      post_id: postId,
    },
    method: "DELETE",
  }).then((res) => res.data);
};

export const getPostByIdUser = async (
  userId: string,
  mode = "true",
  offset = 0,
  limit = 20
) => {
  return axiosInstance(`${API_URL}/post`, {
    params: {
      user_id: userId,
      mode,
      offset,
      limit,
    },
  }).then((res) => res.data);
};

export const getPostById = async (postId: string) => {
  return axiosInstance(`${API_URL}/post/id`, {
    params: {
      post_id: postId,
    },
  }).then((res) => res.data);
};

export const sendFeelPost = async (
  postId: string,
  userId: string,
  type: number
) => {
  return axiosInstance(`${API_URL}/feel`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    params: {
      post_id: postId,
      user_id: userId,
      type,
    },
  }).then((res) => res.data);
};

export const getMediaByUserId = async (
  userId: string,
  type: any,
  offset = 0,
  limit = 9
) => {
  return axiosInstance(`${API_URL}/post/media`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      user_id: userId,
      type,
      offset,
      limit,
    },
  }).then((res) => res.data);
};
