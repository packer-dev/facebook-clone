import * as React from "react";
import Avatar from "../Avatar";
import GroupAvatar from "../GroupAvatar";
import { useSelector } from "react-redux";
import { getCall, RootState } from "@/reducers";
import { CallProps } from "@/reducers/call";

const InfoCalling = () => {
  //
  const { mode, current, group, acceptUser } = useSelector<
    RootState,
    CallProps
  >(getCall);
  return (
    <div
      className="w-80 p-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 flex flex-col justify-center text-white"
    >
      {mode === "group" && <GroupAvatar group={group} />}
      {mode === "single" && (
        <Avatar uri={current?.avatar || ""} online={false} />
      )}
      <p className="font-bold text-2xl text-center py-1">
        {mode === "single"
          ? `${current?.name}`
          : group?.name ||
            group?.members.map((item) => item?.user?.name).join(", ")}
      </p>
      <p className="font-semibold text-sm text-center py-1 text-gray-300">
        {acceptUser.length > 0 ? "00:00" : "Calling..."}
      </p>
    </div>
  );
};

export default InfoCalling;
