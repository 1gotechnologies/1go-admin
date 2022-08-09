import React, { Children } from "react";
import AuthHeaderComponent from "../components/AuthHeaderComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

export interface Props {
  children: React.ReactElement;
  auth?: boolean;
}
const MainLayout: React.FC<Props> = (props) => {
  return (
    <main className="flex flex-col justify-between bg-[#FCFCFC] min-h-screen">
      {!props.auth && <HeaderComponent />}
      {props.auth && <AuthHeaderComponent />}
      <section
        className={`grow py-5 container max-w-screen-lg px-5 ${
          props.auth
            ? " flex h-full items-end md:items-center justify-around gap-7 px-10 py-20"
            : " "
        } `}
      >
        <> {props.children} </>
      </section>
      <div className="p-5" />
      {/* {!props.auth && <FooterComponent />} */}
    </main>
  );
};

export default MainLayout;
