import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PowerPlant from '../assets/images/Solar Panel 4.jpg';

const PowerProcurementModels = () => {
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
    clients: 0,
    capacity: 0,
    savings: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        clients: prevCount.clients >= 150 ? 150 : prevCount.clients + 5,
        capacity: prevCount.capacity >= 250 ? 250 : prevCount.capacity + 5,
        savings: prevCount.savings >= 40 ? 40 : prevCount.savings + 1,
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

  // Models data
  const procurementModels = [
    {
      id: 1,
      title: 'Third-Party Power Purchase Agreements (PPAs)',
      description: 'Third-Party PPAs allow you to avoid the upfront costs of a solar installation while still benefiting from clean energy. Under this model, a developer installs, owns, and operates the energy system on your property, and you purchase the generated power at a predetermined rate.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'No upfront capital investment required',
        'Fixed electricity costs for contract duration',
        'Developer handles maintenance and operations',
        'Immediate cost savings without ownership'
      ],
      benefits: [
        'Ideal for organizations with limited capital',
        'Reduces operational complexity',
        'Short-term commitment options available',
        'Scalable to match energy needs'
      ]
    },
    {
      id: 2,
      title: 'Captive & Group Captive Models',
      description: 'Group captive is an arrangement through which a developer sets up a power project for the collective use of multiple industrial or commercial consumers. This model offers greater savings than third-party PPAs while sharing the infrastructure costs among participants.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Shared infrastructure reduces individual costs',
        'Higher savings compared to third-party PPAs',
        'Ownership stake in the power project',
        'Customizable energy allocation'
      ],
      benefits: [
        'Ideal for industrial clusters and business parks',
        'Long-term energy cost stability',
        'Eligible for renewable energy certificates',
        'Better ROI than third-party models'
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={PowerPlant}
            alt="Solar Power Plant"
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
              <span className="text-green-400 font-medium">Energy Solutions</span>
            </div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              Power Procurement <span className="text-green-400">Models</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={textVariants}
              transition={{ delay: 0.4 }}
            >
              Flexible open access solutions for your energy procurement needs
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
              <span className="text-green-400">Power Procurement Models</span>
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
          <motion.div 
            className="text-center mb-12"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Open Access Power Procurement?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible solutions that adapt to your organization's energy requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: count.clients, label: 'Satisfied Clients', icon: '🤝' },
              { value: count.capacity, label: 'MW Managed Capacity', icon: '⚡' },
              { value: count.savings, label: '% Average Savings', icon: '💰' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-sm"
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

      {/* Models Section */}
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
              Our Models
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Power Procurement Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the model that best fits your organization's energy strategy
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Model Selector - Left Side */}
            <motion.div
              className="lg:w-1/4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-4 sticky top-8">
                {procurementModels.map((model) => (
                  <motion.button
                    key={model.id}
                    whileHover={{ x: 10, backgroundColor: '#10B981', color: '#FFFFFF' }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full text-left p-4 rounded-lg transition-colors shadow-md ${
                      model.id === 1 ? 'bg-green-600 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="text-lg font-semibold">{model.title.split(' (')[0]}</h3>
                    <p className="text-sm mt-1 opacity-80">{model.title.includes('(') ? `(${model.title.split('(')[1]}` : ''}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Model Content - Right Side */}
            <div className="lg:w-3/4 space-y-8">
              {procurementModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative w-full h-80">
                    <img
                      src={model.image}
                      alt={model.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{model.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{model.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {model.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {model.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <motion.a
                      href="#contact"
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Model Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand the differences between our power procurement options
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-semibold text-gray-700">Criteria</th>
                  {procurementModels.map((model) => (
                    <th key={model.id} className="p-4 text-center font-semibold text-gray-700">{model.title.split(')')[0].split('(').pop()})</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Upfront Investment', values: ['None', 'Shared among group'] },
                  { feature: 'Savings Potential', values: ['Moderate (15-25%)', 'High (25-40%)'] },
                  { feature: 'Ownership', values: ['Developer owns system', 'Shared ownership'] },
                  { feature: 'Maintenance Responsibility', values: ['Developer', 'Shared among group'] },
                  { feature: 'Contract Duration', values: ['5-15 years', '10-25 years'] },
                  { feature: 'Ideal For', values: ['Single facilities', 'Industrial clusters/business parks'] },
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-gray-800 border-b border-gray-200">{row.feature}</td>
                    {row.values.map((value, colIndex) => (
                      <td key={colIndex} className="p-4 text-center text-gray-600 border-b border-gray-200">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Power Procurement?</h2>
            <p className="text-xl mb-8">
              Our energy experts will help you select the ideal model for your organization's needs
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
 SFR              Schedule a Consultation
            </motion.a>
          </motion.div>
        </div>
        
      </section>
            <div className="pt-8 pb-8">
                        <Talktous/>
                      </div>
    </div>
  );
};

export default PowerProcurementModels;