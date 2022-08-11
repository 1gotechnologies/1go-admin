import React from "react";
import ListItem from "../components/ListItem";
import MainLayout from "../layout/MainLayout";

const ListPage: React.FC<{
  type: "pending" | "approved" | "declined" | "paid";
}> = (props) => {
  return (
    <MainLayout>
      <section>
        <h1 className="capitalize text-3xl font-semibold pt-10 sticky top-6 pb-3 bg-[#FCFCFC]">
          {" "}
          {props.type}{" "}
        </h1>
        <div className="p-5" />
        {Array.from({ length: 10 }, () => (
          <ListItem name="John James" date={new Date()} {...props} />
        ))}
      </section>
    </MainLayout>
  );
};

export default ListPage;
