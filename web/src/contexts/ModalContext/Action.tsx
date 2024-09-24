import { Group } from "@/interfaces/Group";
import * as constants from "./Constant";
import { User } from "@/interfaces/User";
import { Post } from "@/interfaces/Post";
import { Media } from "@/interfaces/Media";

export const openModalRegister = () => {
  return {
    type: constants.OPEN_MODAL_REGISTER,
  };
};

export const openModalAddAccountLogin = () => {
  return {
    type: constants.OPEN_MODAL_ADD_ACCOUNT_LOGIN,
  };
};

export const closeModal = () => {
  return {
    type: constants.CLOSE_MODAL,
  };
};

export const loadingModal = (status?: boolean) => {
  return {
    type: constants.LOADING_MODAL,
    status,
  };
};

export const openModalLogin = (loginFast?: boolean) => {
  return {
    type: constants.OPEN_MODAL_LOGIN,
    loginFast,
  };
};

export const openModalPost = ({
  post,
  medias,
  files,
}: {
  post?: Post;
  medias?: Media[];
  files?: FileList;
}) => {
  return {
    type: constants.OPEN_MODAL_POST,
    post,
    medias,
    files,
  };
};

export const updatePopover = (status: boolean) => {
  return {
    type: constants.UPDATE_POPOVER,
    status,
  };
};

export const openModalPreviewAvatar = (image: File, user: User) => {
  return {
    type: constants.OPEN_MODAL_PREVIEW_AVATAR,
    image,
    user,
  };
};

export const openModalChangeColor = (
  group: Group,
  updateGroup: (group: Group) => void
) => {
  return {
    type: constants.OPEN_MODAL_CHANGE_COLOR,
    group,
    updateGroup,
  };
};

export const openModalChangeEmoji = (
  groupMessage: Group,
  setGroupMessage: Function
) => {
  return {
    type: constants.OPEN_MODAL_CHANGE_EMOJI,
    groupMessage,
    setGroupMessage,
  };
};

export const openModalChangeNickName = (groupMessage: Group) => {
  return {
    type: constants.OPEN_MODAL_CHANGE_NICK_NAME,
    groupMessage,
  };
};

export const openModalDeletePost = (
  title: string,
  content?: string,
  button?: any,
  handleEvent?: Function
) => {
  return {
    type: constants.OPEN_MODAL_DELETE_POST,
    title,
    content,
    button,
    handleEvent,
  };
};

export const openModalFavorite = (
  updateUserProfile: (user: User) => void,
  userProfile: User
) => {
  return {
    type: constants.OPEN_MODAL_FAVORITE,
    updateUserProfile,
    userProfile,
  };
};

export const openModalEditInformation = (
  updateUserProfile: (user: User) => void,
  userProfile: User
) => {
  return {
    type: constants.OPEN_MODAL_EDIT_INFORMATION,
    updateUserProfile,
    userProfile,
  };
};
