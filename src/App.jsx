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
