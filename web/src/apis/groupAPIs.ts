import { API_URL } from "@/constants/Config";
import { Group } from "../interfaces/Group";
import { groupModel } from "../models";

export const getGroupById = async (groupId: string) => {
  return fetch(`${API_URL}/group/id?group_id=${groupId}`).then((res) =>
    res.json()
  );
};

export const getGroupAndMessageByIdGroup = async (groupId: string) => {
  return fetch(`${API_URL}/group?group_id=${groupId}`).then((res) =>
    res.json()
  );
};

export const getListGroupByUserId = async (userId: string) => {
  return fetch(`${API_URL}/message/list?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const updateInfoGroupByGroup = async (formData: any) => {
  return fetch(`${API_URL}/group/image`, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
    method: "POST",
  }).then((res) => res.json());
};

export const updateGroupById = async (group: Group) => {
  return fetch(`${API_URL}/group/update`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(groupModel(group)),
    method: "POST",
  }).then((res) => res.json());
};
