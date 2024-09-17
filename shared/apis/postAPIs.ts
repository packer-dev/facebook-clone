import { sendXmlHttpRequest } from "@shared/utils";
import { API_URL } from "mobile/config";

export const createPost = async (formData: any) => {
  return sendXmlHttpRequest(`${API_URL}/post`, formData, "POST").then(
    (res) => res
  );
};

export const editPost = async (formData: any) => {
  return sendXmlHttpRequest(`${API_URL}/post`, formData, "PUT").then(
    (res) => res
  );
};

export const deletePost = async (postId: string) => {
  return fetch(`${API_URL}/post?post_id=${postId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then((res) => res.json());
};

export const getPostByIdUser = async (userId: string, isProfile = "true") => {
  return fetch(
    `${API_URL}/post?user_id=${userId}&is_profile=${isProfile}&offset=0&limit=20`
  ).then((res) => res.json());
};

export const getPostById = async (postId: string) => {
  return fetch(`${API_URL}/post/id?post_id=${postId}`).then((res) =>
    res.json()
  );
};

export const sendFeelPost = async (
  postId: string,
  userId: string,
  type: number
) => {
  return fetch(
    `${API_URL}/feel?post_id=${postId}&user_id=${userId}&type=${type}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  ).then((res) => res.json());
};

export const getMediaByUserId = async (
  userId: string,
  type: any,
  offset = 0,
  limit = 9
) => {
  return fetch(
    `${API_URL}/post/media?user_id=${userId}&type=${type}&offset=${offset}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};
