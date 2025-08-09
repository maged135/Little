const Story = () => {
  return (
    <section id = "story" className="pt-16 max-w-[1000px] mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Get started with <span className="text-orange-500">Little</span> Fashion
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 pt-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/5">
          <ul className="space-y-3 text-center md:text-left">
            <li className="text-orange-500 font-semibold">Introduction</li>
            <li className="text-gray-400">How we work?</li>
            <li className="text-gray-400">Capabilities</li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Projector"
            className="rounded-lg shadow-md w-full max-w-sm md:max-w-full"
          />
        </div>

        {/* Text content */}
        <div className="w-full md:w-2/5 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold">
            Good <span className="text-orange-500">Design</span> Ideas for{" "}
            <span className="text-orange-500">your</span> fashion
          </h3>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Little Fashion templates comes with sign in / sign up pages,
            product listing / product detail, about, FAQs, and contact page.
          </p>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Since this HTML template is based on Bootstrap 5 CSS library, you
            can feel free to add more components as you need.
          </p>

          <a href="#" className="mt-4 inline-block font-semibold text-orange-500">
            Learn more about us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Story;
