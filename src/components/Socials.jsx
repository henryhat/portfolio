import React from 'react'
import { FaGithub, FaLinkedin, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const Socials = () => {
  return (
    <div id='contact'>
             {/* Social Icons */}
                  <div
                  className="flex gap-5 pt-3 text-2xl text-gray-400 mb-5">
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
  )
}

export default Socials