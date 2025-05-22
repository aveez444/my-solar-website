import { useState } from "react";
import { Phone, MessageCircle, Mail, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const TalkToUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [customTopic, setCustomTopic] = useState("");

  const phoneNumber = "+917020986306";
  const whatsappNumber = "+917020986306";
  const emailAddress = "shreesha.energy@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !phone || !category) {
      alert("Please fill all fields");
      return;
    }

    const topic = category === "Other" ? customTopic : category;
    
    emailjs.send(
      "service_e0owvxr",
      "template_gwdd29g",
      {
        name: name,
        phone: phone,
        topic: topic,
      },
      "Wh7iX-UXO1TeE9sgj" 
    )
    .then((response) => {
      alert('Enquiry sent successfully!');
    }, (error) => {
      alert('Failed to send enquiry. Please try again.');
    });
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    if (!name || !category) {
      alert("Please enter your name and select a topic first");
      return;
    }
    const topic = category === "Other" ? customTopic : category;
    const message = encodeURIComponent(`Hi, I'm ${name}, I want to enquire about ${topic}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    if (!name || !phone || !category) {
      alert("Please fill all fields first");
      return;
    }
    const topic = category === "Other" ? customTopic : category;
    const subject = encodeURIComponent(`Enquiry about ${topic}`);
    const body = encodeURIComponent(
      `Hi,\n\nI'm ${name}, I want to enquire about ${topic}.\n\nContact Number: ${phone}\n\nRegards,\n${name}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-4xl w-full mx-auto p-8 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Contact Our Solar Experts</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900">
          <div>
            <input
              type="text"
              placeholder="Your Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Mobile Number*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
              required
            />
          </div>
          <div className="md:col-span-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
              required
            >
              <option value="" className="text-gray-900">Select Topic*</option>
              <option value="On Grid Solar" className="text-gray-900">On Grid Solar</option>
              <option value="Off Grid Solar" className="text-gray-900">Off Grid Solar</option>
              <option value="Hybrid Solar System" className="text-gray-900">Hybrid Solar System</option>
              <option value="Rooftop Solar" className="text-gray-900">Rooftop Solar</option>
              <option value="Ground Mounted Solar" className="text-gray-900">Ground Mounted Solar</option>
                <option value="Solar Carport" className="text-gray-900">Solar Carport</option>
  <option value="BiPV" className="text-gray-900">BiPV</option>
  <option value="Water Pumping" className="text-gray-900">Water Pumping</option>
  <option value="Off Site / Solar Farm" className="text-gray-900">Off Site / Solar Farm</option>
  <option value="Third-Party PPAs" className="text-gray-900">Third-Party PPAs</option>
  <option value="Captive / Group Captive" className="text-gray-900">Captive / Group Captive</option>
  <option value="CAPEX" className="text-gray-900">CAPEX</option>
  <option value="RESCO / OPEX / PPA" className="text-gray-900">RESCO / OPEX / PPA</option>
  <option value="EMI Model" className="text-gray-900">EMI Model</option>
  <option value="Deferred CAPEX" className="text-gray-900">Deferred CAPEX</option>
              <option value="Other" className="text-gray-900">Other</option>
            </select>
          </div>
          {category === "Other" && (
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Please specify your topic*"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <button
            type="button"
            onClick={handleCall}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Phone size={18} /> Call Us
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors"
          >
            <MessageCircle size={18} /> WhatsApp
          </button>
          <button
            type="button"
            onClick={handleEmail}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
          >
            <Mail size={18} /> Email Us
          </button>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            <Send size={18} /> Send Enquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default TalkToUs;