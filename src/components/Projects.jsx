import covidImg from '../assets/Covid-19.png';
import instagramImg from '../assets/instagram-clone.png';

export default function Projects() {
  const projects = [
    {
      title: 'Instagram-Clone',
      desc: 'Aplikasi kloning Instagram yang dibuat dengan laravel dan menggunakan database SQL',
      image: instagramImg, 
      github: 'https://github.com/ikhsanalfaridzi/Instagram-clone.git',
    },
    {
      title: 'Project Covid 19',
      desc: 'Project tentang artikel Covid 19 yang dibuat dengan React.js dan menggunakan API.',
      image: covidImg,
      github: 'https://github.com/ikhsanalfaridzi/Project-Covid-19.git',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:-translate-y-1 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}