export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-800 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        <div className="flex justify-center gap-6 text-gray-400 mb-6">
          <a
            href="https://github.com/"
            className="hover:text-white transition"
          >
            Github
          </a>

          <a
            href="https://instagram.com/"
            className="hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://linkedin.com/"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Muhammad Ikhsan Alfaridzi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}