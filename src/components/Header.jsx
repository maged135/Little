import { FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-500 cursor-pointer">
          Little <span className="text-black">Fashion</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a
            href="/"
            className="border-b-2 border-transparent hover:border-orange-400 pb-1 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#story"
            className="border-b-2 border-transparent hover:border-orange-400 pb-1 cursor-pointer"
          >
            Story
          </a>
          <a
            href="#products"
            className="border-b-2 border-transparent hover:border-orange-400 pb-1 cursor-pointer"
          >
            Products
          </a>
          <a
            href="#faqs"
            className="border-b-2 border-transparent hover:border-orange-400 pb-1 cursor-pointer"
          >
            FAQs
          </a>
          <a
            href="#contact"
            className="border-b-2 border-transparent hover:border-orange-400 pb-1 cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 rounded-full border hover:bg-orange-100">
            <FiUser size={18} />
          </button>
          <button className="p-2 rounded-full border hover:bg-orange-100">
            <FiShoppingCart size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full border hover:bg-orange-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Nav with framer-motion */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={mobileMenuVariants}
      className="md:hidden bg-white px-6 py-4 space-y-4 text-gray-600 overflow-hidden"
    >
      <a
        href="/"
        className="block hover:text-orange-500"
        onClick={() => setIsOpen(false)}
      >
        Home
      </a>
      <a
        href="#story"
        className="block hover:text-orange-500"
        onClick={() => setIsOpen(false)}
      >
        Story
      </a>
      <a
        href="#products"
        className="block hover:text-orange-500"
        onClick={() => setIsOpen(false)}
      >
        Products
      </a>
      <a
        href="#faqs"
        className="block hover:text-orange-500"
        onClick={() => setIsOpen(false)}
      >
        FAQs
      </a>
      <a
        href="#Contact"
        className="block hover:text-orange-500"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </a>
      <div className="flex gap-4 pt-4 border-t">
        <FiUser size={20} className="cursor-pointer hover:text-orange-500" />
        <FiShoppingCart
          size={20}
          className="cursor-pointer hover:text-orange-500"
        />
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
};

export default Header;
