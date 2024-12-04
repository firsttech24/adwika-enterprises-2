import React from "react";
import Link from "next/link";

export default function CallToActionArea() {
  return (
    <section className="callto-action-area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="callto-action-wrap col-lg-12 relative section-gap">
            <div className="content">
              <h1>
                Looking for a <br />
                quality and affordable interior design?
              </h1>
              <p className="mx-auto">
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards especially in the
                workplace.
              </p>
              <Link href="#" className="primary-btn text-uppercase">
                Request quote now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
