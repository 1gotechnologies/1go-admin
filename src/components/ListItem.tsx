import React from "react";
import { CgInfo } from "react-icons/cg";
import Avatar from "./Avatar";

import { DateTime, Duration } from "luxon";

interface Props {
  date: number | string | Date;
  image?: string;
  name: string;
  type: "pending" | "approved" | "declined" | "paid";
}

const ListItem: React.FC<Props> = (props) => {
  const date =
    typeof props.date === "number"
      ? DateTime.fromMillis(props.date)
      : typeof props.date === "string"
      ? DateTime.fromISO(props.date)
      : DateTime.fromJSDate(props.date);
  return (
    <div className="border-[##ACAAAA] border border-x-0 p-3 flex items-center justify-between gap-3">
      <Avatar {...props} />
      <div className="grow flex flex-col gap-1">
        <h5 className="text-2xl font-medium">{props.name}</h5>
        <small className="font-light">{date.toRelative()}</small>
      </div>
      <CgInfo className="min-w-[25px] min-h-[25px]" />
    </div>
  );
};

export default ListItem;
