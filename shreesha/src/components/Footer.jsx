import {          
  FaPhoneSquareAlt,
  FaMobileAlt, 
} from 'react-icons/fa';

// Alternative providers
import {
  MdPhone, 
  MdPhoneIphone,  
} from 'react-icons/md';



import { motion } from "framer-motion";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const products = [
  { name: "Solar Night Lamp", link: "/lamp" },
  { name: "Solar Samai", link: "/samai" },
  // { name: "Solar Diya", link: "/diya" },
  // { name: "Solar Candle", link: "/candle" },
  // { name: "Solar Outdoor Light", link: "/outdoor" },
];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const titleVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const lineVariants = {
    normal: { width: "100%" },
    hover: { width: "110%" }
  };

  const staggerItems = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.footer 
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      {/* Enhanced solar panel pattern overlay */}
      <div className="absolute inset-0 opacity-[3]">
        <div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/solar-panel.png')]"
          style={{
            backgroundSize: "250px",
            backgroundBlendMode: "overlay"
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://www.shreeshaenergy.com/uploads/238/business/logo_svg/235/l1.svg" 
                alt="ShreeSha Energy Logo" 
                className="h-16"
              />
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Leading solar energy solutions provider committed to sustainable power generation.
            </motion.p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FaFacebook size={18} />, link: "https://www.facebook.com/shreeshaenergy" },
                { icon: <FaTwitter size={18} />, link: "https://twitter.com/ShreeshaE" },
                { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/company/shreesha-energy-solutions/" },
                { icon: <FaInstagram size={18} />, link: "https://www.instagram.com/shreesha_energy_solutions/" },
                { icon: <FaYoutube size={18} />, link: "https://www.youtube.com/channel/UCEJCN-8Dy5izvZGoywmkuHw" },
                { icon: <FaWhatsapp size={18} />, link: "https://wa.me/919822033636" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
                  custom={index * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerItems}
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    backgroundColor: "#1a5c3a"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="mb-6"
              whileHover="hover"
              initial="normal"
            >
              <motion.h3 
                className="text-lg font-semibold mb-2 inline-block"
                variants={titleVariants}
              >
                Quick Links
              </motion.h3>
              <motion.div 
                className="h-0.5 bg-green-600"
                variants={lineVariants}
              />
            </motion.div>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Gallery", link: "/gallery" },
                { name: "Cart", link: "/solar-ecommerce" },
                { name: "Contact Us", link: "/contact" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  custom={index * 0.1 + 0.3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerItems}
                  whileHover={{ 
                    x: 8,
                    color: "#4ade80"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 transition-all duration-300 group-hover:mr-4"></span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
           <motion.div variants={itemVariants}>
      <motion.div className="mb-6" whileHover="hover" initial="normal">
        <motion.h3
          className="text-lg font-semibold mb-2 inline-block"
          variants={titleVariants}
        >
          Our Products
        </motion.h3>
        <motion.div className="h-0.5 bg-green-600" variants={lineVariants} />
      </motion.div>

      <ul className="space-y-3">
        {products.map((product, index) => (
          <motion.li
            key={index}
            custom={index * 0.1 + 0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerItems}
            whileHover={{
              x: 8,
              color: "#4ade80",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={product.link}
              className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
            >
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3 transition-all duration-300 group-hover:mr-4"></span>
              {product.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="mb-6"
              whileHover="hover"
              initial="normal"
            >
              <motion.h3 
                className="text-lg font-semibold mb-2 inline-block"
                variants={titleVariants}
              >
                Contact Us
              </motion.h3>
              <motion.div 
                className="h-0.5 bg-green-600"
                variants={lineVariants}
              />
            </motion.div>
            <ul className="space-y-4">
              
              <motion.li 
                className="flex items-center"
                custom={0.6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerItems}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
<FaMobileAlt className="text-green-500 mr-3" />
                <div className="flex flex-col">
                  <a href="tel:+917020986306" className="text-gray-300 hover:text-green-400 mb-1">
                    +91 70209 86306
                  </a>
                  
                </div>
              </motion.li>
              <motion.li 
                className="flex items-center"
                custom={0.6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerItems}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
<FaPhoneSquareAlt className="text-green-500 mr-3" />
                <div className="flex flex-col">
                 
                  <a href="tel:+918830363889" className="text-gray-300 hover:text-green-400">
                    +91 88303 63889
                  </a>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-center"
                custom={0.7}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerItems}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-green-500 mr-3" />
                <a href="mailto:shreeshaenergy@gmail.com" className="text-gray-300 hover:text-green-400">
                  shreesha.energy@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center"
                custom={0.7}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerItems}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-green-500 mr-3" />
                
                <a href="mailto:adheer.joshi@shreeshaenergy.com" className="text-gray-300 hover:text-green-400">
                  adheer.joshi@shreeshaenergy.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start"
                custom={0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerItems}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Shreesha Energy Solutions, Wanowrie, Pune - 411040, Maharashtra, India
                </span>
              </motion.li>
            </ul>
            
            <motion.a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3bc2c1cb623f70bf:0x16021a1ebd7c34a?source=g.page.m"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-green-400 hover:text-green-300 group"
              custom={0.8}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerItems}
              whileHover={{ scale: 1.05 }}
            >
              <SiGooglemaps className="mr-2 transition-all duration-300 group-hover:scale-125" />
              View on Google Maps
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.p 
            className="text-gray-400 mb-4 md:mb-0"
            whileHover={{ scale: 1.02 }}
          >
            &copy; {currentYear} ShreeSha Energy. All Rights Reserved.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-x-6 gap-y-2 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.9 }}
          >
            {[
              { name: "Privacy Policy", link: "/privacy-policy" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="text-gray-400 hover:text-green-400 transition-colors"
                variants={staggerItems}
                custom={index * 0.1}
                whileHover={{ 
                  y: -2,
                  scale: 1.05
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;