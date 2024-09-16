import React, {
  memo,
  StyleHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";
import * as StringUtils from "@/utils/StringUtils";
import { NormalPostProps } from "../NormalPost";
import { Media } from "@/interfaces/Media";

type ImageVideoProps<T> = {
  url: string;
  style: StyleHTMLAttributes<T>;
  className: string;
};

export default memo(function ImageVideoDisplay({
  imageVideoPostList,
  post,
}: NormalPostProps) {
  //
  const refContainer = useRef<HTMLDivElement>();
  const refLastNumber = useRef<HTMLDivElement>();
  const [data, setData] = useState<any>();
  const navigation = useNavigate();
  const length = imageVideoPostList.length;
  const result = length >= 5 ? 550 - 82 : 550;
  const height = imageVideoPostList.length === 2 ? 330 : result;
  useEffect(() => {
    //
    if (refContainer.current && length > 0) {
      const result = Array.from(imageVideoPostList)
        .slice(0, 5)
        .map((element: Media, index) => {
          const extension = element.url
            .split(".")
            [element.url.split(".").length - 1].toLowerCase();
          let ImageVideo: any = () => {
            return "";
          };
          if (
            extension === "jpg" ||
            extension === "jpeg" ||
            extension === "png"
          ) {
            ImageVideo = (props: ImageVideoProps<HTMLImageElement>) => {
              return (
                <img
                  aria-hidden
                  onClick={() => navigation(`${PAGE_VIEW_POST}/${post?.id}`)}
                  src={props.url}
                  style={props.style}
                  className={props.className}
                  alt=""
                />
              );
            };
          }
          if (extension === "mp4" || extension === "mov") {
            ImageVideo = (props: ImageVideoProps<HTMLVideoElement>) => {
              return (
                // <Link to={`${PAGE_VIEW_POST}/${post?.id}`}>
                <video
                  src={props.url}
                  style={props.style}
                  className={props.className}
                  controls
                />
                // </Link>
              );
            };
          }

          const divWidth = (index: number, length: number) => {
            const valueCase3 = length === 3 ? 3 : 1;
            switch (index) {
              case 3:
                return length === 4 ? 1.5 : valueCase3;
              case 4:
                return length === 4 ? 1.5 : 1;
              case 5:
                return 1;
              default:
                return 1.5;
            }
          };
          const divHeight = (index: number, length: number) => {
            const valueCase3 = 40;
            switch (index) {
              case 3:
                return length === 4 ? 40 : valueCase3;
              case 4:
                return 40;
              case 5:
                return 40;
              default:
                return 40;
            }
          };
          if (refLastNumber.current) {
            if (length > 4) {
              refLastNumber.current.style.width = `calc(${
                (divWidth(index + 1, length) / 3) * 100 + "%"
              } - 5px)`;
              refLastNumber.current.style.height = `${divHeight(
                index + 1,
                length
              )}%`;
              refLastNumber.current.className = `bg-black bg-opacity-50 flex justify-center items-center text-3xl
              font-bold absolute -bottom-1.5 shadow-lv1 text-white right-0.5`;
            }
          }
          const imageWidth =
            StringUtils.checkImageOrVideoToString(element.url) === "image"
              ? "100%"
              : "50%";
          return (
            <ImageVideo
              key={element.id}
              url={element.url}
              style={{
                width:
                  length === 1
                    ? "100%"
                    : `calc(${
                        (divWidth(index + 1, length) / 3) * 100 + "%"
                      } - 5px)`,
                height:
                  length === 1
                    ? imageWidth
                    : `${divHeight(index + 1, length)}%`,
                maxHeight: height,
                cursor: "pointer",
              }}
              className={"object-cover"}
            />
          );
        });
      setData(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div
      ref={refContainer}
      className="w-full gap-1.5 flex flex-wrap relative"
      style={
        imageVideoPostList?.length === 1 &&
        StringUtils.checkImageOrVideoToString(imageVideoPostList[0].url) ===
          "video"
          ? { height }
          : {}
      }
    >
      {data}
      {imageVideoPostList.length > 5 && (
        <div className="" ref={refLastNumber}>
          {`+${imageVideoPostList.length - 5}`}
        </div>
      )}
    </div>
  );
});
