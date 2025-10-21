import React from "react";
import Logo from "../../assets/logo.png";
import { format } from "date-fns";
import Marquee from "./Marquee";
import Navbar from "./Navbar";

const RootHeader = () => {
  return (
    <div className="main-container py-10">
      <div className="flex flex-col justify-center items-center">
        <figure>
          <img src={Logo} alt="The Dragon News" />
        </figure>
        <p className="text-dark-500 text-base sm:text-lg mt-5 mb-2">
          Journalism Without Fear or Favour
        </p>
        <p className="text-dark-600 font-medium text-lg sm:text-xl">
          {format(new Date(), "EEEE, ")}
          <span className="text-dark-500">
            {format(new Date(), "MMMM dd, yyyy ")}
          </span>
        </p>
      </div>
      <div className="mt-10 mb-5">
        <Marquee></Marquee>
      </div>
      <div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default RootHeader;
