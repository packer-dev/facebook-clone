import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "../contexts/ModalContext/ModalContext";
import { useNavigate } from "react-router-dom";
import "moment/locale/vi";
import { AppDispatch, RootState } from "@/reducers";
import { PAGE_HOME, PAGE_LOGIN } from "@/constants/Config";
import { getUserById } from "@/apis/userAPIs";
import { login } from "@/reducers/user";

export default function WrapperPage(props) {
  //
  const { white } = props;
  const { modals, modalsDispatch, modalsAction } =
    React.useContext(ModalContext);
  const { user } = useSelector<RootState, RootState>((state) => state);
  const dispatch = useDispatch<AppDispatch>();
  const ref = React.useRef<HTMLDivElement>(null);
  const navigation = useNavigate();
  React.useEffect(() => {
    //
    if (!ref.current || user) return;

    document.body.className = modals.data ? "overflow-hidden" : "";
    const dataLocal = localStorage.getItem("user");
    if (!dataLocal && !user) {
      navigation(PAGE_LOGIN);
      ref.current.className = "";
      return;
    }

    const fetchData = async () => {
      const result = await getUserById(dataLocal);
      if (result && ref.current) {
        if (result?.is_dark) {
          ref.current.classList.add("dark");
        } else {
          ref.current.classList.remove("dark");
        }
        dispatch(login(result));
        navigation(PAGE_HOME);
      }
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
      {props.children}
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
