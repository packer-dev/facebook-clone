import * as React from "react";
import { Link } from "react-router-dom";

export default function ItemStoryList(props: any) {
  //
  const { story } = props;
  //
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 relative story-picVid">
      <div className="p-2.5 my-2 h-[284px]">
        <Link to="">
          <img className="bg-gray-300" src={story.src} alt="" />
        </Link>
      </div>
      <span className="font-bold absolute top-4 left-4 text-sm leading-[35px] text-black text-[14px]">
        <span>December 21</span>
        <i className="fas fa-circle text-xm px-2 text-[#1876F2] text-[12px]" />
      </span>
      <span className="views-story absolute text-black hidden bottom-2.5 left-6">
        <i className="fas fa-eye" />
        <span>&nbsp;&nbsp;1</span>
      </span>
    </div>
  );
}
