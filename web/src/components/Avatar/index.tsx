import React, { ReactNode } from "react";

type AvatarProps = {
  size?: number;
  uri?: string;
  online?: boolean;
  children?: ReactNode;
  loading?: boolean;
  className?: string;
};

const Avatar = ({
  size = 16,
  uri,
  online = true,
  children,
  loading,
  className = "",
}: AvatarProps) => {
  return (
    <div className={`relative ${className}`}>
      {loading ? (
        <div
          className={`w-${size} h-${size} rounded-full mx-auto bg-gray-300`}
        />
      ) : (
        <img
          alt=""
          src={uri ?? `https://picsum.photos/536/354`}
          className={`w-${size} h-${size} rounded-full mx-auto object-cover`}
        />
      )}
      {online && (
        <div
          className={`w-3 h-3 rounded-full bg-green-500 absolute bottom-1 -mr-1 right-0 border-2 border-white`}
        />
      )}
      {children}
    </div>
  );
};

export default Avatar;
