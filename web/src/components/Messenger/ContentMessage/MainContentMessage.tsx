import React, { memo, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ItemMessageLeft from "../ItemMessage/ItemMessageLeft";
import ItemMessageRight from "../ItemMessage/ItemMessageRight";
import { RootState } from "@/reducers";

export default memo(function MainContentMessage(props: any) {
  //
  const { messages, groupMessage, choose, typeGroupMessage } = props;
  const item = props.item
    ? props.item.userUserRelationShip
      ? props.item.userUserRelationShip
      : props.item
    : null;
  const { user } = useSelector<RootState, RootState>((state) => state);
  const refContentMessage = useRef<HTMLDivElement>();
  useEffect(() => {
    //
    if (refContentMessage.current) {
      refContentMessage.current.scrollTop =
        refContentMessage.current.scrollHeight;
    }
    //
  }, [refContentMessage, messages]);
  //
  return (
    <div
      ref={refContentMessage}
      className="w-full p-1 flex-1 wrapper-content-right overflow-y-auto overflow-x-hidden
         relative"
      style={{ scrollBehavior: "unset" }}
    >
      {Array.isArray(messages) && (
        <div className="w-full">
          {messages.length === 0 ? (
            item && item.avatar && typeGroupMessage === 0 ? (
              <div className="w-full p-2 text-center">
                <div className="w-16 h-16 relative mx-auto">
                  <img
                    src={item.avatar}
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                    alt=""
                  />
                </div>
                <p className="text-center text-gray-900 font-semibold dark:text-white">
                  <span className="py-1.5 text-sm font-semibold dark:text-gray-300 ">
                    Facebook
                  </span>
                  <br />
                  <span className="text-sm font-semibold dark:text-gray-300">
                    Các bạn hiện là bạn bè trên Ensonet
                  </span>
                </p>
              </div>
            ) : (
              Array.isArray(choose) &&
              choose.length > 0 && (
                <div className="w-full p-2 text-center">
                  <div className="w-16 h-16 relative mx-auto">
                    {[...choose].slice(0, 3).map((item, index) => (
                      <img
                        src={
                          item.userUserRelationShip
                            ? item.userUserRelationShip.avatar
                            : item.avatar
                        }
                        className={`w-9 h-9 border-2 border-solid border-white rounded-full object-cover absolute ${
                          index === 0
                            ? "top-0 left-0"
                            : choose.length === 2 && index === 1
                            ? "bottom-0 right-0"
                            : index === 1
                            ? "top-0 right-0"
                            : "bottom-0 transform -translate-x-1/2 left-1/2"
                        }`}
                        alt=""
                      />
                    ))}
                  </div>
                  <p className="text-center text-gray-900 font-semibold dark:text-white">
                    <span className="text-sm font-semibold dark:text-gray-300">
                      {`${user.name} đã tạo nhóm.`}
                    </span>
                  </p>
                </div>
              )
            )
          ) : (
            messages.map((item) => {
              if (item.userMessage.id === user.id)
                return (
                  <ItemMessageRight
                    key={item.id}
                    item={item}
                    groupMessage={groupMessage}
                  />
                );
              else
                return (
                  <ItemMessageLeft
                    key={item.id}
                    item={item}
                    groupMessage={groupMessage}
                  />
                );
            })
          )}
        </div>
      )}
    </div>
  );
});
