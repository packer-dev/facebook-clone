import * as React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemSendImageVideo from ".";

const SendImageVideo = ({
  mini,
  files,
}: {
  mini?: boolean;
  files?: FileList;
}) => {
  //
  return (
    <div
      className="absolute rounded-2xl z-50"
      style={{ bottom: "100%", maxWidth: mini ? 330 : 550 }}
    >
      <ScrollContainer
        className="flex p-2 overflow-x-auto cursor-pointer list-none"
        style={{ maxWidth: mini ? 330 : 550 }}
      >
        <ItemSendImageVideo file={files[0]} mini={mini} />
      </ScrollContainer>
    </div>
  );
};

export default SendImageVideo;
