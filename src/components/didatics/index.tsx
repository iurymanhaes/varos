import { Col, Row } from "antd";
import React from "react";
import Testimonials from "./testimonials";
import Infos from "./infos";

export default function Didatics() {
  return (
    <section className="mb-[192px] w-full h-full">
      <Row align="top">
        <Col lg={10} className="mr-[100px]"> {/**ajustar espaçamento entre as colunas mr-temporario */}
          <h2 className="w-full text-greyC1 text-[38px] font-bold leading-[45.6px] mb-2">
            Didática de verdade
          </h2>
          <h3 className="text-greyC1 text-[18px] font-normal leading-[21.6px] mb-20">
            Garantindo seu aprendizado
          </h3>
          <Testimonials />
        </Col>
        <Col lg={10}>
          <img
            src="/persons.png"
            alt="foto pessoas"
            className="max-w-[564px] w-full mb-[72px]"
          />
          <Row
            align="middle"
            className="w-full bg-red-500 py-4  rounded-[32px] borda-gradient overflow-hidden gap-9"
          >
            <Infos amount="+ 1000" description="Nota média geral das aulas" />
            <Infos
              amount="4,8/5"
              description="Nota média geral das aulas"
              hasColor
            />
            <Infos amount="10k +" description="Comunidade" />
          </Row>
        </Col>
      </Row>
    </section>
  );
}
