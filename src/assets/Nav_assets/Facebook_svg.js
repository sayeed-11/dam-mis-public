import React, { useState } from "react";
export default function Facebook_svg() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "fill 0.3s",
          fill: isHovered ? "#0766FF" : "white",
        }}
      >
        <path
          d="M8.71875 9.5H6.375V16.5H3.25V9.5H0.6875V6.625H3.25V4.40625C3.25 1.90625 4.75 0.5 7.03125 0.5C8.125 0.5 9.28125 0.71875 9.28125 0.71875V3.1875H8C6.75 3.1875 6.375 3.9375 6.375 4.75V6.625H9.15625L8.71875 9.5Z"
          fill=""
        />
      </svg>
    </div>
  );
}
