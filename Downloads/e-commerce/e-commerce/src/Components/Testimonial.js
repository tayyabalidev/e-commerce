import React from "react";
import Header from "../Components/Header";
import ClientCarousel from "../Components/ClientCarousel";
import Footer from "./Footer";

function Testimonial() {
  return (
    <>
      <div className="main_content testimonial_content">
        <Header />
        <div className="container-fluid page-header py-5 mb-5">
          <h1 className="text-center text-white display-6">Testimonial</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Testimonial</li>
          </ol>
        </div>
        <ClientCarousel />
        <Footer />
      </div>
    </>
  );
}

export default Testimonial;
