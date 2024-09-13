import React, { useContext, useState } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import WrapperContentChildProfile from "../WrapperContentChildProfile";
import ItemImageVideoList from "./ItemImageVideoList";
import { getMediaByUserId } from "@/apis/postAPIs";
import { Media } from "@/interfaces/Media";

export type ImageVideoProps = {
  post_id: string;
  user_id: string;
  media: Media;
};

const ImageVideoList = ({ image }: { image?: boolean }) => {
  //
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  const [imageVideos, setImageVideos] = useState<ImageVideoProps[]>([]);
  return (
    <WrapperContentChildProfile<ImageVideoProps>
      label={image ? "Ảnh" : "Video"}
      setData={setImageVideos}
      getResultAPI={() => getMediaByUserId(userProfile?.id, 1)}
    >
      <div className="w-full grid grid-cols-5 gap-1">
        {imageVideos?.map((imageVideo) => (
          <ItemImageVideoList
            imageVideo={imageVideo}
            key={imageVideo.media.id}
          />
        ))}
      </div>
    </WrapperContentChildProfile>
  );
};

export default ImageVideoList;
