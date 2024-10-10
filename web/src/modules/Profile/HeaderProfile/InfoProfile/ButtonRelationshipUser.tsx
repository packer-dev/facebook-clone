import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, getUserChat, getUserProfile } from "@/reducers";
import {
  updateDataUserChat,
  UserChatReduxProps,
  ZoomUserChatProps,
} from "@/reducers/userChat";
import { Button } from "@/components/ui/button";
import { generateUUID } from "@/utils";
import { UserProfileReduxProps } from "@/reducers/userProfile";

type ButtonRelationshipUserProps = {
  status: number;
  label: string;
  show?: boolean;
  onClick?: (status: number) => Promise<void>;
  icon: string;
};

const ButtonRelationshipUser = ({
  status,
  onClick,
  show,
  label,
  icon,
}: ButtonRelationshipUserProps) => {
  const { zoom, minimize } = useSelector<RootState, UserChatReduxProps>(
    getUserChat
  );
  const [loading, setLoading] = useState(false);
  const { userProfile } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  const dispatch = useDispatch();
  return (
    <div className="flex-row flex gap-2">
      <Button
        onClick={async () => {
          setLoading(true);
          await onClick(status);
          setLoading(false);
        }}
        disabled={loading}
      >
        <i
          className={`${
            loading
              ? "fa-spinner fa-solid fa-spin text-white"
              : `${icon} dark:text-white`
          } text-xl mr-1`}
        />
        {label}
      </Button>
      {show && (
        <Button
          onClick={() => {
            const indexMinimize = minimize.findIndex(
              (data) => userProfile.id === data.id
            );
            const indexZoom = zoom.findIndex(
              (data) => userProfile.id === data.id
            );
            const newData: ZoomUserChatProps = {
              id: generateUUID(),
              user: userProfile,
              is_new: false,
            };
            if (indexZoom === -1 && indexMinimize === -1) {
              if (zoom.length === 2) {
                dispatch(
                  updateDataUserChat({
                    key: "minimize",
                    value: [...minimize, zoom[0].group],
                  })
                );
                let clone = [...zoom];
                clone[0] = newData;
                dispatch(
                  updateDataUserChat({ key: "zoom", value: [...clone] })
                );
              } else {
                dispatch(
                  updateDataUserChat({ key: "zoom", value: [...zoom, newData] })
                );
              }
            } else if (indexMinimize !== -1 && zoom.length !== 2) {
              dispatch(
                updateDataUserChat({ key: "zoom", value: [...zoom, newData] })
              );
              dispatch(
                updateDataUserChat({
                  key: "minimize",
                  value: [...minimize].filter(
                    (data) => data.id !== userProfile.id
                  ),
                })
              );
            }
          }}
          variant="secondary"
        >
          <i className="bx bxl-messenger text-xl dark:text-white mr-1" />
          <span>Message</span>
        </Button>
      )}
    </div>
  );
};

export default ButtonRelationshipUser;
