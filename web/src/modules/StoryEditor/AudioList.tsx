import React, { useContext, useEffect, useRef, useState } from "react";
import audioList from "@/config/audioList";
import { StoryEditorContext } from "@/contexts/StoryEditorContext";
import Input from "@/components/Input";

const AudioList = () => {
  //
  const refAudio = useRef<HTMLAudioElement>();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    //
    if (!play) {
      if (refAudio.current) {
        refAudio.current.pause();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);
  const {
    state: { audio },
  } = useContext(StoryEditorContext);
  //
  return (
    <div
      className="w-full pb-2 border-2 border-solid border-gray-200 rounded-lg bg-white dark:bg-dark-third
      mb-2 dark:border-dark-third  text-center shadow-xl"
      style={{ maxHeight: 384, height: 384 }}
    >
      <p className="font-bold text-xm text-left py-1 px-2 dark:text-white">
        Music
      </p>
      <audio
        ref={refAudio}
        autoPlay
        className="hidden"
        loop
        src={audio ? audio.src : ""}
      >
        <track
          src="path-to-captions.vtt"
          kind="captions"
          srcLang="en"
          label="English"
          default
        />
      </audio>
      <Input
        type="text"
        name=""
        className="my-3"
        width="w-11/12"
        placeholder="Type name music"
      />
      <ul className="w-full text-left wrapper-content-right overflow-y-auto">
        {audioList.map((item, index) => (
          <ItemAudio
            index={index}
            key={item?.id}
            item={item}
            refAudio={refAudio}
            play={play}
            setPlay={setPlay}
          />
        ))}
      </ul>
    </div>
  );
};

const ItemAudio = ({ refAudio, item }: any) => {
  //
  const {
    state: { audio },
    updateData,
  } = useContext(StoryEditorContext);
  const [current, setCurrent] = useState(false);
  useEffect(() => {
    if (audio) {
      if (audio.id !== item.id) {
        setCurrent(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);
  //
  return (
    <li
      className="flex flex-row gap-3 p-1 border-2 border-solid border-gray-300 
        dark:border-dark-third relative cursor-pointer"
    >
      <div className="pt-1">
        <img
          src="/images/mp3.png"
          className="w-10 h-10 p-0.5 rounded-full object-cover"
          alt=""
        />
      </div>
      <div
        aria-hidden
        onClick={() => {
          updateData("audio", item);
        }}
        className="flex-1 font-semibold dark:text-white text-left"
      >
        <p className="">{`${item.name}`}</p>
        <p className="text-xs text-gray-600 dark:text-gray-300">{`${item.author}`}</p>
      </div>
      <div
        aria-hidden
        onClick={() => {
          if (refAudio.current) {
            refAudio.current.play();
            updateData("audio", item);
            if (!current) {
              refAudio.current.play();
            } else {
              refAudio.current.pause();
            }
            setCurrent(!current);
          }
        }}
        className="absolute top-3 right-3 dark:text-white cursor-pointer"
      >
        <i
          className={`${
            current ? "fas fa-stop-circle" : "fas fa-play-circle"
          } text-xl`}
        />
      </div>
    </li>
  );
};
export default AudioList;
