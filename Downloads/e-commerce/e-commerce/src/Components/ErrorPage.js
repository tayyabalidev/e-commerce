import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ErrorPage() {
  return (
    <>
      <div className="man_content error_content">
        <Header />
        <div className="container-fluid page-header py-5 mb-5">
          <h1 className="text-center text-white display-6">404 Error</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">404</li>
          </ol>
        </div>

        <div class="container-fluid py-5">
          <div class="container py-5 text-center">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <i class="fa fa-exclamation-triangle text-orange"></i>
                <h1 class="display-1">404</h1>
                <h1 class="mb-4">Page Not Found</h1>
                <p class="mb-4">
                  We’re sorry, the page you have looked for does not exist in
                  our website! Maybe go to our home page or try to use a search?
                </p>
                <a
                  class="btn border-orange rounded-pill py-3 px-5"
                  href="index.html"
                >
                  Go Back To Home
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ErrorPage;
