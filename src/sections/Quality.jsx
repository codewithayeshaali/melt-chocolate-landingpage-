import React, { useRef, useContext } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeContext } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Quality = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { theme } = useContext(ThemeContext);

  const data = [
    {
      number: "200+",
      title: "Taste Iterations",
      desc: "Refined until the flavour feels just right.",
      bg: "bg-blue",
      position: "relative ml-auto",
    },
    {
      number: "30+",
      title: "Test Batches",
      desc: "Small batches. Big attention to detail.",
      bg: "bg-yellow",
      position: "absolute top-16 right-0",
    },
    {
      number: "100%",
      title: "Natural Ingredients",
      desc: "No shortcuts. No compromises.",
      bg: "bg-green",
      position: "absolute top-32 right-0",
    },
  ];

  useGSAP(
    () => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.set(card, {
          y: "180%",
          rotate: i % 2 === 0 ? -10 : 10,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(cardsRef.current, {
        y: 0,
        rotate: 0,
        duration: 2,
        stagger: 1,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={`${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-[#f7f3ea] text-amber-900"
      } inner-container overflow-hidden pt-20 md:pt-30 pb-24 md:pb-40`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
        <div className="lg:col-span-7 flex flex-col gap-40">
          <h2 className="max-w-full sm:w-2/3 lg:max-w-[700px] leading-tight text-xl sm:text-3xl md:text-5xl">
            What goes into every bar of{" "}
            <span className="text-orange">MELT</span>
          </h2>

          <p className="max-w-full lg:max-w-[460px] leading-6 font-medium text-sm sm:text-base">
            Every bar is a result of careful sourcing, precise timing, and
            countless taste tests — all to make sure each bite feels
            intentional.
          </p>
        </div>

        <div className="lg:col-span-5 relative flex flex-col gap-6 pb-10 lg:pb-0 lg:min-h-[760px]">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`card ${item.bg} text-white rounded-3xl w-full p-6 sm:p-5 md:p-10 min-h-[200px] sm:min-h-[300px] flex flex-col justify-between ${item.position}`}
            >
              <div>
                <div className="text-5xl sm:text-6xl md:text-[5vw] font-semibold leading-none">
                  {item.number}
                </div>

                <div className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
                  {item.title}
                </div>
              </div>

              <div className="mt-4 text-sm sm:text-base">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;

