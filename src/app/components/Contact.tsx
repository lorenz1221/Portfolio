import { Mail, Linkedin, Github, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-8 max-w-7xl mx-auto">
      <h1 className="text-white text-5xl mb-3 font-bold">
        Contact
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-4"></div>
      <p className="text-gray-400 text-lg mb-10 max-w-3xl">
        I'm actively seeking internship opportunities and
        collaborative projects. Whether you're looking for a
        dedicated team member or want to discuss a project idea,
        I'd love to connect!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="mailto:lorenz.alcazaren@university.edu"
          className="group backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all flex items-center gap-4"
        >
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg shadow-cyan-500/30">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white mb-1 font-semibold">
              Email
            </h3>
            <p className="text-gray-400 text-sm">
              lorenzalcazaren2@gmail.com
            </p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/lorenz-alcazaren-6359ba398/"
          target="_blank"
          rel="noopener noreferrer"
          className="group backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all flex items-center gap-4"
        >
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg shadow-cyan-500/30">
            <Linkedin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white mb-1 font-semibold">
              LinkedIn
            </h3>
            <p className="text-gray-400 text-sm">
              linkedin.com/in/lorenz-alcazaren-6359ba398
            </p>
          </div>
        </a>

        <a
          href="https://github.com/lorenz1221"
          target="_blank"
          rel="noopener noreferrer"
          className="group backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all flex items-center gap-4"
        >
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg shadow-cyan-500/30">
            <Github className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white mb-1 font-semibold">
              GitHub
            </h3>
            <p className="text-gray-400 text-sm">
              github.com/lorenzalcazaren
            </p>
          </div>
        </a>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg shadow-cyan-500/30">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white mb-1 font-semibold">
              Phone
            </h3>
            <p className="text-gray-400 text-sm">
              +63 951 135 2543
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}