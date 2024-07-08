import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import grapes from "../imags/grapes.jpg";
import fruittwo from "../imags/fruite-item-2.jpg";
import fruitfourb from "../imags/fruite-item-4.jpg";

import orange from "../imags/orange.jpg";
import apple from "../imags/apple.jpg";
import banana from "../imags/banana.jpg";

const TabsView = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="tab_view_content">
      <div className="container mt-5">
        <ul className="nav nav-pills">
          <h1 className="me-auto">Our Organic Products</h1>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "Active" ? "active" : ""}`}
              href="#"
              onClick={(e) => handleTabClick(e, "Active")}
            >
              All Products
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "Much longer nav link" ? "active" : ""
              }`}
              href="#"
              onClick={(e) => handleTabClick(e, "Much longer nav link")}
            >
              Vegetables
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "Link" ? "active" : ""}`}
              href="#"
              onClick={(e) => handleTabClick(e, "Link")}
            >
              Fruits
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "awais" ? "active" : ""}`}
              href="#"
              onClick={(e) => handleTabClick(e, "awais")}
            >
              Bread
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "New Tab" ? "active" : ""}`}
              href="#"
              onClick={(e) => handleTabClick(e, "New Tab")}
            >
              Meat
            </a>
          </li>
        </ul>

        <div className="mt-4">
          {activeTab === "Active" && (
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={grapes} />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Grapes</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={grapes} />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Grapes</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={fruittwo} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Raspberries</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={fruitfourb} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Apricots</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Much longer nav link" && (
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={grapes} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Grapes</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={fruittwo} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Raspberries</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Link" && (
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={orange} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Orange</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={apple} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Apple</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "awais" && (
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={grapes} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Grapes</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={fruitfourb} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Apricots</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "New Tab" && (
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={banana} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Banana</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={fruittwo} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Raspberries</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card_tab rounded">
                    <p className="mb-0 fruit_button px-3 py-1">Fruits</p>
                    <div className="image-container">
                      <img src={orange} className="w-100" />
                    </div>
                    <div className="p-4 card_tab_body">
                      <h4>Oranges</h4>
                      <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-5 res-fs-14 mb-0">
                          <b>$4.99 / kg</b>
                        </p>
                        <button className="btn btn_add_cart px-2">
                          <i className="fa fa-shopping-bag"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsView;
