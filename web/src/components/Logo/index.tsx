import * as React from "react";
import { PAGE_HOME } from "@/constants/Config";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={PAGE_HOME}>
      <img
        className="w-12 shadow-lv1 rounded-full sm:w-12 border border-gray-200 border-solid"
        src={logo}
        alt=""
        srcSet=""
      />
    </Link>
  );
}
