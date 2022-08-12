import styled from "styled-components";
import MainLayout from "../layout/MainLayout";
import { HiOutlineSearch } from "react-icons/hi";
import { FormEventHandler, useState } from "react";
import { Btn, OverlayShade } from "../components/Styled";
import { CgClose } from "react-icons/cg";
import { Search } from "../components/Search";
import SummaryCard from "../components/SummaryCard";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";

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
          <div className="bg-[#F2F2F2] px-2  pl-8 flex items-center justify-around relative container text-ellipsis  truncate ...">
            <HiOutlineSearch className="min-w-[20px] h-auto absolute left-2" />
            <div className="bg-inherit grow py-3">Search tour operators</div>
          </div>
        </div>

        {/* agency */}
        <div className="flex justify-between my-4 gap-2 container ">
          <div className="text-ellipsis truncate ... max-w-[40%] grow">
            <h5 className="text-[20px] font-normal">{agency}</h5>
          </div>

          <select name="" id="" className="bg-inherit max-w-[30%]">
            <option value="2022FWC">2022 FIFA world cup</option>
            <option value="all">All</option>
          </select>
        </div>

        <section className="container flex flex-wrap lg:flex-nowrap justify-around gap-y-10 gap-x-5 sm:gap-10">
          <Link to={`pending/${faker.random.alphaNumeric()}`}>
            <SummaryCard type="pending" value={faker.random.numeric()} />
          </Link>

          <Link to={`declined/${faker.random.alphaNumeric()}`}>
            <SummaryCard type="declined" value={faker.random.numeric()} />
          </Link>

          <Link to={`approved/${faker.random.alphaNumeric()}`}>
            <SummaryCard type="approved" value={faker.random.numeric()} />
          </Link>

          <Link to={`paid/${faker.random.alphaNumeric()}`}>
            <SummaryCard type="paid" value={faker.random.numeric()} />
          </Link>
        </section>

        <section className="container my-5 text-center bottom-0 left-0 right-0">
          <h2 className="text-[45px] font-light">{faker.random.numeric(2)}</h2>
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
