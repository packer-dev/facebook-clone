import React, { forwardRef } from "react";

export default forwardRef(function ItemFavorite(
  { choose, item, setContent, content, disabled }: any,
  ref: any
) {
  return (
    <div
      aria-hidden
      onClick={() => {
        if (!disabled) {
          if (choose) {
            setContent({
              ...content,
              choose: [...content.choose].filter((dt) => dt.id !== item.id),
              search: "",
            });
          } else {
            setContent({
              ...content,
              list: [...content.list].filter((dt) => dt.id !== item.id),
              choose: [...content.choose, item],
              search: "",
            });
          }
          if (ref.current) {
            ref.current.value = "";
          }
        }
      }}
      className={`px-1 py-0.5 flex items-center justify-center rounded-full ${
        choose ? "bg-blue-200 text-main" : ""
      } border-2 text-sm cursor-pointer border-gray-200 border-solid dark:border-dark-third`}
    >
      <span className="pl-1.5 text-xl">{item.icon}</span>
      <span className="mx-2 text-gray-600 dark:text-gray-300 font-semibold">
        {item.name}
      </span>
      {choose && <span className="bx bx-x text-xl" />}
    </div>
  );
});
