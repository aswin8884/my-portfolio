import { useEffect, useState } from 'react';
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (!project) return null;

  const images = project.images || [];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const getTechGlowClass = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return 'hover:text-[#61DAFB] hover:border-[#61DAFB] hover:shadow-[0_0_12px_rgba(97,218,251,0.4)]';
    if (t.includes('python')) return 'hover:text-[#FFE873] hover:border-[#3776AB] hover:shadow-[0_0_12px_rgba(55,118,171,0.5)]';
    if (t.includes('fastapi')) return 'hover:text-[#009688] hover:border-[#009688] hover:shadow-[0_0_12px_rgba(0,150,136,0.4)]';
    if (t.includes('gemini') || t.includes('ai')) return 'hover:text-[#8E75FF] hover:border-[#8E75FF] hover:shadow-[0_0_12px_rgba(142,117,255,0.4)]';
    if (t.includes('django')) return 'hover:text-[#44B78B] hover:border-[#44B78B] hover:shadow-[0_0_12px_rgba(68,183,139,0.4)]';
    if (t.includes('tailwind')) return 'hover:text-[#38B2AC] hover:border-[#38B2AC] hover:shadow-[0_0_12px_rgba(56,178,172,0.4)]';
    return 'hover:text-brand hover:border-brand hover:shadow-[0_0_12px_rgba(168,85,247,0.5)]';
  };

  return (
    <div className="fixed inset-0 bg-[#070a12]/95 backdrop-blur-[15px] flex justify-center items-center z-[9999] p-4 md:p-10">
      
      <div className="bg-slate-800 rounded-[32px] w-full max-w-[1200px] max-h-[90vh] border border-white/10 overflow-hidden relative flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 bg-black/40 hover:bg-red-500 text-white backdrop-blur-md border border-white/10 rounded-full w-10 h-10 z-[110] flex justify-center items-center transition-all duration-300 hover:rotate-90"
        >
          <FiX size={20} />
        </button>

        {/* --- IMAGE VIEWER SECTION --- */}
        <div className="relative w-full h-[300px] md:h-[500px] bg-slate-900 overflow-hidden flex justify-center items-center">
          
          {/* Blurred background layer to fix the "not fitting" look */}
          <div 
            className="absolute inset-0 opacity-30 blur-2xl scale-110"
            style={{ 
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Main Content Image */}
          <img 
            src={images[currentImageIndex] || "/no_image.jpg"} 
            alt={project.title} 
            className="relative z-10 max-w-full max-h-full object-contain transition-all duration-500 ease-in-out"
          />

          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-4 z-[100] p-3 bg-black/20 hover:bg-brand rounded-full text-white backdrop-blur-md border border-white/10 transition-all"><FiChevronLeft size={24}/></button>
              <button onClick={nextImage} className="absolute right-4 z-[100] p-3 bg-black/20 hover:bg-brand rounded-full text-white backdrop-blur-md border border-white/10 transition-all"><FiChevronRight size={24}/></button>
            </>
          )}
        </div>

        {/* --- DETAILS SECTION --- */}
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                {project.title}
              </h2>
              <div className="flex gap-2 mb-4">
                {images.map((_, index) => (
                  <div key={index} className={`h-1 rounded-full transition-all duration-500 ${currentImageIndex === index ? 'w-8 bg-brand' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </div>
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(168,85,247,0.5)] hover:-translate-y-1 active:scale-95"
              >
                <FiExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                Live Demo
              </a>
            )}
          </div>

          <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-medium mb-10 max-w-4xl">
            {project.longDescription || project.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Technology Toolkit</h3>
            <div className="flex gap-3 flex-wrap">
              {project.techStack?.map((tech, index) => (
                <span 
                  key={index} 
                  className={`bg-slate-900/50 text-slate-300 px-5 py-2.5 rounded-xl text-sm font-bold border border-white/5 transition-all duration-300 ${getTechGlowClass(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;