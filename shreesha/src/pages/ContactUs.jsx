import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  MapPinIcon, 
  EnvelopeIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


const ContactUs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
    });
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className="bg-gray-50">
      <Navbar/>
      
      {/* Hero Section */}
      <div 
      id="hero-section"
      className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Solar energy team discussing plans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-lg">
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold text-white mb-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Connect With Us
              </motion.h1>
              <motion.p
                className="text-xl text-white mb-6"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Let's power a sustainable future together with innovative solar solutions.
              </motion.p>
              <motion.a
                href="#contact-form"
                className="inline-block px-8 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2 bg-green-500/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
{/* Contact Info Section - Modernized */}
<section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-green-200 blur-3xl"></div>
    <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-green-100 blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Animated header */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-green-700 font-medium">Get in Touch</span>
      </motion.div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        We're Ready to <span className="text-green-600">Power Your Future</span>
      </h2>
      <div className="flex justify-center">
        <motion.div 
          className="w-24 h-1.5 bg-green-500 rounded-full mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>

    {/* Contact cards grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Call Us',
          icon: <PhoneIcon className="w-12 h-12 p-2 bg-green-100 text-green-600 rounded-2xl" />,
          details: (
            <>
              <a 
                href="tel:+917020986306" 
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-lg"
              >
                +91 70209 86306
              </a>
              <a 
                href="tel:+918830363889" 
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-lg mt-2"
              >
                +91 88303 63889
              </a>
            </>
          ),
          bgColor: 'bg-white',
          delay: 0.1
        },
        {
          title: 'Visit Us',
          icon: <MapPinIcon className="w-12 h-12 p-2 bg-green-100 text-green-600 rounded-2xl" />,
          details: (
            <>
              <p className="text-gray-700 font-medium text-lg">Shreesha Energy Solutions</p>
              <p className="text-gray-600 mt-2">Wanowrie, Pune - 411040</p>
              <p className="text-gray-600">Maharashtra, India</p>
            </>
          ),
          bgColor: 'bg-green-50',
          delay: 0.2
        },
        {
          title: 'Email Us',
          icon: <EnvelopeIcon className="w-12 h-12 p-2 bg-green-100 text-green-600 rounded-2xl" />,
          details: (
            <>
              <a 
                href="mailto:shreesha.energy@gmail.com" 
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-lg"
              >
                shreesha.energy@gmail.com
              </a>
              <a 
                href="mailto:adheer.joshi@shreeshaenergy.com" 
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-lg mt-2"
              >
                adheer.joshi@shreeshaenergy.com
              </a>
            </>
          ),
          bgColor: 'bg-white',
          delay: 0.3
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className={`${item.bgColor} p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: item.delay }}
          whileHover={{ y: -10 }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">{item.title}</h3>
            <div className="text-gray-600 leading-relaxed">
              {item.details}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Additional CTA */}
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Prefer to connect directly? We're available Monday to Saturday, 9AM to 6PM IST.
      </p>
      <motion.a
        href="#contact-form"
        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-full hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <CalendarIcon className="w-5 h-5 mr-2" />
        Schedule a Meeting
      </motion.a>
    </motion.div>
  </div>
</section>

