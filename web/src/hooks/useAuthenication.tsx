import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_LOGIN } from "../constants/Config";
import { User } from "@/interfaces/User";

const useAuthenication = (getUser?: any) => {
  const navigation = useNavigate();
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User>(null);
  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    //
    const fetch = async () => {
      const tokenParam = params.get("token");
      const tokenParse: any = tokenParam;
      if (tokenParse.exp < new Date().getTime()) {
        setToken(tokenParse);
        if (getUser) {
          const result = { data: null };
          if (result.data) {
            setUser(result.data);
          } else {
            navigation(PAGE_LOGIN);
          }
        }
      } else {
        navigation(PAGE_LOGIN);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { token, user, tokenPrevious: params.get("token") };
};

export default useAuthenication;
