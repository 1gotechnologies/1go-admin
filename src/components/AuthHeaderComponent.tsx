import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiUser4Line } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import { Btn, SLink } from "./Styled";

const HeaderComponent = () => {
  const [user, setUser] = useState("Admin");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const toggleNav = () => setShow(!show);

  return (
    <header className="sticky w-full z-50 top-0 flex justify-between p-3 md:py-0">
      <div className="container max-w-screen-lg flex flex-wrap justify-between lg:gap-x-[10rem] items-center mt-0 py-4">
        <NavLink
          className="text-gray-900 text-lg md:text-xl no-underline font-bold min-w-fit"
          to="/"
        >
          <div className="pl-2 md:pl-0 flex gap-2 justify-between items-end md:items-center">
            <img src="logo.png" className="w-[35px] h-auto" />
            <h1> for Admin</h1>
          </div>
        </NavLink>

        <div className="grow" />

        <div
          className={`flex justify-between self-center max-w-[80vw] top-14 md:top-0  duration-500 transition-all fixed md:relative flex-wrap-reverse md:flex-nowrap md:flex-row
            ${
              show
                ? "  bg-white shadow md:shadow-none p-3 rounded-lg right-0 "
                : " right-[-100vw] md:right-0 "
            }`}
        >
          <div className="min-w-[20vmin] relative hidden md:block">
            <Dropdown
              label={
                <div className="flex justify-center gap-2 border-blue-700 transition-all duration-500 border-2 rounded-lg text-blue-700 px-2 py-1 hover:bg-blue-700 hover:text-white">
                  <RiUser4Line className="min-w-[28px] min-h-[28px]" />
                  <strong>Account</strong>
                </div>
              }
              content={
                <div className="bg-white md:shadow md:rounded-md p-3 border-[#ccc] border-y md:border-0  flex flex-col relative md:absolute w-full right-2 gap-3">
                  <SLink to={"/login"}>Login</SLink>
                  <SLink to={"/register"}>Register</SLink>
                </div>
              }
            />
          </div>

          <div className="bg-white min-w-[20vmin] rounded-md md:hidden flex flex-col relative md:absolute w-full  gap-3">
            <SLink to={"/login"}>Login</SLink>
            <SLink to={"/register"}>Register</SLink>
          </div>
        </div>
      </div>
      <Btn onClick={toggleNav} className={"md:hidden p-5"}>
        {!show && <CgMenuMotion fontSize={"1.8rem"} />}
        {show && <CgClose fontSize={"1.8rem"} />}
      </Btn>
    </header>
  );
};
export default HeaderComponent;
