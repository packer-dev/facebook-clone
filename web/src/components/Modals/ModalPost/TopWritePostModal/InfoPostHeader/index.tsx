import { Activity, FeelPost, Local } from "@/interfaces/Post";
import { User } from "@/interfaces/User";
import * as React from "react";

type InfoPostHeaderProps = {
  user?: User;
  tagList?: User[];
  feel?: FeelPost;
  activity?: Activity;
  local?: Local;
  hideName?: boolean;
};

const InfoPostHeader = ({
  user,
  tagList,
  hideName,
  feel,
  activity,
  local,
}: InfoPostHeaderProps) => {
  //
  //
  return (
    <>
      {!hideName && (
        <span className="font-semibold mr-2">{`${user?.name}`}</span>
      )}
      {feel && (
        <span id="feelCur">
          đang {feel.data} cảm thấy {feel.label.toLowerCase()}{" "}
        </span>
      )}
      {activity && (
        <span id="feelCur">
          đang {activity.data} {activity.name.replace("Đang", "")}{" "}
          {activity.label.toLowerCase()}{" "}
        </span>
      )}
      {tagList?.length > 0 && (
        <span id="tag">
          cùng với{" "}
          <span className="font-semibold">{`${tagList[0]?.name}`}</span>
          {tagList?.length > 1 && (
            <>
              {" "}
              và
              {` `}
              <span className="font-semibold">
                {tagList?.length - 1} người khác{" "}
              </span>
            </>
          )}
        </span>
      )}
      {local && (
        <span id="local">
          tại <b className="dark:text-white"> {local.name}</b>
        </span>
      )}
    </>
  );
};

export default InfoPostHeader;
