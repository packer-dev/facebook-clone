import * as React from "react";
import ModalTagPost from "@/modals/ModalTagPost";
import * as constants from "./Constant";
import ModalLocalPost from "@/modals/ModalLocalPost";
import ModalFeelPost from "@/modals/ModalFeelPost";
import ModalPost from "@/modals/ModalPost";
import ModalChooseBackground from "@/modals/ModalChooseBackground";
import ModalEditImageVideo from "@/modals/ModalEditImageVideo";
import ModalAnswerQuestionPost from "@/modals/ModalAnswerQuestionPost";
import { PostContextProps } from "./PostContext";

const AppReducer = (state: PostContextProps, action: any) => {
  switch (action.type) {
    case constants.UPDATE_DATA:
      return { ...state, [action.key]: action.value };
    case constants.OPEN_MODAL_TAG:
      return { ...state, component: <ModalTagPost /> };
    case constants.OPEN_MODAL_LOCAL:
      return { ...state, component: <ModalLocalPost /> };
    case constants.OPEN_MODAL_FEEL:
      return { ...state, component: <ModalFeelPost /> };
    case constants.RETURN_MODAL_POST:
      return { ...state, component: <ModalPost /> };
    case constants.OPEN_MODAL_CHOOSE_BACKGROUND:
      return { ...state, component: <ModalChooseBackground /> };
    case constants.OPEN_MODAL_IMAGE_VIDEO_EDIT:
      return { ...state, component: <ModalEditImageVideo /> };
    case constants.OPEN_MODAL_ANSWER_QUESTION:
      return { ...state, component: <ModalAnswerQuestionPost /> };
    case constants.UPDATE_DATA_FULL:
      return { ...action.data };
    default:
      return { ...state };
  }
};
export default AppReducer;
