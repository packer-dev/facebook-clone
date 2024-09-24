import PopoverEmoji from "@/components/Popovers/PopoverEmoji";
import PopoverSticker from "@/components/Popovers/PopoverSticker";
import PopoversWrapper from "@/components/Popovers/PopoversWrapper";
import { ItemPostContext } from "@/contexts/ItemPostContext";
import { placeCaretAtEnd } from "@/functions";
import React, {
  RefObject,
  forwardRef,
  useContext,
  useRef,
  useState,
} from "react";
import { v4 } from "uuid";

export default forwardRef(function CategoryInputComment(
  props: { handleSendComment: Function },
  ref: RefObject<HTMLDivElement>
) {
  //
  const {
    state: { dataComment },
    updateData,
  } = useContext(ItemPostContext);
  const { handleSendComment } = props;
  const id = v4();
  let count = 0;
  const [type, setType] = useState(0);
  const refPopover = useRef<HTMLDivElement>(null);
  const handleClick = (type: any, event: any) => {
    setType(type);
    const current = event.target;
    if (!current) {
      return;
    }
    refPopover.current.style.display = "block";
    window.addEventListener("click", winEv);
  };
  const winEv = function (event) {
    ++count;
    if (count > 1) {
      if (refPopover.current && !refPopover.current.contains(event.target)) {
        refPopover.current.style.display = "none";
        count = 0;
        window.removeEventListener("click", winEv);
      }
    }
  };
  //
  return (
    <form>
      <div className="absolute transform -translate-y-1/2 top-1/2 mr-3 right-2">
        <ul className="flex relative items-center">
          <li
            aria-hidden
            onClick={(event) => handleClick(1, event)}
            className=" w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
            flex items-center justify-center -ml-1.5"
          >
            <i className="far fa-smile dark:text-white text-gray-600" />
          </li>
          {dataComment.type !== 1 && (
            <>
              <li
                className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                flex items-center justify-center -ml-1.5"
              >
                <label htmlFor={id}>
                  {" "}
                  <i className="fas fa-camera dark:text-white text-gray-600" />
                </label>
                <input
                  name="fileImage"
                  className="hidden"
                  onChange={(event) => {
                    if (event.target.files.length > 0) {
                      updateData("file", event.target.files[0]);
                      updateData("dataComment", { ...dataComment, type: 3 });
                    }
                  }}
                  type="file"
                  accept="image"
                  formEncType="multipart/form-data"
                  id={id}
                />
              </li>
              <li
                className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                flex items-center justify-center -ml-1.5"
              >
                <i className="fas fa-radiation dark:text-white text-gray-600" />
              </li>
              <li
                aria-hidden
                onClick={(event) => handleClick(0, event)}
                className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                flex items-center justify-center -ml-1.5"
              >
                <i className="far fa-sticky-note dark:text-white text-gray-600" />
              </li>
            </>
          )}
        </ul>
      </div>
      <PopoversWrapper ref={refPopover}>
        {type === 0 ? (
          <PopoverSticker
            handleClick={(item: any) => {
              count = 0;
              handleSendComment(JSON.stringify(item), 2);
              refPopover.current.style.display = "none";
            }}
          />
        ) : (
          <PopoverEmoji
            handleClick={(item: string) => {
              updateData("dataComment", {
                ...dataComment,
                content: dataComment.text + item,
                type: 1,
              });
              ref.current.innerText = dataComment.text + item;
              placeCaretAtEnd(ref.current);
            }}
          />
        )}
      </PopoversWrapper>
    </form>
  );
});
