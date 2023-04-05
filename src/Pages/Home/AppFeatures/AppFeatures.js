import {
  faFileInvoiceDollar,
  faLock,
  faPaperPlane,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const AppFeatures = () => {
  const [options] = useState([
    {
      title: "Find Your Dream House",
      description:
        "We provide various types of houses from the cheapest to Premium",
      icon: <FontAwesomeIcon icon={faPaperPlane} />,
    },
    {
      title: "Best Quality Guarantee",
      description:
        "If you buy or rent a house with us you are guaranteed with the best quality",
      icon: <FontAwesomeIcon icon={faShieldHalved} />,
    },
    {
      title: "100% Safe Transactions",
      description:
        "Your transactions will always be kept safe and confidential no matter what",
      icon: <FontAwesomeIcon icon={faLock} />,
    },
    {
      title: "Low Cost on Taxes",
      description:
        "Buying or renting a house through our company you get discounts on taxes",
      icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    },
  ]);

  return (
    <div className="flex justify-between gap-12 ">
      {options.map((option) => (
        <div className="box-content px-6 py-8 bg-white cursor-pointer hover:drop-shadow-lg rounded-xl shadow-[0_3px_8px_0px_rgba(0,0,0,0.1)]">
          <div className="flex items-center mb-3 w-52">
            <p className="px-3 py-2 mr-4 text-2xl text-white rounded-lg bg-primary">
              {option.icon}
            </p>
            <p className="text-lg font-bold text-darker">{option.title}</p>
          </div>
          <div className="text-gray-400">{option.description}</div>
        </div>
      ))}
    </div>
  );
};
export default AppFeatures;
