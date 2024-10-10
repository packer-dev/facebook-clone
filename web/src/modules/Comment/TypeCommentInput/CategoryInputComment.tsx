import PopoverEmoji from "@/popovers/PopoverEmoji";
import PopoverSticker from "@/popovers/PopoverSticker";
import PopoversWrapper from "@/popovers/PopoversWrapper";
import { ItemPostContext } from "@/contexts/ItemPostContext";
import { placeCaretAtEnd } from "@/functions";
import React, { RefObject, forwardRef, useContext } from "react";
import { v4 } from "uuid";
import { ContentComment } from "@/interfaces/ContentComment";

type CategoryInputCommentProps = {
  handleSendComment: Function;
  parent: string;
};

const CategoryInputComment = (
  props: CategoryInputCommentProps,
  ref: RefObject<HTMLDivElement>
) => {
  //
  const {
    state: { dataComment, file, replyDataComment, replyFileComment },
    updateData,
  } = useContext(ItemPostContext);
  const { handleSendComment } = props;
  const id = v4();
  const handleClick = (
    type: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const current = event.target;
    if (!current) {
      return;
    }
  };
  //
  return (
    <form>
      <div className="absolute transform -translate-y-1/2 top-1/2 right-2">
        <div className="flex relative items-center">
          <PopoversWrapper
            button={
              <div
                aria-hidden
                onClick={(event) => handleClick(1, event)}
                className=" w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                flex items-center justify-center"
              >
                <i className="far fa-smile dark:text-white text-gray-600" />
              </div>
            }
          >
            <PopoverEmoji
              handleClick={(item) => {
                updateData("dataComment", {
                  ...dataComment,
                  text: dataComment.text + item,
                  type: file ? 3 : 1,
                } as ContentComment);
                ref.current.innerText += item;
                placeCaretAtEnd(ref.current);
              }}
            />
          </PopoversWrapper>
          <div
            className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                flex items-center justify-center -ml-1.5"
          >
            <label htmlFor={id}>
              {" "}
              <i className="fas fa-camera dark:text-white text-gray-600" />
            </label>
            <input
              name="fileImage"
              className="hidden"
              onChange={(event) => {
                if (event.target.files.length > 0) {
                  if (props.parent) {
                    updateData("replyFileComment", {
                      ...replyFileComment,
                      [props.parent]: event.target.files[0],
                    });
                    updateData("replyDataComment", {
                      ...replyDataComment,
                      [props.parent]: {
                        ...replyDataComment[props.parent],
                        type: 3,
                        text: JSON.stringify({
                          url: URL.createObjectURL(event.target.files[0]),
                        }),
                      },
                    });
                  } else {
                    updateData("file", event.target.files[0]);
                    updateData("dataComment", {
                      ...dataComment,
                      type: 3,
                      text: JSON.stringify({
                        url: URL.createObjectURL(event.target.files[0]),
                      }),
                    });
                  }
                  event.currentTarget.files = null;
                }
              }}
              type="file"
              accept="image"
              formEncType="multipart/form-data"
              id={id}
            />
          </div>
          <div
            className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
            flex items-center justify-center -ml-1.5"
          >
            <i className="fas fa-radiation dark:text-white text-gray-600" />
          </div>
          <PopoversWrapper
            button={
              <div
                aria-hidden
                className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                    flex items-center justify-center -ml-1.5"
              >
                <i className="far fa-sticky-note dark:text-white text-gray-600" />
              </div>
            }
          >
            <PopoverSticker
              handleClick={(item) => handleSendComment(JSON.stringify(item), 2)}
            />
          </PopoversWrapper>
        </div>
      </div>
    </form>
  );
};

export default forwardRef(CategoryInputComment);
