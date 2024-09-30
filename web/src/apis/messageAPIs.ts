import { API_URL } from "@/constants/Config";
import { Group } from "@/interfaces/Group";
import { Message } from "@/interfaces/Message";
import { groupModel, messageModel } from "@/models";
import axiosInstance from "./api";

export const getMessageMain = async (userId: string, currentId: string) => {
  return axiosInstance(`${API_URL}/message/get-child`, {
    params: {
      user_id: userId,
      current_id: currentId,
    },
  }).then((res) => res.data);
};

export const getMessageListByIdUser = async (userId: string) => {
  return axiosInstance(`${API_URL}/message/list`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      user_id: userId,
    },
  }).then((res) => res.data);
};

export const getAmountMessage = async (userId: string) => {
  return axiosInstance(`${API_URL}/message/status`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      user_id: userId,
    },
  }).then((res) => res.data);
};

export const updateStatusMessage = async (groupId: string, userId: string) => {
  return axiosInstance(`${API_URL}/message/update`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      group_id: groupId,
      user_id: userId,
    },
  }).then((res) => res.data);
};

export const sendMessageAPI = async ({
  group,
  message,
}: {
  group: Group;
  message: Message;
}) => {
  const data = {
    group: groupModel(group),
    message: messageModel(message),
  };
  return axiosInstance(`${API_URL}/message/send`, {
    headers: {
      "Content-Type": "application/json",
    },
    data,
    method: "POST",
  }).then((res) => res.data);
};
