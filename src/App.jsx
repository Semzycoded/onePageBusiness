import { Menu, X, MessageCircle, Phone, Instagram, ArrowRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentYear = new Date().getFullYear()

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const services = [
    {
      title: 'Quality Service',
      description: 'Consistently deliver excellence that exceeds expectations every time',
      icon: '⭐',
    },
    {
      title: 'Expert Team',
      description: 'Skilled professionals dedicated to your satisfaction and success',
      icon: '👥',
    },
    {
      title: 'Always Available',
      description: 'Responsive support whenever you need us, every step of the way',
      icon: '🤝',
    },
  ]

  return (
    <div className="bg-white text-gray-900 scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Your Business</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition duration-200"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-50"
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
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Exceptional Service <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Delivered</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            We're committed to delivering quality results and building lasting relationships with our clients.
          </motion.p>
          <motion.a
            variants={scaleIn}
            href="https://wa.me/?text=I%27d%20like%20to%20learn%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-10 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <MessageCircle className="h-5 w-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                We pride ourselves on delivering exceptional service with integrity and professionalism. Our team is passionate about understanding your unique needs and providing solutions that truly make a difference.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                With years of experience, we've built a reputation for reliability and excellence. We're not just a service provider—we're your partner in success, committed to your satisfaction every step of the way.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Proven expertise you can trust</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Results that matter</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Your success is our priority</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <p className="text-8xl mb-4">�</p>
                <p className="text-gray-700 font-semibold text-lg">Dedicated to Your Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 text-center border border-gray-100 hover:border-blue-100"
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-8 font-light leading-relaxed">{service.description}</p>
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 text-center hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <Phone className="h-14 w-14 text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Phone</h4>
              <a href="tel:+1234567890" className="text-gray-700 hover:text-blue-600 transition font-medium">
                +1 (555) 123-4567
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-10 text-center hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300">
              <MessageCircle className="h-14 w-14 text-green-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h4>
              <a
                href="https://wa.me/?text=Hello%20I%20would%20like%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition font-semibold"
              >
                Send Message
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-10 text-center hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-300">
              <Instagram className="h-14 w-14 text-pink-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Instagram</h4>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition font-semibold"
              >
                @business
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 md:p-12 shadow-lg border border-gray-200">
            <h4 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
                required
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-3">
              <h5 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Your Business</h5>
              <p className="text-gray-400 leading-relaxed font-light">Quality service. Exceptional results.</p>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-6 text-white">Quick Links</h5>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-blue-400 transition duration-200 font-medium">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition duration-200 font-medium">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition duration-200 font-medium">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition duration-200 font-medium">Contact</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-6 text-white">Services</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-blue-400 transition duration-200 font-medium">Consulting</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition duration-200 font-medium">Planning</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition duration-200 font-medium">Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-6 text-white">Follow Us</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-200 font-medium">Instagram</a></li>
                <li><a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-200 font-medium">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-10 text-center text-gray-500">
            <p>&copy; {currentYear} Your Business. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
