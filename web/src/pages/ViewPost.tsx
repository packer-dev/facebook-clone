import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderLoggedRight from "@/components/Header/HeaderLogged/HeaderLoggedRight";
import ItemPost from "@/components/ItemPost";
import ButtonViewPostTop from "@/components/ViewPost/ButtonViewPostTop";
import WrapperLogged from "./WrapperLogged";
import * as StringUtils from "@/utils/StringUtils";
import { getPostById } from "@/apis/postAPIs";
import { PostDTO } from "@/interfaces/Post";

export default function ViewPost() {
  //
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState<PostDTO>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [scale, setScale] = useState(75);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await getPostById(id);
      if (unmounted) return;
      setPostDetail(result);
      setIndex(0);
    };
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <WrapperLogged hideHeader={true} hideChat={true} hideMessage={true}>
      <div className="w-full h-screen flex">
        <div
          className={`${
            fullscreen ? "w-full" : "w-3/4"
          } item__hover h-full relative bg-black flex justify-center items-center`}
        >
          <ButtonViewPostTop
            fullscreen={fullscreen}
            setFullscreen={setFullscreen}
            scale={scale}
            setScale={setScale}
            setIndex={setIndex}
            index={index}
            length={postDetail?.medias?.length ?? 0}
          />
          {postDetail && index !== -1 && (
            <div className="w-full h-full flex justify-center items-center max-w-full max-h-full relative z-0 overflow-hidden">
              {StringUtils.checkImageOrVideoToString(
                postDetail?.medias[index].url
              ) === "image" ? (
                <img
                  src={postDetail?.medias[index].url}
                  alt=""
                  className="object-cover"
                  style={{
                    transform: `scale(${scale / 100})`,
                  }}
                />
              ) : (
                <video
                  src={postDetail?.medias[index].url}
                  className="w-11/12 object-cover"
                  style={{
                    transform: `scale(${scale / 100})`,
                  }}
                />
              )}
            </div>
          )}
        </div>
        <div
          className={`${
            fullscreen ? "hidden" : "w-1/4 h-full overflow-hidden"
          }`}
        >
          <div className="w-full absolute top-0 p-1 border-b-2 border-solid border-gray-300 shadow-lv1">
            <HeaderLoggedRight hideImage={true} />
          </div>
          <div className="pt-16 w-full h-full scrollbar-css overflow-y-auto">
            <hr></hr>
            <ItemPost
              hideContent={true}
              postDetail={postDetail}
              margin={false}
            />
          </div>
        </div>
      </div>
    </WrapperLogged>
  );
}
