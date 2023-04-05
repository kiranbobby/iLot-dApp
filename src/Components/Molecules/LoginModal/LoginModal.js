import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Atom/Modal/Modal";
import { hideLoginModal } from "../../../Store/ducks/loginModal";

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
      <div>Login Modal</div>
    </Modal>
  );
};

export default LoginModal;
