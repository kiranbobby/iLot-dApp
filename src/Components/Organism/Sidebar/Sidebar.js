import React from "react";
import guestIcon from "../../../Assests/Images/Guest-Icon.svg";
import { showLoginModal } from "../../../Store/ducks/loginModal";
import { useDispatch } from "react-redux";
import { SidebarNavButton } from "../../Atom";
import { hideSwipeableDrawer } from "../../../Store/ducks/swipeableDrawer";
import appStore from "../../../Assests/Images/App-Store.svg";
import playStore from "../../../Assests/Images/Play-Store.svg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(hideSwipeableDrawer());
    dispatch(showLoginModal());
  };

  const menuItem = [
    {
      id: "transactions",
      to: "/user-profile/my-transaction",
      label: "My Transactions",
    },
    { id: "session", to: "/user-profile/my-session", label: "My Session" },
    {
      id: "list-property",
      to: "/user-profile/list-properties",
      label: "List Properties",
    },
    {
      id: "saved-property",
      to: "/user-profile/saved-properties",
      label: "Saved Properties",
    },
    {
      id: "contacted-property",
      to: "/user-profile/contacted-properties",
      label: "Contacted Properties",
    },
    { id: "contact", to: "/contact", label: "Contact Us" },
  ];
  return (
    <div className={`w-[343px] h-full flex flex-col justify-between`}>
      <div>
        <div className={`h-[136px] bg-[#FBE8E9] rounded-b-[20px]`}>
          <div className={"px-4 py-9 flex items-center justify-between"}>
            <div className={`flex items-center gap-2`}>
              <img src={guestIcon} alt="" className={`w-16 h-16`} />
              <div className={`text-2xl font-semibold text-[#404040]`}>
                Guest User
              </div>
            </div>
            <button
              type="button"
              className="px-4 py-2 font-serif font-semibold text-white rounded-md bg-[#D7222C] hover:bg-[#A31A21]"
              onClick={handleClick}
            >
              LOGIN
            </button>
          </div>
        </div>
        <div className={`mt-2`}>
          {menuItem.map((list) => (
            <SidebarNavButton
              label={list.label}
              id={list.id}
              to={list.to}
              className={`mt-2`}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#FBE8E9] p-6 rounded-t-[20px]">
        <div
          className={`font-semibold text-#404040 text-[20px] text-center mb-5`}
        >
          Download App
        </div>
        <div className={`flex justify-between`}>
          <img src={appStore} alt="" className="w-[140px]" />
          <img src={playStore} alt="" className="w-[140px]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
