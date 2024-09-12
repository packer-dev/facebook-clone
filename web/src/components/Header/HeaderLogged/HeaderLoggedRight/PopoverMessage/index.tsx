import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import MessageList from "@/components/Messenger/MessageList";

export default function PopoverMessage() {
  //
  const { user } = useSelector<RootState, RootState>((state) => state);
  const [allMessage, setAllMessage] = useState([]);
  useEffect(() => {
    //
    const fetch = async () => {
      setAllMessage([]);
    };
    if (user) {
      fetch();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  //
  return (
    <div className="w-full p-2 rounded-lg" style={{ height: 725 }}>
      {allMessage ? (
        <MessageList allMessage={allMessage} mini={true} />
      ) : (
        "loading"
      )}
    </div>
  );
}
