import * as React from "react";
import Webcam from "react-webcam";

const WebcamView = () => {
  //
  const videoConstraints = {
    width: 400,
    height: 230,
    facingMode: "environment",
  };

  return (
    <div className="w-80 h-54 absolute bottom-6 right-3">
      <Webcam
        audio={false}
        height={230}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
        className="transform scale-x-[-1px]"
      />
    </div>
  );
};

export default WebcamView;
