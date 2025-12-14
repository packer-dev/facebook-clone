import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import { PAGE_LOGIN } from "@/constants/Config";
import * as React from "react";
import { useNavigate } from "react-router-dom";

type HeaderSignedOutProps = { hideFormLogin?: boolean };

const HeaderSignedOut = ({ hideFormLogin }: HeaderSignedOutProps) => {
  const navigation = useNavigate();
  return (
    <div className="w-full flex py-2.5 items-center justify-between border-b-2 border-solid border-gray-200 shadow-sm">
      <span
        aria-hidden
        onClick={() => navigation(PAGE_LOGIN)}
        className=" pl-3 text-2xl font-bold text-primary cursor-pointer"
      >
        Facebook
        <br />
      </span>
      {!hideFormLogin && (
        <div className="hidden w-2/3 gap-3 items-center lg:flex justify-end mr-5">
          <Input type="text" name="email" width="w-48" placeholder="Email" />
          <Input
            type="password"
            name="password"
            width="w-48"
            placeholder="Password"
          />
          <Button
            onClick={() => alert("This feature are developing.")}
            type="submit"
            className="px-5 py-2 bg-1877F2 text-white rounded-lg"
          >
            Login
          </Button>
          <Button className="py-2 text-1877F2">
            Did you forget your account?
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderSignedOut;
