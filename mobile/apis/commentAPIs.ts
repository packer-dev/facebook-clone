import { API_URL } from "@/config";
import axiosInstance from "./api";

export const sendComment = async (formData: any) => {
  return axiosInstance(`${API_URL}/comment`, {
    data: formData,
    method: "POST",
  }).then((res) => res.data);
};

export const deleteComment = async (postId: string, commentId: string) => {
  return axiosInstance(`${API_URL}/comment`, {
    params: {
      post_id: postId,
      comment_id: commentId,
    },
    method: "DELETE",
  }).then((res) => res.data);
};

export const getCommentByPost = async (
  postId: string,
  offset: number = 0,
  limit: number = 5
) => {
  return axiosInstance(`${API_URL}/comment/id`, {
    params: {
      post_id: postId,
      offset,
      limit,
    },
  }).then((res) => res.data);
};
