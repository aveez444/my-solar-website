import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-xl z-50 px-6 pt-8 pb-6 overflow-y-auto"
        >
          <div className="flex justify-end mb-8">
            <button onClick={onClose} className="text-gray-700 hover:text-black">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-gray-900">
            {/* Top Links */}
            <div className="flex flex-col space-y-5 text-base font-medium leading-6">
              <a href="#faq" className="hover:underline">FAQ</a>
              <a href="#shop" className="hover:underline">Shop Solar Solutions</a>
              <a href="#orders" className="hover:underline">View & Manage Orders</a>
              <a href="#contact" className="hover:underline">Contact Us</a>
              <a href="#support" className="hover:underline">Have a Query? Connect on Call</a>
              <a href="#estimate" className="hover:underline">Know Your Solar Expense – Free Estimate</a>
            </div>

            <hr className="border-gray-200" />

            {/* Categories */}
            {/* <div className="text-base font-medium leading-6 space-y-3">
              <h2 className="text-gray-800 font-semibold">Explore Categories</h2>
              <div className="grid grid-cols-1 gap-y-3 text-gray-700">
                <span>On Grid / Grid-Connected</span>
                <span>Off Grid</span>
                <span>Hybrid System</span>
                <span>Rooftop PV Systems</span>
                <span>Ground Mounted PV</span>
                <span>Solar Carport</span>
                <span>BiPV (Building Integrated PV)</span>
                <span>Water Pumping</span>
                <span>Off-Site / Solar Farm</span>
                <span>Third-Party PPAs</span>
                <span>Captive / Group Captive</span>
                <span>CAPEX Model</span>
                <span>RESCO / OPEX / PPA</span>
                <span>EMI Model</span>
                <span>Deferred CAPEX</span>
              </div>
            </div> */}

            <hr className="border-gray-200" />

            <div className="text-sm text-gray-500 mt-4">
              🔆 Go solar with confidence. Sustainable energy starts here.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
