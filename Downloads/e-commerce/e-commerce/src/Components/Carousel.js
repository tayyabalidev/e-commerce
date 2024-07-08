import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import carouselbanana from "../imags/carousel-b.png";
import carouseltomato from "../imags/carousel-tomato-group.jpg";
import carouselpotato from "../imags/carousel-potato.jpg";
import carouselpasely from "../imags/carousel-parsely.jpg";
import carouseltomatogroup from "../imags/carousel-tomato-group.jpg";

const Carousel = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Fresh Organic Vegetables</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={carouselbanana}
                      className="card-img-top"
                      alt="Banana"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Banana</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod te incididunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text text-success mb-0">$7.99 / kg</p>
                      <button className="btn btn-outline-success">
                        <i className="fa fa-lock"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="badge py-1 px-3 badge-success">Vegetable</div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={carouseltomato}
                      className="card-img-top"
                      alt="Bell Pepper"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Bell Pepper</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod te incididunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text text-success mb-0">$7.99 / kg</p>
                      <button className="btn btn-outline-success">
                        <i className="fa fa-lock"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="badge py-1 px-3 badge-success">Vegetable</div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={carouselpotato}
                      className="card-img-top"
                      alt="Potatoes"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Potatoes</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod te incididunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text text-success mb-0">$7.99 / kg</p>
                      <button className="btn btn-outline-success">
                        <i className="fa fa-lock"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="badge py-1 px-3 badge-success">Vegetable</div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={carouselpasely}
                      className="card-img-top"
                      alt="Parsley"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Parsley</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod te incididunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text text-success mb-0">$7.99 / kg</p>
                      <button className="btn btn-outline-success">
                        <i className="fa fa-lock"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="badge py-1 px-3 badge-success">Vegetable</div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={carouseltomatogroup}
                      className="card-img-top"
                      alt="Tomato"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Tomato</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod te incididunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text text-success mb-0">$6.99 / kg</p>
                      <button className="btn btn-outline-success">
                        <i className="fa fa-lock"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="badge py-1 px-3 badge-success">Vegetable</div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={carouselpasely}
                      className="card-img-top"
                      alt="Carrot"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carrot</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod te incididunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text text-success mb-0">$5.99 / kg</p>
                      <button className="btn btn-outline-success">
                        <i className="fa fa-lock"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="badge py-1 px-3 badge-success">Vegetable</div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={carouselpasely}
                      className="card-img-top"
                      alt="Broccoli"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Broccoli</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod te incididunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text text-success mb-0">$8.99 / kg</p>
                      <button className="btn btn-outline-success">
                        <i className="fa fa-lock"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="badge py-1 px-3 badge-success">Vegetable</div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="image-container">
                    <img
                      src={carouseltomatogroup}
                      className="card-img-top"
                      alt="Cucumber"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Cucumber</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod te incididunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text text-success mb-0">$4.99 / kg</p>
                      <button className="btn btn-outline-success">
                        <i className="fa fa-lock"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="badge py-1 px-3 badge-success">Vegetable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
