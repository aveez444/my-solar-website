import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SolarSamai = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const rotateY = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } }
  };

  const samaiVariants = [
    {
      name: "Solar Silver Devdas Samai",
      desc: "Elegant silver finish with intricate Devdas-inspired patterns",
      features: ["7-hour runtime", "Auto-dimming at night", "Water-resistant"],
      color: "from-slate-100 to-slate-300",
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Solar Silver Panchpakali Samai",
      desc: "Traditional five-flame design with modern solar efficiency",
      features: ["5 LED flames", "Adjustable brightness", "Wall-mountable"],
      color: "from-amber-50 to-amber-100",
      img: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Solar Brass Samai",
      desc: "Classic brass construction with antique finish",
      features: ["8-hour runtime", "Integrated solar panel", "Rust-proof"],
      color: "from-yellow-100 to-yellow-200",
      img: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const benefits = [
    {
      icon: '☀️',
      title: 'Solar Powered',
      desc: 'Efficient charging with built-in high-capacity solar panel',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: '🕯️',
      title: 'Ambient Lighting',
      desc: 'Soft, flicker-free illumination perfect for rituals',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      icon: '💧',
      title: 'Weather Resistant',
      desc: 'Designed for both indoor and outdoor use',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🌿',
      title: 'Eco-Friendly',
      desc: 'Zero emissions with renewable solar energy',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <div className="bg-amber-50 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600172455199-2dfc0d402a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Traditional samai lamp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 rounded-full mb-6">
              <span className="text-amber-400 font-medium">Traditional Solar Lamps</span>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Divine Light <span className="text-amber-400">Reimagined</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Traditional samai lamps powered by modern solar technology for sustainable rituals.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#products" 
                className="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Collection
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
            <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

{/* Solar Panel Design Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              data-aos="fade-right"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Solar panel design"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg shadow-md border border-gray-100">
                  <div className="text-xl font-bold text-amber-500">8 Hours</div>
                  <div className="text-gray-500 text-sm">Daily Charging</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 space-y-8"
              data-aos="fade-left"
            >
              <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
                <span className="text-amber-700 font-medium">Innovative Design</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Integrated <span className="text-amber-600">Solar Technology</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our samai lamps feature discreet yet powerful solar panels that blend seamlessly with traditional designs. 
                The panels are positioned for optimal sunlight exposure while maintaining aesthetic harmony.
              </p>
              
              <div className="space-y-4">
                {[
                  "High-efficiency monocrystalline solar cells",
                  "Weather-resistant tempered glass protection",
                  "45° optimal tilt angle for maximum absorption",
                  "Discreet wiring hidden in traditional patterns"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-24 bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-300 blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-yellow-400 blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-amber-700 font-medium">Our Collection</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Solar <span className="text-amber-600">Samai</span> Variants
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Traditional designs with modern solar technology
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {samaiVariants.map((variant, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={variant.img} 
                    alt={variant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{variant.name}</h3>
                  <p className="text-gray-600 mb-4">{variant.desc}</p>
                  
                  <div className="space-y-2 mb-6">
                    {variant.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-2 text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-amber-700 font-medium">Why Choose Solar Samai</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Sacred Light, <span className="text-amber-600">Sustainable Future</span>
            </motion.h2>
            <motion.div 
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-24 h-1.5 bg-amber-500 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100 + 200}
                className={`bg-gradient-to-br ${benefit.color} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-amber-700 font-medium">Technology</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              How Our <span className="text-amber-600">Solar Samai</span> Works
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Solar Charging",
                  desc: "Built-in solar panel charges during daylight hours",
                  icon: "☀️",
                  position: "right"
                },
                {
                  title: "Energy Storage",
                  desc: "Efficient battery stores energy for nighttime use",
                  icon: "🔋",
                  position: "left"
                },
                {
                  title: "Auto Illumination",
                  desc: "Automatically lights up at dusk with ambient glow",
                  icon: "💡",
                  position: "right"
                },
                {
                  title: "Long Runtime",
                  desc: "Provides 6-8 hours of continuous lighting",
                  icon: "⏳",
                  position: "left"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className={`relative ${step.position === 'right' ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left lg:mt-32'}`}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-100">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-full left-1/2 w-6 h-6 bg-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Illuminate Your Traditions</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the perfect blend of ancient rituals and modern solar technology.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Solar Samai
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolarSamai;