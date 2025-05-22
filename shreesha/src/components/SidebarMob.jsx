import { Link } from "react-router-dom";
import { X } from "lucide-react";

const SidebarMob = ({ isOpen, onClose }) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 bg-black/50 transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {[
            { label: "Gallery", path: "/gallery" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
            { label: "Our Mission", path: "/mission" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={onClose}
              className="text-base font-medium text-gray-800 hover:text-black hover:bg-gray-100 p-2 rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarMob;