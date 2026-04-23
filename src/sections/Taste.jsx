import React, { useRef, useContext } from "react";

import Caramel from "../assets/bite.png";
import Caramel1 from "../assets/bite-1.png";
import Caramel2 from "../assets/bite-2.png";
import Caramel3 from "../assets/bite-3.png";

import { ThemeContext } from "../context/ThemeContext";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Taste = () => {
  const tasteRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const data = [
    {
      img: Caramel,
      text: "Smooth",
      imgClass: "img-1",
      textClass: "text-1",
      arrowClass: "arrow-1",
      container: "relative z-10",
      contentPos: "absolute top-50 -right-100 flex items-end gap-4",
      reverse: false,
    },
    {
      img: Caramel1,
      text: "Crunchy",
      imgClass: "img-2",
      textClass: "text-2",
      arrowClass: "arrow-2",
      container: "absolute z-0",
      contentPos: "absolute top-10 -left-35 flex items-end gap-8",
      reverse: true,
    },
    {
      img: Caramel2,
      text: "Yummy",
      imgClass: "img-3",
      textClass: "text-3",
      arrowClass: "arrow-3",
      container: "absolute -z-10",
      contentPos: "absolute top-112 left-25 flex items-start gap-3",
      reverse: false,
    },
    {
      img: Caramel3,
      text: "Balanced          ",
      imgClass: "img-4",
      textClass: "text-4",
      arrowClass: "arrow-4",
      container: "absolute -z-20",
      contentPos: "absolute top-86 -left-105 flex items-end gap-8",
      reverse: true,
    },
  ];

  useGSAP(() => {
        data.forEach((item, i) => {
      gsap.set(`.${item.imgClass}`, {
        visibility: i === 0 ? "visible" : "hidden",
      });
    });

    const splits = data.map(
      (item) => new SplitText(`.${item.textClass}`, { type: "chars" })
    );

    const arrows = gsap.utils.toArray(
      tasteRef.current.querySelectorAll(".arrow-path")
    );

    arrows.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tasteRef.current,
        start: "top top",
        end: "+=600%",
        scrub: 1,
        pin: true,
      },
    });

    data.forEach((item, i) => {
      if (i !== 0) {
        tl.to(`.${data[i - 1].imgClass}`, { visibility: "hidden" });
        tl.to(`.${item.imgClass}`, { visibility: "visible" }, "<");
      }

      tl.to(
        `.${item.arrowClass}`,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power1.inOut",
        },
        "<+=0.3"
      );

      tl.to(
        `.${item.arrowClass}`,
        {
          fill: "#0D1927",
          duration: 0.2,
        },
        "<+=0.4"
      );

      tl.from(
        splits[i].chars,
        {
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
        },
        "<+=0.1"
      );
    });
  }, { scope: tasteRef });

  return (
    <section
      ref={tasteRef}
      className={`text-center h-screen pt-8 pb-20 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-[#f7f3ea] text-amber-900"
      }`}
    >
      <h2>Feel the Melt</h2>

      <div className="flex justify-center items-center h-full relative">
        {data.map((item, i) => (
          <div key={i} className={item.container}>
            <img
              src={item.img}
              alt=""
              className={`${item.imgClass} max-w-68 rotate-55`}
            />

            <div className={item.contentPos}>
              {!item.reverse && (
                <>
                  <svg width="118" height="39">
                    <path
                      className={`arrow-path ${item.arrowClass}`}
                      d="M0.5 11.2 C6.6 21 34.5 32.1 54 32.6"
                      fill="none"
                      stroke="#2C2C2C"
                      strokeWidth="2.7"
                    />
                  </svg>

                  <span className={`${item.textClass} text-[40px] font-bold whitespace-nowrap`}>
                    {item.text}
                  </span>
                </>
              )}

              {item.reverse && (
                <>
                  <span className={`${item.textClass} text-[40px] font-bold`}>
                    {item.text}
                  </span>

                  <svg width="118" height="39">
                    <path
                      className={`arrow-path ${item.arrowClass}`}
                      d="M0.5 11.2 C6.6 21 34.5 32.1 54 32.6"
                      fill="none"
                      stroke="#2C2C2C"
                      strokeWidth="2.7"
                    />
                  </svg>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Taste;