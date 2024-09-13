import React, { useContext, useState } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import * as userChatsAction from "@/actions/userChat/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers";
import ButtonComponent from "@/components/ButtonComponent";

export default function ButtonRelationshipUser(props) {
  //
  const {
    userChat: { zoom },
  } = useSelector<RootState, RootState>((state) => state);
  const [loading, setLoading] = useState(false);
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  const dispatch = useDispatch();
  //
  return (
    <>
      <ButtonComponent
        handleClick={() => {
          setLoading(true);
          const timeOut = setTimeout(() => {
            props.handleClick(props.status);
            setLoading(false);
          }, 500);
          return () => {
            clearTimeout(timeOut);
          };
        }}
        className={`flex items-center h-10 px-2 ${
          props.blue ? "bg-main text-white" : "bg-gray-200"
        } rounded-lg mr-2 font-semibold text-sm`}
      >
        <i
          className={`${
            loading
              ? "bx bx-shape-circle fa-spin text-main"
              : `${props.icon} dark:text-white`
          } text-xl mr-1`}
        ></i>
        {props.label}
      </ButtonComponent>
      {props.show && (
        <ButtonComponent
          handleClick={() => {
            dispatch(
              userChatsAction.updateData("zoom", [...zoom, userProfile])
            );
          }}
          className="flex items-center h-10 px-2 bg-main rounded-lg mr-2 text-white font-semibold text-sm"
        >
          <i className="bx bxl-messenger text-xl dark:text-white mr-1"></i>
          <span>Nhắn tin</span>
        </ButtonComponent>
      )}
    </>
  );
}
