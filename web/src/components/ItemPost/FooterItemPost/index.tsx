import React, { useContext } from "react";
import Feels from "../Feels";
import ButtonShare from "./ButtonShare";
import { PostDTO } from "@/interfaces/Post";
import feels from "@/config/feels";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  getCommon,
  getSocket,
  getUser,
} from "@/reducers";
import { sendFeelPost } from "@/apis/postAPIs";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { PAGE_PROFILE } from "@/constants/Config";
import { User } from "@/interfaces/User";
import { Socket } from "socket.io-client";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type FooterItemPostProps = {
  postDetail: PostDTO;
};

const FooterItemPost = ({ postDetail }: FooterItemPostProps) => {
  //
  const { pageCurrent, homePosts, profilePosts } = useSelector<
    RootState,
    CommonDataProps
  >(getCommon);
  const { modalsAction, modalsDispatch } = useContext(ModalContext);
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const dispatch = useDispatch<AppDispatch>();
  const feelList = postDetail?.feel?.filter(
    (value, index, self) =>
      index === self.findIndex((obj) => obj.type === value.type)
  );
  const checkUser = postDetail?.feel?.find(
    (value) => value?.user?.id === user.id
  );
  const handleLike = async (type: number) => {
    if (!user) return;
    let newPostDetail = { ...postDetail };
    const result = await sendFeelPost(
      postDetail.post?.id ?? "",
      user?.id,
      type
    );
    if (!result) {
      newPostDetail.feel = [...newPostDetail.feel].filter(
        (item) => item.id !== checkUser?.id
      );
    } else {
      newPostDetail.feel = !checkUser
        ? [result, ...newPostDetail.feel]
        : [...newPostDetail.feel].map((item) => {
            if (item.id === checkUser.id) return result;
            return item;
          });
    }
    const isProfile = pageCurrent.indexOf(PAGE_PROFILE) !== -1;
    dispatch(
      updateDataCommon({
        key: isProfile ? "profilePosts" : "homePosts",
        value: [...(isProfile ? profilePosts : homePosts)].map((item) => {
          if (item.post.id === postDetail?.post?.id) return newPostDetail;
          return item;
        }),
      })
    );
    socket.emit(
      `feel-post.${postDetail.post.id}`,
      JSON.stringify({
        sender: user.id,
        feel: result,
      })
    );
  };
  //
  return (
    <>
      <div className="w-full flex text-sm text-gray-700 dark:text-gray-300 justify-between items-center my-1.5">
        <div
          aria-hidden
          onClick={() =>
            modalsDispatch(modalsAction.openModalViewFeelPost({ postDetail }))
          }
          className="flex items-center w-full pl-1 cursor-pointer"
        >
          {feelList.map((item, index) => (
            <img
              key={item.id}
              src={feels[item.type - 1].image}
              alt=""
              className="w-6 h-6 transform scale-90 p-0.5 bg-white -ml-1.5 relative rounded-full object-cover"
              style={{ zIndex: feelList.length - index }}
            />
          ))}
          {!!postDetail.feel.length && (
            <span className="font-semibold">{postDetail.feel.length}</span>
          )}
        </div>
      </div>
      <div className="w-full flex border-t-2 border-b-2 border-solid border-gray-200 dark:border-dark-third relative text-gray-700">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="w-1/3 dark:hover:bg-dark-third hover:bg-gray-100">
              <div
                className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-100 flex w-full 
            font-semibold h-12 text-sm cursor-pointer justify-center items-center"
              >
                <div
                  aria-hidden
                  onClick={() => handleLike(1)}
                  className="flex items-center"
                >
                  {checkUser ? (
                    <>
                      <img
                        src={feels[checkUser.type - 1].image}
                        alt=""
                        className="w-5 mr-1.5 h-5 rounded-full object-cover"
                      />
                      <span
                        className=""
                        style={{ color: feels[checkUser.type - 1].color }}
                      >
                        {feels[checkUser.type - 1].label}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="bx bx-like text-xl" />
                      <span className=" font-semibold ml-2">Like</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            align="center"
            className="w-[340px] HoverCardContent p-0 bg-white border-none bg-transparent shadow-none left-0 bottom-full"
          >
            <Feels handle={handleLike} />
          </HoverCardContent>
        </HoverCard>
        <div
          className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-200 w-1/3 font-semibold 
          h-12 text-sm cursor-pointer justify-center items-center flex"
        >
          <i className="fas fa-comment-alt dark:text-gray-300" /> &nbsp;
          <span>Comment</span>
        </div>
        <ButtonShare />
      </div>
    </>
  );
};

export default FooterItemPost;
