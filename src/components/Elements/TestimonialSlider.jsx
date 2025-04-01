import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "./TestimonialBox";
import img1 from "../../assets/img/logo verzija jpeg.jpg";
import img2 from "../../assets/img/header-img.png";
import img3 from "../../assets/img/contact-1.png";
import img4 from "../../assets/img/contact-2.png";
import img5 from "../../assets/img/contact-3.png";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    transition: "slide",
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox imgCycle={img1} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox imgCycle={img2} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox imgCycle={img3} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox imgCycle={img4} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox imgCycle={img5} />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
