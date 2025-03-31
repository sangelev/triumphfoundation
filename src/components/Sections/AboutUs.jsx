import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function AboutUs() {
  return (
    <Wrapper id="aboutus">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">About Us</h1>
            <p className="font13">
              Career center triumph is a non-profit organization, aiming to
              improve the civic, social and economic state of the citizens of
              Republic of Macedonia, as well as to motivate, educate and enhance
              the skills and competences of all individuals interested in
              improving their work positions and careers.
              <br />
              The non-profit organization Career center -Triumph is founded as
              an Assembly of citizens for improving the social and professional
              status of the citizens CAREER TRIUMPH Skopje, on 1st of March
              2013.
              <br />
              As such organization, the Career center will be organizing various
              kinds of courses, training lectures and conferences.
              <br />
              The main goals of the Career center Triumph are:
              <br />
              Improving the social and educational status of the citizens
              <br />
              Informing the citizens about the opportunities for professional
              upgrade and employment opportunities offered in the world, and the
              possibility of the implementation of such opportunities in our
              country
              <br />
              Promoting healthy life style through various mental and physical
              activities.
              <br />
              Supporting business and individual entrepreneurs by giving them
              opportunity for their promotion through the activities in the
              organization (training preparation, promotions, workshops,
              conferences etc )
              <br />
              Organizing lectures, counseling, congresses, training, exhibits,
              conferences and other forms of non formal education and vocational
              improvement.
              <br />
              Giving opportunities to the employees in various sectors, from
              different vocations, for attending in-service trainings and other
              lessons in the EU countries.
              <br />
              Pledging for social integration of the citizens of all ages
              through making events for the entire population, from the youngest
              to the oldest.
            </p>
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
