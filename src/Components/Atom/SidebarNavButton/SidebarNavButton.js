import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./SidebarNavButton.module.scss";
import arrow from "../../../Assests/Images/arrow.svg";
import { useDispatch } from "react-redux";
import { hideSwipeableDrawer } from "../../../Store/ducks/swipeableDrawer";

const SidebarNavButton = ({
  id = "",
  to = "",
  label = "",
  disabled = "false",
  className,
}) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (disabled === true) e.preventDefault();
    dispatch(hideSwipeableDrawer());
  };

  return (
    <NavLink
      id={id}
      data-testid={id}
      to={to}
      className={({ isActive }) => isActive && styles.active}
    >
      <button
        type="button"
        className={`w-full flex justify-between ${className}  items-center px-5 text-[20px] font-semibold
        ${styles.profile_nav_btn}`}
        onClick={handleClick}
      >
        <span>{label}</span>
        <img className={styles.caret} src={arrow} alt={`arrow-${id}`} />
      </button>
    </NavLink>
  );
};
export default SidebarNavButton;

SidebarNavButton.propTypes = {
  id: PropTypes.string,
  to: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
