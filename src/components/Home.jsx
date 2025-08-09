const Home = () => {
  return (
    <section  id = "Home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-custom-bg bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-4 pt-16 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-2/3 text-white text-center md:text-left">
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
        <div className="mt-8 md:mt-0 md:ml-auto w-full md:w-24 flex justify-center md:justify-end">
          <div className="flex md:flex-col gap-4 items-center">
            <span className="w-3 h-3 border-2 border-white/60 rounded-full"></span>
            <span className="w-3 h-3 border-2 border-white/60 rounded-full"></span>
            <span className="w-4 h-4 bg-white rounded-full shadow"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
