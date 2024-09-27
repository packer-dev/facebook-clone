import React, { RefObject, forwardRef, useState } from "react";

type InputProps = {
  register?: any;
  wrapper?: string;
  error?: any;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  search?: boolean;
  borderValidation?: boolean;
  handleChange?: (value: string) => void;
  disabled?: boolean;
  label?: string;
  width?: string;
  handleClick?: Function;
  value?: string;
};

export default forwardRef(function Input(
  {
    register,
    wrapper,
    error,
    type,
    name = "",
    placeholder = "",
    className = "",
    search,
    borderValidation,
    handleChange,
    disabled,
    label = "",
    width = "",
    handleClick,
  }: InputProps,
  ref: RefObject<HTMLInputElement>
) {
  //
  const [show, setShow] = useState(false);
  const Field = typeof register === "function" ? register(name) : () => "";
  const result = !show ? type : "password";
  //
  return (
    <>
      {label && <p className="font-semibold mb-2">{label}</p>}

      <div className={`${wrapper} ${width || "w-full"} relative`}>
        <input
          ref={ref}
          onClick={() => handleClick?.()}
          type={show && search ? "text" : result}
          placeholder={placeholder}
          className={`${
            width || "w-full"
          } ${className} ${borderValidation} focus:border-blue-600 ${
            search ? "pl-10" : ""
          } dark:border-dark-third rounded-sm border-solid focus:shadow-sm border-gray-200 border dark:text-white`}
          {...Field}
          spellCheck={false}
          onChange={(event) => {
            handleChange?.(event.target.value);
            register?.(name)?.onChange(event);
          }}
          name={name}
          autoComplete
          disabled={disabled}
        />
        {!search ? (
          <span
            aria-hidden
            onClick={() => setShow(!show)}
            className={`bx bx-${
              show ? "show" : "hide"
            } text-xl text-gray-700 absolute top-1/2 transform -translate-y-1/2 z-30 right-2 cursor-pointer`}
          />
        ) : (
          <span
            className="bx bx-search text-xl text-gray-700 absolute top-1/2 transform -translate-y-1/2 z-30 left-3 
              cursor-pointer dark:text-white"
          />
        )}
      </div>

      {error && (
        <p className="text-red-600 text-left font-semibold text-sm my-2">
          {error.message}
        </p>
      )}
    </>
  );
});
