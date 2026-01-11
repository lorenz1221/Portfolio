import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// 🔒 DO NOT TOUCH – Savage Guns assets (already valid in Figma)
import savageGunsImg1 from "../../assets/c206110889c1188a4cdc750c0afa25d7bde56f40.png";
import savageGunsImg2 from "../../assets/17d4c9e834d29d06248cee18c0f12fd965ac4238.png";
import savageGunsImg3 from "../../assets/125d9ca714ec1565e73ea094b5814defa718813d.png";
import unaImg from "../../assets/una.png";
import duwaImg from "../../assets/duwa.png";
import tatloImg from "../../assets/tatlo.png";

export function Projects() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeImages, setActiveImages] = useState<string[]>(
    [],
  );

  // 🔒 Savage Guns images (unchanged)
  const savageGunsImages = [
    savageGunsImg1,
    savageGunsImg2,
    savageGunsImg3,
  ];

  // ✅ Figma-safe images for Restaurant Management System
  const budgetTrackerImages = [
    unaImg,
    duwaImg,
    tatloImg,
  ];

  const projects = [
    {
      id: 1,
      title: "Savage Guns",
      description:
        "Savage Gun Shop delivers precision firearms and reliable gear for shooters who demand performance, durability, and accuracy every time.",
      images: savageGunsImages,
      tags: ["Html", "Css", "JavaScript", "Tailwind"],
      type: "Academic Group Project",
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description:
        "Mobile responsive web app for tracking expenses and visualizing spending patterns.",
      images: budgetTrackerImages,
      tags: [
        "Html",
        "Css",
        "JavaScript",
        "Tailiwnd",
        "Php",
        "Laravel",
      ],
      type: "Personal Project",
    },
  ];

  // ✅ Open gallery
  const handleOpenGallery = (images: string[]) => {
    setActiveImages(images);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === activeImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1,
    );
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
    setCurrentImageIndex(0);
    setActiveImages([]);
  };

  // ✅ KEYBOARD NAVIGATION FIX
  useEffect(() => {
    if (!galleryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "Escape") {
        handleCloseGallery();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen, activeImages]);

  return (
    <section id="projects" className="py-8 max-w-7xl mx-auto">
      <h1 className="text-white text-5xl mb-3 font-bold">
        Projects
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-4" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all"
          >
            {/* CLICKABLE IMAGE */}
            <div
              className="h-56 overflow-hidden relative cursor-pointer"
              onClick={() => handleOpenGallery(project.images)}
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs bg-black/60 text-cyan-300 rounded-full">
                  {project.type}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-white text-xl mb-3 font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-lg border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE GALLERY MODAL */}
      {galleryOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={handleCloseGallery}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={handleCloseGallery}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={handlePrevImage}
              className="absolute left-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <div className="max-w-6xl max-h-[90vh] px-20">
              <img
                src={activeImages[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            {/* Next */}
            <button
              onClick={handleNextImage}
              className="absolute right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {activeImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}