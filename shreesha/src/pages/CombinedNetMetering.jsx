import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
import Talktous from '../components/TalkToUs';
import VideoDownloadSection from '../components/VideoDownloadSection';

const CombinedNetMetering = () => {
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
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const netMeteringBenefits = [
    { icon: '💰', title: 'Bill Reduction', desc: 'Significant reduction in electricity bills' },
    { icon: '🌱', title: 'Renewable Energy', desc: 'Promotes use of clean energy sources' },
    { icon: '👣', title: 'Carbon Footprint', desc: 'Reduces your environmental impact' },
    { icon: '🏠', title: 'Energy Independence', desc: 'Less reliance on grid electricity' },
    { icon: '📊', title: 'Simple Billing', desc: 'Easy-to-understand electricity billing' },
    { icon: '⏱️', title: 'Faster ROI', desc: 'Quick return on solar investment' },
    { icon: '🏙️', title: 'Urban Solution', desc: 'Ideal for rooftop solar in cities' },
    { icon: '🔋', title: 'Grid Support', desc: 'Reduces pressure during peak hours' }
  ];

  const vnmBenefits = [
    { icon: '🏢', title: 'No Rooftop Needed', desc: 'Access solar without rooftop ownership' },
    { icon: '👨‍👩‍👧‍👦', title: 'Community Sharing', desc: 'Shared savings between multiple users' },
    { icon: '📉', title: 'Lower CAPEX', desc: 'Reduced cost per user through pooling' },
    { icon: '🌇', title: 'Urban Friendly', desc: 'Ideal for apartments and dense areas' },
    { icon: '🤝', title: 'Collaborative', desc: 'Encourages community green initiatives' },
    { icon: '⚡', title: 'Grid Reliability', desc: 'Improves with distributed solar' },
    { icon: '💵', title: 'Affordable', desc: 'Makes solar accessible to more people' },
    { icon: '🚀', title: 'Scalable', desc: 'Fast renewable adoption in cities' }
  ];

  const gnmBenefits = [
    { icon: '👥', title: 'Multi-Meter Sharing', desc: 'Energy sharing across multiple meters' },
    { icon: '💸', title: 'Cost Reduction', desc: 'Lowers energy costs for institutions' },
    { icon: '🏢', title: 'Centralized Setup', desc: 'Single solar plant for multiple locations' },
    { icon: '🏫', title: 'Campus Solution', desc: 'Perfect for universities and hospitals' },
    { icon: '📊', title: 'Simplified Accounting', desc: 'Easy energy tracking across branches' },
    { icon: '🌍', title: 'Sustainability', desc: 'Boosts green credentials for businesses' },
    { icon: '🤝', title: 'Joint Investment', desc: 'Shared funding for energy projects' },
    { icon: '⚡', title: 'Grid Independence', desc: 'Reduces reliance on conventional power' }
  ];

  const netMeteringSteps = [
    { step: '01', title: 'Meter Installation', desc: 'Bi-directional meter installed at location', icon: '📟' },
    { step: '02', title: 'Solar Generation', desc: 'Solar system generates electricity', icon: '☀️' },
    { step: '03', title: 'Self-Consumption', desc: 'Home uses solar power first', icon: '🏠' },
    { step: '04', title: 'Excess Export', desc: 'Extra energy sent to grid', icon: '⬆️' },
    { step: '05', title: 'Grid Import', desc: 'Additional power drawn from grid when needed', icon: '⬇️' },
    { step: '06', title: 'Net Calculation', desc: 'Bill based on (Import - Export)', icon: '🧮' }
  ];

  const vnmSteps = [
    { step: '01', title: 'Plant Installation', desc: 'Central solar plant installed off-site', icon: '🏗️' },
    { step: '02', title: 'Energy Generation', desc: 'Solar energy fed into the grid', icon: '⚡' },
    { step: '03', title: 'Credit Allocation', desc: 'DISCOM allocates credits to members', icon: '📋' },
    { step: '04', title: 'Proportional Share', desc: 'Credits divided based on shareholding', icon: '📊' },
    { step: '05', title: 'Bill Adjustment', desc: 'Credits applied to monthly bills', icon: '🧾' },
    { step: '06', title: 'Community Savings', desc: 'All members benefit collectively', icon: '👨‍👩‍👧‍👦' }
  ];

  const gnmSteps = [
    { step: '01', title: 'System Installation', desc: 'Solar plant at optimal group location', icon: '🔌' },
    { step: '02', title: 'Energy Generation', desc: 'Solar energy produced and fed to grid', icon: '☀️' },
    { step: '03', title: 'Data Submission', desc: 'Generation data sent to DISCOM', icon: '📤' },
    { step: '04', title: 'Credit Distribution', desc: 'Credits allocated across group meters', icon: '📊' },
    { step: '05', title: 'Bill Adjustment', desc: 'Credits applied to each account', icon: '🧾' },
    { step: '06', title: 'Group Savings', desc: 'All members benefit from shared solar', icon: '💰' }
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                  <span className="text-green-700 font-semibold text-sm">🌞 SOLAR SOLUTIONS</span>
                </div>
              </motion.div>
              <motion.h1
                className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight"
                variants={fadeInUp}
              >
                Comprehensive
                <span className="block text-green-600">Net Metering Solutions</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                variants={fadeInUp}
              >
                Explore all net metering options - from individual to community and group solutions for every need
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View All Solutions
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-bold rounded-2xl hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  Get Consultation
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {/* Net Metering Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🏠</div>
                    <h3 className="font-bold text-green-700">Net Metering</h3>
                    <p className="text-xs mt-2">Individual systems</p>
                  </div>
                  
                  {/* VNM Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🏢</div>
                    <h3 className="font-bold text-green-700">VNM</h3>
                    <p className="text-xs mt-2">Community sharing</p>
                  </div>
                  
                  {/* GNM Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">👥</div>
                    <h3 className="font-bold text-green-700">GNM</h3>
                    <p className="text-xs mt-2">Group solutions</p>
                  </div>
                  
                  {/* Visual Connections */}
                  <div className="col-span-3 relative h-20">
                    <div className="absolute top-0 left-1/2 w-1 h-full bg-green-200 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-200 transform -translate-y-1/2"></div>
                    
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-0 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-4 h-4 bg-green-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                  
                  {/* Bottom Card */}
                  <div className="col-span-3 bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl text-white">
                    <h3 className="font-bold text-lg mb-2">Find Your Perfect Fit</h3>
                    <p className="text-sm opacity-90">We'll help you choose the right solution for your needs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Overview Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-6 py-3 bg-green-50 rounded-full mb-6">
              <span className="text-green-700 font-semibold">Solar Solutions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Net Metering <span className="text-green-600">Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three approaches to solar energy sharing and billing
            </p>
          </div>

          {/* Solutions Tabs */}
          <div className="max-w-6xl mx-auto">
            {/* Net Metering Section */}
            <div className="mb-24" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">
                          🏠
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Net Metering Consumption</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                          <strong className="text-green-700">Net metering</strong> is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If a residential customer has a solar panel on their rooftop, it may generate more electricity than the home uses during daylight hours. With net metering, the excess energy is sent back to the grid, and the consumer receives credit against their electricity bill.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Individual</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Rooftop</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Bill Credits</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Simple</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {netMeteringBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-xl">
                          <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                          <div>
                            <h5 className="font-bold text-gray-800">{benefit.title}</h5>
                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
                  How <span className="text-green-600">Net Metering</span> Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {netMeteringSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold">
                          {step.step}
                        </div>
                        <div className="text-2xl">{step.icon}</div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <VideoDownloadSection />

            {/* VNM Section */}
            <div className="mb-24" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vnmBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-xl">
                          <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                          <div>
                            <h5 className="font-bold text-gray-800">{benefit.title}</h5>
                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">
                          🏢
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Virtual Net Metering (VNM)</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                          <strong className="text-green-700">Virtual Net Metering (VNM)</strong> allows multiple consumers to benefit from a single solar power plant located at a different location. It is ideal for apartment complexes, gated communities, and institutions where space is limited or shared. The generated energy is fed into the grid, and DISCOM allocates power credits proportionally to registered consumers.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Community</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Off-site</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Shared</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Urban</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
                  How <span className="text-green-600">VNM</span> Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vnmSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold">
                          {step.step}
                        </div>
                        <div className="text-2xl">{step.icon}</div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* GNM Section */}
            <div className="mb-24" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">
                          👥
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Group Net Metering (GNM)</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                          <strong className="text-green-700">Group Net Metering (GNM)</strong> allows a group of electricity consumers (same legal entity or related entities) to install a common solar plant and share the generated energy credits across multiple electricity meters. This innovative approach enables institutions, campuses, and multi-location businesses to collectively benefit from solar energy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Institutional</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Multi-meter</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Centralized</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Campus</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {gnmBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-xl">
                          <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                          <div>
                            <h5 className="font-bold text-gray-800">{benefit.title}</h5>
                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
                  How <span className="text-green-600">GNM</span> Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gnmSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold">
                          {step.step}
                        </div>
                        <div className="text-2xl">{step.icon}</div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-6 py-3 bg-white rounded-full shadow-md mb-6">
              <span className="text-green-700 font-semibold">Solution Comparison</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choosing the <span className="text-green-600">Right Option</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare features to find the best fit for your situation
            </p>
          </div>

          <div className="max-w-5xl mx-auto" data-aos="fade-up">
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-4">
      {/* Header */}
      <div className="bg-gray-100 p-6 border-b md:border-b-0 md:border-r border-gray-200">
        <h3 className="font-bold text-gray-800">Feature</h3>
      </div>
      <div className="bg-green-50 p-6 border-b md:border-b-0 border-gray-200">
        <h3 className="font-bold text-green-700 text-center">Net Metering</h3>
      </div>
      <div className="bg-emerald-50 p-6 border-b md:border-b-0 border-gray-200">
        <h3 className="font-bold text-emerald-700 text-center">VNM</h3>
      </div>
      <div className="bg-teal-50 p-6">
        <h3 className="font-bold text-teal-700 text-center">GNM</h3>
      </div>

      {/* Rows */}
      {[
        { feature: 'Best For', net: 'Individual homeowners', vnm: 'Apartments/communities', gnm: 'Institutions/campuses' },
        { feature: 'Location', net: 'On-site', vnm: 'Off-site', gnm: 'Any group location' },
        { feature: 'Meters', net: 'Single', vnm: 'Multiple (unrelated)', gnm: 'Multiple (related)' },
        { feature: 'Ownership', net: 'Individual', vnm: 'Shared/community', gnm: 'Group/entity' },
        { feature: 'Space Needed', net: 'Rooftop required', vnm: 'No rooftop needed', gnm: 'Central location' },
        { feature: 'Complexity', net: 'Simple', vnm: 'Moderate', gnm: 'Complex' },
        { feature: 'Regulatory', net: 'Widely available', vnm: 'Limited availability', gnm: 'State-specific' },
      ].map((row, index) => (
        <div key={index} className="contents group">
          {/* Feature column */}
          <div className="bg-gray-50 p-6 border-b md:border-b-0 md:border-r border-gray-200 group-last:border-b-0">
            <h4 className="font-medium text-gray-700">{row.feature}</h4>
          </div>
          {/* Net Metering column */}
          <div className="p-6 border-b md:border-b-0 border-gray-200 group-last:border-b-0">
            <p className="text-gray-600 text-center">{row.net}</p>
          </div>
          {/* VNM column */}
          <div className="p-6 border-b md:border-b-0 border-gray-200 group-last:border-b-0">
            <p className="text-gray-600 text-center">{row.vnm}</p>
          </div>
          {/* GNM column */}
          <div className="p-6 border-b md:border-b-0 group-last:border-b-0">
            <p className="text-gray-600 text-center">{row.gnm}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Go Solar?</h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
              Connect with our experts to find the perfect net metering solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-10 py-5 bg-white text-green-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Expert Consultation
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Call Now: +91 70209 86306
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact" className="pt-8 pb-8">
        <Talktous />
      </div>
    </div>
  );
};

export default CombinedNetMetering;
