import ItemSticker from "@/components/Popovers/PopoverSticker/ItemSticker";
import { Comment } from "@/interfaces/Comment";
import * as React from "react";

export default React.forwardRef(function ContentComment(
  { commentPost }: { commentPost: Comment },
  ref: React.RefObject<HTMLImageElement>
) {
  switch (commentPost.content.type) {
    case 1:
      return (
        <img
          ref={ref}
          src={commentPost.content.text}
          alt={``}
          className="w-80 h-56 rounded-lg object-cover"
        />
      );
    case 2:
      return (
        <ItemSticker
          ref={ref}
          sticker={JSON.parse(commentPost.content.text)}
          handleClick={() => ""}
        />
      );
    default:
      return <></>;
  }
});
