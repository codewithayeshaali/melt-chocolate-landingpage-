import React, { useState, useContext } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroChocolates from "./HeroChocolates";
import FlavorCards from "./FlavorCards";
import { ThemeContext } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const [activeFlavor, setActiveFlavor] = useState(null);

  useGSAP(() => {
    const pairs = [
      {
        choco: document.querySelector(".caremel-choco"),
        card: document.querySelector(".caramel-card"),
      },
      {
        choco: document.querySelector(".cocoa-choco"),
        card: document.querySelector(".cocoa-card"),
      },
      {
        choco: document.querySelector(".orange-choco"),
        card: document.querySelector(".orange-card"),
      },
      {
        choco: document.querySelector(".almond-choco"),
        card: document.querySelector(".almond-card"),
      },
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".choco-section",
        start: "top top",
        end: "74% center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    pairs.forEach(({ choco, card }) => {
      if (!choco || !card) return;

      tl.to(
        choco,
        {
          x: () => {
            const c = choco.getBoundingClientRect();
            const t = card.getBoundingClientRect();
            return t.left + t.width / 2 - (c.left + c.width / 2);
          },
          y: () => {
            const c = choco.getBoundingClientRect();
            const t = card.getBoundingClientRect();
            return t.top + t.height / 2 - (c.top + c.height * 0.68);
          },
          scale: 0.6,
          ease: "none",
        },
        0
      );
    });
  });

  return (
    <section
      className={`choco-section inner-container px-4 sm:px-6 md:px-10 lg:px-28 transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-[#f7f3ea] text-black"
      }`}
    >
      <HeroChocolates activeFlavor={activeFlavor} />
      <FlavorCards setActiveFlavor={setActiveFlavor} />
    </section>
  );
};

export default Hero;


