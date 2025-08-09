import { FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';



const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">

          <div>
            <h3 className="text-xl font-bold mb-2">Little Fashion</h3>
            <p className="text-gray-400 mb-1">copyrite @2022 Little Fashion</p>
            <p className="text-gray-400">design by tooplate</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Site Map</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Story</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>FAQs</li>
            </ul>
          </div>

          <div className="flex items-center space-x-6 text-gray-400 text-2xl cursor-pointer">
            <FaWhatsapp className="hover:text-green-500 transition-colors" size={24} />
            <FaYoutube className="hover:text-red-600 transition-colors" size={24} />
            <FaInstagram className="hover:text-pink-500 transition-colors" size={24} />
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer