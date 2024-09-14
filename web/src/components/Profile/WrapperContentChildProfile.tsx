import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingChildren from "./LoadingChildren";
import { UserProfileContext } from "@/contexts/UserProfileContext";

type WrapperContentChildProfileProps<T> = {
  getResultAPI?: () => Promise<any>;
  setData: (data: T[]) => void;
  label?: string;
  children?: ReactNode;
};

const WrapperContentChildProfile = <T,>({
  setData,
  getResultAPI,
  label,
  children,
}: WrapperContentChildProfileProps<T>) => {
  //
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //
    let timeOut: ReturnType<typeof setTimeout>;
    const fetchData = async () => {
      const result = await getResultAPI();
      setData(result?.list || result);
      setLoading(false);
    };
    setLoading(true);
    timeOut = setTimeout(() => {
      if (getResultAPI) {
        fetchData();
      }
    }, 800);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile, location.pathname]);
  return (
    <>
      <div className="py-2 px-4 mb-2 text-center border-b-2 border-solid border-main text-main">
        {label}
      </div>
      {
        <div
          className="my-2 w-full flex flex-wrap"
          style={{ display: loading ? "none" : "flex" }}
        >
          {children}
        </div>
      }
      {loading && <LoadingChildren />}
    </>
  );
};
export default WrapperContentChildProfile;
