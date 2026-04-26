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
  "absolute top-35 left-26 sm:top-35 sm:left-45 md:top-50 md:left-55 lg:top-60 lg:left-78 flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8",
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
        "absolute bottom-55 -left-14 sm:bottom-70 sm:-left-16 md:bottom-85 md:-left-25 lg:bottom-110 lg:-left-30 flex items-end gap-3 sm:gap-4 md:gap-6 lg:gap-8",
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
      "absolute top-60 left-4 sm:top-70 sm:left-10 md:top-80 md:left-25 lg:top-112 lg:left-27 flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8",
      reverse: false,
  },
  {
    img: Caramel3,
    text: "Balance",
    imgClass: "img-4",
    textClass: "text-4",
    arrowClass: "arrow-4",
    container: "absolute -z-20",
    contentPos:
        "absolute top-18 -left-32 sm:top-40 sm:-left-57 md:top-75 md:-left-75 lg:top-86 lg:-left-107 flex items-end gap-3 sm:gap-4 md:gap-6 lg:gap-8",
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
      className={`text-center handwritten min-h-screen lg:h-screen px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-8 pb-12 sm:pb-16 md:pb-20 lg:pb-20 overflow-hidden transition-colors duration-500 ${
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
   viewBox="0 0 113 84"
className="w-16 sm:w-20 md:w-24 rotate-6 translate-x-2"  fill="none"
 xmlns="http://www.w3.org/2000/svg"
 
>
  <path
   className={`arrow-path ${item.arrowClass}`}
    d="M0.5 11.2
                  C6.6 21 34.5 32.1 54 32.6
                  C75.1 33.3 86.9 29.8 110.3 16
                  C110.1 17.6 109.8 19 109.8 20.2
                  C109.7 21.6 109.6 23.1 109.8 24.4
                  C109.9 24.9 110.6 25.5 111.1 25.5
                  C111.6 25.6 112.4 24.9 112.5 24.5
                  C113.6 20.5 114.5 16.5 115.5 12.3
                  C115.8 11 115.2 10.1 113.8 9.8
                  C108.4 9 102.9 8.2 97.4 7.5
                  C96.1 7.4 94.7 7.8 93.1 8
                  C94.7 11.3 97.6 10.7 99.8 11.3
                  C102.1 12.1 104.6 12.4 107.5 13.1
                  C101.2 18.3 94.6 21.8 87.5 24.3
                  C61.5 33.6 36.5 30.5 12.4 17.9
                  C9.2 16.3 6.3 14.3 3.3 12.5
                  C2.3 12.2 1.5 11.9 0.5 11.2Z"
    fill={theme === "dark" ? "#f5f5f5" : "#2C2C2C"}
    stroke={theme === "dark" ? "#f5f5f5" : "#2C2C2C"}
    strokeWidth={2.7}
    strokeLinecap="round"
    strokeLinejoin="round"
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
  viewBox="0 0 113 84"
  className="w-16 sm:w-20 md:w-24 rotate-[150deg]"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    className={`arrow-path ${item.arrowClass}`}
    d="M0 23.5
    C9.8 17.3 40.1 19.9 57.9 28
    C77.1 36.7 86.2 45 101.1 67.7
    C101.7 66.1 102 64.8 102.5 63.7
    C103.1 62.4 103.6 61 104.4 59.8
    C104.6 59.5 105.7 59.3 106.1 59.4
    C106.6 59.6 107 60.6 106.9 61
    C106.1 65.1 105.2 69.1 104.3 73.2
    C103.9 74.6 103 75.1 101.6 74.8
    C96.4 73.1 91.1 71.4 85.8 69.6
    C84.7 69.2 83.6 68.1 82.2 67.3
    C85.1 65 87.4 66.9 89.7 67.2
    C92.1 67.6 94.5 68.3 97.4 69
    C94 61.6 89.6 55.5 84.4 50.1
    C65.1 30.4 41.2 22.2 14.1 22.9
    C10.5 23 7 23.5 3.5 23.7
    C2.5 23.6 1.6 23.5 0 23.5Z"
    fill={theme === "dark" ? "#f5f5f5" : "#2C2C2C"}
    stroke={theme === "dark" ? "#f5f5f5" : "#2C2C2C"}
    strokeWidth={2.7}
    strokeLinecap="round"
    strokeLinejoin="round"
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