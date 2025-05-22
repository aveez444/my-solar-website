import { useState } from "react";
import { PhoneCall, Send } from "lucide-react";

const TalkToUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [customTopic, setCustomTopic] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !category) {
      alert("Please fill all fields");
      return;
    }

    const topic = category === "Other" ? customTopic : category;
    const text = encodeURIComponent(
      `New inquiry from website:\nName: ${name}\nPhone: ${phone}\nTopic: ${topic}`
    );

    const callmebotURL = `https://api.callmebot.com/whatsapp.php?phone=+919518337344&text=${text}&apikey=YOUR_API_KEY`;

    fetch(callmebotURL)
      .then(res => alert("Message sent successfully!"))
      .catch(err => alert("Failed to send message."));
  };

  const handleCall = () => {
    window.location.href = "tel:+919518337344";
  };

  return (
    <div className="max-w-xl w-11/12 mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Talk To Us & Learn More!</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="tel"
          placeholder="Your Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border rounded-md"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Select a Topic</option>
          <option value="On Grid / Grid-Connected">On Grid / Grid-Connected</option>
          <option value="Off Grid">Off Grid</option>
          <option value="Hybrid System">Hybrid System</option>
          <option value="Rooftop PV Systems">Rooftop PV Systems</option>
          <option value="Ground Mounted PV">Ground Mounted PV</option>
          <option value="Other">Other</option>
        </select>
        {category === "Other" && (
          <input
            type="text"
            placeholder="Enter your topic"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            className="p-2 border rounded-md"
          />
        )}

        <div className="flex gap-4 justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Send size={16} /> Submit
          </button>
          <button
            onClick={handleCall}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <PhoneCall size={16} /> Make a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
