import React, { useState } from "react";
export default function LinkedIn_Svg() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "fill 0.3s",
          fill: isHovered ? "#0277B5" : "white",
        }}
      >
        <path
          d="M13 0.5C13.5312 0.5 14 0.96875 14 1.53125V13.5C14 14.0625 13.5312 14.5 13 14.5H0.96875C0.4375 14.5 0 14.0625 0 13.5V1.53125C0 0.96875 0.4375 0.5 0.96875 0.5H13ZM4.21875 12.5V5.84375H2.15625V12.5H4.21875ZM3.1875 4.90625C3.84375 4.90625 4.375 4.375 4.375 3.71875C4.375 3.0625 3.84375 2.5 3.1875 2.5C2.5 2.5 1.96875 3.0625 1.96875 3.71875C1.96875 4.375 2.5 4.90625 3.1875 4.90625ZM12 12.5V8.84375C12 7.0625 11.5938 5.65625 9.5 5.65625C8.5 5.65625 7.8125 6.21875 7.53125 6.75H7.5V5.84375H5.53125V12.5H7.59375V9.21875C7.59375 8.34375 7.75 7.5 8.84375 7.5C9.90625 7.5 9.90625 8.5 9.90625 9.25V12.5H12Z"
          fill=""
        />
      </svg>
    </div>
  );
}
