import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { PAGE_FORGET_ACCOUNT, PAGE_HOME } from "@/constants/Config";
import { useDispatch } from "react-redux";
import InputComponent from "@/components/InputComponent";
import ButtonComponent from "@/components/ButtonComponent";
import { User } from "@/interfaces/User";
import { AppDispatch } from "@/reducers";
import { FormLoginData, loginUserRequest } from "@/actions/user";
import { login } from "@/reducers/user";

type FormLoginProps = {
  remember?: boolean;
  loginFast?: User;
};

const FormLogin = ({ remember, loginFast }: FormLoginProps) => {
  //
  const [error, setError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [rememberAccount, setRememberAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const validationObject = {
    password: Yup.string().required("Password is required."),
  };
  const validationSchema = Yup.object().shape(
    !loginFast
      ? {
          ...validationObject,
          email: Yup.string().required("Email is required."),
        }
      : validationObject
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const handleLogin = (data: FormLoginData) => {
    setLoading(true);
    dispatch(
      loginUserRequest({
        data,
        callback: (result) => {
          if (result) {
            dispatch(login(result));
            navigation(PAGE_HOME);
            setLoading(false);
            localStorage.setItem("user", result?.id);
            return;
          }
          setError(true);
        },
      })
    );
  };
  return (
    <form
      className="w-full bg-white p-2.5"
      onSubmit={handleSubmit(handleLogin)}
    >
      {loginFast ? (
        <div className="w-full flex flex-col justify-center p-3">
          <img
            src={loginFast.avatar}
            className="w-48 mx-auto object-cover h-48 rounded-full"
            alt=""
          />
          <p className="font-semibold text-xl text-center mt-2">
            {`${loginFast.name}`}
          </p>
        </div>
      ) : (
        <InputComponent
          type="text"
          name="email"
          placeholder="Email Hoặc Số Điện Thoại"
          className={`border rounded-md p-3 my-2 ${
            errors["email"] ? "border-red-500 text-red-500" : "border-gray-200 "
          }`}
          register={register}
          error={errors["email"]}
        />
      )}
      <InputComponent
        type="password"
        name="password"
        placeholder="Mật Khẩu"
        className={`border rounded-md p-3 my-2 ${
          errors["email"] ? "border-red-500 text-red-500" : "border-gray-200 "
        }`}
        register={register}
        error={errors["password"]}
      />
      {error && (
        <p className="text-red-500 py-2 text-sm">
          Email or password incorrect.
        </p>
      )}
      {remember && (
        <div className="w-full my-3 px-3 flex items-center">
          <input
            type="checkbox"
            checked={rememberAccount}
            onChange={(event) => {
              setRememberAccount(event.target.checked);
            }}
            className="transform scale-130 mr-2"
          />
          <span>Nhớ tài khoản</span>
        </div>
      )}
      <ButtonComponent
        loading={loading}
        disabled={loading}
        className="mx-auto w-full p-3 my-2.5 border-none rounded-md bg-main text-sm text-white font-semibold"
        type="submit"
      >
        Đăng Nhập
      </ButtonComponent>
      <p className="text-main bg-white py-4 cursor-pointer text-center">
        <Link to={PAGE_FORGET_ACCOUNT}>Quên Tài khoản</Link>
      </p>
    </form>
  );
};

export default FormLogin;
