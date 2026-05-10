export default function Me() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 pt-36 pb-24"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-400 mb-2">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Muhammad Ikhsan
          </h1>

          <h2 className="text-xl text-gray-300 mb-6">
            Frontend Developer & Student
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Saya suka membuat website sederhana, modern, dan responsif
            menggunakan React dan Tailwind CSS.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:scale-105 transition"
            >
              Lihat Project
            </a>

            <a
              href="https://github.com/ikhsanalfaridzi"
              className="border border-gray-700 px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/src/assets/foto.jpg"
            alt="profile"
            className="w-72 h-72 object-cover rounded-3xl border border-gray-800"
          />
        </div>
      </div>
    </section>
  )
}