"use client";

import { useState } from "react";

const DarkModeToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDarkMode = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div
      id="darkmode"
      onClick={toggleDarkMode}
      className={isActive ? "active" : ""}
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default DarkModeToggle;
