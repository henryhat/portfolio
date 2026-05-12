import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'


const Home = () => {
  return (
    <div className="scroll-behavior: scroll-smooth">
      <Navbar />
      <section id='home'>
        <HeroSection />
      </section>
      <ContactForm />
    </div>
  );
}

export default Home