{/* Contact Form Section - Premium Design */}
<section id="contact-form" className="py-20 relative min-h-[700px] flex items-center">
  {/* Background with stronger overlay */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Green energy concept"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-green-900/80 to-gray-900/80"></div>
  </div>

  {/* Asymmetrical container layout */}
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left side - Visual element (optional) */}
      <div 
        className="hidden lg:block"
        data-aos="fade-right"
      >
        
          <div className="absolute inset-0 bg-green-700/20 backdrop-blur-[2px]"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            
            <h1 className="text-4xl font-bold mb-2">Let's Build Your Solar Future</h1> 
            <h2 className="text-2xl font-bold mb-2">our experts are ready to guide you </h2>
          </div>
    
      </div>

      {/* Right side - Glass form */}
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/20"
          variants={itemVariants}
        >
          <div data-aos="fade-up" className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-3">Send a Message</h2>
            <div className="w-20 h-1 bg-green-400 mx-auto"></div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white/90 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/20 text-white placeholder-white/50 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/20 text-white placeholder-white/50 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white/90 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 bg-white/20 text-white placeholder-white/50 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </div>

          {formStatus && (
            <motion.p
              className="mt-6 text-center text-green-300 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {formStatus}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </div>
  </div>
</section>

      {/* Map Section */}
 <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div data-aos="fade-up" className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800">Our Location</h2>
      <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left side - Enhanced Address Card */}
      <motion.div 
        className="space-y-8 p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg border border-green-100"
        data-aos="fade-right"
        variants={itemVariants}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Visit Us Today</h3>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
        </div>

        <div className="space-y-6">
          {/* Address with icon animation */}
          <motion.div 
            className="flex items-start"
            whileHover={{ x: 5 }}
          >
            <div className="bg-green-500 p-3 rounded-full text-white mr-4">
              <i className="fas fa-map-marker-alt text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Our Address</h4>
              <p className="text-gray-600">Wanowrie, Pune, Maharashtra 411040, India</p>
            </div>
          </motion.div>

          {/* Hours with pulse animation */}
          <motion.div 
            className="flex items-start"
            whileHover={{ x: 5 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            <div className="bg-green-500 p-3 rounded-full text-white mr-4">
              <i className="fas fa-clock text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Working Hours</h4>
              <p className="text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-green-600 font-medium">Closed on Sundays</p>
            </div>
          </motion.div>

          {/* Contact with ring animation */}
          <motion.div 
            className="flex items-start"
            whileHover={{ x: 5 }}
          >
            <motion.div 
              className="bg-green-500 p-3 rounded-full text-white mr-4"
              animate={{
                boxShadow: ["0 0 0 0 rgba(74, 222, 128, 1)", "0 0 0 10px rgba(74, 222, 128, 0)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <i className="fas fa-phone-alt text-lg"></i>
            </motion.div>
            <div>
              <h4 className="font-bold text-gray-800">Contact Us</h4>
              <p className="text-gray-600">+91 XXXX XXX XXX</p>
              <p className="text-gray-600">info@shreeshaenergy.com</p>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center"
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 10px 20px -5px rgba(74, 222, 128, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <i className="fas fa-directions mr-2"></i>
          Get Directions
        </motion.button>
      </motion.div>

      {/* Right side - Enhanced Map Container */}
      <motion.div
        className="relative h-full min-h-[400px]"
        data-aos="fade-left"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative border elements */}
        <div className="absolute -inset-4 border-2 border-green-200 rounded-2xl z-0 pointer-events-none"></div>
        <div className="absolute -inset-6 border border-green-200 rounded-2xl z-0 pointer-events-none"></div>
        
        {/* Main map with animated border */}
        <motion.div
          className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl"
          whileHover={{ scale: 1.01 }}
          style={{
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)"
          }}
        >
          <div className="absolute inset-0 border-8 border-white z-10 pointer-events-none rounded-xl"></div>
          <motion.div
            className="absolute inset-0 border-4 border-green-400 opacity-0 z-20 pointer-events-none rounded-xl"
            animate={{
              opacity: [0, 0.8, 0],
              borderWidth: [0, 8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2706851380567!2d73.89738471468976!3d18.48367198743115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea7f2663c2a1%3A0x7f6e8c7c5e8b7b4!2sWanowrie%2C%20Pune%2C%20Maharashtra%20411040%2C%20India!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Shreesha Energy Location"
            className="absolute inset-0"
          />
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            data-aos="fade-up"
            className="max-w-3xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Solar Journey</h2>
            <p className="text-xl mb-8">
              Ready to embrace clean energy? Contact us to explore how we can transform your energy future with cutting-edge solar technology.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;