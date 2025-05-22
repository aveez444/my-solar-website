import { useState, useRef, useEffect } from "react";
import { ChevronDown, ShoppingCart, X, } from "lucide-react";
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

import lamp from '../assets/images/Products/Lamp/Big-Lamp.png';
import samai from '../assets/images/Products/Samai/navbar.png';



const itemRoutes = {
  "On Grid / Grid-Connected": "/on-grid",
  "Off Grid": "/off-grid",
  "Hybrid System": "/hybrid-system",
  "Rooftop PV Systems": "/rooftop",
  "Ground Mounted PV": "/ground",
  "Solar Carport": "/carport",
  "BiPV": "/bipv",
  "Water Pumping": "/water",
  "Off Site / Solar Farm": "/offsite",
  "Third-Party PPAs": "/ppa",
  "Captive / Group Captive": "/cap",
  "CAPEX": "/capex",
  "RESCO / OPEX / PPA": "/resco",
  "EMI Model": "/capexemi",
  "Deferred CAPEX": "/deferred",
  "Solar Night Lamp": "/lamp",
  "Solar Samai": "/samai"
};

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [clickLocked, setClickLocked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef();
  const [activeSub, setActiveSub] = useState("Solar Energy System");
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
        setClickLocked(false);
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

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 group",
        isScrolled ? "bg-black text-white shadow-md" : "bg-transparent text-black drop-shadow-[0_0_3px_white]"
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

          {/* Desktop Navigation */}
          <div ref={menuRef} className="ml-[32px] border-white hidden md:flex gap-8 text-lg font-medium items-center relative group-hover:text-black transition-colors duration-300">
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

                {item.subMenu && activeMenu === item.label && (
                  <div className="fixed left-0 top-[64px] w-full bg-white/80 backdrop-blur-md shadow-2xl px-12 py-8 text-sm animate-slideDown z-40 text-black">
                    <div className="flex justify-center gap-14 mb-8">
                      {["Solar Energy System", "On-Site Distributed Solar", "Financing & Models", "Products"].map((cat, idx) => (
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
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 animate-fadeSlide"
                    >
                      {(activeSub === "Solar Energy System" ? [
                        { name: "On Grid / Grid-Connected", img: ongrid },
                        { name: "Off Grid", img: offgrid },
                        { name: "Hybrid System", img: hybrid }
                      ] : activeSub === "On-Site Distributed Solar" ? [
                        { name: "Rooftop PV Systems", img: rooftop },
                        { name: "Ground Mounted PV", img: ground },
                        { name: "Solar Carport", img: carport },
                        { name: "BiPV", img: bipv },
                        { name: "Water Pumping", img: pump }
                      ] : activeSub === "Financing & Models" ? [
                        { name: "Off Site / Solar Farm", img: farm },
                        { name: "Third-Party PPAs", img: ppas },
                        { name: "Captive / Group Captive", img: captive },
                        { name: "CAPEX", img: capex },
                        { name: "RESCO / OPEX / PPA", img: resco },
                        { name: "EMI Model", img: emi },
                        { name: "Deferred CAPEX", img: deferred }
                      ] : [
                        { name: "Solar Night Lamp", img: lamp },
                        { name: "Solar Samai", img: samai }
                      ]).map((item, idx) => {
                        const route = itemRoutes[item.name];
                        const CardContent = (
                          <div className="flex flex-col items-center hover:scale-105 transition">
                            <img
                              src={item.img}
                              alt={item.name}
                              loading="lazy"
                              className="w-42 h-28 object-cover rounded-md shadow-sm transition duration-300"
                            />
                            <div className="mt-2 text-center text-sm font-medium">{item.name}</div>
                            <div className="flex gap-2 mt-2">
                              <span className="text-xs px-3 py-1 border border-gray-400 rounded-full">Know more</span>
                            </div>
                          </div>
                        );
                        return route ? (
                          <Link to={route} key={idx}>{CardContent}</Link>
                        ) : (
                          <div key={idx}>{CardContent}</div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4 items-center">
        <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded-full"
      >
        Get Our Free Consultation
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button className="p-2 rounded-full text-white hover:bg-white/20 transition">
              <ShoppingCart size={20} />
            </button>
            <button 
              className="px-3 py-1 border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={20} /> : "MENU"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-black w-full absolute top-full left-0 shadow-lg z-50 animate-slideDown">
            <div className="flex flex-col py-4">
              {[
                { label: "Gallery", path: "/gallery" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Offerings", subMenu: true },
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  {item.path ? (
                    <Link 
                      to={item.path} 
                      className="block px-6 py-3 font-medium hover:bg-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="px-6 py-3">
                      <div 
                        className="flex items-center justify-between font-medium cursor-pointer"
                        onClick={() => toggleMenu(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={clsx(
                            "transition-transform duration-300",
                            activeMenu === item.label ? "rotate-180" : ""
                          )} 
                        />
                      </div>
                      
                      {activeMenu === item.label && (
                        <div className="mt-2 pl-4">
                          <div className="flex flex-col gap-2 mb-4">
                            {["Solar Energy System", "On-Site Distributed Solar", "Financing & Models"].map((cat, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveSub(cat)}
                                className={clsx(
                                  "text-left text-sm transition duration-300 py-1 px-2 rounded",
                                  activeSub === cat
                                    ? "bg-gray-100 font-semibold"
                                    : "text-gray-700 hover:bg-gray-50"
                                )}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 gap-4 pb-4">
                            {(activeSub === "Solar Energy System" ? [
                              { name: "On Grid / Grid-Connected", img: ongrid },
                              { name: "Off Grid", img: offgrid },
                              { name: "Hybrid System", img: hybrid }
                            ] : activeSub === "On-Site Distributed Solar" ? [
                              { name: "Rooftop PV Systems", img: rooftop },
                              { name: "Ground Mounted PV", img: ground },
                              { name: "Solar Carport", img: carport },
                              { name: "BiPV", img: bipv },
                              { name: "Water Pumping", img: pump }
                            ] : [
                              { name: "Off Site / Solar Farm", img: farm },
                              { name: "Third-Party PPAs", img: ppas },
                              { name: "Captive / Group Captive", img: captive },
                              { name: "CAPEX", img: capex },
                              { name: "RESCO / OPEX / PPA", img: resco },
                              { name: "EMI Model", img: emi },
                              { name: "Deferred CAPEX", img: deferred }
                            ]).map((item, idx) => {
                              const route = itemRoutes[item.name];
                              const CardContent = (
                                <div className="flex flex-col items-center hover:scale-105 transition">
                                  <img
                                    src={item.img}
                                    alt={item.name}
                                    loading="lazy"
                                    className="w-full h-28 object-cover rounded-md shadow-sm transition duration-300"
                                  />
                                  <div className="mt-2 text-center text-sm font-medium">{item.name}</div>
                                  <div className="flex gap-2 mt-2">
                                    <span className="text-xs px-3 py-1 border border-gray-400 rounded-full">Know more</span>
                                  </div>
                                </div>
                              );
                              return route ? (
                                <Link 
                                  to={route} 
                                  key={idx}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {CardContent}
                                </Link>
                              ) : (
                                <div key={idx}>{CardContent}</div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="px-6 py-4">
                 <button 
        className="w-full px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold shadow mb-4"
        onClick={() => {
          setConsultationOpen(true);
          setMobileMenuOpen(false);
        }}
      >
        Get Our Free Consultation
      </button>
                <button 
                  className="w-full px-4 py-2 border border-black text-black text-sm rounded-full hover:bg-gray-100"
                  onClick={() => {
                    setSidebarOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  OPEN SIDEBAR
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
           <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Navbar;