import { useEffect, useState } from 'react';
import { FiExternalLink, FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

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
    if (t.includes('react')) return 'hover:text-[#61DAFB] hover:border-[#61DAFB] hover:shadow-[0_0_15px_rgba(97,218,251,0.5)]';
    if (t.includes('python')) return 'hover:text-[#3776AB] hover:border-[#3776AB] hover:shadow-[0_0_15px_rgba(55,118,171,0.5)]';
    if (t.includes('fastapi')) return 'hover:text-[#05998b] hover:border-[#05998b] hover:shadow-[0_0_15px_rgba(5,153,139,0.5)]';
    if (t.includes('xgboost') || t.includes('ml')) return 'hover:text-[#ff6122] hover:border-[#ff6122] hover:shadow-[0_0_15px_rgba(255,97,34,0.5)]';
    if (t.includes('django')) return 'hover:text-[#44B78B] hover:border-[#44B78B] hover:shadow-[0_0_15px_rgba(68,183,139,0.4)]';
    return 'hover:text-brand hover:border-brand hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]';
  };

  return (
    <div className="fixed inset-0 bg-[#070a12]/95 backdrop-blur-xl flex justify-center items-center z-[9999] p-4 md:p-8">
      
      {/* Premium "Lift & Focus" Animation */}
      <style>{`
        @keyframes studioFadeIn {
          0% { opacity: 0; filter: blur(10px); transform: scale(0.95) translateY(15px); }
          100% { opacity: 1; filter: blur(0px); transform: scale(1) translateY(0); }
        }
        .animate-studio-slide { animation: studioFadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        
        /* Subtle dotted background pattern */
        .bg-dot-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      <div className="bg-slate-800/90 rounded-[32px] w-full max-w-[1200px] max-h-[95vh] border border-white/10 overflow-hidden relative flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.9)]">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 bg-black/40 hover:bg-red-500 text-white p-3 rounded-full z-[110] transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-xl border border-white/10 backdrop-blur-md">
          <FiX size={24} />
        </button>

        {/* --- STUDIO SHOWCASE IMAGE SECTION --- */}
        <div className="relative w-full h-[350px] md:h-[550px] bg-[#02040a] flex justify-center items-center border-b border-slate-800 overflow-hidden p-6 md:p-12">
          
          {/* 1. Technical Dot Grid Background */}
          <div className="absolute inset-0 bg-dot-pattern opacity-50 z-0"></div>

          {/* 2. Soft Ambilight Glow */}
          <div 
            className="absolute inset-0 bg-cover bg-center blur-[80px] opacity-40 scale-125 transition-all duration-1000 z-0"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          ></div>

          {/* 3. The Floating Screenshot (Rounded, Bordered, Shadowed) */}
          <img 
            key={currentImageIndex} 
            src={images[currentImageIndex]} 
            className="relative z-10 w-auto h-full max-w-full rounded-xl md:rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border border-white/10 object-contain animate-studio-slide bg-[#0b1120]" 
            alt="Project Screenshot" 
          />
          
          {/* Floating Glassmorphism Control Pill */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 z-[100] flex items-center gap-5 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 px-6 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              
              <button onClick={prevImage} className="text-white/50 hover:text-white hover:-translate-x-1 transition-all">
                <FiArrowLeft size={22}/>
              </button>

              <div className="flex gap-3 items-center">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentImageIndex === index 
                        ? 'w-10 bg-brand shadow-[0_0_15px_#a855f7]' 
                        : 'w-2.5 bg-white/20 hover:bg-white/60'      
                    }`}
                  />
                ))}
              </div>

              <button onClick={nextImage} className="text-white/50 hover:text-white hover:translate-x-1 transition-all">
                <FiArrowRight size={22}/>
              </button>
            </div>
          )}
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="p-8 md:p-12 overflow-y-auto relative z-20 bg-slate-900/50 backdrop-blur-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
              {project.title}
            </h2>
            
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" 
                 className="group relative flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(168,85,247,0.5)]">
                
                <div className="absolute inset-0 bg-gradient-to-r from-brand via-[#c084fc] to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <FiExternalLink size={22} className="relative z-10 text-slate-900 group-hover:text-white transition-colors duration-300" />
                <span className="relative z-10 text-slate-900 group-hover:text-white transition-colors duration-300">
                  Live Demo
                </span>
              </a>
            )}
          </div>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-4xl font-light">
            {project.longDescription || project.description}
          </p>

          <div className="space-y-5">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech, i) => (
                <span key={i} className={`px-5 py-2.5 rounded-xl text-sm font-bold border border-white/5 bg-[#0f172a] text-slate-300 transition-all duration-300 cursor-default shadow-sm ${getTechGlowClass(tech)}`}>
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