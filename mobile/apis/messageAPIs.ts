import { API_URL } from "../config";

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
