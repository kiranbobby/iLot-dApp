import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { HiStar } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Rating.module.scss";

const Rating = () => {
  const [ratings] = useState([
    {
      description:
        "Having to get services like buying a house just by visiting a website and booking an appointment wasn't quite a thing for me. But, now Estately change my point of view concerning Real Estates.",
      author: "Taj Kumar G",
      position: "Client",
    },
    {
      description:
        "I always have hard times working with real estate agencies, but with estately whole process was easy, smooth and quick! Agent Lucas is professional at what he does so its very comfortable working with him",
      author: "Aman K",
      position: "Investor",
    },
    {
      description:
        "Having to get services like buying a house just by visiting a website and booking an appointment wasn't quite a thing for me. But, now Estately change my point of view concerning Real Estates.",
      author: "Divya T",
      position: "Client",
    },
    {
      description:
        "I always have hard times working with real estate agencies, but with estately whole process was easy, smooth and quick! Agent Lucas is professional at what he does so its very comfortable working with him",
      author: "Mahesh Babu",
      position: "Client",
    },
    {
      description:
        "Having to get services like buying a house just by visiting a website and booking an appointment wasn't quite a thing for me. But, now Estately change my point of view concerning Real Estates.",
      author: "Rajesh A",
      position: "Client",
    },
    {
      description:
        "I always have hard times working with real estate agencies, but with estately whole process was easy, smooth and quick! Agent Lucas is professional at what he does so its very comfortable working with him",
      author: "Murali CH",
      position: "Client",
    },
  ]);
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <div className="mt-[275px]">
      <div className="flex items-center justify-center">
        <h1 className="mb-12 text-4xl font-bold text-darker">
          What People Said About Us
        </h1>
      </div>
      <Slider {...settings} arrows={false}>
        {ratings.map((rating) => (
          <div className={`${style.slickCustom}`}>
            <div className="flex w-5/6 h-48 py-5 pl-8 text-sm border rounded-lg shadow-[0_8px_6px_0px_rgba(0,0,0,0.16)] mb-5  ">
              <div className="mr-6 text-6xl text-gray-300">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="my-5 mr-8 font-medium text-gray-400">
                <p className="mb-2">{rating.description}</p>
                <div className="flex flex-row items-center mb-1">
                  <p className="font-semibold text-dark">{rating.author}</p>
                  <p className="px-2 text-xs text-darker">
                    <GoPrimitiveDot />
                  </p>
                  <p className="text-light">{rating.position}</p>
                </div>
                <div className="flex flex-row text-lg text-primary">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Rating;
