import React from 'react'
import Navbar from '../components/Navbar'
import QuoteForm from "../components/QuoteForm"
import Hero from "../components/Hero"
import HeroAbout from "../components/HeroAbout"
import Price from "../components/Price"
import Plan from "../components/Plan"
import Gallery from "../components/Gallery"
import Location from "../components/Location"
import Virtual from "../components/Virtual"
import Footer from "../components/Footer"
import Amenities from '../components/Amenities'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Navbar />
      <QuoteForm />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
