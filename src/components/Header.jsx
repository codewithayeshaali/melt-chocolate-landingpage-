import React, { useRef, useContext } from "react";
import Logo from "../assets/logo.png";
import Gift from "../assets/gift.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const headerRef = useRef(null);
  const giftRef = useRef(null);

  const { theme, toggleTheme } = useContext(ThemeContext);

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
      className={`w-full sticky top-0 z-20 ${
        theme === "dark" ? "bg-black" : "bg-[#f7f3ea]"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 py-3 shadow-sm w-full ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >

        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="max-w-36" />
        </div>

        <nav className="flex items-center gap-10 font-medium">
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={`transition ${
                theme === "dark"
                  ? "text-gray-300 hover:text-orange-400"
                  : "text-gray-800 hover:text-orange-500"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <button
            className={`transition ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>

  
          <button
            className={`transition ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
<button
  onClick={toggleTheme}
  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
    ${
      theme === "dark"
        ? "bg-white text-black border-white hover:bg-gray-200"
        : "bg-black text-white border-black hover:bg-gray-800"
    }
  `}
>
  {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
          <img
            ref={giftRef}
            src={Gift}
            alt="Gift"
            className="w-10 h-10"
          />
        </div>
      </div>
    </header>
  );
}