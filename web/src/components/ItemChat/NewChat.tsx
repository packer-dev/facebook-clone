import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import MainContentMessage from "@/modules/Messenger/ContentMessage/MainContentMessage";
import { ItemChatContext } from "@/contexts/ItemChatContext";
import { useSelector } from "react-redux";
import { RootState, getCommon, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { getMessageMain } from "@/apis/messageAPIs";
import { CommonDataProps } from "@/reducers/common";

const ItemNewChat = forwardRef(
  ({ item, setText }: { item: User; setText: Function }, ref: any) => {
    //
    const {
      state: { choose },
      updateData,
    } = useContext(ItemChatContext);
    const index = choose.findIndex((dt) => dt.id === item.id);
    //
    return (
      <div
        aria-hidden
        onClick={() => {
          if (ref.current) {
            ref.current.innerText = "";
          }
          if (index === -1) {
            updateData("choose", [...choose, item]);
          } else {
            updateData(
              "choose",
              [...choose].filter((dt) => dt.id !== item.id)
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
            src={item.avatar}
            className="w-12 h-12 p-1 object-cover rounded-full"
            alt=""
            srcSet=""
          />
        </div>
        <div className="w-8/12 px-3 py-3 dark:text-white">{`${item.name}`}</div>
        <div className="w-2/12 py-3 text-center" />
      </div>
    );
  }
);

const NewChat = () => {
  //
  const {
    state: { choose },
    updateData,
  } = useContext(ItemChatContext);
  const user = useSelector<RootState, User>(getUser);
  const { friends } = useSelector<RootState, CommonDataProps>(getCommon);
  const refText = useRef();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
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
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getMessageMain(user?.id, choose[0].id);
      updateData("messages", result?.messages);
      setLoading(false);
    };
    if (choose.length === 1) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choose]);
  //
  return (
    <div className="w-full flex-1 p-1 relative">
      <div className="w-full h-full flex flex-col">
        <div className="w-full py-1 items-start border-b-2 border-solid flex gap-3 border-gray-200 dark:border-dark-third">
          <div className="pl-2 font-semibold py-2 dark:text-white">To :</div>
          <div className="flex-1 flex">
            <div className="w-auto flex flex-wrap">
              {choose.map((item) => (
                <div
                  key={item?.id}
                  aria-hidden
                  onClick={() =>
                    updateData(
                      "choose",
                      [...choose].filter((dt) => dt.id !== item.id)
                    )
                  }
                  className="mr-1 mb-2 break-all rounded-full text-sm w-auto cursor-pointer p-1.5 bg-blue-300 text-blue-500 font-bold"
                >
                  {`${item.name}`}
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
              contentEditable
              spellCheck
            />
          </div>
        </div>
        {loading && (
          <div className="w-full p-3 flex items-center justify-center">
            <i className="fas fa-circle-notch fa-spin text-2xl text-blue-500" />
          </div>
        )}
        {!loading && text && (
          <div className="w-full flex-1 p-1 wrapper-content-right overflow-y-auto overflow-x-hidden">
            {friends
              .filter(
                (item) =>
                  item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 &&
                  choose.findIndex((child) => child.id === item.id) === -1
              )
              .map((item) => (
                <ItemNewChat
                  key={item?.id}
                  item={item}
                  ref={refText}
                  setText={setText}
                />
              ))}
          </div>
        )}
        {!loading && choose.length === 1 && <MainContentMessage />}
      </div>
    </div>
  );
};

export default NewChat;
