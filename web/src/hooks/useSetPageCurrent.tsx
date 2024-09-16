import { AppDispatch } from "@/reducers";
import { updateDataCommon } from "@/reducers/common";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const useSetPageCurrent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  React.useEffect(() => {
    dispatch(
      updateDataCommon({
        key: "pageCurrent",
        value: location.pathname,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { location };
};

export default useSetPageCurrent;
