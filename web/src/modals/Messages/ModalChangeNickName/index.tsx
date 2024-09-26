import * as React from "react";
import { Group } from "@/interfaces/Group";
import ModalWrapper from "@/modals/ModalWrapper";
import ItemNickName from "./ItemNickName";

type ModalChangeNickNameProps = {
  updateGroup: (group: Group) => void;
  group: Group;
};
const ModalChangeNickName = ({
  group,
  updateGroup,
}: ModalChangeNickNameProps) => {
  return (
    <ModalWrapper title="Edit nickname">
      <div className="w-full dark:bg-dark-second wrapper-content-right overflow-y-auto max-h-[420px]">
        {group?.members?.map((item) => {
          return (
            <ItemNickName
              item={item}
              key={item?.id}
              updateGroup={updateGroup}
              group={group}
            />
          );
        })}
      </div>
    </ModalWrapper>
  );
};
export default ModalChangeNickName;
