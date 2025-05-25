import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
import Talktous from '../components/TalkToUs';
import waterPumpingImage from "/src/assets/images/water pumping_1.jpg";
import waterPumpingImage2 from "/src/assets/images/water pumping_2.jpg";

const SolarWaterPumping = () => {
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
      title: "Cost Savings",
      desc: "Eliminates fuel costs, saving up to 50% on irrigation expenses",
      icon: "💰"
    },
    {
      title: "Reliable Water",
      desc: "Provides steady water supply even in off-grid rural areas",
      icon: "💧"
    },
    {
      title: "Eco-Friendly",
      desc: "Cuts carbon emissions by replacing diesel pumps",
      icon: "🌍"
    },
    {
      title: "Boosts Income",
      desc: "Increases crop yields by up to 50%, raising farmer profits",
      icon: "📈"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Harness Sunlight",
      desc: "Solar panels convert sunlight into electricity",
      visual: "☀️→⚡"
    },
    {
      step: "2",
      title: "Power the Pump",
      desc: "Electricity drives the pump to draw water",
      visual: "🔌⇨💧"
    },
    {
      step: "3",
      title: "Irrigate Fields",
      desc: "Delivers water to crops and livestock",
      visual: "🌾💧"
    },
    {
      step: "4",
      title: "Store or Sell",
      desc: "Store water or sell excess power to the grid",
      visual: "💧⇄🏙️"
    }
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      < Navbar/>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          
<img 
  src={waterPumpingImage} 
  alt="Water Pumping Solar System" 
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
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full mb-6">
              <span className="text-green-400 font-medium">Empower Your Farm</span>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <span className="text-green-400">Solar</span> Water Pumping
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Sustainable water solutions for rural prosperity
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Solar Pumps Today
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
  src={waterPumpingImage2}
  alt="Solar Water Pumping System"
  className="w-full h-auto"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-green-600">₹50,000</div>
                  <div className="text-gray-600">Avg. Installation Cost</div>
                </div>
              </motion.div>

              <motion.div
                data-aos="fade-right"
                className="space-y-8"
              >
                <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                  <span className="text-green-700 font-medium">What is Solar Water Pumping?</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Sustainable <span className="text-green-600">Irrigation</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Solar water pumps use sunlight to power water extraction from wells, rivers, or lakes, delivering reliable water for irrigation, livestock, and households. Starting at ₹50,000, they offer a cost-effective, eco-friendly solution for rural farmers, boosting productivity and sustainability.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                        ☀️
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Zero Fuel Costs</h3>
                      <p className="text-gray-600">
                        Runs on free solar energy, slashing operating expenses.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                        🌾
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Higher Yields</h3>
                      <p className="text-gray-600">
                        Ensures consistent irrigation, increasing crop production.
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
              <span className="text-green-700 font-medium">Why Solar Pumps?</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="text-green-600">Transform</span> Your Farm
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
                <h3 className="text-2xl font-bold mb-4">Green Farming Today</h3>
                <p className="mb-6">
                  Solar pumps reduce CO2 emissions by up to 15 tons per year per pump compared to diesel.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Supports sustainable agriculture</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduces environmental impact</span>
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Investment</h3>
                <p className="text-gray-600 mb-6">
                  Starting at ₹50,000, solar pumps pay back in 3-5 years with government subsidies.
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-4">
                    💡
                  </div>
                  <p className="text-gray-700 font-medium">
                    "Farmers report 25-50% income increase"
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
              <span className="text-green-700 font-medium">How It Works</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Solar Pumps <span className="text-green-600">Made Simple</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Discover how solar pumps deliver water to your fields
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Grow with Solar Power</h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts install a solar pump to irrigate your fields and boost your income.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Solar Pump Quote
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

export default SolarWaterPumping;