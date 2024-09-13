import * as React from "react";
import { useSelector } from "react-redux";
import PreviewImageComment from "../PreviewImageComment";
import { v4 } from "uuid";
import { RootState } from "@/reducers";
import CategoryInputComment from "./CategoryInputComment";

type TypeCommentInputProps = {
  dataComment?: any;
  setDataComment?: Function;
  postDetail?: any;
  setPostDetail?: any;
  reply?: any;
  commentDetail?: any;
};

const TypeCommentInput = ({
  dataComment,
  setDataComment,
  postDetail,
  setPostDetail,
  reply,
  commentDetail,
}: TypeCommentInputProps) => {
  //
  const { user, socket } = useSelector<RootState, RootState>((state) => state);
  const refContent = React.useRef<HTMLDivElement>(null);
  const handleSendComment = async (dataComment) => {
    const id = v4();
    const { value, content, type } = dataComment;
    refContent.current.innerText = "";
    const object = {
      id: null,
      userCommentPost: user,
      postCommentPost: postDetail.post,
      content: content,
      dataComment: JSON.stringify(dataComment),
      typeComment: type,
      timeCreated: null,
      replyComment: reply
        ? commentDetail.commentPostLevel1.commentPost.id
        : null,
    };
    setDataComment({ value: null, content: "", type: 0 });
    if (!reply) {
      setPostDetail({
        ...postDetail,
        commentDetailList: [
          {
            commentPostLevel1: {
              commentPost: { ...object, id: id },
              feelCommentList: [],
              loading: true,
            },
            commentPostLevel2List: [],
          },
        ].concat([...postDetail.commentDetailList]),
      });
    } else {
      const index = postDetail.commentDetailList.findIndex(
        (data) =>
          data.commentPostLevel1.commentPost.id ===
          commentDetail.commentPostLevel1.commentPost.id
      );
      if (index !== -1)
        postDetail.commentDetailList[index].commentPostLevel2List = [
          {
            commentPost: { ...object, id: id },
            feelCommentList: [],
            loading: true,
          },
        ].concat([
          ...postDetail.commentDetailList[index].commentPostLevel2List,
        ]);
    }
    if (type === 1) {
      const formData = new FormData();
      formData.append("multipartFile", value);
      formData.append("id", new Date().getTime().toString());
      formData.append("publicId", "Comments/");
      formData.append("typeFile", "image");
    }
    const result = { data: null };
    if (!reply) {
      setPostDetail({
        ...postDetail,
        commentDetailList: [
          {
            commentPostLevel1: {
              commentPost: result.data,
              feelCommentList: [],
            },
            commentPostLevel2List: [],
          },
        ].concat(
          [...postDetail.commentDetailList].filter(
            (data) => data.commentPostLevel1.commentPost.id !== id
          )
        ),
      });
    } else {
      const index = postDetail.commentDetailList.findIndex(
        (data) =>
          data.commentPostLevel1.commentPost.id ===
          commentDetail.commentPostLevel1.commentPost.id
      );
      if (index !== -1) {
        let clone = { ...postDetail };
        clone.commentDetailList[index].commentPostLevel2List = [
          {
            commentPost: result.data,
            feelCommentList: [],
          },
        ].concat(
          [...clone.commentDetailList[index].commentPostLevel2List].filter(
            (data) => data.commentPost.id !== id
          )
        );
        setPostDetail(clone);
      }
    }
    socket.emit(`sendCommentPost`, result.data);
  };
  //
  return (
    <>
      <div className="w-full mx-0 my-2 flex relative">
        <img
          className="w-12 h-12 p-0.5 object-cover rounded-full border-2 border-solid"
          src={user.avatar}
          alt=""
        />
        <div
          className=" ml-2 relative bg-gray-100 dark:bg-dark-third overflow-hidden rounded-full"
          style={{ width: "calc(100% - 54px)" }}
        >
          <div
            aria-hidden
            ref={refContent}
            onInput={(event) => {
              setDataComment({
                ...dataComment,
                content: event.currentTarget.textContent,
              });
            }}
            onKeyDown={(event) => {
              if (event.key === "enter") {
                event.preventDefault();
                handleSendComment(dataComment);
              }
            }}
            className="border-none pl-3 outline-none bg-gray-100 dark:bg-dark-thirddark:text-white py-3 "
            style={{ minHeight: 30, width: "96%" }}
            contentEditable={true}
          ></div>
        </div>
        <CategoryInputComment
          setDataComment={setDataComment as any}
          dataComment={dataComment}
          handleSendComment={handleSendComment}
          ref={refContent}
        />
      </div>
      {dataComment?.value?.name && (
        <PreviewImageComment
          dataComment={dataComment}
          setDataComment={setDataComment}
        />
      )}
    </>
  );
};

export default TypeCommentInput;
