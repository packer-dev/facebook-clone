import React, { useState, useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ModalWrapper from "../../ModalWrapper";
import ItemEditInformation from "./ItemEditInformation";
import ButtonComponent from "@/components/ButtonComponent";

export default function ModalEditInformation({ updateUserProfile }) {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const [description, setDescription] = useState(JSON.parse("{}"));
  //
  return (
    <ModalWrapper
      title={"Chỉnh sửa chi tiết"}
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 
        shadow-lv1 dark:border-dark-third dark:bg-dark-third px-3"
    >
      <hr />
      <p className="mt-1 font-semibold">Chỉnh sửa phần giới thiệu</p>
      <p className="text-gray-500 dark:text-gray-300 text-sm mt-1 mb-4">
        Chi tiết bạn chọn sẽ hiển thị công khai.
      </p>
      <ItemEditInformation
        title="Công việc"
        name="work"
        placeholder={`Nhập công việc của bạn`}
        description={description}
        setDescription={setDescription}
        value={description?.work || ""}
      />
      <ItemEditInformation
        title="Học vấn"
        name="study"
        placeholder={`Nhập học vấn của bạn`}
        description={description}
        setDescription={setDescription}
        value={description?.study || ""}
      />
      <ItemEditInformation
        title="Sống tại"
        name="live"
        placeholder={`Nhập nơi sống của bạn`}
        description={description}
        setDescription={setDescription}
        value={description?.live || ""}
      />
      <ItemEditInformation
        title="Đến từ"
        name="from"
        placeholder={`Nhập quê quán của bạn`}
        description={description}
        setDescription={setDescription}
        value={description?.from || ""}
      />
      <ItemEditInformation
        title="Tình trạng"
        name="status"
        placeholder={`Nhập tình trạng của bạn`}
        description={description}
        setDescription={setDescription}
        value={description?.status || ""}
      />
      <hr />
      <div className="text-right pt-3">
        <ButtonComponent
          handleClick={() => modalsDispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer border-none font-semibold text-white rounded-lg p-2 mx-2 bg-gray-500"
        >
          Hủy
        </ButtonComponent>
        <ButtonComponent
          handleClick={async () => {
            modalsDispatch(modalsAction.loadingModal(true));
            modalsDispatch(modalsAction.closeModal());
          }}
          type="button"
          className={`cursor-pointer w-1/4 border-none font-semibold bg-main text-white rounded-lg p-2 mx-2 `}
        >
          Lưu
        </ButtonComponent>
      </div>
    </ModalWrapper>
  );
}
