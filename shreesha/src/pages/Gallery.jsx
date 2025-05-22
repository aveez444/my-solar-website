import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import bgimage from '../assets/images/sam.jpg';
import bg1image from '../assets/images/sam.jpg';

import a1 from '../assets/images/Gallery/a1.jpeg';
import a2 from '../assets/images/Gallery/a2.jpeg';
import a3 from '../assets/images/Gallery/a3.jpeg';
import a4 from '../assets/images/Gallery/a4.jpeg';

import b1 from '../assets/images/Gallery/b1.jpeg';
import b2 from '../assets/images/Gallery/b2.jpeg';

import c1 from '../assets/images/Gallery/c1.jpeg';
import c2 from '../assets/images/Gallery/c2.jpeg';
import c3 from '../assets/images/Gallery/c3.jpeg';

import d1 from '../assets/images/Gallery/d1.jpeg';
import d2 from '../assets/images/Gallery/d2.jpeg';
import d3 from '../assets/images/Gallery/d3.jpeg';
import d4 from '../assets/images/Gallery/d4.jpeg';

import e1 from '../assets/images/Gallery/e1.jpeg';
import e2 from '../assets/images/Gallery/e2.jpeg';

import f1 from '../assets/images/Gallery/f1.jpeg';
import f2 from '../assets/images/Gallery/f2.jpeg';


