import React, { ReactNode, useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { updateGroupById } from "@/apis/groupAPIs";
import { Group } from "@/interfaces/Group";
import { useSelector } from "react-redux";
import { getSocket, RootState } from "@/reducers";
import { Socket } from "socket.io-client";
import ModalWrapper from "../ModalWrapper";
import { Button } from "@/components/ui/button";

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
  const socket = useSelector<RootState, Socket>(getSocket);
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  //
  return (
    <ModalWrapper
      title={title}
      className={
        className ||
        `shadow-sm border border-solid border-gray-500 py-3 bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
        sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform -translate-x-1/2 -translate-y-1/2`
      }
    >
      {children}
      <div className="text-right pt-3">
        <Button
          onClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5 border-none font-semibold text-blue-500 rounded-lg p-2 mx-2"
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
            socket.emit(`send-message`, {
              groupId: group?.id,
              [type]: value,
              type,
            });
            updateGroup(result);
            modalsDispatch(modalsAction.closeModal());
          }}
          type="button"
          className={`cursor-pointer w-1/4 border-none font-semibold text-white rounded-lg p-2 mx-2 ${
            !value ? "bg-gray-500" : " bg-main"
          }`}
          disabled={!value}
        >
          Save
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default ModalMessageWrapper;
