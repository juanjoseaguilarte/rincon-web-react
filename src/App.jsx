import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/variables.css'
import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Reviews from './components/Reviews'
import Carta from './components/Carta'
import Reservas from './components/Reservas'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 100, once: true })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Reviews />
        <Carta />
        <Reservas />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
