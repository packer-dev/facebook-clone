import ButtonComponent from "@/components/ButtonComponent";
import * as React from "react";

const InviteProfile = () => {
  return (
    <div className="w-full p-3 bg-gray-50 rounded-lg my-2 items-center justify-between hidden">
      <p className="text-xl font-semibold">
        Packer has sent you a friend request
      </p>
      <div>
        <ButtonComponent className="px-2 h-10 mr-2 bg-main text-white text-sm font-semibold rounded-lg">
          Accept request
        </ButtonComponent>
        <ButtonComponent className="px-2 h-10 bg-gray-300 text-gray-800 text-sm font-semibold rounded-lg">
          Delete request
        </ButtonComponent>
      </div>
    </div>
  );
};

export default InviteProfile;
