import { useState, useRef, useEffect } from "react";
import { Btn } from "./Styled";

export interface Props {
  label: React.ReactElement;
  content: React.ReactElement;
}

const Dropdown: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const reveal = () => setShow(!show);

  return (
    <div className="flex flex-col gap-2 w-full transition-all duration-500 relative !h-fit">
      <div className="dropdown-label whitespace-nowrap" onClick={reveal}>
        {props.label}
      </div>
      <div
        className={`dropdown-content z-[99999] bottom-[-50%] w-full relative min-w-fit transition-all duration-500 ${
          show ? " !h-fit !scale-100" : " !max-h-0 !scale-0"
        }`}
      >
        {" "}
        {props.content}{" "}
      </div>
    </div>
  );
};

export default Dropdown;
