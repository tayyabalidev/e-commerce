import React from "react";

function Services() {
  return (
    <>
      <div className="service__content">
        <div className="container">
          <div className="service_box">
            <div className="row">
              <div className="col-lg-3">
                <div className="customer__service">
                  <i className="fa fa-users"></i>
                  <h4>satisfied customers</h4>
                  <h1>1963</h1>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="customer__service">
                  <i className="fa fa-users"></i>
                  <h4>QUALITY OF SERVICE</h4>
                  <h1>99%</h1>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="customer__service">
                  <i className="fa fa-users"></i>
                  <h4>QUALITY CERTIFICATES</h4>
                  <h1>33</h1>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="customer__service">
                  <i className="fa fa-users"></i>
                  <h4>AVAILABLE PRODUCTS</h4>
                  <h1>789</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
