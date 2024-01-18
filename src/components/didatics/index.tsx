import { Col, Row } from "antd";
import React from "react";
import Testimonials from "./testimonials";
import Infos from "./infos";

export default function Didatics() {
  return (
    <section className="lg:mb-[192px] md:mb-[176.14px] sm:mb-32 w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 sm:grid-cols-1 xl:items-start lg:items-start md:items-start sm:items-center">

        <div className="w-full">
          <h2 className="w-full text-greyC1 xl:text-[38px] lg:text-[38px] md:text-[38px] sm:text-[30px] font-bold leading-[45.6px] mb-2 md:text-left sm:text-center">
            Didática de verdade
          </h2>
          
          <h3 className="text-greyC1 text-[18px] font-normal leading-[21.6px]  mb-20 sm:mb-14 md:text-left sm:text-center">
            Garantindo seu aprendizado
          </h3>
          <Testimonials />
        </div>

        <div>
          <img
            src="/persons.png"
            alt="foto pessoas"
            className="lg:max-w-[564px] w-full mb-[72px] xl:mt-0 lg:mt-0 md:mt-0 sm:mt-6"
          />
          <div className="flex items-center justify-center w-full py-4 px-2 lg:px-[99px] rounded-[32px] b-gradient gap-[38px] lg:gap-[38px] sm:gap-4 bg-yellow-300">
            <Infos
              amount="+ 1000"
              description="Nota média geral</br> das aulas"
            />
            <Infos
              amount="4,8/5"
              description="Nota média</br> geral das aulas"
              hasColor
            />
            <Infos amount="10k +" description="Comunidade" />
          </div>
        </div>
      </div>
    </section>
  );
}
