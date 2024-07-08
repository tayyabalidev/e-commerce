import React from "react";
import Carousel from "react-bootstrap/Carousel";
import clientone from "../imags/client1.jpg";

function ClientCarousel() {
  return (
    <div className=".client__carousel__content">
      <div className="container">
        <h2 className="text-center mb-4">Our Client Saying!</h2>
        <Carousel indicators={false} interval={3000} controls={true}>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6">
                <div className="card bg-light border-0">
                  <div className="card-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s.
                      <hr />
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={clientone}
                          alt="Client"
                          className="me-3 rounded-pill"
                        />
                        <div>
                          <h5>Client Name</h5>
                          <p className="mb-0">Profession</p>
                          <div className="rating">
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-quote-right fa-2x text__ornage quote-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card bg-light border-0">
                  <div className="card-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s.
                      <hr />
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={clientone}
                          alt="Client"
                          className="me-3 rounded-pill"
                        />
                        <div>
                          <h5>Client Name</h5>
                          <p className="mb-0">Profession</p>
                          <div className="rating">
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-quote-right fa-2x text__ornage quote-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6">
                <div className="card bg-light border-0">
                  <div className="card-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s.
                      <hr />
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={clientone}
                          alt="Client"
                          className="me-3 rounded-pill"
                        />
                        <div>
                          <h5>Client Name</h5>
                          <p className="mb-0">Profession</p>
                          <div className="rating">
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-quote-right fa-2x text__ornage quote-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card bg-light border-0">
                  <div className="card-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s.
                      <hr />
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={clientone}
                          alt="Client"
                          className="me-3 rounded-pill"
                        />
                        <div>
                          <h5>Client Name</h5>
                          <p className="mb-0">Profession</p>
                          <div className="rating">
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                            <i class="fa fa-star fill-star"></i>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-quote-right fa-2x text__ornage quote-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ClientCarousel;
