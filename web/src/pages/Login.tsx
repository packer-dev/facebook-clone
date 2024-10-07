import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EndFormLogin from "@/modules/Login/EndFormLogin";
import FooterLogin from "@/modules/Login/FooterLogin";
import FormLogin from "@/modules/Login/FormLogin";
import SaveLogin from "@/modules/Login/SaveLogin";
import { PAGE_HOME } from "@/constants/Config";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import useTitle from "@/hooks/useTitle";
import WrapperPage from "./Wrapper/WrapperPage";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";

const Login = () => {
  //
  const { modalsDispatch, modalsAction } = React.useContext(ModalContext);
  const user = useSelector<RootState, User>(getUser);
  const navigation = useNavigate();
  React.useEffect(() => {
    //
    if (user) navigation(PAGE_HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
  //
  useTitle("Login");
  //
  return (
    <WrapperPage white login>
      <div className="w-full relative bg-gray-50">
        <div className="w-full mx-auto sm:w-full md:w-full lg:w-full xl:w-3/4 2xl:w-3/4">
          <SaveLogin />
          <div
            className="w-full mx-auto rounded-lg mr-8 sm:w-11/12 sm:mx-auto lg:w-[400px]
            lg:mr-8 items-center flex flex-wrap xl:mt-12"
          >
            <div className="w-11/12 mx-auto sm:w-[400px] text-center p-2 bg-white rounded-lg shadow-lv1">
              <div className="w-full">
                <FormLogin />
              </div>
              <hr className="w-90% mx-auto mb-4" />
              <div className="w-full">
                <div className="bg-white mb-4">
                  <Button
                    onClick={() =>
                      modalsDispatch(modalsAction.openModalRegister())
                    }
                    type="button"
                    className="outline-none px-8 py-3 bg-36A420 text-15px font-semibold text-white rounded-md cursor-pointer"
                  >
                    Create new account
                  </Button>
                </div>
              </div>
            </div>
            <EndFormLogin />
          </div>
          <FooterLogin />
        </div>
      </div>
    </WrapperPage>
  );
};

export default Login;
