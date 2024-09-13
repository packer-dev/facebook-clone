import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import MainContentMessage from "../Messenger/ContentMessage/MainContentMessage";
import { ItemChatContext } from "@/contexts/ItemChatContext";
import { Member } from "@/interfaces/Member";

const ItemNewChat = forwardRef(
  ({ item, setText }: { item: Member; setText: Function }, ref: any) => {
    //
    const {
      state: { members },
      updateData,
    } = useContext(ItemChatContext);
    const index = members.findIndex((dt) => dt.user.id === item.user.id);
    //
    return (
      <div
        aria-hidden
        onClick={() => {
          if (ref.current) {
            ref.current.innerText = "";
          }
          if (index === -1) {
            updateData("members", [...members, item]);
          } else {
            updateData(
              "members",
              [...members].filter((dt) => dt.user.id !== item.user.id)
            );
          }
          setText("");
        }}
        className={`w-full rounded-sm p-1.5 ${
          index === 1
            ? "dark:bg-dark-third bg-gray-200"
            : "dark:hover:bg-dark-third hover:bg-gray-200"
        } cursor-pointer flex`}
      >
        <div className="w-auto">
          <img
            src={item.user.avatar}
            className="w-12 h-12 p-1 object-cover rounded-full"
            alt=""
            srcSet=""
          />
        </div>
        <div className="w-8/12 px-3 py-3 dark:text-white">
          {`${item.user.name}`}
        </div>
        <div className="w-2/12 py-3 text-center"></div>
      </div>
    );
  }
);

export default function NewChat() {
  //
  const {
    state: { members },
    updateData,
  } = useContext(ItemChatContext);
  const refText = useRef();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("11");
  useEffect(() => {
    //
    let timeOut: ReturnType<typeof setTimeout>;
    if (text.length > 0) {
      setLoading(true);
      timeOut = setTimeout(async () => {
        setLoading(false);
      }, 300);
    } else {
      setLoading(false);
    }
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  //
  return (
    <div className="w-full flex-1 p-1 relative">
      <div className="w-full h-full flex flex-col">
        <div className="w-full py-1 items-start border-b-2 border-solid flex border-gray-200 dark:border-dark-third">
          <div className="w-2/12 pl-2 font-bold py-2 dark:text-white">To :</div>
          <div className="w-10/12 flex">
            <div className="w-auto flex flex-wrap">
              {members.map((item) => (
                <div
                  key={item?.id}
                  aria-hidden
                  onClick={() =>
                    updateData(
                      "members",
                      [...members].filter((dt) => dt.user.id !== item.user.id)
                    )
                  }
                  className="mr-2 mb-2 break-all rounded-full text-sm w-auto cursor-pointer p-1.5 bg-blue-300 text-blue-500 font-bold"
                >
                  {`${item.user.name}`}
                  <span className="ml-1 text-xm">&times;</span>
                </div>
              ))}
            </div>
            <div
              onInput={(event) => {
                setText(event.currentTarget.textContent);
              }}
              ref={refText}
              className="border-none pl-3 outline-none dark:text-white py-2"
              contentEditable={true}
              spellCheck={true}
            />
          </div>
        </div>
        {loading && (
          <div className="w-full p-3 flex items-center justify-center">
            <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
          </div>
        )}
        {!loading && text ? (
          <div className="w-full flex-1 p-1 wrapper-content-right overflow-y-auto overflow-x-hidden">
            {members.map((item) => (
              <ItemNewChat
                key={item?.id}
                item={item}
                ref={refText}
                setText={setText}
              />
            ))}
          </div>
        ) : (
          <MainContentMessage />
        )}
      </div>
    </div>
  );
}
