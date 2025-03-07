import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faHouse } from "@fortawesome/free-solid-svg-icons";
import LandingImage from "../../../Assests/Images/LandingView.png";
import Dropdown from "../../../Components/Molecules/Dropdown/Dropdown";
import { FormSelectZone, SearchInput } from "../../../Components/Atom";

const LandView = () => {
  const [toggleBuy, setToggleBuy] = useState(true);
  const [toggleRent, setToggleRent] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [country, setCountry] = useState("")

  const handleBuy = () => {
    setToggleBuy(true);
    setToggleRent(false);
  };

  const handleRent = () => {
    setToggleBuy(false);
    setToggleRent(true);
  };

  return (
    <div className="relative mb-[120px]">
      <img
        src={LandingImage}
        alt=""
        className="shadow-[0_3px_8px_0px_rgba(0,0,0,0.1)] w-full -mt-20"
        height={400}
      />
      <div className="h-[100%] w-[75%] absolute top-0 bg-gradient-to-r from-black to-black/0"></div>
      <div className="absolute ml-20 bottom-24">
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
      <div className="absolute -bottom-20 w-[100%]">
        <div className="flex flex-col mx-20">
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
            <div className="flex w-[700px] justify-between">
              <div className="flex flex-col">
                <div className="mb-3 text-gray-400">Location</div>
                <div className="text-sm font-semibold text-night w-[300px]">
                  <FormSelectZone value={country} options={location} label={"Country"} onChange={(option)=>(setCountry(option))} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mb-3 text-gray-400">Property Type</div>
                <div className="text-sm font-semibold text-night w-[300px]">
                  <FormSelectZone  value={propertyType} options={type} label={"Property Type"} onChange={(option)=>
                    setPropertyType(option) } />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[600px]">
              <div className="mb-3 text-gray-400 ">Keyword</div>
              <div className="text-sm font-semibold text-night">
                <SearchInput
                  border={true}
                  maxLength={255}
                  hoverEffect={true}
                  // className={`w-[300px]`}
                  placeholder="Search for locality, landmark, project, or builder"
                />
              </div>
            </div>
            {/* <div className="flex flex-col">
              <div className="mb-3 text-gray-400">Property Price Range</div>
              <div className="text-xl font-bold text-night">
                $85,000 - $98,000
              </div>
            </div> */}
            <div className="flex items-end">
              <button className="py-4 text-white font-semibold rounded-2xl bg-[#D7222C] hover:bg-[#A31A21] px-14">
                Search
              </button>
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
