import React, { useState } from "react";
import { Input } from "../Input/Input";

const FormField = ({
  label,
  disabled = false,
  id,
  error,
  maxLength,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [labelTop, setLabelTop] = useState(false);

  const handleBlur = (e) => {
    setIsFocused(false);
    setLabelTop(!!e.target.value);
    const { onBlur } = props;
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    setLabelTop(true);
  };

  return (
    <div
      className={`relative w-full h-10 px-3.5 border border-solid border-[#CCCCCC] rounded-[10px] hover:border-[#ADADAD] hover-shadow-[0_0px_3px_0px_rgba(0,0,0,0.161)] text-sm ${
        error && "border-[#E32B25] hover:border-[#E32B25]"
      } ${
        isFocused && !disabled && "border-[#00A6A2] hover:border-[#00A6A2]"
      } ${
        disabled && "border-[#e5e5e5] hover:border-[#e5e5e5]  cursor-none"
      } ${className}`}
    >
      {label && (
        <label
          className={`px-1 bg-[#fff] absolute left-3 transform transition-all  duration-100 ease-in
        ${
          labelTop
            ? `-top-2 text-[10px] pb-0.5 font-semibold leading-[14px]`
            : `top-1/4 text-sm`
        }
        ${
          disabled
            ? "text-[#ADADAD] pointer-events-none"
            : labelTop
            ? "text-[#404040]"
            : "text-[#767676]"
        }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <Input
        {...props}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        id={id}
      />
      <span
        className={`text-[10px] pb-0.5 leading-[14px] -bottom-[18px] absolute left-3 truncate font-normal 
        ${error && "text-[#E32B25]"}`}
      >
        {error}
      </span>
    </div>
  );
};

export default FormField;
