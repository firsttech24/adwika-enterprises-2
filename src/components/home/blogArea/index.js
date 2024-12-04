import React from "react";
import Link from "next/link";

export default function BlogArea() {
  return (
    <section className="blog-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-9">
            <div className="title text-center">
              <h1 className="mb-10">Ongoing Exhibitions from the scratch</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="active-blog-carusel">
            <div className="single-blog-post item">
              <div className="thumb">
                <img className="img-fluid" src="img/b1.jpg" alt="" />
              </div>
              <div className="details">
                <div className="tags">
                  <ul>
                    <li>
                      <Link href="#">Travel</Link>
                    </li>
                    <li>
                      <Link href="#">Life Style</Link>
                    </li>
                  </ul>
                </div>
                <Link href="#">
                  <h4 className="title">Low Cost Advertising</h4>
                </Link>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you. A farmer.
                </p>
                <h6 className="date">31st January,2018</h6>
              </div>
            </div>
            <div className="single-blog-post item">
              <div className="thumb">
                <img className="img-fluid" src="img/b2.jpg" alt="" />
              </div>
              <div className="details">
                <div className="tags">
                  <ul>
                    <li>
                      <Link href="#">Travel</Link>
                    </li>
                    <li>
                      <Link href="#">Life Style</Link>
                    </li>
                  </ul>
                </div>
                <Link href="#">
                  <h4 className="title">Creative Outdoor Ads</h4>
                </Link>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you. A farmer.
                </p>
                <h6 className="date">31st January,2018</h6>
              </div>
            </div>
            <div className="single-blog-post item">
              <div className="thumb">
                <img className="img-fluid" src="img/b3.jpg" alt="" />
              </div>
              <div className="details">
                <div className="tags">
                  <ul>
                    <li>
                      <Link href="#">Travel</Link>
                    </li>
                    <li>
                      <Link href="#">Life Style</Link>
                    </li>
                  </ul>
                </div>
                <Link href="#">
                  <h4 className="title">
                    It's classNameified How To Utilize Free
                  </h4>
                </Link>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you. A farmer.
                </p>
                <h6 className="date">31st January,2018</h6>
              </div>
            </div>
            <div className="single-blog-post item">
              <div className="thumb">
                <img className="img-fluid" src="img/b1.jpg" alt="" />
              </div>
              <div className="details">
                <div className="tags">
                  <ul>
                    <li>
                      <Link href="#">Travel</Link>
                    </li>
                    <li>
                      <Link href="#">Life Style</Link>
                    </li>
                  </ul>
                </div>
                <Link href="#">
                  <h4 className="title">Low Cost Advertising</h4>
                </Link>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you. A farmer.
                </p>
                <h6 className="date">31st January,2018</h6>
              </div>
            </div>
            <div className="single-blog-post item">
              <div className="thumb">
                <img className="img-fluid" src="img/b2.jpg" alt="" />
              </div>
              <div className="details">
                <div className="tags">
                  <ul>
                    <li>
                      <Link href="#">Travel</Link>
                    </li>
                    <li>
                      <Link href="#">Life Style</Link>
                    </li>
                  </ul>
                </div>
                <Link href="#">
                  <h4 className="title">Creative Outdoor Ads</h4>
                </Link>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you. A farmer.
                </p>
                <h6 className="date">31st January,2018</h6>
              </div>
            </div>
            <div className="single-blog-post item">
              <div className="thumb">
                <img className="img-fluid" src="img/b3.jpg" alt="" />
              </div>
              <div className="details">
                <div className="tags">
                  <ul>
                    <li>
                      <Link href="#">Travel</Link>
                    </li>
                    <li>
                      <Link href="#">Life Style</Link>
                    </li>
                  </ul>
                </div>
                <Link href="#">
                  <h4 className="title">
                    It's classNameified How To Utilize Free
                  </h4>
                </Link>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you. A farmer.
                </p>
                <h6 className="date">31st January,2018</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
