import * as React from "react";

export default function InfoPostHeader({
  user,
  post,
  tagList,
  hideName,
  tagMain,
  itemPost,
}: any) {
  //
  const checkNull = (data) => {
    return itemPost ? (data ? JSON.parse(data) : null) : data;
  };
  const feel = checkNull(post.feel);
  const activity = checkNull(post.activity);
  const local = checkNull(post.local);
  //
  return (
    <>
      {!hideName && (
        <span className="font-semibold mr-2">{`${user.firstName} ${user.lastName}`}</span>
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
          {" "}
          tại <b className="dark:text-white"> {local.name}</b>
        </span>
      )}
    </>
  );
}
