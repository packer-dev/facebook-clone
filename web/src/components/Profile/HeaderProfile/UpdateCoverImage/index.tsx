import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, getUser } from "@/reducers";
import ButtonComponent from "@/components/ButtonComponent";
import { User } from "@/interfaces/User";

export default function UpdateCoverImage(props) {
  //
  const user = useSelector<RootState, User>(getUser);
  const [loading, setLoading] = useState(false);
  const { setCover, cover } = props;
  const handleUpdateCoverImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("multipartFile", cover);
    formData.append("id", new Date().getTime().toString());
    formData.append("publicId", "Covers/");
    formData.append("typeFile", "image");
  };
  //
  return (
    <div className="w-full p-4 flex bg-black bg-opacity-50 fixed top-16 z-50 justify-between items-center">
      <p className="text-white flex items-center text-sm">
        <i className="bx bx-globe text-2xl mr-2"></i>Ảnh bìa của bạn hiển thị
        công khai.
      </p>
      <div className="flex items-center gap-2">
        <ButtonComponent
          handleClick={() => setCover(user.cover)}
          className="rounded-md p-1.5 md:px-8 md:py-2 font-semibold text-white bg-black bg-opacity-20"
        >
          Huỷ
        </ButtonComponent>
        <ButtonComponent
          handleClick={handleUpdateCoverImage}
          disabled={loading}
          className=" rounded-md md:px-10 md:py-2 p-1.5 font-semibold bg-main text-white"
        >
          {loading ? (
            <i className="bx bx-shape-circle fa-spin"></i>
          ) : (
            "Lưu thay đổi"
          )}
        </ButtonComponent>
      </div>
    </div>
  );
}
