import React, { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemWatchChildren from "../ItemWatchChildren";
import CircleIcon from "@/components/CircleIcon";

const WatchNewBest = ({ images }) => {
  //
  const refContainer = useRef<HTMLDivElement>();
  const refScroll = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    //
    if (!refScroll.current || !refContainer.current) return;

    refScroll.current.scrollLeft = refContainer.current.offsetWidth * index;
    //
  }, [index, refScroll, refContainer]);
  //
  return (
    <div className="w-full p-5 rounded-lg">
      <p className="font-bold text-xl dark:text-gray-300">New for you</p>
      <div ref={refContainer} className="w-full relative">
        {index - 1 >= 0 && (
          <CircleIcon
            handleClick={() => {
              setIndex(index - 1);
            }}
            className={`w-9 h-9 bx bxs-chevron-left text-xl bg-gray-200 
            absolute top-1/2 transform -translate-y-1/2 -ml-5`}
          />
        )}
        <ScrollContainer className="w-full flex overflow-x-auto scroll-smooth">
          {images.map((item) => (
            <ItemWatchChildren
              name="Hello TV"
              image
              key={item}
              multiline="9+ new videos"
              right
              data={item}
            />
          ))}
        </ScrollContainer>
        {index + 1 <= images.length / 2 && (
          <CircleIcon
            handleClick={() => {
              setIndex(index + 1);
            }}
            className="w-9 h-9 bx bxs-chevron-right text-xl bg-gray-200 
            absolute top-1/2 transform -translate-y-1/2 -mr-5 right-0"
          />
        )}
      </div>
    </div>
  );
};
export default WatchNewBest;
