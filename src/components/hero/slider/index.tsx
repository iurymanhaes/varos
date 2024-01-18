"use client";
import React from "react";
import Slider from "react-slick";
import { Row } from "antd";

interface SliderItem {
  type: "text" | "image";
  content: string | React.ReactNode;
}

const mock: SliderItem[] = [
  {
    type: "text",
    content: "visto em ",
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
    speed: 4000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Row className="slide-hero">
      <Slider {...settings} pauseOnFocus touchMove className="h-[28px] w-full">
        {mock.map((el, index) => (
          <div key={index} className="flex items-center text-center">
            {el.type === "text" ? (
              <span className="text-greyC5 text-xl font-normal text-nowrap">
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
