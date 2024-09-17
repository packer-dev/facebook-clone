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

const TypeCommentInput = () => {
  //
  const {
    state: { comments, postDetail, dataComment, file },
    updateData,
  } = React.useContext(ItemPostContext);
  const user = useSelector<RootState, User>(getUser);
  const refContent = React.useRef<HTMLDivElement>(null);
  const handleSendComment = async (val: any, type = 1) => {
    if (!user) return;

    let comment: Comment = {
      id: "",
      user,
      content: {
        id: generateUUID(),
        text: type === 1 ? refContent.current?.innerText : val,
        type: type,
      },
      time_created: getCurrentDateTime(),
      last_time_update: getCurrentDateTime(),
      level: type,
      parent: "",
      loading: true,
    };
    let newComments: CommentDTO[] = [{ item: comment, child: [] }, ...comments];
    updateData("comments", newComments);
    delete comment.loading;
    const formData = new FormData();
    formData.append("comment", JSON.stringify(comment));
    formData.append("post_id", postDetail.post.id);
    comment = await sendComment(formData);
    updateData(
      "comments",
      [...newComments].map((item) => {
        if (item.item.id === comment.id) return { item: comment, child: [] };
        return item;
      })
    );
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
            onKeyDown={(event) => {
              if (event.key === "enter") {
                event.preventDefault();
                handleSendComment(dataComment);
              }
            }}
            className="border-none pl-3 outline-none bg-gray-100 dark:bg-dark-thirddark:text-white py-3 "
            style={{ minHeight: 30, width: "96%" }}
            contentEditable={true}
          />
        </div>
        <CategoryInputComment
          handleSendComment={handleSendComment}
          ref={refContent}
        />
      </div>
      {file && <PreviewImageComment />}
    </>
  );
};

export default TypeCommentInput;
