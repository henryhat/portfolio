import { FaGithub, FaLinkedin, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import PP2 from "../assets/PP2.png"

function About() {
  return (
    <section className="relative min-h-screen pt-28 bg-[#050816] text-white overflow-hidden flex items-center px-6 md:px-20">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* LEFT SIDE */}
        <div className="space-y-7 animate-fadeInUp mt-6">
          <span className="px-4 py-3 rounded-full bg-white/10 border border-white/10 text-sm text-pink-400">
            👋 Available for Work
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mt-3">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Henry.
            </span>
          </h1>

          <h2 className="text-2xl md:text-5xl font-bold text-gray-200">
            Frontend Developer crafting premium web experiences.
          </h2>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            I build fast, responsive and visually stunning websites using React,
            Tailwind CSS and modern frontend tools that help brands stand out
            online.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-7 py-4 rounded-2xl bg-linear-to-r from-pink-400 to-blue-400 font-semibold hover:scale-105 duration-300 flex items-center gap-2 shadow-xl">
              View Projects <FaArrowRight />
            </button>

            <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/30 duration-300">
              Hire Me
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            <div>
              <h3 className="text-2xl font-bold text-pink-400">5+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-400">3+</h3>
              <p className="text-gray-400 text-sm">Months Learning</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400">100%</h3>
              <p className="text-gray-400 text-sm">Passion</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-3 text-2xl text-gray-400 mb-5">
            <a href="https://github.com/henryhat">
              <FaGithub className="hover:text-white cursor-pointer duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/odeyale-ayobami-henry-123855390?utm_source=share_via&utm_content=profile&utm_medium=member_android">
              <FaLinkedin className="hover:text-blue-400 cursor-pointer duration-300" />
            </a>
            <a href="https://wa.me/qr/URUROKTVR4CWN1">
              {" "}
              <FaWhatsapp className="hover:text-green-400 cursor-pointer duration-300" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Rotating Glow Border */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-pink-300 to-blue-500 blur-xl opacity-70 animate-spin-slow"></div>

            {/* Image */}
            <div className="relative w-80 h-80 `md:w-105` `md:h-105` rounded-full p-2 bg-white/10 backdrop-blur-xl border border-white/10 mt-(-10)">
              <img
                src={PP2}
                alt="Henry"
                className="w-full h-full rounded-full object-cover hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
