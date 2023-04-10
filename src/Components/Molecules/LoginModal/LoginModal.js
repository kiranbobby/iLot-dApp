import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Atom/Modal/Modal";
import { hideLoginModal } from "../../../Store/ducks/loginModal";
import FormField from "../../Atom/FormField/FormField";
import { PasswordInputLogin, TextField } from "../../Atom";

const LoginModal = () => {
  const { show } = useSelector((store) => store.loginModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideLoginModal());
  };

  return (
    <Modal
      className="w-[500px] h-[500px]"
      show={show}
      onClose={handleClose}
      showCloseButton={true}
    >
      <div className="mb-10">Login Modal</div>
      <FormField label={"Email"} id={"email"} className={`mb-10`} />
      {/* <PasswordInputLogin label="Password" id="Password" /> */}
      <TextField label={"description"} className={`h-28`} />
    </Modal>
  );
};

export default LoginModal;
