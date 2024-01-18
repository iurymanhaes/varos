"use client";
import { Col, Drawer, Grid, Layout, Menu, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import CollapseMobille from "./collapse-mobile";

const { Header } = Layout;

export default function HeaderCustom() {
  const { xl, lg, md, sm } = Grid.useBreakpoint();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Header className="bg-custom-primary-black h-16 text-primary-doc">
      {(xl || lg) && (
        <Row justify="space-between" className="m-auto h-16">
          <Row align="middle">
            <Image
              src="/varos.svg"
              alt=""
              width="80"
              height="14"
              className="mr-10"
            />
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
      )}

      {!xl && !lg && (
        <Row justify="space-between" align="middle" className="m-auto h-16">
          <Image
            src="/varos.svg"
            alt="logo"
            width="80"
            height="14"
            className="mr-10"
          />
          <MenuOutlined className="text-white" onClick={toggleMobileMenu} />
        </Row>
      )}

      {
        
        showMobileMenu && (
          <Drawer
            placement="left"
            onClose={toggleMobileMenu}
            open={showMobileMenu}
            className="location-drawer font-red-hat"
            style={{
              backgroundColor: "rgba(19, 19, 19, 1)",
            }}
            closeIcon={
              <img src="/close.svg" width="24" height="24" className="mr-0" />
            }
          >
            <Image
              src="/varos.svg"
              alt=""
              width="101"
              height="18"
              className="mr-10 absolute top-[40px]"
            />

            <nav className="nav-mobile-custom">
              <div className="p-6">
                <button className="w-full h-11 h- flex justify-center items-center rounded border border-varosDoc text-varosDoc text-[18px] font-medium leading-[24.3px] tracking-[1.62px] mb-[17px] mt-[54px]">
                  <Image
                    src="User.svg"
                    alt=""
                    width="25"
                    height="25"
                    className="mr-2"
                  />
                  ENTRAR
                </button>
                <button className="w-full h-11 h- flex justify-center items-center rounded bg-varosFLGreen border border-varosDoc text-varosCBlack text-[18px] font-medium leading-[24.3px] tracking-[1.62px] mb-10">
                  ASSINAR AGORA
                </button>
              </div>
              <CollapseMobille title="Produtos" />
              <CollapseMobille title="Blog" />
              <CollapseMobille title="Quem somos" />
              <CollapseMobille title="Conteúdos" />
            </nav>
          </Drawer>
        )
      }
    </Header>
  );
}
