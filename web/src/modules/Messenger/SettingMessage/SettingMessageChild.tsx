import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_MESSENGER } from "@/constants/Config";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { Group } from "@/interfaces/Group";

type SettingMessageChildProps = {
  hide?: boolean;
  group?: Group;
  updateGroup?: (group: Group) => void;
};

const SettingMessageChild = (props: SettingMessageChildProps) => {
  //
  const navigation = useNavigate();
  const { hide, group, updateGroup } = props;
  const { modalsDispatch, modalsAction } = useContext(ModalContext);

  //
  return (
    <li className="w-full py-1 ">
      <ul className="w-full">
        {hide && (
          <li
            aria-hidden
            onClick={() => navigation(`${PAGE_MESSENGER}/${group?.id}`)}
            className="w-full rounded-lg hover:bg-gray-100 dark:hover:bg-dark-third 
            py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
          >
            <div className="flex justify-center w-8">
              <span className="bx bxl-messenger text-xm dark:text-white flex items-center" />
            </div>
            <div className="flex items-center">Open in Messenger</div>
          </li>
        )}
        <li
          aria-hidden
          onClick={() =>
            modalsDispatch(
              modalsAction.openModalChangeColor(group, updateGroup)
            )
          }
          className="w-full rounded-lg hover:bg-gray-100 dark:hover:bg-dark-third 
          py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justify-center w-8">
            <span className="fab fa-ussunnah text-xm dark:text-white flex items-center" />
          </div>
          <div className="flex items-center">Change Theme</div>
        </li>
        <li
          aria-hidden
          onClick={() =>
            modalsDispatch(
              modalsAction.openModalChangeEmoji(group, updateGroup)
            )
          }
          className="w-full rounded-lg hover:bg-gray-100 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justify-center w-8">
            <span className=" text-xm dark:text-white flex items-center">
              {group?.data?.emoji || "🖐️"}
            </span>
          </div>
          <div className="flex items-center">Change Emoji</div>
        </li>
        <li
          aria-hidden
          onClick={() => {
            modalsDispatch(
              modalsAction.openModalChangeNickName(group, updateGroup)
            );
          }}
          className="w-full rounded-lg hover:bg-gray-100 dark:hover:bg-dark-third 
          py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justify-center w-8">
            <span className="fas fa-pen text-xm dark:text-white flex items-center" />
          </div>
          <div className="flex items-center">Edit Nickname</div>
        </li>
        {!hide && (
          <li
            className="w-full rounded-lg hover:bg-gray-100 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
          >
            <div className="flex justify-center w-8">
              <span className="fas fa-search text-xm dark:text-white flex items-center" />
            </div>
            <div className="flex items-center">Search in Conversation</div>
          </li>
        )}
        {hide && (
          <li
            aria-hidden
            onClick={() => modalsDispatch(modalsAction.openModalDeveloper())}
            className="w-full rounded-lg hover:bg-gray-100 dark:hover:bg-dark-third 
            py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
          >
            <div className="flex justify-center w-8">
              <span className="bx bxs-trash-alt text-xm dark:text-white flex items-center" />
            </div>
            <div className="flex items-center">Delete Conversation</div>
          </li>
        )}
      </ul>
    </li>
  );
};

export default SettingMessageChild;
