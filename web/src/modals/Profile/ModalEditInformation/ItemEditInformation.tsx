import Input from "@/components/Input";
import React, { useRef, useState, useEffect } from "react";

export default function ItemEditInformation({
  title,
  name,
  placeholder,
  setDescription,
  description,
  value,
}) {
  //
  const ref = useRef<HTMLInputElement>();
  const [input, setInput] = useState(value);
  useEffect(() => {
    //
    if (ref.current) {
      ref.current.value = input;
    }
    //
  }, [input, ref]);
  //
  return (
    <div className="w-full my-1.5">
      <p className="font-semibold mb-1">{title}</p>
      <Input
        ref={ref}
        type="text"
        name={name}
        placeholder={placeholder}
        handleChange={(data) => {
          setInput(data);
          setDescription({ ...description, [name]: data });
        }}
      />
    </div>
  );
}
