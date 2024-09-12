import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { PAGE_LOGIN } from "@/constants/Config";
import WrapperAuthenination from "../WrapperAuthenination";

export default function TypeNewPassword() {
  //
  const [passwordNew, setPasswordNew] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  //
  return (
    <WrapperAuthenination title="Chọn mật khẩu mới" hideFormLogin={true}>
      <div className="w-full my-2 p-2 px-5">
        <p>
          Tạo mật khẩu mới có tối thiểu 6 ký tự. Mật khẩu mạnh là mật khẩu được
          kết hợp từ các ký tự, số và dấu câu.
        </p>
        <div className="w-full flex my-2 items-center">
          <InputComponent
            type="password"
            handleChange={(data) => setPasswordNew(data)}
            placeholder="Nhập mật khẩu mới..."
            className="w-full p-3 rounded-md border-2"
          />
        </div>
      </div>
      <hr></hr>
      <div className="w-full py-3 mt-1 flex justify-end items-center">
        <div className="">
          <ButtonComponent
            link={PAGE_LOGIN}
            className="px-4 font-semibold mr-3 py-2 rounded-lg bg-gray-300 text-gray-800"
          >
            Huy
          </ButtonComponent>
          <ButtonComponent
            disabled={passwordNew.length < 6}
            handleClick={async () => {
              setLoading(true);
              navigation(PAGE_LOGIN);
            }}
            loading={loading}
            className="px-4 py-2 mr-5 rounded-lg bg-main text-white"
          >
            Tiếp tục
          </ButtonComponent>
        </div>
      </div>
    </WrapperAuthenination>
  );
}
