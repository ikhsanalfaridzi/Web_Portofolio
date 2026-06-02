import { useState } from 'react'
import SertiFinan from '../assets/serti-finan.jpg'
import SertiFE from '../assets/serti-fe.jpg'
import SertiAI from '../assets/serti-ai.jpg'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)
  const certificates = [
    {
      title: 'Financial Literacy',
      issuer: 'Dicoding Indonesia',
      date: '23 April 2025',
      image: SertiFinan,
      credentialUrl: 'https://www.dicoding.com/',
    },
    {
      title: 'Fundamental Web Programming',
      issuer: 'Dicoding Indonesia',
      date: '12 April 2025',
      image: SertiFE,
      credentialUrl: 'https://www.dicoding.com/',
    },
    {
      title: 'Basic AI Dicoding',
      issuer: 'Dicoding Indonesia',
      date: '12 Januari 2025',
      image: SertiAI,
      credentialUrl: 'https://www.dicoding.com/',
    },
  ]

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Certificates</h2>
          <p className="text-gray-400 text-sm">Sertifikat dan pencapaian akademik / bootcamp yang saya raih.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:-translate-y-1 transition duration-300 flex flex-col justify-between group"
          >
            <div>
              <div
                className="relative overflow-hidden cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                    Lihat Gambar
                  </span>
                </div>
              </div>

              <div className="p-5">
                <span className="inline-block text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md mb-3">
                  {cert.issuer}
                </span>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-xs">{cert.date}</p>
              </div>
            </div>

            {cert.credentialUrl && (
              <div className="px-5 pb-5">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-gray-800 hover:border-gray-700 hover:bg-gray-800 text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition duration-300"
                >
                  Kredensial Resmi
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{selectedCert.title}</h3>
              <p className="text-gray-400 text-sm">{selectedCert.issuer} — {selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
