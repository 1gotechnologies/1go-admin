import styled from "styled-components";
import MainLayout from "../layout/MainLayout";
import { HiOutlineSearch } from "react-icons/hi";
import { FormEventHandler, useState } from "react";
import { Btn, DCard, OverlayShade } from "../components/Styled";
import { CgClose } from "react-icons/cg";
import { Search } from "../components/Search";

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
        <div className="sticky top-[5rem] bg-[#FCFCFC] z-10 scale-[105%] md:scale-[100%]">
          {/* search agency */}
          <div
            onClick={() => setOpenSearch(!openSearch)}
            className="pb-2 cursor-pointer"
          >
            <div className="bg-[#F2F2F2] px-2 flex items-center justify-around relative container">
              <HiOutlineSearch className="min-w-[20px] h-auto absolute left-2" />
              <div className="bg-inherit grow py-3 pl-8">
                Search tour operators
              </div>
            </div>
          </div>

          {/* aggency */}
          <div className="flex justify-between my-4 gap-2 container">
            <div className="text-ellipsis grow truncate max-w-[40%]">
              <h5 className="text-[20px] font-normal">{agency}</h5>
            </div>

            <select name="" id="" className="bg-inherit max-w-[30%]">
              <option value="2022FWC">2022 FIFA world cup</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>

        <section className="container flex flex-wrap lg:flex-nowrap justify-around gap-y-10 gap-x-5 sm:gap-10">
          <DCard className="h-[120px] min-w-[150px] lg:min-w-[200px] bg-white flex flex-col justify-end items-center">
            <h5 className="text-[40px] leading-6 grow self-center flex items-center">
              <p>17</p>
            </h5>
            <p>Pending</p>
          </DCard>

          <DCard className="h-[120px] min-w-[150px] lg:min-w-[200px] bg-white flex flex-col justify-end items-center">
            <h5 className="text-[40px] leading-6 grow self-center flex items-center text-[#DD1622]">
              <p>11</p>
            </h5>
            <p>Declined</p>
          </DCard>

          <DCard className="h-[120px] min-w-[150px] lg:min-w-[200px] bg-white flex flex-col justify-end items-center">
            <h5 className="text-[40px] leading-6 grow self-center flex items-center text-[#1F66D0]">
              <p>38</p>
            </h5>
            <p>Appproved</p>
          </DCard>

          <DCard className="h-[120px] min-w-[150px] lg:min-w-[200px] bg-white flex flex-col justify-end items-center">
            <h5 className="text-[40px] leading-6 grow self-center flex items-center text-[#46CC63]">
              <p>24</p>
            </h5>
            <p>Paid</p>
          </DCard>
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
