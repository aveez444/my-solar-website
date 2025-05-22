import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SolarImage from '../assets/images/SolarPanel3.jpg';

const SolarSystemSolutions = () => {
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
    years: 0,
    savings: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        projects: prevCount.projects >= 600 ? 600 : prevCount.projects + 10,
        years: prevCount.years >= 15 ? 15 : prevCount.years + 1,
        savings: prevCount.savings >= 70 ? 70 : prevCount.savings + 1,
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

  // Business model data
  const businessModels = [
    {
      id: 1,
      title: 'CAPEX Model',
      description: 'The CAPEX model is the most popular business model in India for solar installations. In this model, you invest upfront to own the solar system, reaping long-term savings on electricity bills. It’s ideal for those looking to maximize return on investment with full ownership.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Full system ownership',
        'Significant long-term savings',
        'Eligible for tax benefits',
        'Low maintenance costs',
      ],
      stats: [
        { value: '40-60%', label: 'Bill Reduction' },
        { value: '5-7', label: 'Year Payback' },
        { value: '25+', label: 'Year Lifespan' },
      ],
    },
    {
      id: 2,
      title: 'RESCO/BOOT/OPEX/PPA Model',
      description: 'The RESCO (Renewable Energy Service Company) or OPEX model allows you to pay only for the electricity you consume, with no upfront costs. The solar provider owns and maintains the system, making it a hassle-free option for businesses and homeowners.',
      image: 'https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      features: [
        'Zero upfront investment',
        'Pay-per-use billing',
        'Maintenance included',
        'Flexible contract terms',
      ],
      stats: [
        { value: '20-40%', label: 'Cost Savings' },
        { value: '10+', label: 'Year Contract' },
        { value: '100%', label: 'Hassle-Free' },
      ],
    },
    {
      id: 3,
      title: 'CAPEX-EMI Model',
      description: 'The CAPEX-EMI model combines the benefits of ownership with affordable monthly payments. Instead of a large upfront investment, you pay for the solar system in installments, making solar energy accessible without straining your finances.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Affordable monthly payments',
        'Eventual system ownership',
        'Customizable EMI plans',
        'Tax incentives available',
      ],
      stats: [
        { value: '30-50%', label: 'Savings' },
        { value: '3-5', label: 'Year EMI Tenure' },
        { value: '25+', label: 'Year Lifespan' },
      ],
    },
    {
      id: 4,
      title: 'Deferred CAPEX Model',
      description: 'The Deferred CAPEX model allows you to delay capital expenditure until a later date, as outlined in your budget plan. This model is ideal for businesses planning future investments while still benefiting from solar energy through structured financing.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b645fd5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      features: [
        'Delayed payment structure',
        'Budget-friendly approach',
        'Custom financing plans',
        'Long-term cost savings',
      ],
      stats: [
        { value: '25-40%', label: 'Savings' },
        { value: '1-3', label: 'Year Deferral' },
        { value: '20+', label: 'Year Durability' },
      ],
    },
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'Which business model is best for my needs?',
      answer: 'The ideal model depends on your financial goals, energy consumption, and investment capacity. Our team offers free consultations to help you choose the best option.',
    },
    {
      id: 2,
      question: 'What are the benefits of the RESCO model?',
      answer: 'The RESCO model eliminates upfront costs and includes maintenance, making it ideal for those seeking a low-risk, pay-as-you-go solution.',
    },
    {
      id: 3,
      question: 'Can I switch models later?',
      answer: 'In some cases, you can transition between models, such as moving from CAPEX-EMI to full CAPEX. Contact our team to discuss your options.',
    },
    {
      id: 4,
      question: 'How do I start with the Deferred CAPEX model?',
      answer: 'We’ll work with you to create a customized deferral plan based on your budget and energy needs, ensuring a smooth transition to solar.',
    },
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
            src={SolarImage}
            alt="Solar Energy Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full mb-6">
              <span className="text-green-400 font-medium">Business Models</span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              Solar System <span className="text-green-400">Solutions</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={textVariants}
              transition={{ delay: 0.4 }}
            >
              Flexible financing models tailored to your solar energy journey
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
              <span className="text-green-400">Solar System Solutions</span>
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
              { value: count.projects, label: 'Projects Completed', icon: '🌞' },
              { value: count.years, label: 'Years of Expertise', icon: '📅' },
              { value: count.savings, label: '% Cost Savings', icon: '💸' },
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

      {/* Business Models Section */}
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
              Financing Options
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tailored Solar Business Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of financing models designed to make solar energy accessible and cost-effective for everyone.
            </p>
          </motion.div>

          <div className="space-y-16">
            {businessModels.map((model, index) => (
              <motion.div
                key={model.id}
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
                      src={model.image}
                      alt={model.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -inset-4 border-2 border-green-500/20 rounded-xl -z-10"></div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{model.title}</h3>
                  <p className="text-gray-600 mb-6">{model.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {model.features.map((feature, idx) => (
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
                      <h4 className="font-semibold text-gray-800 mb-3">Key Metrics:</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {model.stats.map((stat, idx) => (
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
              Compare our business models to find the perfect fit for your solar energy needs.
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
                  <th className="p-4 text-left font-semibold text-gray-700">Feature</th>
                  {businessModels.map((model) => (
                    <th key={model.id} className="p-4 text-center font-semibold text-gray-700">{model.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Upfront Investment', values: ['High', 'None', 'Low', 'Deferred'] },
                  { feature: 'Ownership', values: ['Yes', 'No', 'Yes', 'Yes'] },
                  { feature: 'Maintenance', values: ['Owner', 'Provider', 'Owner', 'Owner'] },
                  { feature: 'Savings Potential', values: ['High', 'Moderate', 'Moderate', 'Moderate'] },
                  { feature: 'Best For', values: ['Long-term investors', 'No upfront budget', 'Budget-conscious', 'Future planners'] },
                  { feature: 'Payment Structure', values: ['One-time', 'Pay-per-use', 'Installments', 'Deferred'] },
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

      {/* FAQ Section */}
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
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our solar financing models.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                className="mb-4 overflow-hidden rounded-xl bg-white shadow-md"
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
                    height: openFaq === faq.id ? 'auto' : 0,
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Solar Journey Today</h2>
            <p className="text-xl mb-8">
              Get in touch for a free consultation and find the perfect financing model for your solar energy needs.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Free Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolarSystemSolutions;