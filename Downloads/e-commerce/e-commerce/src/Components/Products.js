import React from "react";
import orange from "../imags/orange.jpg";
import parsely from "../imags/fruite-item-2.jpg";
import peach from "../imags/fruite-item-4.jpg";
import grapes from "../imags/grapes.jpg";
import apple from "../imags/apple.jpg";

import banana from "../imags/banana.jpg";

function Products() {
  return (
    <>
      <div className="product_content">
        <div className="sub_produt_content">
          <h1>Bestseller Products</h1>
          <p className="paragraph-text-dark lorem_para">
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="p-4 rounded bg-light resp_mb">
                <div className="row align-items-center">
                  <div className="col-6 col_six">
                    <img src={orange} className="border-50" />
                  </div>
                  <div className="col-6 col_six">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 response_center">
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                    <button class="btn btn_add_cart px-2">
                      <i class="fa fa-shopping-bag"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 rounded bg-light resp_mb">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={parsely} className="border-50" />
                  </div>
                  <div className="col-6 col_six">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 response_center">
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                    <button class="btn btn_add_cart px-2">
                      <i class="fa fa-shopping-bag"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 rounded bg-light resp_mb">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={banana} className="border-50" />
                  </div>
                  <div className="col-6 col_six">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 response_center">
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                    <button class="btn btn_add_cart px-2">
                      <i class="fa fa-shopping-bag"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 col-lg-4">
              <div className="p-4 rounded bg-light resp_mb">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={peach} className="border-50" />
                  </div>
                  <div className="col-6 col_six">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 response_center">
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                    <button class="btn btn_add_cart px-2">
                      <i class="fa fa-shopping-bag"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 rounded bg-light resp_mb">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={grapes} className="border-50" />
                  </div>
                  <div className="col-6 col_six">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 response_center">
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                    <button class="btn btn_add_cart px-2">
                      <i class="fa fa-shopping-bag"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 rounded bg-light resp_mb">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={apple} className="border-50" />
                  </div>
                  <div className="col-6 col_six">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 response_center">
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star fill-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                    <button class="btn btn_add_cart px-2">
                      <i class="fa fa-shopping-bag"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row four_coulmn mt-4">
            <div className="col-md-6 col-lg-3 resp_mb">
              <img src={orange} />
              <div className="col_six mt-4">
                <a href="#" className="h5">
                  Organic Tomato
                </a>
                <div className="d-flex my-3 justify-content-center">
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                <button class="btn btn_add_cart px-2">
                  <i class="fa fa-shopping-bag"></i> Add to cart
                </button>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 resp_mb">
              <img src={parsely} />
              <div className="col_six mt-4">
                <a href="#" className="h5">
                  Organic Tomato
                </a>
                <div className="d-flex my-3 justify-content-center">
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                <button class="btn btn_add_cart px-2">
                  <i class="fa fa-shopping-bag"></i> Add to cart
                </button>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 resp_mb">
              <img src={banana} />
              <div className="col_six mt-4">
                <a href="#" className="h5">
                  Organic Tomato
                </a>
                <div className="d-flex my-3 justify-content-center">
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                <button class="btn btn_add_cart px-2">
                  <i class="fa fa-shopping-bag"></i> Add to cart
                </button>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 resp_mb">
              <img src={peach} />
              <div className="col_six mt-4">
                <a href="#" className="h5">
                  Organic Tomato
                </a>
                <div className="d-flex my-3 justify-content-center">
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star fill-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h4 className="mb-3 paragraph-text-dark ">3.12 $</h4>
                <button class="btn btn_add_cart px-2">
                  <i class="fa fa-shopping-bag"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
