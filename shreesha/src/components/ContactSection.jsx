import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactImg from "../assets/images/getintouch.png"; // Replace with actual image path

const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-white to-green-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Image */}
        <img
          src={contactImg}
          alt="Contact Us"
          className="rounded-2xl shadow-xl w-full h-auto object-cover"
        />

        {/* Right: Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Get in Touch - Let's Connect</h2>
          <p className="text-gray-700 text-lg">
            Reach out to us for expert advice, project estimates, or just to know how solar can work for you.
            Our team is ready to assist!
          </p>

          {/* Buttons in Grid Pattern */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {/* Call Button */}
            <a
              href="tel:+919876543210"
              className="group flex flex-col items-center justify-center bg-white border border-green-100 hover:bg-green-600 hover:text-white shadow-md p-6 rounded-xl transition-all duration-300 text-center"
            >
              <div className="bg-green-100 group-hover:bg-white text-green-700 group-hover:text-green-600 p-3 rounded-full mb-3 transition">
                <FaPhoneAlt size={20} />
              </div>
              <span className="font-medium">Make a Call</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:info@shreeshasolar.com"
              className="group flex flex-col items-center justify-center bg-white border border-green-100 hover:bg-green-600 hover:text-white shadow-md p-6 rounded-xl transition-all duration-300 text-center"
            >
              <div className="bg-green-100 group-hover:bg-white text-green-700 group-hover:text-green-600 p-3 rounded-full mb-3 transition">
                <FaEnvelope size={20} />
              </div>
              <span className="font-medium">Email Us</span>
            </a>

            {/* Location Button */}
            <a
              href="https://www.google.com/maps?q=Shreesha+Solar+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center bg-white border border-green-100 hover:bg-green-600 hover:text-white shadow-md p-6 rounded-xl transition-all duration-300 text-center"
            >
              <div className="bg-green-100 group-hover:bg-white text-green-700 group-hover:text-green-600 p-3 rounded-full mb-3 transition">
                <FaMapMarkerAlt size={20} />
              </div>
              <span className="font-medium">Find Location</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
