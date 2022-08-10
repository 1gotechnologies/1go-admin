import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiUser4Line } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import { Btn, SLink } from "./Styled";
import logo from "../assets/logo.png";

const HeaderComponent = () => {
  const [user, setUser] = useState("Admin");
  const [show, setShow] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname === "/");
    show ? toggleNav() : null;
  }, [location]);
  const goBack = () => navigate(-1);

  const toggleNav = () => setShow(!show);

  return (
    <header className="bg-[#FCFCFC] md:bg-white sticky w-full z-40 md:z-50 top-0 flex justify-between p-3 md:py-0 md:shadow">
      <div className={"md:hidden pt-2"}>
        {!isHome && (
          <Btn onClick={goBack}>
            <BiArrowBack fontSize={"1.8rem"} />
          </Btn>
        )}
        {isHome && <h3 className="text-2xl whitespace-nowrap">Hi, {user} </h3>}
      </div>
      <div className="container max-w-screen-lg flex flex-wrap justify-between lg:gap-x-[10rem] items-center mt-0 py-4">
        <NavLink
          className="hidden md:block text-gray-900 text-lg md:text-xl no-underline font-bold min-w-fit"
          to="/"
        >
          <div className="pl-2 md:pl-0 flex gap-2 justify-between items-end md:items-center">
            <img src={logo} className="w-[35px] h-auto" />
            <h1 className="hidden md:block">Admin</h1>
          </div>
        </NavLink>

        <div
          className={`flex justify-between grow self-center max-w-[80vw] top-14 md:top-0 z-50 duration-500 transition-all fixed md:relative flex-wrap-reverse md:flex-nowrap md:flex-row
            ${
              show
                ? "  bg-white shadow md:shadow-none pt-3 pb-10 max-h-[80vh] overflow-y-auto rounded-lg right-0 "
                : " right-[-100vw] md:right-0 "
            }`}
        >
          <div className="hidden md:flex md:grow" />

          <nav className="flex flex-col md:flex-nowrap md:flex-row md:gap-1 lg:gap-5 grow lg:w-full max-w-screen-sm items-start md:items-center md:justify-end lg:justify-center">
            <SLink
              to="/"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-y-[.5px] w-full md:border-0"
              }
            >
              Home
            </SLink>
            <SLink
              to="/pending"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-b-[.5px] w-full md:border-0"
              }
            >
              Pending
            </SLink>
            <SLink
              to="/declined"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-b-[.5px] w-full md:border-0"
              }
            >
              Declined
            </SLink>
            <SLink
              to="/approved"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-b-[.5px] w-full md:border-0"
              }
            >
              Approved
            </SLink>
            <SLink
              to="/paid"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-b-[.5px] w-full md:border-0"
              }
            >
              Paid
            </SLink>
          </nav>

          <div className="md:flex lg:grow lg:min-w-[4rem]" />

          <div className="relative w-full grow flex items-center justify-center md:shrink md:max-w-fit md:w-[20vmin]">
            <Dropdown
              label={
                <span className="flex gap-2">
                  <RiUser4Line className="text-blue-700 grow w-[28px] h-[28px]" />
                  <span className="grow hidden md:block">Hi, {user}</span>
                </span>
              }
              content={
                <div className="bg-white md:shadow md:rounded-md p-3 border-[#ccc] border-y md:border-0  flex flex-col relative md:absolute w-fit right-2">
                  <SLink to={"/"} className=" whitespace-nowrap">
                    My Account
                  </SLink>
                  <SLink to={"/"}>Logout</SLink>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <Btn onClick={toggleNav} className={"md:hidden pt-2"}>
        {!show && <CgMenuMotion fontSize={"1.8rem"} />}
        {show && <CgClose fontSize={"1.8rem"} />}
      </Btn>
    </header>
  );
};
export default HeaderComponent;
