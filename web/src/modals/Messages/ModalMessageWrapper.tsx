import React, { ReactNode, useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { updateGroupById } from "@/apis/groupAPIs";
import { Group } from "@/interfaces/Group";
import { useSelector } from "react-redux";
import { getSocket, getUser, RootState } from "@/reducers";
import { Socket } from "socket.io-client";
import ModalWrapper from "../ModalWrapper";
import { Button } from "@/components/ui/button";
import { dataFakeMessage } from "@/utils";
import { User } from "@/interfaces/User";
import { sendMessageAPI } from "@/apis/messageAPIs";

export type ModalMessageWrapperProps = {
  updateGroup?: (group: Group) => void;
  group?: Group;
  children?: ReactNode;
  value?: string;
  type: "color" | "emoji";
  title: string;
  className?: string;
};

const ModalMessageWrapper = ({
  children,
  value,
  updateGroup,
  group,
  type,
  title,
  className = "",
}: ModalMessageWrapperProps) => {
  //
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  //
  return (
    <ModalWrapper title={title}>
      {children}
      <div className="text-right py-3">
        <Button
          onClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          variant="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={async () => {
            modalsDispatch(modalsAction.loadingModal(true));
            const result = await updateGroupById({
              ...group,
              data: { ...group.data, [type]: value },
            });
            const message = dataFakeMessage({
              user,
              text: "",
              type: type === "color" ? 4 : 5,
            });
            const response = await sendMessageAPI({ group, message });
            socket.emit(`send-message`, {
              groupId: group?.id,
              [type]: value,
              message: response?.message,
              type,
            });
            updateGroup(result);
            modalsDispatch(modalsAction.closeModal());
          }}
          type="button"
          className="mx-2"
          disabled={!value}
        >
          Save
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default ModalMessageWrapper;
