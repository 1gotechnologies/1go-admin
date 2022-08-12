import React, { useEffect, useState } from "react";
import { RiUserSmileFill } from "react-icons/ri";

interface Props {
  image?: string;
  name?: string;
}

const Avatar: React.FC<Props> = (props) => {
  const [imageExists, setImageExists] = useState(false);
  useEffect(() => {
    if (!props.image) return setImageExists(false);
    fetch(props.image).then((res) =>
      res.ok ? setImageExists(true) : setImageExists(false)
    );
  });
  return (
    <div className="rounded-full min-h-[40px] min-w-[40px] text-blue-700">
      <img
        src={props.image}
        className={` ${
          props.image && imageExists
            ? " scale-100 absolute z-[2]"
            : " !max-h-0 hidden !max-w-0 !scale-0"
        }`}
      />
      <RiUserSmileFill className="w-full h-full" />
    </div>
  );
};

export default Avatar;
