import React from 'react';
import { motion } from 'framer-motion';

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Tree Pot ',
      price: '100 $',
      description: 'original packege design from house ',
      image: 'https://foter.com/photos/419/affordable-large-decorative-pots-for-indoor-plants.jpeg',
    },
    {
      id: 2,
      name: 'Fashion Set',
      price: '150 $',
      description: 'costume packege ',
      image: 'https://tse2.mm.bing.net/th/id/OIP.XPcnY4B_GfJgf8xrneMxSgHaFc?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 3,
      name: 'Juice Drinck',
      price: '200 $',
      description: 'nature made another world',
      image: 'https://www.alphafoodie.com/wp-content/uploads/2022/11/Juicing-Guide-square.jpeg',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div id="products" className="flex flex-col pt-8">
      <div className="pb-16">
        <h1 className="flex justify-center text-4xl font-bold text-black">
          Featured Products
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 p-6 pt-16 justify-center">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="w-full sm:w-72 bg-white overflow-hidden rounded-lg shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-cover"
            />
            <div className="pt-4 px-4 pb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <span className="font-semibold">{product.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-16">
        <motion.a
          href="#"
          className="flex justify-center cursor-pointer border-b-2 border-black w-max mx-auto font-semibold text-lg"
          whileHover={{ scale: 1.1, borderColor: "#fb923c", color: "#fb923c" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          VIEW ALL PRODUCTS
        </motion.a>
      </div>
    </div>
  );
};

export default Product;
