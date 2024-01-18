import React from "react";
import { Row, Grid } from "antd";

import EllipticalGradient from "./EllipticalGradient";

type Props = {
  mb_card?: string;
  top_card?: boolean;
  middle_card?: boolean;
  bottom_card?: boolean;
  icon_path: string;
  content: string;
  ellipsePath: string;
};

const ICON_SIZES = {
  top: "21px",
  middle: "24px",
  bottom: "33px",
};

const WIDTH_CARD = {
  top: "272px",
  middle: "292px",
  bottom: "200px",
};

export default function CardHero({
  mb_card,
  top_card,
  middle_card,
  bottom_card,
  icon_path,
  content,
  ellipsePath,
}: Props) {

  const widthCard =
    WIDTH_CARD[top_card ? "top" : middle_card ? "middle" : "bottom"];
  const widthIcon =
    ICON_SIZES[top_card ? "top" : middle_card ? "middle" : "bottom"];

  const paddingCard = top_card ? "8px 13px" : middle_card ? "8px" : "8px 16px";
  const marginIcon = top_card ? "19px" : "1px";

  const iconStyle = {
    width: `${widthIcon}`,
  };

  const contentWithColor = content.replace(
    /\.py\b/g,
    (match) => `<span style="color: #00F0C9;">${match}</span>`
  );

  return (
    <div
      className="relative font-red-hat font-normal w-full "
      style={{ maxWidth: `${widthCard}` }}
    >
      <EllipticalGradient
        ellipsePath={ellipsePath}
        middle={middle_card}
        top={top_card}
      />
      <Row
        align="middle"
        className={`h-[64px] bg-greyC9 border border-solid rounded-2xl border-greyC7 gap-2 z-10`}
        style={{
          marginBottom: `${mb_card}`,
          marginLeft: `${middle_card ? "34px" : "0"}`,
          padding: `${paddingCard}`,
        }}
      >
        <div
          className="p-2 flex justify-center items-center rounded-lg border border-solid border-greyC7 bg-varosCBlack w-[51px] h-[46px] "
          style={{
            marginRight: `${marginIcon}`,
          }}
        >
          <img src={icon_path} alt="icone card" style={iconStyle} />
        </div>
        <span
          className="text-white text-base font-normal" 
          dangerouslySetInnerHTML={{ __html: contentWithColor }}
        />
      </Row>
    </div>
  );
}
