import React, { useRef, useContext } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeContext } from "../context/ThemeContext";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const footerRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const socials = [
    {
      name: "facebook",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
        </svg>
      ),
    },
    {
      name: "instagram",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M7.75 2C5.13 2 3 4.13 3 6.75v10.5C3 19.87 5.13 22 7.75 22h8.5C18.87 22 21 19.87 21 17.25V6.75C21 4.13 18.87 2 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.25-1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      ),
    },
    {
      name: "linkedin",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M6.94 5A2 2 0 1 1 7 5ZM7 8H3V21H7ZM13.32 8H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.9 14.94 7.13 13.28 10.16Z" />
        </svg>
      ),
    },
  ];
  useGSAP(() => {
    gsap.from(footerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
      },
    });

    gsap.to(".social-icon", {
      scale: 1.15,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "sine.inOut",
      stagger: 0.15,
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`px-6 md:px-16 py-16 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-[#2b1a12] text-[#f5e6d8]"
      }`}
    >
      <div
        className={`grid md:grid-cols-3 gap-10 border-b pb-10 transition-colors duration-500 ${
          theme === "dark"
            ? "border-white/20"
            : "border-[#ffffff20]"
        }`}
      >
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Crafted to melt,
            <br /> not rush.
          </h2>
          <p
            className={`text-sm mt-4 ${
              theme === "dark" ? "text-gray-300" : "text-[#d6b8a3]"
            }`}
          >
            Premium chocolate experience made with love & slow perfection.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul
            className={`space-y-2 ${
              theme === "dark" ? "text-gray-400" : "text-[#d6b8a3]"
            }`}
          >
            <li className="hover:text-white transition">Flavors</li>
            <li className="hover:text-white transition">Our Story</li>
            <li className="hover:text-white transition">How it's Made</li>
            <li className="hover:text-white transition">Gifting</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Experience</h3>
          <ul
            className={`space-y-2 ${
              theme === "dark" ? "text-gray-400" : "text-[#d6b8a3]"
            }`}
          >
            <li className="hover:text-white transition">Taste Journey</li>
            <li className="hover:text-white transition">Texture & Melt</li>
            <li className="hover:text-white transition">Ingredients</li>
            <li className="hover:text-white transition">Process</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
        
        <div className="flex gap-4">
          {socials.map((item, i) => (
            <div
              key={i}
              className={`social-icon w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition hover:scale-110 ${
                theme === "dark"
                  ? "bg-white text-black"
                  : "bg-[#f5e6d8] text-[#3b2416]"
              }`}
            >
              {item.icon}
            </div>
          ))}
        </div>
        <div
          className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-[#d6b8a3]"
          }`}
        >
          © 2026 Chocolate Brand. All rights reserved.
        </div>

    
        <div className="flex gap-6 text-sm">
          <a className="hover:text-white transition" href="#">
            Privacy
          </a>
          <a className="hover:text-white transition" href="#">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
