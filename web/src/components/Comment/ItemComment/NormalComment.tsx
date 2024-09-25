import * as React from "react";
import { Link } from "react-router-dom";

export default function NormalComment() {
  return (
    <>
      <p className="dark:text-white my-1">Cảm ơn Idol</p>
      <Link to="">
        <img
          src="http://res.cloudinary.com/tratahuong01/image/upload/v1622606980/CommentImage/bo5oa8n1bopn3lczo1ay.jpg"
          className="w-72 h-56 mt-3 object-cover"
          alt=""
        />
      </Link>
    </>
  );
}
