import React from 'react'
import Art from "../assets/Art.png"
import Getty from '../assets/Getty.png'
import Agric from "../assets/Agric.png"


const projects = [
  {
    title: " Modern Art Auction/Bidding Website",
    description:
      " A premium responsive website built using React.js and TailwindCSS with smooth animations and modern UI designs. A functionality extension of the normal e-commerce websites.",
    image: Art,
    live: "https://hackathon-nvcy.vercel.app/",
    github: "https://github.com/henryhat",
    tech1: "React",
    tech2: "Tailwind",
    tech3: "JavaScript",
  },

  {
    title: "Website Clones",
    description:
      "While learning was still very much underway, here are real websites i practiced with. The imperfections reflect my early days of building. Click to view the demo websites I created with just HTML5, CSS3, and Basic JS.",
    image: Getty,
    live: "https://gettyresp.vercel.app/",
    github: "https://github.com/henryhat",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },

  {
    title: "Agrochemical E-Commerce",
    description:
      "A sleek ecommerce frontend interface with premium design displaying items for sales and a smooth ordering process.",
    image: Agric,
    live: "https://agroshop-six.vercel.app/",
    github: "https://github.com/henryhat",
    tech1: "React",
    tech2: "Tailwind",
    tech3: "JavaScript",
  },
];
function Projects() {
return (
  <section id='projects'>
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 scroll-mt-28">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-pink-500/40 hover:-translate-y-3 transition duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm">
                {project.tech1}
              </span>

              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                {project.tech2}
              </span>

              <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm">
                {project.tech3}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2 mt-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3 rounded-xl bg-linear-to-r from-pink-500 to-blue-500 font-semibold hover:scale-105 transition duration-300"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3 rounded-xl border border-white/10 hover:bg-white/10 transition duration-300"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}


export default Projects 