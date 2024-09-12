import * as React from "react";
import ContentMessage from "./ContentMessage";

export default function ItemMessageRight(props: any) {
  //
  const { item, groupMessage } = props;
  //
  return (
    <div className="mess-user chat-rights z-0 w-full py-1 flex relative justify-end">
      <div
        className="mess-user-r1 pl-2 flex mr-4 relative z-20"
        style={{ width: "inherit" }}
      >
        {item.typeMessage !== 0 ? (
          <div className="ml-auto">
            <ContentMessage
              margin="ml-auto"
              item={item}
              groupMessage={groupMessage}
            />
          </div>
        ) : (
          <ContentMessage
            margin="ml-auto"
            item={item}
            groupMessage={groupMessage}
          />
        )}
      </div>
      <div className=" mess-user-r2 " style={{ width: "4%" }}>
        <div className="w-full clear-both">
          <i
            className={`${
              item.loading
                ? "bx bx-radio-circle text-xl text-gray-500 "
                : "fas fa-check-circle text-gray-300"
            } 
                    img-mess-right absolute bottom-2.5 right-1 `}
          ></i>
        </div>
      </div>
    </div>
  );
}
