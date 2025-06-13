import { useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
import Solar1 from '../assets/solar1.jpg';
import Solar2 from '../assets/solar2.jpg';
import Solar3 from '../assets/solar3.jpg';
import Solar4 from '../assets/solar4.jpg';
import Solar5 from '../assets/images/SolarPanel3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { Zap, Leaf, Globe, ArrowRight, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';



const LandingPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e0owvxr",     // Replace with your EmailJS Service ID
      "template_gwdd29g",// Replace with your EmailJS template ID
      form.current,
      "Wh7iX-UXO1TeE9sgj"  // Replace with your EmailJS public key
    )
      
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again.');
    });
  };

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
    clients: 0,
    savings: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        projects: prevCount.projects >= 200 ? 200 : prevCount.projects + 4,
        clients: prevCount.clients >= 150 ? 150 : prevCount.clients + 3,
        savings: prevCount.savings >= 30 ? 30 : prevCount.savings + 1,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Testimonial carousel

  const Rating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3 && rating % 1 <= 0.8;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FontAwesomeIcon icon={fullStar} key={i} className="text-yellow-400" />);
    } else if (i === fullStars && hasHalf) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FontAwesomeIcon icon={emptyStar} key={i} className="text-yellow-400" />);
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};



  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'Bhupendra Joshi',
      position: 'Chief Human Resources Officer @ Vee Technologies',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHQsbiUQ9C7HQ/profile-displayphoto-shrink_800_800/B56ZRHT6ivGQAc-/0/1736363190938?e=1753315200&v=beta&t=GDU0Jz5ZyqfvJWclJI5j8LMo8gvKLahyRa2g6P1Z5QY',
      rating: 4.8,
      quote: 'Wow, more power to you for this amazing venture...there is such a need for sustainable energy! Aadhir Jjoshi Shreesha Energy Solutions #solarpower #environment',
    },
    {
      id: 2,
      name: 'Jaikumar Gidwani',
      position: 'Senior Development Manager at IBM',
      image: 'https://media.licdn.com/dms/image/v2/C5103AQH9dSYdyCs_iw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1535550799107?e=1753315200&v=beta&t=R7x6EFI38YMBDBG9vwLC2bGOa19u6F5mYBZwvRmo5tQ',
      rating: 5.0,
      quote: 'Thank you Aadhir Jjoshi and team at @Shreesha Energy Solutions for working through patiently and tirelessly in getting the solar plant setup. Appreciate your professionalism and dedication, thank you.',
    },
    {
      id: 3,
      name: 'Kavita Sharma Joshi',
      position: 'Vaibhavi Enterprises',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQFfVLfjiinhfw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591029347967?e=1753315200&v=beta&t=n0IYtSCW3asasRw6W5H7aqg0TgsvuQTT2XLoFwGIpkA',
      rating: 5.0,
      quote: 'Amazing Products.',
    },
      {
    id: 4,
    name: 'Rajesh Mehta',
    position: 'Factory Owner, Surat',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    rating: 4.5,
    quote: 'Shreesha Energy installed a 50kW system at our textile unit. We\'ve seen 40% reduction in electricity bills within first 3 months. Their after-sales support is excellent.'
  },
  {
    id: 5,
    name: 'Priya Patel',
    position: 'Homeowner, Bangalore',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
    rating: 5,
    quote: 'The team was professional and completed installation ahead of schedule. Our 5kW home system now covers 90% of our electricity needs. Highly recommend!'
  },
  {
    id: 6,
    name: 'Vikram Singh',
    position: 'Hotel Manager, Goa',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 4.7,
    quote: 'Our 100kW commercial solar plant has been running flawlessly for 2 years. Shreesha\'s maintenance team is always prompt for quarterly checkups.'
  },
  {
    id: 7,
    name: 'Ananya Reddy',
    position: 'School Principal, Hyderabad',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    rating: 4.9,
    quote: 'We installed solar panels for our school campus. The children love learning about renewable energy, and we\'ve saved ₹1.2 lakh annually on electricity.'
  },
  {
    id: 8,
    name: 'Sanjay Gupta',
    position: 'Agricultural Cooperative Head, Punjab',
    image: 'https://randomuser.me/api/portraits/men/69.jpg',
    rating: 5,
    quote: 'The solar pumps have transformed our farming operations. Reliable daytime power has increased our crop yield by 15%. Thank you Shreesha team!'
  },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Services data
  const services = [
    {
      id: 1,
      title: 'Residential Solar',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      description: 'Transform your home with custom solar solutions that reduce electricity bills while increasing property value.',
      features: ['Rooftop PV Systems', 'Smart Home Integration', 'Battery Storage Solutions'],
    },
    {
      id: 2,
      title: 'Commercial Solar',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'Optimize your business operations with scalable solar installations designed for maximum efficiency and ROI.',
      features: ['Carport & Parking Structures', 'Energy Management Systems', 'Grid Integration'],
    },
    {
      id: 3,
      title: 'Industrial Solar',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: 'Power your industrial facilities with robust solar solutions that significantly reduce operational costs.',
      features: ['MW Scale Projects', 'Hybrid Systems', 'Load Management'],
    },
  ];
  const solutions = [
    {
      icon: Zap,
      title: "Net Metering",
      description: "Slash energy bills with Net Metering, Virtual, and Group Net Metering, powering homes and communities sustainably.",
      href: "/netmeter",
      gradient: "from-amber-400 via-orange-500 to-yellow-600",
      bgGradient: "from-amber-500/20 via-orange-500/20 to-yellow-600/20",
      glowColor: "shadow-amber-500/50",
      position: "md:translate-y-0 md:-translate-x-8"
    },
    {
      icon: Leaf,
      title: "Green Energy & Agri Voltaics",
      description: "Access renewable energy directly with GEOA and combine solar with farming through Agri Voltaics for sustainable land use.",
      href: "/geoa",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      bgGradient: "from-emerald-500/20 via-green-500/20 to-teal-600/20",
      glowColor: "shadow-emerald-500/50",
      position: "md:-translate-y-12 md:translate-x-4"
    },
    {
      icon: Globe,
      title: "CSR Impact",
      description: "Drive meaningful change with CSR initiatives in renewable energy, creating sustainable impact for communities and the planet.",
      href: "/csr",
      gradient: "from-blue-400 via-cyan-500 to-indigo-600",
      bgGradient: "from-blue-500/20 via-cyan-500/20 to-indigo-600/20",
      glowColor: "shadow-blue-500/50",
      position: "md:translate-y-8 md:translate-x-8"
    }
  ];
  // Project showcase data
  const projects = [
    {
      id: 1,
      title: 'Residential Community',
      location: 'Pune, Maharashtra',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      capacity: '50 kW',
      saving: '₹1.2 Lakh Annual',
    },
    {
      id: 2,
      title: 'Commercial Complex',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80',
      capacity: '200 kW',
      saving: '₹4.8 Lakh Annual',
    },
    {
      id: 3,
      title: 'Manufacturing Plant',
      location: 'Nagpur, Maharashtra',
      image: 'https://plus.unsplash.com/premium_photo-1679917152411-353fd633e218?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D',
      capacity: '500 kW',
      saving: '₹12 Lakh Annual',
    },
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How much can I save with solar?',
      answer: 'Most clients see electricity bill reductions of 30-60% depending on their energy consumption and system size. Our consultants can provide a detailed analysis based on your specific needs.',
    },
    {
      id: 2,
      question: 'What financing options are available?',
      answer: 'We offer flexible financing including OPEX, CAPEX, and CAPEX-EMI models. Our solutions can be tailored to fit various budget constraints with minimal upfront investment options.',
    },
    {
      id: 3,
      question: 'How long does installation take?',
      answer: 'The installation timeline varies based on project complexity. Typically, residential installations take 2-5 days, while commercial projects may take 2-4 weeks. We ensure minimal disruption to your routine.',
    },
    {
      id: 4,
      question: 'What maintenance is required?',
      answer: 'Solar systems require minimal maintenance. We recommend annual inspections and cleaning to ensure optimal performance. Our comprehensive maintenance packages provide peace of mind.',
    },
  ];

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (

    <div className="bg-gray-50 min-h-screen overflow-y-auto">
      {/* Hero Section - Modern & Dynamic */}
  <div 
    id="hero-section"
    className="relative min-h-screen h-[calc(100vh-4rem)] bg-black">
      <Navbar/>
  {/* Multi-image background with responsive grid layout */}
  <div className="relative h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 z-0">
    {/* Image 1 */}
    <motion.div 
      className="relative h-full overflow-hidden"
      initial={{ opacity: 0.6, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={Solar1}
        alt="Solar Panel Close-up"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:bg-black/10"></div>
    </motion.div>

    {/* Image 2 */}
    <motion.div 
      className="relative h-full overflow-hidden"
      initial={{ opacity: 0.6, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={Solar2}
        alt="Solar Panel with Sunset"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:bg-black/10"></div>
    </motion.div>

    {/* Image 3 */}
    <motion.div 
      className="relative h-full overflow-hidden"
      initial={{ opacity: 0.6, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={Solar3}
        alt="Solar Panel with Dramatic Sky"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:bg-black/10"></div>
    </motion.div>

    {/* Image 4 */}
    <motion.div 
      className="relative h-full overflow-hidden"
      initial={{ opacity: 0.6, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={Solar4}
        alt="Solar Panel Installation"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:bg-black/10"></div>
    </motion.div>
  </div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-5"></div>

  {/* Animated light rays effect */}
  <motion.div
  className="absolute inset-0 z-6 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.4 }}
  transition={{ duration: 3, ease: "easeInOut" }}
>
  <motion.div
    className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-yellow-300/20 to-transparent blur-3xl"
    animate={{ 
      scale: [1, 1.3, 1],
      x: [-50, 50, -50],
      y: [-30, 30, -30]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />
</motion.div>

  {/* Centered Content - Improved for mobile */}
  <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 text-center">
    <motion.div
      className="max-w-3xl w-full px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.span 
        className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-medium mb-3 sm:mb-4 text-sm sm:text-base"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Solar Energy Solutions
      </motion.span>

      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Powering A <span className="text-green-500 relative inline-block">
          <span className="relative z-10">Sustainable</span>
          <motion.span 
            className="absolute inset-0 bg-green-500/20 blur-sm -z-10"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.span>
        </span> Future
      </motion.h1>

      <motion.p 
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Transform your energy consumption with cutting-edge solar solutions 
        that reduce costs and environmental impact.
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.a
          href="#contact"
          className="px-6 py-3 sm:px-8 sm:py-4 bg-green-500 text-black font-semibold rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-500/30 flex items-center justify-center"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get Free Consultation</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </motion.a>
        <motion.a
          href="#services"
          className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
          whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explore Solutions</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  </div>

  {/* Animated bottom progress bar*/}
  <motion.div
    className="relative bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 z-20"
    initial={{ scaleX: 0, originX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 2.5, ease: "easeInOut" }}
  /> 

  {/* Hero statistics - Improved for mobile */}
  <div className="absolute bottom-0 left-0 right-0 py-4 sm:py-6 md:py-8 bg-gradient-to-t from-black/80 to-transparent z-15">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {[
          { value: count.projects, label: 'Projects', icon: '🏆' },
          { value: count.clients, label: 'Clients', icon: '🤝' },
          { value: count.savings, label: '% Savings', icon: '💰' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
          >
            <span className="text-2xl sm:text-3xl mb-1">{stat.icon}</span>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0 sm:mb-1">{stat.value}+</div>
              <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
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
              Comprehensive Solar Services
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-green-50 p-4 inline-block rounded-2xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Solar Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="max-w-lg"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Exceptional Solar Solutions for Every Need
              </h2>
              <p className="text-gray-300 mb-8">
                At Shreesha Energy Solutions, we pride ourselves on providing cutting-edge technology, competitive pricing, and exceptional customer service. Our comprehensive approach ensures you get the most efficient and cost-effective solar solution.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Consultation',
                    description: 'Our team analyzes your specific energy needs to design the optimal solar solution.',
                    icon: (
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    ),
                  },
                  {
                    title: 'Quality Components',
                    description: 'We use only premium equipment from trusted manufacturers with strong warranties.',
                    icon: (
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    ),
                  },
                  {
                    title: 'Transparent Pricing',
                    description: 'We provide clear explanations of costs, returns, and financing options.',
                    icon: (
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    ),
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'Our relationship doesnt end after installation. We provide continuous monitoring and maintenance.',
                      icon: (
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-green-500/30 rounded-xl"></div>
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80" 
                    alt="Solar installation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-6 right-6 px-6 py-4 bg-green-500 text-black rounded-lg">
                  <span className="text-4xl font-bold">30-60%</span>
                  <p className="font-medium">Energy Cost Savings</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
                
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
  {/* Animated Background Elements - Lighter Version */}
  <div className="absolute inset-0">
    {/* Subtle Floating Orbs */}
    <motion.div 
      className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-100 to-emerald-200 rounded-full blur-3xl opacity-70"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-70"
      animate={{ 
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -40, 0],
        y: [0, 40, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    
    {/* Subtle Grid Pattern */}
    <div className="absolute inset-0 opacity-20">
      <div className="w-full h-full" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
    </div>
  </div>

  <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
    {/* Header with Staggered Animation */}
    <motion.div 
      className="text-center mb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full px-6 py-2 mb-6"
      >
        <Sparkles className="w-4 h-4 text-emerald-600" />
        <span className="text-emerald-700 text-sm font-medium">Sustainable Innovation</span>
      </motion.div>
      
      <motion.h2 
        className="text-5xl lg:text-7xl font-black tracking-tight mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-emerald-500 to-teal-600 leading-tight block">
          Powering Tomorrow's
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-600 to-teal-700 leading-tight block">
          Energy Revolution
        </span>
      </motion.h2>
      
      <motion.p 
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Discover cutting-edge solar and renewable energy solutions designed to transform communities, landscapes, and futures through sustainable innovation.
      </motion.p>
    </motion.div>

    {/* Dynamic Card Layout - Simplified */}
    <div className="relative max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <motion.div
              key={solution.title}
              className={`relative group ${solution.position}`}
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                transition: { duration: 0.3 }
              }}
            >
              {/* Card - Simplified with solid background */}
              <div className={`relative bg-white border border-gray-200 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                {/* Content */}
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {solution.description}
                </p>

                {/* CTA Button */}
                <motion.a
                  href={solution.href}
                  className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${solution.gradient} text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 group/btn`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discover Now</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Call to Action */}
    <motion.div
      className="text-center mt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.a
        href="#solutions"
        className="inline-flex items-center gap-4 px-10 py-4 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-emerald-200 transition-all duration-300 group"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 15px 30px rgba(16, 185, 129, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Explore All Solutions</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </motion.div>
  </div>
</section>

      {/* What We Offer Section - Unique Grid Layout with Interactive Cards */}
<section className="py-24 bg-white relative overflow-hidden">
  {/* Background elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
  
  <div className="container mx-auto px-6 relative z-10">
    <motion.div 
      className="text-center mb-16"
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
        Our Offerings
      </span>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Comprehensive Solar Energy Solutions
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Customized solar solutions with limitless potential, designed for India and beyond
      </p>
    </motion.div>

    {/* Unique Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Feature Card - Solar Energy System */}
      <motion.div
        className="lg:col-span-7 relative group overflow-hidden rounded-2xl shadow-2xl h-[400px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
          alt="Solar Energy System"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-2xl font-bold mb-2">Solar Energy System</h3>
          <p className="mb-4 opacity-90">
            Custom solutions with limitless potential, installable anywhere with a consequential future globally.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">Customizable</span>
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">Future-proof</span>
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">Global Potential</span>
          </div>
        </div>
        {/* Floating icon */}
        <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-20">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        </div>
      </motion.div>

      {/* Right Column - Two Smaller Cards */}
      <div className="lg:col-span-5 space-y-8">
        {/* On Site Distributed Solar Card */}
        <motion.div
          className="relative group overflow-hidden rounded-2xl shadow-lg h-[186px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-green-800/20 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
            alt="On Site Distributed Solar"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 p-6 text-white z-20 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/60 to-transparent">
            <h3 className="text-xl font-bold mb-1">On Site Distributed Solar</h3>
            <p className="text-sm opacity-90">
              Rooftop or ground-mounted systems connected to local utility grid for consumption under 1MW.
            </p>
          </div>
          {/* Floating badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full z-20">
            LOCAL SOLUTION
          </div>
        </motion.div>

        {/* Off Site Solar Farm Card */}
        <motion.div
          className="relative group overflow-hidden rounded-2xl shadow-lg h-[186px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-green-800/20 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Off Site Solar Farm"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 p-6 text-white z-20 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/60 to-transparent">
            <h3 className="text-xl font-bold mb-1">Off Site/Solar Farm</h3>
            <p className="text-sm opacity-90">
              Open Access solution for clients without sufficient space for their bulk energy requirements.
            </p>
          </div>
          {/* Floating badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full z-20">
            LARGE SCALE
          </div>
        </motion.div>
      </div>

      {/* Full Width Bottom Card - Power Procurement Models */}
      <motion.div
        className="lg:col-span-12 relative group overflow-hidden rounded-2xl shadow-lg h-[250px] mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-green-800/20 z-10"></div>
        <img
          src={Solar5}
          alt="Power Procurement Models"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 p-8 text-white z-20 flex flex-col justify-center bg-gradient-to-r from-black/70 via-black/50 to-transparent">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Power Procurement Models Under Open Access</h3>
            <p className="mb-6">
              Consumers with bulk load can avail benefits of cheap, green solar power through rooftop installations or offsite solar farms under open access.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Rooftop Solar Installation</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Offsite Solar Farm</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Bulk Load Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Solar System Solutions - As a separate row */}
    <motion.div 
      className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Solar System Solutions</h3>
          <p className="text-gray-700 mb-6">
            Our solar power solutions help you generate your own power with easy to use solar equipment - a low maintenance, silent and pollution-free alternative to depleting fuel resources.
          </p>
          <ul className="space-y-3">
            {[
              "Low maintenance systems",
              "Silent operation",
              "Pollution-free energy",
              "Reduced fuel dependency",
              "Easy-to-use equipment"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-64 lg:h-80">
          <div className="absolute inset-0 bg-green-500/10 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80" 
              alt="Solar System Solutions" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-4 border-2 border-green-500/20 rounded-xl"></div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* Our Missions Section - Modern & Visual */}
<section className="py-24 bg-gray-50 relative overflow-hidden">
  {/* Floating decorative elements */}
  <div className="absolute top-20 left-10 w-40 h-40 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-60 h-60 bg-green-100 rounded-full opacity-10 blur-3xl"></div>
  
  <div className="container mx-auto px-6 relative z-10">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="inline-block px-5 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4 shadow-sm">
        Our Mission
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Driving the <span className="text-green-600">Renewable Energy</span> Revolution
      </h2>
      <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We're committed to transforming energy consumption through innovative solar solutions that benefit both people and the planet.
      </p>
    </motion.div>

    {/* Mission Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Mission 1 - Sustainability */}
      <motion.div
        className="relative group overflow-hidden rounded-2xl bg-white shadow-xl h-[400px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/20 to-green-800/30 z-10"></div>
        <img
          src="https://media.istockphoto.com/id/628661166/photo/photovoltaic-power-plant.webp?a=1&b=1&s=612x612&w=0&k=20&c=U6a--clYaHJNqOnGF3XuTwRP-1Q5t7DuuLg71ZOiGLE="
          alt="Sustainable Future"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-20">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Sustainable Future</h3>
          <p className="text-gray-300">
            Pioneering solar solutions that reduce carbon footprints and promote environmental stewardship.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm text-white">Carbon Neutral</span>
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm text-white">Eco-Friendly</span>
          </div>
        </div>
      </motion.div>

      {/* Mission 2 - Innovation */}
      <motion.div
        className="relative group overflow-hidden rounded-2xl bg-white shadow-xl h-[400px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-blue-800/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
          alt="Technological Innovation"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-20">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Technological Innovation</h3>
          <p className="text-gray-300">
            Developing cutting-edge solar technologies that push the boundaries of efficiency and performance.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm text-white">Smart Tech</span>
            <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm text-white">High Efficiency</span>
          </div>
        </div>
      </motion.div>

      {/* Mission 3 - Empowerment */}
      <motion.div
        className="relative group overflow-hidden rounded-2xl bg-white shadow-xl h-[400px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600/20 to-amber-800/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
          alt="Community Empowerment"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-20">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Community Empowerment</h3>
          <p className="text-gray-300">
            Making solar energy accessible to all, creating jobs, and fostering energy independence.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-amber-500/30 rounded-full text-sm text-white">Accessible</span>
            <span className="px-3 py-1 bg-amber-500/30 rounded-full text-sm text-white">Job Creation</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Core Values */}
    <motion.div 
      className="mt-24 bg-white rounded-3xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Image */}
        <div className="relative h-96 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1504&q=80"
            alt="Our Core Values"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-3xl font-bold text-white mb-4">Our Core Values</h3>
            <p className="text-white/90 max-w-md">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>
        </div>
        
        {/* Right Column - Values */}
        <div className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Integrity",
                description: "Honest, transparent dealings with clients and partners",
                icon: (
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              },
              {
                title: "Excellence",
                description: "Commitment to quality in every aspect of our work",
                icon: (
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "Constantly pushing boundaries in solar technology",
                icon: (
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                )
              },
              {
                title: "Sustainability",
                description: "Environmental responsibility in all operations",
                icon: (
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="bg-green-50 p-3 rounded-lg mr-4">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Mission
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Projects Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
              Our Projects
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center text-white/80 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {project.location}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-white">
                      <span className="block text-xs opacity-80">Capacity</span>
                      <span className="font-semibold">{project.capacity}</span>
                    </div>
                    <div className="bg-green-500/90 backdrop-blur-sm px-3 py-2 rounded-lg text-black">
                      <span className="block text-xs opacity-80">Saving</span>
                      <span className="font-semibold">{project.saving}</span>
                    </div>
                                      </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-600 font-semibold rounded-full hover:bg-green-500 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
<section className="py-24 bg-gray-50 relative overflow-hidden">
  {/* Floating elements */}
  <div className="absolute top-20 left-10 w-40 h-40 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-60 h-60 bg-green-100 rounded-full opacity-10 blur-3xl"></div>

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      className="text-center mb-16"
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
        Client Testimonials
      </span>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
      <div className="w-24 h-1.5 bg-green-500 mx-auto"></div>
      
    </motion.div>

    <motion.div
      className="relative max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    ><div className="relative bg-white rounded-xl shadow-xl p-8 md:p-12 overflow-hidden min-h-[300px]">
        {/* Show only the active testimonial */}
        <div className="transition-opacity duration-500">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <div className="w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 rounded-full overflow-hidden border-4 border-green-100">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left max-w-xl">
              <div className="text-2xl font-bold text-gray-800 mb-2">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-green-600 mb-4">{testimonials[activeTestimonial].position}</div>
              <Rating rating={testimonials[activeTestimonial].rating} />
              
              <p className="text-gray-600 italic text-lg">"{testimonials[activeTestimonial].quote}"</p>
            </div>
          </div>
        </div>

        {/* Testimonial navigation */}
        <div className="mt-10 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-green-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative SVG elements */}
        <div className="absolute top-0 right-0 text-green-500 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.983 0a1.2 1.2 0 00-1.16.884L7.547 10.68a1.2 1.2 0 00.018.578l3.267 9.738a1.2 1.2 0 002.274-.008l3.268-9.738a1.2 1.2 0 00.018-.578L13.178.884A1.2 1.2 0 0011.983 0z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 text-green-500 opacity-10 rotate-180">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.983 0a1.2 1.2 0 00-1.16.884L7.547 10.68a1.2 1.2 0 00.018.578l3.267 9.738a1.2 1.2 0 002.274-.008l3.268-9.738a1.2 1.2 0 00.018-.578L13.178.884A1.2 1.2 0 0011.983 0z" />
          </svg>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple & Transparent Process
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-100 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  step: "01",
                  title: "Consultation & Assessment",
                  description: "We begin with a detailed energy assessment of your property to understand your specific needs and goals.",
                  icon: (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "Custom System Design",
                  description: "Our engineers create a tailored solar solution optimized for your energy consumption and roof space.",
                  icon: (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Approvals & Permits",
                  description: "We handle all necessary paperwork, permits, and utility approvals on your behalf.",
                  icon: (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  ),
                },
                {
                  step: "04",
                  title: "Professional Installation",
                  description: "Our certified technicians install your system with minimal disruption to your daily routine.",
                  icon: (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  ),
                },
                {
                  step: "05",
                  title: "System Activation",
                  description: "We commission your system, connect it to the grid, and ensure everything is working perfectly.",
                  icon: (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  ),
                },
                {
                  step: "06",
                  title: "Ongoing Support",
                  description: "We provide continuous monitoring, maintenance, and support to ensure optimal performance.",
                  icon: (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12 lg:mt-24'}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6 mx-auto ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      <span className="text-green-500 mr-2">{item.step}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
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
              Common Questions
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto"></div>
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
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
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
                  layout
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* CTA Section */}
<section id="contact" className="relative py-28 bg-gradient-to-br from-green-700 via-emerald-800 to-green-900 text-white overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse" />
  </div>

  <div className="relative z-10 container mx-auto px-6">
    <div className="max-w-5xl mx-auto text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-5 py-2 bg-white/20 text-white rounded-full font-semibold tracking-wide uppercase text-sm mb-4 shadow-md">
          Let's Connect
        </span>
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Power Your Future with Solar Energy
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Contact us for a free consultation and discover how much you can save with sustainable energy solutions.
        </p>
      </motion.div>
    </div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/** Contact Option */}
      {[
        {
          href: "tel:+919876543210",
          label: "Call Us",
          subLabel: "+91 98765 43210",
          icon: (
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          ),
        },
        {
          href: "mailto:info@shreeshaenergy.com",
          label: "Email Us",
          subLabel: "info@shreeshaenergy.com",
          icon: (
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          ),
        },
        {
          href: "#quote",
          label: "Quick Quote",
          subLabel: "Get Instant Estimate",
          icon: (
            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          ),
        },
      ].map((item, idx) => (
        <motion.a
          key={idx}
          href={item.href}
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {item.icon}
            </svg>
          </div>
          <span className="font-semibold text-lg">{item.label}</span>
          <span className="text-sm opacity-80 mt-1">{item.subLabel}</span>
        </motion.a>
      ))}
    </motion.div>

       <motion.div
      className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-10 max-w-4xl mx-auto shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-8 text-center">Schedule a Free Consultation</h3>
      <form 
        ref={form} 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={sendEmail}
      >
        {[
          { label: "Full Name", id: "name", name: "user_name", type: "text", placeholder: "Your name" },
          { label: "Email Address", id: "email", name: "user_email", type: "email", placeholder: "your.email@example.com" },
          { label: "Phone Number", id: "phone", name: "user_phone", type: "tel", placeholder: "+91 98765 43210" },
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder={field.placeholder}
              required
            />
          </div>
        ))}

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
          <select
            id="service"
            name="service_interest"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            required
          >
            <option value="residential" className="text-gray-900">Residential Solar</option>
            <option value="commercial" className="text-gray-900">Commercial Solar</option>
            <option value="industrial" className="text-gray-900">Industrial Solar</option>
            <option value="other" className="text-gray-900">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <motion.button
            type="submit"
            className="w-full px-6 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Request
          </motion.button>
        </div>
      </form>
    </motion.div>
  
  </div>
</section>
</div>

  );

};

export default LandingPage;