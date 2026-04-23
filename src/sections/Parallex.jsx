import React ,{useContext} from "react";
import Chocolate from "../assets/choclate-bg-2.png";
import { ThemeContext } from "../context/ThemeContext";

const Parallax = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`${theme === "dark" ? "bg-black text-white" : "bg-[#f7f3ea] text-amber-900"} inner-container h-screen py-20`}>
      <div
        className="h-full rounded-xl bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${Chocolate})`,
        }}
      />
    </section>
  );
};

export default Parallax;
