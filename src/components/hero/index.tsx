import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import CardHero from "./card";
import InfiniteSlider from "./slider";

export default function Hero() {
  return (
    <Row align="middle" justify="space-between" className="w-full container">
      <Col lg={14} className=" w-full">
        <h1 className="text-grey-c1 text-[64px] font-extrabold leading-[70px] mb-6">
          Investir de forma
          <br /> mais inteligente
          <br /> passa por aqui.
        </h1>
        <h2 className="text-grey-c2 text-base mb-8">
          Fazemos de tudo para que você possa conquistar seus <br /> sonhos da
          melhor forma possível.
        </h2>
        <button className="rounded-[48px] bg-green-button">
          <Row align="middle" className="flex items-center py-4 px-12">
            <span className="text-s-green text-lg font-semibold leading-normal tracking-wider mr-[10px]">
              Comprar agora
            </span>
            <Image
              src="/arrow--right_24.svg"
              alt="arro right"
              width="24"
              height="24"
            />
          </Row>
        </button>
        <Row
          align="middle"
          justify="start"
          className="w-full max-w-[520px] py-6 rounded-3xl mt-[88px] borda-gradient relative overflow-hidden"
        >
          <InfiniteSlider />
        </Row>
      </Col>
      <Col lg={8}>
        <CardHero mb_card="70px" />
        <CardHero mb_card="70px" ml_card />
        <CardHero />
      </Col>
    </Row>
  );
}
