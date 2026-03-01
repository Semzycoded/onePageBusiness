import { Menu, X, MessageCircle, Phone, Instagram, ArrowRight, Code, Zap, Palette, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  return (
    <div className="bg-white text-gray-900">
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
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-blue-600 font-bold text-lg">Custom Web Solutions</p>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Beautiful Websites for Small Businesses
            </h2>
          </div>

          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I build <span className="font-bold text-blue-600">custom, modern websites</span> that help your business stand out online. Fast, responsive, and easy for you to update.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="https://wa.me/?text=I%27d%20like%20to%20discuss%20building%20a%20website%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              Let's Talk
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 py-4 px-8 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              See My Work
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Who I Help</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Small business owners who need a professional online presence but don't want to deal with the technical complexity. Whether you're a salon, shop, consultant, or service provider—a modern website can transform how clients find and trust you.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                I create <span className="font-bold text-blue-600">custom, modern websites</span> that reflect your brand, load lightning-fast, and are simple enough for you to update without coding knowledge.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">Fully custom designs tailored to your brand</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">Mobile-responsive and optimized for speed</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">Deployed and live, ready to attract customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-white rounded-2xl p-8 text-center space-y-4">
                  <div className="text-6xl">💻</div>
                  <h3 className="text-2xl font-bold text-gray-900">Modern Web Design</h3>
                  <p className="text-gray-600">Built with the latest technologies and best practices for performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What I Offer</h2>
            <p className="text-xl text-gray-600">Everything you need for a professional online presence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-400 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-500 group-hover:to-purple-500 text-gray-700 group-hover:text-white mb-6 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Let's discuss your website project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2348136151937"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-500 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 group-hover:bg-green-500 text-green-600 group-hover:text-white mb-4 transition-all duration-300">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Message me directly</p>
              <span className="text-green-600 font-semibold group-hover:text-green-700">08136151937</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+2348136151937"
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:border-blue-500 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-500 text-blue-600 group-hover:text-white mb-4 transition-all duration-300">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Call me anytime</p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-700">08136151937</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/semzy00000/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 hover:border-pink-500 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 group-hover:bg-pink-500 text-pink-600 group-hover:text-white mb-4 transition-all duration-300">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">Follow my work</p>
              <span className="text-pink-600 font-semibold group-hover:text-pink-700">@semzy00000</span>
            </a>
          </div>

          {/* Email Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Or Send Me An Email</h3>

            {submitStatus && (
              <div className={`mb-6 p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-100 border-2 border-green-500 text-green-700' : 'bg-red-100 border-2 border-red-500 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:shadow-lg transition text-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:shadow-lg transition text-lg"
                  required
                />
              </div>
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:shadow-lg transition text-lg"
                required
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:shadow-lg transition text-lg resize-none"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">WebCraft</h3>
              </div>
              <p className="text-gray-400">Building beautiful websites for small businesses</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-blue-400 transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-blue-400 transition">Custom Design</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Responsive Layout</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Easy Updates</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Deployment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">Instagram</a></li>
                <li><a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {currentYear} WebCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
