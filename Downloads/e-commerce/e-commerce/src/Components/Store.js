import React from "react";
import applestore from "../imags/apple-store.png";

function Store() {
  return (
    <>
      <div className="store_content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content_align">
                <h2>Fresh Exotic Fruits</h2>
                <p className="our_store_p">in Our Store</p>
                <p>
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p>
                <div>
                  <button className="btn btn_buy">BUY</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing">
                <p className="one_P">1</p>
                <div>
                  <p className="two_p">
                    50 $<br /> Kg
                  </p>
                </div>
              </div>
              <img src={applestore} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
