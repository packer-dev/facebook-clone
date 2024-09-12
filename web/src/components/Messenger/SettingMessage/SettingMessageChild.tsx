import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_MESSENGER } from "@/constants/Config";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { RootState } from "@/reducers";

export default function SettingMessageChild(props) {
  //
  const navigation = useNavigate();
  const { socket, user } = useSelector<RootState, RootState>((state) => state);
  const { hide, item, groupMessage, setGroupMessage } = props;
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const handleChange = (key, value) => {
    const dt = {
      userMessage: user,
      groupMessageMessage: {
        ...groupMessage,
        [key]: value,
      },
    };
    socket.emit(`sendChangeBackground`, dt);
    socket.emit(`sendChangeEmojii`, dt);
  };
  //
  return (
    <li className="w-full py-1 ">
      <ul className="w-full">
        {hide && (
          <li
            aria-hidden
            onClick={() => {
              navigation(
                `${PAGE_MESSENGER}/${
                  groupMessage ? groupMessage.queryGroupMessage : ""
                }`
              );
            }}
            className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
          >
            <div className="flex justity-center w-8">
              <span className="bx bxl-messenger text-xm dark:text-white flex items-center"></span>
            </div>
            <div className="flex items-center">Mở trong messenger</div>
          </li>
        )}
        <li
          aria-hidden
          onClick={() =>
            modalsDispatch(
              modalsAction.openModalChangeColor(
                groupMessage,
                (groupMessage) => {
                  setGroupMessage(groupMessage);
                  handleChange("color", groupMessage.color);
                }
              )
            )
          }
          className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justity-center w-8">
            <span className="fab fa-ussunnah text-xm dark:text-white flex items-center"></span>
          </div>
          <div className="flex items-center">Đổi chủ đề</div>
        </li>
        <li
          aria-hidden
          onClick={() =>
            modalsDispatch(
              modalsAction.openModalChangeEmojii(
                groupMessage,
                (groupMessage) => {
                  setGroupMessage(groupMessage);
                  handleChange("emoji", groupMessage.emoji);
                }
              )
            )
          }
          className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justity-center w-8">
            <span className=" text-xm dark:text-white flex items-center">
              {groupMessage.emoji}
            </span>
          </div>
          <div className="flex items-center">Thay đổi biểu tượng cảm xúc</div>
        </li>
        <li
          aria-hidden
          onClick={() =>
            modalsDispatch(
              modalsAction.openModalChangeNickName(
                [item],
                groupMessage,
                setGroupMessage
              )
            )
          }
          className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                    py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
        >
          <div className="flex justity-center w-8">
            <span className="fas fa-pen text-xm dark:text-white flex items-center"></span>
          </div>
          <div className="flex items-center">Chỉnh sửa biệt danh</div>
        </li>
        {!hide && (
          <li
            className="w-full rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
          >
            <div className="flex justity-center w-8">
              <span className="fas fa-search text-xm dark:text-white flex items-center"></span>
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
              <span className="bx bxs-trash-alt text-xm dark:text-white flex items-center"></span>
            </div>
            <div className="flex items-center">Xoá cuộc trò chuyện</div>
          </li>
        )}
      </ul>
    </li>
  );
}
