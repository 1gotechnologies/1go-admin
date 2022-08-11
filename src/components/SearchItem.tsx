import React from "react";
import { CgInfo } from "react-icons/cg";
import Avatar from "./Avatar";

interface Props {
  title: string;
}

const SearchItem: React.FC<Props> = (props) => {
  return (
    <div className="border-[##ACAAAA] border border-x-0 p-3 flex items-center justify-between gap-3">
      {/* <div className="grow flex flex-col gap-1"> */}
      <h5 className="text-2xl font-medium">{props.title}</h5>
      {/* <small className="font-light">{props.date.toString()}</small> */}
      {/* </div> */}
      {/* <CgInfo className="w-[25px] h-[25px]" /> */}
    </div>
  );
};

export default SearchItem;
