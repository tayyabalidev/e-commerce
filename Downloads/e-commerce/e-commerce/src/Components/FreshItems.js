import React from "react";
import freshAapple from "../../src/imags/fresh-apple.jpg";
import freshstra from "../../src/imags/fresh-stra.jpg";
import coliflower from "../../src/imags/cloiflower.jpg";

function FreshItems() {
  return (
    <>
      <div className="fresh_content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 resp_mb">
              <a href="#">
                <div className="fresh__apple">
                  <img src={freshAapple} className="" />
                  <div className="bottom__content service_orange">
                    <div className="service service_green">
                      <h5 className="">Fresh Apples</h5>
                      <h3 class="mb-0">20% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6 col-lg-4 resp_mb">
              <a href="#">
                <div className="fresh__apple border-dark">
                  <img src={freshstra} className="" />
                  <div className="bottom__content service_white">
                    <div className="service service_offwhite">
                      <h5 className="text_green">Tasty Fruits</h5>
                      <h3 class="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6 col-lg-4 resp_mb">
              <a href="#">
                <div className="fresh__apple border-green">
                  <img src={coliflower} className="" />
                  <div className="bottom__content service_green">
                    <div className="service service_orange">
                      <h5>Exotic Vegitable</h5>
                      <h3 class="mb-0">Discount 30$</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreshItems;
