import * as React from "react";
import ContentMessage from "./ContentMessage";
import { Message } from "@/interfaces/Message";
import { Group } from "@/interfaces/Group";

type ItemMessageRightProps = {
  item: Message;
  groupMessage: Group;
};

const ItemMessageRight = ({ item, groupMessage }: ItemMessageRightProps) => {
  //
  //
  return (
    <div className="mess-user chat-rights z-0 w-full py-1 flex relative justify-end">
      <div
        className={`mess-user-r1 flex ${
          item.content.type < 4 ? "mr-4 pl-2 w-3/4" : "w-full"
        } relative z-20`}
      >
        {item.content.type !== 0 ? (
          <div className={item.content.type < 4 ? "ml-auto" : "w-full"}>
            <ContentMessage
              margin={item.content.type < 4 ? "ml-auto" : ""}
              item={item}
              groupMessage={groupMessage}
            />
          </div>
        ) : (
          <ContentMessage
            margin={item.content.type < 4 ? "ml-auto" : ""}
            item={item}
            groupMessage={groupMessage}
          />
        )}
      </div>
      {item.content.type < 4 && (
        <div className=" mess-user-r2" style={{ width: "4%" }}>
          <div className="w-full clear-both">
            <i
              className={`${
                item.loading
                  ? "bx bx-radio-circle text-xl text-gray-500 "
                  : "fas fa-check-circle text-gray-300"
              } img-mess-right absolute bottom-2.5 right-1 `}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default ItemMessageRight;
