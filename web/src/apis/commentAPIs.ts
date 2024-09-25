import { API_URL } from "@/constants/Config";

export const sendComment = async (formData: any) => {
  return fetch(`${API_URL}/comment`, {
    body: formData,
    method: "POST",
  }).then((res) => res.json());
};

export const deleteComment = async (postId: string, commentId: string) => {
  return fetch(`${API_URL}/comment?post_id=${postId}&comment_id=${commentId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const getCommentByPost = async (postId: string) => {
  return fetch(
    `${API_URL}/comment/id?post_id=${postId}&offset=0&limit=10`
  ).then((res) => res.json());
};
