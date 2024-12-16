import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header id="header">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
              <Link href="tel:+953 012 3654 896">+953 012 3654 896</Link>
              <Link href="mailto:support@colorlib.com">
                support@colorlib.com
              </Link>
            </div>
            <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
              <ul>
                <li>
                  <Link href="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa fa-dribbble"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa fa-behance"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <Link href="index.html">
              {/* <img src="img/logo.png" alt="" title="" /> */}
            </Link>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <Link href="index.html">Home</Link>
              </li>
              <li>
                <Link href="about.html">About</Link>
              </li>
              <li>
                <Link href="services.html">Services</Link>
              </li>
              <li>
                <Link href="projects.html">Projects</Link>
              </li>
              <li className="menu-has-children">
                <Link href="">Blog</Link>
                <ul>
                  <li>
                    <Link href="blog-home.html">Blog Home</Link>
                  </li>
                  <li>
                    <Link href="blog-single.html">Blog Single</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-has-children">
                <Link href="">Pages</Link>
                <ul>
                  <li>
                    <Link href="project-details.html">Project Details</Link>
                  </li>
                  <li>
                    <Link href="elements.html">Elements</Link>
                  </li>
                  <li className="menu-has-children">
                    <Link href="">Level 2 </Link>
                    <ul>
                      <li>
                        <Link href="#">Item One</Link>
                      </li>
                      <li>
                        <Link href="#">Item Two</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="contact.html">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
