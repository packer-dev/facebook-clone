import React, { useContext, useState } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState, getUserChat } from "@/reducers";
import { updateDataUserChat, UserChatReduxProps } from "@/reducers/userChat";
import { Button } from "@/components/ui/button";

export default function ButtonRelationshipUser(props) {
  //
  const { zoom } = useSelector<RootState, UserChatReduxProps>(getUserChat);
  const [loading, setLoading] = useState(false);
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  const dispatch = useDispatch();
  //
  return (
    <div className="flex-row flex gap-2">
      <Button
        onClick={() => {
          setLoading(true);
          const timeOut = setTimeout(() => {
            props.handleClick(props.status);
            setLoading(false);
          }, 500);
          return () => {
            clearTimeout(timeOut);
          };
        }}
      >
        <i
          className={`${
            loading
              ? "bx bx-shape-circle fa-spin text-main"
              : `${props.icon} dark:text-white`
          } text-xl mr-1`}
        />
        {props.label}
      </Button>
      {props.show && (
        <Button
          onClick={() =>
            dispatch(
              updateDataUserChat({ key: "zoom", value: [...zoom, userProfile] })
            )
          }
          variant="secondary"
        >
          <i className="bx bxl-messenger text-xl dark:text-white mr-1" />
          <span>Message</span>
        </Button>
      )}
    </div>
  );
}
