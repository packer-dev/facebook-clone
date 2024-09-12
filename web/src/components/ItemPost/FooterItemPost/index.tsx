import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Feels from "../Feels";
import ButtonShare from "./ButtonShare";
import { RootState } from "@/reducers";
import { PostDTO } from "@/interfaces/Post";

type FooterItemPost = {
  postDetail: PostDTO;
  setPostDetail: Function;
};

const FooterItemPost = ({ postDetail, setPostDetail }: FooterItemPost) => {
  //
  const { headers } = useSelector<RootState, RootState>((state) => state);
  const [feel, setFeel] = useState<any>({});
  const [feelList, setFeelList] = useState([]);
  const [feelLength, setFeelLength] = useState(postDetail.feel.length);
  useEffect(() => {
    //
    setFeel([]);
    setFeelList([]);
    setFeelLength(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers]);
  //
  return (
    <>
      <div className="w-full flex text-sm text-gray-700 dark:text-gray-300 justify-between items-center my-1.5">
        <div className="flex items-center">
          {feelList ? (
            <div className="flex mx-2">
              {feelList.map((item) => (
                <img
                  key={item.id}
                  src={JSON.parse(item.content).image}
                  alt=""
                  className="w-5 h-5 transform scale-90 -ml-1 rounded-full object-cover"
                />
              ))}
            </div>
          ) : (
            <div className="flex mr-2">
              {feel && (
                <img
                  src={JSON.parse(feel.content).image}
                  alt=""
                  className="w-5 h-5 transform scale-90 -ml-1 rounded-full object-cover"
                />
              )}
            </div>
          )}
          {feelLength ?? <span className="font-semibold ">{feelLength}</span>}
        </div>
        {/* // {commentLength > 0 && <span>{commentLength} bình luận</span>} */}
      </div>
      <ul className="w-full flex border-t-2 border-b-2 border-solid border-gray-200 dark:border-dark-third relative text-gray-700">
        <li className="w-1/3 dark:hover:bg-dark-third hover:bg-gray-100 item__hover">
          <div
            className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-100 flex w-full 
                    font-semibold h-12 text-sm cursor-pointer justify-center items-center"
          >
            <div className="flex items-center">
              {feel ? (
                <>
                  <img
                    src={JSON.parse("{}").image}
                    alt=""
                    className="w-5 mr-1.5 h-5 rounded-full object-cover"
                  />
                  <span className="" style={{ color: JSON.parse("{}").color }}>
                    {JSON.parse("{}").label}
                  </span>
                </>
              ) : (
                <>
                  <span className="bx bx-like text-xl"></span>
                  <span className=" font-semibold ml-2">Thích</span>
                </>
              )}
            </div>
          </div>
          <Feels />
        </li>
        <li
          className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-200 w-1/3 font-semibold 
                h-12 text-sm cursor-pointer justify-center items-center flex"
        >
          <i className="fas fa-comment-alt dark:text-gray-300"></i> &nbsp;
          <span>Bình Luận</span>
        </li>
        <ButtonShare />
      </ul>
    </>
  );
};

export default FooterItemPost;
