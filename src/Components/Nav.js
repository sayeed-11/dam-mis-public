import React from "react";

import LogoSvg from "../assets/Nav_assets/Logo_Svg";
import MailSvg from "../assets/Nav_assets/Mail_Svg";
import LocationSvg from "../assets/Nav_assets/Location_Svg";
import TimeSvg from "../assets/Nav_assets/Time_Svg";
import AccountSvg from "../assets/Nav_assets/Account_Svg";

// Nav2
import FacebookSvg from "../assets/Nav_assets/Facebook_svg.js";
import InstaSvg from "../assets/Nav_assets/Insta_Svg.js";
import TwitterSvg from "../assets/Nav_assets/Twitter_Svg.js";
import LinkedInSvg from "../assets/Nav_assets/LinkedIn_Svg.js";

export default function Nav({ name }) {
  const options = ["Home", "About us", "Service", "Blogs", "Contact"];
  return (
    <div className="sticky top-0 z-50">
      <div className="w-full sticky bg-white py-7 flex justify-between px-9">
        <div className="left flex ">
          <div className="flex items-center mx-5">
            <LogoSvg />
            <h3 className="mx-3 font-robo font-bold">{name}</h3>
          </div>
          <div className=" mx-5 flex items-center">
            <NavComp icon={<MailSvg />} info="info@example.com" />
            <NavComp icon={<LocationSvg />} info="Kolkata-700156,india" />
            <NavComp icon={<TimeSvg />} info="Sunday-Friday" />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-5">
            <AccountSvg />
            <div className="mx-1">
              <p className="font-yant font-normal">Sign In</p>
              <h4 className="font-yant font-medium text-blue-600">Account</h4>
            </div>
          </div>
          <Button />
        </div>
      </div>
      <Nav2 options={options} />
    </div>
  );
}

const NavComp = ({ icon, info }) => {
  return (
    <div className="flex items-center mx-3">
      {icon}
      <p className="mx-1 font-yant font-light">{info}</p>
    </div>
  );
};

const Nav2 = ({ options }) => {
  return (
    <div className="flex justify-around w-full sticky py-5 bg-black text-white">
      <ul className="flex">
        {options.map((option, index) => (
          <li key={index} className="mx-5 font-robo flex items-center gap-x-1">
            {option}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-6 cursor-pointer">
        <FacebookSvg />
        <InstaSvg />
        <TwitterSvg />
        <LinkedInSvg />
      </div>
    </div>
  );
};

const Button = () => {
  return (
    <button className="bg-blue-700 hover:bg-blue-600 font-robo font-bold text-white py-2 px-4 rounded-lg">
      Book Apointment
    </button>
  );
};
