import React, { forwardRef } from "react";
import ItemSticker from "../../Popovers/PopoverSticker/ItemSticker";
import ChatText from "./ChatText";

export default forwardRef(function ContentMessage(props: any, ref: any) {
  //
  const { item, margin, left, groupMessage } = props;
  switch (item.typeMessage) {
    case 0:
      return (
        <ChatText
          item={item}
          groupMessage={groupMessage}
          margin={margin}
          left={left}
        />
      );
    case 1:
      return (
        <img
          ref={ref}
          src={JSON.parse(item.dataMessage).value}
          alt={``}
          className="w-80 h-56 rounded-lg object-cover"
        />
      );
    case 2:
      return (
        <ItemSticker
          ref={ref}
          groupMessage={groupMessage}
          sticker={JSON.parse(item.dataMessage).value}
          handleClick={() => ""}
        />
      );
    default:
      return <></>;
  }
});
