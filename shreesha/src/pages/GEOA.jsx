import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
import Talktous from '../components/TalkToUs';

const GEOA = () => {
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

  const geoaBenefits = [
    { icon: '⚡', title: 'Direct Purchase', desc: 'Buy renewable energy directly from generators' },
    { icon: '🏢', title: 'Consumer Choice', desc: 'Choose your preferred energy source' },
    { icon: '📉', title: 'Cost Efficiency', desc: 'Potentially lower energy costs via competition' },
    { icon: '🌍', title: 'Sustainability', desc: 'Promotes renewable energy adoption' },
    { icon: '🔄', title: 'Market Competition', desc: 'Encourages open market dynamics' },
    { icon: '🏭', title: 'Large Consumers', desc: 'Ideal for high-energy industries' },
    { icon: '📊', title: 'Transparency', desc: 'Clear energy sourcing and pricing' },
    { icon: '🚀', title: 'Scalable', desc: 'Supports large-scale renewable integration' }
  ];

  const agriVoltaicsBenefits = [
    { icon: '🌾', title: 'Dual Land Use', desc: 'Combines agriculture and solar energy' },
    { icon: '☀️', title: 'Energy Generation', desc: 'Produces clean energy alongside crops' },
    { icon: '💧', title: 'Water Conservation', desc: 'Panels provide shade, reducing evaporation' },
    { icon: '🌱', title: 'Crop Protection', desc: 'Shields crops from extreme weather' },
    { icon: '📈', title: 'Increased Yield', desc: 'Optimizes land for higher productivity' },
    { icon: '👩‍🌾', title: 'Farmer Income', desc: 'Additional revenue from solar energy' },
    { icon: '🌍', title: 'Sustainability', desc: 'Supports eco-friendly farming practices' },
    { icon: '🏞️', title: 'Land Efficiency', desc: 'Maximizes land use in rural areas' }
  ];

  const geoaSteps = [
    { step: '01', title: 'Identify Generator', desc: 'Select a renewable energy provider', icon: '🔍' },
    { step: '02', title: 'Agreement Signing', desc: 'Enter into a power purchase agreement', icon: '📝' },
    { step: '03', title: 'Grid Connection', desc: 'Energy fed directly into the grid', icon: '⚡' },
    { step: '04', title: 'Energy Delivery', desc: 'Receive renewable energy at your facility', icon: '🏢' },
    { step: '05', title: 'Billing Adjustment', desc: 'Pay based on agreed terms', icon: '🧾' },
    { step: '06', title: 'Sustainability Impact', desc: 'Contribute to green energy goals', icon: '🌍' }
  ];

  const agriVoltaicsSteps = [
    { step: '01', title: 'Site Assessment', desc: 'Evaluate land for dual use', icon: '📏' },
    { step: '02', title: 'Panel Installation', desc: 'Install solar panels at optimal height', icon: '🔧' },
    { step: '03', title: 'Crop Planning', desc: 'Select crops suitable for shaded areas', icon: '🌱' },
    { step: '04', title: 'Energy Generation', desc: 'Solar panels produce electricity', icon: '☀️' },
    { step: '05', title: 'Grid Integration', desc: 'Feed excess energy to the grid', icon: '🔌' },
    { step: '06', title: 'Dual Benefits', desc: 'Harvest crops and energy simultaneously', icon: '🌾' }
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
                  <span className="text-green-700 font-semibold text-sm">🌞 GREEN ENERGY</span>
                </div>
              </motion.div>
              <motion.h1
                className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight"
                variants={fadeInUp}
              >
                Sustainable
                <span className="block text-green-600">Green Energy Solutions</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                variants={fadeInUp}
              >
                Discover Green Energy Open Access and Agri Voltaics for a sustainable future
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Solutions
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
                  {/* GEOA Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">⚡</div>
                    <h3 className="font-bold text-green-700">GEOA</h3>
                    <p className="text-xs mt-2">Direct renewable energy</p>
                  </div>
                  
                  {/* Agri Voltaics Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🌾</div>
                    <h3 className="font-bold text-green-700">Agri Voltaics</h3>
                    <p className="text-xs mt-2">Dual land use</p>
                  </div>
                  
                  {/* Placeholder Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🌍</div>
                    <h3 className="font-bold text-green-700">Sustainability</h3>
                    <p className="text-xs mt-2">Eco-friendly solutions</p>
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
                    <h3 className="font-bold text-lg mb-2">Find Your Green Path</h3>
                    <p className="text-sm opacity-90">We'll guide you to the best sustainable solution</p>
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
              <span className="text-green-700 font-semibold">Green Energy Solutions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sustainable Energy <span className="text-green-600">Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two innovative approaches to green energy adoption
            </p>
          </div>

          {/* Solutions Tabs */}
          <div className="max-w-6xl mx-auto">
            {/* GEOA Section */}
            <div className="mb-24" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">
                          ⚡
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Green Energy Open Access (GEOA)</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                          <strong className="text-green-700">Green Energy Open Access (GEOA)</strong> is a framework that enables large electricity consumers to purchase renewable energy directly from generators, bypassing DISCOMs. It empowers consumers to choose their energy source and encourages open market competition.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Direct</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Renewable</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Competitive</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Industrial</span>
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
                      {geoaBenefits.map((benefit, index) => (
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
                  How <span className="text-green-600">GEOA</span> Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {geoaSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="bg-white p-6 rounded-.Resource2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
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

            {/* Agri Voltaics Section */}
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
                      {agriVoltaicsBenefits.map((benefit, index) => (
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
                          🌾
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Agri Voltaics</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                          <strong className="text-green-700">Agri Voltaics (Agro-Photovoltaics)</strong> is the simultaneous use of land for agriculture and solar power generation. Solar panels are installed at a height or angle that allows crops to grow underneath, optimizing land use and promoting sustainable farming.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Agriculture</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Solar</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Dual-use</span>
                          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Sustainable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
                  How <span className="text-green-600">Agri Voltaics</span> Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agriVoltaicsSteps.map((step, index) => (
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
              Compare features to find the best green energy solution for you
            </p>
          </div>

          <div className="max-w-5xl mx-auto" data-aos="fade-up">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Header */}
                <div className="bg-gray-100 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="font-bold text-gray-800">Feature</h3>
                </div>
                <div className="bg-green-50 p-6 border-b md:border-b-0 border-gray-200">
                  <h3 className="font-bold text-green-700 text-center">GEOA</h3>
                </div>
                <div className="bg-emerald-50 p-6">
                  <h3 className="font-bold text-emerald-700 text-center">Agri Voltaics</h3>
                </div>

                {/* Rows */}
                {[
                  { feature: 'Best For', geoa: 'Large consumers/industries', agri: 'Farmers/rural areas' },
                  { feature: 'Location', geoa: 'Off-site (grid-connected)', agri: 'On-site (farmland)' },
                  { feature: 'Energy Source', geoa: 'Renewable (solar/wind)', agri: 'Solar' },
                  { feature: 'Land Use', geoa: 'No land required', agri: 'Dual agriculture and solar' },
                  { feature: 'Consumer Type', geoa: 'Commercial/industrial', agri: 'Agricultural' },
                  { feature: 'Complexity', geoa: 'Moderate', agri: 'Moderate' },
                  { feature: 'Benefits', geoa: 'Cost savings, choice', agri: 'Crop and energy yield' },
                ].map((row, index) => (
                  <div key={index} className="contents group">
                    {/* Feature column */}
                    <div className="bg-gray-50 p-6 border-b md:border-b-0 md:border-r border-gray-200 group-last:border-b-0">
                      <h4 className="font-medium text-gray-700">{row.feature}</h4>
                    </div>
                    {/* GEOA column */}
                    <div className="p-6 border-b md:border-b-0 border-gray-200 group-last:border-b-0">
                      <p className="text-gray-600 text-center">{row.geoa}</p>
                    </div>
                    {/* Agri Voltaics column */}
                    <div className="p-6 border-b md:border-b-0 group-last:border-b-0">
                      <p className="text-gray-600 text-center">{row.agri}</p>
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
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Embrace Green Energy?</h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
              Connect with our experts to explore GEOA and Agri Voltaics solutions
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

export default GEOA;