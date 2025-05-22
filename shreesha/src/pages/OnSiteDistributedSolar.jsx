import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SolarRoof from '../assets/images/solar-roof.jpg';

const OnSiteDistributedSolar = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
    });
  }, []);

  // Stats counter animation
  const [count, setCount] = useState({
    projects: 0,
    capacity: 0,
    savings: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        projects: prevCount.projects >= 250 ? 250 : prevCount.projects + 5,
        capacity: prevCount.capacity >= 50 ? 50 : prevCount.capacity + 1,
        savings: prevCount.savings >= 75 ? 75 : prevCount.savings + 1,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Solar solutions data
  const solarSolutions = [
    {
      id: 1,
      title: 'Rooftop Solar Photovoltaic Systems (RSPVS)',
      description: 'Rooftop solar panels rely on the ability of the solar cells to harness the energy of the sun and convert it to electricity. Our rooftop solutions are designed to maximize energy production while maintaining structural integrity and aesthetic appeal.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Optimal space utilization on existing structures',
        'Reduced transmission losses',
        'Customizable to various roof types',
        'Minimal maintenance requirements'
      ],
      stats: [
        { value: '25-40%', label: 'Average Savings' },
        { value: '4-6', label: 'Year Payback' },
        { value: '25+', label: 'Year Lifespan' }
      ]
    },
    {
      id: 2,
      title: 'Ground Mounted Solar Photovoltaic System',
      description: 'Ground-mounted solar systems are ideal when roof space is limited or unsuitable. These systems are located on open land, mounted on the ground, and can be optimally angled for maximum solar exposure throughout the year.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Ideal for large-scale installations',
        'Optimal orientation and tilt adjustment',
        'Easy maintenance access',
        'Scalable to any capacity'
      ],
      stats: [
        { value: '30-50%', label: 'Higher Efficiency' },
        { value: '5-7', label: 'Year Payback' },
        { value: '20MW+', label: 'Project Capacity' }
      ]
    },
    {
      id: 3,
      title: 'Solar Carport',
      description: 'Solar carports provide dual functionality by offering shade and protection for vehicles while generating clean energy. While similar to a ground mount installation, solar carports are elevated to accommodate vehicles underneath.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Dual-purpose structure (parking + power)',
        'Enhanced property value',
        'Weather protection for vehicles',
        'Ideal for commercial parking lots'
      ],
      stats: [
        { value: '20-35%', label: 'Space Utilization' },
        { value: '6-8', label: 'Year Payback' },
        { value: '30%', label: 'Extra Savings' }
      ]
    },
    {
      id: 4,
      title: 'BiPV (Building-integrated Photovoltaic System)',
      description: 'BIPV systems seamlessly integrate solar technology into building materials, replacing conventional construction elements. These systems provide savings in materials and electricity costs while adding architectural interest to the building.',
      image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Aesthetically pleasing integration',
        'Material cost savings',
        'Reduced carbon footprint',
        'Enhanced building envelope performance'
      ],
      stats: [
        { value: '15-25%', label: 'Material Savings' },
        { value: '7-9', label: 'Year Payback' },
        { value: '30+', label: 'Year Durability' }
      ]
    },
    {
      id: 5,
      title: 'Solar Water Pumping Solution',
      description: 'Our solar water pumping solutions are specifically designed for rural clientele, providing reliable water access without dependence on grid electricity. These systems are perfect for agricultural, irrigation, and drinking water needs in remote areas.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Off-grid operation capability',
        'Low maintenance requirements',
        'Government subsidy available',
        'Customizable pump capacities'
      ],
      stats: [
        { value: '100%', label: 'Energy Independence' },
        { value: '3-5', label: 'Year Payback' },
        { value: '24/7', label: 'Water Availability' }
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How do I determine which distributed solar solution is right for me?',
      answer: 'Our solar experts will conduct a detailed site assessment considering your energy needs, available space, budget, and local regulations to recommend the optimal solution for your specific requirements.'
    },
    {
      id: 2,
      question: 'What maintenance do distributed solar systems require?',
      answer: 'Most systems require minimal maintenance - primarily periodic cleaning and annual inspections. We offer comprehensive maintenance packages to ensure your system operates at peak efficiency throughout its lifespan.'
    },
    {
      id: 3,
      question: 'Are there government incentives available for these systems?',
      answer: 'Yes, various state and central government incentives are available, including subsidies, tax benefits, and net metering policies. Our team will guide you through all available benefits for your specific project.'
    },
    {
      id: 4,
      question: 'How long does a typical distributed solar installation take?',
      answer: 'Installation timelines vary by system type and scale. Rooftop systems typically take 1-2 weeks, while larger ground-mounted systems may require 4-8 weeks. We ensure minimal disruption during installation.'
    }
  ];

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={SolarRoof}
            alt="Solar Panels on Roof"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full mb-6">
              <span className="text-green-400 font-medium">Distributed Generation</span>
            </div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              On Site <span className="text-green-400">Distributed Solar</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={textVariants}
              transition={{ delay: 0.4 }}
            >
              Custom solar solutions designed for your specific site requirements
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-2 text-lg text-white"
              variants={textVariants}
              transition={{ delay: 0.6 }}
            >
              <a href="/" className="hover:text-green-400 transition-colors duration-300">
                Home
              </a>
              <span>›</span>
              <span className="text-green-400">On Site Distributed Solar</span>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2 bg-green-500/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: count.projects, label: 'Completed Projects', icon: '🏗️' },
              { value: count.capacity, label: 'MW Installed Capacity', icon: '⚡' },
              { value: count.savings, label: '% Average Savings', icon: '💰' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-5xl font-bold text-green-600 mb-2">{stat.value}+</div>
                <h3 className="text-xl font-medium text-gray-800">{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Distributed Solar Power Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in designing and implementing customized on-site solar solutions that generate clean energy exactly where it's needed
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose On-Site Distributed Solar?</h3>
              <p className="text-gray-600 mb-6">
                On-site distributed solar systems provide numerous advantages over centralized power generation, including reduced transmission losses, increased energy security, and lower infrastructure costs.
              </p>
              <ul className="space-y-4">
                {[
                  'Energy generation at point of consumption',
                  'Scalable solutions from kW to MW scale',
                  'Reduced dependency on grid power',
                  'Lower operational costs',
                  'Sustainable and environmentally friendly'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
                  alt="Distributed Solar Benefits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-green-500/20 rounded-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
              Our Solutions
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Distributed Solar Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide customized solar solutions designed to maximize your energy independence and savings
            </p>
          </motion.div>

          <div className="space-y-16">
            {solarSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -inset-4 border-2 border-green-500/20 rounded-xl -z-10"></div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Performance Stats:</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {solution.stats.map((stat, idx) => (
                          <div key={idx} className="bg-green-50 p-3 rounded-lg text-center">
                            <div className="text-xl font-bold text-green-600">{stat.value}</div>
                            <div className="text-xs text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of Distributed Solar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why businesses and communities are choosing on-site solar solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cost Savings',
                description: 'Reduce your electricity bills by generating your own power and taking advantage of net metering policies.',
                icon: '💸'
              },
              {
                title: 'Energy Independence',
                description: 'Decrease reliance on grid power and protect against rising electricity costs and outages.',
                icon: '🛡️'
              },
              {
                title: 'Sustainability',
                description: 'Lower your carbon footprint and demonstrate environmental responsibility to stakeholders.',
                icon: '🌱'
              },
              {
                title: 'Low Maintenance',
                description: 'Our solar systems require minimal maintenance with long-term reliability and performance.',
                icon: '🔧'
              },
              {
                title: 'Scalability',
                description: 'Start small and expand your system as your energy needs grow over time.',
                icon: '📈'
              },
              {
                title: 'Government Incentives',
                description: 'Take advantage of subsidies, tax benefits, and accelerated depreciation available for solar projects.',
                icon: '🏛️'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about on-site distributed solar solutions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                className="mb-4 overflow-hidden rounded-xl bg-gray-50 shadow-md"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-green-500 transform transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  className={`px-6 pb-6 ${openFaq === faq.id ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: openFaq === faq.id ? 1 : 0,
                    height: openFaq === faq.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Harness Solar Power?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free site assessment and customized solar solution proposal
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnSiteDistributedSolar;