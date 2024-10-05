import * as React from "react";
import { useSelector } from "react-redux";
import PreviewImageComment from "../PreviewImageComment";
import { RootState, getSocket, getUser } from "@/reducers";
import CategoryInputComment from "./CategoryInputComment";
import { User } from "@/interfaces/User";
import { Comment, CommentDTO } from "@/interfaces/Comment";
import { generateUUID } from "@/utils";
import { ItemPostContext } from "@/contexts/ItemPostContext";
import { sendComment } from "@/apis/commentAPIs";
import { commentModel, userModel } from "@/models";
import { Socket } from "socket.io-client";
import { updateDataComment } from "@/hooks/realtime/useListeningComment";

const TypeCommentInput = ({ parent }: { parent?: string }) => {
  //
  const {
    state: {
      postDetail,
      dataComment,
      file,
      edit,
      replyFileComment,
      replyDataComment,
    },
    updateData,
  } = React.useContext(ItemPostContext);
  const socket = useSelector<RootState, Socket>(getSocket);
  const user = useSelector<RootState, User>(getUser);
  const refContent = React.useRef<HTMLDivElement>(null);
  const handleSendComment = async (val?: any, type?: number) => {
    if (!user) return;
    const jsonString = () => {
      if (type !== 3) return "";
      const jsonFunction = (file: File | { url: string }) => {
        return JSON.stringify({
          url: "name" in file ? URL.createObjectURL(file) : file.url,
          text: parent ? replyDataComment[parent].text : dataComment.text,
        });
      };
      const jsonString = parent
        ? jsonFunction(replyFileComment[parent])
        : jsonFunction(file);

      return jsonString;
    };
    const textString = parent
      ? replyDataComment[parent]?.text || ""
      : dataComment.text;
    let newDataComment = {
      ...(parent ? replyDataComment[parent] : dataComment),
      type: type,
      id: generateUUID(),
      text: type === 3 ? jsonString() : val || textString,
    };
    let comment: Comment = {
      id: edit,
      user,
      content: newDataComment,
      level: parent ? 2 : 1,
      parent: parent || "",
      loading: true,
    };

    let newComments: CommentDTO[] = postDetail.comments.list;
    let newPostDetail = { ...postDetail };
    if (!edit) {
      newComments = parent
        ? [...postDetail.comments.list].map((item) => {
            if (item.item.id === parent) {
              return { ...item, child: [comment, ...item.child] };
            }
            return item;
          })
        : [{ item: comment, child: [] }, ...postDetail.comments.list];
      newPostDetail = {
        ...postDetail,
        comments: {
          ...postDetail.comments,
          list: newComments,
        },
      };
      updateData("postDetail", newPostDetail);
    }
    const comment_ = { ...comment };
    delete comment_.loading;
    const formData = new FormData();
    formData.append(
      "comment",
      JSON.stringify(
        commentModel({
          ...comment_,
          content: newDataComment,
          user: userModel(user),
        })
      )
    );
    formData.append("post_id", postDetail.post.id);
    if (!parent && file && "name" in file) {
      formData.append("media_new", file);
    }
    if (parent && "name" in replyFileComment[parent]) {
      formData.append("media_new", replyFileComment[parent]);
    }
    if (edit && file && "name" in file) {
      formData.append("media_old", JSON.parse(comment.content.text)?.url);
    }
    refContent.current.innerText = "";
    if (parent) {
      updateData("replyFileComment", {
        ...replyFileComment,
        [parent]: null,
      });
    } else {
      updateData("file", null);
    }
    comment = await sendComment(formData);
    const listComment = updateDataComment(newPostDetail, {
      edit,
      parent,
      comment,
      level: parent ? 2 : 1,
    });
    updateData("postDetail", {
      ...newPostDetail,
      comments: {
        ...newPostDetail.comments,
        list: listComment,
      },
    });
    socket.emit("send-comment", {
      level: parent ? 2 : 1,
      edit,
      comment,
      parent,
      postId: postDetail.post.id,
    });
  };
  React.useEffect(() => {
    if (edit) {
      const comment = postDetail.comments.list.find(
        (item) => item.item.id === edit
      );
      if (!comment) return;
      updateData("dataComment", comment.item.content);
      if (comment.item.content.type === 2) return;
      refContent.current.innerText =
        comment.item.content.type === 3
          ? JSON.parse(comment.item.content.text)?.text
          : comment.item.content.text;
      comment.item.content.type === 3 &&
        updateData("file", {
          url: JSON.parse(comment.item.content.text)?.url,
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);
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
              if (parent) {
                updateData("replyDataComment", {
                  ...replyDataComment,
                  [parent]: {
                    ...replyDataComment[parent],
                    text: event.currentTarget.innerText,
                  },
                });
              } else {
                updateData("dataComment", {
                  ...dataComment,
                  text: event.currentTarget.innerText,
                });
              }
            }}
            onKeyDown={async (event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSendComment("", file || replyFileComment[parent] ? 3 : 1);
              }
            }}
            data-placeholder={`Comment with name ${user.name}`}
            className="border-none pl-3 outline-none bg-gray-100 dark:bg-dark-third dark:text-white py-3"
            style={{ minHeight: 30, width: "96%" }}
            contentEditable
          />
        </div>
        <CategoryInputComment
          handleSendComment={handleSendComment}
          ref={refContent}
          parent={parent}
        />
      </div>
      {!parent && file && <PreviewImageComment file={file} parent="" />}
      {parent && replyFileComment[parent] && (
        <PreviewImageComment file={replyFileComment[parent]} parent={parent} />
      )}
    </>
  );
};

export default TypeCommentInput;
