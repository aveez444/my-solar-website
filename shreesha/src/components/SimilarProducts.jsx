import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SmallNightLamp from "../assets/images/Products/Lamp/Small-Lamp.png";
import BigNightLamp from "../assets/images/Products/Lamp/Big-Lamp.png";
import SolarSilverDevdasSamai from "../assets/images/Products/Samai/ds.jpeg";
import SolarSilverPanchpakaliSamai from "../assets/images/Products/Samai/ps.jpeg";
import SolarBrassSamai from "../assets/images/Products/Samai/SilverSamai.jpg";
import SolarSilverAshtavinayakGanpatiDiya from "../assets/images/Products/Samai/Ashtavinayak.jpg";
import SolarCarDiya from "../assets/images/Products/Samai/CarDiya1.jpeg";

const SimilarProducts = () => {
  const products = [
    { 
      id: 1, 
      name: "Small Night Lamp", 
      price: 1998, 
      description: "3W solar-powered LED lamp with 6-hour backup.", 
      image: SmallNightLamp,
      path: "/solarnightlamp"
    },
    { 
      id: 2, 
      name: "Big Night Lamp", 
      price: 2798, 
      description: "5W high-lumen solar lamp for driveways & backyards.", 
      image: BigNightLamp,
      path: "/biglamp"
    },
    { 
      id: 3, 
      name: "Solar Silver Devdas Samai", 
      price: 2198, 
      description: "Traditional Devdas-style samai with bright LEDs.", 
      image: SolarSilverDevdasSamai,
      path: "/silversamai"
    },
    { 
      id: 4, 
      name: "Solar Silver Panchpakali Samai", 
      price: 2498, 
      description: "Elegant five-flame samai for ceremonies.", 
      image: SolarSilverPanchpakaliSamai,
      path: "/panchpakalisamai"
    },
    { 
      id: 5, 
      name: "Solar Brass Samai", 
      price: 5998, 
      description: "Premium brass samai with 30 LEDs, luxury style.", 
      image: SolarBrassSamai,
      path: "/brass"
    },
    { 
      id: 6, 
      name: "Solar Silver Ashtavinayak Ganpati Diya", 
      price: 2498, 
      description: "Auspicious Ganpati diya with warm white LEDs.", 
      image: SolarSilverAshtavinayakGanpatiDiya,
      path: "/ganpatidiya"
    },
    { 
      id: 7, 
      name: "Solar Car Diya", 
      price: 1998, 
      description: "Car-shaped diya for vehicle worship and travel protection.", 
      image: SolarCarDiya,
      path: "/solarcardiya"
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const handlePrev = () => setStartIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setStartIndex((prev) => Math.min(maxIndex, prev + 1));

  const getDiscountedPrice = (price) => (price * 0.5).toFixed(2);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-green-50 rounded-3xl shadow-xl mx-4 md:mx-8 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-12 text-center">
        Discover More Solar Elegance
      </h2>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <motion.button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 disabled:opacity-40"
          whileHover={{ scale: 1.1, backgroundColor: "#10b981", color: "#fff" }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowLeft size={22} />
        </motion.button>
        <motion.button
          onClick={handleNext}
          disabled={startIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 disabled:opacity-40"
          whileHover={{ scale: 1.1, backgroundColor: "#10b981", color: "#fff" }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowRight size={22} />
        </motion.button>

        {/* Grid Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500">
          {products.slice(startIndex, startIndex + itemsPerView).map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-green-200 transition overflow-hidden group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Product Image */}
              <Link to={product.path}>
                <div className="relative h-52 bg-gray-50 flex items-center justify-center overflow-hidden cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                    50% OFF
                  </span>
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-5">
                <Link to={product.path}>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-green-700 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {product.description}
                </p>

                {/* Pricing + View Details Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <s className="text-sm text-gray-400 block">₹{product.price}</s>
                    <span className="text-lg font-semibold text-green-600">
                      ₹{getDiscountedPrice(product.price)}
                    </span>
                  </div>

                  <Link to={product.path}>
                    <motion.button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link to="/solar-ecommerce">
          <motion.button
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:from-green-700 hover:to-teal-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover All Solar Products
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default SimilarProducts;