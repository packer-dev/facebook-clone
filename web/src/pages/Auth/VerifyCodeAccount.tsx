import * as React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { PAGE_LOGIN } from "@/constants/Config";
import WrapperAuthenination from "../WrapperAuthenination";
import useAuthenication from "@/hooks/useAuthenication";

export default function VerifyCodeAccount(props) {
  //
  const { verifyAccountNew } = props;
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { token } = useAuthenication();
  //
  return (
    <WrapperAuthenination
      title={
        verifyAccountNew ? "Xác thực tài khoản" : "Đặt lại mật khẩu của bạn"
      }
      hideFormLogin={true}
    >
      <div className="w-full my-2 p-2 pl-5">
        <p>
          Vui lòng kiểm tra thiết bị cua của bạn để xem tin nhắn văn bản có mã.
          Mã của bạn có 8 ký tự.
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
              placeholder="Nhập mã"
              className="w-full p-3 rounded-md border-2"
            />
            {error && (
              <p className="text-red-600 font-semibold text-sm my-2">{error}</p>
            )}
          </div>
          <div className="ml-5">
            <p>Chúng tôi đã gửi cho bạn mã đến:</p>
            <p className="text-sm mt-1">{token}</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="w-full py-3 mt-1 flex justify-between items-center">
        <Link to="" className="text-main text-sm ml-5">
          Bạn chưa có mã?
        </Link>
        <div className="">
          <ButtonComponent
            link={PAGE_LOGIN}
            className="px-4 font-semibold mr-3 py-2.5 rounded-lg bg-gray-300 text-gray-800"
          >
            Huỷ
          </ButtonComponent>
          <ButtonComponent
            loading={loading}
            disabled={loading}
            handleClick={async () => {
              setLoading(true);
              if (code === "") setError("Mã xác nhận không được trống !!");
            }}
            className="px-4 py-2 mr-5 rounded-lg bg-main text-white"
          >
            Tiếp tục
          </ButtonComponent>
        </div>
      </div>
    </WrapperAuthenination>
  );
}
