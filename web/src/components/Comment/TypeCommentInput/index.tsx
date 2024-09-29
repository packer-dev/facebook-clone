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
import { userModel } from "@/models";

const TypeCommentInput = ({ parent }: { parent?: string }) => {
  //
  const {
    state: { postDetail, dataComment, file, edit },
    updateData,
  } = React.useContext(ItemPostContext);
  const user = useSelector<RootState, User>(getUser);
  const refContent = React.useRef<HTMLDivElement>(null);
  const handleSendComment = async (val?: any, type?: number) => {
    if (!user) return;

    let newDataComment = {
      ...dataComment,
      type: type,
      id: generateUUID(),
      text:
        type === 3
          ? JSON.stringify({
              url: "name" in file ? URL.createObjectURL(file) : file.url,
              text: dataComment.text,
            })
          : val || dataComment.text,
    };
    let comment: Comment = {
      id: edit,
      user,
      content: newDataComment,
      time_created: getCurrentDateTime(),
      last_time_update: getCurrentDateTime(),
      level: parent ? 2 : 1,
      parent: parent || "",
      loading: true,
    };

    let newComments: CommentDTO[] = postDetail.comments.list;
    if (!edit) {
      newComments = parent
        ? [...postDetail.comments.list].map((item) => {
            if (item.item.id === parent) {
              return { ...item, child: [comment, ...item.child] };
            }
            return item;
          })
        : [{ item: comment, child: [] }, ...postDetail.comments.list];
      updateData("postDetail", {
        ...postDetail,
        comments: {
          ...postDetail.comments,
          list: newComments,
        },
      });
    }
    const comment_ = { ...comment };
    delete comment_.loading;
    const formData = new FormData();
    formData.append(
      "comment",
      JSON.stringify({
        ...comment_,
        content: newDataComment,
        user: userModel(user),
      })
    );
    formData.append("post_id", postDetail.post.id);
    if (file && "name" in file) {
      formData.append("media_new", file);
    }
    if (edit && file && "name" in file) {
      formData.append("media_old", JSON.parse(comment.content.text)?.url);
    }
    refContent.current.innerText = "";
    updateData("file", null);
    comment = await sendComment(formData);
    updateData("postDetail", {
      ...postDetail,
      comments: {
        ...postDetail.comments,
        list: !parent
          ? [{ item: comment, child: [] }, ...newComments]
              .filter((item) => item.item.id)
              .map((child) => {
                if (child.item.id === comment.id)
                  return { item: comment, child: [] };
                return child;
              })
          : [...newComments].map((item) => {
              if (parent === item.item.id) {
                item.child = [...item.child].filter((child) => child.id);
                item.child = edit
                  ? [...item.child].map((child) => {
                      if (child.id === comment.id) return comment;
                      return child;
                    })
                  : [comment, ...item.child];
              }
              return item;
            }),
      },
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
              updateData("dataComment", {
                ...dataComment,
                text: event.currentTarget.innerText,
              });
            }}
            onKeyDown={async (event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSendComment("", file ? 3 : 1);
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
        />
      </div>
      {file && edit && <PreviewImageComment file={file} />}
    </>
  );
};

export default TypeCommentInput;
