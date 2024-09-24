import * as React from "react";
import * as constants from "./Constant";
import ModalLogin from "@/components/Modals/Login/ModalLogin";
import ModalWrapperPost from "@/components/Modals/ModalWrapperPost";
import ModalPreviewAvatar from "@/components/Modals/Profile/ModalPreviewAvatar";
import ModalChangeColor from "@/components/Modals/Messages/ModalChangeColor";
import ModalChangeEmojii from "@/components/Modals/Messages/ModalChangeEmojii";
import ModalChangeNickName from "@/components/Modals/Messages/ModalChangeNickName";
import ModalWarning from "@/components/Modals/ModalWarning";
import ModalFavorite from "@/components/Modals/Profile/ModalFavorite";
import ModalEditInformation from "@/components/Modals/Profile/ModalEditInformation";
import ModalRegister from "@/components/Modals/Login/ModalRegister";

const AppReducer = (state, action) => {
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
            groupMessage={action.groupMessage}
            setGroupMessage={action.setGroupMessage}
          />
        ),
      };
    case constants.OPEN_MODAL_CHANGE_EMOJII:
      return {
        ...state,
        data: (
          <ModalChangeEmojii
            groupMessage={action.groupMessage}
            setGroupMessage={action.setGroupMessage}
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
