import React from "react";
import socialIcon from "../../../Assests/Images/social-group-Icon.png";

const Footer = () => {
  return (
    <div className="min-h-[160px] mt-10">
      <hr className="mt-2.5 border mx-10 border-[#ADADAD]" />
      <div className="flex items-center justify-between min-h-[160px] mx-12 ">
        <div className={`font-bold text-7xl`}>
          <span className={`text-[#EA7625]`}>i</span>
          <span className={`text-[#295D93]`}>LoT</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-xl text-[#D7222C] flex gap-10">
            <p
              className={`hover:text-[#A11D25] hover:underline cursor-pointer`}
            >
              FAQ
            </p>
            <p
              className={`hover:text-[#A11D25] hover:underline cursor-pointer`}
            >
              Terms & Conditions
            </p>
            <p
              className={`hover:text-[#A11D25] hover:underline cursor-pointer`}
            >
              Privacy Policy
            </p>
            <p
              className={`hover:text-[#A11D25] hover:underline cursor-pointer`}
            >
              Sales Enquiry
            </p>
            <p
              className={`hover:text-[#A11D25] hover:underline cursor-pointer`}
            >
              Help Center
            </p>
            <p
              className={`hover:text-[#A11D25] hover:underline cursor-pointer`}
            >
              Cookie Policy
            </p>
          </div>
          <div className="flex justify-center items-end h-14  text-[#767676]">
            <span className="text-lg font-semibold">Copyright: ©</span>
            <span className="ml-2 text-xl font-semibold">
              2023 iLoT. All rights reserved.
            </span>
          </div>
        </div>
        <div className="w-[360px] h-[143px] rounded-[20px]  px-10 py-5">
          <p className="ml-3 font-normal text-[32px] text-[#242424]">
            Follow us on
          </p>
          <img src={socialIcon} alt="" />
        </div>
      </div>
    </div>
    // <div className="w-full px-12 pb-4 mt-12 bg-white">
    //   <div className="flex items-center justify-between pt-5">
    //     <div className={`font-semibold text-[#767676] text-3xl`}>
    //       Get connected with us on social networks:
    //     </div>
    //     <div className="flex gap-5">
    //       <FaFacebook className="text-2xl text-blue-700 cursor-pointer" />
    //       <FaInstagram className="text-2xl text-orange-700 cursor-pointer" />
    //       <FaTwitter className="text-2xl text-blue-700 cursor-pointer" />
    //       <FaLinkedin className="text-2xl text-blue-700 cursor-pointer" />
    //     </div>
    //   </div>
    //   <hr className="mt-2.5 border border-[#ADADAD]" />
    //   <div className="flex items-center justify-around">
    //     <img src={logo} alt="logo" className="w-20 h-20 " />
    //     <p>hello</p>
    //     <p>hello</p>
    //     <p>hello</p>
    //   </div>
    //   {/* <hr className="my-2.5 border border-[#ADADAD]" /> */}
    //   <div className="flex justify-center text-[#767676]">
    //     <span className="text-lg font-semibold">© 2023 Copyright:</span>
    //     <span className="ml-2 text-xl font-semibold">amank@ideyalabs.com</span>
    //   </div>
    // </div>
  );
};

export default Footer;
