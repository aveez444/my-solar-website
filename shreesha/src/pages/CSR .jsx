import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
import { ArrowRight } from 'lucide-react';
import Talktous from '../components/TalkToUs';
// Import images for featured projects
import SolarSchoolImage from '../assets/images/solar-school.jpg';
import AgriSolarImage from '../assets/images/agri-solar.jpg';
import UrbanRooftopImage from '../assets/images/urban-rooftop.jpg';

const CSR = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedTable, setExpandedTable] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // CSR Impact Data
  const impactStats = [
    { value: '2.5M+', label: 'Tons CO2 Reduced', icon: '🌱' },
    { value: '150+', label: 'Projects Completed', icon: '🏗️' },
    { value: '₹500Cr+', label: 'CSR Funds Deployed', icon: '💰' },
    { value: '100+', label: 'Communities Impacted', icon: '👥' },
  ];

  // Our CSR Approach
  const ourApproach = [
    {
      title: 'Strategic Alignment',
      desc: 'Aligning CSR projects with business goals and UN SDGs',
      icon: '🎯',
    },
    {
      title: 'Community Partnership',
      desc: 'Co-creating solutions with local stakeholders',
      icon: '🤝',
    },
    {
      title: 'Impact Measurement',
      desc: 'Rigorous tracking of environmental and social outcomes',
      icon: '📊',
    },
    {
      title: 'Sustainable Models',
      desc: 'Creating self-sustaining renewable ecosystems',
      icon: '♻️',
    },
  ];

  // Project Showcase with imported images
  const featuredProjects = [
    {
      title: 'Solar Schools Initiative',
      location: 'Rural Maharashtra',
      impact: '50 schools electrified, 10,000+ students benefited',
      image: SolarSchoolImage,
    },
    {
      title: 'Agri-Solar Cooperatives',
      location: 'Andhra Pradesh',
      impact: '200 farmer families with dual income streams',
      image: AgriSolarImage,
    },
    {
      title: 'Urban Rooftop Revolution',
      location: 'Bangalore',
      impact: '1MW capacity across 50 commercial buildings',
      image: UrbanRooftopImage,
    },
  ];

  // Why Choose Us
  const differentiators = [
    {
      title: 'End-to-End Execution',
      desc: 'From planning to implementation and maintenance',
      icon: '🔄',
    },
    {
      title: 'Compliance Expertise',
      desc: 'Ensuring full adherence to CSR guidelines and reporting',
      icon: '📑',
    },
    {
      title: 'Technology Integration',
      desc: 'Smart monitoring for transparent impact measurement',
      icon: '📱',
    },
    {
      title: 'Scalable Models',
      desc: 'Solutions that grow with your CSR commitments',
      icon: '📈',
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden px-4 sm:px-6">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="space-y-6 lg:space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4 lg:mb-6">
                  <span className="text-green-700 font-semibold text-sm">🌍 CSR INNOVATION</span>
                </div>
              </motion.div>
              <motion.h1
                className="text-3xl lg:text-5xl xl:text-7xl font-black text-gray-900 leading-tight"
                variants={fadeInUp}
              >
                Powering Purpose Through
                <span className="block text-green-600">Renewable Energy CSR</span>
              </motion.h1>
              <motion.p
                className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
                variants={fadeInUp}
              >
                Transform your CSR mandate into lasting environmental impact with our renewable energy solutions
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 lg:gap-4"
                variants={fadeInUp}
              >
                <a
                  href="#solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Our Approach
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 border-2 border-green-600 text-green-600 font-bold rounded-2xl hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  CSR Consultation
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative w-full aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-8 shadow-2xl flex items-center justify-center">
                  <div className="absolute z-10 w-32 h-32 bg-green-600 rounded-full flex items-center justify-center text-white text-5xl shadow-xl">
                    ♻️
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2">
                    <div className="text-2xl">🏭</div>
                    <p className="text-xs font-bold text-center text-green-700">Business</p>
                  </div>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2">
                    <div className="text-2xl">🌱</div>
                    <p className="text-xs font-bold text-center text-green-700">Environment</p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2">
                    <div className="text-2xl">👥</div>
                    <p className="text-xs font-bold text-center text-green-700">Community</p>
                  </div>
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2">
                    <div className="text-2xl">📈</div>
                    <p className="text-xs font-bold text-center text-green-700">Impact</p>
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <line x1="50" y1="15" x2="50" y2="50" stroke="#059669" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="85" y1="50" x2="50" y2="50" stroke="#059669" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="50" y1="85" x2="50" y2="50" stroke="#059669" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="15" y1="50" x2="50" y2="50" stroke="#059669" strokeWidth="1" strokeDasharray="2,2" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR Impact Section - Qualitative Benefits Focus */}
      <section id="solutions" className="py-12 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <button 
            className="lg:hidden w-full text-left p-4 bg-green-100 rounded-xl flex justify-between items-center mb-4"
            onClick={() => setExpandedSection(expandedSection === 'impact' ? null : 'impact')}
          >
            <h3 className="text-xl font-bold">CSR Impact</h3>
            <svg 
              className={`w-5 h-5 transform transition-transform ${expandedSection === 'impact' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`${expandedSection === 'impact' ? 'block' : 'hidden'} lg:block`}>
            <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
              <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-green-50 rounded-full mb-4 lg:mb-6">
                <span className="text-green-700 font-semibold text-sm lg:text-base">CSR Impact</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                Renewable Energy <span className="text-green-600">Amplifies</span> CSR Value
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Creating meaningful environmental and social impact while meeting compliance requirements
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-24">
              {[
                {
                  icon: '🌱',
                  title: "Environmental Stewardship",
                  description: "Demonstrate commitment to sustainability through clean energy initiatives"
                },
                {
                  icon: '🤝',
                  title: "Community Engagement",
                  description: "Build lasting relationships with local communities through impactful projects"
                },
                {
                  icon: '📈',
                  title: "Strategic Alignment",
                  description: "Integrate CSR with business objectives for shared value creation"
                },
                {
                  icon: '🏛️',
                  title: "Regulatory Compliance",
                  description: "Fulfill CSR obligations while creating measurable impact"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 lg:p-8 rounded-3xl shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ y: -10 }}
                >
                  <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">{benefit.icon}</div>
                  <h3 className="text-lg lg:text-xl font-bold text-green-600 mb-2 lg:mb-3">{benefit.title}</h3>
                  <p className="text-sm lg:text-base text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-6 lg:p-12 shadow-xl mb-12 lg:mb-24" data-aos="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">Strategic CSR Partnerships</h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 lg:mb-6 break-words">
                    Our renewable energy CSR solutions help corporations create meaningful environmental impact while meeting their compliance requirements. We handle all aspects from project conceptualization to implementation.
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed break-words">
                    Under India's Companies Act, eligible companies must spend 2% of average net profits on CSR activities. Renewable energy projects qualify as CSR initiatives that create lasting environmental and social benefits.
                  </p>
                </div>
                <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-md">
                  <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6 flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Our CSR Implementation Approach
                  </h4>
                  <ul className="space-y-3 lg:space-y-4">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 lg:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm lg:text-base text-gray-700">End-to-end project management for hassle-free CSR execution</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 lg:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm lg:text-base text-gray-700">Customized solutions aligned with your CSR focus areas</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 lg:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm lg:text-base text-gray-700">Comprehensive impact assessment and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 lg:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm lg:text-base text-gray-700">Community engagement and capacity building</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 lg:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm lg:text-base text-gray-700">Long-term maintenance and impact monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center" data-aos="fade-up">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Ready to create meaningful impact through your CSR initiatives?</h3>
              <a href="#contact" className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300">
                Discuss CSR Opportunities
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Redesigned */}
      <section className="py-12 lg:py-24 bg-gradient-to-br from-white to-green-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <button 
            className="lg:hidden w-full text-left p-4 bg-green-100 rounded-xl flex justify-between items-center mb-4"
            onClick={() => setExpandedSection(expandedSection === 'approach' ? null : 'approach')}
          >
            <h3 className="text-xl font-bold">Our Strategy</h3>
            <svg 
              className={`w-5 h-5 transform transition-transform ${expandedSection === 'approach' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`${expandedSection === 'approach' ? 'block' : 'hidden'} lg:block`}>
            <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
              <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-green-600 text-white rounded-full shadow-lg mb-4 lg:mb-6">
                <span className="font-semibold text-sm lg:text-base tracking-wide">Our Strategy</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Impactful CSR</span> with GreenDelta
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A dynamic approach to deliver sustainable renewable energy solutions with lasting impact
              </p>
            </div>

            <div className="max-w-5xl mx-auto relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 to-emerald-600 transform -translate-x-1/2 z-0 rounded-full"></div>
              <div className="space-y-8 lg:space-y-12">
                {ourApproach.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col lg:flex-row items-center lg:items-start group"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <div className="hidden lg:block absolute left-1/2 top-8 w-8 h-8 bg-white border-4 border-green-600 rounded-full shadow-lg transform -translate-x-1/2 z-10 transition-transform group-hover:scale-125"></div>
                    <div
                      className={`w-full lg:w-5/12 p-4 lg:p-6 ${
                        index % 2 === 0 ? 'lg:mr-auto lg:text-left' : 'lg:ml-auto lg:text-right'
                      } transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl`}
                    >
                      <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg border border-gray-100 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all duration-300">
                        <div className={`flex items-start space-x-4 lg:space-x-5 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl shadow-md">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3 tracking-tight">{item.title}</h3>
                            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section - Enhanced */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <button 
            className="lg:hidden w-full text-left p-4 bg-green-100 rounded-xl flex justify-between items-center mb-4"
            onClick={() => setExpandedSection(expandedSection === 'projects' ? null : 'projects')}
          >
            <h3 className="text-xl font-bold">Our Impact</h3>
            <svg 
              className={`w-5 h-5 transform transition-transform ${expandedSection === 'projects' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`${expandedSection === 'projects' ? 'block' : 'hidden'} lg:block`}>
            <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
              <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-green-100 rounded-full mb-4 lg:mb-6 shadow-md">
                <span className="text-green-700 font-semibold text-sm lg:text-base tracking-wide">Our Impact</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Driving Change with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">CSR Projects</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Showcasing renewable energy initiatives that transform communities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-12 lg:mb-24">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="h-48 lg:h-56 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center mb-3 lg:mb-4">
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-xs lg:text-sm font-medium text-gray-600">{project.location}</span>
                    </div>
                    <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4 tracking-tight">{project.title}</h3>
                    <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">{project.impact}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 group/link"
                      aria-label={`Read case study for ${project.title}`}
                    >
                      Read Case Study
                      <svg
                        className="w-3 h-3 lg:w-4 lg:h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us - Separated and Enhanced */}
            <div id="why-choose-us" className="py-8 lg:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="container mx-auto px-6">
                <button 
                  className="lg:hidden w-full text-left p-4 bg-green-100 rounded-xl flex justify-between items-center mb-4"
                  onClick={() => setExpandedSection(expandedSection === 'whyChooseUs' ? null : 'whyChooseUs')}
                >
                  <h3 className="text-xl font-bold">Why Choose GreenDelta</h3>
                  <svg 
                    className={`w-5 h-5 transform transition-transform ${expandedSection === 'whyChooseUs' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`${expandedSection === 'whyChooseUs' ? 'block' : 'hidden'} lg:block`}>
                  <div className="text-center mb-8 lg:mb-12" data-aos="fade-up">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-4 lg:mb-6 tracking-tight">
                      Why Choose <span className="text-green-600">GreenDelta</span> for CSR?
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Partner with us to create impactful, sustainable, and compliant CSR initiatives
                    </p>
                  </div>

                  {/* Desktop Grid View (hidden on mobile) */}
                  <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {differentiators.map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white bg-opacity-80 p-6 lg:p-8 rounded-2xl shadow-lg backdrop-blur-md hover:bg-opacity-100 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-3xl lg:text-4xl mb-3 lg:mb-4 text-green-600 drop-shadow-md">{item.icon}</div>
                        <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 tracking-tight">{item.title}</h4>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Accordion View (hidden on desktop) */}
                  <div className="lg:hidden bg-white rounded-3xl shadow-xl overflow-hidden">
                    {differentiators.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0">
                        <button 
                          className="w-full p-4 text-left font-bold flex justify-between items-center"
                          onClick={() => setExpandedTable(expandedTable === item.title ? null : item.title)}
                        >
                          <span className="text-green-700">{item.title}</span>
                          <svg 
                            className={`w-5 h-5 transform transition-transform ${expandedTable === item.title ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {expandedTable === item.title && (
                          <div className="p-4 bg-gray-50">
                            <div className="flex items-start space-x-3 mb-3">
                              <div className="text-2xl text-green-600">{item.icon}</div>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-12 lg:py-24 bg-gradient-to-r from-green-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold mb-6 lg:mb-8 leading-tight">
              Ready to <span className="text-green-300">Elevate</span> Your CSR Impact?
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-12 opacity-90 leading-relaxed">
              Collaborate with us to build renewable energy projects that drive meaningful change
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 lg:px-10 lg:py-5 bg-white text-green-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your CSR Journey
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:+917020986306"
                  className="inline-flex items-center px-8 py-4 lg:px-10 lg:py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-green-700 transition-all duration-300"
                >
                  CSR Helpline: +91 70209 86306
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact" className="pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Talktous />
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
        <div className="flex justify-around p-2">
          <a 
            href="#solutions" 
            className="flex flex-col items-center p-2 text-xs text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Impact
          </a>
          <a 
            href="#approach" 
            className="flex flex-col items-center p-2 text-xs text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Strategy
          </a>
          <a 
            href="#projects" 
            className="flex flex-col items-center p-2 text-xs text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2a2 2 0 002-2V3a2m-14 0h-2a2 2 0 00-2 2v16a2 2 0 002 2h2m7-10l-2 2 2-2zm0 4l-2-2zm0-8l-2-2z" />
            </svg>
            Projects
          </a>
          <a 
            href="#contact" 
            className="flex flex-col items-center p-2 text-xs text-gray-500"
          >
            <svg className="w-5 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default CSR;