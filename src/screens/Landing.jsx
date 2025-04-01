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
import { Document, Page } from "react-pdf";
// import ReactPDF from "../components/ReactPDF";
import englishPdf from "./../welcome_to_triumph.pdf"; // Import your PDF file
import { PDFViewer } from "@react-pdf/renderer";

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
      {/* <Blog /> */}
      {/* <Services /> */}
      {/* <Projects /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <ReactPDF
        file={{
          url: "http://www.example.com/sample.pdf",
        }}
      /> */}
      {/* <embed src="/src/welcome_to_triumph.pdf" width="800px" height="2100px" /> */}
      {/* {
        <PDFViewer width="800px" height="2100px">
          <Document file={englishPdf}>{}</Document>
        </PDFViewer>
      } */}
      <Contact />
      <Footer />
    </>
  );
}
