import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"
import ContactForm from "./ContactForm" 

const Links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
   const [showForm, setShowForm] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href=""
            className="text-2xl font-black tracking-wide text-white w-30"
          >
            <img src={logo} alt="logo" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            {Links.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <li>
            <button className="hidden md:block px-6 py-3 rounded-xl bg-linear-to-r from-pink-500 to-blue-500 font-semibold hover:scale-105 duration-300 shadow-lg">
              <a href="#ContactForm">Let’s Talk</a>
            </button>
          </li>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0b1023]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6">
            <ul className="flex flex-col gap-5 text-gray-300 font-medium">
              <li>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>

              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>

              <li>
                <a href="#skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <li>
                <button className="hidden md:block px-6 py-3 rounded-xl bg-linear-to-r from-pink-500 to-blue-500 font-semibold hover:scale-105 duration-300 shadow-lg">
                  <a href="#ContactForm">Let’s Talk</a>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {showForm && <ContactForm setShowForm={setShowForm} />}
    </>
  );
}

export default Navbar;
