import React from "react";
import Image from "next/image";
import { Row } from "antd";

type Props = {
  //   src: string;
  //   width: string;
  //   img_width: number;
  //   img_height: number;
  content: string;
  mb_card?: string;
  ml_card?: boolean;
};

export default function CardHero({ mb_card, ml_card, content }: Props) {
  console.log("card", mb_card);
  return (
    <Row
      align="middle"
      className={`p-2 ${mb_card && `mb-[${mb_card}]`} ${
        ml_card && "ml-8"
      } max-w-[270px] h-[62px] bg-greyC9 border border-solid rounded-2xl border-greyC7 gap-2`}
    >
      <div className="p-3 flex justify-center items-center rounded-lg border border-solid border-greyC7 bg-varosCBlack">
        <Image src="/FATOR.svg" alt="icone card" width="21" height="21" />
      </div>
      <span className="text-white text-base font-normal leading-normal tracking-wider">
        {content}
      </span>
    </Row>
  );
}
