import React, { CSSProperties, ReactNode } from "react";

type ItemMediaProps<T> = {
  type: "image" | "video";
  src?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  props?: T;
  mode?: "half" | "square";
  showDetail?: boolean;
  children?: ReactNode;
  single?: boolean;
  handle?: () => void;
};

const ItemMedia = <T,>({
  type = "image",
  src = "",
  alt = "",
  className = "",
  style,
  props,
  mode = "square",
  showDetail = false,
  children,
  single,
  handle,
}: ItemMediaProps<T>) => {
  //
  className = `${
    single
      ? ""
      : "absolute object-cover top-0 left-0 bottom-0 right-0 w-full h-full"
  } ${className}`;
  //
  return (
    <div
      aria-hidden
      onClick={() => handle?.()}
      className="relative cursor-pointer"
      style={{
        paddingTop: mode === "square" ? "100%" : "50%",
      }}
    >
      {type === "image" ? (
        <img src={src} alt={alt} style={style} className={className} />
      ) : (
        <video {...props} className={className}>
          <track default kind="captions" srcLang="en" src={src} />
        </video>
      )}
      {showDetail && (
        <div
          className="absolute text-white font-bold text-xl top-0 left-0 bottom-0 right-0 flex items-center justify-center"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ItemMedia;
