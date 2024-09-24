import * as React from "react";
import ModalWrapper from "../../ModalWrapper";
import ItemNickName from "./ItemNickName";
import { Group } from "@/interfaces/Group";

const ModalChangeNickName = ({ group }: { group: Group }) => {
  return (
    <ModalWrapper
      title="Edit nickname"
      className="shadow-sm  border border-solid border-gray-500 py-3 
      bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
      sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-5/12 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full dark:bg-dark-second wrapper-content-right overflow-y-auto max-h-[420px]">
        {group?.members?.map((item) => {
          return <ItemNickName item={item} key={item?.id} />;
        })}
      </div>
    </ModalWrapper>
  );
};
export default ModalChangeNickName;
