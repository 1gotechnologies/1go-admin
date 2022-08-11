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
    <header className="bg-[#FCFCFC] md:bg-white sticky w-full z-50 top-0 flex justify-between p-3 md:py-0 md:shadow">
      <div className={"md:hidden pt-2 z-[999999]"}>
        {!isHome && (
          <Btn onClick={goBack}>
            <BiArrowBack fontSize={"1.8rem"} />
          </Btn>
        )}
        {isHome && <h3 className="text-2xl whitespace-nowrap">Hi, {user} </h3>}
      </div>
      <div className="md:container !max-w-screen-lg flex flex-wrap justify-between lg:gap-x-[10rem] items-center mt-0 py-4 md:py-0 relative">
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
          className={`top-0 max-w-[80vw] z-50 duration-500 transition-all fixed md:relative right-0 h-screen md:!h-fit flex grow md:self-center justify-start md:justify-between flex-wrap-reverse md:flex-nowrap py-[4rem] md:py-0 
            ${
              show
                ? "bg-white shadow md:shadow-none"
                : "right-[-100vw] md:right-0"
            }`}
        >
          <div className="hidden md:block md:grow" />

          <nav className="flex flex-col md:flex-nowrap md:flex-row md:gap-1 lg:gap-5 w-full grow md:shrink md:w-fit lg:w-full max-w-screen-sm items-start md:items-center md:justify-end pr-5 lg:justify-center min-h-fit responsive-nav !overflow-y-auto md:!overflow-visible min-w-[15rem] ">
            <SLink
              to="/"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-y-[.5px] w-full md:w-fit md:border-0"
              }
            >
              Home
            </SLink>
            <SLink
              to="/pending"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-b-[.5px] w-full md:w-fit md:border-0"
              }
            >
              Pending
            </SLink>
            <SLink
              to="/declined"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-b-[.5px] w-full md:w-fit md:border-0"
              }
            >
              Declined
            </SLink>
            <SLink
              to="/approved"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-b-[.5px] w-full md:w-fit md:border-0"
              }
            >
              Approved
            </SLink>
            <SLink
              to="/paid"
              className={
                "py-4 px-2  md:px-1 border-[#D9D9D9] border-x-0 border-b-[.5px] w-full md:w-fit md:border-0"
              }
            >
              Paid
            </SLink>
          </nav>

          <div className="hidden md:block lg:grow lg:min-w-[4rem]" />

          <div className="w-full md:shrink md:self-end md:justify-end md:items-end flex md:w-fit lg:w-[10rem] h-fit">
            <Dropdown
              label={
                <Btn className="flex gap-2 justify-around w-full">
                  <RiUser4Line className="text-blue-700 w-[28px] h-[28px]" />
                  <span className="grow">Hi, {user}</span>
                </Btn>
              }
              content={
                <div className="bg-white border-[##ACAAAA] border shadow rounded-md p-3 flex flex-col absolute mx-auto min-w-[10rem] md:right-2 z-50">
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

      <Btn onClick={toggleNav} className={"md:hidden pt-2 z-[999999]"}>
        <CgMenuMotion
          fontSize={"1.8rem"}
          className={`transition-all duration-300 ${
            !show ? " !h-fit !scale-100" : " !max-h-0 !scale-0"
          }`}
        />
        <CgClose
          fontSize={"1.8rem"}
          className={`transition-h duration-300 ${
            show ? " !h-fit !scale-100" : " !max-h-0 !scale-0"
          }`}
        />
      </Btn>
    </header>
  );
};
export default HeaderComponent;
