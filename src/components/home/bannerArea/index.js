import React from "react";
import Link from "next/link";

export default function BannerArea() {
  return (
    <section className="banner-area relative" id="home">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row fullscreen d-flex justify-content-center align-items-center">
          <div className="banner-content col-lg-9 col-md-12 justify-content-center">
            <h1>
              Precise concept design <br />
              for stylish living
            </h1>
            <p className="text-white mx-auto">
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each. You may be saying to yourself.
            </p>
            <Link
              href="#"
              className="primary-btn header-btn text-uppercase mt-10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
