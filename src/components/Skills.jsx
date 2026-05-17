import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-orange-500",
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
    },

    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-400",
    },

    {
      name: "React.js",
      icon: <FaReact />,
      color: "text-cyan-400",
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24 scroll-mt-28"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-pink-400 uppercase tracking-[4px] mb-3 font-semibold">
          My Stack
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-5">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          To create responsive, modern and premium web
          experiences, I make use of the following:
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-5 backdrop-blur-xl hover:border-pink-500/40 hover:-translate-y-3 hover:scale-105 transition duration-500"
          >
            {/* Icon */}
            <div
              className={`text-6xl ${skill.color} group-hover:rotate-12 transition duration-500`}
            >
              {skill.icon}
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-16">
        <p className="text-gray-500">Always learning new technologies 🚀</p>
      </div>
    </section>
  );
}

export default Skills;
