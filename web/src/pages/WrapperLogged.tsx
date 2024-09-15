import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderLogged from "@/components/Header/HeaderLogged";
import ItemChat from "@/components/ItemChat";
import ItemChatMinize from "@/components/ItemChatMinize";
import WrapperPage from "./WrapperPage";
import { AppDispatch, RootState } from "@/reducers";
import { updateDataUserChat, ZoomUserChatProps } from "@/reducers/userChat";

type WrapperLoggedProps = {
  hideChat?: boolean;
  hideMessage?: boolean;
  hideHeader?: boolean;
  children?: React.ReactNode;
};

const WrapperLogged = ({
  hideChat,
  hideMessage,
  hideHeader,
  children,
}: WrapperLoggedProps) => {
  //
  const dispatch = useDispatch<AppDispatch>();
  const { user, userChat } = useSelector<RootState, RootState>(
    (state) => state
  );
  const ref = React.useRef<HTMLAudioElement>(null);
  console.log(userChat);
  //
  return (
    <WrapperPage>
      <audio ref={ref} src={""} muted className="hidden"></audio>
      {user && (
        <div className="w-full bg-gray-100 dark:bg-dark-main h-screen overflow-hidden relative">
          {!hideHeader && <HeaderLogged hideMessage={hideMessage} />}
          {children}
          {!hideChat && (
            <div className="h-auto p-3 w-20">
              <div className="text-center cursor-pointer py-2 pl-2 pr-1.5 fixed right-3 bottom-4 z-30">
                {userChat.minize.map((item, index) => (
                  <ItemChatMinize item={item} key={item?.id} />
                ))}
                <div
                  onClick={() => {
                    const newData: ZoomUserChatProps = {
                      id: "new",
                      is_new: true,
                    };
                    dispatch(
                      updateDataUserChat({
                        key: "zoom",
                        value: [...userChat.zoom, newData],
                      })
                    );
                  }}
                  aria-hidden="true"
                  className="cursor-pointer shadow-lv1 shadow-xl rounded-full bg-white dark:bg-dark-second 
                   dark:text-white w-12 h-12 border-2 border-solid border-gray-200 dark:border-dark-third flex 
                  items-center justify-center "
                >
                  <i className="bx bx-plus text-2xl"></i>
                </div>
              </div>
            </div>
          )}
          {userChat.zoom.length > 0 && (
            <div className="fixed bottom-0 flex right-20 z-40">
              {userChat.zoom.map((item) => (
                <ItemChat key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </WrapperPage>
  );
};

export default WrapperLogged;
