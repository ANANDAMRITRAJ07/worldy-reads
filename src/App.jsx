import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Masthead from './sections/Masthead'
import Footer from './sections/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <Masthead />
      <main id="main">
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}