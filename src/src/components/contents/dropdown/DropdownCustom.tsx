import React, { useState } from "react";

type MenuItem = {
  title: string;
  content: string;
};

type Props = {
  title: string;
  menuItems: MenuItem[];
};
const DropdownCustom = ({ title, menuItems }: Props) => {
  const [active, setActive] = useState(true); 

  const handleClick = () => {
    setActive(!active);
  };
  return (
      <button
        className={`font-bold max-w-[270px] w-full py-4 px-8 rounded-[40px] flex items-center justify-center gap-[10px] border border-greyC8 ${
          active ? "bg-greyC8" : "bg-greyC9"
        }`}
        onClick={handleClick}
      >
        <span className="text-[18px] text-greyC1 font-bold tracking-[1.8px]">
          {title}
        </span>
        <span>
          {active ? (
            <img src="/caret--down.svg" width="17px" alt="Ícone Ativo" />
          ) : (
            <img src="/caret--right.svg" width="17px" alt="Ícone Inativo" />
          )}
        </span>
      </button>  
  );
};

export default DropdownCustom;
