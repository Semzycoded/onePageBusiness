import { Menu, X, MessageCircle, Phone, Instagram, ArrowRight, Code, Zap, Palette, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import SkeletonLoader from './Skeleton'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('tPch0atXkUD7a0czq') // Replace with your actual public key
  }, [])

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Skeleton loads for 2.5 seconds
    return () => clearTimeout(timer)
  }, [])

  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await emailjs.send(
        'service_odm9dpi', // Replace with your actual service ID
        'template_l4a23hv', // Replace with your actual template ID
        {
          to_email: 'adeoyesemilore2007@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          business_name: formData.businessName,
          message: formData.message,
        }
      )

      if (response.status === 200) {
        setSubmitStatus({ type: 'success', message: 'Email sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', businessName: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to send email. Please try again.' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const services = [
    {
      title: 'Custom Design',
      description: 'Beautiful, unique layouts tailored to your brand and vision',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized performance and responsive design on all devices',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Easy to Update',
      description: 'Simple content management so you control your site',
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Deploy Ready',
      description: 'Fully deployed and live, ready to start attracting customers',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return isLoading ? (
    <SkeletonLoader />
  ) : (
    <motion.div 
      className="bg-white text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">WebCraft</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-20 overflow-hidden">
        {/* Background decoration */}
        <motion.div 
          animate={floatingVariants.animate}
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          className="absolute -bottom-8 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>

        <motion.div 
          className="relative max-w-5xl mx-auto text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.p 
              className="text-blue-600 font-bold text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Custom Web Solutions
            </motion.p>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Beautiful Websites for Small Businesses
            </motion.h2>
          </motion.div>

          <motion.p 
            className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I build <span className="font-bold text-blue-600">custom, modern websites</span> that help your business stand out online. Fast, responsive, and easy for you to update.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            variants={containerVariants}
          >
            <motion.a
              href="https://wa.me/?text=I%27d%20like%20to%20discuss%20building%20a%20website%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-bold text-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Let's Talk
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('services')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 py-4 px-8 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              See My Work
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              About Us
            </motion.h3>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="space-y-6" variants={slideInVariants}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900"
                variants={itemVariants}
              >
                Who I Help
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                Small business owners who need a professional online presence but don't want to deal with the technical complexity. Whether you're a salon, shop, consultant, or service provider—a modern website can transform how clients find and trust you.
              </motion.p>
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                I create <span className="font-bold text-blue-600">custom, modern websites</span> that reflect your brand, load lightning-fast, and are simple enough for you to update without coding knowledge.
              </motion.p>
              <motion.div 
                className="space-y-4 pt-4"
                variants={containerVariants}
              >
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </motion.div>
                  <span className="text-lg text-gray-700">Fully custom designs tailored to your brand</span>
                </motion.div>
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </motion.div>
                  <span className="text-lg text-gray-700">Mobile-responsive and optimized for speed</span>
                </motion.div>
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </motion.div>
                  <span className="text-lg text-gray-700">Deployed and live, ready to attract customers</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={slideInRightVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1"
                whileHover={{ boxShadow: '0 20px 50px rgba(59, 130, 246, 0.4)' }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 text-center space-y-4"
                  animate={floatingVariants.animate}
                >
                  <motion.div 
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    💻
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900"
                    variants={itemVariants}
                  >
                    Modern Web Design
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    variants={itemVariants}
                  >
                    Built with the latest technologies and best practices for performance
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              What I Offer
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              Everything you need for a professional online presence
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 p-8 text-center group cursor-pointer"
                variants={scaleVariants}
                whileHover={{ 
                  y: -10, 
                  borderColor: '#2563eb',
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700 mb-6"
                  whileHover={{ 
                    from: '#3b82f6',
                    to: '#a855f7',
                    backgroundColor: 'rgb(59, 130, 246)',
                    color: 'white',
                    scale: 1.15,
                  }}
                  animate={pulseVariants.animate}
                >
                  {service.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3"
                  variants={itemVariants}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              Let's discuss your website project
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/2348136151937"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center group"
              variants={scaleVariants}
              whileHover={{ 
                y: -8, 
                borderColor: '#16a34a',
                boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)'
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
                whileHover={{ 
                  backgroundColor: '#16a34a',
                  color: 'white',
                  scale: 1.2,
                  rotate: 10
                }}
                animate={floatingVariants.animate}
              >
                <MessageCircle className="w-8 h-8" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                variants={itemVariants}
              >
                WhatsApp
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4"
                variants={itemVariants}
              >
                Message me directly
              </motion.p>
              <motion.span 
                className="text-green-600 font-semibold"
                whileHover={{ color: '#16a34a' }}
              >
                08136151937
              </motion.span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+2348136151937"
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 text-center group"
              variants={scaleVariants}
              whileHover={{ 
                y: -8, 
                borderColor: '#2563eb',
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)'
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4"
                whileHover={{ 
                  backgroundColor: '#2563eb',
                  color: 'white',
                  scale: 1.2,
                  rotate: -10
                }}
                animate={floatingVariants.animate}
              >
                <Phone className="w-8 h-8" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                variants={itemVariants}
              >
                Phone
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4"
                variants={itemVariants}
              >
                Call me anytime
              </motion.p>
              <motion.span 
                className="text-blue-600 font-semibold"
                whileHover={{ color: '#2563eb' }}
              >
                08136151937
              </motion.span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/semzy00000/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-8 text-center group"
              variants={scaleVariants}
              whileHover={{ 
                y: -8, 
                borderColor: '#ec4899',
                boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)'
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-600 mb-4"
                whileHover={{ 
                  backgroundColor: '#ec4899',
                  color: 'white',
                  scale: 1.2,
                  rotate: 10
                }}
                animate={floatingVariants.animate}
              >
                <Instagram className="w-8 h-8" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                variants={itemVariants}
              >
                Instagram
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4"
                variants={itemVariants}
              >
                Follow my work
              </motion.p>
              <motion.span 
                className="text-pink-600 font-semibold"
                whileHover={{ color: '#ec4899' }}
              >
                @semzy00000
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Email Form */}
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleVariants}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-8"
              variants={itemVariants}
            >
              Or Send Me An Email
            </motion.h3>

            {submitStatus && (
              <motion.div 
                className={`mb-6 p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-100 border-2 border-green-500 text-green-700' : 'bg-red-100 border-2 border-red-500 text-red-700'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.form onSubmit={handleContactSubmit} className="space-y-6" variants={containerVariants}>
              <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:shadow-lg transition text-lg"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02, borderColor: '#2563eb' }}
                  required
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:shadow-lg transition text-lg"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02, borderColor: '#2563eb' }}
                  required
                />
              </motion.div>
              <motion.input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:shadow-lg transition text-lg"
                variants={itemVariants}
                whileFocus={{ scale: 1.02, borderColor: '#2563eb' }}
                required
              />
              <motion.textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:shadow-lg transition text-lg resize-none"
                variants={itemVariants}
                whileFocus={{ scale: 1.02, borderColor: '#2563eb' }}
                required
              ></motion.textarea>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-4 gap-12 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="flex items-center gap-2 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Code className="w-6 h-6" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold"
                  whileHover={{ color: '#3b82f6' }}
                >
                  WebCraft
                </motion.h3>
              </motion.div>
              <motion.p 
                className="text-gray-400"
                variants={itemVariants}
              >
                Building beautiful websites for small businesses
              </motion.p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.h4 className="text-lg font-bold mb-4">Quick Links</motion.h4>
              <motion.ul className="space-y-2 text-gray-400" variants={containerVariants}>
                <motion.li variants={itemVariants}><motion.button onClick={() => scrollToSection('hero')} className="hover:text-blue-400 transition" whileHover={{ x: 5, color: '#60a5fa' }}>Home</motion.button></motion.li>
                <motion.li variants={itemVariants}><motion.button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition" whileHover={{ x: 5, color: '#60a5fa' }}>About</motion.button></motion.li>
                <motion.li variants={itemVariants}><motion.button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition" whileHover={{ x: 5, color: '#60a5fa' }}>Services</motion.button></motion.li>
                <motion.li variants={itemVariants}><motion.button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition" whileHover={{ x: 5, color: '#60a5fa' }}>Contact</motion.button></motion.li>
              </motion.ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.h4 className="text-lg font-bold mb-4">Services</motion.h4>
              <motion.ul className="space-y-2 text-gray-400" variants={containerVariants}>
                <motion.li variants={itemVariants}><motion.a href="#services" className="hover:text-blue-400 transition" whileHover={{ x: 5, color: '#60a5fa' }}>Custom Design</motion.a></motion.li>
                <motion.li variants={itemVariants}><motion.a href="#services" className="hover:text-blue-400 transition" whileHover={{ x: 5, color: '#60a5fa' }}>Responsive Layout</motion.a></motion.li>
                <motion.li variants={itemVariants}><motion.a href="#services" className="hover:text-blue-400 transition" whileHover={{ x: 5, color: '#60a5fa' }}>Easy Updates</motion.a></motion.li>
                <motion.li variants={itemVariants}><motion.a href="#services" className="hover:text-blue-400 transition" whileHover={{ x: 5, color: '#60a5fa' }}>Deployment</motion.a></motion.li>
              </motion.ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.h4 className="text-lg font-bold mb-4">Follow</motion.h4>
              <motion.ul className="space-y-2 text-gray-400" variants={containerVariants}>
                <motion.li variants={itemVariants}><motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition" whileHover={{ x: 5, color: '#ec4899' }}>Instagram</motion.a></motion.li>
                <motion.li variants={itemVariants}><motion.a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition" whileHover={{ x: 5, color: '#22c55e' }}>WhatsApp</motion.a></motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.div 
            className="border-t border-gray-800 pt-8 text-center text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>&copy; {currentYear} WebCraft. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </motion.div>
  )
}
