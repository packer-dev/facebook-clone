import * as React from "react";

import InputComponent from "@/components/InputComponent";
import ItemPost from "@/components/ItemPost";
import LoadingPost from "@/components/ItemPost/LoadingPost";
import ListItemWatchLeft from "@/components/Watch/WatchLeft/ListItemWatchLeft";
import WatchNewBest from "@/components/Watch/WatchRight/WatchNewBest";
import WrapperLogged from "./WrapperLogged";

export default function Watch() {
  //
  const images = [
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1641207920/Avatars/1641207917807.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1644224603/Avatars/260347987_860340711422545_5819341585161953123_n_iagczo.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1644153514/Avatars/1644153513203.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1641689086/Avatars/1641689084784.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1642577149/Avatars/1642577147030.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1641723012/Avatars/1641723009621.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1641341881/Avatars/1641341879260.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1641780665/Avatars/1641780661442.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1641341853/Avatars/1641341850630.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1642584539/Avatars/1642584537675.jpg`,
    `https://res.cloudinary.com/ensonet-dev/image/upload/v1644047439/Avatars/1644047430768.jpg`,
  ];
  const [postDetails, setPostDetails] = React.useState(null);
  React.useEffect(() => {
    //
    const fetch = async () => {
      setPostDetails(null);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <WrapperLogged>
      <div className="w-full h-screen pt-20 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row">
        <div
          className="w-full md:w-1/3 lg:w-1/4 relative xl:w-1/5 flex 
                flex-col h-auto lg:h-full px-5"
        >
          <div className="w-full flex flex-col items-start">
            <div className="w-full dark:text-gray-300 flex items-center justify-between py-2">
              <span className="text-2xl font-bold">Watch</span>
              <span
                className="fas fa-cog w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-third 
                            md:flex items-center hidden justify-center text-xl hover:bg-gray-300 dark:hover:bg-dark-second"
              ></span>
            </div>
            <div className="md:flex hidden w-full ">
              <InputComponent
                type="text"
                search={true}
                placeholder="Tìm kiếm video..."
                className={"p-2 bg-gray-200 dark:bg-dark-third rounded-full"}
              />
            </div>
          </div>
          <div className="w-auto md:w-full flex-1 overflow-y-auto absolute md:static -top-1.5 left-28">
            <ListItemWatchLeft images={images} />
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 h-auto lg:h-full overflow-y-auto">
          <div className="xl:w-3/4 w-full md:w-11/12 mx-auto">
            <WatchNewBest images={images} />
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
