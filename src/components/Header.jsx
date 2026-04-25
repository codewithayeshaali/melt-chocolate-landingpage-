import React, { useRef, useContext, useState } from "react";
import Logo from "../assets/logo.png";
import Gift from "../assets/gift.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const headerRef = useRef(null);
  const giftRef = useRef(null);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#" },
    { name: "Categories", link: "#" },
    { name: "Special Offer", link: "#" },
    { name: "Gifting", link: "#" },
    { name: "Contact", link: "#" },
  ];

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });

  useGSAP(() => {
    if (!giftRef.current) return;

    gsap.to(giftRef.current, {
      y: -10,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  return (
    <header
      ref={headerRef}
      className={`w-full sticky top-0 z-50 ${
        theme === "dark" ? "bg-black" : "bg-[#f7f3ea]"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 shadow-sm ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <img src={Logo} alt="Logo" className="w-28 sm:w-32 md:w-36" />

        <nav className="hidden lg:flex items-center gap-6 lg:gap-10 font-medium">
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={` cursor-pointer transition hover:text-orange-500 ${
                theme === "dark"
                  ? "text-gray-300 "
                  : "text-gray-800 "
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            className={`transition cursor-pointer hover:text-orange-500 ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <button
            className={`cursor-pointer transition hover:text-orange-500 ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>

          <button
            onClick={toggleTheme}
            className={`block px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-300 border ${
              theme === "dark"
                ? "bg-white text-black border-white hover:bg-gray-200"
                : "bg-black text-white border-black hover:bg-gray-800"
            }`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <img
            ref={giftRef}
            src={Gift}
            alt="Gift"
            className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer transition hover:text-orange-500"
          />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-xl cursor-pointer transition hover:text-orange-500"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`lg:hidden px-6 py-4 space-y-4 cursor-pointer ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="block border-b pb-2 cursor-pointer transition hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="w-full mt-3 py-2 rounded-full border text-sm cursor-pointer"
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
}
