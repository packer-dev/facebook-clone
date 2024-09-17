import * as React from "react";
import ButtonComponent from "../ButtonComponent";

type MoreThanCommentProps = {
  setPostDetail?: Function;
  postDetail?: any;
  index?: number;
  setIndex?: Function;
  reply?: any;
  idComment?: string;
};

const MoreThanComment = ({
  postDetail,
  index,
  setIndex,
  reply,
  idComment,
}: MoreThanCommentProps) => {
  //
  const [loading, setLoading] = React.useState(true);
  const handleClick = async () => {
    setLoading(true);
    setIndex(index + 2);

    if (reply) {
      const pos = postDetail.commentDetailList.findIndex(
        (item) => item.commentPostLevel1.commentPost.id === idComment
      );
      if (pos !== -1) {
        let clone = { ...postDetail };
        clone.commentDetailList[pos].commentPostLevel2List = [
          ...clone.commentDetailList[pos].commentPostLevel2List,
        ].concat([]);
      }
    }
    setLoading(false);
  };
  //
  return (
    <ButtonComponent
      handleClick={handleClick}
      className="py-1 text-sm font-semibold text-gray-500 cursor-pointer"
    >
      {loading ? (
        <i className="fas fa-circle-notch text-2xl text-gray-500 mx-9 fa-spin" />
      ) : (
        "View more"
      )}
    </ButtonComponent>
  );
};

export default MoreThanComment;
