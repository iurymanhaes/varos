"use client";
import { Col, Row } from "antd";
import React from "react";
import FormRegister from "./FormRegister";

export default function Register() {
  return (
    <section className="mb-32 w-full max-w-[1152px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1  md:text-left sm:text-center mb-[50px]">
          <h2 className="font-red-hat text-greyC1 md:text-[38px] sm:text-3xl font-bold leading-[45.6px] mb-2">
            Cadastre-se para receber{" "}
            <br className="lg:block md:hidden sm:hidden" />
            mais informações.
          </h2>
          <span className="font-red-hat text-greyC1 text-[18px] font-bold leading-[21.6px] ">
            Fique ligado no que tem de melhor no Mercado Financeiro.
          </span>
        </div>
        <div className="flex justify-center">
          <FormRegister />
        </div>
      </div>
    </section>
  );
}
