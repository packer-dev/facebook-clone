import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import { PAGE_LOGIN, PAGE_RECOVER_ACCOUNT } from "@/constants/Config";
import WrapperAuthentication from "../Wrapper/WrapperAuthentication";
import { Button } from "@/components/ui/button";

const ForgetAccount = () => {
  //
  const navigation = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //
  return (
    <WrapperAuthentication title="Search your account">
      <div className="w-full px-5 mb-3">
        <p className="py-3">
          Please enter your email or mobile number to search for your account.
        </p>
        <Input
          type="text"
          name="code"
          placeholder="Email"
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
        <Button
          onClick={() => navigation(PAGE_LOGIN)}
          type="button"
          className="px-4 mr-5 py-2 rounded-lg bg-gray-500 text-white"
        >
          Huỷ
        </Button>
        <Button
          onClick={async () => {
            setLoading(true);
            const result = { data: { users: null, token: "" } };
            if (!result.data.users) {
              setError("Account not found.");
            } else {
              navigation(`${PAGE_RECOVER_ACCOUNT}?token=${result.data.token}`);
            }
            setLoading(false);
          }}
          disabled={!(keyword.length > 0 && !loading)}
          loading={loading}
          className="px-4 mr-5 py-2  rounded-lg bg-1877F2 text-white"
        >
          Search
        </Button>
      </div>
    </WrapperAuthentication>
  );
};

export default ForgetAccount;
