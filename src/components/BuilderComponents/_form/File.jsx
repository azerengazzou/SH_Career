import classNames from "classnames";
import { useField } from "formik";
import React from "react";

export default function File({ label, ...props }) {
  const [fields, meta, helpers] = useField(props);

  const changeHandle = (e) => {
    helpers.setValue(e.target.files[0]);
  };

  return (
    <label className="flex flex-col w-full p-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <div className="text-base text-white flex items-center">{label}</div>
      <input
        type="file"
        accept=".jpeg,.jpg,.png"
        className={classNames({
          "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-slate-400 hover:bg-slate-500": true,
          "border-white border-opacity-30": !meta.error,
          "border-red-600 border-opacity-100": meta.error,
        })}
        onChange={changeHandle}
      />
      {meta.error && (
        <span className="text-sm px-1 mt-1 bg-red-600 text-white">
          {meta.error}
        </span>
      )}
    </label>
  );
}
