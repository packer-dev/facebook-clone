import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { PAGE_LOGIN } from "@/constants/Config";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderSignedOut(props: any) {
  //
  const { hideFormLogin } = props;
  const navigation = useNavigate();
  //
  return (
    <div className="w-full flex py-2.5 items-center justify-between border-b-2 border-solid border-gray-200 shadow-sm">
      <span
        aria-hidden
        onClick={() => navigation(PAGE_LOGIN)}
        className=" pl-3 text-2xl font-bold text-main cursor-pointer"
      >
        Ensonet
        <br />
      </span>
      {!hideFormLogin && (
        <div className="hidden w-2/3 gap-3 items-center lg:flex justify-end mr-5">
          <InputComponent
            type="text"
            name="email"
            className="p-2 border border-gray-300 rounded-lg"
            width="w-48"
            placeholder="Email"
          />
          <InputComponent
            type="password"
            name="password"
            className="p-2 border border-gray-300 rounded-lg"
            width="w-48"
            placeholder="Password"
          />
          <ButtonComponent
            handleClick={() => alert("This feature are developing.")}
            type="submit"
            className="px-5 py-2 bg-1877F2 text-white rounded-lg"
          >
            Login
          </ButtonComponent>
          <ButtonComponent className="py-2 text-1877F2">
            Did you forget your account?
          </ButtonComponent>
        </div>
      )}
    </div>
  );
}
