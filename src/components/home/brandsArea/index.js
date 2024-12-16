import React from "react";
import Link from "next/link";

export default function BrandsArea() {
  return (
    <section className="brands-area pb-60 pt-60">
      <div className="container no-padding">
        <div className="brand-wrap">
          <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
            <div className="col single-brand">
              <Link href="#">
                {/* <img className="mx-auto" src="img/l1.png" alt="" /> */}
              </Link>
            </div>
            <div className="col single-brand">
              <Link href="#">
                {/* <img className="mx-auto" src="img/l2.png" alt="" /> */}
              </Link>
            </div>
            <div className="col single-brand">
              <Link href="#">
                {/* <img className="mx-auto" src="img/l3.png" alt="" /> */}
              </Link>
            </div>
            <div className="col single-brand">
              <Link href="#">
                {/* <img className="mx-auto" src="img/l4.png" alt="" /> */}
              </Link>
            </div>
            <div className="col single-brand">
              <Link href="#">
                {/* <img className="mx-auto" src="img/l5.png" alt="" /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
