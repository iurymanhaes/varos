"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import ListItem from "./dropdown/ListItem";

interface MenuItem {
  title: string;
  content: string;
  icon: string;
}

export default function Contents() {
  const [active, setActive] = useState<any>({
    carteiras: true,
    cursos: false,
    consultoria: false,
  });

  const [service, setService] = useState(1);
  const [selectedTab, setSelectedTab] = useState<MenuItem | null>(null);

  useEffect(() => {
    const initialTab = carteirasItems[0];
    setSelectedTab(initialTab);

    const initialService = carteirasItems.findIndex(
      (item) => item === initialTab
    );

    setService(initialService);
  }, []);

  const onTabClick = (item: MenuItem, index: number) => {
    setService(index);
    setSelectedTab(item);

    console.log(service);
    console.log(selectedTab);
  };

  const carteirasItems: MenuItem[] = [
    {
      title: "Carteira Seleção",
      content: "<span>Conteudo</span>",
      icon: "/selecao-icon.svg",
    },
    {
      title: "Carteira FATOR",
      content: "<span>Conteudo</span>",
      icon: "/FATOR.svg",
    },
    {
      title: "Carteira Dividendos",
      content: "<span>Conteudo</span>",
      icon: "/Dividendos.svg",
    },
    {
      title: "Carteira Seleção",
      content: "<span>Conteudo</span>",
      icon: "/selecao-icon.svg",
    },
  ];
  const cursosItems: MenuItem[] = [
    {
      title: "Valuation 2.0",
      content: "<span>Conteudo</span>",
      icon: "/vza-icon.svg",
    },
    {
      title: "Código.py",
      content: "<span>Conteudo</span>",
      icon: "/CODIGO.svg",
    },
    {
      title: "Dash.py",
      content: "<span>Conteudo</span>",
      icon: "/dash-icon.svg",
    },
    {
      title: "Carteira Essencial",
      content: "<span>Conteudo</span>",
      icon: "/essencial-icon.svg",
    },
    {
      title: "Curso Reels",
      content: "<span>Conteudo</span>",
      icon: "/minicurso-icon.svg",
    },
    {
      title: "Enciclopédia de FII",
      content: "<span>Conteudo</span>",
      icon: "/enciclopedia-icon.svg",
    },
  ];
  const consultoriaItems: MenuItem[] = [
    {
      title: "Consultoria VAROS",
      content: "<span>Conteudo</span>",
      icon: "/vza-icon.svg",
    },
  ];

  const items = [
    { name: "carteiras", tab: carteirasItems },
    { name: "cursos", tab: cursosItems },
    { name: "consultoria", tab: consultoriaItems },
  ];

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const button = event.currentTarget as HTMLButtonElement;

    const item: MenuItem[] = items.filter(
      (item) => item.name === button.name
    )[0].tab;
    setSelectedTab(item[0]);
    setService(0);

    for (let field in active) {
      if (field !== button.name) active[field] = false;
    }

    setActive({
      ...active,
      [button.name]: !active[button.name],
    });
  };
  return (
    <section className="w-full flex xl:mb-[192px] lg:mb-[192px] md:mb-[245px] sm:mb-[82px]">
      <div className="w-full">
        <Col className="xl:text-left lg:text-left md:text-left sm:text-center sm:w-full">
          <h2 className="text-greyC1 xl:text-[38px] lg:text-[38px] md:text-[38px] sm:text-2xl font-bold leading-[45.6px] mb-4 font-red-hat">
            Simplifique seus investimentos e <br /> alcance seus objetivos
          </h2>
          <span className="text-greyC5 text-[18px] font-medium leading-[21.6px] font-red-hat">
            Conteúdos preparados para trazer mais segurança, <br />
            independente do seu nível.
          </span>
        </Col>
        <div className="flex sm:flex-wrap w-full  xl:justify-between lg:justify-between md:justify-between sm:justify-center gap-4">
          <div className="font-red-hat mt-10 flex flex-col gap-4 xl:max-w-[270px] lg:max-w-[270px] md:max-w-[270px] sm:w-full ">
            {items.map((el, i) => (
              <div
                key={i}
                className={`font-red-hat w-full ${i > 0 ? "mt-4" : ""}`}
              >
                <button
                  name={el.name}
                  className={`font-bold xl:max-w-[270px] lg:max-w-[270px] md:max-w-[270px] sm:w-full py-4 px-8 rounded-[40px] flex items-center justify-center gap-[10px] border border-greyC8 ${
                    active[el.name] ? "bg-greyC8" : "bg-greyC9"
                  }`}
                  onClick={handleClick}
                >
                  <span className="text-[18px] text-greyC1 font-bold tracking-[1.8px] pointer-events-none">
                    {`${el.name
                      .substring(0, 1)
                      .toUpperCase()}${el.name.substring(1)}`}
                  </span>
                  <span className="pointer-events-none">
                    {active[el.name] ? (
                      <img
                        src="/caret--down.svg"
                        width="17px"
                        alt="Ícone Ativo"
                      />
                    ) : (
                      <img
                        src="/caret--right.svg"
                        width="17px"
                        alt="Ícone Inativo"
                      />
                    )}
                  </span>
                </button>
                {active[el.name] && (
                  <div className="mt-4 bg-greyC9 border border-greyC8 xl:max-w-[270px] lg:max-w-[270px] md:max-w-[270px] sm:w-full rounded-[32px]">
                    <ul className="flex flex-col gap-[22px] p-8 ">
                      {el.tab.map((item, index) => (
                        <ListItem
                          item={item}
                          index={index}
                          selected={index === service}
                          onTabClick={() => onTabClick(item, index)}
                          key={index}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          {selectedTab && (
            <div className="xl:max-w-[662px] lg:max-w-[560px] md:max-w-[500px] w-full
            mt-10 md:pb-0 md:pr-0 xl:pt-[29px] lg:pt-[29px] md:pl-[41px] sm:px-4 sm:py-4  
            gap-4 bg-greyC9 rounded-[32px] border border-greyC8 relative z-1  h-max"
            >
              <div>
                <div className="flex items-center mb-6 gap-4">
                  <img src={selectedTab.icon} alt="icone seleção" />
                  <span className="text-greyC1 text-sm font-semibold font-red-hat">
                    {selectedTab.title}
                  </span>
                </div>
                <h2 className="text-greyC1 xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-semibold xl:leading-[28.8px] lg:leanding-[28.8px] md:leading-[28.8px] sm:leading-[24px] -tracking-tight mb-4 font-red-hat">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit,
                </h2>
                <p className="text-greyC3 text-[16px] font-normal leading-[19.2px] -tracking-tight mb-[15px] font-red-hat">
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit, sed do eiusmod
                  <br /> tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim
                </p>
                <div className="z-10 md:rounded-bl-none md:rounded-tr-none md:rounded-tl-[32px] md:rounded-br-[32px] sm:rounded-[32px] overflow-hidden">
                  <img
                    src="/map.png"
                    alt=""
                    className="w-full h-full 
                    xl:max-w-[621px] lg:max-w-[621px] md:max-w-[621px] sm:max-w-full xl:h-[300px] lg:h-[300px] md:h-[300px] l sm:h-[292px]
                    object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 -z-10 xl:block md:block sm:hidden">
                <img
                  src="/map-ellipse.svg"
                  alt=""
                  className="transform xl:translate-x-[20%]  md:translate-x-[0%] sm:translate-y-[20%]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
