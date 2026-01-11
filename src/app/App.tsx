import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-teal-950">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-teal-900/20 pointer-events-none"></div>

      <Navbar />

      <main className="relative pt-20">
        <div className="container mx-auto px-6 lg:px-12 py-8 space-y-24">
          <Home />
          <About />
          <Projects />
          <Certificates />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}
