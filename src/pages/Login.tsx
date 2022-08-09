import { FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { Btn, Input } from "../components/Styled";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import MainLayout from "../layout/MainLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const login: FormEventHandler = async (e) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <MainLayout auth>
      <form
        className="w-full relative min-h-full flex flex-wrap items-end md:items-center justify-around gap-7 md:gap-2 md:p-10"
        onSubmit={login}
      >
        <div className="container md:w-[35%] text-center md:text-left flex flex-col gap-6 grow">
          <h4 className="text-[32px] md:text-3xl lg:text-4xl md:font-bold">
            Login
          </h4>
          <div className="hidden md:flex gap-2 items-center">
            <img src="logo.png" className="w-[40px] h-auto" />
            <h1 className="hidden md:block text-3xl font-[400]">
              explore Admin
            </h1>
          </div>
        </div>
        <div className="grow w-full md:w-[50%] lg:w-[60%] min-h-[50%] flex md:border-[#ccc] border-0 md:border-l-2 md:pl-10 container flex-col justify-between gap-5 md:py-5">
          <Input
            className="my-3 focus:!border-b-[#1F66D0] text-lg"
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="flex items-center">
            <Input
              className="my-3 focus:!border-b-[#1F66D0] text-lg !pr-8"
              type={!showPwd ? "password" : ""}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Btn
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="!absolute !right-0 md:!right-10"
            >
              {!showPwd && <VscEye size={"24px"} className="opacity-50" />}
              {showPwd && <VscEyeClosed size={"24px"} className="opacity-50" />}
            </Btn>
          </div>
          <div className="grow " />
          <Btn className="bg-blue-700 text-white font-semibold !py-4 transition-all duration-500 shadow-lg shadow-slate-300 hover:bg-opacity-20 w-full rounded-full">
            Login
          </Btn>

          <div className="flex items-center justify-center gap-3">
            <span>or</span>
            <Link to={"/register"} className="hover:text-[#1F66D0] text-lg">
              {" "}
              Register
            </Link>
          </div>
        </div>
      </form>
    </MainLayout>
  );
}
