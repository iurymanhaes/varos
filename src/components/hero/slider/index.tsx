"use client"
import React from "react";
import Slider from "react-slick";
import { Row } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderItem {
  type: "text" | "image";
  content: string | React.ReactNode;
}

const mock: SliderItem[] = [
  {
    type: "text",
    content: "visto em",
  },
  {
    type: "image",
    content: "/slider-image-1.svg",
  },
  {
    type: "image",
    content: "/slider-image-2.svg",
  },
  {
    type: "image",
    content: "/slider-image-3.svg",
  },
  {
    type: "image",
    content: "/slider-image-4.svg",
  },
  {
    type: "image",
    content: "/slider-image-5.svg",
  },
  {
    type: "image",
    content: "/slider-image-6.svg",
  },
];

const InfiniteSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
  };

  return (
    <Row>
      <Slider {...settings} className="h-[28px] overflow-hidden">
        {mock.map((el, index) => (
          <div key={index} className="flex items-center">
            {el.type === "text" ? (
              <span className="text-greyC5 text-xl font-normal ml-11">
              {el.content}
            </span>
            ) : (
              <img
                src={el.content as string}
                alt={`imagem ${index + 1}`}
                height="25px"
              />
            )}
          </div>
        ))}
      </Slider>
    </Row>
  );
};

export default InfiniteSlider;
