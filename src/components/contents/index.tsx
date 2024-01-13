"use client";
import React from "react";
import DropdownContents from "./DropdownContents";
import { Col, Row } from "antd";
import Image from "next/image";

export default function Contents() {
  const carteirasItems = [
    "Carteira FATOR",
    "Carteira Dividendos",
    "Cursos",
    "Consultoria",
  ];
  const cursosItems = [
    "Valuation 2.0",
    "Código.py",
    "Dash.py",
    "Carteira Essencial",
    "Curso Reels",
    "Enciclopédia de FII",
  ];
  const consultoriaItems = ["Consultoria VAROS"];
  return (
    <section className="w-full h-full flex mb-[192px]">
      <Row className="w-full h-full">
        <Col lg={24}>
          <h2 className="text-greyC1 text-[38px] font-bold leading-[45p] mb-4">
            Simplifique seus investimentos e <br /> alcance seus objetivos
          </h2>
          <span className="text-greyC5 text-[18px] font-medium leading-[22px] ">
            Conteúdos preparados para trazer mais segurança, <br />
            independente do seu nível.
          </span>
        </Col>
        <Row className="w-full h-full">
          <Col lg={10} className="mt-10 flex flex-col gap-4 w-full h-full">
            <DropdownContents title="Carteiras" menuItems={carteirasItems} />
            <DropdownContents title="Cursos" menuItems={cursosItems} />
            <DropdownContents
              title="Consultoria"
              menuItems={consultoriaItems}
            />
          </Col>
          <Col
            lg={10}
            className="mt-10 pt-[29px] pl-[41px] flex flex-col gap-4 bg-greyC9 w-full max-w-[662px] h-full rounded-[32px]"
          >
            <Row className="mb-6 gap-4">
              <img src="/selecao-icon.svg" alt="icone seleção" />{" "}
              <span className="text-greyC1 text-sm font-semibold">
                Carteira Seleção
              </span>
            </Row>
            <h2 className="text-greyC1 text-2xl font-semibold leading-[28.8px] mb-4">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit,
              <br />
            </h2>
            <p className="text-greyC3 text-[16px] font-normal leading-[19.2px] mb-[15px]">
              Lorem ipsum dolor sit amet,consectetur
              <br /> adipiscing elit, sed do eiusmod tempor incididunt
              <br /> ut labore et dolore magna aliqua. Ut enim
            </p>
            <img src="/map.png" alt="" className="w-full h-full rounded-br-[32px]" />
          </Col>
        </Row>
      </Row>
    </section>
  );
}
