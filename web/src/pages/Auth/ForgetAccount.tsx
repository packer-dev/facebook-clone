import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { PAGE_LOGIN, PAGE_RECOVER_ACCOUNT } from "@/constants/Config";
import WrapperAuthenination from "../WrapperAuthenination";

export default function ForgetAccount() {
  //
  const navigation = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //
  return (
    <WrapperAuthenination title="Tìm tài khoản của bạn">
      <div className="w-full px-5 mb-3">
        <p className="py-3">
          Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.
        </p>
        <InputComponent
          type="text"
          name="code"
          placeholder="Email hoặc số di động"
          className="border border-gray-300 rounded-lg p-2.5"
          handleChange={(data) => {
            setKeyword(data);
            setError("");
          }}
        />
        {error && (
          <p className="my-1 text-sm text-red-500 font-semibold ml-1">
            {error}
          </p>
        )}
      </div>
      <hr />
      <div className="w-full py-3 mt-1 flex justify-end items-center">
        <ButtonComponent
          handleClick={() => {
            navigation(PAGE_LOGIN);
          }}
          type="button"
          className="px-4 mr-5 py-2 rounded-lg bg-gray-500 text-white"
        >
          Huỷ
        </ButtonComponent>
        <ButtonComponent
          handleClick={async () => {
            setLoading(true);
            const result = { data: { users: null, token: "" } };
            if (!result.data.users) {
              setError("Không tìm thấy tài khoản.");
            } else {
              navigation(`${PAGE_RECOVER_ACCOUNT}?token=${result.data.token}`);
            }
            setLoading(false);
          }}
          disabled={!(keyword.length > 0 && !loading)}
          loading={loading}
          className="px-4 mr-5 py-2  rounded-lg bg-1877F2 text-white"
        >
          Tìm kiếm
        </ButtonComponent>
      </div>
    </WrapperAuthenination>
  );
}
