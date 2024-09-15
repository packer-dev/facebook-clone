import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import MessageList from "@/components/Messenger/MessageList";
import { getListGroupByUserId } from "@/apis/groupAPIs";
import { Group } from "@/interfaces/Group";

const PopoverMessage = ({ closePopover }: { closePopover: () => void }) => {
  //
  const { user } = useSelector<RootState, RootState>((state) => state);
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
    <div className="w-full p-2 rounded-lg" style={{ height: 725 }}>
      <MessageList groups={groups} mini={true} closePopover={closePopover} />
    </div>
  );
};

export default PopoverMessage;
