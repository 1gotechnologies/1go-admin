import React from "react";
import ListItem from "../components/ListItem";
import MainLayout from "../layout/MainLayout";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

const ListPage: React.FC<{
  type: "pending" | "approved" | "declined" | "paid";
}> = (props) => {
  return (
    <MainLayout>
      <section className=" container max-w-screen-md">
        <h1 className="capitalize text-3xl font-semibold pt-10 sticky top-6 pb-3 bg-[#FCFCFC]">
          {" "}
          {props.type}{" "}
        </h1>
        <div className="p-5" />
        <div className="flex flex-col gap-3 ">
          {Array.from(
            { length: Number(faker.random.numeric()) },
            (item, index) => (
              <Link
                to={`/${props.type}/details/${faker.random.alphaNumeric()}`}
                key={index}
              >
                <ListItem
                  name={faker.name.fullName()}
                  date={faker.date.recent()}
                  {...props}
                />
              </Link>
            )
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ListPage;
