import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images imports
import WallLightImg from '../assets/images/Products/Samai/wl.jpeg';
import GateLightImg from '../assets/images/Products/Samai/gl.jpeg';
import StreetLightImg from '../assets/images/Products/Samai/sl.jpeg';

const SolarOutdoorLight = () => {
  useEffect(() => {
    AOS.init({ duration: 850, easing: 'ease-in-out', once: true });
  }, []);

  const products = [
    {
      image: WallLightImg,
      title: 'Wall Light',
      description: 'Illuminate your outdoor walls with this stylish and functional solar wall light. Designed to withstand weather conditions, it offers a secure and ambient lighting solution that enhances your home\'s exterior beauty and safety.',
      features: [
        'High-powered solar panel for efficient energy capture',
        'Weatherproof and durable construction for all seasons',
        'Automatic dusk-to-dawn sensor for effortless operation',
        'Modern design complements any exterior aesthetic',
        'Easy installation on walls with basic tools',
      ],
      rating: 4.5,
    },
    {
      image: GateLightImg,
      title: 'Gate Light',
      description: 'Make a grand entrance with the Solar-powered Gate Light. This rugged and elegant fixture casts a warm glow around your gate area, improving visibility and adding to your home’s curb appeal while saving energy.',
      features: [
        'Bright LED light powered solely by solar energy',
        'Robust build resists rust and extreme weather elements',
        'Smart light sensor for automatic on/off at sunset/sunrise',
        'Energy-saving with no wiring or electrical connection needed',
        'Ideal for driveways, gates, and garden entrances',
      ],
      rating: 4.6,
    },
     {
      image: StreetLightImg,
      title: 'Smart Solar Street Light',
      description: 'The Smart Solar Street Light incorporates IoT-enabled controls allowing remote management and monitoring via mobile or desktop, optimizing performance and energy use.',
      features: [
        'IoT compatible with remote on/off and dimming controls',
        'Solar powered with intelligent light and motion sensors',
        'Energy-efficient lithium-ion battery with quick charging',
        'Weather-resistant and vandal-proof design',
        'Perfect for smart city infrastructure projects',
      ],
      rating: 4.9,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-green-50 min-h-screen pt-20">
      <h1 className="text-3xl font-extrabold text-green-700 mb-10 text-center">
        Solar Outdoor Light
      </h1>
      <div className="space-y-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full sm:w-64 object-cover"
            />
            <div className="p-8 flex flex-col justify-center flex-1">
              <h2 className="text-3xl font-semibold text-green-800">{product.title}</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>
              <ul className="list-disc list-inside mt-5 space-y-1 text-gray-600">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="mt-6">
                <span className="text-yellow-500 font-semibold">Rating: </span>
                <span className="text-yellow-500 text-xl">{product.rating} ★</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarOutdoorLight;
