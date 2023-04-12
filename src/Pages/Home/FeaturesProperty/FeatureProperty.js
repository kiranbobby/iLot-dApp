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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./FeatureProperty.module.scss";

const FeaturedProperty = () => {
  const [properties] = useState([
    {
      propertyImage: require("../../../Assests/Images/2.jpg"),
      propAlt: "living room with large window",
      owner: require("../../../Assests/Images/p3.jpg"),
      propName: "Lilys' Apartment",
      perimeter: 120,
      propLocation: "Chavchavadze Ave. 21",
      numBeds: 3,
      numBaths: 2,
      numGarage: 1,
      numFloor: 12,
      price: "$100,000",
      category: "RENT",
    },
    {
      propertyImage: require("../../../Assests/Images/4.jpg"),
      propAlt: "perfectly lit white living room",
      owner: require("../../../Assests/Images/p5.jpg"),
      propName: "Your Lux House",
      perimeter: 160,
      propLocation: "Chavchavadze Ave. 71",
      numBeds: 4,
      numBaths: 4,
      numGarage: 1,
      numFloor: 19,
      price: "$180,000",
      category: "SALE",
    },
    {
      propertyImage: require("../../../Assests/Images/1.jpg"),
      propAlt: "living room with kitchen in the background",
      owner: require("../../../Assests/Images/p2.jpg"),
      propName: "Apartment - Heart Of The City",
      perimeter: 90,
      propLocation: "Rustaveli Ave. 2",
      numBeds: 1,
      numBaths: 1,
      numGarage: 1,
      numFloor: 2,
      price: "$70,000",
      category: "RENT",
    },
    {
      propertyImage: require("../../../Assests/Images/3.jpg"),
      propAlt: "living room with kitchen in the background",
      owner: require("../../../Assests/Images/p4.jpg"),
      propName: "Jay's Apartment",
      perimeter: 90,
      propLocation: "Rustaveli Ave. 2",
      numBeds: 1,
      numBaths: 1,
      numGarage: 1,
      numFloor: 2,
      price: "$70,000",
      category: "SALE",
    },
    {
      propertyImage: require("../../../Assests/Images/3.jpg"),
      propAlt: "living room with kitchen in the background",
      owner: require("../../../Assests/Images/p4.jpg"),
      propName: "Jay's Apartment",
      perimeter: 90,
      propLocation: "Rustaveli Ave. 2",
      numBeds: 1,
      numBaths: 1,
      numGarage: 1,
      numFloor: 2,
      price: "$70,000",
      category: "SALE",
    },
  ]);

  const settings = {
    // dot: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <div >
      <Slider {...settings} arrows={false}>
        {properties.map((property) => (
          <div className={`${style.slickCustom}`}>
            <div className="relative mx-3 bg-white border border-gray-400 rounded-lg h-fit hover:drop-shadow-xl ">
              <div className="z-0 m-0 w-fit">
                <img
                  className="rounded-t-lg"
                  src={property.propertyImage}
                  alt={property.propAlt}
                />
              </div>

              <div className="absolute z-10 px-4 py-1 text-xs text-white rounded bg-primary top-3 left-3">
                FEATURED
              </div>

              <div className="absolute z-10 px-4 py-1 text-xs text-white rounded bg-darker top-3 right-3">
                FOR {property.category}
              </div>

              <div class="absolute w-12 h-12 bottom-44 right-3">
                <img
                  class="rounded-full shadow-sm"
                  src={property.owner}
                  alt="Owner"
                />
              </div>

              <div className="px-3 py-5">
                <h1 className="mb-3 text-sm font-bold text-dark">
                  {property.propName}
                </h1>
                <h2 className="text-xs font-medium text-gray-400">
                  {property.perimeter} m<sup>2</sup> {property.propLocation}
                </h2>
              </div>

              <div className="flex flex-row justify-between px-3 pb-5 text-gray-400 border-b border-gray-400">
                <div className="flex flex-col items-center justify-center text-lg font-medium">
                  <FontAwesomeIcon icon={faBed} />
                  <p className="pt-1 text-xs">{property.numBeds} Beds</p>
                </div>

                <div className="flex flex-col items-center justify-center text-lg font-medium">
                  <FontAwesomeIcon icon={faBath} />
                  <p className="pt-1 text-xs">{property.numBaths} Baths</p>
                </div>

                <div className="flex flex-col items-center justify-center text-lg font-medium">
                  <FontAwesomeIcon icon={faWarehouse} />
                  <p className="pt-1 text-xs">{property.numGarage} Garage</p>
                </div>

                <div className="flex flex-col items-center justify-center text-lg font-medium">
                  <FontAwesomeIcon icon={faSignal} />
                  <p className="pt-1 text-xs">{property.numFloor}th floor</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between px-3 py-3">
                <div className="text-sm font-bold text-dark">
                  {property.price}
                </div>

                <div className="text-light">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default FeaturedProperty;
