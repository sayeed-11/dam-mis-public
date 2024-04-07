import React from "react";

function TeleIcon_Svg({ title, number }) {
  return (
    <div className="flex items-center ml-10">
      <svg
        width="35"
        height="36"
        viewBox="0 0 50 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.390137" width="50" height="50" rx="25" fill="#0057FF" />
        <g clipPath="url(#clip0_1_30)">
          <g clipPath="url(#clip1_1_30)">
            <g clipPath="url(#clip2_1_30)">
              <mask
                id="mask0_1_30"
                style={{ maskType: "luminance" }} // Change style to an object
                maskUnits="userSpaceOnUse"
                x="12"
                y="13"
                width="26"
                height="26"
              >
                <path
                  d="M37.5 13.6602H12.5V38.6602H37.5V13.6602Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_30)">
                <path
                  d="M25.125 13.6602C17.875 13.6602 12.5 16.5352 12.5 19.9102V20.7852C12.5 21.6602 13.25 22.2852 14.125 22.4102H17.375C18.5 22.4102 19.125 21.0352 18.75 19.9102C18.125 19.0352 18.75 17.7852 19.75 17.5352C23.25 16.7852 26.75 16.7852 30.375 17.5352C31.5 17.7852 32 18.9102 31.375 19.9102C31 21.0352 31.625 22.2852 32.75 22.4102H36C36.875 22.4102 37.625 21.6602 37.625 20.7852V19.9102C37.5 16.4102 32 13.6602 25.125 13.6602Z"
                  fill="white"
                />
                <path
                  d="M31.625 23.0352C31.375 22.6602 31 22.4102 30.5 22.4102H28.75V20.5352C28.75 20.1602 28.5 19.9102 28.125 19.9102H26.875C26.5 19.9102 26.25 20.1602 26.25 20.5352V22.4102H23.75V20.5352C23.75 20.1602 23.5 19.9102 23.125 19.9102H21.875C21.5 19.9102 21.25 20.1602 21.25 20.5352V22.4102H19.5C19 22.4102 18.625 22.6602 18.375 23.0352C16.5 26.2852 13.75 30.4102 13.75 37.4102C13.75 38.0352 14.25 38.6602 15 38.6602H35C35.75 38.6602 36.25 38.0352 36.25 37.4102C36.25 30.4102 33.375 26.0352 31.625 23.0352ZM25 36.1602C22.25 36.1602 20 33.9102 20 31.1602C20 28.4102 22.25 26.1602 25 26.1602C27.75 26.1602 30 28.4102 30 31.1602C30 33.9102 27.75 36.1602 25 36.1602Z"
                  fill="white"
                />
                <path
                  d="M25 33.6602C26.3807 33.6602 27.5 32.5409 27.5 31.1602C27.5 29.7795 26.3807 28.6602 25 28.6602C23.6193 28.6602 22.5 29.7795 22.5 31.1602C22.5 32.5409 23.6193 33.6602 25 33.6602Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_30">
            <rect
              width="25"
              height="25"
              fill="white"
              transform="translate(12.5 13.6602)"
            />
          </clipPath>
          <clipPath id="clip1_1_30">
            <rect
              width="25"
              height="25"
              fill="white"
              transform="translate(12.5 13.6602)"
            />
          </clipPath>
          <clipPath id="clip2_1_30">
            <rect
              width="25"
              height="25"
              fill="white"
              transform="translate(12.5 13.6602)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="ml-3">
        <p className="text-white font-yant font-normal text-base">{title}</p>
        <h5 className="text-white font-yant font-black text-2xl">{number}</h5>
      </div>
    </div>
  );
}

export default TeleIcon_Svg;
