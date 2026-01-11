import { Mail, Download, Github, Sparkles } from "lucide-react";
import profileImage from "../../assets/8519b1be659fc3e131cfedb61dba09614ba8c034.png";

export function Home() {
  return (
    <section id="home" className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[85vh] max-w-6xl mx-auto">
      {/* Text Content */}
      <div className="flex-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6 w-fit backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 text-sm">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-white text-5xl lg:text-6xl mb-6 font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Lorenz Alcazaren
          </span>
        </h1>

        <p className="text-gray-300 text-2xl lg:text-3xl mb-6 font-light">
          IT l Aspiring Web Developer
        </p>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl leading-relaxed">
          Passionate IT student specializing in web development
          and system design. I build innovative solutions with
          modern technologies, focusing on clean code, user
          experience, and scalable architecture.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:lorenzalcazaren2@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email Me</span>
          </a>

          

          <a
            href="https://github.com/lorenz1221"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <a
          href="https://www.linkedin.com/in/lorenz-alcazaren-6359ba398/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

            {/* Image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all group-hover:scale-105 transform duration-300">
              <img
                src={profileImage}
                alt="Lorenz Alcazaren"
                className="w-full h-full object-cover"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}