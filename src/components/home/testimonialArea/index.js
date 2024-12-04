import React from "react";
import Link from "next/link";

export default function TestimonialArea() {
  return (
    <section className="testimonial-area pt-120">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Testimonial from our Clients</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="active-testimonial-carusel">
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <img
                  className="img-fluid"
                  src="img/elements/user1.png"
                  alt=""
                />
              </div>
              <div className="desc">
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker, projector,
                  hardware.
                </p>
                <h4>Mark Alviro Wiens</h4>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <img
                  className="img-fluid"
                  src="img/elements/user2.png"
                  alt=""
                />
              </div>
              <div className="desc">
                <p>
                  Hypnosis quit smoking methods maintain caused quite world over
                  the last two decades. There is a lot of argument pertaining to
                </p>
                <h4>Lina Harrington</h4>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <img
                  className="img-fluid"
                  src="img/elements/user1.png"
                  alt=""
                />
              </div>
              <div className="desc">
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker, projector,
                  hardware.
                </p>
                <h4>Mark Alviro Wiens</h4>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <img
                  className="img-fluid"
                  src="img/elements/user2.png"
                  alt=""
                />
              </div>
              <div className="desc">
                <p>
                  Hypnosis quit smoking methods maintain caused quite world over
                  the last two decades. There is a lot of argument pertaining to
                </p>
                <h4>Lina Harrington</h4>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
