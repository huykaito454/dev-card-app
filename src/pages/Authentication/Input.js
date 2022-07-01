import React from "react";
import { useController } from "react-hook-form";

const Input = ({ icon, control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <i
        className={`${icon} absolute text-[#ADADAD] my-auto mx-0 top-0 bottom-0 translate-x-1/2 translate-y-1/4`}
      ></i>
      <input
        className="rounded-sm placeholder-[#ADADAD] py-2 px-2 pl-7 w-full"
        type="text"
        {...field}
        {...props}
      />
    </div>
  );
};

export default Input;
