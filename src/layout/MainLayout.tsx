import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuthHeaderComponent from "../components/AuthHeaderComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

export interface Props {
  children: React.ReactElement;
  auth?: boolean;
}
const MainLayout: React.FC<Props> = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
      // behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

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
