import React from "react";

const Collapse = ({ handleExpand }) => {
  return (
    <svg
      onClick={handleExpand}
      style={{ marginRight: 15, paddingTop: 15, cursor: "pointer" }}
      width="16"
      height="2"
      viewBox="0 0 16 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="1.45455" rx="0.727273" fill="#4E7FCE" />
    </svg>
  );
};

export default Collapse;
