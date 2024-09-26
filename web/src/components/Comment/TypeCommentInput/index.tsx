import * as React from "react";
import { useSelector } from "react-redux";
import PreviewImageComment from "../PreviewImageComment";
import { RootState, getUser } from "@/reducers";
import CategoryInputComment from "./CategoryInputComment";
import { User } from "@/interfaces/User";
import { Comment, CommentDTO } from "@/interfaces/Comment";
import { generateUUID, getCurrentDateTime } from "@/utils";
import { ItemPostContext } from "@/contexts/ItemPostContext";
import { sendComment } from "@/apis/commentAPIs";
import { uploadMedia } from "@/apis/uploadAPIs";

const TypeCommentInput = ({ parent }: { parent?: string }) => {
  //
  const {
    state: { postDetail, dataComment, file },
    updateData,
  } = React.useContext(ItemPostContext);
  const user = useSelector<RootState, User>(getUser);
  const refContent = React.useRef<HTMLDivElement>(null);
  const handleSendComment = async (val?: any, type?: number) => {
    if (!user) return;
    let newDataComment = {
      ...dataComment,
      id: generateUUID(),
      text: val || dataComment.text,
    };
    let comment: Comment = {
      id: "",
      user,
      content: newDataComment,
      time_created: getCurrentDateTime(),
      last_time_update: getCurrentDateTime(),
      level: type,
      parent,
      loading: true,
    };
    let newComments: CommentDTO[] = parent
      ? [...postDetail.comments].map((item) => {
          if (item.item.id === parent) {
            return { ...item, child: [comment, ...item.child] };
          }
          return item;
        })
      : [{ item: comment, child: [] }, ...postDetail.comments];
    updateData("postDetail", { ...postDetail, comments: newComments });
    if (dataComment.type === 3 && file?.length) {
      const formData = new FormData();
      formData.append("file", file[0]);
      formData.append("folder", "Image Comments");
      const result = await uploadMedia(formData);
      newDataComment = { ...newDataComment, text: JSON.stringify(result) };
    }
    delete comment.loading;
    const formData = new FormData();
    formData.append(
      "comment",
      JSON.stringify({ ...comment, content: newDataComment })
    );
    formData.append("post_id", postDetail.post.id);
    comment = await sendComment(formData);
    updateData("postDetail", {
      ...postDetail,
      comments: [...newComments].map((child) => {
        if (child.item.id === parent) {
          return {
            ...child,
            child: [...child.child].map((item) => {
              if (item.id === comment.id) return comment;
              return item;
            }),
          };
        }
        if (!parent && child.item.id === comment.id)
          return { item: comment, child: [] };
        return child;
      }),
    });
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
              updateData("dataComment", {
                ...dataComment,
                content: event.currentTarget.textContent,
              });
            }}
            onKeyDown={async (event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSendComment("", 1);
              }
            }}
            className="border-none pl-3 outline-none bg-gray-100 dark:bg-dark-third dark:text-white py-3"
            style={{ minHeight: 30, width: "96%" }}
            contentEditable
          />
        </div>
        <CategoryInputComment
          handleSendComment={handleSendComment}
          ref={refContent}
        />
      </div>
      {file && <PreviewImageComment file={file} />}
    </>
  );
};

export default TypeCommentInput;
