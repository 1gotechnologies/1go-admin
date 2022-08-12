import MainLayout from "../layout/MainLayout";
import React from "react";
import { faker } from "@faker-js/faker";

// Full name:
// Category:
// Number of persons:
// Email address:
// Phone number:
// Package type:
// Price:

const DetailsPage: React.FC<{
  // type: "pending" | "approved" | "declined" | "paid";
  content?: React.ReactElement;
}> = (props) => {
  const name = faker.name.fullName();
  const category = Math.random() >= 0.5 ? "single" : "multiple";
  const persons = category === "single" ? 1 : faker.random.numeric();
  const email = faker.internet.email();
  const phone = faker.phone.number();
  const packagename = Math.random() >= 0.5 ? "regular" : "vip";
  const price = faker.finance.amount(undefined, undefined, undefined, "NGN");
  return (
    <MainLayout>
      <section className=" container max-w-screen-md flex flex-col gap-10">
        <h1 className="capitalize text-3xl font-semibold pt-10 sticky top-6 pb-3 bg-[#FCFCFC]">
          {/* {" "}
          {props.type}{" "} */}
          {name}
        </h1>
        <div className="flex justify-between p3 gap-10 md:20 w-full">
          <div className="min-w-[150px]">Full name:</div>
          <div className="capitalize grow">{name} </div>
        </div>
        <div className="flex justify-between p3 gap-10 md:20">
          <div className="min-w-[150px]">Category:</div>
          <div className="capitalize grow">{category} </div>
        </div>
        <div className="flex justify-between p3 gap-10 md:20">
          <div className="min-w-[150px]">Number of persons:</div>
          <div className="capitalize grow">{persons} </div>
        </div>
        <div className="flex justify-between p3 gap-10 md:20">
          <div className="min-w-[150px]">Email address:</div>
          <div className="capitalize grow">{email} </div>
        </div>
        <div className="flex justify-between p3 gap-10 md:20">
          <div className="min-w-[150px]">Phone number:</div>
          <div className="capitalize grow">{phone} </div>
        </div>
        <div className="flex justify-between p3 gap-10 md:20">
          <div className="min-w-[150px]">Package type:</div>
          <div className="capitalize grow">{packagename} </div>
        </div>
        <div className="flex justify-between p3 gap-10 md:20">
          <div className="min-w-[150px]">Price:</div>
          <div className="capitalize grow">{price} </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DetailsPage;
