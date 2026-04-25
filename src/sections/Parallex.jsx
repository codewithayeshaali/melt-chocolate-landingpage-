import React ,{useContext} from "react";
import Chocolate from "../assets/choclate-bg-2.png";
import { ThemeContext } from "../context/ThemeContext";

const Parallax = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`${
        theme === "dark" ? "bg-black text-white" : "bg-[#f7f3ea] text-amber-900"
      } px-4 sm:px-6 lg:px-10 py-10`}>
      <div
         className="  
         w-full 
          bg-center 
          bg-cover 
          bg-scroll 
          sm:bg-fixed
          h-[250px] 
          sm:h-[350px] 
          md:h-[450px] 
          lg:h-[500px]
          rounded-xl 
          "
        style={{
          backgroundImage: `url(${Chocolate})`,
        }}
      />
    </section>
  );
};

export default Parallax;
