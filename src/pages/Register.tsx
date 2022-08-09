import { Link } from "react-router-dom";
import { Btn, Input } from "../components/Styled";
import MainLayout from "../layout/MainLayout";

export default function Register() {
  return (
    <MainLayout auth>
      <form className="w-full fixed top-0 md:relative h-screen md:h-fit flex flex-wrap items-end md:items-center justify-around gap-7 md:gap-2 p-10 overflow-x-auto">
        <div className="container lg:w-[35%] text-center lg:text-left flex flex-col gap-6 grow">
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
              />
            </div>
            <div className="w-full md:w-[0.8/2]">
              <Input
                className="my-3 focus:!border-b-[#1F66D0] text-lg"
                placeholder="Last Name"
              />
            </div>
          </div>
          <Input
            className="my-3 focus:!border-b-[#1F66D0] text-lg"
            type={"email"}
            placeholder="Email"
          />
          <Input
            className="my-3 focus:!border-b-[#1F66D0] text-lg"
            placeholder="Username"
          />
          <Input
            className="my-3 focus:!border-b-[#1F66D0] text-lg"
            type={"password"}
            placeholder="Password"
          />
          <Input
            className="my-3 focus:!border-b-[#1F66D0] text-lg"
            type={"password"}
            placeholder="Re-typePassword"
          />
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
