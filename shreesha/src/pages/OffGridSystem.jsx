import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
import Talktous from '../components/TalkToUs';

const OffGridSystem = () => {
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
      icon: '🏡',
      title: 'Complete Energy Freedom',
      desc: 'Generate and store your own power without relying on the utility grid',
      color: 'from-green-500 to-indigo-500'
    },
    {
      icon: '⚡',
      title: 'Power Anywhere',
      desc: 'Perfect for remote locations where grid connection is unavailable or expensive',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: '🔋',
      title: 'Battery Backup',
      desc: 'Energy storage ensures power availability day and night',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🌍',
      title: 'Sustainable Living',
      desc: '100% renewable energy solution with zero grid dependency',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    {
      title: "Energy Independence",
      desc: "No utility bills, no grid outages affecting your power supply",
      icon: "🛡️"
    },
    {
      title: "Remote Capability",
      desc: "Install anywhere - perfect for cabins, farms, and rural homes",
      icon: "🗺️"
    },
    {
      title: "Scalable Design",
      desc: "Easily expand your system as your energy needs grow",
      icon: "📈"
    },
    {
      title: "Reliable Backup",
      desc: "Essential power during emergencies and natural disasters",
      icon: "🆘"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Solar Generation",
      desc: "Panels convert sunlight to DC electricity during daylight hours",
      visual: "☀️→⚡"
    },
    {
      step: "2",
      title: "Charge Controller",
      desc: "Regulates voltage to safely charge your battery bank",
      visual: "⚡⇨🔋"
    },
    {
      step: "3",
      title: "Energy Storage",
      desc: "Batteries store excess energy for use when sun isn't available",
      visual: "🔋⇨📦"
    },
    {
      step: "4",
      title: "Power Conversion",
      desc: "Inverter converts DC to AC power for household appliances",
      visual: "📦⇨🏠"
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
            poster="/src/assets/images/Off Grid System_1.jpg"
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
              <span className="text-green-400 font-medium">Complete Energy Independence</span>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <span className="text-green-400">Off-Grid</span> Solar Systems
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Live free from utility bills with a self-sufficient solar power system
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Consultation
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
                  src="/src/assets/images/Off Grid System_2.jpg"
                  alt="Off Grid Solar System"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Energy Independent</div>
                </div>
              </motion.div>

              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                  <span className="text-green-700 font-medium">What is Off-Grid?</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  True <span className="text-green-600">Energy Freedom</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Off-grid solar systems provide complete independence from utility companies. 
                  They generate, store, and manage all your electricity needs without any connection 
                  to the traditional power grid. Perfect for remote locations or those seeking 
                  complete energy self-sufficiency.
                </p>
                
                <div className="space-y-4">
                  {[
                    "No monthly electricity bills",
                    "Operates independently from utility grid",
                    "Battery storage for 24/7 power availability",
                    "Customizable for any energy requirement",
                    "Ideal for remote locations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3 text-gray-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - matching other pages */}
            <div className="lg:w-1/3">
        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 sticky">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
            Our Offerings In Solar Energy System
          </h3>
          
          <div className="space-y-4 mb-8">
            {[
              {name: "On Grid / Grid-Connected Solar System", link: "/on-grid"},
              {name: "Off Grid Solar System", link: "/off-grid"},
              {name: "Hybrid Solar System", link: "/hybrid-system"}
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
                Shreesha Energy Solutions,<br/>Wanowrie, Pune, India
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">Key Advantages</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Live <span className="text-green-600">Completely Off-Grid</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Experience true energy independence with these benefits
            </motion.p>
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">System Features</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Designed for <span className="text-green-600">Self-Sufficiency</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-green-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Complete System Components</h3>
                <p className="mb-6">
                  Every off-grid system includes these essential elements to ensure reliable power
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Solar panels for energy generation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Battery bank for energy storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Charge controller to protect batteries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Inverter to convert DC to AC power</span>
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Backup Generator Option</h3>
                <p className="text-gray-600 mb-6">
                  For extended cloudy periods, many systems include a backup generator
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-4">
                    ⚡
                  </div>
                  <p className="text-gray-700 font-medium">
                    "Our off-grid systems can be paired with generators for 100% power reliability"
                  </p>
                </div>
              </div>
            </div>
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
              <span className="text-green-700 font-medium">System Operation</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              How <span className="text-green-600">Off-Grid Solar</span> Works
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The complete cycle of energy generation and storage
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-200 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 gap-y-16 relative">
  {howItWorks.map((step, index) => (
    <motion.div
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
    >
      {/* Step number circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
        {step.step}
      </div>

      {/* Card container */}
      <div className={`md:w-1/2 bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition z-0 ${index % 2 === 0 ? 'md:mr-auto md:ml-16 text-right' : 'md:ml-auto md:mr-16 text-left'}`}>
        <div className="text-4xl mb-4">{step.visual}</div>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Energy Independence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our off-grid solar experts will design a system that meets your complete energy needs
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Off-Grid Assessment
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

export default OffGridSystem;