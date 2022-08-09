import { useState, useRef, useEffect } from "react";
import { Btn } from "./Styled";

export interface Props {
  label: React.ReactElement;
  content: React.ReactElement;
}

const SummaryCard: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  const reveal = () => setShow(!show);

  return (
    <div ref={parent} className="flex flex-col gap-2 w-full">
      <Btn className="dropdown-label whitespace-nowrap" onClick={reveal}>
        {props.label}
      </Btn>
      {show && (
        <div className="dropdown-content z-50 bottom-[-100%]">
          {" "}
          {props.content}{" "}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
