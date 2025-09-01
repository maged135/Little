const Faqs = () => {
  return (
<section id='faqs' className="relative min-h-screen pt-16 flex flex-wrap items-center">
  {/* الصورة على الشمال */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="https://tse4.mm.bing.net/th/id/OIP.RIqlvA9XJ_zpDJSXoFXTlgHaE7?cb=thfc1&w=740&h=493&rs=1&pid=ImgDetMain&o=7&rm=3"
      alt="Projector"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>

  {/* الكلام على اليمين */}
  <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-black">
    <h2 className="text-4xl font-bold mb-4">
      <span className="text-orange-500">Rtail</span> Shop Owners
    </h2>
    <p className="text-lg text-black leading-relaxed">
      Credits go to Linsplash and Free Pik websites for images used in this Little Fashion by Topplate
    </p>
    <p className="font-semibold leading-relaxed pt-5 text-black">EXPLORE PRODUCTS</p>
  </div>
</section>

  );
};

export default Faqs;
