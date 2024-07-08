import React from "react";
import Header from "./Header";
import Featureone from "../imags/featur-1.jpg";
import Featuretwo from "../imags/featur-2.jpg";
import Featurethree from "../imags/featur-3.jpg";
import fruitebannerone from "../imags/banner-fruits.jpg";

import grapes from "../imags/grapes.jpg";
import banana from "../imags/banana.jpg";
import orange from "../imags/orange.jpg";
import fruietwo from "../imags/fruite-item-2.jpg";
import fruiefour from "../imags/fruite-item-4.jpg";
import Footer from "./Footer";

function Shop() {
  return (
    <>
      <div className="main_content shop__contet">
        <Header />
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Shop</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Shop</li>
          </ol>
        </div>

        <div className="container-fluid fruite py-5">
          <div className="container py-5">
            <h1 className="mb-4">Fresh fruits shop</h1>
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-xl-3">
                    <div className="input-group w-100 mx-auto d-flex">
                      <input
                        type="search"
                        className="form-control p-3"
                        placeholder="keywords"
                        aria-describedby="search-icon-1"
                      />
                      <span id="search-icon-1" className="input-group-text p-3">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-xl-3">
                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                      <label for="fruits">Default Sorting:</label>
                      <select
                        id="fruits"
                        name="fruitlist"
                        className="border-0 form-select-sm bg-light me-3"
                        form="fruitform"
                      >
                        <option value="volvo">Nothing</option>
                        <option value="saab">Popularity</option>
                        <option value="opel">Organic</option>
                        <option value="audi">Fantastic</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Categories</h4>
                          <ul className="list-unstyled fruite-categorie">
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  Apples
                                </a>
                                <span className="text-dark">(3)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  Oranges
                                </a>
                                <span className="text-dark">(5)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  Strawbery
                                </a>
                                <span className="text-dark">(2)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  Banana
                                </a>
                                <span className="text-dark">(8)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  Pumpkin
                                </a>
                                <span className="text-dark">(5)</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4 className="mb-2">Price</h4>
                          <input
                            type="range"
                            className="form-range w-100"
                            id="rangeInput"
                            name="rangeInput"
                            min="0"
                            max="500"
                            value="0"
                            oninput="amount.value=rangeInput.value"
                          />
                          <output
                            id="amount"
                            name="amount"
                            min-velue="0"
                            max-value="500"
                            for="rangeInput"
                          >
                            0
                          </output>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Additional</h4>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-1"
                              name="Categories-1"
                              value="Beverages"
                            />
                            <label for="Categories-1" className=" text-dark">
                              Organic
                            </label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-2"
                              name="Categories-1"
                              value="Beverages"
                            />
                            <label for="Categories-2" className=" text-dark">
                              Fresh
                            </label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-3"
                              name="Categories-1"
                              value="Beverages"
                            />
                            <label for="Categories-3" className=" text-dark">
                              Sales
                            </label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-4"
                              name="Categories-1"
                              value="Beverages"
                            />
                            <label for="Categories-4" className=" text-dark">
                              Discount
                            </label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-5"
                              name="Categories-1"
                              value="Beverages"
                            />
                            <label for="Categories-5" className=" text-dark">
                              Expired
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h4 className="mb-3">Featured products</h4>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: "100px", height: "100px" }}
                          >
                            <img
                              src={Featureone}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2"></h6>
                            <div class="d-flex my-3 response_center">
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                4.11 $
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: "100px", height: "100px" }}
                          >
                            <img
                              src={Featuretwo}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div class="d-flex my-3 response_center">
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                4.11 $
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: "100px", height: "100px" }}
                          >
                            <img
                              src={Featurethree}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div class="d-flex my-3 response_center">
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">
                                4.11 $
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4">
                          <a
                            href="#"
                            className="btn border-orange px-4 py-3 rounded-pill text-green w-100"
                          >
                            Vew More
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="position-relative">
                          <img
                            src={fruitebannerone}
                            className="img-fluid w-100 rounded"
                            alt=""
                          />
                          <div
                            className="position-absolute"
                            style={{
                              top: "50%",
                              right: "10px",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <h3 className="text-secondary fw-bold text-orange">
                              Fresh <br /> Fruits <br /> Banner
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row g-4 justify-content-center">
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={grapes}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={grapes}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={fruietwo}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={fruiefour}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Apricots</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={banana}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Banana</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={orange}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Oranges</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={fruietwo}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={grapes}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative card_tab fruite-item">
                          <div className="fruite-img">
                            <div className="image-container">
                              <img
                                src={orange}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute bg-orange"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border-orange border-top-0 rounded-bottom">
                            <h4>Oranges</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border-orange rounded-pill px-3 text-green"
                              >
                                <i className="fa fa-shopping-bag me-2 text-green"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Shop;
