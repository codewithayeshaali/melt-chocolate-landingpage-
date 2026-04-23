import React from "react";


const FlavorCards = ({ setActiveFlavor }) => {
  const flavors = [
    {
      id: "caramel",
      className: "caramel-card bg-orange",
      text: (
        <>
          Sweet crunch,<br />slow melt.
        </>
      ),
    },
    {
      id: "cocoa",
      className: "cocoa-card bg-blue",
      text: (
        <>
          Bold cocoa with a<br />deep finish.
        </>
      ),
    },
    {
      id: "orange",
      className: "orange-card bg-yellow",
      text: (
        <>
          Bright citrus with<br />creamy balance.
        </>
      ),
    },
    {
      id: "almond",
      className: "almond-card bg-green",
      text: (
        <>
          Nutty comfort,<br />perfectly smooth.
        </>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-end pb-24 min-h-screen px-6 md:px-16">
      {flavors.map((flavor) => (
        <div
          key={flavor.id}
          className={`relative group card ${flavor.className} w-full h-[35vh] md:h-[40vh] rounded-xl origin-top transform transition-all duration-500 ease-out hover:scale-y-[1.08] hover:shadow-2xl flex flex-col items-center justify-end overflow-hidden pb-8`}
          onMouseEnter={() => setActiveFlavor(flavor.id)}
          onMouseLeave={() => setActiveFlavor(null)}
        >
  
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <p
            className="relative z-10 mt-6 text-white text-lg md:text-xl text-center leading-6 opacity-0 
            translate-y-6 group-hover:opacity-100 
            group-hover:translate-y-0
            transition-all duration-500 ease-out"
          >
            {flavor.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlavorCards;