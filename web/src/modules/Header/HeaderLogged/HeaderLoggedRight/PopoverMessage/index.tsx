import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, getUser } from "@/reducers";
import MessageList from "@/modules/Messenger/MessageList";
import { getListGroupByUserId } from "@/apis/groupAPIs";
import { Group } from "@/interfaces/Group";
import { User } from "@/interfaces/User";

const PopoverMessage = ({ closePopover }: { closePopover: () => void }) => {
  //
  const user = useSelector<RootState, User>(getUser);
  const [groups, setGroups] = useState<Group[]>([]);
  useEffect(() => {
    //
    const fetchData = async () => {
      const result = await getListGroupByUserId(user?.id);
      setGroups(result);
    };
    if (user) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  //
  return (
    <div className="w-full p-2 rounded-lg h-[725px]">
      <MessageList groups={groups} mini closePopover={closePopover} />
    </div>
  );
};

export default PopoverMessage;
