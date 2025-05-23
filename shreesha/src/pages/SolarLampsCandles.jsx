import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import s from '../assets/images/Products/Lamp/Small-Lamp.png';
import b from '../assets/images/Products/Lamp/Big-Lamp.png';
import cs from '../assets/images/Products/Lamp/cs.jpeg';
import cc from '../assets/images/Products/Lamp/cc.jpeg';
const SolarLamps = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const products = [
  {
    image: s,
    title: "Small Night Lamp",
    description: "A compact and stylish solar-powered night lamp designed for bedside tables, study desks, or small spaces. Its gentle, warm glow creates a relaxing ambiance while being energy-efficient and completely sustainable.",
    features: [
      "Energy-efficient LED with soft illumination",
      "Provides a comfortable nighttime glow without eye strain",
      "Compact and lightweight design for easy placement",
      "Built-in rechargeable solar battery for eco-friendly power",
      "Automatic dusk-to-dawn sensor ensures seamless operation",
    ],
    rating: 4.5,
  },
  {
    image: b,
    title: "Big Night Lamp",
    description: "A larger version of the night lamp with enhanced illumination for living spaces, temples, or outdoor settings. Featuring adjustable brightness and a modern design, this lamp blends functionality with aesthetic appeal.",
    features: [
      "Adjustable brightness levels for custom ambiance",
      "Elegant and minimalistic design suitable for modern interiors",
      "Long-lasting illumination with high-capacity solar battery",
      "Sturdy yet lightweight body for durability and portability",
      "Water-resistant and safe for both indoor and outdoor use",
    ],
    rating: 4.7,
  },
  {
    image: cs,
    title: "Candle Sticks",
    description: "Beautifully crafted solar-powered candle sticks designed to mimic the elegance of traditional wax candles without the mess. Ideal for creating a warm, inviting atmosphere during festivities or spiritual rituals.",
    features: [
      "Handcrafted with intricate patterns to enhance aesthetics",
      "Realistic flickering flame effect for an authentic candle glow",
      "Completely flameless, making it safer for long durations",
      "Multiple design options available to suit varied decor themes",
      "Perfect for puja rituals, festive celebrations, and home decor",
    ],
    rating: 4.6,
  },
  {
    image: cc,
    title: "Cup Candle",
    description: "A charming solar-powered cup candle featuring a decorative yet functional design. Ideal for meditation spaces, relaxation corners, or cozy living areas, it provides a soft, soothing light with eco-conscious energy.",
    features: [
      "Scented versions available for a pleasant aromatic experience",
      "Eco-friendly, flameless operation ensures safety",
      "Unique artisanal design enhances its decorative value",
      "Solar charging ensures hassle-free usage without electricity",
      "Soft warm light helps create a tranquil and calming atmosphere",
    ],
    rating: 4.8,
  }
];


  return (
    <div className="p-6 max-w-6xl mx-auto bg-green-50 min-h-screen pt-20">
      <h1 className="text-3xl font-extrabold text-green-700 mb-10 text-center">
        Solar Lamps & Candle
      </h1>
      <div className="space-y-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full sm:w-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-center flex-1">
              <h2 className="text-2xl font-semibold text-green-800">{product.title}</h2>
              <p className="mt-2 text-gray-700">{product.description}</p>
              <ul className="list-disc list-inside mt-3 text-gray-600">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="mt-4">
                <span className="text-yellow-500 font-semibold">Rating: </span>
                <span className="text-yellow-500">{product.rating} ★</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarLamps;

