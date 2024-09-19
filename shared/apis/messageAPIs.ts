import { API_URL } from "../config";
import { Group } from "../interfaces/Group";
import { Message } from "../interfaces/Message";
import { groupModel, messageModel } from "../models";

export const getMessageMain = async (userId: string, currentId: string) => {
  return fetch(
    `${API_URL}/message/get-child?user_id=${userId}&current_id=${currentId}`
  ).then((res) => res.json());
};

export const getMessageListByIdUser = async (userId: string) => {
  return fetch(`${API_URL}/message/list?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getAmountMessage = async (userId: string) => {
  return fetch(`${API_URL}/message/status?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const updateStatusMessage = async (groupId: string, userId: string) => {
  return fetch(
    `${API_URL}/message/update?group_id=${groupId}&user_id=${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

export const sendMessageAPI = async ({
  group,
  message,
}: {
  group: Group;
  message: Message;
}) => {
  const body = {
    group: groupModel(group),
    message: messageModel(message),
  };
  return fetch(`${API_URL}/message/send`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    method: "POST",
  })
    .then((res) => res.json())
    .catch((err) => err);
};
