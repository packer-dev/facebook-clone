import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import * as StringUtils from "@/utils/StringUtils";
import { RootState, getHeaders } from "@/reducers";
import { getMediaByUserId } from "@/apis/postAPIs";
import { ImageVideoProps } from "../ImageVideoList";

export default function ImageVideoUser() {
  //
  const headers = useSelector<RootState, any>(getHeaders);
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  const navigation = useNavigate();
  const [imageVideos, setImageVideos] = useState<ImageVideoProps[]>([]);
  useEffect(() => {
    //
    const fetchData = async () => {
      const result = await getMediaByUserId(userProfile?.id, 1);
      setImageVideos(result?.list || []);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile, setImageVideos, headers]);
  //
  return (
    <>
      <div className="w-full flex">
        <div className="w-full mt-2.5 mr-2.5">
          <p className="font-bold dark:text-white">
            Image/Video
            <br />
          </p>
        </div>
        <div className="w-full text-right mt-2.5 mr-2.5 text-main">
          View all
        </div>
      </div>
      <div className="w-full pt-4 grid grid-cols-3 gap-1">
        {imageVideos.map((imageVideo) => (
          <div
            aria-hidden
            onClick={() => {
              navigation(PAGE_VIEW_POST + `/${imageVideo.post_id}`);
            }}
            className="relative cursor-pointer"
            style={{ paddingTop: "100%" }}
            key={imageVideo.media.id}
          >
            {StringUtils.checkImageOrVideoToString(imageVideo.media.url) ===
            "image" ? (
              <img
                className="object-cover rounded-lg absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                src={imageVideo.media.url}
                alt=""
              />
            ) : (
              <div className=" relative">
                <video className="object-cover rounded-lg" controls>
                  <track
                    default
                    kind="captions"
                    srcLang="en"
                    src={imageVideo.media.url}
                  />
                </video>
                <div className="fr-us__front bg-black bg-opacity-50 flex items-center justify-center text-2xl">
                  <span className="fas fa-play text-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
