import React, { useEffect, useRef } from "react";

type VideoUserMediaProps = {
  className?: string;
  stream: MediaStream;
};

const VideoUserMedia = ({ className = "", stream }: VideoUserMediaProps) => {
  const refStream = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    refStream.current.srcObject = stream;
    refStream.current.onloadedmetadata = (e) => {
      refStream.current.play();
    };
  }, [stream]);
  return <video ref={refStream} className={className}></video>;
};

export default VideoUserMedia;
