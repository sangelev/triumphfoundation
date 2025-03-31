import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "./TestimonialBox";

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
          <TestimonialBox
            text="“I have been a client for almost a year now, and I have to say the personal coaching I receive has been a game-changer! I not only received great training on how to apply improvement tools to problems I specifically asked, but they also helped me improve my leadership skills and change management skills, to bring real change in the company I work for!”"
            author="Fabrice Arbaudie Wirquin Group"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="The tools and concepts that Lean Global Consulting is sharing, are what every company needs to improve the quality of their product!”"
            author="Damian Rayes BMW Group"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="“I am so grateful for the help I received from Lean Global Consulting. They take the time to understand the problem, bring new perspective and questions, help get the entire team on board with the changes and then ensure there is a control plan in place!”"
            author="Ivana Stojanoska Philip Morris International"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="“Great service, great communication with the consultant!
They help you get to the root cause of the problems and then strategically improve your process.
Great experience!”"
            author="Sasho Dimitrievski Lear Corporation"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="“I had a problem I couldn’t solve at my company for a while and decided to try the coaching service. My coach did not only help me resolve that issue, it improved the way I looked at problems in the future!”"
            author="Tomi Madjar Tau-Ceti"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="“Such an easy-going communication and fast response, it is an amazing organization! I feel that I can always rely on them for any question I have in my company or in my leadership”"
            author="Didem Demirkilinc Sprint"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="“I was worried that learning these tools or implementing them will be just another thing I need to do, on top of everything else I do at work! On the contrary! Implementing these tools streamlined the entire process and workday for us, saving time, achieving goals, saving costs!”"
            author="Jasna Duganova Seavus"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="“Lean Global Consulting helped me get my company to the next level, by successfully coaching my employees on Lean tools and implementing these throughout the company!”"
            author="Vangel Sekovski Masac Solutions"
          />
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
