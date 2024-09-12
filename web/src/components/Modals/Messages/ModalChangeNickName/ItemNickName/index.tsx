import React, { useState } from "react";

export default function ItemNickName(props) {
  //
  const { item } = props;
  const [show, setShow] = useState(false);
  const [nickName, setNickName] = useState(
    item.nickName ? null : item.nickName
  );
  //
  return (
    <div className="w-full cursor-pointer p-2.5 flex hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg">
      <div className="w-1/12">
        <img
          src={item.avatar}
          className="w-12 h-12 object-cover rounded-full"
          alt=""
        />
      </div>
      <div aria-hidden onClick={() => setShow(true)} className="w-10/12 pl-3">
        <p className={`flex items-center flex-wrap ${!show ? "" : "hidden"}`}>
          <span className="w-full font-semibold block dark:text-white">
            {!nickName ? `${item.firstName} ${item.lastName}` : nickName}
          </span>
          <br />
          <span
            className="w-full text-sm text-gray-700 dark:text-white py-0.5 
                        flex items-center font-semibold"
          >
            {!nickName ? "Đặt biệt danh" : `${item.firstName} ${item.lastName}`}
          </span>
        </p>
        <input
          type="text"
          className={`w-full p-1.5 mt-1 border-2 border-solid border-blue-500 rounded-xl 
                    bg-gray-100 dark:bg-dark-third dark:text-white flex justify-center items-center 
                    ${show === true ? "" : "hidden"}`}
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              setShow(false);
            }
          }}
        />
      </div>
      <div className="w-1/12 text-center flex">
        <i
          aria-hidden
          onClick={() => setShow(true)}
          className={`fas fa-pen-nib cursor-pointer dark:text-white 
                    ml-5 text-xl flex items-center ${!show ? "" : "hidden"}`}
        ></i>
        <i
          className={`fas fa-check cursor-pointer dark:text-white ml-5 text-xl flex items-center 
                    ${show ? "" : "hidden"}`}
        ></i>
      </div>
    </div>
  );
}