const galleryItems = [
  {
    title: "Residential - 5kW On-Grid Terrace Installation",
    date: "22 Apr 2025",
    desc: `
      5kW on-grid solar system installed on residential terrace in Pune.
      Uses JA Solar 540W panels with Microtek inverter for optimal efficiency.
      System generates approximately 600 units monthly, covering 90% of household needs.
      Annual savings of ₹45,000 with simple payback period of 5 years.
      Net metering allows exporting excess power to grid.
    `,
    images: [  
      a1,a2,a3,a4
    ]
  },
  {
    title: "Residential - 3kW Off-Grid Terrace System",
    desc: `
      3kW off-grid solar installation for  residence with battery backup.
      Includes Luminous 150Ah batteries providing 8 hours backup.
      Uses Vikram Solar 330W panels with Luminous inverter-charger.
      Completely eliminates power outages, ideal for areas with frequent cuts.
      System designed for easy expansion if energy needs increase.
    `,
    images: [
      b1,b2
    ]
  },
  {
    title: "Business - 20kW On-Grid Commercial Installation",
    desc: `
      20kW on-grid solar plant for Pune-based small business.
      Features Waaree 450W bifacial panels with Fronius inverter.
      Covers 70% of daytime energy needs, reducing operational costs.
      Annual savings of ₹1.8 lakhs with 5-year ROI.
      Robust mounting structure designed for Pune's monsoon conditions.
    `,
    images: [
      c1,c2,c3
    ]
  },
  {
    title: "Residential - 10kW Rooftop Solar Plant",
    date: "20 Feb 2025",
    desc: `
      10kW premium rooftop installation for Pune villa.
      Uses Canadian Solar HiDM 420W panels with Huawei inverter.
      Smart monitoring system provides real-time performance data.
      Annual generation of 14,000 units with 25-year performance warranty.
      Elegant black-on-black panels blend with roof aesthetics.
    `,
    images: [
      d1,d2,d3,d4
    ]
  },
  {
    title: "Residential - Solar Garden Lighting",
    desc: `
      Complete solar lighting solution for Pune residence garden.
      Includes 12 pathway lights (10W each) and 8 decorative flowerpot lights.
      All fixtures with automatic dusk-to-dawn operation.
      Eliminates wiring needs and reduces outdoor electricity bill to zero.
      Weatherproof design suitable for Pune's climate.
    `,
    images: [
      e1,e2
    ]
  },
  {
    title: "Solar Street Light Installation",
    desc: `
      Solar street lighting project in Pune neighborhood.
      15 units installed with 30W panels and 20Ah batteries each.
      Provides 12 hours illumination with motion sensing capability.
      Pole-mounted design withstands winds up to 120kmph.
      Maintenance-free solution with 5-year warranty.
    `,
    images: [
      f1,f2
    ]
  }
];
// Blog posts data with full descriptions
const blogPosts = [
  {
    id: 1,
    date: "May 15, 2025",
    category: "PEOPLE",
    title: "Welcoming New Team Members from Papercup",
    excerpt: "At Scale, we believe great people are the foundation of great AI. Today, we’re excited to welcome the group of new team members from Papercup.",
    fullDescription: "At Scale, we believe great people are the foundation of great AI. Today, we’re excited to welcome the group of new team members from Papercup, a London-based company that built an impressive AI dubbing platform. This talented team brings a wealth of expertise in AI and machine learning, which will significantly enhance our capabilities in developing innovative solar solutions. Their experience in creating scalable, user-focused technology aligns perfectly with our mission to make solar energy accessible to everyone. We look forward to collaborating with them to push the boundaries of what’s possible in renewable energy.",
    image: "https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    date: "May 10, 2025",
    category: "TECHNOLOGY",
    title: "Advancements in Solar Panel Efficiency",
    excerpt: "Our latest solar panels achieve 23% efficiency, setting a new industry standard for residential installations.",
    fullDescription: "Our latest solar panels achieve 23% efficiency, setting a new industry standard for residential installations. This breakthrough is the result of years of research and development, focusing on improving photovoltaic cell technology. By utilizing advanced materials and optimizing the panel design, we’ve increased energy output while reducing the overall cost per watt. These panels are now more efficient at converting sunlight into electricity, even in low-light conditions, making solar power a viable option for a wider range of climates and regions. Homeowners can expect significant savings on their energy bills and a reduced carbon footprint.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    date: "May 5, 2025",
    category: "SUSTAINABILITY",
    title: "Reducing Carbon Footprint with Solar",
    excerpt: "Learn how our customers have reduced CO2 emissions by thousands of tons through solar adoption.",
    fullDescription: "Learn how our customers have reduced CO2 emissions by thousands of tons through solar adoption. By switching to solar energy, households and businesses are making a significant impact on the environment. Our data shows that the average SOLAREX customer reduces their carbon footprint by 5 tons of CO2 annually, equivalent to planting 120 trees. This reduction not only helps combat climate change but also improves air quality in local communities. We’re proud to support our customers in their journey toward sustainability, providing them with tools and insights to maximize their environmental impact.",
    image: "https://images.unsplash.com/photo-1510121872562-8d52d34b110b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    date: "April 28, 2025",
    category: "INNOVATION",
    title: "Smart Solar Systems for Modern Homes",
    excerpt: "Our AI-powered solar systems optimize energy usage based on your household patterns.",
    fullDescription: "Our AI-powered solar systems optimize energy usage based on your household patterns. By integrating machine learning algorithms, these systems analyze your energy consumption habits and adjust power distribution in real-time. For example, they can prioritize powering high-usage appliances during peak solar production hours, ensuring maximum efficiency. The system also learns from weather patterns to predict solar output and store excess energy in batteries for later use. This innovation not only reduces energy waste but also lowers utility bills, making solar a smarter choice for modern homes.",
    image: "https://plus.unsplash.com/premium_photo-1680302170723-1318f0a8859b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     },
];

// Customer reviews data


const SolarEx = () => {
  const heroRef = useRef();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [energySaved, setEnergySaved] = useState(0);
  const [expandedPosts, setExpandedPosts] = useState({});
  const [currentImageIndices, setCurrentImageIndices] = useState(
    galleryItems.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices(prevIndices => {
        const newIndices = {};
        galleryItems.forEach((item, index) => {
          newIndices[index] = (prevIndices[index] + 1) % item.images.length;
        });
        return newIndices;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setObserverLoaded((prev) => [...prev, entry.target.dataset.src]);
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-src]").forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

  // Energy savings counter
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setEnergySaved((prev) => {
        if (prev >= 5000) {
          clearInterval(counterInterval);
          return 5000;
        }
        return prev + 50;
      });
    }, 50);
    return () => clearInterval(counterInterval);
  }, []);

  // Toggle expanded state for blog posts
  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  // Animation variants
  const heroImageVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 2, 
        ease: "easeOut" 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, letterSpacing: "0.2em" },
    visible: { 
      opacity: 1, 
      y: 0, 
      letterSpacing: "0em",
      transition: { 
        duration: 1, 
        ease: "easeOut",
        letterSpacing: { duration: 1.5 }
      } 
    }
  };

  const sunVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.7, 1, 0.7],
      boxShadow: [
        "0 0 20px 10px rgba(255, 191, 0, 0.5)",
        "0 0 40px 20px rgba(255, 191, 0, 0.8)",
        "0 0 20px 10px rgba(255, 191, 0, 0.5)"
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const blogCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const blogImageVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: "easeOut"
      }
    }
  };

  const starVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Diagonal Half-Cross Image */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Image with Diagonal Split */}
        <motion.div 
          className="absolute inset-0"
          variants={heroImageVariants}
          initial="initial"
          animate="animate"
        >
          {/* First Half of Image (Top-Left to Bottom-Right Diagonal) */}
      <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 0)', // Diagonal from bottom-right to top-left
              backgroundImage: `url(${bg1image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Second Half of Image (Bottom-Right to Top-Left Diagonal) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)', // Diagonal from top-left to bottom-right
              backgroundImage: `url(${bgimage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.5 // Semi-transparent for contrast
            }}
          />
         
        </motion.div>

        {/* Enhanced Glowing Sun Element */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 bg-yellow-400 rounded-full"
          variants={sunVariants}e
          animate="animate"
        />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <motion.h2
            className="text-xl md:text-2xl font-medium mb-4 text-green-400"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Renewable Energy
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Powering a Cleaner,<br />Greener Future
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            Discover customized solar solutions that slash energy bills<br />
            and shrink your carbon footprint.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#22c55e" }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg"
            >
              Get Your Free Consultation
            </motion.button>
          </motion.div>
        </div>


        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiChevronDown className="w-8 h-8 text-green-400" />
        </motion.div>
      </section>

      {/* Energy Savings Counter */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="bg-gray-900 rounded-xl p-8 max-w-md mx-auto"
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Energy Saved This Year
            </h3>
            <motion.div
              className="text-5xl font-bold text-white mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {energySaved.toLocaleString()} kWh
            </motion.div>
            <p className="text-gray-300">
              Equivalent to planting {Math.floor(energySaved / 100)} trees!
            </p>
          </motion.div>
        </div>
      </section>

    {/* Blog Section - Side by Side with 2 Columns */}
      <section className="blog-section py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-green-400 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Latest Solar Insights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                variants={blogCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="h-60 overflow-hidden rounded-t-xl"
                  variants={blogImageVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <motion.div
                    className="flex items-center text-sm text-gray-400 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-green-400">{post.category}</span>
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-white mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {post.title}
                  </motion.h3>
                  <motion.p
                    className={`text-gray-300 mb-4 ${expandedPosts[post.id] ? '' : 'line-clamp-2'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {expandedPosts[post.id] ? post.fullDescription : post.excerpt}
                  </motion.p>
                  <motion.button
                    onClick={() => toggleExpand(post.id)}
                    className="text-green-400 font-medium flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    {expandedPosts[post.id] ? "Read less" : "Read more"} <FiArrowRight className="ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


           <div className="min-h-screen bg-black text-white">
      {/* ... other sections ... */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        <motion.h2
            className="text-3xl font-bold text-center text-green-400 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          Our Projects
        </motion.h2>

        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-1/2 relative group">
              {/* Image Carousel */}
              <div className="relative w-full aspect-[3/2] overflow-hidden shadow-lg">
                {item.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${item.title} - ${imgIndex + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      imgIndex === currentImageIndices[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {item.images.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setCurrentImageIndices(prev => ({
                      ...prev,
                      [index]: dotIndex
                    }))}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      dotIndex === currentImageIndices[index] 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>



    </div>
  );
};

export default SolarEx;