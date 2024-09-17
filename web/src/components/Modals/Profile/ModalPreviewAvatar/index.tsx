import React, { useContext } from "react";
import ModalWrapper from "../../ModalWrapper";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ButtonComponent from "@/components/ButtonComponent";

export default function ModalPreviewAvatar(props) {
  const { image } = props;
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const handleUpdateAvatar = async () => {
    modalsDispatch(modalsAction.loadingModal(true));
    const formData = new FormData();
    formData.append("multipartFile", image);
    formData.append("id", new Date().getTime().toString());
    formData.append("publicId", "Avatars/");
    formData.append("typeFile", "image");

    modalsDispatch(modalsAction.closeModal());
  };
  return (
    <ModalWrapper
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 w-11/12 sm:w-10/12 md:w-2/3 
        lg:w-2/3 xl:w-1/2 shadow-lv1 dark:border-dark-third dark:bg-dark-third"
      title={"Cập nhật ảnh đại diện"}
    >
      <div className="w-full mx-auto my-5">
        <div
          className="mx-auto relative w-full flex justify-center"
          style={{ maxHeight: 450, minHeight: 320 }}
        >
          <img
            src={image?.name && URL.createObjectURL(image)}
            alt=""
            className="h-full"
            // crop={crop} onChange={newCrop => setCrop(newCrop)} circularCrop
            style={{
              maxHeight: 450,
              minHeight: 320,
              minWidth: 320,
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-around w-3/4 mx-auto gap-1">
        <span className="bx bx-minus text-2xl" />
        <input
          type={"range"}
          min={0}
          max={100}
          className="flex-1"
          value={0}
          onChange={(e) => ""}
        />
        <span className="bx bx-plus text-2xl" />
      </div>
      <p className="text-gray-600 py-2 pl-5 border-b-2 border-solid border-gray-200 font-semibold flex items-center">
        <i className="bx bx-globe text-2xl mr-2" />
        <span>Ảnh bìa của bạn hiển thị công khai.</span>
      </p>
      <div className="w-full py-2 mt-2 flex items-center px-4 justify-end ">
        <div className="flex items-center gap-2">
          <ButtonComponent
            handleClick={() => modalsDispatch(modalsAction.closeModal())}
            className=" rounded-md px-8 py-2 font-semibold  text-white bg-black bg-opacity-20"
          >
            Huỷ
          </ButtonComponent>
          <ButtonComponent
            handleClick={handleUpdateAvatar}
            className=" rounded-md px-10 py-2 font-semibold bg-main text-white"
          >
            Lưu thay đổi
          </ButtonComponent>
        </div>
      </div>
    </ModalWrapper>
  );
}
