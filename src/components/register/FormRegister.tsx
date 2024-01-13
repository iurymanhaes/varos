import { Col, Form, Button } from "antd";
import React from "react";

export default function FormRegister() {
  const customButton = {
    background: "#19C819",
    borderRadius: "4px",
    border: "1px solid #FAFAFA",
    color: "#131313",
    height: "48px",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "21.6px",
    letterSpacing: "1.62px",
  };
  return (
    <div className="max-w-[564px] w-full py-[60px] px-[53px] border rounded-[32px] bg-greyC9 border-greyC7">
      <Form className="flex flex-col gap-6">
        <Col lg={24} className="max-h-12">
          <Form.Item>
            <input
              type="text"
              placeholder="Nome"
              className="placeholder-greyC6 bg-greyC8 border border-greyC7  text-greyC6 px-[13px] py-[19px] rounded-[4px] w-full h-[48px] text-[18px] font-red-hat font-normal"
            />
          </Form.Item>
        </Col>
        <Col lg={24} className="max-h-12">
          <Form.Item>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="placeholder-greyC6 bg-greyC8 border border-greyC7  text-greyC6 px-[13px] py-[19px] rounded-[4px] w-full h-[48px] text-[18px] font-red-hat font-normal"
            />
          </Form.Item>
        </Col>
        <Col lg={24} className="max-h-12">
          <Form.Item>
            <input
              placeholder="Celular"
              className="placeholder-greyC6 bg-greyC8 border border-greyC7  text-greyC6 px-[13px] py-[19px] rounded-[4px] w-full h-[48px] text-[18px] font-red-hat font-normal"
            />
          </Form.Item>
        </Col>
        <Col lg={24} className="max-h-12">
          <Form.Item>
            <Button style={customButton} className="w-full h-[43px] bg-red-500">
              QUERO ME INSCREVER
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </div>
  );
}

/**
 *  const customButton = {
    background: "#19C819",
    borderRadius: "4px",
    border: "1px solid #FAFAFA",
    color: " #131313",
    padding: "10px 16px ",
    height: "43px",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "21.6px",
    letterSpacing: "1.62px",
  };
 */
