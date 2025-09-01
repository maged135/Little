import React, { useState, useEffect } from "react";

const bgClasses = [
  "bg-custm-bm",
  "bg-custm-bb",
  "bg-custom-bg",
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgClasses.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      className={`relative min-h-screen ${bgClasses[current]} bg-center bg-cover transition-all duration-700`}
    >
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative z-20 max-w-full w-full mx-auto p-[100px] flex flex-col md:flex-row items-center justify-center gap-x-8 text-white min-h-screen">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Talk to us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto md:mx-0">
            Tooplate is one of the best HTML CSS template websites for everyone.
          </p>
          <button className="mt-8 px-6 py-3 bg-black/90 rounded-full text-white font-medium shadow-md">
            WORK WITH US
          </button>
        </div>

        <div className="flex md:flex-col gap-4 mt-8 md:mt-0 md:ml-auto w-full md:w-auto justify-center md:justify-end">
          {bgClasses.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-4 h-4 rounded-full border-2 cursor-pointer ${
                i === current
                  ? "bg-white border-white"
                  : "border-white/60 bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
