import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("");

  function goToContact() {
    navigate("/contact");
  }

  function goToShop() {
    navigate("/shop");
  }

  function goToHome() {
    navigate("/");
  }

  function goToShopDetails() {
    navigate("/shopdetails");
  }

  function goToCart() {
    navigate("/cart");
  }

  function goToCheckOut() {
    navigate("/checkout");
  }

  function goToTestimonial() {
    navigate("/testimonial");
  }

  function goToError() {
    navigate("/errorpage");
  }

  return (
    <div className="header">
      <div className="container">
        <div className="sub_header d-flex">
          <div className="sub_header_left d-flex align-items-center me-3">
            <i
              className="fa fa-map-marker text-secondry"
              aria-hidden="true"
            ></i>
            <p>123 Street, New York</p>
          </div>
          <div className="sub_header_left d-flex align-items-center">
            <i className="fa fa-envelope text-secondry" aria-hidden="true"></i>
            <p>Email@Example.com</p>
          </div>
          <div className="sub_header_right ms-auto">
            <a className="ms-2" href="#">
              Privacy Policy
            </a>
            <span>/</span>
            <a className="ms-2" href="#">
              Terms of Use
            </a>
            <span>/</span>
            <a className="ms-2" href="#">
              Sales and Refunds
            </a>
          </div>
        </div>
        <nav class="first_navbar navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            Fruitables
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={goToHome}>
                  Home
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={goToShop}>
                  Shop
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={goToShopDetails}>
                  Shop Detail
                </a>
              </li>
              <li class="nav-item active pages_drop">
                <a class="nav-link" href="#">
                  Pages
                </a>
                <div className="pages_menu">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" onClick={goToCart}>
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={goToCheckOut}>
                        Check Out
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={goToTestimonial}>
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={goToError}>
                        404 Page
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={goToContact}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="main_cart">
              <a href="#" className="me-3">
                <i className="fa fa-search"></i>
              </a>
              <a href="#" className="me-3">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fa fa-user"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
