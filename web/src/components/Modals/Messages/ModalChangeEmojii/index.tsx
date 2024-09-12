import React, { useContext, useState } from "react";
import ModalWrapper from "../../ModalWrapper";
import emojii from "@/config/emojii";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ButtonComponent from "@/components/ButtonComponent";

export default function ModalChangeEmojii(props: any) {
  //
  const listCategoryFun = () => {
    let listCategory = [];
    emojii.forEach((element) => {
      let index = listCategory.findIndex(
        (item) => element.category === item.category
      );
      if (index === -1)
        listCategory.push({
          thumnail: element.emoji,
          category: element.category,
        });
    });
    return listCategory;
  };
  const { modalsAction, modalsDispatch } = useContext(ModalContext);
  const listCategory = listCategoryFun();
  const [categoryActive, setCategoryActive] = useState(
    listCategory[0].category
  );
  const showCategoryAll = listCategory.map((item, index) => (
    <li
      aria-hidden
      onClick={() => setCategoryActive(item.category)}
      className={`flex justify-center py-2 px-3 mx-0.5 rounded-lg text-xl cursor-pointer ${
        categoryActive === item.category
          ? " bg-gray-300 dark:bg-dark-third"
          : " hover:bg-gray-300 dark:hover:bg-dark-third"
      }`}
      key={item?.id}
    >
      {item.thumnail}
    </li>
  ));
  const getEmojiiByCategory = (category) => {
    let listEmojii = [];
    emojii.forEach((element) => {
      if (element.category === category) listEmojii.push(element.emoji);
    });
    return listEmojii;
  };
  const [icon, setIcon] = useState("");
  //
  return (
    <ModalWrapper
      title="Biểu tượng cảm xúc"
      className="shadow-sm border border-solid border-gray-500 py-3 bg-white w-full fixed 
            z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform 
            -translate-x-1/2 -translate-y-1/2"
    >
      <ul className="flex w-full m-2 ">{showCategoryAll}</ul>
      <div
        className="w-full dark:bg-dark-second wrapper-content-right flex overflow-y-auto flex-wrap justify-center"
        style={{ maxHeight: 320 }}
      >
        {getEmojiiByCategory(categoryActive).map((item, index) => (
          <div
            aria-hidden
            onClick={() => setIcon(item)}
            className={`w-12 h-12 flex justify-center text-2xl cursor-pointer items-center
                         ${
                           item !== icon
                             ? "hover:bg-gray-300 dark:hover:bg-dark-third"
                             : "bg-gray-300 dark:bg-dark-third"
                         }`}
            key={item?.id}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="text-right pt-3">
        <ButtonComponent
          handleClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5 border-none font-semibold text-blue-500 rounded-lg p-2 mx-2"
        >
          Hủy
        </ButtonComponent>
        <ButtonComponent
          handleClick={async () => {
            modalsDispatch(modalsAction.loadingModal(true));

            modalsDispatch(modalsAction.closeModal());
          }}
          type="button"
          className={`w-1/4 border-none font-semibold text-white rounded-lg p-2 mx-2 ${
            !icon ? "bg-gray-500 cursor-not-allowed " : "bg-blue-500"
          }`}
          disabled={!!icon}
        >
          Lưu
        </ButtonComponent>
      </div>
    </ModalWrapper>
  );
}
