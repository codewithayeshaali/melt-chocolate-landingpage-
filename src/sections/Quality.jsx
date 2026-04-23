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

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`${theme === "dark" ? "bg-black text-white" : "bg-[#f7f3ea] text-amber-900"} inner-container pt-30 pb-40`}>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-7 flex flex-col justify-between">
          <h2 className="max-w-175 leading-20">
            What goes into every bar of{" "}
            <span className="text-orange">MELT</span>
          </h2>
          <div className="max-w-115 leading-6 font-medium">
            Every bar is a result of careful sourcing, precise timing, and
            countless taste tests — all to make sure each bite feels intentional.
          </div>
        </div>
        <div className="col-span-5 relative h-130">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`card ${item.bg} text-white rounded-3xl max-w-115 w-full p-10 min-h-112 flex flex-col justify-between ${item.position}`}
            >
              <div>
                <div className="text-[7.5vw] font-semibold leading-40">
                  {item.number}
                </div>
                <div className="text-3xl font-semibold">
                  {item.title}
                </div>
              </div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Quality;
