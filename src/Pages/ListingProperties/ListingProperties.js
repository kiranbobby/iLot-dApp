import React from "react";
import MainImage from '../../Assests/Images/ListPropertyMainImage.png';
import SideImage from '../../Assests/Images/ListpropSideImage.svg';
import { FormField, LoginButton, TextField } from "../../Components/Atom";

const ListingProperties = () => {
  return(
    <div>
      <div className="relative">
        <img 
          src={MainImage}
          className="w-full h-auto -mt-20"
          alt={"mainpage"}
        />
        <div className="absolute top-[200px] left-[72px] text-[#fff] font-sans">
          <h1 className="text-7xl font-bold mb-5"> List Your Property </h1>
          <h1 className="font-bold text-5xl mb-2" > Add Property</h1>
          <span className="text-2xl"> iLoT Property Listing </span>
        </div>
      </div>
      <div className="mx-10 mt-9 flex flex-row font-medium">
        <div className="flex flex-col w-full">
          <h1 className="text-5xl text-[#242424] mb-10"> Basic Information </h1>
          <FormField label={"Property Title"} className="w-[50%] text-lg" />
        </div>
      </div>
    </div>
  );
};

export default ListingProperties;
