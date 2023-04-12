import React from "react";
import contactBanner from "../../Assests/Images/contact-banner-1.png";
import phoneIcon from "../../Assests/Images/viber.svg";
import mailIcon from "../../Assests/Images/email.svg";
import shareIcon from "../../Assests/Images/share.svg";
import contactImage from "../../Assests/Images/contact-image.svg";
import socialIcon from "../../Assests/Images/social-group-Icon.png";
import { FormField, LoginButton, TextField } from "../../Components/Atom";

const Contact = () => {
  return (
    <>
      <div className="relative">
        <img
          src={contactBanner}
          alt=""
          className="shadow-[0_3px_8px_0px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute ml-20 top-5">
          <div className={`font-bold text-[76px] text-[#fff] mb-5`}>
            Contact Us
          </div>
          <div className="mb-8 font-bold text-5xl italic text-[#fff]">
            We are here to help!
          </div>
          <div className="mb-8 font-normal text-2xl text-[#fff]">
            Our national customer service team is available 24/7
          </div>
        </div>
      </div>
      <div className="relative bottom-32 px-20 flex gap-10 w-full min-h-[314px]">
        <div
          className={`bg-[#fff] w-[33%] rounded-[20px] p-10 shadow-[0_8px_6px_0px_rgba(0,0,0,0.16)]`}
        >
          <div className="flex flex-col items-center">
            <img src={phoneIcon} alt="" />
            <p
              className={`mt-8 font-bold text-4xl text-[#242424] hover:text-[#D7222C] hover:underline cursor-pointer hover transition-all hover:ease-in hover:duration-300`}
            >
              +1(973) 887 2001
            </p>
            <p
              className={`mt-7 font-medium text-2xl text-[#242424] text-center`}
            >
              Talk to a customer service representative for help with our site,
              app or iLoT agent
            </p>
          </div>
        </div>
        <div
          className={`bg-[#fff] w-[33%] rounded-[20px] p-10 shadow-[0_8px_6px_0px_rgba(0,0,0,0.16)]`}
        >
          <div className="flex flex-col items-center">
            <img src={mailIcon} alt="" />
            <p
              className={`mt-8 font-bold text-4xl text-[#242424] hover:text-[#D7222C] hover:underline cursor-pointer hover transition-all hover:ease-in hover:duration-300`}
            >
              support@gmail.com
            </p>
            <p
              className={`mt-7 font-medium text-2xl text-[#242424] text-center`}
            >
              Send our customer service team questions about our site, app or
              iLoT agent
            </p>
          </div>
        </div>

        <div
          className={`bg-[#fff] w-[33%] rounded-[20px] p-10 shadow-[0_8px_6px_0px_rgba(0,0,0,0.16)]`}
        >
          <div className="flex flex-col items-center">
            <img src={shareIcon} alt="" />
            <p className={`mt-8 mb-9 font-bold text-4xl text-[#242424]`}>
              Connect with us
            </p>
            <img src={socialIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={`flex w-full -mt-28 px-20 gap-10`}>
        <div className={`w-1/2 `}>
          <p className={`font-medium text-[44px] text-[#242424]`}>
            Quick Report:
          </p>
          <p className={`font-normal text-2xl text-[#767676] mt-1`}>
            Having any query or issue in our site, app
          </p>
          <div className="flex gap-10 my-10">
            <FormField label={"Name"} />
            <FormField label={"Email"} />
          </div>
          <FormField label={"Query or Issue"} />
          <div className="mt-10">
            <TextField label={"Description"} className={`h-40`} />
          </div>
          <div className="mt-20 mb-12 text-center">
            <LoginButton label="Submit" />
          </div>
        </div>
        <div className={`w-1/2 flex justify-center items-center`}>
          <img src={contactImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
