import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderSignedOut from "@/modules/Header/HeaderSignedOut";
import FooterLogin from "@/modules/Login/FooterLogin";
import { PAGE_HOME } from "@/constants/Config";
import WrapperPage from "./WrapperPage";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

type WrapperAuthenticationProps = {
  hideFormLogin?: boolean;
  title?: string;
  notFound?: boolean;
  children?: React.ReactNode;
};

const WrapperAuthentication = ({
  hideFormLogin,
  title,
  notFound,
  children,
}: WrapperAuthenticationProps) => {
  //
  const user = useSelector<RootState, User>(getUser);
  const navigation = useNavigate();
  React.useEffect(() => {
    //
    if (user) {
      navigation(PAGE_HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  //
  return (
    <WrapperPage login>
      <div className={`w-full h-screen ${notFound ? "overflow-hidden" : ""}`}>
        <HeaderSignedOut hideFormLogin={hideFormLogin} />
        {notFound ? (
          children
        ) : (
          <div className="w-full bg-gray-200 flex justify-center items-center h-[450px]">
            <div className="lg:w-2/5 xl:w-1/3 w-11/12 mx-auto border border-solid border-gray-300 bg-white rounded-lg pt-4 pb-1">
              <p className="text-xl pl-5 font-bold mb-3">{title}</p>
              <hr />
              {children}
            </div>
          </div>
        )}

        <div className="w-3/4 mx-auto">
          <FooterLogin />
        </div>
      </div>
    </WrapperPage>
  );
};

export default WrapperAuthentication;
