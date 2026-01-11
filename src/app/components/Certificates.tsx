import { useState } from "react";

import cert1 from "../../assets/32f0856e4ca043f29c7c07081d07d2aca3bedd6c.png";
import cert2 from "../../assets/25104cbd61743c42f1fc25ef5904e14949799095.png";

// NEW CERTS
import certSQL from "../../assets/3d828e055f14abd665c19aa4d54e7c29dab37925.png";
import certIgnite from "../../assets/719e36d896ea80f051d92eee590a76364f08e41c.png";
import certWeb from "../../assets/0de2e3a2f1ac88dc2433f924b68b1b733fcaefd7.png";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Cybersecurity Awareness: AI",
      issuer: "LinkedIn Learning",
      date: "December 18, 2025",
      image: cert1,
      skills: [
        "AI Security",
        "Security Awareness",
        "Artificial Intelligence (AI)",
      ],
    },
    {
      id: 2,
      title: "Cybersecurity with Cloud Computing",
      issuer: "LinkedIn Learning",
      date: "December 18, 2025",
      image: cert2,
      skills: ["Cybersecurity", "Cloud Security"],
    },
    {
      id: 3,
      title: "SQL for Data Analysis",
      issuer: "LinkedIn Learning",
      date: "December 18, 2025",
      image: certSQL,
      skills: ["SQL", "Data Analysis"],
    },
    {
      id: 4,
      title: "Ignite Bootcamp – Venture Idea Development",
      issuer: "Wadhwani Foundation",
      date: "December 10, 2025",
      image: certIgnite,
      skills: [
        "Ideation",
        "Prototyping",
        "Business Modeling",
        "Financial Planning",
      ],
    },
    {
      id: 5,
      title: "Introduction to Web Design and Development",
      issuer: "LinkedIn Learning",
      date: "December 9, 2025",
      image: certWeb,
      skills: ["Web Design", "Web Development", "HTML"],
    },
  ];

  return (
    <section id="certificates" className="py-8 max-w-7xl mx-auto">
      <h1 className="text-white text-5xl mb-3 font-bold">
        Certificates & Awards
      </h1>

      <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-4"></div>

      <p className="text-gray-400 mb-10 max-w-3xl">
        Professional certifications demonstrating continuous
        learning and technical expertise.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="group backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all hover:scale-105 cursor-pointer"
          >
            <div className="bg-white">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {cert.title}
              </h3>
              <p className="text-cyan-400 text-sm">
                {cert.issuer}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                {cert.date}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-lg border border-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black"
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}