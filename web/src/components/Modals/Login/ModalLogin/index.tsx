import * as React from "react";
import { User } from "@/interfaces/User";
import ModalWrapper from "../../ModalWrapper";
import FormLogin from "@/components/Login/FormLogin";

type ModalLoginProps = {
  loginFast?: User;
};

const ModalLogin = ({ loginFast }: ModalLoginProps) => {
  //
  //
  return (
    <ModalWrapper
      className={`wrapper-scrollbar p-2 w-11/12 fixed top-1/2 left-1/2 transform -translate-x-1/2 
      -translate-y-1/2 opacity-100 bg-white z-50 border border-solid border-gray-200 shadow-lv1 
      rounded-lg sm:w-11/12  lg:w-4/5 xl:w-30%`}
    >
      <h1 className="-pt-1 pb-0.5 text-2xl my-3 text-center">Login ensonet</h1>
      <hr />
      <FormLogin remember={true} loginFast={loginFast} />
    </ModalWrapper>
  );
};

export default ModalLogin;
