import * as React from "react";
import { PAGE_HOME } from "@/constants/Config";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = ({ size = 12 }: { size?: number }) => {
  return (
    <Link to={PAGE_HOME}>
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
