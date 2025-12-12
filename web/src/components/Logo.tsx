import { PAGE_HOME } from "@/constants/Config";
import { AppDispatch } from "@/reducers";
import { updateDataCommon } from "@/reducers/common";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

type LogoProps = { size?: number };

const Logo = ({ size = 10 }: LogoProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Link
      onClick={() =>
        dispatch(
          updateDataCommon({
            key: "reloadPost",
            value: Math.random(),
          })
        )
      }
      to={PAGE_HOME}
    >
      <i className="bxr bxs-owl text-main text-4xl" />
    </Link>
  );
};

export default Logo;
