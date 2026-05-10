const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'PHP',
  'Laravel',
  'MySQL',
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 px-5 py-3 rounded-xl hover:-translate-y-1 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}