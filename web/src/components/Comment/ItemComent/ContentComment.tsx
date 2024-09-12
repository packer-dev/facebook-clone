import ItemSticker from "@/components/Popovers/PopoverSticker/ItemSticker";
import * as React from "react";

export default React.forwardRef(function ContentComment(
  { commentPost }: { commentPost: any },
  ref: any
) {
  //
  const DataCommentPost = () => {
    let data: any = "";
    switch (commentPost.commentPost.typeComment) {
      case 0:
        break;
      case 1:
        data = (
          <img
            ref={ref}
            src={JSON.parse(commentPost.commentPost.dataComment).value}
            alt={``}
            className="w-80 h-56 rounded-lg object-cover"
          />
        );
        break;
      case 2:
        data = (
          <ItemSticker
            ref={ref}
            sticker={JSON.parse(commentPost.commentPost.dataComment).value}
            handleClick={() => ""}
          />
        );
        break;
      default:
        break;
    }
    return data;
  };
  //
  return <DataCommentPost />;
});
