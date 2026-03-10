import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import { AdminProvider } from './context/AdminContext'
import AdminLogin from './admin/AdminLogin'
import AdminPanel from './admin/AdminPanel'

function PublicSite() {
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

function ProtectedAdmin() {
  if (!sessionStorage.getItem('admin-token')) {
    return <Navigate to="/admin/login" replace />
  }
  return <AdminPanel />
}

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicSite />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<ProtectedAdmin />} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  )
}

export default App
