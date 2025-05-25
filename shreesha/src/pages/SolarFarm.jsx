import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
//import SolarFarmHero from '../assets/images/Off Site Solar Farm_1.jpg';
import SolarFarm1 from '../assets/solar1.jpg';
import SolarFarm2 from '../assets/solar2.jpg';
import SolarFarm3 from '../assets/solar3.jpg';
import Talktous from '../components/TalkToUs';
import offSiteSolarFarm2 from "/src/assets/images/Off Site Solar Farm_1.jpg";
import offSiteSolarFarm3 from "/src/assets/images/Off Site Solar Farm_3.jpg";

const SolarFarm = () => {
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
    capacity: 0,
    projects: 0,
    communities: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        capacity: prevCount.capacity >= 250 ? 250 : prevCount.capacity + 5,
        projects: prevCount.projects >= 50 ? 50 : prevCount.projects + 1,
        communities: prevCount.communities >= 100 ? 100 : prevCount.communities + 2,
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

  // Solar farm benefits
  const benefits = [
    {
      id: 1,
      title: 'Community Solar',
      description: 'Participate in solar energy without installing panels on your property. Perfect for renters or homes with shading issues.',
      icon: '🏘️',
      stats: [
        { value: '10-15%', label: 'Savings on electricity' },
        { value: 'No upfront', label: 'Cost' },
        { value: 'Flexible', label: 'Participation' }
      ]
    },
    {
      id: 2,
      title: 'Utility-Scale Projects',
      description: 'Large solar farms that feed clean energy directly into the grid, powering thousands of homes and businesses.',
      icon: '🏭',
      stats: [
        { value: '5MW+', label: 'Capacity' },
        { value: '24/7', label: 'Monitoring' },
        { value: 'Grid', label: 'Integration' }
      ]
    },
    {
      id: 3,
      title: 'Corporate Partnerships',
      description: 'Businesses can meet sustainability goals by investing in off-site solar projects through PPAs or virtual net metering.',
      icon: '🏢',
      stats: [
        { value: '100%', label: 'RE goals' },
        { value: 'Fixed', label: 'Energy costs' },
        { value: 'Tax', label: 'Benefits' }
      ]
    }
  ];

  // Project showcase
  const projects = [
    {
      id: 1,
      name: 'Sun Valley Solar Farm',
      location: 'Arizona, USA',
      capacity: '150 MW',
      homes: '30,000',
      image: SolarFarm1,
      features: [
        'Dual-axis tracking',
        'Battery storage',
        'Community ownership'
      ]
    },
    {
      id: 2,
      name: 'Greenfield Solar Park',
      location: 'Texas, USA',
      capacity: '225 MW',
      homes: '45,000',
      image: SolarFarm2,
      features: [
        'Agrivoltaic design',
        'Pollinator habitats',
        'Local job creation'
      ]
    },
    {
      id: 3,
      name: 'Horizon Renewable Project',
      location: 'Nevada, USA',
      capacity: '300 MW',
      homes: '60,000',
      image: SolarFarm3,
      features: [
        'Floating solar',
        'Water conservation',
        'Tribal partnership'
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How does off-site solar work?',
      answer: 'Off-site solar allows you to benefit from solar energy generated at a remote location through credits applied to your utility bill or direct energy purchases.'
    },
    {
      id: 2,
      question: 'What are the financial benefits?',
      answer: 'Participants typically save 10-20% on electricity costs with no upfront investment, while businesses can lock in long-term energy price stability.'
    },
    {
      id: 3,
      question: 'How long are the contracts?',
      answer: 'Community solar contracts typically range from 1-5 years, while corporate PPAs often span 10-25 years depending on the project scale.'
    }
  ];

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-gray-50">

      < Navbar/>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">

          <img
            src={offSiteSolarFarm2}
            alt="Solar Farm"
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
              <span className="text-green-400 font-medium">Utility-Scale Solar</span>
            </div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              Off-Site <span className="text-green-400">Solar Farms</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg"
              variants={textVariants}
              transition={{ delay: 0.4 }}
            >
              Power your home or business with renewable energy from large-scale solar installations
            </motion.p>
            
            <motion.div
              variants={textVariants}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#benefits"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Benefits
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.a>
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
              { value: count.capacity, label: 'Megawatts Installed', icon: '⚡' },
              { value: count.projects, label: 'Completed Projects', icon: '🏗️' },
              { value: count.communities, label: 'Communities Served', icon: '👥' },
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

      <section className="relative py-24 bg-gradient-to-br from-white to-green-50 overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/3">
        <motion.div
          data-aos="fade-left"
          className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
<img
  src={offSiteSolarFarm3}
  alt="Solar Farm Installation"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-2xl font-bold text-white">
            Solar Farm Solutions
          </div>
        </motion.div>

        <motion.div
          data-aos="fade-right"
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-medium">What Are Solar Farms?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Large-Scale <span className="text-green-600">Solar Energy</span>
          </h2>
          <p className="text-lg text-gray-600">
            Solar farms are large-scale photovoltaic systems that generate clean energy for multiple consumers. These off-site installations allow businesses to benefit from solar power without needing rooftop space, providing a scalable solution for organizations with high energy demands or limited on-site solar potential.
          </p>
          <p className="text-lg text-gray-600">
            Through open access regulations, businesses can procure power directly from solar farms at competitive rates, often significantly lower than grid electricity. This model is particularly advantageous for industrial and commercial consumers looking to reduce operational costs while meeting sustainability goals.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  📈
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Scalable Energy Solutions</h3>
                <p className="text-gray-600">
                  Solar farms offer virtually unlimited capacity, allowing businesses to scale their renewable energy usage as needed, with potential savings of 30-50% compared to conventional power sources.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  🌍
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainability at Scale</h3>
                <p className="text-gray-600">
                  Our solar farm solutions help businesses achieve their ESG goals by providing clean energy at scale, with measurable reductions in carbon footprint and environmental impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="lg:w-1/3">
        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 sticky">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
            Our Offerings In Financing & Models
          </h3>

          <div className="space-y-4 mb-8">
            {[
              {name: "Off-Site / Solar Farm", link: "/offsite", active: true},
              {name: "Third-Party PPAs", link: "/ppa"},
              {name: "Captive & Group Captive", link: "/cap"},
              {name: "CAPEX Solar Model", link: "/capex"},
              {name: "RESCO/BOOT Model", link: "/resco"},
              {name: "CAPEX-EMI Model", link: "/capexemi"},
              {name: "Deferred CAPEX Model", link: "/deferred"}
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200 group ${
                  item.active ? "bg-green-100 hover:bg-green-200" : "bg-green-50 hover:bg-green-100"
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors duration-200 ${
                    item.active ? "bg-green-200 group-hover:bg-green-300" : "bg-green-100 group-hover:bg-green-200"
                  }`}>
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className={`font-medium transition-colors duration-200 ${
                    item.active ? "text-green-700" : "text-gray-700 group-hover:text-green-600"
                  }`}>
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
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
              Advantages
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Off-Site Solar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of solar energy without the need for rooftop installations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                
                <div className="grid grid-cols-3 gap-2">
                  {benefit.stats.map((stat, idx) => (
                    <div key={idx} className="bg-green-50 p-2 rounded-lg text-center">
                      <div className="text-lg font-bold text-green-600">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
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
              Featured Solar Farms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of large-scale solar installations
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
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
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -inset-4 border-2 border-green-500/20 rounded-xl -z-10"></div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{project.location}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{project.capacity}</div>
                      <div className="text-sm text-gray-600">Capacity</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{project.homes}</div>
                      <div className="text-sm text-gray-600">Homes Powered</div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn About Participation
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

      {/* How It Works */}
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
              Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Off-Site Solar Works
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute left-1/2 h-full w-0.5 bg-green-200 transform -translate-x-1/2"></div>
              
              {[
                {
                  step: 1,
                  title: 'Project Development',
                  description: 'We identify optimal locations and secure permits for solar farm construction',
                  icon: '📋'
                },
                {
                  step: 2,
                  title: 'Construction',
                  description: 'Our team installs high-efficiency solar panels and supporting infrastructure',
                  icon: '🏗️'
                },
                {
                  step: 3,
                  title: 'Grid Connection',
                  description: 'The solar farm is connected to the local utility grid',
                  icon: '🔌'
                },
                {
                  step: 4,
                  title: 'Energy Distribution',
                  description: 'Clean energy flows to the grid and participants receive credits',
                  icon: '⚡'
                }
              ].map((item, index) => (
                <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  <div className={`${index % 2 === 0 ? 'mr-8' : 'ml-8'} w-1/2`}>
                    <motion.div
                      className="p-6 bg-white rounded-xl shadow-md h-full"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold relative z-10`}>
                    {item.step}
                  </div>
                </div>
              ))}
            </motion.div>
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
              Solar Farm Questions
            </h2>
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
            <h2 className="text-4xl font-bold mb-6">Join the Solar Revolution</h2>
            <p className="text-xl mb-8">
              Whether you're a homeowner, business, or community, we have an off-site solar solution for you
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#benefits"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
            <div className="pt-8 pb-8">
                        <Talktous/>
                      </div>
    </div>
  );
};

export default SolarFarm;