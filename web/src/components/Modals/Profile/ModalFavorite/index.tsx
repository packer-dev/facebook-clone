import React, { useContext, useState, useRef } from "react";
import favorites from "@/config/favorites";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ModalWrapper from "../../ModalWrapper";
import ItemFavorite from "./ItemFavorite";
import InputComponent from "@/components/InputComponent";
import ButtonComponent from "@/components/ButtonComponent";

export default function ModalFavorite({ updateUserProfile }: any) {
  //
  const [content, setContent] = useState({
    // choose: JSON.parse(user.favorites),
    choose: [],
    list: [],
    search: "",
  });
  const ref = useRef();
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  //
  return (
    <ModalWrapper
      title={"Sở thích"}
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 
        shadow-lv1 dark:border-dark-third dark:bg-dark-third px-3"
    >
      <div className="w-full" style={{ height: 500 }}>
        <div className="my-2 w-full ">
          <InputComponent
            type={"text"}
            search={true}
            className={`p-2 w-full border-2 border-solid 
                     border-gray-200 rounded-full`}
            ref={ref}
            placeholder={"Bạn làm gì để giải trí?"}
            handleChange={(data) => {
              const get = favorites.filter(
                (dt) => dt.name.toLowerCase().indexOf(data.toLowerCase()) !== -1
              );
              setContent({ ...content, list: get, search: data });
            }}
          />
        </div>
        <hr />
        {content.choose.length > 0 && (
          <>
            <p className="text-gray-500 darK:text-gray-300 py-2 font-semibold">
              SỞ THÍCH ĐÃ CHỌN
            </p>
            <div
              className="p-2.5 h-24 max-h-24 overflow-y-auto w-full border-2 border-solid 
                        border-gray-200 rounded-lg"
            >
              <div className="w-full flex flex-wrap gap-1.5">
                {content.choose.map((item) => (
                  <ItemFavorite
                    content={content}
                    setContent={setContent}
                    key={item.id}
                    item={item}
                    choose
                    ref={ref}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        <div className="w-full" style={{ height: 300 }}>
          {content.list.length > 0 && content.search.length > 0 && (
            <>
              <p className="text-gray-500 dark:text-gray-300 pl-2.5 my-1 font-bold">
                KẾT QUẢ CHO {`"${content.search}"`}
              </p>
              <div
                className="p-2.5 overflow-y-auto w-full border-2 border-solid 
                        border-gray-200 rounded-lg"
                style={{ height: 270, maxHeight: 270 }}
              >
                <div className="w-full gap-1.5 flex flex-wrap">
                  {[...content.list]
                    .filter((dt) => {
                      let index = [...content.choose].findIndex(
                        (data) => data.id === dt.id
                      );
                      return index === -1;
                    })
                    .map((item) => (
                      <ItemFavorite
                        content={content}
                        setContent={setContent}
                        key={item.id}
                        item={item}
                        choose={false}
                        ref={ref}
                      />
                    ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <hr />
      <div className="text-right pt-3">
        <ButtonComponent
          handleClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer border-none font-semibold text-white  
                    rounded-lg p-2 mx-2 bg-gray-500"
        >
          Hủy
        </ButtonComponent>
        <ButtonComponent
          handleClick={async () => {
            modalsDispatch(modalsAction.loadingModal(true));

            modalsDispatch(modalsAction.closeModal());
          }}
          type="button"
          className={`cursor-pointer w-1/4 border-none font-semibold bg-main 
                     text-white rounded-lg p-2 mx-2 `}
        >
          Lưu
        </ButtonComponent>
      </div>
    </ModalWrapper>
  );
}
