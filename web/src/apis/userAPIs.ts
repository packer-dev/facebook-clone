import { API_URL } from "@/constants/Config";
import { User } from "../interfaces/User";

export const getUserById = async (userId: string) => {
  return fetch(`${API_URL}/user/id?user_id=${userId}`).then((res) =>
    res.json()
  );
};

export const registerAPI = async (param: any) =>
  fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(param),
  }).then((res) => res.json());

export const loginAPI = async (param: any) =>
  fetch(`${API_URL}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
    method: "POST",
  }).then((res) => res.json());

export const updateUser = async (user: User) => {
  return fetch(`${API_URL}/user`, {
    headers: {
      "content-type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const getFriendsByUserId = async (userId: string) => {
  return fetch(`${API_URL}/friends?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([]),
    method: "POST",
  }).then((res) => res.json());
};

export const getSuggestFriendByUserId = async (userId: string) => {
  return fetch(`${API_URL}/suggest-friend?user_id=${userId}`).then((res) =>
    res.json()
  );
};

export const sendRelationship = async (body: any) => {
  return fetch(`${API_URL}/relationship`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    method: "POST",
  }).then((res) => res.json());
};

export const checkRelationship = async (user1: string, user2: string) => {
  return fetch(`${API_URL}/relationship?user1=${user1}&user2=${user2}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getFriendUser = async (userId: string, status: any) => {
  return fetch(`${API_URL}/users?user_id=${userId}&status=${status}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const updateProfileUser = async (formData: any) => {
  return fetch(`${API_URL}/upload-profile`, {
    body: formData,
    method: "POST",
  }).then((res) => res.json());
};

export const searchUser = async (
  search: string = "",
  offset: number = 0,
  limit: number = 10
) => {
  return fetch(
    `${API_URL}/user/search?search=${search}&offset=${offset}&limit=${limit}`
  ).then((res) => res.json());
};
