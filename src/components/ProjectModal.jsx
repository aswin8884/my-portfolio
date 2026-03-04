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
    <div className="fixed inset-0 bg-[#070a12]/95 backdrop-blur-xl flex justify-center items-center z-[9999] p-4">
      
      {/* Custom Animation Keyframes injected for the image slider */}
      <style>{`
        @keyframes customFadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-image-slide { animation: customFadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      `}</style>

      <div className="bg-slate-800/90 rounded-[30px] w-full max-w-[1100px] max-h-[92vh] border border-white/10 overflow-hidden relative flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 bg-black/50 hover:bg-red-500 text-white p-2.5 rounded-full z-[110] transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-lg">
          <FiX size={24} />
        </button>

        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-[450px] bg-[#030712] flex justify-center items-center border-b border-white/10 overflow-hidden">
          
          {/* 1. Ambilight Blurred Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center blur-[50px] opacity-40 scale-125 transition-all duration-700"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          ></div>

          {/* 2. Main Image with key-based animation */}
          <img 
            key={currentImageIndex} // This forces React to restart the animation when the index changes!
            src={images[currentImageIndex]} 
            className="w-full h-full object-contain relative z-10 animate-image-slide drop-shadow-2xl" 
            alt="Project Screenshot" 
          />
          
          {/* Navigation Arrows & Dots */}
          {images.length > 1 && (
            <>
              <button onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-6 p-3.5 bg-black/40 text-white rounded-full hover:bg-brand hover:scale-110 backdrop-blur-sm transition-all z-[90] border border-white/10 shadow-lg">
                <FiArrowLeft size={24}/>
              </button>
              
              <button onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)} className="absolute right-6 p-3.5 bg-black/40 text-white rounded-full hover:bg-brand hover:scale-110 backdrop-blur-sm transition-all z-[90] border border-white/10 shadow-lg">
                <FiArrowRight size={24}/>
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-5 left-0 w-full flex justify-center gap-2.5 z-[90]">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white scale-125 shadow-[0_0_10px_white]' : 'bg-white/30 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 overflow-y-auto relative z-20 bg-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
              {project.title}
            </h2>
            
            {/* 3. Premium Live Demo Button */}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" 
                 className="group relative flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(168,85,247,0.6)]">
                
                {/* Background Gradient that slides in on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand via-purple-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon & Text (changes to white on hover) */}
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

          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-700/50 pb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech, i) => (
                <span key={i} className={`px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-600 bg-slate-900/50 text-slate-300 transition-all duration-300 ${getTechGlowClass(tech)}`}>
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