"use client";

import "./sidebar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoClose } from "react-icons/io5";

export default function Sidebar({ showSidebar, handleHideSidebar }) {
  const currentPathName = usePathname();

  return (
    <div
      className={`Sidebar position-fixed top-0 start-0 h-100 p-5 bg-dark ${
        showSidebar ? "showSidebar" : ""
      }`}
    >
      {/* close icon */}
      <IoClose
        onClick={handleHideSidebar}
        className="closeIcon fs-1 text-end d-block ms-auto"
      />

      <ul className="d-flex flex-column gap-4 mt-3">
        {/* home */}
        <li onClick={handleHideSidebar} className="fw-normal fs-3">
          <Link
            href={"/"}
            className={currentPathName === "/" ? "activeRoute" : ""}
          >
            Home
          </Link>
        </li>

        {/* about */}
        <li onClick={handleHideSidebar} className="fw-normal fs-3">
          <Link
            href={"/about"}
            className={currentPathName === "/about" ? "activeRoute" : ""}
          >
            About
          </Link>
        </li>

        {/* services */}
        <li onClick={handleHideSidebar} className={"fw-normal fs-3"}>
          <Link
            href={"/services"}
            className={currentPathName === "/services" ? "activeRoute" : ""}
          >
            Services
          </Link>
        </li>

        {/* contact */}
        <li onClick={handleHideSidebar} className="fw-normal fs-3">
          <Link
            href={"/contact"}
            className={currentPathName === "/contact" ? "activeRoute" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
