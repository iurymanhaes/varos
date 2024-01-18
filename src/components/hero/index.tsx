"use client";
import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import CardHero from "./card";
import InfiniteSlider from "./slider";

export default function Hero() {
  return (
    <div className="w-full mb-[252px] mt-[153px] p-0 font-red-hat flex flex-wrap justify-between items-center">
   
      <div className="xl:w-1/2 lg:w-1/2 md:w-[55%] sm:w-full">
        <h1 className="w-full font-red-hat text-grey-c1 text-[64px] md:text-[50px] md:text-left sm:text-[38px] sm:text-center font-extrabold leading-[70.4px] md:leading-[55px] sm:leading-[41.8px] mb-6">
          Investir de forma mais inteligente passa por aqui.
        </h1>
        <h2 className=" font-red-hat text-grey-c2 text-[18px] font-semibold leading-[21.6px] mb-8 text-wrap md:text-left sm:text-center">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor
          forma possível.
        </h2>
        <div className="md:text-left sm:text-center">
          <button className="rounded-[48px] bg-green-button">
            <div className="flex items-center py-4 px-12">
              <span className="font-red-hat text-s-green text-lg font-semibold leading-normal tracking-[0.72px] mr-[10px]">
                Comprar agora
              </span>
              <Image
                src="/arrow--right.svg"
                alt="arro right"
                width="24"
                height="24"
              />
            </div>
          </button>
        </div>
        <div className="flex w-full items-center justify-start sm:justify-center sm:max-w-[358px] py-[25px] rounded-3xl md:mt-[88px] sm:mt-[72px] b-gradient relative overflow-hidden ">
          <InfiniteSlider />
        </div>
      </div>
      <div className="xl:w-1/3 lg:w-1/3 md:w-[45%] sm:w-full md:flex flex-col sm:hidden md:pl-[20px]">
        <CardHero
          mb_card="70px"
          icon_path="/FATOR.svg"
          content="Carteira FATOR"
          top_card
          ellipsePath="/top-ellipse.svg"
        />
        <CardHero
          mb_card="70px"
          icon_path="Dividendos.svg"
          middle_card
          content="Carteira de Dividendos"
          ellipsePath="/middle-ellipse.svg"
        />
        <CardHero
          mb_card="0px"
          icon_path="CODIGO.svg"
          content="Código.py"
          bottom_card
          ellipsePath="/bottom-ellipse.svg"
        />
      </div>
    </div>
  );
}
