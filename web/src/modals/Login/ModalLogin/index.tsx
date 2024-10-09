import * as React from "react";
import { User } from "@/interfaces/User";
import FormLogin from "@/modules/Login/FormLogin";
import ModalWrapper from "@/modals/ModalWrapper";

type ModalLoginProps = {
  loginFast?: User;
};

const ModalLogin = ({ loginFast }: ModalLoginProps) => {
  return (
    <ModalWrapper>
      <h1 className="-pt-1 pb-0.5 text-2xl my-3 text-center">Login facebook</h1>
      <hr />
      <FormLogin remember loginFast={loginFast} />
    </ModalWrapper>
  );
};

export default ModalLogin;
