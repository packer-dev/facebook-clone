import * as React from "react";
import Input from "@/components/Input";
import ItemPost from "@/modules/ItemPost";
import LoadingPost from "@/modules/ItemPost/LoadingPost";
import ListItemWatchLeft from "@/modules/Watch/WatchLeft";
import WatchNewBest from "@/modules/Watch/WatchRight/WatchNewBest";
import WrapperLogged from "./Wrapper/WrapperLogged";

const Watch = () => {
  return (
    <WrapperLogged>
      <div className="w-full h-screen pt-20 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 lg:w-1/4 relative xl:w-1/5 flex flex-col h-auto lg:h-full px-5">
          <div className="w-full flex flex-col items-start">
            <div className="w-full dark:text-gray-300 flex items-center justify-between py-2">
              <span className="text-2xl font-bold">Watch</span>
              <span
                className="fas fa-cog w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-third md:flex items-center
                hidden justify-center text-xl hover:bg-gray-300 dark:hover:bg-dark-second"
              />
            </div>
            <div className="md:flex hidden w-full">
              <Input
                type="text"
                search
                placeholder="Search video..."
                className="rounded-full"
              />
            </div>
          </div>
          <div className="w-auto md:w-full flex-1 overflow-y-auto absolute md:static -top-1.5 left-28">
            <ListItemWatchLeft images={Array(8).fill("")} />
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 h-auto lg:h-full overflow-y-auto">
          <div className="xl:w-3/4 w-full md:w-11/12 mx-auto">
            <WatchNewBest images={Array(8).fill("")} />
            <div className="w-full p-5">
              {false ? (
                [].map((postDetail) => (
                  <ItemPost postDetail={postDetail} key={postDetail.post.id} />
                ))
              ) : (
                <>
                  <LoadingPost />
                  <LoadingPost />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </WrapperLogged>
  );
};

export default Watch;
