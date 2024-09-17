import ButtonComponent from "@/components/ButtonComponent";
import * as React from "react";

export default function InviteProfile() {
  return (
    <div className="w-full p-3 bg-gray-50 rounded-lg my-2 items-center justify-between hidden">
      <p className="text-xl font-semibold">
        Hưởng đã gửi cho bạn lời mời kết bạn
      </p>
      <div>
        <ButtonComponent className="px-2 h-10 mr-2 bg-main text-white text-sm font-semibold rounded-lg">
          Chấp nhận lời mời
        </ButtonComponent>
        <ButtonComponent className="px-2 h-10 bg-gray-300 text-gray-800 text-sm font-semibold rounded-lg">
          Xoá lời mời
        </ButtonComponent>
      </div>
    </div>
  );
}
