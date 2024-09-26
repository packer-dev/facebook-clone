import React, { useState } from "react";
import { PAGE_LOGIN } from "@/constants/Config";
import WrapperAuthentication from "../Wrapper/WrapperAuthentication";
import useAuthentication from "@/hooks/useAuthentication";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RecoverAccount = (props: any) => {
  //
  const { verify } = props;
  const { token, user } = useAuthentication(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("email");
  const navigation = useNavigate();
  //
  return (
    <WrapperAuthentication
      hideFormLogin
      title={verify ? "Confirm your account" : "Reset your password"}
    >
      {user && token ? (
        <>
          <div className="w-full my-2 p-2 flex">
            <div className="w-2/3 pl-4">
              <p className="mb-2">
                How would you like to receive the code to{" "}
                {verify ? "confirm your account" : "reset your password"}?
              </p>
              {user.email && (
                <div className="flex mb-3 p-2 hover:bg-gray-100 items-center">
                  <input
                    type="radio"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    className="transform scale-130 mr-3"
                    value="email"
                  />
                  <div>
                    <p>Send code via email</p>
                    <p className="text-xs text-gray-600 font-semibold mt-1">
                      {user.email}
                    </p>
                  </div>
                </div>
              )}
              {user.email && (
                <div className="flex p-2 hover:bg-gray-100 items-center">
                  <input
                    type="radio"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    className="transform scale-130 mr-3"
                    value="phone"
                  />
                  <div>
                    <p>Send code via SMS</p>
                    <p className="text-xs text-gray-600 font-semibold mt-1">
                      {user.email}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="w-1/3">
              <div className="py-8">
                <img
                  src={user.avatar}
                  alt=""
                  className="w-16 h-16 mx-auto rounded-full object-cover mb-2"
                />
                <p className="w-full text-center mt-1">{`${user.name}`}</p>
                <p className="w-full text-center text-xs mt-0.5 text-gray-600">
                  Facebook user
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full py-3 mt-1 flex justify-end items-center">
            <div className="">
              <Button
                onClick={() => navigation(PAGE_LOGIN)}
                className="px-4 font-semibold mr-3 py-2.5 rounded-lg bg-gray-300 text-gray-800"
              >
                Cancel
              </Button>
              <Button
                onClick={async () => setLoading(true)}
                disabled={!email}
                loading={loading}
                className="px-4 py-2 mr-5 rounded-lg bg-main text-white"
              >
                Continue
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-80 flex items-center justify-center">
          <i className="fas fa-circle-notch text-xs text-gray-500 mx-9 fa-spin" />
        </div>
      )}
    </WrapperAuthentication>
  );
};

export default RecoverAccount;
