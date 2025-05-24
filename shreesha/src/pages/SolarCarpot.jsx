import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
import Talktous from '../components/TalkToUs';

const SolarCarport = () => {
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

  const benefits = [
    {
      title: "Space Efficiency",
      desc: "Utilizes existing parking lots, requiring no additional land",
      icon: "🚗"
    },
    {
      title: "Vehicle Protection",
      desc: "Shades cars from sun, rain, and snow, reducing cooling costs",
      icon: "🛡️"
    },
    {
      title: "EV Charging",
      desc: "Supports integrated EV charging stations for eco-friendly transport",
      icon: "🔌"
    },
    {
      title: "Energy Savings",
      desc: "Lowers electricity bills with potential net metering credits",
      icon: "💰"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Solar Capture",
      desc: "Panels on carport canopy convert sunlight into DC electricity",
      visual: "☀️→⚡"
    },
    {
      step: "2",
      title: "Power Conversion",
      desc: "Inverters convert DC to AC power for use or grid feed-in",
      visual: "🔌⇨🏠"
    },
    {
      step: "3",
      title: "Energy Usage",
      desc: "Powers nearby buildings or EV charging stations directly",
      visual: "🏠⚡"
    },
    {
      step: "4",
      title: "Grid Feed-In",
      desc: "Excess power is sold back to the grid for credits",
      visual: "🏠⇄🏙️"
    }
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      < Navbar/>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="/src/assets/images/Solar carpot_1.jpg"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-solar-panels-in-a-parking-lot-39803-large.mp4" type="video/mp4" />
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
              <span className="text-green-400 font-medium">Harness the Sun</span>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <span className="text-green-400">Solar</span> Carport Systems
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Clean energy and shaded parking in one
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Solar Carport Solutions
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

      {/* Definition Section */}
      <section className="relative py-24 bg-gradient-to-br from-white to-green-50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <motion.div
                data-aos="fade-left"
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/src/assets/images/Solar carpot_2.jpg"
                  alt="Solar Carport System"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-green-600">$3.45</div>
                  <div className="text-gray-600">Avg. Cost per Watt</div>
                </div>
              </motion.div>

              <motion.div
                data-aos="fade-right"
                className="space-y-8"
              >
                <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                  <span className="text-green-700 font-medium">What is a Solar Carport?</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Dual-Purpose <span className="text-green-600">Energy</span> Solution
                </h2>
                <p className="text-lg text-gray-600">
                  Solar Carports are elevated structures with solar panels installed on top, providing shaded parking while generating clean electricity. They optimize existing parking spaces, with commercial installations averaging $3.45 per watt, offering both energy savings and vehicle protection.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                        ☀️
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Renewable Power</h3>
                      <p className="text-gray-600">
                        Generates electricity from sunlight, reducing utility costs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                        🌱
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Eco-Friendly</h3>
                      <p className="text-gray-600">
                        Reduces carbon footprint and supports sustainable operations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 sticky">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                  Our Offerings In On-Site Distributed Solar
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    { name: "Rooftop Solar Photovoltaic Systems ", link: "/rooftop" },
                    { name: "Ground Mounted Solar Photovoltaic System", link: "/ground" },
                    { name: "Solar Carport", link: "/carport" },
                    { name: "BiPV (Building-integrated Photovoltaic System)", link: "/bipv" },
                    { name: "Solar Water Pumping Solution for the rural clientele", link: "/water" }
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-200">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Need Help?
                  </h4>

                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Shreesha Energy Solutions,<br />Wanowrie, Pune, India
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 70209 86306
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      adheer.joshi@shreeshaenergy.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">Key Benefits</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="text-green-600">Why Choose</span> Solar Carports
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-green-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Environmental Impact</h3>
                <p className="mb-6">
                  Solar carports reduce CO2 emissions and promote sustainable operations by generating clean energy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Supports net-zero goals with renewable energy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduces emissions from vehicle cooling needs</span>
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Cost Efficiency</h3>
                <p className="text-gray-600 mb-6">
                  Commercial installations cost ~$3.45/watt, with savings up to $700,000 over system lifespan.
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-4">
                    💡
                  </div>
                  <p className="text-gray-700 font-medium">
                    "Solar carports can pay back in ~5 years"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Timeline Design with Added Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">System Operation</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              How Solar Carports <span className="text-green-600">Work</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Understand the seamless process of generating solar power from your parking lot
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-200 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className={`relative ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left md:col-start-2'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`absolute top-6 ${index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'} w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold z-10`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    {step.step}
                  </motion.div>
                  <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                    <div className="text-4xl mb-4 text-center">{step.visual}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                    <div className={`absolute top-8 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent ${index % 2 === 0 ? 'md:right-0 border-l-green-100' : 'md:left-0 border-r-8 border-l-0 border-r-green-100'}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Solar?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our experts will help you transform your parking lot into a clean energy hub with a custom solar carport solution.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Solar Assessment
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
            <div className="pt-8 pb-8">
                        <Talktous/>
                      </div>
    </div>
  );
};

export default SolarCarport;