import React, { useState } from "react";
import ModalWrapper from "@/modals/ModalWrapper";
import { PostDTO } from "@/interfaces/Post";
import feels from "@/config/feels";

const ModalFeelList = ({ postDetail }: { postDetail: PostDTO }) => {
  const feelList = postDetail?.feel?.filter(
    (value, index, self) =>
      index === self.findIndex((obj) => obj.type === value.type)
  );
  const [currentType, setCurrentType] = useState(feelList[0].type || 1);
  return (
    <ModalWrapper title="Feel" width={550}>
      <div className="w-full">
        <div className="flex items-center gap-3 border-b border-solid border-gray-200">
          {feelList.map((item) => (
            <div
              aria-hidden
              onClick={() => setCurrentType(item.type)}
              key={item.id}
              className={`cursor-pointer px-3 py-3 flex gap-1 items-center ${
                currentType === item.type ? "bg-gray-200" : ""
              }`}
            >
              <img
                src={feels[item.type - 1].image}
                className="w-5 h-5 rounded-full"
                alt=""
                srcSet=""
              />
              <span>
                {
                  postDetail.feel.filter((child) => item.type === child.type)
                    .length
                }
              </span>
            </div>
          ))}
        </div>
        <div className="w-full h-[400px] overflow-y-scroll mt-4">
          <div className="flex-col flex gap-3">
            {postDetail?.feel
              ?.filter((item) => item.type === currentType)
              .map((item) => (
                <div key={item.id} className="flex-row gap-3 flex items-center">
                  <div className="relative">
                    <img
                      src={item.user.avatar}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <img
                      src={feels[item.type - 1].image}
                      className="absolute -bottom-1 -right-1 w-5 h-5"
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">{item.user.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalFeelList;
