import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterComponent = () => {
  return (
    <footer className="bg-white p-0 m-0 shadow rotate-180">
      <div className="container max-w-screen-lg py-6 font-[400] hidden md:block ">
        <div className=" rotate-180 text-center ">
          © 2022 1go Technologies. All rights reserved
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
