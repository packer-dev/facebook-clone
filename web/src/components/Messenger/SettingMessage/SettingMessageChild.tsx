import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_MESSENGER } from "@/constants/Config";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { Group } from "@/interfaces/Group";

type SettingMessageChildProps = {
  hide?: boolean;
  group?: Group;
};

const SettingMessageChild = (props: SettingMessageChildProps) => {
  //
  const navigation = useNavigate();
  const { hide, group } = props;
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  //
  return (
    <li className="w-full py-1 ">
      <ul className="w-full">
        {hide && (
          <li
            aria-hidden
            onClick={() => navigation(`${PAGE_MESSENGER}/${group?.id}`)}
            className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
            py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
          >
            <div className="flex justity-center w-8">
              <span className="bx bxl-messenger text-xm dark:text-white flex items-center" />
            </div>
            <div className="flex items-center">Mở trong messenger</div>
          </li>
        )}
        <li
          aria-hidden
          onClick={() =>
            modalsDispatch(
              modalsAction.openModalChangeColor(group, (group_) => {})
            )
          }
          className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
          py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justity-center w-8">
            <span className="fab fa-ussunnah text-xm dark:text-white flex items-center" />
          </div>
          <div className="flex items-center">Đổi chủ đề</div>
        </li>
        <li
          aria-hidden
          onClick={() =>
            modalsDispatch(
              modalsAction.openModalChangeEmojii(group, (group_) => {})
            )
          }
          className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justity-center w-8">
            <span className=" text-xm dark:text-white flex items-center">
              {group?.data?.emoji || "🖐️"}
            </span>
          </div>
          <div className="flex items-center">Thay đổi biểu tượng cảm xúc</div>
        </li>
        <li
          aria-hidden
          onClick={() => {
            modalsDispatch(modalsAction.openModalChangeNickName(group));
          }}
          className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
          py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justity-center w-8">
            <span className="fas fa-pen text-xm dark:text-white flex items-center" />
          </div>
          <div className="flex items-center">Chỉnh sửa biệt danh</div>
        </li>
        {!hide && (
          <li
            className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
          >
            <div className="flex justity-center w-8">
              <span className="fas fa-search text-xm dark:text-white flex items-center" />
            </div>
            <div className="flex items-center">
              Tìm kiếm trong cuộc trò chuyện
            </div>
          </li>
        )}
        {hide && (
          <li
            className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
            py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
          >
            <div className="flex justity-center w-8">
              <span className="bx bxs-trash-alt text-xm dark:text-white flex items-center" />
            </div>
            <div className="flex items-center">Xoá cuộc trò chuyện</div>
          </li>
        )}
      </ul>
    </li>
  );
};

export default SettingMessageChild;
