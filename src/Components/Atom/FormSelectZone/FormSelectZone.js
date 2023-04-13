import React, { useEffect, useRef, useState } from "react";
import styles from "./FormSelectZone.module.scss";
import { useOutsideClick } from "../../Hooks/useOutsideClick";
import arrowBlue from "../../../Assests/Images/arrow-blue-right.svg";
import arrowGray from "../../../Assests/Images/arrow-right.svg";
import checkMarkIcon from "../../../Assests/Images/check-mark.svg";

const FormSelectZone = ({
  label,
  optional,
  message,
  error,
  className,
  disabled,
  options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ],
  value = {},
  onChange = () => {},
  onBlur = () => {},
  ...props
}) => {
  const selectRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  useOutsideClick(selectRef, () => {
    setIsActive(false);
  });

  const handleOptionSelect = (option) => {
    setIsActive(false);
    setIsHover(false);
    if (typeof onChange == "function") {
      onChange(option);
    } else {
      setSelectedOption(option);
    }
  };

  const handleBlur = () => {
    setIsActive(false);
    onBlur();
  };

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  return (
    <div
      className={`relative w-full h-10 z-[1] focus:outline-none`}
      ref={selectRef}
    >
      <div
        className={`absolute w-full px-3.5 border border-solid border-[#CCCCCC] transition-all ease-in duration-100 bg-[#fff] z-[1] hover:border-[#ADADAD] hover:shadow-[0_0_3px_0_rgba(0,0,0,0.161)] focus-visible:outline-none rounded-[15px]
    ${isActive && "border-[#295D93] hover:border-[#295D93]"}
    ${error && "border-[#E32B25] hover:border-[#E32B25]"}
    ${
      disabled && "border-[#e5e5e5] hover:border-[#e5e5e5]  cursor-none"
    } cursor-pointer`}
        tabIndex="0"
        onBlur={handleBlur}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={` px-1 bg-[#fff] absolute left-3 transform transition-all duration-100 ease-in ${
            selectedOption
              ? `-top-2 text-sm pb-0.5 font-semibold leading-[14px]`
              : "top-2.5 text-sm"
          } ${
            disabled
              ? "text-[#ADADAD] pointer-events-none"
              : selectedOption
              ? "text-[#404040]"
              : "text-[#767676]"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          {label}
        </div>
        <div
          className={`w-[95%] h-[38px] text-sm font-semibold flex item-center  ${
            selectedOption?.label?.length > 25 ? "text-[10px]" : "text-sm"
          }  ${disabled ? "text-[#ADADAD]" : "text-[#404040]"}`}
          onClick={() => setIsActive(!isActive)}
        >
          {selectedOption?.label || ""}
        </div>
        {!disabled && (
          <img
            src={isActive || isHover ? arrowBlue : arrowGray}
            alt=""
            width="8"
            height="8"
            className={`absolute transform rotate-90 top-3 right-3 
          ${isActive && "-rotate-90"}`}
            onClick={() => setIsActive(!isActive)}
          />
        )}
        {isActive && (
          <>
            <div className={`${styles.options_wrap}`}>
              {options.map((x, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between pr-3  cursor-pointer  hover:text-cm3
               ${
                 selectedOption?.value === x?.value ? "text-cm3" : "text-cgy3"
               }`}
                  onClick={() => handleOptionSelect(x)}
                >
                  <span className="text-xs cursor-pointer hover:text-cm3">
                    {x?.label}
                  </span>
                  {selectedOption?.value === x?.value && (
                    <img src={checkMarkIcon} width="15" height="10" alt="" />
                  )}
                </div>
              ))}
            </div>
            <div className="w-full h-4 opacity-0"></div>
          </>
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

export default FormSelectZone;
