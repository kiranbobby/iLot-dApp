import React from "react";

const LoginButton = ({
  id = "",
  label = "",
  className = "",
  disable = false,
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      id={id}
      disabled={disable}
      data-testid={id}
      className={`w-60 h-10 rounded-full font-semibold text-center transition-all ease 
    ${
      !disable
        ? "bg-[#D7222C] hover:bg-[#A31A21] text-[#fff]"
        : "bg-[#A6A6A6] text-[#767676] opacity-1"
    } ${className}`}
      onClick={onClick}
      type={type}
      style={{ fontSize: "18px" }}
    >
      {label}
    </button>
  );
};

export default LoginButton;
