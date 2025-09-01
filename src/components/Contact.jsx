import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formState, setFormState] = useState({
    status: 'idle',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        status: 'error',
        message: 'Please fill out all required fields'
      })
      return
    }
    
    setFormState({
      status: 'loading',
      message: 'Sending your message...'
    })
    
    setTimeout(() => {
      setFormState({
        status: 'success',
        message: 'Your message has been sent successfully! I will get back to you soon.'
      })
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 text-black" ref={ref}>
      <div className="section-container">

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ">
                  <FiPhone size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-gray-600">01067118139</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ">
                  <FiMail size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-600">maged.mego2018@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Connect With US</h3>
              <p className="text-gray-600">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none transition-all"
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-transparent outline-none transition-all"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your message"
                  required
                />
              </div>

              {formState.status !== 'idle' && (
                <div className={`p-3 rounded-lg text-sm ${
                  formState.status === 'error' 
                    ? 'bg-red-100 text-red-700' 
                    : formState.status === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                }`}>
                  {formState.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={formState.status === 'loading'}
                className="w-full btn btn-primary flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState.status === 'loading' ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FiSend className="mr-2" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
