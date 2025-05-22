// ConsultationModal.jsx
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import emailjs from "emailjs-com";

const ConsultationModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    company: "",
    location: "",
    email: "",
    phone: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo("#consultationModal", { opacity: 0, scale: 0.9 }, {
        opacity: 1, scale: 1, duration: 0.4, ease: "power2.out"
      });
    }
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.company || !form.location || !form.email || !form.phone) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    emailjs.send( "service_e0owvxr",     // Replace with your EmailJS Service ID
      "template_gwdd29g",    // Replace with your EmailJS Template ID
      form,
      "Wh7iX-UXO1TeE9sgj"   )
      .then(() => {
        alert("Consultation request sent successfully!");
        setForm({ company: "", location: "", email: "", phone: "", budget: "" });
        setLoading(false);
        onClose();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div id="consultationModal" className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Free Solar Consultation</h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            placeholder="Company Name *"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location *"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address *"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Contact Number *"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Estimated Budget (in ₹)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ConsultationModal;
