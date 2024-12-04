import React from "react";
import Link from "next/link";

export default function ServiceArea() {
  return (
    <section className="service-area section-gap" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 pb-50 header-text text-center">
            <h1 className="mb-10">What we offer to our clients</h1>
            <p>Who are in extremely love with eco friendly system..</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="single-service">
              <Link href="#">
                <h4>Interior Design</h4>
              </Link>
              <p>
                Sony laptops are among the most well known laptops on today’s
                market. Sony is a name that over time has established itself as
                creating a solid product.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-service">
              <Link href="#">
                <h4>Architecture Design</h4>
              </Link>
              <p>
                Computer users and programmers have become so accustomed to
                using Windows, even for the changing capabilities and the
                appearances of the graphical.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-service">
              <Link href="#">
                <h4>Concept Design</h4>
              </Link>
              <p>
                Can you imagine what we will be downloading in another twenty
                years? I mean who would have ever thought that you could record
                sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
