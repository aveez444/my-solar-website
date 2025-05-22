import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import biglamp from '../assets/images/Products/Lamp/Big-Lamp.png';
import smalllamp from '../assets/images/Products/Lamp/Small-Lamp.png';

const SolarNightLamp = () => {
  const [activeVariant, setActiveVariant] = useState('small');
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
      id: 'small',
      name: 'Compact Solar Lamp',
      desc: 'Perfect for bedside tables or small spaces with efficient solar charging',
      features: [
        '6-inch diameter',
        '8-hour runtime',
        'IP54 weather resistance',
        'Adjustable brightness'
      ],
      color: 'from-green-400 to-blue-500',
      image: smalllamp // Replace with your actual image URL
    },
    {
      id: 'big',
      name: 'Premium Solar Lamp',
      desc: 'Larger illumination area with enhanced battery capacity for all-night use',
      features: [
        '10-inch diameter',
        '12-hour runtime',
        'IP65 weather resistance',
        'Multi-color modes',
        'Smart light sensor'
      ],
      color: 'from-amber-400 to-orange-500',
      image: biglamp // Replace with your actual image URL
    }
  ];

  const specs = [
    { icon: '☀️', title: 'Solar Panel', value: '5W Monocrystalline' },
    { icon: '🔋', title: 'Battery', value: '2000mAh Li-ion' },
    { icon: '💡', title: 'Brightness', value: '50-300 lumens' },
    { icon: '⏱️', title: 'Charge Time', value: '6-8 hours' }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-green-300 blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <span className="text-green-700 font-medium">Eco-Friendly Lighting</span>
              </div>
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Solar <span className="text-green-500">Night Lamps</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-lg"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Illuminate your nights with renewable energy. Our solar-powered lamps provide soft, ambient lighting while reducing your carbon footprint.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                {variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setActiveVariant(variant.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${activeVariant === variant.id ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {variant.name}
                  </button>
                ))}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
              >
                <button 
                  onClick={() => setLightOn(!lightOn)}
                  className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {lightOn ? 'Turn Off Light' : 'Turn On Light'}
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={lightOn ? "M13 10V3L4 14h7v7l9-11h-7z" : "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"} />
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                {/* Lamp image with transparent background */}
                <div className="relative">
                  <img 
                    src={variants.find(v => v.id === activeVariant)?.image} 
                    alt={activeVariant === 'small' ? 'Small Solar Lamp' : 'Large Solar Lamp'}
                    className={`${activeVariant === 'small' ? 'w-64 h-64' : 'w-80 h-80'} object-contain`}
                  />
                  
                  {/* Battery indicator */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${batteryLevel > 20 ? 'bg-green-500' : 'bg-amber-500'} rounded-full transition-all duration-500`}
                      style={{ width: `${batteryLevel}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                      {batteryLevel}%
                    </div>
                  </div>
                </div>
                
                {/* Glow effect when light is on */}
                {lightOn && (
                  <motion.div 
                    className={`absolute inset-0 ${activeVariant === 'small' ? 'w-64 h-64' : 'w-80 h-80'} rounded-full bg-amber-200/30 blur-xl`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                
                {/* Additional glow effect with pulse animation */}
                {lightOn && (
                  <motion.div 
                    className={`absolute inset-0 ${activeVariant === 'small' ? 'w-64 h-64' : 'w-80 h-80'} rounded-full bg-amber-200/20 blur-xl`}
                    variants={pulse}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">Why Choose Our Lamps</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Designed for <span className="text-green-600">Comfort</span> & <span className="text-green-600">Sustainability</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{spec.title}</h3>
                <p className="text-gray-600 font-medium">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Variants Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">Our Collection</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Find Your Perfect <span className="text-green-600">Solar Lamp</span>
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
              How Our <span className="text-green-600">Solar Lamp</span> Works
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
                  desc: "Place the lamp in sunlight during the day. The built-in solar panel efficiently converts sunlight into electrical energy.",
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
                  desc: "Built-in light sensor automatically turns on the lamp at dusk and off at dawn (manual mode also available).",
                  icon: "🌙"
                },
                {
                  step: "4",
                  title: "Enjoy Ambient Light",
                  desc: "Experience soft, warm lighting perfect for bedrooms, patios, or outdoor spaces without electricity.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Light Up Your Nights Sustainably</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose eco-friendly lighting that saves energy and creates the perfect ambiance.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Solar Lamps
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

export default SolarNightLamp;