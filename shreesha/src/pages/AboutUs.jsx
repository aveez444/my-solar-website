import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import Talktous from '../components/TalkToUs';
import 'aos/dist/aos.css';

const AboutUs = () => {
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
    team: 0,
    affiliations: 0,
    experience: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        team: prevCount.team >= 25 ? 25 : prevCount.team + 1,
        affiliations: prevCount.affiliations >= 7 ? 7 : prevCount.affiliations + 1,
        experience: prevCount.experience >= 4 ? 4 : prevCount.experience + 1,
      }));
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Animation controls for scroll-triggered effects
  const controls = useAnimation();

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Ankit Gaikwad',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      testimonial: 'Exceptional service at unbeatable prices!',
    },
    {
      id: 2,
      name: 'Harish Sharma',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      testimonial: 'Reliable and affordable solar solutions.',
    },
    {
      id: 3,
      name: 'Priya Desai',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      testimonial: 'Transformed our energy costs with ease!',
    },
  ];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Adheer Joshi',
      position: 'Co-Founder & Director Sales',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      description: 'A visionary leader driving record-breaking growth in competitive markets.',
      strengths: [
        'Sales Strategy',
        'Strategic Planning',
        'Mergers & Acquisitions',
        'Channel Management',
      ],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      id: 2,
      name: 'Kavita Sharma Joshi',
      position: 'Director',
      image: 'https://randomuser.me/api/portraits/women/41.jpg',
      description: 'Her HR expertise has been pivotal in building Shreesha’s success.',
      strengths: [
        'Recruitment',
        'Policy Development',
        'Performance Management',
      ],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
  ];

  // Associate partners data
  const partners = [
  {
    id: 1,
    name: 'Avante Spaces Limited - Kirloskar Industries',
    logo: 'https://www.kirloskarindustries.com/image/layout_set_logo?img_id=779730&t=1747873768691',
    url: 'https://www.kirloskarindustries.com/',
  },
  {
    id: 2,
    name: 'Siemens Healthineers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Siemens_Healthineers_logo.svg/2560px-Siemens_Healthineers_logo.svg.png',
    url: 'https://www.siemens-healthineers.com/',
  },
  {
    id: 3,
    name: 'Varian',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Varian_company_logo_2017.png',
    url: 'https://www.varian.com/',
  },
  {
    id: 4,
    name: 'ESDS Software Solution Limited',
    logo: 'https://stockify.net.in/wp-content/uploads/2024/11/ESDS.jpg',
    url: 'https://www.esds.co.in/',
  },
  {
    id: 5,
    name: 'Namaste Credit',
    logo: 'https://www.amicuscapital.in/wp-content/uploads/2021/03/Namaste-Creditjpg-Copy-1.jpg',
    url: 'https://app.namastecredit.com/login',
  },
  {
    id: 6,
    name: 'Orbittal',
    logo: 'https://www.orbittalgreenenergy.com/images/logo.png',
    url: 'https://www.orbittalgreenenergy.com/',
  },
];


  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-gray-50">

    < Navbar/>

      {/* Hero Section */}
      <div 
      id="hero-section"
      className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-lg">
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold text-white mb-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                About Us
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 mb-6"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Pioneering a sustainable future with innovative solar solutions
              </motion.p>
              <motion.div
                className="flex items-center space-x-2 text-lg text-white"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                <a href="/" className="hover:text-green-400 transition-colors duration-300">
                  Home
                </a>
                <span>›</span>
                <span className="text-green-400">About Us</span>
              </motion.div>
              <motion.a
                href="#contact"
                className="mt-8 inline-block px-8 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Mission
              </motion.a>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2 bg-green-500/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
{/* Welcome Section - Modernized */}
<section className="relative py-24 bg-gradient-to-br from-white to-green-50 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-300 blur-xl"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-green-400 blur-xl"></div>
  </div>
  
  <div className="container mx-auto px-6 relative z-10">
    {/* Animated header */}
    <motion.div 
      data-aos="fade-up"
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
        <span className="text-green-700 font-medium">Renewable Energy Leaders</span>
      </div>
      <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Powering Your Future <br className="hidden md:block"/> with <span className="text-green-600">Solar Innovation</span>
      </h2>
      <div className="flex justify-center">
        <div className="w-24 h-1.5 bg-green-500 rounded-full mt-4"></div>
      </div>
    </motion.div>

    {/* Content grid with icons */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
      <motion.div
        data-aos="fade-right"
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        whileHover={{ y: -5 }}
      >
        <div className="flex items-start mb-6">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Energy Solutions</h3>
            <p className="text-gray-700 leading-relaxed">
              Shreesha Energy Solutions brings together <span className="font-medium text-green-700">top innovators in solar technology</span>, offering unparalleled expertise in PV systems, market analysis, and smart financing options tailored to your needs.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Guaranteed Performance</h3>
            <p className="text-gray-700 leading-relaxed">
              Our <span className="font-medium text-green-700">cutting-edge technology</span> and dedicated support ensure maximum ROI, with systems designed to reduce your electricity bills by 30-60% while protecting the environment.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        data-aos="fade-left"
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        whileHover={{ y: -5 }}
      >
        <div className="flex items-start mb-6">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Financing</h3>
            <p className="text-gray-700 leading-relaxed">
              Choose from our <span className="font-medium text-green-700">customizable plans</span> including OPEX, CAPEX, and CAPEX-EMI models designed to make solar energy accessible for every budget and requirement.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">End-to-End Solutions</h3>
            <p className="text-gray-700 leading-relaxed">
              From <span className="font-medium text-green-700">feasibility studies to regulatory support</span>, we handle every aspect of your solar project for residential, commercial, and industrial clients at any scale.
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* CTA with animation */}
    <motion.div
      data-aos="fade-up"
      className="mt-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="bg-white inline-block px-8 py-6 rounded-2xl shadow-md">
        <p className="text-gray-700 text-xl font-medium mb-6 max-w-2xl mx-auto">
          "Solar energy is more affordable than ever. <span className="text-green-600">Start saving today</span> while building a sustainable tomorrow."
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-full hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl"
        >
          Get Your Free Consultation
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative">
        <div className="absolute inset-0 opacity-60"> {/* Dark overlay layer */}
          <img
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold">Our Achievements</h2>
            <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: count.team, label: 'Team Members', delay: 100 },
              { value: count.affiliations, label: 'Affiliations', delay: 300 },
              { value: count.experience, label: 'Years Experience', delay: 500 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={stat.delay}
                className="text-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="text-5xl font-bold mb-4">{stat.value}+</div>
                <h3 className="text-xl">{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   {/* Team Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <div data-aos="fade-up" className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Creative Minds</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        The brilliant team behind our success - diverse, talented, and passionate about what they do.
      </p>
      <div className="w-20 h-1 bg-green-500 mx-auto mt-6"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers?.map((member) => (
        <motion.div
          key={member.id}
          data-aos="fade-up"
          data-aos-delay={member.id * 100}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <div className="p-6">
            <div className="flex flex-col items-center mb-6">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-4 
                ${member.gender === 'female' ? 'bg-pink-100 text-pink-500' : 'bg-blue-100 text-blue-500'}`}>
                {member.gender === 'female' ? '👩‍💻' : '👨‍💻'}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.position}</p>
              </div>
            </div>
            
            <div className="mb-5">
              <div className="flex justify-center space-x-2 mb-4">
                {member.skills?.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 text-center mb-5">{member.description}</p>
              
              <div className="mb-4">
                <p className="font-medium text-gray-800 text-center mb-2">Superpowers:</p>
                <ul className="space-y-2">
                  {member.strengths?.map((strength, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
              {member.socialLinks && Object.entries(member.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-colors hover:text-green-600 ${
                    platform === 'twitter' ? 'text-blue-400' :
                    platform === 'linkedin' ? 'text-blue-600' :
                    platform === 'github' ? 'text-gray-800' :
                    'text-green-500'
                  }`}
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                data-aos="fade-up"
                data-aos-delay={testimonial.id * 100}
                className="bg-gray-50 rounded-xl p-6 shadow-md"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
           {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Trusted Partners</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-5xl overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{
                    x: ['0%', '-25%', '-50%', '-75%', '-100%', '-125%', '-150%', '-175%', '0%'],
                  }}
                  transition={{
                    duration: partners.length * 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  {/* Double the array to create seamless loop */}
                  {[...partners, ...partners].map((partner, index) => (
                    <motion.div
                      key={`${partner.id}-${index}`}
                      className="flex-shrink-0 px-8"
                      style={{ width: `${100 / 4}%` }} // Show 4 logos at a time
                    >
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center group"
                      >
                        <div className="w-full h-20 mx-auto flex items-center justify-center bg-white shadow rounded">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-green-600 transition">
                          {partner.name}
                        </p>
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Gradient fade effects on sides */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            data-aos="fade-up"
            className="max-w-3xl mx-auto"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl font-bold mb-6">Join the Solar Revolution</h2>
            <p className="text-xl mb-8">
              Ready to embrace clean energy? Contact us today to discover how Shreesha Energy Solutions can transform your energy future.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
          <div className="pt-8 pb-8">
            < Talktous/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;