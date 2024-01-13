import React from "react";

type Props = {
  amount: string;
  description?: string;
  hasColor?: boolean;
};

export default function Infos({ amount, description, hasColor }: Props) {
  return (
    <div className="flex flex-col gap-1 text-center">
      <span
        className={`font-red-hat text-[18px] font-bold leading-[21.6px] ${
          hasColor ? "text-varosFLGreen" : "text-greyC4"
        }`}
      >
        {amount}
      </span>
      {hasColor ? (
        <span className="max-w-[110px] font-red-hat text-center text-sm text-varosDoc font-normal leading-[16.8px]">
          Nota média
          <br /> geral das aulas
        </span>
      ) : (
        <span className="max-w-[110px] font-red-hat text-center text-sm text-varosDoc font-normal leading-[16.8px]">
          {description}
        </span>
      )}
    </div>
  );
}
