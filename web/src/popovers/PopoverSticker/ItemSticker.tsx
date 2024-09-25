import * as React from "react";

export default React.forwardRef(function ItemSticker(
  { sticker, handleClick }: any,
  ref: React.RefObject<HTMLDivElement>
) {
  //
  const data = `stickerAnimation:${sticker.col}:${sticker.row}`;
  const [animation, setAnimation] = React.useState("");
  //
  return (
    <div
      ref={ref}
      aria-hidden="true"
      onClick={(event) => handleClick(sticker)}
      onMouseMove={() => {
        setAnimation(data);
      }}
      onMouseLeave={() => {
        setAnimation("");
      }}
      className="w-20 mr-1 cursor-pointer"
    >
      <div
        className={`w-20 h-20 max-w-20 max-h-20 p-1 overflow-hidden bg-size:${sticker.col}:${sticker.row} ${animation} relative`}
        style={{ backgroundImage: `url('${sticker.src}')` }}
      />
    </div>
  );
});
