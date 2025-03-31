import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import AboutUs from "../components/Sections/AboutUs";
// import WhyLean from "../components/Sections/WhyLean";
import Testimonials from "../components/Sections/Testimonials";

// Home

// About
// Why Lean?
// Services
// Testimonials

// Contact

export default function Landing() {
  return (
    <>
      <Header />
      <TopNavbar />
      {/* <About /> */}
      <AboutUs />
      {/* <WhyLean /> */}
      <Blog />
      <Services />
      {/* <Projects /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
