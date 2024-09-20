import { UPDATE_DATA } from "@/constants/UserChatConstant";

export const updateData = (key: string, value: any) => {
  return {
    type: UPDATE_DATA,
    key,
    value,
  };
};
