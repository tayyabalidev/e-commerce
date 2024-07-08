import React from "react";
import Header from "./Header";
import banana from "../imags/banana.jpg";
import potato from "../imags/vegetable-item-5.jpg";
import singleitemimg from "../imags/single-item.jpg";
import Footer from "./Footer";

function Cart() {
  return (
    <>
      <div className="main_content cart_content">
        <Header />
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Cart</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Cart</li>
          </ol>
        </div>

        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={banana}
                          className="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt=""
                        />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4 text-dark">Big Banana</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <div
                        className="input-group quantity mt-4"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0"
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <button className="btn btn-md rounded-circle bg-light border mt-4">
                        <i className="fa fa-times text-danger"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={potato}
                          className="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt=""
                        />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">Potatoes</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <div
                        className="input-group quantity mt-4"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0"
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <button className="btn btn-md rounded-circle bg-light border mt-4">
                        <i className="fa fa-times text-danger"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={singleitemimg}
                          className="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt=""
                        />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">Awesome Brocoli</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <div
                        className="input-group quantity mt-4"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0"
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <button className="btn btn-md rounded-circle bg-light border mt-4">
                        <i className="fa fa-times text-danger"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <input
                type="text"
                className="border-0 border-bottom rounded me-5 py-3 mb-4"
                placeholder="Coupon Code"
              />
              <button
                className="btn border-orange rounded-pill px-4 py-3 text-green"
                type="button"
              >
                Apply Coupon
              </button>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8"></div>
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">
                      <b>Cart</b> <span className="fw-normal">Total</span>
                    </h1>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4">Subtotal:</h5>
                      <p className="mb-0 text-dark">$96.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0 me-4">Shipping</h5>
                      <div className="">
                        <p className="mb-0 text-dark">Flat rate: $3.00</p>
                      </div>
                    </div>
                    <p className="mb-0 text-end">Shipping to Ukraine.</p>
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                    <p className="mb-0 pe-4">$99.00</p>
                  </div>
                  <button
                    className="btn border-orange rounded-pill px-4 py-3 text-green text-uppercase mb-4 ms-4"
                    type="button"
                  >
                    Proceed Checkout
                  </button>
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

export default Cart;
