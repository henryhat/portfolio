import { useState } from "react";

function ContactForm({setShowForm}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [projectType, setProjectType] = useState("Website");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Normal");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Henry, I saw your portfolio. Hence, my reason for reaching out

Name: ${name}
How to Reach Me: ${contact}
Project Type: ${projectType}
Priority: ${priority}
Job Description: ${description}
Proposed Amount: ${budget}
Deadline: ${deadline}
`;

    const url =
      "https://wa.me/2348022401813?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  };

  return (
    <section id="ContactForm" 
     className="min-h-screen bg-[#050816] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl mt-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Let’s Build Something Great 🚀
        </h2>

        <p className="text-gray-400 mb-8">
          Fill this form and send your project directly to my WhatsApp.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-pink-500"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">
              How to Reach You
            </label>
            <input
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Email / WhatsApp / LinkedIn"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">
              Project Type
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
            >
              <option> Website</option>
              <option>Landing Page</option>
              <option>E-commerce</option>
              <option>Portfolio</option>
              <option>Web App</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
            >
              <option>Normal</option>
              <option>Urgent</option>
              <option>ASAP</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">
              Job Description
            </label>
            <textarea
              rows="5"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Summary of the project..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none resize-none focus:border-pink-500"
            ></textarea>
          </div>

          {/* Budget */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">
              Proposed Amount
            </label>
            <input
              type="text"
              required
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="₦500,000 / $500"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-green-500"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">Deadline</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-linear-to-r from-pink-500 to-blue-500 text-white font-semibold hover:scale-[1.02] duration-300 shadow-xl"
          >
            Send to WhatsApp
          </button>

          <p className="text-center text-sm text-gray-500">
            Average response time: under 24 hours
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
