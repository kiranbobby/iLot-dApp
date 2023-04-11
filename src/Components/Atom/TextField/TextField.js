import React, { useState } from "react";

const TextField = ({
  label,
  disabled = false,
  id,
  error,
  maxLength,
  className,
  value,
  charLimit,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [labelTop, setLabelTop] = useState(false);

  const handleBlur = (e) => {
    setIsFocused(false);
    setLabelTop(!!e.target.value);
    const { onBlur } = rest;
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    setLabelTop(true);
  };

  const handleChange = (e) => {
    const msgLength = e.target.value.length;
    if (msgLength > charLimit) return;
    const { onChange } = rest;
    if (typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          className={`leading-[14px] px-1 bg-[#fff] absolute left-3 transform transition-all duration-100 ease-in 
            ${
              labelTop
                ? `-top-1.5 text-[10px] pb-0.5 font-semibold leading-[14px]`
                : "top-2 text-sm"
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
      <textarea
        {...rest}
        id={id}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        maxLength={charLimit}
        className={`w-full h-full font-semibold resize-none border border-solid border-[#cccccc] rounded-[10px] leading-normal text-sm text-[#404040] hover:border-[#adadad] p-3.5 transition-all ease-in duration-100hover:shadow-[0_0_3px_0_rgba(0,0,0,0.161)] focus:outline-none  ${
          isFocused && "focus:border-[#295D93] focus:hover:border-[#295D93]"
        } ${error && "border-[#E32B25] hover:border-[#E32B25]"} ${
          disabled && "border-[#e5e5e5] pointer-events-none"
        }`}
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

export default TextField;
