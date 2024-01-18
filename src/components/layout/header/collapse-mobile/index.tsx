import React, { useState } from "react";

type Props = {
  title: string;
};

const CollapseMobille = ({title} : Props) => {
  const [active, setActive] = useState(false);

  const onClickNavButton = () => {
    setActive(!active);
  };

  return (
    <div
      className={`grid grid-cols-1 ${
        !active ? "border-b border-greyC8 last-of-type:border-none" : "first-of-type:mt-0 my-[54px] mx-6"
      }`}
    >
      <button
        className={`${
          active ? "bg-greyC8 border-b border-greyC5" : ""
        } text-varosDoc flex items-center w-full py-6 px-7 font-red-hat text-base font-bold leading-normal rounded-t-lg`}
        onClick={onClickNavButton}
      >
        {title}
      </button>
      {active && (
        <ul className=" font-red-hat px-[27.72px] pt-8 pb-[26px] bg-greyC8 rounded-b-lg flex flex-col gap-6 ">
          <li className="grid grid-cols-1 gap-2">
            <div className="col-span-full flex items-center justify-between">
              <span className="text-base font-semibold leading-[19.2px] text-varosDoc">
                Carteiras
              </span>
              <img src="/arrow--right_mobile.svg" />
            </div>
            <div className="col-span-full">
              <span className="text-xs font-normal leading-[14.4px] text-greyC5">
                Aprenda a encontrar as melhores ações, invista seu dinheiro de
                maneira inteligente e construa um futuro financeiro sólido.
              </span>
            </div>
          </li>
          <li className="grid grid-cols-1 gap-2">
            <div className="col-span-full flex items-center justify-between">
              <span className="text-base font-semibold leading-[19.2px] text-varosDoc">
                Cursos
              </span>
              <img src="/arrow--right_mobile.svg" />
            </div>
            <div className="col-span-full">
              <span className="text-xs font-normal leading-[14.4px] text-greyC5">
                Aprenda a encontrar as melhores ações, invista seu dinheiro de
                maneira inteligente e construa um futuro financeiro sólido.
              </span>
            </div>
          </li>
          <li className="grid grid-cols-1 gap-2">
            <div className="col-span-full flex items-center justify-between">
              <span className="text-base font-semibold leading-[19.2px] text-varosDoc">
                Consultoria
              </span>
              <img src="/arrow--right_mobile.svg" />
            </div>
            <div className="col-span-full">
              <span className="text-xs font-normal leading-[14.4px] text-greyC5">
                Aprenda a encontrar as melhores ações, invista seu dinheiro de
                maneira inteligente e construa um futuro financeiro sólido.
              </span>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CollapseMobille;
