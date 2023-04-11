import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faHouse } from "@fortawesome/free-solid-svg-icons";
import LandingImage from "../../../Assests/Images/LandingView.svg";
import Dropdown from "../../../Components/Molecules/Dropdown/Dropdown";

const LandView = () => {
  const [toggleBuy, setToggleBuy] = useState(true);
  const [toggleRent, setToggleRent] = useState(false);

  const handleBuy = () => {
    setToggleBuy(true);
    setToggleRent(false);
  };

  const handleRent = () => {
    setToggleBuy(false);
    setToggleRent(true);
  };

  return (
    <div>
      <div className="relative">
        <img
          src={LandingImage}
          alt=""
          className="shadow-[0_3px_8px_0px_rgba(0,0,0,0.1)] w-full"
          height={400}
        />
        <div className="absolute ml-20 bottom-[84px]">
          <h1 className="mb-5 text-6xl font-bold text-[#ffffff] ">
            Find your next <span className="text-[#ffffff]">perfect</span>
            <br /> place with ease
          </h1>
          <div className="mb-8 text-sm text-[#ffffff]">
            iLot will help you find your home fast, easy and comfortable. <br />
            iLot is completely Secure and Transparent. Let's Start now!
          </div>
          <div className="mb-32 text-xl text-primary">
            <div className="mb-1 ">
              <FontAwesomeIcon icon={faSackDollar} />
              <span className="mx-2 text-sm font-bold text-dark">$20,5M</span>
              <span className="text-xs text-gray-400">
                Earned throught property transactions
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faHouse} />
              <span className="mx-2 text-sm font-bold text-dark">19k +</span>
              <span className="text-xs text-gray-400">
                Earned throught property transactions
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col mx-20 bottom-28">
        <div className="box-content flex flex-row cursor-pointer bg-[#BFBFBF] w-fit rounded-t-xl">
          <div
            className={`px-16 py-4 text-base font-semibold text-gray-500 rounded-t-xl ${
              toggleBuy && "bg-white shadow-[3px_8px_3px_0_rgba(0,0,0,0.16)]"
            }`}
            onClick={handleBuy}
          >
            Buy
          </div>
          <div
            className={`px-16 py-4 text-base font-semibold text-gray-500 rounded-t-xl  ${
              toggleRent && "bg-white"
            }`}
            onClick={handleRent}
          >
            Rent
          </div>
        </div>
        <div className="sticky flex flex-row justify-between p-10 bg-white rounded-r-xl rounded-bl-xl shadow-[0_12px_24px_0_rgba(0,0,0,0.16)]">
          <div className="flex w-[600px] justify-between">
            <div className="flex flex-col">
              <div className="mb-3 text-gray-400">Location</div>
              <div className="text-sm font-semibold text-night">
                <Dropdown option={location} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-3 text-gray-400">Property Type</div>
              <div className="text-sm font-semibold text-night">
                <Dropdown option={type} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[600px]">
            <div className="mb-3 text-gray-400 ">Keyword</div>
            <div className="text-sm font-semibold text-night">
              <input
                type="text"
                placeholder="Search for locality, landmark, project, or builder"
                className="border w-[600px] border-[#d3deed] rounded-md h-8 hover:border-[#1D86BE] hover:transition-all hover:duration-300 hover:ease-in hover:cursor-pointer"
                name="keyword"
                id="keyword"
              />
            </div>
          </div>
          {/* <div className="flex flex-col">
            <div className="mb-3 text-gray-400">Property Price Range</div>
            <div className="text-xl font-bold text-night">
              $85,000 - $98,000
            </div>
          </div> */}
          <div className="text-center">
            <button className="py-4 text-white rounded-md bg-[#A31A21] px-14">
              Search
            </button>
            <div className="text-base text-primary font-semibold hover:underline hover:text-[#5E8EA2] hover:transition-all hover:duration-300 hover:ease-in cursor-pointer">
              Advanced search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandView;

const location = [
  {
    label: "San Jose",
    value: "option1",
  },
  {
    label: "Bangalore",
    value: "option2",
  },
  {
    label: "Hyderabad",
    value: "option3",
  },
  {
    label: "London",
    value: "option4",
  },
];
const type = [
  {
    label: "Row House",
    value: "option1",
  },
  {
    label: "Villa",
    value: "option2",
  },
  {
    label: "Farm House",
    value: "option3",
  },
  {
    label: "Apartment",
    value: "option4",
  },
];
