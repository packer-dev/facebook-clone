import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { PAGE_FORGET_ACCOUNT, PAGE_HOME } from "@/constants/Config";
import { useDispatch } from "react-redux";
import Input from "@/components/Input";
import { User } from "@/interfaces/User";
import { AppDispatch } from "@/reducers";
import { FormLoginData, loginUserRequest } from "@/actions/user";
import { login } from "@/reducers/user";
import { Button } from "@/components/ui/button";

type FormLoginProps = {
  remember?: boolean;
  loginFast?: User;
};

const FormLogin: React.FC<FormLoginProps> = ({ remember, loginFast }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [rememberAccount, setRememberAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationObject = {
    password: Yup.string().required("Password is required."),
  };

  const validationSchema = Yup.object().shape(
    loginFast
      ? validationObject
      : {
          ...validationObject,
          email: Yup.string().required("Email is required."),
        }
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
            dispatch(login(result?.user));
            navigate(PAGE_HOME);
            setLoading(false);
            localStorage.setItem("token", result?.token);
            return;
          }
          setLoading(false);
          setError(true);
        },
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
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
        <Input
          type="text"
          name="email"
          placeholder="Email"
          className={`my-2 ${
            errors["email"] ? "border-red-500 text-red-500" : "border-gray-200"
          }`}
          register={register}
          error={errors["email"]}
        />
      )}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        className={`my-2 ${
          errors["password"] ? "border-red-500 text-red-500" : "border-gray-200"
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
          <span>Remember Account</span>
        </div>
      )}
      <Button
        loading={loading}
        disabled={loading}
        className="mx-auto w-full p-3 my-2.5 border-none rounded-md bg-primary text-sm text-white font-semibold"
        type="submit"
      >
        Login
      </Button>
      <p className="text-primary bg-white py-4 cursor-pointer text-center">
        <Link to={PAGE_FORGET_ACCOUNT}>Forgot Account</Link>
      </p>
    </form>
  );
};

export default FormLogin;
