import classNames from "classnames";
import React from "react";

export default function Button({
  children,
  loading = false,
  variant = "default",
  ...props
}) {
  return (
    <button
      disabled={loading}
      className={classNames(
        "text-gray-800 font-semibold py-2 px-3 border border-gray-500 rounded shadow m-1",
        {
          "bg-transparent": variant === "default",
          "bg-slate-300": variant === "success",
          "bg-slate-500": variant === "danger",
          "bg-slate-400": variant === "warning",
          "bg-slate-200": variant === "info",
        }
      )}
      {...props}
    >
      {loading ? "...." : children}
    </button>
  );
}
