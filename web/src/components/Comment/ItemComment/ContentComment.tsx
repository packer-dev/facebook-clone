import ItemSticker from "@/popovers/PopoverSticker/ItemSticker";
import { CommentDTO } from "@/interfaces/Comment";
import * as React from "react";

export default React.forwardRef(function ContentComment(
  { commentPost }: { commentPost: CommentDTO },
  ref: React.RefObject<HTMLImageElement>
) {
  switch (commentPost.item.content.type) {
    case 3:
      return (
        <img
          ref={ref}
          src={commentPost.item.content.text}
          alt=""
          className="w-80 h-56 rounded-lg object-cover"
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
});
