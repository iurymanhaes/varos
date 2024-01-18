"use client";
import React, { useEffect, useRef } from "react";

export default function Testmonials() {
  const items = [
    {
      src: "/quotes.svg",
      message:
        "Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.",
      author: "Assinante VAROS 1",
    },
    {
      src: "/quotes.svg",
      message:
        "Eu acompanho vários gestores de fundo e educadores financeiros. Tu de longe és um dos que mais contribui para minha construção de conhecimento. A forma que colocas coisas que outras pessoas fazem parecer complexas de uma forma super simples e ginal. Parabéns! E continue.",
      author: "Assinante VAROS 2",
    },
    {
      src: "/quotes.svg",
      message:
        "Nunca vi algo tão completo que nem o de vocês. E olha que esses 11 anos que tô no MF já assinei muita casa de análise. Nada chega perto do trabalho seu e da sua equipe.",
      author: "Assinante VAROS 3",
    },
  ];

  const intervalRef = useRef<number | null>(null);

  const transitionSlides = () => {
    document.querySelector(".active")?.classList.add("prev");
    document.querySelector(".active")?.classList.remove("active");

    document.querySelector(".next")?.classList.add("active");
    document.querySelector(".next")?.classList.remove("next");

    document.querySelector(".hide")?.classList.add("next");
    document.querySelector(".hide")?.classList.remove("hide");

    document.querySelector(".prev")?.classList.add("hide");
    document.querySelector(".prev")?.classList.remove("prev");
  };

  useEffect(() => {
    
    //@ts-ignore
    intervalRef.current = setInterval(transitionSlides, 3000); 

    
    return () => {
      //@ts-ignore
      clearInterval(intervalRef?.current);
    };
  }, []);

  return (
    <div className="w-full sm:h-[358px] relative overflow-hidden">
      {items.map((item, index) => (
        <div
          className={`slide-general ${
            index == 0 ? "active" : index == 1 ? "next" : "hide"
          } max-w-[368px] md:max-w-[415px] sm:max-w-[358px] border border-solid border-greyC8 bg-greyC9 rounded-2xl w-full pl-[25px] pt-6 pb-[39px] pr-8 sm:p-6 gap-[12px] xl:h-[345px] lg:h-[345px] sm:h-[358px]`}
          key={`testmonial-${index}`}
        >
          <div className="grid grid-cols-[min-content_1fr] pointer-events-none my-auto mx-0 h-full place-content-center">
            <div className="lg:col-span-1 sm:col-span-full w-10">
              <img
                src={item.src}
                alt="aspas"
                width="21px"
                height="23px"
                className="mb-2"
              />
            </div>
            <div className="mt-[9px] w-full lg:col-span-1 sm:col-span-full h-full">
              <h2 className="text-[18px] font-medium leading-[21.6px] text-greyC5 mb-[22px] font-red-hat w-full max-w-[276px] tracking-[1px]">
                {item.message}
              </h2>
              <span className="text-[18px] font-medium leading-[21.6px] text-greyC1 italic">
                {item.author}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
