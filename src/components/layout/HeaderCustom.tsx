"use client";
import { Col, Layout, Menu, Row } from "antd";
import Image from "next/image";
const { Header } = Layout;

export default function HeaderCustom() {
  return (
    <Header className="bg-custom-primary-black h-16 text-primary-doc">
      <Row justify="space-between" className="container m-auto h-16">
        <Row align="middle">
          <Image
            src="/varos.svg"
            alt=""
            width="80"
            height="14"
            className="mr-10"
          />

          {/* Menu */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            className="h-16 bg-custom-primary-black gap-4"
          >
            <Menu.Item key="1">Produtos</Menu.Item>
            <Menu.Item key="2">Blog</Menu.Item>
            <Menu.Item key="3">Conteúdos</Menu.Item>
            <Menu.Item key="4">Quem Somos</Menu.Item>
          </Menu>
        </Row>

        <Row className="h-16 bg-custom-primary-black gap-4 items-center">
          <div className="flex items-center">
            <Image
              src="/shopping--cart.svg"
              alt=""
              width="25"
              height="25"
              className="mr-2"
            />
            <span>Assinar Agora</span>
          </div>
          <div className="flex items-center">
            <Image
              src="User.svg"
              alt=""
              width="25"
              height="25"
              className="mr-2"
            />
            <span>Entrar</span>
          </div>
        </Row>
      </Row>
    </Header>
  );
}
