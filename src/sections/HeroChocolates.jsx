import {React, useContext} from 'react'
import Caramel from '../assets/crispy-caramel.png'
import Cocoa from '../assets/dark-cocoa.png'
import Orange from '../assets/orange-zest-milk.png'
import Almond from '../assets/almond-crunch.png'
import Stamp from '../assets/stamp.png'
import CaramelOpen from '../assets/crispy-caramel-1.png'
import CocoaOpen from '../assets/dark-cocoa-1.png'
import OrangeOpen from '../assets/orange-zest-milk-1.png'
import AlmondOpen from '../assets/almond-crunch-1.png'
import { ThemeContext } from '../context/ThemeContext';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HeroChocolates = ({ activeFlavor }) => {
const { theme } = useContext(ThemeContext);
  useGSAP(() => { 

    gsap.from('.caremel-choco', {
      y: "60%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from('.cocoa-choco', {
      y: "40%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from('.orange-choco', {
      y: "40%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from('.almond-choco', {
      y: "60%",
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from('.stamp', {
      scale: 2,
      opacity: 0,
      duration: 0.4,
      delay: 1,
      ease: "power3.out",
    });


    SplitText.create("h1", {
      type: "chars",
      onSplit(self) {
        gsap.from(self.chars, {
          scale: 1.3,
          opacity: 0,
          stagger: 0.08,
          ease: "power3.out",
        })
      }
    });

    gsap.from('h2', {
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    });
    
  })

  return (
    <>
      <div className={`text-center whitespace-nowrap  ${theme === "dark" ? "text-white" : "text-brown"} pt-15 sm:pt-20 pb-16 sm:pb-24`}
>
  <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-bold ">Four <span className="text-orange">Flavors.</span>
  </h1>
  <h2 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
    One Perfect Melt.
  </h2>
</div>

<div className="flex justify-center items-start gap-4 sm:gap-6 md:gap-8 lg:gap-6 px-4">
  
  <div>
    <img
      src={activeFlavor === "caramel" ? CaramelOpen : Caramel}
      alt="Caramel"
      className="
        relative z-10 caremel-choco
        w-70 md:w-65 lg:w-72
        mt-8 md:mt-12 lg:mt-18
        drop-shadow-[0_10px_40px_rgba(255,107,87,0.5)]
      "
    />
  </div>

  <div>
    <img
      src={activeFlavor === "cocoa" ? CocoaOpen : Cocoa}
      alt="Cocoa"
      className="
        relative z-10 cocoa-choco
        w-70 md:w-65 lg:w-72
        drop-shadow-[0_10px_40px_rgba(72,156,211,0.5)]
      "
    />
  </div>

  <div>
    <img
      src={activeFlavor === "orange" ? OrangeOpen : Orange}
      alt="Orange"
      className="
        relative z-10 orange-choco
        w-70 md:w-65 lg:w-72
        drop-shadow-[0_10px_40px_rgba(253,211,38,0.5)]
      "
    />
  </div>

  <div className="relative">
    <img
      src={activeFlavor === "almond" ? AlmondOpen : Almond}
      alt="Almond"
      className="
        relative z-10 almond-choco
        w-70 md:w-65 lg:w-72
        mt-8 md:mt-12 lg:mt-18
        drop-shadow-[0_10px_40px_rgba(157,156,61,0.5)]
      "
    />
    <img
      src={Stamp}
      alt="Stamp"
      className="
        stamp absolute z-10
        w-10 sm:w-14 md:w-16 lg:w-28
        -top-4 sm:-top-6 md:-top-8 lg:-top-10
        -left-6 sm:-left-8 md:-left-12 lg:-left-20
        rotate-12 md:rotate-20 lg:rotate-32
      "
    />
  </div>
</div>
    </>
  )
}

export default HeroChocolates