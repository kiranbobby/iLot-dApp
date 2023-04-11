import React, { useState } from "react";
import { Input } from "../Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PasswordInputLogin = ({
  label,
  disabled = false,
  id,
  error,
  maxLength,
  className,
  eyeButton = true,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
      } ${isFocused && "border-[#00A6A2] hover:border-[#00A6A2]"} ${
        disabled && "border-[#e5e5e5] cursor-none"
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
            ? "text-[#D8E2F0] pointer-events-none"
            : labelTop
            ? "text-[#404040]"
            : "text-[#767676]"
        }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="flex items-center h-10">
        <Input
          {...props}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className={`w-[90%]`}
          id={id}
          type={isPasswordVisible ? "text" : "password"}
        />
        {eyeButton && (
          <div
            className="cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <FontAwesomeIcon icon={faEye} className={`text-[#737373]`} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className={`text-[#737373]`} />
            )}
          </div>
        )}
      </div>
      <span
        className={`text-[10px] pb-0.5 leading-[14px] -bottom-[18px] absolute left-3 truncate font-normal 
        ${error && "text-[#E32B25]"}`}
      >
        {error}
      </span>
    </div>
  );
};

export default PasswordInputLogin;
