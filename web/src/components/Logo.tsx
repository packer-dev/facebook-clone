import * as React from "react";
import { PAGE_HOME } from "@/constants/Config";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/reducers";
import { updateDataCommon } from "@/reducers/common";

type LogoProps = { size?: number };

const Logo = ({ size = 12 }: LogoProps) => {
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
      <img
        className={`w-${size} shadow-lv1 rounded-full sm:w-${size} border border-gray-200 border-solid`}
        src={logo}
        alt=""
        srcSet=""
      />
    </Link>
  );
};

export default Logo;
