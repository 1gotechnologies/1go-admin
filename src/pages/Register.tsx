import { FormEventHandler, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Btn, Input } from "../components/Styled";
import MainLayout from "../layout/MainLayout";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfrim, setPasswordConfrim] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const register: FormEventHandler = async (e) => {
    e.preventDefault();
    console.log("register");
  };

  return (
    <MainLayout auth>
      <form
        onSubmit={register}
        className="w-full relative min-h-full flex flex-wrap items-end md:items-center justify-around gap-7 md:gap-2 md:p-10"
      >
        <div className="container lg:w-[35%] text-center lg:text-left flex flex-col gap-6 grow self-start lg:py-[5rem]">
          <h4 className="text-[32px] md:text-3xl lg:text-4xl md:font-bold">
            Register
          </h4>
          <div className="hidden lg:flex gap-2 items-center">
            <img src="logo.png" className="w-[40px] h-auto" />
            <h1 className="hidden md:block text-3xl font-[400]">
              explore Admin
            </h1>
          </div>
        </div>
        <div className="grow w-full lg:w-[60%] min-h-[50%] flex lg:border-[#ccc] border-0 lg:border-l-2 lg:pl-10 container flex-col justify-between gap-5 md:py-5">
          <div className="flex flex-wrap gap-x-2 gap-y-5">
            <div className="w-full md:w-[0.8/2]">
              <Input
                className="my-3 focus:!border-b-[#1F66D0] text-lg"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="w-full md:w-[0.8/2]">
              <Input
                className="my-3 focus:!border-b-[#1F66D0] text-lg"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <Input
            className="my-3 focus:!border-b-[#1F66D0] text-lg"
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Input
            className="my-3 focus:!border-b-[#1F66D0] text-lg"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
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

          <div className="flex items-center">
            <Input
              className="my-3 focus:!border-b-[#1F66D0] text-lg !pr-8"
              type={!showPwd ? "password" : ""}
              placeholder="Re-type Password"
              value={passwordConfrim}
              onChange={(e) => {
                setPasswordConfrim(e.target.value);
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
            Register
          </Btn>

          <div className="flex items-center justify-center gap-3">
            <span>or</span>
            <Link to={"/login"} className="hover:text-[#1F66D0] text-lg">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </form>
    </MainLayout>
  );
}
