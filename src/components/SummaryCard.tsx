interface Props {
  type: "pending" | "approved" | "declined" | "paid";
  value: string | number;
}

const SummaryCard: React.FC<Props> = (props) => {
  return (
    <div className="rounded-3xl border-[##ACAAAA] border shadow-[rgba(0, 0, 0, 0.25)] shadow-md p-2 h-[120px] min-w-[150px] lg:min-w-[200px] bg-white flex flex-col justify-end items-center">
      <h5 className="text-[40px] leading-6 grow self-center flex items-center">
        <p
          className={
            props.type === "declined"
              ? "text-[#DD1622]"
              : props.type === "approved"
              ? "text-[#1F66D0]"
              : props.type === "paid"
              ? "text-[#46CC63]"
              : ""
          }
        >
          {props.value}
        </p>
      </h5>
      <p className="capitalize"> {props.type} </p>
    </div>
  );
};

export default SummaryCard;
