import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import * as StringUtils from "@/utils/StringUtils";
import { RootState } from "@/reducers";

export default function ImageVideoUser() {
  //
  const { headers } = useSelector<RootState, RootState>((state) => state);
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  const navigation = useNavigate();
  const [imageVideos, setImageVideos] = useState([]);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      if (unmounted) return;
      setImageVideos([]);
    };
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile, setImageVideos, headers]);
  //
  return (
    <>
      <div className="w-full flex">
        <div className="w-full mt-2.5 mr-2.5">
          <p className="font-bold dark:text-white">
            Ảnh/Video
            <br />
          </p>
        </div>
        <div className="w-full text-right mt-2.5 mr-2.5 text-main">
          Xem tất cả
        </div>
      </div>
      <div className="w-full pt-4 pl-0.5 flex flex-wrap">
        {imageVideos.map((imageVideo) => (
          <div
            aria-hidden
            onClick={() => {
              navigation(
                PAGE_VIEW_POST + `/${imageVideo.postImageVideoPost.id}`
              );
            }}
            className="fr-us cursor-pointer"
            key={imageVideo.id}
          >
            {StringUtils.checkImageOrVideoToString(imageVideo.src) ===
            "image" ? (
              <img
                className="object-cover rounded-lg"
                src={imageVideo.src}
                alt=""
              />
            ) : (
              <div className=" relative">
                <video
                  className="object-cover rounded-lg"
                  src={imageVideo.src}
                />
                <div className="fr-us__front bg-black bg-opacity-50 flex items-center justify-center text-2xl">
                  <span className="fas fa-play text-white"></span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
