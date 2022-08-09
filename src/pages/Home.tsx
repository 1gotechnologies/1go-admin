import styled from "styled-components";
import MainLayout from "../layout/MainLayout";
import { HiOutlineSearch } from "react-icons/hi";
import { FormEventHandler, useState } from "react";

export default function Home() {
  const [agency, setAgency] = useState("STATSPIZZA CONSULTS LTD");

  const search: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <MainLayout>
      <div>
        <form onSubmit={search} className="pb-2">
          <div className="bg-[#F2F2F2] px-2 flex items-center justify-around relative container">
            <HiOutlineSearch className="min-w-[20px] h-auto absolute left-2" />
            <input
              type="search"
              className="bg-inherit grow text-lg outline-none border-none pl-5 py-2"
            />
          </div>
        </form>

        <div className="flex justify-between my-5 gap-2 container">
          <div className="text-ellipsis grow truncate">
            <h5 className="text-[20px] font-normal">{agency}</h5>
          </div>

          <select name="" id="" className="bg-inherit max-w-[30%]">
            <option value="2022FWC">2022 FIFA world cup</option>
            <option value="all">All</option>
          </select>
        </div>

        <section className="container flex flex-wrap lg:flex-nowrap justify-around gap-y-10 gap-x-5 sm:gap-10">
          <div className="rounded-lg shadow-md shadow-[rgba(0,0,0,.25)] p-2 h-[120px] min-w-[150px] lg:min-w-[200px] bg-white border-[#ACAAAA] flex flex-col justify-end items-center">
            <h5 className="text-[40px] leading-6 grow self-center flex items-center">
              <p>17</p>
            </h5>
            <p>Pending</p>
          </div>

          <div className="rounded-lg shadow-md shadow-[rgba(0,0,0,.25)] p-2 h-[120px] min-w-[150px] lg:min-w-[200px] bg-white border-[#ACAAAA] flex flex-col justify-end items-center">
            <h5 className="text-[40px] leading-6 grow self-center flex items-center text-[#DD1622]">
              <p>11</p>
            </h5>
            <p>Declined</p>
          </div>

          <div className="rounded-lg shadow-md shadow-[rgba(0,0,0,.25)] p-2 h-[120px] min-w-[150px] lg:min-w-[200px] bg-white border-[#ACAAAA] flex flex-col justify-end items-center">
            <h5 className="text-[40px] leading-6 grow self-center flex items-center text-[#1F66D0]">
              <p>38</p>
            </h5>
            <p>Appproved</p>
          </div>

          <div className="rounded-lg shadow-md shadow-[rgba(0,0,0,.25)] p-2 h-[120px] min-w-[150px] lg:min-w-[200px] bg-white border-[#ACAAAA] flex flex-col justify-end items-center">
            <h5 className="text-[40px] leading-6 grow self-center flex items-center text-[#46CC63]">
              <p>24</p>
            </h5>
            <p>Paid</p>
          </div>
        </section>

        <section className="container my-5 text-center bottom-0 left-0 right-0">
          <h2 className="text-[45px] font-light">66</h2>
          <p>Overall applications</p>
        </section>
      </div>
    </MainLayout>
  );
}
