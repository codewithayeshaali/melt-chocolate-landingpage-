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
   contentPos:
  "absolute top-40 left-25 sm:top-40 sm:left-48 md:top-50 md:left-65 lg:top-60 lg:left-auto lg:-right-100 flex items-end gap-1 sm:gap-1 md:gap-1 lg:gap-3",
    reverse: false,
  },
  {
     img: Caramel1,
      text: "Crunchy",
      imgClass: "img-2",
      textClass: "text-2",
      arrowClass: "arrow-2",
      container: "absolute z-0",
      contentPos:
        "absolute top-0 -left-13 sm:top-6 sm:-left-15 md:top-8 md:-left-20 lg:top-10 lg:-left-35 flex items-end gap-3 sm:gap-4 md:gap-6 lg:gap-8",
      reverse: true,
  },
  {
    img: Caramel2,
    text: "Yummy",
    imgClass: "img-3",
    textClass: "text-3",
    arrowClass: "arrow-3",
    container: "absolute -z-10",
    contentPos:
      "absolute top-60 left-10 sm:top-70 sm:left-10 md:top-80 md:left-25 lg:top-112 lg:left-25 flex items-start sm:gap-1 md:gap-1 lg:gap-3",
      reverse: false,
  },
  {
    img: Caramel3,
    text: "Balanced",
    imgClass: "img-4",
    textClass: "text-4",
    arrowClass: "arrow-4",
    container: "absolute -z-20",
    contentPos:
        "absolute top-20 -left-33 sm:top-50 sm:-left-60 md:top-65 md:-left-75 lg:top-86 lg:-left-105 flex items-end gap-3 sm:gap-4 md:gap-6 lg:gap-8",
    reverse: true,
  },
];

  useGSAP(
    () => {
     
      data.forEach((item, i) => {
        gsap.set(`.${item.imgClass}`, {
          visibility: i === 0 ? "visible" : "hidden",
        });
      });

     
      const splits = data.map(
        (item) =>
          new SplitText(`.${item.textClass}`, { type: "chars" })
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
          tl.to(`.${data[i - 1].imgClass}`, {
            visibility: "hidden",
          });
          tl.to(
            `.${item.imgClass}`,
            { visibility: "visible" },
            "<"
          );
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
    },
    { scope: tasteRef }
  );

  return (
    <section
      ref={tasteRef}
      className={`text-center min-h-screen lg:h-screen px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-8 pb-12 sm:pb-16 md:pb-20 lg:pb-20 overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-[#f7f3ea] text-amber-900"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold">
        Feel the Melt
      </h2>

      <div className="flex justify-center items-center h-full relative w-full">
        {data.map((item, i) => (
          <div key={i} className={item.container}>
            <img
              src={item.img}
              alt={item.text}
              className={`${item.imgClass} w-full max-w-32 sm:max-w-40 md:max-w-52 lg:max-w-68 rotate-45`}
            />

            <div className={item.contentPos}>
              {!item.reverse ? (
                <>
                  <svg
                    width="118"
                    height="39"
                    viewBox="0 0 118 39"
                    className="w-16 sm:w-20 md:w-24 lg:w-[118px]"
                  >
                    <path
                      className={`arrow-path ${item.arrowClass}`}
                      d="M0.5 11.2 C6.6 21 34.5 32.1 54 32.6"
                      fill="none"
                      stroke={
                        theme === "dark" ? "#f5f5f5" : "#2C2C2C"
                      }
                      strokeWidth="2.7"
                    />
                  </svg>

                  <span
                    className={`${item.textClass} text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold whitespace-nowrap`}
                  >
                    {item.text}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className={`${item.textClass} text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold whitespace-nowrap`}
                  >
                    {item.text}
                  </span>

                  <svg
                    width="118"
                    height="39"
                    viewBox="0 0 118 39"
                    className="w-16 sm:w-20 md:w-24 lg:w-[118px]"
                  >
                    <path
                      className={`arrow-path ${item.arrowClass}`}
                      d="M0.5 11.2 C6.6 21 34.5 32.1 54 32.6"
                      fill="none"
                      stroke={
                        theme === "dark" ? "#f5f5f5" : "#2C2C2C"
                      }
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