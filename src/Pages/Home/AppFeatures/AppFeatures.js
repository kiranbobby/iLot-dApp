// import {
//   faFileInvoiceDollar,
//   faLock,
//   faPaperPlane,
//   faShieldHalved,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import houseIcon from "../../../Assests/Images/house.svg";
import QualityIcon from "../../../Assests/Images/Quality-Assurance.svg";
import CreditcardIcon from "../../../Assests/Images/credit-card.svg";
import TaxesIcon from "../../../Assests/Images/taxes.svg";

const AppFeatures = () => {
  const [options] = useState([
    {
      title: "Find Your Dream House",
      description:
        "We provide various types of houses from the cheapest to Premium",
      icon: houseIcon,
    },
    {
      title: "Best Quality Guarantee",
      description:
        "If you buy or rent a house with us you are guaranteed with the best quality",
      icon: QualityIcon,
    },
    {
      title: "100% Safe Transactions",
      description:
        "Your transactions will always be kept safe and confidential no matter what",
      icon: CreditcardIcon,
    },
    {
      title: "Low Cost on Taxes",
      description:
        "Buying or renting a house through our company you get discounts on taxes",
      icon: TaxesIcon,
    },
  ]);

  return (
    <div className="flex justify-between gap-12 bg-[#D7222C] bg-opacity-10 my-16 px-10">
      {options.map((option) => (
        <div className="box-content px-6 py-8 my-16 bg-white cursor-pointer hover:drop-shadow-lg rounded-xl shadow-[0_3px_8px_0px_rgba(0,0,0,0.1)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-400">
          <div className="flex items-center w-full mb-3">
            <img
              className="px-3 py-2 mr-4 text-2xl text-white rounded-lg"
              src={option.icon}
              alt={option.icon}
            />
            <p className="text-3xl font-bold  text-darker">{option.title}</p>
          </div>
          <div className="text-gray-400">{option.description}</div>
        </div>
      ))}
    </div>
  );
};
export default AppFeatures;
