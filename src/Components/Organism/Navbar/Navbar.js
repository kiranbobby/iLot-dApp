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

const Navbar = () => {
  const navigateTo = useNavigate();
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

  return (
    <div className="flex flex-row content-center justify-between px-12 py-5 text-lg  bg-[#fff] sticky top-0 z-30">
      <div className="flex flex-row items-center text-5xl font-bold text-darker">
        <img src={logo} alt="logo" className={`w-20 h-20`} />
        <div className="pl-2 text-orange-600">iLot</div>
      </div>
      <div className="flex items-center">
        <ul className={"flex items-center text-xl "}>
          {Links.map((link) => (
            <li key={link.link} className="">
              <NavLink
                className={`[&.active]:bg-primary [&.active]:text-white px-4 py-2 mx-5 font-bold text-gray-600 rounded-xl tracking-[0.45px] [&.active]:shadow-[0_3px_8px_0px_rgba(0,0,0,0.1)] hover:text-gray-800 `}
                to={link.link}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <div className="px-4 py-2" onClick={() => navigateTo("/list-property")}>
          <span
            className={`font-semibold text-gray-600 rounded-md cursor-pointer hover:text-gray-800 hover:underline hover:decoration-2 hover:underline-offset-8 hover:transition-all hover:duration-300 hover:ease-in`}
          >
            List Property
          </span>
          <span
            className={`ml-1 text-[10px] text-white font-semibold bg-red-500 p-0.5 rounded-lg`}
          >
            free
          </span>
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
