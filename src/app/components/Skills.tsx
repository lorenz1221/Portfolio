export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "Basic Javascript",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Django"],
    },
    {
      title: "Database",
      skills: ["MySQL", "Database Design", "SQL Queries"],
    },
    {
      title: "Tools & Practices",
      skills: ["Git & GitHub", "VS Code", "Figma"],
    },
    {
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "SQL",
        "HTML/CSS",
      ],
    },
  ];

  return (
    <section id="skills" className="py-8 max-w-7xl mx-auto">
      <h1 className="text-white text-5xl mb-3 font-bold">
        Skills & Tools
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-4"></div>
      <p className="text-gray-400 mb-10 max-w-3xl">
        Technical skills acquired through coursework, personal
        projects, and professional experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
          >
            <h2 className="text-white text-xl mb-4 font-semibold">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-gray-300 rounded-lg hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-default text-sm border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}