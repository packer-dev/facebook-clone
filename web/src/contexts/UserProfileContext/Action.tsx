import { getUserById } from "@/apis/userAPIs";
import * as constants from "./Constant";

export const loadUserProfileRequest = async (
  dispatch: any,
  actions: any,
  id
) => {
  const result = await getUserById(id);
  if (result.data) {
    dispatch(actions.updateData("userProfile", result.data));
  } else {
    dispatch(actions.updateData("userProfile", ""));
  }
};

export const updateData = (key, value) => {
  return {
    type: constants.UPDATE_DATA,
    key,
    value,
  };
};
