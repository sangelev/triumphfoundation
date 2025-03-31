import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Why Lean?</h1>
            <p className="font13">
              Lean thinking and lean management is simply using a set of tools,
              that habitually turn into every day practice, to create more value
              for the customer, both internal and external, while reducing the
              waste of the process of creating the product or service for the
              customer. Lean was first used in Toyota Production System in
              1940s, so it is most commonly related to manufacturing processes.
              However, Lean thinking can be used in any industry and service! ​
              <br />
              With the implementation of the Lean principals and Lean tools,
              your organization will be capable to make massive progress.
              Continuous improvement will be applied internally, between
              employees and departments, small teams, governances structures;
              and externally by improving the relationship with your customers.
              ​
              <br />
              With creating a high level of quality, standardization, and
              reduction of the operating cost, your organization will be able to
              provide amazing customer service and to exceed the customer
              expectations. ​
              <br />
              All benefits of Lean will enable you to maximize efficiency and
              effectiveness. The greatest benefits: boost employee engagement,
              increase the market share, and improve your customer's feedback! ​
              <br />
              So, if you want to reduce wastes of delay, if you’re frustrated of
              interruptions and you want reliable, stable and predictable flow
              of operations…
              <br />
              DON’T WAIT, START NOW WITH LEAN IMPLEMENTATION
              <br />
              Learn more about our services and read the testimonials from our
              satisfied customers
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
