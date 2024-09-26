import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderLoggedRight from "@/modules/Header/HeaderLogged/HeaderLoggedRight";
import ItemPost from "@/components/ItemPost";
import ButtonViewPostTop from "@/modules/ViewPost/ButtonViewPostTop";
import WrapperLogged from "./Wrapper/WrapperLogged";
import * as StringUtils from "@/utils/StringUtils";
import { getPostById } from "@/apis/postAPIs";
import { PostDTO } from "@/interfaces/Post";
import ItemMedia from "@/components/MediaDisplay/ItemMedia";
import ItemCommentPostMain from "@/components/Comment/ItemCommentPostMain";
import { getCommentByPost } from "@/apis/commentAPIs";
import { CommentDTO } from "@/interfaces/Comment";

const ViewPost = () => {
  //
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState<PostDTO>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [scale, setScale] = useState(75);
  const [comments, setComments] = useState<CommentDTO[]>([]);
  useEffect(() => {
    //
    const fetchData = async () => {
      const result = await getPostById(id);
      setPostDetail(result);
      setIndex(0);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCommentByPost(postDetail.post.id);
      setComments(result?.list || []);
    };
    if (postDetail) fetchData();
  }, [postDetail]);
  //
  return (
    <WrapperLogged hideHeader hideChat hideMessage>
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
                  className="object-cover w-full h-full"
                  style={{
                    transform: `scale(${scale / 100})`,
                  }}
                />
              ) : (
                <ItemMedia<HTMLVideoElement>
                  type="video"
                  single
                  src={postDetail?.medias[index].url}
                  className="w-11/12 object-cover h-11/12"
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
            <HeaderLoggedRight hideImage />
          </div>
          <div className="pt-16 w-full h-full scrollbar-css overflow-y-auto">
            <hr />
            <ItemPost hideContent postDetail={postDetail} margin={false} />
            {comments.map((comment) => (
              <ItemCommentPostMain
                key={comment.item.id}
                postDetail={postDetail}
                commentDetail={comment}
              />
            ))}
          </div>
        </div>
      </div>
    </WrapperLogged>
  );
};

export default ViewPost;
