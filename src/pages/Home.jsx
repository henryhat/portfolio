import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className="scroll-behavior: scroll-smooth bg-[#050816]">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home