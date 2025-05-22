import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import devdasSamai from '../assets/images/Products/Samai/navbar.png';
import panchpakaliSamai from '../assets/images/Products/Samai/navbar.png';
import brassSamai from '../assets/images/Products/Samai/navbar.png';

const SolarSamai = () => {
  const [activeVariant, setActiveVariant] = useState('devdas');
  const [lightOn, setLightOn] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(85);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const pulse = {
    hidden: { opacity: 0.5, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      } 
    }
  };

  const variants = [
    {
      id: 'devdas',
      name: 'Solar Silver Devdas Samai',
      desc: 'A modern adaptation of the traditional puja diya, elegantly designed for your worship needs.',
      features: [
        'Solar-powered',
        'Fireless operation',
        'Elegant design',
        'Eco-friendly'
      ],
      color: 'from-green-400 to-blue-500',
      image: devdasSamai
    },
    {
      id: 'panchpakali',
      name: 'Solar Silver Panchpakali Samai',
      desc: 'A beautiful and sustainable option for your spiritual rituals.',
      features: [
        'Solar-powered',
        'Fireless operation',
        'Intricate design',
        'Eco-friendly'
      ],
      color: 'from-amber-400 to-orange-500',
      image: panchpakaliSamai
    },
    {
      id: 'brass',
      name: 'Solar Brass Samai',
      desc: 'Combining tradition with modern technology for a unique worship experience.',
      features: [
        'Solar-powered',
        'Fireless operation',
        'Classic brass finish',
        'Eco-friendly'
      ],
      color: 'from-purple-400 to-pink-500',
      image: brassSamai
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-solar-panels-on-the-roof-of-a-house-39800-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full mb-6">
              <span className="text-green-400 font-medium">Eco-Friendly Samai</span>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Illuminate Your Worship with <span className="text-green-400">Solar Power</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Experience the beauty of traditional worship with our solar-powered Samai, providing a safe and sustainable alternative.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Solar Samai
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Product Variants Section */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">Our Solar Samai Collection</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Choose Your <span className="text-green-600">Perfect Samai</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {variants.map((variant, index) => (
              <motion.div
                key={variant.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
                className={`bg-gradient-to-br ${variant.color} text-white p-8 rounded-3xl shadow-xl overflow-hidden relative h-full`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{variant.name}</h3>
                  <p className="mb-6 opacity-90">{variant.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {variant.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="px-6 py-3 bg-white text-gray-800 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300">
                    View Details
                  </button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white/10"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/5"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">Simple Operation</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              How Our <span className="text-green-600">Solar Samai</span> Works
            </motion.h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Solar Charging",
                  desc: "Place the Samai in sunlight during the day. The built-in solar panel efficiently converts sunlight into electrical energy.",
                  icon: "☀️"
                },
                {
                  step: "2",
                  title: "Energy Storage",
                  desc: "The high-capacity lithium-ion battery stores the converted energy for nighttime use.",
                  icon: "🔋"
                },
                {
                  step: "3",
                  title: "Automatic Operation",
                  desc: "Built-in light sensor automatically turns on the Samai at dusk and off at dawn.",
                  icon: "🌙"
                },
                {
                  step: "4",
                  title: "Enjoy Ambient Light",
                  desc: "Experience soft, warm lighting perfect for your worship rituals.",
                  icon: "💡"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="relative pl-16 md:pl-24"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl z-10">
                    {step.step}
                  </div>
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Light Up Your Worship Sustainably</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose eco-friendly lighting that enhances your spiritual experience.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Solar Samai
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolarSamai;
