import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSignal,
  faWarehouse,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import sticker from "../../../Assests/Images/sticker.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Inspotlight.module.scss'

const Inspotlight = () => {
    
    const [properties] = useState([
        {
        propertyImage: require("../../../Assests/Images/Inlightspot3.jpg"),
        propertyLogo : require("../../../Assests/Images/CBRE logo.png")
        },
        {
        propertyImage: require("../../../Assests/Images/Inlightspot2.jpg"),
        propertyLogo : require("../../../Assests/Images/newmarklogo.jpg")
        },
        {
        propertyImage: require("../../../Assests/Images/Inlightspot1.jpg"),
        propertyLogo : require("../../../Assests/Images/newmarklogo.jpg")
        }
    ]);

    const settings = {
        // dot: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
    };

  return (
    <div>
      <Slider {...settings} arrows={false}>
        {properties.map((property) => (
        <div className={`${style.slickCustom} my-4 group rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-400`}>
          <div className="relative flex]">
            <img
              className="rounded-lg w-[874px] h-[535px] backdrop-blur-sm bg-[#767676]"
              src={property.propertyImage}
              alt={property.propAlt}
            />
            <img
                src={sticker}
                alt={sticker}
                className="absolute top-0 w-[398px] h-[233px] group-hover:scale-105"
            />
            <div className="absolute top-0 p-3">
              <div className="flex flex-row">
                <img
                  src={property.propertyLogo}
                  alt={property.propertyLogo}
                  className="w-[90px] h-[92px]"
                />
                <div className="flex flex-col ml-5">
                  <h1 className="font-bold text-3xl text-[#242424]"> CBRE Group</h1>
                  <div className="flex flex-row justify-center">
                    <div className="flex flex-col items-center mr-4">
                      <h1 className="font-bold text-2xl text-[#242424]"> 1906 </h1>
                      <p className="text-[#767676]"> Year estd </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="font-bold text-2xl text-[#242424]"> 10 </h1>
                      <p className="text-[#767676]"> Projects </p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="w-[312px] mt-3">
                <p className="text-[#242424]"> The abbrevation CBRE stands for Coldwell Banker Richard Ellis. Its the world's largest....</p>
                <p className="text-[#10618C] underline cursor-pointer"> Projects </p>
              </div>
            </div>
            <div className="rounded-b-xl flex flex-row items-center justify-between absolute bottom-0 h-[132px] w-[874px] bg-gradient-to-t from-black to-black/10 px-4">
              <div className="flex flex-row text-[#fff]">
                <div className="pr-3 border-r-4 border-white">
                  <h1 className="text-2xl font-semibold"> CBRE Building </h1>
                  <p className="text-lg font-medium"> Los Angeles, Albany, Washington...</p>
                </div>
                <div className="pl-3">
                  <h1 className="text-2xl font-semibold"> CBRE Building </h1>
                  <p className="text-lg font-medium"> 2,3 BHK Apartments</p>
                </div>
              </div>
              <button className="bg-[#A31A21] text-[#fff] w-[120px] h-[56px] rounded-xl text-xl"> Contact </button>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Inspotlight;
