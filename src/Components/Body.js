import React from "react";
import Mask from "../assets/Body_assets/Mask-Group.jpg";
import LearnMoreSvg from "../assets/Body_assets/LearnMore_svg.js";
import TeleIconSvg from "../assets/Body_assets/TeleIcon_Svg";
import Car from "../assets/Body_assets/car.png";
import LineSvg from "../assets/Body_assets/Line_Svg";
import { serviceList } from "./Service.js";
import './ServiceCss.css';
import About from "./About.jsx";
export default function Body() {
  return (
    <div>
      <PartOne />
      <PartTwo serviceList={serviceList} />
      <About/>
    </div>
  );
}

const PartOne = () => {
  return (
    <div
      className="w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Mask})`, height: "700px" }}
    >
      <div
        className="bg-black  z-10 opacity-30 absolute w-80"
        style={{ height: "100%" }}
      ></div>
      <div
        className="w-80 bg-black z-10 opacity-30 transform skew-x-[22deg] absolute top-0 left-44"
        style={{ height: "100%" }}
      ></div>
      <h2 className="z-20 text-white text-6xl text-yant font-black relative mx-20 pt-48">
        Revive, Repair,
        <br /> Relish the Ride!
      </h2>
      <p className="text-white z-20 relative text-robo mx-20 pt-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non.
      </p>
      <div className="relative z-20 flex pt-20 mx-20 items-center">
        <LearnMoreSvg />
        <TeleIconSvg title={"Requesting A Call"} number="(629) 555-0129" />
      </div>
    </div>
  );
};

const PartTwo = ({ serviceList }) => {
  return (
    <div>
      <div className="flex justify-center mt-[-85px] mb-14 z-30 relative">
        <ServiceCard
          icon={Car}
          title="Free Delivary"
          descrip="Home Delivery,Free Shipping!"
        />
        <ServiceCard
          icon={Car}
          title="Free Delivary"
          descrip="Home Delivery,Free Shipping!"
        />
        <ServiceCard
          icon={Car}
          title="Free Delivary"
          descrip="Home Delivery,Free Shipping!"
        />
      </div>
      <div className="flex justify-center items-center">
        <LineSvg />
        <h4 className="font-robo text-base text-blue-600 font-bold mx-1">
          Our Services
        </h4>
        <LineSvg />
      </div>

      <div className="felx  flex justify-center items-center" style={{ width: "100vw" }}>
        <h2 className=" flex justify-center items-center flex-col font-extrabold text-[2.3rem]">
          <p>Purpose Of Business And</p>
          <p>Consulting Services</p>
        </h2>
      </div>
      <div className="flex justify-center mx-4">
        <ListOfService serviceList={serviceList} />
      </div>
    </div>
  );
};
const ServiceCard = ({ icon, title, descrip }) => {
  const boxShadowStyle = {
    WebkitBoxShadow: "10px 10px 19px -10px rgba(0,0,0,0.75)",
    MozBoxShadow: "10px 10px 19px -10px rgba(0,0,0,0.75)",
    boxShadow: "10px 10px 19px -10px rgba(0,0,0,0.75)",
  };
  return (
    <div
      className="bg-white flex  h-24 w-72 mx-10 overflow-hidden my-10"
      style={boxShadowStyle}
    >
      <div className="bg-blue-600 flex items-center justify-end w-24 relative left-[-27px] transform skew-x-[-30deg]">
        <img
          src={icon}
          alt=""
          srcset=""
          className="w-7 h-6 mx-4 transform skew-x-[30deg]"
        />
      </div>
      <div className="mx-3 flex flex-col justify-center">
        <h1 className="font-yant text-xl mb-1">{title}</h1>
        <p className="font-robo text-xs mt-1">{descrip}</p>
      </div>
    </div>
  );
};


const ListOfService = ({ serviceList }) => {
  return (
    <div className="py-5 grid grid-cols-3 gap-x-3 gap-y-7">
      {
        serviceList.map(({ id, img, title }) => {
          return (
            <div className="space-y-3" key={id}>
              <div className="serviceCard w-64 aspect-square relative rounded-sm overflow-hidden">
                <img className="absolute w-full h-full object-cover" src={img} alt="" />
                <div className="serviceDetails absolute w-full space-y-5 bg-black/[0.5] bottom-0 h-16 flex flex-col justify-center items-start pl-5">
                  <h1 className="text-white text-sm font-semibold">{title}</h1>
                  <p className="detailsText hidden text-white text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
              <button className="flex gap-x-3">
                <p className="text-[0.6rem] pl-6 text-[#0057FF] active:text-[#0057FF]/[0.5] font-bold">READ MORE</p>
                <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:"#0057FF"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
              </button>
            </div>
          )
        })
      }
    </div>
  )
}