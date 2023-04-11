import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Atom/Modal/Modal";
import { hideCreateAccountModal } from "../../../Store/ducks/CreateAccountModal";
// import FormField from "../../Atom/FormField/FormField";
// import { LoginButton, PasswordInputLogin } from "../../Atom";

const CreateAccountModal = () => {
  const { show } = useSelector((store) => store.createAccountModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideCreateAccountModal());
  };

  return (
    <Modal
      className="w-[610px] h-[736px]"
      show={show}
      onClose={handleClose}
      showCloseButton={true}
    >
      <div>Hello</div>
    </Modal>
  );
};

export default CreateAccountModal;
