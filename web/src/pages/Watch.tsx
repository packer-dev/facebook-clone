import * as React from "react";
import InputComponent from "@/components/InputComponent";
import ItemPost from "@/components/ItemPost";
import LoadingPost from "@/components/ItemPost/LoadingPost";
import ListItemWatchLeft from "@/components/Watch/WatchLeft";
import WatchNewBest from "@/components/Watch/WatchRight/WatchNewBest";
import WrapperLogged from "./Wrapper/WrapperLogged";

export default function Watch() {
  //
  const [postDetails, setPostDetails] = React.useState([]);
  React.useEffect(() => {
    //
    const fetch = async () => {
      setPostDetails([]);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
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
            <div className="md:flex hidden w-full ">
              <InputComponent
                type="text"
                search
                placeholder="Search video..."
                className="p-2 bg-gray-200 dark:bg-dark-third rounded-full"
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
              {postDetails ? (
                postDetails.map((postDetail) => (
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
}
