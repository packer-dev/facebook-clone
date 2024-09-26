import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGEX_EMAIL } from "@/constants/Config";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import InputComponent from "@/components/InputComponent";
import { FormRegisterData, registerUserRequest } from "@/actions/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/reducers";
import ModalWrapper from "@/modals/ModalWrapper";

function ModalRegister() {
  //
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .required("Email is required.")
      .test("test-name", "Email invalid.", function (value) {
        return REGEX_EMAIL.test(value);
      }),
    emailAgain: Yup.string().oneOf(
      [Yup.ref("email"), null],
      "Email must same with email above."
    ),
    password: Yup.string().required("Password is required."),
  });
  const dispatch = useDispatch<AppDispatch>();
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const [errorsIsset, setErrorsIsset] = useState(null);
  const [emailAgain, setEmailAgain] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const handleRegister = (data: FormRegisterData) => {
    modalsDispatch(modalsAction.loadingModal(true));
    dispatch(
      registerUserRequest({
        data,
        callback(result) {
          if (result) {
            setErrorsIsset("Email exist.");
            setEmailAgain(false);
          } else {
            setEmailAgain(null);
            setErrorsIsset(false);
          }
          modalsDispatch(modalsAction.loadingModal(false));
          modalsDispatch(modalsAction.closeModal());
        },
      })
    );
  };
  return (
    <ModalWrapper>
      <h1 className="-pt-1 pb-0.5 text-3xl font-bold">Register</h1>
      <p className="pb-2.5 text-sm pt-0.5 text-gray-600">Fast and easy</p>
      <hr />
      <form onSubmit={handleSubmit(handleRegister)} className="mt-2">
        <div className="w-full gap-3 flex">
          <div className="w-full">
            <InputComponent
              register={register}
              error={errors["name"]}
              type="text"
              name="name"
              className="w-full p-2 border my-1"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="w-full">
          <InputComponent
            register={register}
            error={errors["email"]}
            type="text"
            name="email"
            handleChange={(value) => {
              setErrorsIsset(false);
              setEmailAgain(REGEX_EMAIL.test(value));
            }}
            className="p-2 border my-1"
            placeholder="Email"
          />
        </div>
        {errorsIsset && (
          <p className="text-red-600 font-semibold text-sm my-2">
            {errorsIsset}
          </p>
        )}
        {emailAgain && (
          <div className="w-full">
            <InputComponent
              register={register}
              error={errors["emailAgain"]}
              type="text"
              name="emailAgain"
              className="p-2 border my-1"
              placeholder="Email again"
            />
          </div>
        )}
        <div className="w-full">
          <InputComponent
            register={register}
            error={errors["password"]}
            type="password"
            name="password"
            className="p-2 border my-1"
            placeholder="Password"
          />
        </div>
        <p className="text-gray-600 text-xs px-1">
          <span>By clicking Sign Up, you agree to our</span>
          <span className="text-[#385989]">Terms, Data Policy</span>
          <span>and</span>
          <span className="text-[#385989]">Cookie Policy</span>
          <span>
            . You may receive notifications from us via SMS and can opt out at
            any time.
          </span>
        </p>
        <div className="form_5 text-center p-4">
          <button
            type="submit"
            className="text-xl w-1/2 p-2 font-bold border rounded-lg text-white cursor-pointer bg-[#00a400]"
          >
            Register
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default ModalRegister;
