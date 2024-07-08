import React from "react";

function Organic() {
  return (
    <>
      <div className="organic_content py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-7 py-5">
              <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
              <h1 className="mb-5 organic_headeing_1">
                Organic Veggies & Fruits Foods
              </h1>

              <div class="position-relative mx-auto">
                <input
                  class="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                  type="number"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  class="btn btn-submit border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                  style={{ top: "0", right: "25%" }}
                >
                  Submit Now
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 py-5">
              <div className="vegitable">
                <a href="#" className="btn py-2 px-4">
                  Vegitables
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organic;
