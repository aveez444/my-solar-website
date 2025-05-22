import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HybridSystem = () => {
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

  const features = [
    {
      icon: '🔋',
      title: 'Battery Backup',
      desc: 'Energy storage for uninterrupted power during outages',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: '🔄',
      title: 'Grid Connection',
      desc: 'Seamless switching between solar and grid power',
      color: 'from-lime-500 to-green-500'
    },
    {
      icon: '📊',
      title: 'Smart Energy Management',
      desc: 'Automatically optimizes power sources for maximum savings',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: '🌞',
      title: 'Dual Power Generation',
      desc: 'Uses solar during day, batteries at night',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const advantages = [
    {
      title: "Energy Independence",
      desc: "Reduce reliance on the grid while maintaining backup",
      icon: "🏠"
    },
    {
      title: "Peak Shaving",
      desc: "Use stored energy during high-tariff periods",
      icon: "⏰"
    },
    {
      title: "Uninterrupted Power",
      desc: "Continuous electricity during grid failures",
      icon: "⚡"
    },
    {
      title: "Future-Proof",
      desc: "Easily expandable with more panels or batteries",
      icon: "🔮"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Solar Generation",
      desc: "Panels convert sunlight to electricity during daylight",
      visual: "☀️→🔋"
    },
    {
      step: "2",
      title: "Smart Distribution",
      desc: "System prioritizes solar for immediate use",
      visual: "📊⇨🏠"
    },
    {
      step: "3",
      title: "Battery Storage",
      desc: "Excess energy charges batteries for later use",
      visual: "⚡⇨🔋"
    },
    {
      step: "4",
      title: "Grid Interaction",
      desc: "Sells surplus or draws power when needed",
      visual: "🏠⇄🏙️"
    }
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
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
              <span className="text-green-400 font-medium">The Best of Both Worlds</span>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <span className="text-green-400">Hybrid</span> Solar Systems
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Grid-connected with battery backup for uninterrupted, intelligent power
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Custom Solution
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
    {/* Image and sidebar container */}
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Main content area (matches image width) */}
      <div className="lg:w-2/3">
        {/* Image section - moved up */}
        <motion.div
          data-aos="fade-left"
          className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://www.mahindrasolarize.com/blog/wp-content/uploads/2024/01/solarize-blog1.png"
            alt="Hybrid Solar System Diagram"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
         <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600">Power Availability</div>
              </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          data-aos="fade-right"
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-medium">Hybrid Means</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The <span className="text-green-600">Perfect Balance</span>
          </h2>
          <p className="text-lg text-gray-600">
            Hybrid solar systems combine the reliability of grid connection with the independence of battery storage. 
            They intelligently switch between solar power, battery reserves, and grid electricity to optimize your 
            energy usage and savings.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  ➕
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Two Systems in One</h3>
                <p className="text-gray-600">
                  Combines solar panels, battery storage, and grid connection for maximum flexibility and reliability.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  🔄
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Energy Flow</h3>
                <p className="text-gray-600">
                  Automatically prioritizes solar power, stores excess in batteries, and only uses grid when necessary.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sidebar - matching on-grid style */}
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

      {/* Advantages Section */}
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
              <span className="text-green-600">Why Customers</span> Choose Hybrid
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-green-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Peak Usage Optimization</h3>
                <p className="mb-6">
                  Hybrid systems intelligently use stored solar energy during expensive peak-rate periods, dramatically reducing your electricity bills.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Use solar power when grid rates are highest</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic switching between power sources</span>
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Energy Independence</h3>
                <p className="text-gray-600 mb-6">
                  Maintain power during outages while still benefiting from grid connection when needed.
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-4">
                    🔄
                  </div>
                  <p className="text-gray-700 font-medium">
                    "Hybrid systems provide 80-90% energy independence while maintaining grid backup"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: How It Works Section - Timeline Design */}
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
              The Hybrid <span className="text-green-600">Power Flow</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              See how energy moves through your hybrid solar system
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
                >
                  <div className={`absolute top-6 ${index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'} w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold z-10`}>
                    {step.step}
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Smarter Energy?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our hybrid solar experts will design a system that maximizes your independence while minimizing costs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Hybrid Assessment
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

export default HybridSystem;