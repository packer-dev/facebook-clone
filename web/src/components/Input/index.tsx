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
  hiddenBorder?: boolean;
};

const Input = (
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
    hiddenBorder,
  }: InputProps,
  ref: RefObject<HTMLInputElement>
) => {
  //
  const [show, setShow] = useState(false);
  const Field = typeof register === "function" ? register(name) : () => "";
  const result = !show ? type : "password";
  //
  return (
    <>
      {label && <p className="font-semibold mb-2">{label}</p>}

      <div className={`${wrapper || ""} ${width || "w-full"} relative`.trim()}>
        <input
          ref={ref}
          onClick={() => handleClick?.()}
          type={show && search ? "text" : result}
          placeholder={placeholder}
          className={`rounded-sm focus:shadow-sm ${
            hiddenBorder
              ? ""
              : "border-gray-200 border focus:border-blue-600 border-solid dark:border-dark-third"
          } dark:text-white ${
            width || "w-full"
          } ${className} ${borderValidation} p-2.5 ${search ? "pl-10" : ""}`}
          {...Field}
          spellCheck={false}
          onChange={(event) => {
            handleChange?.(event.target.value);
            register?.(name)?.onChange(event);
          }}
          name={name}
          disabled={disabled}
        />
        {type === "password" && (
          <span
            aria-hidden
            onClick={() => setShow(!show)}
            className={`bx bx-${
              show ? "show" : "hide"
            } text-xl text-gray-700 absolute top-1/2 transform -translate-y-1/2 z-30 right-2 cursor-pointer`}
          />
        )}
        {search && (
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
};

export default forwardRef(Input);
