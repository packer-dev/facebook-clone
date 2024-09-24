import * as React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { PAGE_LOGIN } from "@/constants/Config";
import WrapperAuthentication from "../WrapperAuthentication";
import useAuthenication from "@/hooks/useAuthenication";

const VerifyCodeAccount = (props) => {
  //
  const { verifyAccountNew } = props;
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { token } = useAuthenication();
  //
  return (
    <WrapperAuthentication
      title={verifyAccountNew ? "Account Verification" : "Reset Your Password"}
      hideFormLogin={true}
    >
      <div className="w-full my-2 p-2 pl-5">
        <p>
          Please check your device to see the text message with the code. Your
          code has 8 characters.
        </p>
        <div className="w-full flex my-2 items-center">
          <div className="w-1/2">
            <InputComponent
              handleChange={(value) => {
                setError(null);
                setCode(value);
              }}
              type="text"
              value={code}
              placeholder="Enter code"
              className="w-full p-3 rounded-md border-2"
            />
            {error && (
              <p className="text-red-600 font-semibold text-sm my-2">{error}</p>
            )}
          </div>
          <div className="ml-5">
            <p>We have sent you the code to:</p>
            <p className="text-sm mt-1">{token}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full py-3 mt-1 flex justify-between items-center">
        <Link to="" className="text-main text-sm ml-5">
          Don't have a code?
        </Link>
        <div className="">
          <ButtonComponent
            link={PAGE_LOGIN}
            className="px-4 font-semibold mr-3 py-2.5 rounded-lg bg-gray-300 text-gray-800"
          >
            Cancel
          </ButtonComponent>
          <ButtonComponent
            loading={loading}
            disabled={loading}
            handleClick={async () => {
              setLoading(true);
              if (code === "") setError("Verification code cannot be empty!!");
            }}
            className="px-4 py-2 mr-5 rounded-lg bg-main text-white"
          >
            Continue
          </ButtonComponent>
        </div>
      </div>
    </WrapperAuthentication>
  );
};

export default VerifyCodeAccount;
