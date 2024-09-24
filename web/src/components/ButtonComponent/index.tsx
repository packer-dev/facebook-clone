import * as React from "react";
import { Link } from "react-router-dom";

type ButtonComponentProps = {
  link?: string;
  className?: string;
  type?: any;
  disabled?: boolean;
  handleClick?: Function;
  bgColor?: string;
  loading?: boolean;
  children?: React.ReactNode;
};

const ButtonComponent = ({
  link,
  className,
  type,
  disabled,
  handleClick,
  bgColor,
  loading,
  children,
}: ButtonComponentProps) => {
  //
  const ref = React.useRef<any>();
  React.useEffect(() => {
    //
    if (link && disabled) ref.current?.removeAttribute("href");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, disabled]);
  //
  return link ? (
    <Link ref={ref} to={link} className={`${className} border-solid`}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={() => !disabled && handleClick?.()}
      className={`${className} border-solid cursor-pointer ${
        disabled ? "cursor-not-allowed bg-gray-500 text-gray-100" : bgColor
      }`.trim()}
      disabled={disabled}
    >
      {loading ? (
        <span className="text-white bx bx-shape-circle fa-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonComponent;
