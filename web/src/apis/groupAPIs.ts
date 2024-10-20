import { API_URL } from "@/constants/Config";
import { Group } from "../interfaces/Group";
import { groupModel } from "../models";
import axiosInstance from "./api";

export const getGroupById = async (groupId: string) => {
  return axiosInstance(`${API_URL}/group`, {
    params: {
      group_id: groupId,
    },
  }).then((res) => res.data);
};

// export const getGroupAndMessageByIdGroup = async (groupId: string) => {
//   return axiosInstance(`${API_URL}/group`, {
//     params: {
//       group_id: groupId,
//     },
//   }).then((res) => res.data);
// };

export const getListGroupByUserId = async (userId: string) => {
  return axiosInstance(`${API_URL}/message/list`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      user_id: userId,
    },
  }).then((res) => res.data);
};

export const updateInfoGroupByGroup = async (formData: any) => {
  return axiosInstance(`${API_URL}/group/image`, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
    method: "POST",
  }).then((res) => res.data);
};

export const updateGroupById = async (group: Group) => {
  return axiosInstance(`${API_URL}/group/update`, {
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(groupModel(group)),
    method: "POST",
  }).then((res) => res.data);
};
