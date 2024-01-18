import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Col, Form, Button, message, Spin } from "antd";
import { formattedTell } from "@/utils/functions/phone-mask";

export default function FormRegister() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();

      const response = await fetch(`http://localhost:3000/api/form`, {
        method: "POST",
        //@ts-ignore
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }
      message.success("Formulário enviado com sucesso");
      form.resetFields();
      setLoading(false);
    } catch (errorInfo) {
      message.error("Erro ao validar ou enviar o formulário");
    } finally {
      setLoading(false);
    }

    
  };

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

  const rules = {
    name: [
      {
        required: true,
        message: "Por favor, insira seu nome!",
      },
      {
        min: 3,
        message: "O nome deve ter pelo menos 3 caracteres!",
      },
    ],
    email: [
      {
        required: true,
        message: "Por favor, insira seu email!",
      },
      {
        min: 3,
        message: "O nome deve ter pelo menos 3 caracteres!",
      },
    ],
    cellphone: [
      {
        required: true,
        message: "Por favor, insira seu número de telefone!",
      },
    ],
  };

  return (
    <div className="max-w-[564px] w-full py-[60px] px-[53px] border rounded-[32px] bg-greyC9 border-greyC7">
      <Form className="flex flex-col gap-6" form={form} onFinish={onFinish}>
        <Col lg={24} className="max-h-12">
          <Form.Item name="name" rules={rules.name}>
            <input
              type="text"
              placeholder="Nome"
              className="placeholder-greyC6 bg-greyC8 border border-greyC7  text-greyC6 px-[13px] py-[19px] rounded-[4px] w-full h-[48px] text-[18px] font-red-hat font-normal"
            />
          </Form.Item>
        </Col>
        <Col lg={24} className="max-h-12">
          <Form.Item name="email" rules={rules.email}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="placeholder-greyC6 bg-greyC8 border border-greyC7  text-greyC6 px-[13px] py-[19px] rounded-[4px] w-full h-[48px] text-[18px] font-red-hat font-normal"
            />
          </Form.Item>
        </Col>
        <Col lg={24} className="max-h-12">
          <Form.Item name="cellphone" rules={rules.cellphone}>
            <input
              type="tel"
              maxLength={15}
              onChange={(e) => {
                form.setFieldsValue({
                  cellphone: formattedTell(e),
                });
              }}
              placeholder="Celular"
              className="placeholder-greyC6 bg-greyC8 border border-greyC7  text-greyC6 px-[13px] py-[19px] rounded-[4px] w-full h-[48px] text-[18px] font-red-hat font-normal"
            />
          </Form.Item>
        </Col>
        <Col lg={24} className="max-h-12">
          <Form.Item>
            <Button
              style={customButton}
              className="w-full h-[43px] flex items-center font-red-hat"
              htmlType="submit"
            >
              QUERO ME INSCREVER
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </div>
  );
}

