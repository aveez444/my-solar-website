import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  Send,
  ShoppingCart,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [clickLocked, setClickLocked] = useState(false);
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const [activeSub, setActiveSub] = useState("Solar Energy System");

  const appointmentRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Only close if the click is not on a Link within the dropdown
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                src="https://www.shreeshaenergy.com/uploads/238/business/logo_svg/235/l1.svg"
                alt="Shreesha Energy Logo"
                className="h-11 w-auto cursor-pointer"
              />
            </Link>

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
                    if (!clickLocked && item.subMenu) setActiveMenu(item.label);
                  }}
                  onMouseLeave={() => {
                    if (!clickLocked && item.subMenu) setActiveMenu(null);
                  }}
                  onClick={() => {
                    if (item.subMenu) {
                      toggleMenu(item.label);
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
              <button className="p-2 rounded-full text-white group-hover:text-black hover:bg-gray-100 transition">
                <ShoppingCart size={18} />
              </button>
              </Link>
              <button className="px-3 py-1 border border-white group-hover:border-black text-white text-sm rounded-full hover:bg-white group-hover:text-black transition mr-[-30px]" onClick={() => setSidebarOpen(true)}>
                MENU
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              
              <Link to="/solar-ecommerce">
              <button className="p-2 rounded-full text-white hover:bg-white/20 transition">
                <ShoppingCart size={20} />
              </button>
              </Link>
              <button className="px-3 py-1 border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition">
                MENU
              </button>
            </div>
          </div>
        </nav>
      </header>

      {activeMenu && (
        <div className="fixed left-0 top-[64px] w-full bg-white/80 backdrop-blur-md shadow-2xl px-12 py-8 text-sm animate-slideDown z-40 text-black">
          <div className="flex justify-center gap-10 mb-8">
            {["Solar Energy System", "Off-Grid", "On-Site Distributed Solar", "Financing & Models"].map((cat, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveSub(cat)}
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
            {(activeSub === "Solar Energy System" ? [
              { name: "On Grid / Grid-Connected", img: ongrid, path: "/on-grid" },
              { name: "Off Grid", img: offgrid, path: "/off-grid" },
              { name: "Hybrid System", img: hybrid, path: "/hybrid-system" }
            ] : activeSub === "Off-Grid" ?[
              { name: "Solar Night Lamp", img: lamp, path: "/lamp" },
              { name: "Solar Samai", img: samai, path: "/samai" }
            ] : activeSub === "On-Site Distributed Solar" ? [
              { name: "Rooftop PV Systems", img: rooftop, path: "/rooftop" },
              { name: "Ground Mounted PV", img: ground, path: "/ground" },
              { name: "Solar Carport", img: carport, path: "/carport" },
              { name: "BiPV", img: bipv, path: "/bipv" },
              { name: "Water Pumping", img: pump, path: "/water" }
            ] : [
              { name: "Off Site / Solar Farm", img: farm, path: "/offsite" },
              { name: "Third-Party PPAs", img: ppas, path: "/ppa" },
              { name: "Captive / Group Captive", img: captive, path: "/cap" },
              { name: "CAPEX", img: capex, path: "/capex" },
              { name: "RESCO / OPEX / PPA", img: resco, path: "/resco" },
              { name: "EMI Model", img: emi, path: "/capexemi" },
              { name: "Deferred CAPEX", img: deferred, path: "/deferred" }
            ]).map((item, idx) => (
              <Link key={idx} to={item.path} className="flex flex-col items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-42 h-28 object-cover rounded-md shadow-sm transition duration-300"
                />
                <div className="mt-2 text-center text-sm font-medium">{item.name}</div>
                <div className="flex gap-2 mt-2">
                  <button className="text-xs px-3 py-1 border border-gray-400 rounded-full hover:bg-gray-100">Know more</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;