import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import { PAGE_LOGIN } from "@/constants/Config";
import WrapperAuthentication from "../Wrapper/WrapperAuthentication";
import useAuthentication from "@/hooks/useAuthentication";
import { Button } from "@/components/ui/button";

type VerifyCodeAccountProps = {
  verifyAccountNew?: boolean;
};

const VerifyCodeAccount = ({ verifyAccountNew }: VerifyCodeAccountProps) => {
  //
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { token } = useAuthentication();
  const navigate = useNavigate();
  //
  return (
    <WrapperAuthentication
      title={verifyAccountNew ? "Account Verification" : "Reset Your Password"}
      hideFormLogin
    >
      <div className="w-full my-2 p-2 pl-5">
        <p>
          Please check your device to see the text message with the code. Your
          code has 8 characters.
        </p>
        <div className="w-full flex my-2 items-center">
          <div className="w-1/2">
            <Input
              handleChange={(value) => {
                setError(null);
                setCode(value);
              }}
              type="text"
              value={code}
              placeholder="Enter code"
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
          <Button
            onClick={() => navigate(PAGE_LOGIN)}
            className="px-4 font-semibold mr-3 py-2.5 rounded-lg bg-gray-300 text-gray-800"
          >
            Cancel
          </Button>
          <Button
            loading={loading}
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              if (code === "") setError("Verification code cannot be empty!!");
            }}
            className="mr-5"
          >
            Continue
          </Button>
        </div>
      </div>
    </WrapperAuthentication>
  );
};

export default VerifyCodeAccount;
