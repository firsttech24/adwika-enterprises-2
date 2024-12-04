import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>About Us</h6>
              <p>
                If you own an Iphone, you've probably already worked out how
                much fun it is to use it to watch movies-it has that.
              </p>
              <div className="footer-text">
                Copyright &copy; All rights reserved | This template is made
                with
                <i className="fa fa-heart-o" aria-hidden="true"></i> by
                <Link href="https://colorlib.com" target="_blank">
                  Colorlib
                </Link>{" "}
                and distributed by
                <Link href="https://themewagon.com/" target="_blank">
                  ThemeWagon
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <div className="" id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                >
                  <input
                    className="form-control"
                    name="EMAIL"
                    placeholder="Email Address"
                    /* onFocus="this.placeholder = ''"
                    onBlur="this.placeholder = 'Email Address'" */
                    required=""
                    type="email"
                  />
                  <button className="click-btn btn btn-default">
                    <i className="lnr lnr-arrow-right" aria-hidden="true"></i>
                  </button>
                  <div
                    style={{
                      position: " absolute",
                      left: "-5000px",
                    }}
                  >
                    <input
                      name="b_36c4fd991d266f23781ded980_aefe40901a"
                      tabIndex="-1"
                      // value=""
                      type="text"
                    />
                  </div>
                  <div className="info"></div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
            <div className="single-footer-widget">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div className="footer-social d-flex align-items-center">
                <Link href="#">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link href="#">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fa fa-dribbble"></i>
                </Link>
                <Link href="#">
                  <i className="fa fa-behance"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
