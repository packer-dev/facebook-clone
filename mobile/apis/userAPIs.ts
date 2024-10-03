import { AVATAR_DEFAULT, COVER_DEFAULT, API_URL } from "@/config";
import { User } from "@/interfaces/User";
import { userModel } from "@/models";
import axiosInstance from "./api";

export const getUserById = async (userId: string) =>
  axiosInstance(`${API_URL}/user/id`, {
    params: {
      user_id: userId,
    },
  }).then((res) => res.data);

export const registerAPI = async (param: any) =>
  axiosInstance(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: userModel({ ...param, avatar: AVATAR_DEFAULT, cover: COVER_DEFAULT }),
  }).then((res) => res.data);

export const loginAPI = async (param: any) =>
  axiosInstance(`${API_URL}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    data: param,
    method: "POST",
  }).then((res) => res.data);

export const updateUser = async (user: User) =>
  axiosInstance(`${API_URL}/user`, {
    headers: {
      "content-type": "application/json",
    },
    method: "PUT",
    data: userModel(user),
  }).then((res) => res.data);

export const getFriendsByUserId = async (userId: string) =>
  axiosInstance(`${API_URL}/friends`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: { user_id: userId },
    data: [],
    method: "POST",
  }).then((res) => res.data);

export const getSuggestFriendByUserId = async (userId: string) =>
  axiosInstance(`${API_URL}/suggest-friend`, {
    params: {
      user_id: userId,
    },
  }).then((res) => res.data);

export const sendRelationship = async (data: any) =>
  axiosInstance(`${API_URL}/relationship`, {
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    method: "POST",
  }).then((res) => res.data);

export const checkRelationship = async (user1: string, user2: string) =>
  axiosInstance(`${API_URL}/relationship`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      user1,
      user2,
    },
  }).then((res) => res.data);

export const getFriendUser = async (userId: string, status: any) =>
  axiosInstance(`${API_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      user_id: userId,
      status,
    },
  }).then((res) => res.data);

export const updateProfileUser = async (formData: any) =>
  axiosInstance(`${API_URL}/upload-profile`, {
    data: formData,
    method: "POST",
  }).then((res) => res.data);

export const searchUser = async (
  search: string = "",
  offset: number = 0,
  limit: number = 10
) =>
  axiosInstance(`${API_URL}/user/search`, {
    params: {
      search,
      offset,
      limit,
    },
  }).then((res) => res.data);

export const checkTokenExpired = async (token: string) =>
  axiosInstance(`${API_URL}/jwt/check-token-expired`, {
    params: {
      token,
    },
  }).then((res) => res.data);
