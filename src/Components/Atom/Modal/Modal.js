import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { LoadingBoxes } from "../LoadingBoxes/LoadingBoxes";
import backArrowIcon from "../../../Assests/Images/back-arrow.svg";
import xIcon from "../../../Assests/Images/x.svg";
import "./Modal.style.scss";

const variants = {
  modalHidden: { opacity: 0, transition: { duration: 0.2 } },
  modalVisible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  bgHidden: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  bgVisible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
const Modal = ({
  onClose,
  onBackdropClick,
  onBack,
  show: isModalOpen,
  showCloseButton,
  showBackButton,
  children,
  className = "",
  isLoading = false,
  isProcessing = false,
  ...props
}) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  });

  return (
    <AnimatePresence>
      {isModalOpen ? (
        <motion.div
          key="bg"
          variants={variants}
          animate="bgVisible"
          initial="bgHidden"
          exit="bgHidden"
          onClick={onBackdropClick}
          className={`w-full h-full fixed flex items-center justify-center top-0 left-0 bg-[#00000099] z-40 cursor-default`}
          {...props}
        >
          <motion.div
            key="modal"
            variants={variants}
            animate="modalVisible"
            initial="modalHidden"
            exit="modalHidden"
            className={`modal ${className}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* Modal Header */}
            <div
              className={`w-full flex items-center ${
                showBackButton && showCloseButton
                  ? "justify-between"
                  : showCloseButton
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {showBackButton && (
                <button onClick={onBack} type="button" className="self-start">
                  <img src={backArrowIcon} alt="" width="20" height="20" />
                </button>
              )}

              {showCloseButton && (
                <button onClick={onClose} type="button" className="self-end">
                  <img src={xIcon} alt="" width="14" height="18" />
                </button>
              )}
            </div>
            {/* Modal Body */}
            <motion.div className="modal__body">
              {children}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    variants={variants}
                    animate="modalVisible"
                    initial="modalHidden"
                    exit="modalHidden"
                    className="modal__loading-overlay"
                  >
                    <LoadingBoxes />
                  </motion.div>
                )}
                {isProcessing && (
                  <motion.div
                    variants={variants}
                    animate="modalVisible"
                    initial="modalHidden"
                    exit="modalHidden"
                    className="modal__loading-overlay"
                  >
                    <LoadingBoxes />
                    <p className="modal__loading-label">Processing...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  title: PropTypes.any,
};
