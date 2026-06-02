export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold tracking-wide">Ikhsan.dev</h1>

        <ul className="flex gap-6 text-sm text-gray-300">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" className="hover:text-white transition">
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}