import * as React from "react";
import CloseComponent from "../CloseComponent";

export default function PreviewImageComment(props: any) {
  //
  const { dataComment, setDataComment } = props;
  //
  return (
    <div className="w-11/12 pt-2 pl-2.5 ml-auto mt-2 relative">
      <CloseComponent
        handleClick={() =>
          setDataComment({ ...dataComment, value: null, type: -1 })
        }
      >
        &times;
      </CloseComponent>
      <img
        src={URL.createObjectURL(dataComment.value)}
        alt=""
        className="w-20 h-28 object-cover rounded-md"
      />
    </div>
  );
}
