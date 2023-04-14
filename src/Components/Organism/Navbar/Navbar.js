import React from "react";
import logo from "../../../Assests/Images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import userIcon from "../../../Assests/Images/User-Icon.svg";
import { SwipeableDrawer } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  hideSwipeableDrawer,
  showSwipeableDrawer,
} from "../../../Store/ducks/swipeableDrawer";
import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigateTo = useNavigate();
  const [navState, setNavState] = useState("");
  const dispatch = useDispatch();
  const { show } = useSelector((store) => store.swipeableDrawer);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Properties", link: "/properties" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  const handleToggle = () => {
    dispatch(showSwipeableDrawer());
  };

  const handleClose = () => {
    dispatch(hideSwipeableDrawer());
  };

  useEffect(() => {
    if (navState === "") {
      setNavState(0);
    }
  }, [navState]);

  return (
    <div className="flex flex-row content-center justify-between px-12 py-5 text-lg  bg-[#fff] sticky top-0 z-30">
      <div className="flex flex-row items-center text-5xl font-bold text-darker">
        <img src={logo} alt="logo" className={`w-20 h-20`} />
        <div className="pl-2 text-orange-600">iLot</div>
      </div>
      <div className="flex items-center">
        <ul className={"flex items-center text-xl "}>
          {Links.map((link, id) => (
            <li key={link.link} className="group px-5">
              <NavLink
                className="py-2 mx-5 font-bold text-gray-600 tracking-[0.45px]  hover:text-gray-800 flex flex-col justify-between"
                to={link.link}
                onClick={() => setNavState(id)}
              >
                {link.name}
              </NavLink>
              <div
                className={`${
                  id === navState
                    ? "border-[#A31A21] w-[100%] border-solid border-[2px] rounded h-[3px]"
                    : `${styles.animate} group-hover:w-[100%] group-hover:border-solid group-hover:border-[2px] group-hover:border-[#A31A21] group-hover:delay-50`
                } `}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <div className="group flex flex-col">
          <div
            className="px-4 py-2"
            onClick={() => {
              navigateTo("/list-property");
              setNavState(4);
            }}
          >
            <span
              className={"cursor-pointer text-gray-800 font-semibold"}
            >
              List Property
            </span>
            <span
              className={`ml-1 text-[10px] text-white font-semibold bg-red-500 p-0.5 rounded-lg`}
            >
              free
            </span>
          </div>
          <div
            className={`${
              navState === 4
                ? "border-[#A31A21] w-[100%] border-solid border-[2px] rounded h-[3px]"
                : `${styles.animate} group-hover:w-[100%] group-hover:border-solid group-hover:border-[2px] group-hover:border-[#A31A21] group-hover:delay-50`
            } `}
          ></div>
        </div>
        <div>
          <img
            src={userIcon}
            alt=""
            className={`cursor-pointer h-[100%] w-[106px]`}
            onClick={handleToggle}
          />
          <SwipeableDrawer open={show} anchor="right" onClose={handleClose}>
            <Sidebar />
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
