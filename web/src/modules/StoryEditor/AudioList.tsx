import React, {
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
        setPlay(false);
        refAudio.current.pause();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, refAudio]);
  const {
    state: { audio },
  } = useContext(StoryEditorContext);
  //
  return (
    <div
      className="w-full pb-2 border-2 border-solid border-gray-200 rounded-lg bg-white dark:bg-dark-third
      mb-2 dark:border-dark-third  text-center shadow-xl max-h-[384px] h-[384px]"
    >
      <p className="font-bold text-xm text-left py-1 px-2 dark:text-white">
        Music
      </p>
      {audio && (
        <audio ref={refAudio} src={audio.src} className="hidden" loop />
      )}
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

type ItemAudioProps = {
  refAudio: RefObject<HTMLAudioElement>;
  item: any;
  index: number;
  play?: boolean;
  setPlay?: Function;
};

const ItemAudio = ({ refAudio, item, index, setPlay }: ItemAudioProps) => {
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
  }, [audio, refAudio]);
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
          updateData("audio", item);
          const timeOut = setTimeout(() => {
            if (refAudio.current) {
              refAudio.current.play();
              if (!current) {
                refAudio.current.play();
                setPlay(true);
              } else {
                refAudio.current.pause();
                setPlay(false);
              }
              setCurrent(!current);
            }
            clearTimeout(timeOut);
          }, 200);
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
