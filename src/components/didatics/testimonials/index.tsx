import { Col, Row } from "antd";
import React from "react";

export default function Testimonials() {
  return (
    <Row
      align="top"
      justify="start"
      className="w-full max-w-[368px] border border-solid border-greyC8 bg-greyC9 rounded-2xl pl-[25px] pt-6 pb-[39px] gap-[12px]"
    >
      <Col lg={1}>
        <img
          src="/quotes.svg"
          alt="aspas"
          width="21px"
          height="23px"
          className="mb-2"
        />
      </Col>
      <Col lg={18} className="mt-[9px] w-full">
        <h2 className="text-[18px] font-medium leading-[21.6px] text-greyC5 mb-[22px] font-red-hat text-balance ">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível. Conteúdos preparados para trazer mais segurança, independente
          do seu nível.Conteúdos preparados para trazer mais segurança,
          independente do seu nível.
        </h2>
        <span className="text-[18px] font-medium leading-[21.6px] text-greyC1 italic">
          Assinante VAROS
        </span>
      </Col>
    </Row>
  );
}
