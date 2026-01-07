import { Briefcase, GraduationCap } from "lucide-react";

export function About() {
  return (
    <div className="py-8 max-w-7xl mx-auto">
      <h1 className="text-white text-5xl mb-3 font-bold">
        About Me
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT – ABOUT ME */}
        <div className="group backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg shadow-cyan-500/30">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold">
              About Me
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            I am an{" "}
            <span className="text-cyan-400 font-semibold">
              aspiring web developer
            </span>{" "}
            who enjoys building simple, modern, and responsive
            websites.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            I use{" "}
            <span className="text-cyan-400 font-semibold">
              AI tools
            </span>{" "}
            to help me learn faster, improve my code, and
            understand best practices, always with good and
            responsible intentions.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My goal is to continuously learn, improve my skills,
            and create useful web applications that provide real
            value to users.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            <span className="text-cyan-400 font-semibold">Address:</span>{" "}
            Culajao, Roxas City, Capiz
          </p>
        </div>

        {/* RIGHT – EDUCATION */}
        <div className="group backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl shadow-lg shadow-teal-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            <div className="pl-4 border-l-2 border-teal-500/30 hover:border-teal-500 transition-colors">
              <h3 className="text-white mb-1 font-semibold">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-teal-400 text-sm mb-2">
                Filamer Christian University
              </p>
              <p className="text-gray-400 text-sm mb-2">
                2026 – Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}