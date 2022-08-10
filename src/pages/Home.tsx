import styled from "styled-components";
import MainLayout from "../layout/MainLayout";
import { HiOutlineSearch } from "react-icons/hi";
import { FormEventHandler, useState } from "react";
import { Btn, OverlayShade } from "../components/Styled";
import { CgClose } from "react-icons/cg";
import { Search } from "../components/Search";
import SummaryCard from "../components/SummaryCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [agency, setAgency] = useState("STATSPIZZA CONSULTS LTD");
  const [openSearch, setOpenSearch] = useState(false);

  const search: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <MainLayout>
      <div>
        {/* search agency */}
        <div
          onClick={() => setOpenSearch(!openSearch)}
          className="pb-2 cursor-pointer sticky top-[3.8rem] bg-[#FCFCFC] z-10 scale-[105%] md:scale-[100%]"
        >
          <div className="bg-[#F2F2F2] px-2 flex items-center justify-around relative container">
            <HiOutlineSearch className="min-w-[20px] h-auto absolute left-2" />
            <div className="bg-inherit grow py-3 pl-8">
              Search tour operators
            </div>
          </div>
        </div>

        {/* agency */}
        <div className="flex justify-between my-4 gap-2 container sticky top-[6.5rem] pb-2 bg-[#FCFCFC] z-10">
          <div className="text-ellipsis grow truncate max-w-[40%]">
            <h5 className="text-[20px] font-normal">{agency}</h5>
          </div>

          <select name="" id="" className="bg-inherit max-w-[30%]">
            <option value="2022FWC">2022 FIFA world cup</option>
            <option value="all">All</option>
          </select>
        </div>

        <section className="container flex flex-wrap lg:flex-nowrap justify-around gap-y-10 gap-x-5 sm:gap-10">
          <Link to={"pending/qety"}>
            <SummaryCard type="pending" value={17} />
          </Link>

          <Link to={"declined/qety"}>
            <SummaryCard type="declined" value={11} />
          </Link>

          <Link to={"approved/qety"}>
            <SummaryCard type="approved" value={38} />
          </Link>

          <Link to={"paid/qety"}>
            <SummaryCard type="paid" value={24} />
          </Link>
        </section>

        <section className="container my-5 text-center bottom-0 left-0 right-0">
          <h2 className="text-[45px] font-light">66</h2>
          <p>Overall applications</p>
        </section>

        {openSearch && (
          <OverlayShade className="bg-slate-800 bg-opacity-25 overflow-y-auto pt-10">
            <Btn
              onClick={() => setOpenSearch(!openSearch)}
              className="z-[9999999999] fixed top-5 right-5"
            >
              <CgClose fontSize={"1.8rem"} />
            </Btn>
            <Search />
          </OverlayShade>
        )}
      </div>
    </MainLayout>
  );
}
