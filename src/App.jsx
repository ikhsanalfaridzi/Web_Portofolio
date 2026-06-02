import Navbar from './components/Navbar'
import Me from './components/Me'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <Navbar />
      <Me />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  )
}