import React, { useContext, useState } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext/UserProfileContext";
import WrapperContentChildProfile from "../WrapperContentChildProfile";
import ItemImageVideoList from "./ItemImageVideoList";

export default function ImageVideoList(props) {
  //
  const {
    userProfile: { userProfile },
  } = useContext(UserProfileContext);
  const [imageVideos, setImageVideos] = useState([]);
  return (
    <WrapperContentChildProfile
      label={props.image ? "Ảnh" : "Video"}
      setData={setImageVideos}
      url={`imageVideoPosts?idUser=${userProfile.id}&offset=0&limit=20&type=${
        props.image ? 0 : 1
      }`}
    >
      {imageVideos?.map((imageVideo) => (
        <ItemImageVideoList imageVideo={imageVideo} key={imageVideo.id} />
      ))}
    </WrapperContentChildProfile>
  );
}
