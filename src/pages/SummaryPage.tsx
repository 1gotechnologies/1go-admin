import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { faker } from "@faker-js/faker";

interface Props {
  type: "pending" | "approved" | "declined" | "paid";
}

const SummaryPage: React.FC<Props> = (props) => {
  // const [value, setValue] = useState<string | number>(66);

  // useEffect(() => {
  //   setValue(Math.floor(Math.random() * 987));
  // }, [useLocation()]);
  return (
    <MainLayout>
      <section className="min-h-screen absolute top-0 left-0 w-screen p-5 flex flex-col justify-center items-center">
        <div className="container max-w-sm text-center py-10">
          <h5
            className={`text-[80px] text-center leading-12 self-center ${
              props.type === "declined"
                ? "text-[#DD1622]"
                : props.type === "approved"
                ? "text-[#1F66D0]"
                : props.type === "paid"
                ? "text-[#46CC63]"
                : ""
            }`}
          >
            {/* {value} */}
            {faker.random.numeric()}
          </h5>
          <p className="capitalize font-medium text-2xl">
            {" "}
            For all tour operators and tour packages{" "}
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default SummaryPage;
