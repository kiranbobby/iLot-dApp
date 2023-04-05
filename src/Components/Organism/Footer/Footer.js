import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from "react";
import logo from "../../../Assests/Images/logo.png";

const Footer = () => {
  return (
    <div className="w-full px-12 pb-4 mt-12 bg-white">
      <div className="flex items-center justify-between pt-5">
        <div className={`font-semibold text-[#767676] text-3xl`}>
          Get connected with us on social networks:
        </div>
        <div className="flex gap-5">
          <FaFacebook className="text-2xl text-blue-700 cursor-pointer" />
          <FaInstagram className="text-2xl text-orange-700 cursor-pointer" />
          <FaTwitter className="text-2xl text-blue-700 cursor-pointer" />
          <FaLinkedin className="text-2xl text-blue-700 cursor-pointer" />
        </div>
      </div>
      <hr className="mt-2.5 border border-[#ADADAD]" />
      <div className={`grid grid-cols-4 mt-12`}>
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-48 h-48" />
        </div>
        <div>
          <div className="flex justify-start mb-4 text-xl font-semibold">
            ABOUT
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Privacy & Policy
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Blogs
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Trending Property
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Project Location{" "}
          </div>
        </div>
        <div>
          <div className="flex justify-start mb-4 text-xl font-semibold">
            USEFUL LINKS
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Pricing
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Setting
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Session
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Help
          </div>
        </div>
        <div>
          <div className="flex justify-start mb-4 text-xl font-semibold">
            CONTACT
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            111 North Market Street
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            San Jose, California
          </div>
          <div className="mb-4 text-base font-semibold text-neutral-600">
            Zip - 95113
          </div>
        </div>
      </div>
      <hr className="my-2.5 border border-[#ADADAD]" />
      <div className="flex justify-center text-[#767676]">
        <span className="text-lg font-semibold">© 2023 Copyright:</span>
        <span className="ml-2 text-xl font-semibold">amank@ideyalabs.com</span>
      </div>
    </div>
  );
};

export default Footer;
