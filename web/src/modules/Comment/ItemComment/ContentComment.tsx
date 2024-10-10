import ItemSticker from "@/popovers/PopoverSticker/ItemSticker";
import { CommentDTO } from "@/interfaces/Comment";
import * as React from "react";

type ContentCommentProps = { commentPost: CommentDTO };

const ContentComment = (
  { commentPost }: ContentCommentProps,
  ref: React.RefObject<HTMLImageElement>
) => {
  switch (commentPost.item.content.type) {
    case 3:
      return (
        <img
          ref={ref}
          src={JSON.parse(commentPost.item.content.text)?.url}
          alt=""
          className="w-80 h-56 mt-2 ml-2 rounded-lg object-cover"
        />
      );
    case 2:
      return (
        <ItemSticker
          ref={ref}
          sticker={JSON.parse(commentPost.item.content.text)}
        />
      );
    default:
      return <></>;
  }
};

export default React.forwardRef(ContentComment);
