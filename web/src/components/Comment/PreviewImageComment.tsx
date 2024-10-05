import * as React from "react";
import CloseComponent from "../CloseComponent";
import { ItemPostContext } from "@/contexts/ItemPostContext";

type PreviewImageCommentProps = {
  file: File | { url: string };
  parent: string;
};

const PreviewImageComment = ({ file, parent }: PreviewImageCommentProps) => {
  //
  const {
    state: { dataComment, replyFileComment, replyDataComment },
    updateData,
  } = React.useContext(ItemPostContext);
  //
  return (
    <div className="w-11/12 pt-2 pl-2.5 ml-auto mt-2 relative">
      <CloseComponent
        handleClick={() => {
          if (parent) {
            updateData("replyFileComment", {
              ...replyFileComment,
              [parent]: null,
            });
            updateData("replyFileComment", {
              ...replyDataComment,
              [parent]: { ...replyDataComment[parent], type: 1 },
            });
          } else {
            updateData("file", null);
            updateData("dataComment", { ...dataComment, type: 1 });
          }
        }}
      >
        &times;
      </CloseComponent>
      <img
        src={"name" in file ? URL.createObjectURL(file) : file.url}
        alt=""
        className="w-20 h-28 object-cover rounded-md"
      />
    </div>
  );
};

export default PreviewImageComment;
