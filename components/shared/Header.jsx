"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Images/logo.png";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const Links = [
    { title: "Startsida", href: "/" },
    { title: "Meny", href: "/meny" },
    { title: "Om oss", href: "/om" },
    { title: "Kontakta oss", href: "tel:+46735808675" },
  ];

  return (
    <header className={openNav ? "header nav-open" : "header"}>
      <Link href="/">
        <Image height={100} className="logo" src={Logo} alt="Hörnet logga" />
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          {Links.map((link, index) => (
            <li key={index}>
              <Link
                className={
                  index === Links.length - 1
                    ? "main-nav-link nav-cta"
                    : "main-nav-link"
                }
                key={link.title}
                href={link.href}
                onClick={() => {
                  toggleNav();
                  toggleActive();
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <svg
          className={isActive ? "ham ham6 active" : "ham ham6"}
          viewBox="0 0 100 100"
          width="80"
          onClick={() => {
            toggleNav();
            toggleActive();
          }}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
          />
          <path
            className="line middle"
            d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
          />
          <path
            className="line bottom"
            d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
          />
        </svg>
      </button>
    </header>
  );
}
