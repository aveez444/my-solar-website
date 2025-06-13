import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Talktous from '../components/TalkToUs';
import Navbar from '../components/Navbar';

// Images import with relative paths
import ds from '../assets/images/Products/Samai/ds.jpeg';
import ps from '../assets/images/Products/Samai/ps.jpeg';
import bs from '../assets/images/Products/Samai/bs.jpeg';
import ld from '../assets/images/Products/Samai/ld.jpeg';
import ad from '../assets/images/Products/Samai/ad.jpeg';
import n from '../assets/images/Products/Samai/n.jpeg';

const SolarSamaiDiya = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-in-out', once: true });
  }, []);

  const products = [
    {
      image: ds,
      title: 'Solar Silver Devdas Samai',
      description: 'The Solar Silver Devdas Samai is an exquisite blend of traditional artistry and modern solar technology. Crafted with precision, it lights up your prayer space with warm, eco-friendly illumination, perfect for daily rituals or special occasions.',
      features: [
        'Solar-powered for energy efficiency and sustainability',
        'Intricately crafted silver design for aesthetic appeal',
        'Durable construction ensures long-lasting usage',
        'Provides steady, comforting light without electricity',
      ],
      rating: 4.9,
    },
    {
      image: ps,
      title: 'Solar Silver Panchpakali Samai',
      description: 'Designed to combine heritage with innovation, the Solar Silver Panchpakali Samai features five wicks for ample brightness. Its intricate silverwork symbolizes divine energy and is ideal for enhancing spiritual ambiance.',
      features: [
        'Eco-friendly solar-powered design',
        'Elegant Panchpakali (five wick) traditional style',
        'Sturdy and corrosion-resistant silver finish',
        'Perfect for temple and household pooja rooms',
      ],
      rating: 4.8,
    },
    {
      image: bs,
      title: 'Solar Brass Samai',
      description: 'The Solar Brass Samai is crafted with premium brass for durability and timeless beauty. Its solar-powered wick lights provide a natural glow, making it an excellent addition to your sacred spaces.',
      features: [
        'Rich brass finish that resists rust and tarnish',
        'Efficient solar wick lights for extended battery life',
        'Classic design suitable for diverse cultural settings',
        'Safe, flameless lighting with zero maintenance',
      ],
      rating: 4.7,
    },
    {
      image: ld,
      title: 'Solar Silver Laxmi Diya',
      description: 'Celebrate festivals and auspicious occasions with the Solar Silver Laxmi Diya. This diya channels the blessings of Goddess Laxmi with its silver elegance and hassle-free, solar-powered illumination.',
      features: [
        'Shiny silver craftsmanship for added charm',
        'Runs on solar energy, reducing electricity use',
        'Compact and lightweight for easy placement',
        'Ideal for Diwali and daily worship rituals',
      ],
      rating: 4.6,
    
    },
    {
      image: ad,
      title: 'Solar Silver Ashtavinayak Ganpati Diya',
      description: 'This diya combines the sacredness of the Ashtavinayak Ganpati tradition with modern solar efficiency. Designed in shimmering silver, it offers a serene illumination that enhances devotion and spiritual focus.',
      features: [
        'Solar-powered, promotes energy conservation',
        'Intricate Ashtavinayak Ganpati motifs hand-crafted',
        'High-quality silver finish that resists tarnishing',
        'Ideal for spiritual ceremonies and meditation settings',
      ],
      rating: 4.8,
    },
    {
      image: n,
      title: 'Solar Silver Niranjan',
      description: 'The Solar Silver Niranjan is a divine lighting solution that blends traditional spirituality with efficient solar technology. Its elegant silver design complements any sacred altar or festival decoration.',
      features: [
        'Powered by solar energy for eco-friendly use',
        'Polished silver surface with detailed engravings',
        'Provides a soft, soothing light suitable for prayers',
        'Low maintenance and long-lasting battery life',
      ],
      rating: 4.7,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-green-50 min-h-screen pt-20">

    < Navbar />

      <h1 className="text-3xl font-extrabold text-green-700 mb-10 text-center">
        Solar Samai & Diya
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
<div className="pt-8 pb-8">
                  <Talktous/>
                </div>
    </div>
  );
};

export default SolarSamaiDiya;
