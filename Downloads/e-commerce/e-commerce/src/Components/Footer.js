import React from "react";

function Footer() {
  return (
    <>
      <div className="footer__content">
        <div className="container">
          <div className="contact__footer pb-4 mb-4">
            <div className="row g-4">
              <div class="col-lg-3">
                <a href="#">
                  <h1 class="text-primary mb-0">Fruitables</h1>
                  <p class="text-secondary mb-0">Fresh products</p>
                </a>
              </div>
              <div class="col-lg-6">
                <div class="position-relative mx-auto">
                  <input
                    class="form-control border-0 w-100 py-3 px-4 rounded-pill"
                    type="text"
                    placeholder="Your Email"
                  />
                  <button
                    type="text"
                    class="btn btn_subscribe border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="d-flex justify-content-end pt-3">
                  <a
                    class="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    class="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    class="btn btn-outline-secondary btn-md-square rounded-circle"
                    href=""
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div class="col-lg-3 col-md-6">
              <div class="footer-item">
                <h4 class="text-light mb-3">Why People Like us!</h4>
                <p class="mb-4">
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the like Aldus PageMaker
                  including of Lorem Ipsum.
                </p>
                <a
                  href=""
                  class="btn read_more border-secondary py-2 px-4 rounded-pill text-primary"
                >
                  Read More
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="d-flex flex-column text-start footer-item">
                <h4 class="text-light mb-3">Shop Info</h4>
                <a class="btn-link" href="">
                  About Us
                </a>
                <a class="btn-link" href="">
                  Contact Us
                </a>
                <a class="btn-link" href="">
                  Privacy Policy
                </a>
                <a class="btn-link" href="">
                  Terms &amp; Condition
                </a>
                <a class="btn-link" href="">
                  Return Policy
                </a>
                <a class="btn-link" href="">
                  FAQs &amp; Help
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="d-flex flex-column text-start footer-item">
                <h4 class="text-light mb-3">Account</h4>
                <a class="btn-link" href="">
                  My Account
                </a>
                <a class="btn-link" href="">
                  Shop details
                </a>
                <a class="btn-link" href="">
                  Shopping Cart
                </a>
                <a class="btn-link" href="">
                  Wishlist
                </a>
                <a class="btn-link" href="">
                  Order History
                </a>
                <a class="btn-link" href="">
                  International Orders
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-item">
                <h4 class="text-light mb-3">Contact</h4>
                <p>Address: 1429 Netus Rd, NY 48247</p>
                <p>Email: Example@gmail.com</p>
                <p>Phone: +0123 4567 8910</p>
                <p>Payment Accepted</p>
                <img src="img/payment.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
