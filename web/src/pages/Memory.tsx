import React, { useEffect, useState } from "react";
import WrapperLogged from "./Wrapper/WrapperLogged";
import memory_header from "@/assets/images/memory_1.png";
import { PostDTO } from "@/interfaces/Post";
import ItemPostMemory from "@/components/ItemPost/ItemPostMemory";
import { getPostByIdUser } from "@/apis/postAPIs";
import { useSelector } from "react-redux";
import { getUser, RootState } from "@/reducers";
import { User } from "@/interfaces/User";

const Memory = () => {
  const user = useSelector<RootState, User>(getUser);
  const [posts, setPosts] = useState<PostDTO[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPostByIdUser(user?.id, "memory", 0, 0);
      setPosts(result?.list || []);
    };
    user && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
  return (
    <WrapperLogged>
      <div
        id="scroll__home"
        className="w-full bg-gray-100 dark:bg-dark-main h-screen overflow-y-scroll"
      >
        <div className="fixed h-screen pt-16 hidden sm:hidden xl:block xl:w-1/4 xl:left-0">
          <div className="pl-1.5 h-full w-4/6 overflow-x-hidden overflow-y-auto xl:w-full">
            <p className="font-bold text-2xl p-2 dark:text-white">Memories</p>
            <div className="w-64 p-2.5 rounded-lg bg-gray-500 text-gray-100 font-bold">
              <div className="flex items-center">
                <i className="bx bx-home-circle mr-3 text-2xl px-2 py-1 rounded-full bg-gray-200 text-gray-500" />
                <span>Anniversary home page</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="center-content relative left-0 px-2 pt-16 w-full sm:mx-auto md:w-3/4 lg:mx-0 
            lg:w-4/6 lg:left-0! xl:w-1/2 xl:px-8 xl:left-1/4"
        >
          <div className="w-full xl:w-[600px] mx-auto">
            <div className="w-full py-2 dark:bg-dark-second">
              <img
                src={memory_header}
                className="w-full h-24 object-cover"
                alt=""
                srcSet=""
              />
            </div>
            {posts.length === 0 ? (
              <div className="w-10/12 mx-auto my-2 dark:text-white">
                <p className="text-center mb-2 font-bold text-xl">
                  No Memories Today
                </p>
                <p className="text-center text-base">
                  There are no Memories to view or share today, but we will
                  notify you when you have a moment to review.
                </p>
              </div>
            ) : (
              <>
                {posts?.map((item) => (
                  <ItemPostMemory key={item.post.id} postDetail={item} />
                ))}
                <p className="w-11/12 mx-auto text-center text-xl p-2 dark:text-white">
                  We hope you enjoy reminiscing and sharing memories on
                  Facebook, from the most recent to the most distant.
                </p>
              </>
            )}
            <div className="w-full py-2 dark:bg-dark-second">
              <img
                src={memory_header}
                className="w-full h-24 object-cover"
                alt=""
                srcSet=""
              />
              <p className="p-2 text-xl font-bold dark:text-white">
                You've seen it all
              </p>
              <p className="text-xl px-2 mb-3 dark:text-white">
                Come back tomorrow for more memories!
              </p>
            </div>
          </div>
        </div>
      </div>
    </WrapperLogged>
  );
};
export default Memory;
