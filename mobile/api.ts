import { messageModel, groupModel, userModel } from "./models";
import { API_URL } from "./config";
import { User } from "./interfaces/User";
import { Group } from "./interfaces/Group";
import { Message } from "./interfaces/Message";

export const registerAPI = async (param: User) =>
  fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userModel(param)),
  }).then((res) => res.json());

export const loginAPI = async (param: { email: string; password: string }) =>
  fetch(`${API_URL}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
    method: "POST",
  }).then((res) => res.json());

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
