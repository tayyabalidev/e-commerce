import React from "react";
import Header from "../Components/Header";
import singleitemimg from "../imags/single-item.jpg";
import Featureone from "../imags/featur-1.jpg";
import Featuretwo from "../imags/featur-2.jpg";
import Featurethree from "../imags/featur-3.jpg";
import fruitebannerone from "../imags/banner-fruits.jpg";
import avatar from "../imags/avatar.jpg";
import Carousel from "../Components/Carousel";
import Footer from "./Footer";

function ShopDetails() {
  return (
    <>
      <div className="main_content shop__details__content">
        <Header />
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Shop Detail</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Shop Detail</li>
          </ol>
        </div>

        <div className="container-fluid py-5 mt-5">
          <div className="container py-5">
            <div className="row g-4 mb-5">
              <div className="col-lg-8 col-xl-9">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="border rounded">
                      <a href="#">
                        <img
                          src={singleitemimg}
                          className="img-fluid rounded"
                          alt="Image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h4 className="fw-bold mb-3">Brocoli</h4>
                    <p className="mb-3">Category: Vegetables</p>
                    <h5 className="fw-bold mb-3">3,35 $</h5>
                    <div class="d-flex my-3 response_center">
                      <i class="fa fa-star fill-star"></i>
                      <i class="fa fa-star fill-star"></i>
                      <i class="fa fa-star fill-star"></i>
                      <i class="fa fa-star fill-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <p className="mb-4 text-dark">
                      The generated Lorem Ipsum is therefore always free from
                      repetition injected humour, or non-characteristic words
                      etc.
                    </p>
                    <p className="mb-4">
                      Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                      peacock flounder; chain pickerel hatchetfish, pencilfish
                      snailfish
                    </p>
                    <div
                      className="input-group quantity mb-5"
                      style={{ width: 100 }}
                    >
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm text-center border-0"
                        defaultValue={1}
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn border text-green rounded-pill px-4 py-2 mb-4"
                    >
                      <i className="fa fa-shopping-bag me-2" /> Add to cart
                    </a>
                  </div>
                  <div className="col-lg-12">
                    <nav>
                      <div className="nav nav-tabs mb-3">
                        <button
                          className="nav-link active border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-about-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-about"
                          aria-controls="nav-about"
                          aria-selected="true"
                        >
                          Description
                        </button>
                        <button
                          className="nav-link border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-mission-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-mission"
                          aria-controls="nav-mission"
                          aria-selected="false"
                        >
                          Reviews
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content mb-5">
                      <div
                        className="tab-pane active"
                        id="nav-about"
                        role="tabpanel"
                        aria-labelledby="nav-about-tab"
                      >
                        <p className="text-dark">
                          The generated Lorem Ipsum is therefore always free
                          from repetition injected humour, or non-characteristic
                          words etc. Susp endisse ultricies nisi vel quam
                          suscipit
                        </p>
                        <p>
                          Sabertooth peacock flounder; chain pickerel
                          hatchetfish, pencilfish snailfish filefish Antarctic
                          icefish goldeye aholehole trumpetfish pilot fish
                          airbreathing catfish, electric ray sweeper.
                        </p>
                        <div className="px-2">
                          <div className="row g-4">
                            <div className="col-6">
                              <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Weight</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">1 kg</p>
                                </div>
                              </div>
                              <div className="row text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Country of Origin</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">Agro Farm</p>
                                </div>
                              </div>
                              <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Quality</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">Organic</p>
                                </div>
                              </div>
                              <div className="row text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Сheck</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">Healthy</p>
                                </div>
                              </div>
                              <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Min Weight</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">250 Kg</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="nav-mission"
                        role="tabpanel"
                        aria-labelledby="nav-mission-tab"
                      >
                        <div className="d-flex">
                          <img
                            src={avatar}
                            className="img-fluid rounded-circle p-3"
                            style={{ width: 100, height: 100 }}
                            alt=""
                          />
                          <div className="">
                            <p className="mb-2" style={{ fontSize: 14 }}>
                              April 12, 2024
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h5>Muhammad Awais</h5>
                              <div class="d-flex my-3 response_center">
                                <i class="fa fa-star fill-star"></i>
                                <i class="fa fa-star fill-star"></i>
                                <i class="fa fa-star fill-star"></i>
                                <i class="fa fa-star fill-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
                            </div>
                            <p>
                              The generated Lorem Ipsum is therefore always free
                              from repetition injected humour, or
                              non-characteristic words etc. Susp endisse
                              ultricies nisi vel quam suscipit
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={avatar}
                            className="img-fluid rounded-circle p-3"
                            style={{ width: 100, height: 100 }}
                            alt=""
                          />
                          <div className="">
                            <p className="mb-2" style={{ fontSize: 14 }}>
                              April 12, 2024
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h5>Hussnain Ali</h5>
                              <div class="d-flex my-3 response_center">
                                <i class="fa fa-star fill-star"></i>
                                <i class="fa fa-star fill-star"></i>
                                <i class="fa fa-star fill-star"></i>
                                <i class="fa fa-star fill-star"></i>
                                <i class="fa fa-star fill-star"></i>
                              </div>
                            </div>
                            <p className="text-dark">
                              The generated Lorem Ipsum is therefore always free
                              from repetition injected humour, or
                              non-characteristic words etc. Susp endisse
                              ultricies nisi vel quam suscipit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="nav-vision" role="tabpanel">
                        <p className="text-dark">
                          Tempor erat elitr rebum at clita. Diam dolor diam
                          ipsum et tempor sit. Aliqu diam amet diam et eos
                          labore. 3
                        </p>
                        <p className="mb-0">
                          Diam dolor diam ipsum et tempor sit. Aliqu diam amet
                          diam et eos labore. Clita erat ipsum et lorem et sit
                        </p>
                      </div>
                    </div>
                  </div>
                  <form action="#">
                    <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="border-bottom rounded">
                          <input
                            type="text"
                            className="form-control border-0 me-4"
                            placeholder="Yur Name *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="border-bottom rounded">
                          <input
                            type="email"
                            className="form-control border-0"
                            placeholder="Your Email *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-bottom rounded my-4">
                          <textarea
                            name=""
                            id=""
                            className="form-control border-0"
                            cols={30}
                            rows={8}
                            placeholder="Your Review *"
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between py-3 mb-5">
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-3">Please rate:</p>
                            <div class="d-flex my-3 response_center">
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star fill-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="btn border-orange text-green rounded-pill px-4 py-3"
                          >
                            Post Comment
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="row g-4 fruite">
                  <div className="col-lg-12">
                    <div className="input-group w-100 mx-auto d-flex mb-4">
                      <input
                        type="search"
                        className="form-control p-3"
                        placeholder="keywords"
                        aria-describedby="search-icon-1"
                      />
                      <span id="search-icon-1" className="input-group-text p-3">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4>Categories</h4>
                      <ul className="list-unstyled fruite-categorie">
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2" />
                              Apples
                            </a>
                            <span className="text-dark">(3)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2" />
                              Oranges
                            </a>
                            <span className="text-dark">(5)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2" />
                              Strawbery
                            </a>
                            <span className="text-dark">(2)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2" />
                              Banana
                            </a>
                            <span className="text-dark">(8)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2" />
                              Pumpkin
                            </a>
                            <span className="text-dark">(5)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <h4 className="mb-4">Featured products</h4>
                    <div className="d-flex align-items-center justify-content-start">
                      <div
                        className="rounded me-2"
                        style={{ width: 100, height: 100 }}
                      >
                        <img
                          src={Featureone}
                          className="img-fluid rounded"
                          alt="Image"
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
                        className="rounded me-2"
                        style={{ width: 100, height: 100 }}
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
                        className="rounded me-2"
                        style={{ width: 100, height: 100 }}
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
                        className="rounded me-2"
                        style={{ width: 100, height: 100 }}
                      >
                        <img
                          src={Featureone}
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
                        className="rounded me-2"
                        style={{ width: 100, height: 100 }}
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
                        className="rounded me-2"
                        style={{ width: 100, height: 100 }}
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
                    <div className="d-flex justify-content-center my-4">
                      <a
                        href="#"
                        className="btn border-orange text-green px-4 py-3 rounded-pill w-100"
                      >
                        View More
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
                          right: 10,
                          transform: "translateY(-50%)",
                        }}
                      >
                        <h3 className="fw-bold text-orange">
                          Fresh <br /> Fruits <br /> Banner
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel />
        <Footer />
      </div>
    </>
  );
}

export default ShopDetails;
