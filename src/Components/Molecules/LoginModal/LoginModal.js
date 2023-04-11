import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Atom/Modal/Modal";
import { hideLoginModal } from "../../../Store/ducks/loginModal";
import FormField from "../../Atom/FormField/FormField";
import { LoginButton, PasswordInputLogin } from "../../Atom";
import { showCreateAccountModal } from "../../../Store/ducks/CreateAccountModal";

const LoginModal = () => {
  const { show } = useSelector((store) => store.loginModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideLoginModal());
  };

  const handleSignupModal = () => {
    dispatch(hideLoginModal());
    dispatch(showCreateAccountModal());
  };

  return (
    <Modal
      className="w-[610px] h-[736px]"
      show={show}
      onClose={handleClose}
      showCloseButton={true}
    >
      <div className={`font-bold text-8xl text-center`}>
        <span className={`text-[#EA7625]`}>i</span>
        <span className={`text-[#295D93]`}>LoT</span>
      </div>
      <div className={`text-[30px] mt-3 font-bold text-[#404040] text-center`}>
        Log In
      </div>
      <div
        className={` text-base font-normal text-[#404040] text-center mt-4.5`}
      >
        Welcome back, let’s log in to your account.
      </div>
      <div className="px-12 mt-7">
        <FormField label={"Username"} />
        <FormField label={"Selected Account"} className={`mt-9`} disabled />
        <PasswordInputLogin label={"Password"} className={`mt-9`} />
        <p
          className={`mt-5 text-base text-[#D7222C] hover:text-[#A11D25] hover:underline decoration-2 cursor-pointer underline-offset-[5px] font-bold text-end`}
        >
          Forgot Password ?
        </p>
        <div className={`text-center mt-8`}>
          <LoginButton label="Login" disable />
        </div>
      </div>
      <div className={`mt-8 font-normal text-[18px] text-center`}>
        <span className={`text-[#242424]`}>Don't have an account?</span>
        <span
          className={`text-[#D7222C] hover:text-[#A11D25] hover:underline cursor-pointer font-medium ml-2`}
          onClick={handleSignupModal}
        >
          Sign Up
        </span>
      </div>
      <div className={`font-light text-sm text-[#242424] text-center mt-8`}>
        By opening an account you agree to the:
      </div>
      <div className={`text-sm my-1 text-center`}>
        <span
          className={`text-[#D7222C] hover:text-[#A11D25] hover:underline cursor-pointer font-medium `}
        >
          Terms & Conditions
        </span>
        <span className={`mx-2 font-light text-[#242424]`}>and</span>
        <span
          className={`text-[#D7222C] hover:text-[#A11D25] hover:underline cursor-pointer font-medium `}
        >
          Privacy Policy
        </span>
      </div>
      <div className={`font-light text-sm text-[#242424] text-center`}>
        Copyright © 2022-2023
      </div>
    </Modal>
  );
};

export default LoginModal;
