import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { useNavigate } from "react-router-dom";
import "moment/locale/vi";
import { AppDispatch, RootState, getUser } from "@/reducers";
import { PAGE_LOGIN } from "@/constants/Config";
import { checkTokenExpired } from "@/apis/userAPIs";
import { login } from "@/reducers/user";
import Logo from "@/components/Logo";
import { User } from "@/interfaces/User";

export default function WrapperPage(props) {
  //
  const { white } = props;
  const { modals, modalsDispatch, modalsAction } =
    React.useContext(ModalContext);
  const user = useSelector<RootState, User>(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const ref = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigate();
  React.useEffect(() => {
    //
    if (!ref.current || user) return;
    document.body.className = modals.data ? "overflow-hidden" : "";
    const dataLocal = localStorage.getItem("token");
    if (!dataLocal && !user) {
      navigation(PAGE_LOGIN);
      ref.current.className = "";
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const result = await checkTokenExpired(dataLocal);
      if (result && ref.current) {
        if (result?.is_dark) {
          ref.current.classList.add("dark");
        } else {
          ref.current.classList.remove("dark");
        }
        dispatch(login(result?.user));
        localStorage.setItem("token", result?.token);
      } else {
        navigation(PAGE_LOGIN);
      }
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  React.useEffect(() => {
    //
    modalsDispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div ref={ref}>
      {loading ? (
        <div className="w-full relative h-screen">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Logo size={18} />
          </div>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex self-end 
          flex-col justify-center gap-0.5 py-6"
          >
            <span className="text-3xl text-blue-500 text-center font-bold">
              facebook
            </span>
          </div>
        </div>
      ) : (
        props.children
      )}
      <div
        className={`w-full h-screen fixed top-0 left-0 bg-${
          white ? "white" : "black"
        } bg-opacity-50 
            z-50 ${modals.data ? "" : "hidden"}`}
      >
        {modals.data}
      </div>
    </div>
  );
}
