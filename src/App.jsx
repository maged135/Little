import Header from './components/Header'
import Home from './components/home'
import Story from './components/Story'
import Faqs from './components/Faqs'
import Contact from './components/Contact'
import Product from './components/Product'

import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {


  return (
    <div className="min-h-screen bg-white ">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
        <Story />
        <Faqs />
        <Product />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App