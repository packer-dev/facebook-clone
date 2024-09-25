import * as React from "react";
import * as constants from "./Constant";
import ModalLogin from "@/modals/Login/ModalLogin";
import ModalWrapperPost from "@/modals/ModalWrapperPost";
import ModalPreviewAvatar from "@/modals/Profile/ModalPreviewAvatar";
import ModalChangeColor from "@/modals/Messages/ModalChangeColor";
import ModalChangeEmoji from "@/modals/Messages/ModalChangeEmoji";
import ModalChangeNickName from "@/modals/Messages/ModalChangeNickName";
import ModalWarning from "@/modals/ModalWarning";
import ModalFavorite from "@/modals/Profile/ModalFavorite";
import ModalEditInformation from "@/modals/Profile/ModalEditInformation";
import ModalRegister from "@/modals/Login/ModalRegister";
import { ModalContextProps } from "./ModalContext";

const AppReducer = (state: ModalContextProps, action: any) => {
  switch (action.type) {
    case constants.OPEN_MODAL_REGISTER:
      return { ...state, data: <ModalRegister /> };
    case constants.LOADING_MODAL:
      return { ...state, loading: action.status };
    case constants.CLOSE_MODAL:
      return { ...state, loading: false, data: null, popover: false };
    case constants.UPDATE_POPOVER:
      return { ...state, popover: action.status };
    case constants.OPEN_MODAL_LOGIN:
      return { ...state, data: <ModalLogin loginFast={action.loginFast} /> };
    case constants.OPEN_MODAL_POST:
      return {
        ...state,
        data: <ModalWrapperPost {...action} />,
      };
    case constants.OPEN_MODAL_PREVIEW_AVATAR:
      return {
        ...state,
        data: <ModalPreviewAvatar image={action.image} user={action.user} />,
      };
    case constants.OPEN_MODAL_CHANGE_COLOR:
      return {
        ...state,
        data: (
          <ModalChangeColor
            group={action.group}
            updateGroup={action.updateGroup}
          />
        ),
      };
    case constants.OPEN_MODAL_CHANGE_EMOJI:
      return {
        ...state,
        data: (
          <ModalChangeEmoji
            group={action.group}
            updateGroup={action.updateGroup}
          />
        ),
      };
    case constants.OPEN_MODAL_CHANGE_NICK_NAME:
      return {
        ...state,
        data: <ModalChangeNickName group={action.groupMessage} />,
      };
    case constants.OPEN_MODAL_DELETE_POST:
      return {
        ...state,
        data: (
          <ModalWarning
            title={action.title}
            content={action.content}
            handleEvent={action.handleEvent}
            button={action.button}
          />
        ),
      };
    case constants.OPEN_MODAL_FAVORITE:
      return {
        ...state,
        data: (
          <ModalFavorite
            updateUserProfile={action.updateUserProfile}
            userProfile={action.userProfile}
          />
        ),
      };
    case constants.OPEN_MODAL_EDIT_INFORMATION:
      return {
        ...state,
        data: (
          <ModalEditInformation
            updateUserProfile={action.updateUserProfile}
            userProfile={action.userProfile}
          />
        ),
      };
    default:
      return { ...state };
  }
};
export default AppReducer;
