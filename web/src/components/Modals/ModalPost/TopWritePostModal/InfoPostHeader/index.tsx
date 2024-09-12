import { User } from "@/interfaces/User";
import * as React from "react";

type InfoPostHeaderProps = {
  user?: User;
  post?: any;
  tagList?: any[];
  hideName?: boolean;
  tagMain?: any;
  itemPost?: any;
};

const InfoPostHeader = ({
  user,
  post,
  tagList,
  hideName,
  tagMain,
  itemPost,
}: InfoPostHeaderProps) => {
  //
  const checkNull = (data: any) => {
    return itemPost ? (data ? JSON.parse(data) : null) : data;
  };
  const feel = checkNull(post?.feel);
  const activity = checkNull(post?.activity);
  const local = checkNull(post?.local);
  //
  return (
    <>
      {!hideName && (
        <span className="font-semibold mr-2">{`${user.name}`}</span>
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
      {tagList.length > 0 && (
        <span id="tag">
          cùng với{" "}
          <span className="font-semibold">
            {tagMain
              ? `${tagList[0].userTagPost.firstName} ${tagList[0].userTagPost.lastName}`
              : `${tagList[0].firstName} ${tagList[0].lastName}`}
          </span>
          {tagList.length > 1 && (
            <>
              {" "}
              và
              {` `}
              <span className="font-semibold">
                {tagList.length - 1} người khác{" "}
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
