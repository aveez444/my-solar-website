import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Talktous from '../components/TalkToUs';

const OnGridSystem = () => {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const benefits = [
    {
      icon: '⚡',
      title: '30–50% Lower Bills',
      desc: 'Only pay for what you use. Sell back excess power through net metering for credits.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: '🔄',
      title: 'Seamless Integration',
      desc: 'Automatically switches between solar and grid power without interruption.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '📉',
      title: '5–7 Year ROI',
      desc: 'Faster payback period makes it the most cost-effective solar solution.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      desc: 'Reduce your carbon footprint while maintaining full grid reliability.',
      color: 'from-emerald-500 to-cyan-500'
    }
  ];

  const comparisonData = {
    onGrid: [
      { text: 'Connected to utility grid', icon: '✓' },
      { text: 'Net metering enabled', icon: '✓' },
      { text: 'Lower initial investment', icon: '✓' },
      { text: 'No power during outages', icon: '✗' }
    ],
    offGrid: [
      { text: 'Fully independent system', icon: '✓' },
      { text: 'Battery backup required', icon: '✓' },
      { text: 'Higher setup cost', icon: '✗' },
      { text: 'Power during outages', icon: '✓' }
    ]
  };

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section - Modernized */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="/src/assets/images/On Grid  Solar System_1.jpg"
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
              <span className="text-green-400 font-medium">Grid-Tied Solar Solutions</span>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Smart Energy <span className="text-green-400">Connected</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Harness solar power while staying connected to the grid for ultimate reliability and savings.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Assessment
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
<section className="relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-300 blur-xl"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-400 blur-xl"></div>
  </div>
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/3">
        <motion.div
  data-aos="fade-left"
  className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
>
  <img
      src="/src/assets/images/On Grid  Solar System_2.jpg"
      alt="On Grid Solar System"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
  <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg shadow-md border border-gray-100">
    <div className="text-xl font-bold text-green-600">25+ Years</div>
    <div className="text-gray-500 text-sm">System Lifespan</div>
  </div>
</motion.div>

        {/* Text content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-medium">Why Choose On-Grid?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The <span className="text-green-600">Smartest</span> Way to Solar
          </h2>
          <p className="text-lg text-gray-600">
            On-grid solar systems offer the perfect balance of sustainability and reliability. 
            Generate clean energy during the day, draw from the grid at night, and enjoy 
            significant savings without the complexity of battery storage.
          </p>
          
          <div className="space-y-4">
            {[
              "No battery maintenance costs",
              "Earn credits for excess energy",
              "Automatic grid fallback",
              "Scalable for any property size"
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

      {/* Sidebar - perfectly aligned with image */}
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

      {/* Benefits Section - Animated Cards */}
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
              Power Your Life <span className="text-green-600">Smarter</span>
            </motion.h2>
            <motion.div 
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-24 h-1.5 bg-green-500 rounded-full"></div>
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

      {/* How It Works - Animated Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">Simple Process</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              How <span className="text-green-600">On-Grid Solar</span> Works
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Solar Generation",
                  desc: "Panels convert sunlight to DC electricity during daylight hours",
                  icon: "☀️"
                },
                {
                  title: "Power Conversion",
                  desc: "Inverter converts DC to AC power for your home's use",
                  icon: "🔌"
                },
                {
                  title: "Net Metering",
                  desc: "Excess energy flows back to grid, earning you credits",
                  icon: "📊"
                },
                {
                  title: "Grid Supplement",
                  desc: "At night or during high demand, you draw power from the grid",
                  icon: "🏙️"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left lg:mt-32'}`}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-full left-1/2 w-6 h-6 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Interactive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
              data-aos="fade-up"
            >
              <span className="text-green-700 font-medium">Make the Right Choice</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              On-Grid <span className="text-green-600">vs</span> Off-Grid
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Compare systems to find the perfect solar solution for your needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              data-aos="fade-right"
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-green-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">On-Grid System</h3>
                <p className="text-green-100">Best for most homes & businesses</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {comparisonData.onGrid.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-3 flex-shrink-0 ${item.icon === '✓' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {item.icon}
                      </span>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              data-aos="fade-left"
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gray-800 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Off-Grid System</h3>
                <p className="text-gray-300">For remote locations</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {comparisonData.offGrid.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-3 flex-shrink-0 ${item.icon === '✓' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {item.icon}
                      </span>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Saving?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our solar experts will design a custom on-grid system tailored to your energy needs and budget.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
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

export default OnGridSystem;