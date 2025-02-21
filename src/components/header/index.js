"use client";

import { useState } from "react";
import "./header.scss";

import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import Sidebar from "./sidebar";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  // hide sidebar
  const handleHideSidebar = () => setShowSidebar(false);

  return (
    <div className="Header container-fluid p-4 py-xxl-3 position-fixed top-0">
      {/* logo */}
      <div className="row d-flex align-items-center justify-content-between">
        <img
          src="/logo.png"
          alt="adwika enterprises"
          className="img-fluid img-thumbnail col-7 col-md-4 col-xxl-2"
        />

        {/* address */}
        <div className="col-5 text-end d-none d-xxl-block">
          <ImLocation2 className="fs-4" />
          <span className="ms-2">
            Flat No. - 253, Pocket - 1, Sector - 9, Dwarka, New Delhi - 110075
          </span>
        </div>

        {/* phone */}
        <a
          href="tel:+91 98916 54371"
          className="col-2 d-none d-xxl-block text-center"
        >
          <FaPhoneAlt className="fs-5" />
          <span className="ms-2">+91 98916 54371</span>
        </a>

        {/* email */}
        <a
          href="mailto:bikash@adwikaenterprises.com"
          className="col-2 d-none d-xxl-block text-end"
        >
          <MdEmail className="fs-4" />
          <span className="ms-2">bikash@adwikaenterprises.com</span>
        </a>

        {/* hamburger icon */}
        <div
          onClick={() => setShowSidebar(true)}
          className="col-5 col-md-8 col-xxl-1 text-end"
        >
          <RxHamburgerMenu className="hamBurgerIcon fs-1" />
        </div>

        {/* sidebar */}
        <Sidebar
          showSidebar={showSidebar}
          handleHideSidebar={handleHideSidebar}
        />
      </div>
    </div>
  );
}
