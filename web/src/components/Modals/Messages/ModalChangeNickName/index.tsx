import * as React from "react";
import { useSelector } from "react-redux";
import ModalWrapper from "../../ModalWrapper";
import ItemNickName from "./ItemNickName";
import { RootState } from "@/reducers";

export default function ModalChangeNickName(props) {
  //
  const { users } = props;
  const { user } = useSelector<RootState, RootState>((state) => state);
  //
  return (
    <ModalWrapper
      title="Chỉnh sửa biệt danh"
      className="shadow-sm  border border-solid border-gray-500 py-3 
            bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
            sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-5/12 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="w-full dark:bg-dark-second wrapper-content-right overflow-y-auto"
        style={{ maxHeight: 420 }}
      >
        {[user].concat([...users]).map((item) => {
          return <ItemNickName item={item} key={item?.id} />;
        })}
      </div>
    </ModalWrapper>
  );
}
