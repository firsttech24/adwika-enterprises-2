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
