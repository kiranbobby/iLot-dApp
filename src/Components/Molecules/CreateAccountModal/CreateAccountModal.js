import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Atom/Modal/Modal";
import { hideCreateAccountModal } from "../../../Store/ducks/CreateAccountModal";
import { FormField, LoginButton, PasswordInputLogin } from "../../Atom";
import { showLoginModal } from "../../../Store/ducks/loginModal";

const CreateAccountModal = () => {
  const { show } = useSelector((store) => store.createAccountModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideCreateAccountModal());
  };

  const handleLoginModal = () => {
    dispatch(hideCreateAccountModal());
    dispatch(showLoginModal());
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
      <div
        className={`text-[30px] mt-3 font-bold text-[#404040] text-center mb-8`}
      >
        Create Account
      </div>
      <div className={`flex px-12 gap-3.5`}>
        <FormField label={"First Name"} />
        <FormField label={"Last Name"} />
      </div>
      <div className={`flex px-12 gap-3.5 my-8`}>
        <FormField label={"Phone Number"} />
        <FormField label={"Email Id"} />
      </div>
      <div className="px-12">
        <FormField label={"Selected Account"} disabled />
      </div>
      <div className={`flex px-12 gap-3.5 my-8`}>
        <PasswordInputLogin label={"Password"} />
        <PasswordInputLogin label={"Confirm Password"} />
      </div>
      <div className={`text-center mt-5`}>
        <LoginButton label="Register" />
      </div>
      <div className={` text-base text-center mt-4`}>
        <span className={`text-[#242424] font-normal`}>
          Do you already have a coyni account?
        </span>
        <span
          className={`ml-1 text-[#D7222C] hover:text-[#A11D25] hover:underline cursor-pointer font-medium`}
          onClick={handleLoginModal}
        >
          Log In
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

export default CreateAccountModal;
