import React from "react";
import Link from "next/link";

export default function FeatureArea() {
  return (
    <section className="feature-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 pb-40 header-text text-center">
            <h1 className="pb-10 text-white">
              Some Features that Made us Unique
            </h1>
            <p className="text-white">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <Link
                href="#"
                className="title d-flex flex-row align-items-center"
              >
                <span className="lnr lnr-user"></span>
                <h4>Expert Technicians</h4>
              </Link>
              <p>
                Computer users and programmers have become so accustomed to
                using Windows, even for the changing.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <Link
                href="#"
                className="title d-flex flex-row align-items-center"
              >
                <span className="lnr lnr-license"></span>
                <h4>Professional Service</h4>
              </Link>
              <p>
                Finding the perfect learning tool for Flash is a daunting task
                to any novice web developer. One can find help.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <Link
                href="#"
                className="title d-flex flex-row align-items-center"
              >
                <span className="lnr lnr-phone"></span>
                <h4>Great Support</h4>
              </Link>
              <p>
                While most people enjoy casino ambling, sports betting, lottery
                and bingo playing for the fun and excitement.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <Link
                href="#"
                className="title d-flex flex-row align-items-center"
              >
                <span className="lnr lnr-rocket"></span>
                <h4>Technical Skills</h4>
              </Link>
              <p>
                “The moment you think of buying a Web Hosting Plan, you know one
                thing - So many choices, which one to choose.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <Link
                href="#"
                className="title d-flex flex-row align-items-center"
              >
                <span className="lnr lnr-diamond"></span>
                <h4>Highly Recomended</h4>
              </Link>
              <p>
                Many conventional colleges and universities are now offering
                online DVD repair courses, which are the exact same.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <Link
                href="#"
                className="title d-flex flex-row align-items-center"
              >
                <span className="lnr lnr-bubble"></span>
                <h4>Positive Reviews</h4>
              </Link>
              <p>
                So you have your new digital camera and clicking away to glory
                anything and everything in sight. Now you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
