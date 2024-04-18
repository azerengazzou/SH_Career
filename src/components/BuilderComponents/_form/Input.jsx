import { useField } from "formik";
import classNames from "classnames";
import React from "react";

export default function Input({ label, sizeFull = false, ...props }) {
  const [fields, meta, helpers] = useField(props);
  return (
    <label
      className={classNames({
        "flex flex-col p-2": true,
        "w-1/2": !sizeFull,
        "w-full": sizeFull,
      })}
    >
      <input
        className={classNames({
          "w-full pl-0 pb-0 p-1 bg-transparent text-gray-100 text-opacity-100 border-b-2   focus:border-opacity-100 outline-none placeholder:text-black placeholder:text-opacity-80 focus:placeholder:text-opacity-800 transition-all duration-1000 ease-linear": true,
          "border-white border-opacity-30": !meta.error,
          "border-red-600 border-opacity-100": meta.error && meta.touched,
        })}
        autoComplete="off"
        {...fields}
        {...props}
      />
      {meta.error && meta.touched && (
        <span className="text-sm px-1 mt-1 bg-red-600 text-white">
          {meta.error}
        </span>
      )}
    </label>
  );
}
