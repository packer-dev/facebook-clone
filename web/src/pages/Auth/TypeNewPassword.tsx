import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import { PAGE_LOGIN } from "@/constants/Config";
import WrapperAuthentication from "../Wrapper/WrapperAuthentication";
import { Button } from "@/components/ui/button";

const TypeNewPassword = () => {
  const [passwordNew, setPasswordNew] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  return (
    <WrapperAuthentication title="Choose new password" hideFormLogin>
      <div className="w-full my-2 p-2 px-5">
        <p>
          Create a new password that is at least 6 characters long. A strong
          password is a combination of letters, numbers, and punctuation.
        </p>
        <div className="w-full flex my-2 items-center">
          <Input
            type="password"
            handleChange={(data) => setPasswordNew(data)}
            placeholder="New password..."
          />
        </div>
      </div>
      <hr />
      <div className="w-full py-3 mt-1 flex justify-end items-center">
        <div className="">
          <Button
            onClick={() => navigation(PAGE_LOGIN)}
            className="px-4 font-semibold mr-3 py-2 rounded-lg bg-gray-300 text-gray-800"
          >
            Cancel
          </Button>
          <Button
            disabled={passwordNew.length < 6}
            onClick={async () => {
              setLoading(true);
              navigation(PAGE_LOGIN);
            }}
            loading={loading}
            className="px-4 py-2 mr-5 rounded-lg bg-primary text-white"
          >
            Next
          </Button>
        </div>
      </div>
    </WrapperAuthentication>
  );
};

export default TypeNewPassword;
