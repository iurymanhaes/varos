"use client";
import { Col, Row } from "antd";
import React from "react";
import FormRegister from "./FormRegister";

export default function Register() {
  return (
    <section className="mb-32 w-full">
      <Row align="top" className="w-full">
        <Col lg={10} className="mr-[100px]">
          {" "}
          {/**ajustar espaçamento entre as colunas mr-temporario */}
          <h2 className="font-red-hat text-greyC1 text-[38px] font-bold leading-[45.6px] mb-2">
            Cadastre-se para receber
            <br /> mais informações.
          </h2>
          <h3 className="font-red-hat text-greyC1 text-[18px] font-bold leading-[21.6px]">
            Fique ligado no que tem de melhor no
            <br /> Mercado Financeiro.
          </h3>
        </Col>
        <Col lg={12}>
          <FormRegister />
        </Col>
      </Row>
    </section>
  );
}
