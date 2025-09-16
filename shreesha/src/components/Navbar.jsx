import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  ShoppingCart,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

import Sidebar from "./Sidebar";
import ConsultationModal from "./ConsultationModal";

import offgrid from '../assets/images/off-grid-min.png';
import ongrid from '../assets/images/on-grid-min.png';
import hybrid from '../assets/images/hybrid-min.png';
import rooftop from '../assets/images/rooftop-min.png';
import ground from '../assets/images/ground-min.png';
import carport from '../assets/images/carport-min.png';
import bipv from '../assets/images/bipv-min.png';
import pump from '../assets/images/pump-min.png';
import farm from '../assets/images/farm-min.png';
import ppas from '../assets/images/ppas-min.png';
import captive from '../assets/images/captive-min.jpg';
import capex from '../assets/images/capex-min.png';
import resco from '../assets/images/resco-min.png';
import emi from '../assets/images/emi-min.png';
import deferred from '../assets/images/deferred-min.png';
import lamp from '../assets/images/Products/Lamp/Big-Lamp.png';
import samai from '../assets/images/Products/Samai/navbar.png';
import ShreeshaLogo from '../assets/images/full-logo.svg';
import outdoor from '../assets/images/Products/Samai/outdoor.png';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [clickLocked, setClickLocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef();
  const dropdownRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const [activeSub, setActiveSub] = useState("Solar Energy System");
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const navigate = useNavigate();

  const appointmentRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        (!dropdownRef.current || !dropdownRef.current.contains(event.target))
      ) {
        if (!event.target.closest('a')) {
          setActiveMenu(null);
          setClickLocked(false);
        }
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const hero = document.querySelector("#hero-section");
    if (hero) {
      observer.observe(hero);
    }

    return () => {
      if (hero) {
        observer.unobserve(hero);
      }
    };
  }, []);

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName && clickLocked) {
      setActiveMenu(null);
      setClickLocked(false);
    } else {
      setActiveMenu(menuName);
      setClickLocked(true);
    }
  };

  const handleMenuInteraction = (menuName) => {
    if (window.innerWidth > 768) {
      setActiveMenu(menuName);
    } else {
      toggleMenu(menuName);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubMenu(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getSubMenuItems = (category) => {
    switch (category) {
      case "Solar Energy System":
        return [
          { name: "On Grid / Grid-Connected", img: ongrid, path: "/on-grid" },
          { name: "Off Grid", img: offgrid, path: "/off-grid" },
          { name: "Hybrid System", img: hybrid, path: "/hybrid-system" }
        ];
      case "Off-Grid":
        return [
          { name: "Solar Night Lamp", img: lamp, path: "/lamp" },
          { name: "Solar Samai", img: samai, path: "/samai" },
          { name: "Solar Outdoor Lights", img: outdoor, path: "/outdoor" }
        ];
      case "On-Site Distributed Solar":
        return [
          { name: "Rooftop PV Systems", img: rooftop, path: "/rooftop" },
          { name: "Ground Mounted PV", img: ground, path: "/ground" },
          { name: "Solar Carport", img: carport, path: "/carport" },
          { name: "BiPV", img: bipv, path: "/bipv" },
          { name: "Water Pumping", img: pump, path: "/water" }
        ];
      case "Financing & Models":
        return [
          { name: "Off Site / Solar Farm", img: farm, path: "/offsite" },
          { name: "Third-Party PPAs", img: ppas, path: "/ppa" },
          { name: "Captive / Group Captive", img: captive, path: "/cap" },
          { name: "CAPEX", img: capex, path: "/capex" },
          { name: "RESCO / OPEX / PPA", img: resco, path: "/resco" },
          { name: "EMI Model", img: emi, path: "/capexemi" },
          { name: "Deferred CAPEX", img: deferred, path: "/deferred" }
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-transform duration-500 group",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="relative overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 scale-y-0 group-hover:scale-y-100 origin-top bg-white z-0"></div>

          <div className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
            <Link to="/">
              <img
                src={ShreeshaLogo}
                alt="Shreesha Energy Logo"
                className="h-11 w-auto cursor-pointer"
              />
            </Link>

            <div className="md:hidden flex items-center gap-3">
              <button 
                className="p-2 rounded-full text-white hover:bg-white/20 transition"
                onClick={toggleMobileMenu}
              >
                <Menu size={20} />
              </button>
              <Link to="/solar-ecommerce">
                <button className="p-2 rounded-full text-white hover:bg-white/20 transition animate-cart-attention-mobile relative">
                  <ShoppingCart size={20} />
                </button>
              </Link>
            </div>

            <div ref={menuRef} className="ml-[32px] hidden md:flex gap-8 text-lg font-medium items-center relative group-hover:text-black transition-colors duration-300">
              {[
                { label: "Gallery", path: "/gallery" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Offerings", subMenu: true },
              ].map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "relative group px-3 py-2 rounded-md transition-all duration-300",
                    "hover:bg-gray-100 hover:text-black hover:shadow-md cursor-pointer"
                  )}
                  onMouseEnter={() => {
                    if (item.subMenu) {
                      setActiveMenu(item.label);
                      setClickLocked(false);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!clickLocked && item.subMenu) {
                      setActiveMenu(null);
                    }
                  }}
                  onClick={() => {
                    if (item.subMenu) {
                      setActiveMenu(item.label);
                      setClickLocked(true);
                    }
                  }}
                >
                  {item.path ? (
                    <Link to={item.path} className="flex items-center gap-1">
                      {item.label}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-1">
                      {item.label} {item.subMenu && <ChevronDown size={16} className="group-hover:text-black transition-colors duration-300" />}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:flex gap-4 items-center">
              <div className="relative" ref={appointmentRef}></div>
              <button
                className="px-4 py-2 bg-green-600 text-white group-hover:text-black rounded-full text-sm font-semibold shadow group-hover:bg-white transition"
                onClick={openModal}
              >
                Get Free Quote
              </button>
              <Link to="/solar-ecommerce">
                <button className="p-2 rounded-full text-white group-hover:text-black hover:bg-gray-100 transition animate-cart-attention relative">
                  <ShoppingCart size={18} />
                </button>
              </Link>
              <button 
                className="px-3 py-1 border border-white group-hover:border-black text-white text-sm rounded-full hover:bg-white group-hover:text-black transition mr-[-30px]" 
                onClick={() => setSidebarOpen(true)}
              >
                MENU
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Desktop Dropdown */}
      {activeMenu && (
        <div 
          ref={dropdownRef}
          className="fixed left-0 top-[64px] w-full bg-white/80 backdrop-blur-md shadow-2xl px-12 py-8 text-sm animate-slideDown z-40 text-black"
          onMouseEnter={() => {
            setActiveMenu("Offerings");
            setClickLocked(true);
          }}
          onMouseLeave={() => {
            if (!clickLocked) {
              setActiveMenu(null);
            }
          }}
        >
          <div className="flex justify-center gap-10 mb-8">
            {["Solar Energy System", "Off-Grid", "On-Site Distributed Solar", "Financing & Models"].map((cat, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveSub(cat)}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSub(cat);
                }}
                className={clsx(
                  "text-sm transition duration-300",
                  activeSub === cat
                    ? "text-black font-semibold underline scale-105"
                    : "text-gray-700 hover:text-black"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            key={activeSub}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-6 animate-fadeSlide"
          >
            {getSubMenuItems(activeSub).map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Link 
                  to={item.path} 
                  className="w-full flex flex-col items-center"
                  onClick={() => {
                    setActiveMenu(null);
                    setClickLocked(false);
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-42 h-28 object-cover rounded-md shadow-sm transition duration-300 hover:scale-105"
                  />
                  <div className="mt-2 text-center text-sm font-medium">{item.name}</div>
                  <div className="flex gap-2 mt-2">
                    <button 
                      className="text-xs px-3 py-1 border border-gray-400 rounded-full hover:bg-gray-100"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      Know more
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={toggleMobileMenu}>
          <div 
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <img 
                src="https://www.shreeshaenergy.com/uploads/238/business/logo_svg/235/l1.svg" 
                alt="Logo" 
                className="h-10"
              />
              <button onClick={toggleMobileMenu} className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-2">
                <Link to="/gallery" className="block py-3 px-4 hover:bg-gray-100 rounded" onClick={toggleMobileMenu}>Gallery</Link>
                <Link to="/about" className="block py-3 px-4 hover:bg-gray-100 rounded" onClick={toggleMobileMenu}>About</Link>
                <Link to="/contact" className="block py-3 px-4 hover:bg-gray-100 rounded" onClick={toggleMobileMenu}>Contact</Link>
                
                <div>
                  <button 
                    className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-100 rounded"
                    onClick={() => setMobileSubMenu(mobileSubMenu === "Offerings" ? null : "Offerings")}
                  >
                    <span>Offerings</span>
                    <ChevronDown size={16} className={mobileSubMenu === "Offerings" ? "transform rotate-180" : ""} />
                  </button>
                  
                  {mobileSubMenu === "Offerings" && (
                    <div className="pl-4 mt-2 space-y-2">
                      {["Solar Energy System", "Off-Grid", "On-Site Distributed Solar", "Financing & Models"].map((category) => (
                        <div key={category}>
                          <button 
                            className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-100 rounded"
                            onClick={() => setActiveSub(activeSub === category ? null : category)}
                          >
                            <span>{category}</span>
                            <ChevronDown size={16} className={activeSub === category ? "transform rotate-180" : ""} />
                          </button>
                          
                          {activeSub === category && (
                            <div className="pl-4 mt-2 space-y-2">
                              <div className="overflow-y-auto max-h-96">
                                {getSubMenuItems(category).map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 rounded"
                                    onClick={toggleMobileMenu}
                                  >
                                    <img
                                      src={item.img}
                                      alt={item.name}
                                      className="w-12 h-12 object-cover rounded-md mr-3"
                                    />
                                    <div>
                                      <div className="font-medium">{item.name}</div>
                                      <button className="text-xs mt-1 px-2 py-1 border border-gray-300 rounded-full">
                                        Know more
                                      </button>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <button 
                className="w-full py-3 px-4 bg-green-600 text-white rounded text-center font-medium"
                onClick={() => {
                  openModal();
                  toggleMobileMenu();
                }}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      )}

      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <style>
        {`
          /*
            Updated cart animation:
            - Brighter, eye-catching glow
            - Pops slightly out of its place (translateX/translateY)
            - Uses a 5s animation cycle so the pop happens roughly every 5s
            - Desktop and mobile variants (slightly different sizes)
          */

          @keyframes cartPop {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              box-shadow: none;
              filter: none;
            }
            6% {
              transform: translateY(-10px) translateX(6px) scale(1.36);
              box-shadow: 0 10px 30px rgba(255, 215, 0, 0.55);
              filter: drop-shadow(0 8px 18px rgba(255,215,0,0.45)) saturate(1.2);
            }
            12% {
              transform: translateY(2px) translateX(4px) scale(1.24);
            }
            18% {
              transform: translateY(-6px) translateX(6px) scale(1.28);
            }
            24% {
              transform: translateY(0) translateX(2px) scale(1.12);
            }
            30% {
              transform: translateY(-4px) translateX(3px) scale(1.18);
            }
            35% {
              transform: translateY(0) translateX(0) scale(1);
              box-shadow: 0 6px 18px rgba(255, 215, 0, 0.28);
            }
            100% {
              transform: translateY(0) translateX(0) scale(1);
              box-shadow: none;
              filter: none;
            }
          }

          /* halo pulse that fades out and repeats with the same 5s rhythm */
          @keyframes cartHalo {
            0% { opacity: 0; transform: scale(0.6); }
            6% { opacity: 0.9; transform: scale(1.15); }
            20% { opacity: 0.45; transform: scale(1.4); }
            35% { opacity: 0; transform: scale(1.8); }
            100% { opacity: 0; transform: scale(1.8); }
          }

          .animate-cart-attention {
            /* 5s cycle: animation plays quickly in the first ~35% then stays idle until the 5s repeats */
            animation: cartPop 5s ease-in-out infinite;
            will-change: transform, box-shadow, filter;
            position: relative;
            z-index: 10;
            overflow: visible;
          }

          /* Desktop halo */
          .animate-cart-attention::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 120%;
            height: 120%;
            border-radius: 999px;
            pointer-events: none;
            background: radial-gradient(circle at center, rgba(255,215,0,0.55) 0%, rgba(255,215,0,0.22) 25%, rgba(255,215,0,0.06) 50%, transparent 60%);
            mix-blend-mode: screen;
            opacity: 0;
            animation: cartHalo 5s ease-in-out infinite;
          }

          /* Mobile variant: slightly smaller halo and adjusted timings */
          .animate-cart-attention-mobile {
            animation: cartPop 5s ease-in-out infinite;
            will-change: transform, box-shadow, filter;
            position: relative;
            z-index: 10;
            overflow: visible;
          }

          .animate-cart-attention-mobile::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 110%;
            height: 110%;
            border-radius: 999px;
            pointer-events: none;
            background: radial-gradient(circle at center, rgba(255,215,0,0.6) 0%, rgba(255,215,0,0.2) 25%, transparent 50%);
            opacity: 0;
            animation: cartHalo 5s ease-in-out infinite;
          }

          /* stop animation on hover so user can click without the icon moving */
          .animate-cart-attention:hover,
          .animate-cart-attention-mobile:hover {
            animation-play-state: paused;
            transform: scale(1);
            box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          }

          /* small accessibility-friendly focus state */
          .animate-cart-attention:focus,
          .animate-cart-attention-mobile:focus {
            outline: 3px solid rgba(255,215,0,0.2);
            outline-offset: 3px;
            animation-play-state: paused;
          }

          /* if you want the icon to 'pop out' more visually from the navbar, a tiny translate on the navbar is possible via an extra utility class (optional)
             Example: .cart-out { transform: translateX(6px); } */
        `}
      </style>
    </>
  );
};

export default Navbar;
