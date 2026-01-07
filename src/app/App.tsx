import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'certificates':
        return <Certificates />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-teal-950">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-teal-900/20 pointer-events-none"></div>
      
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative pt-20">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}
