import { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi'; // Added icon for the live link

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

  // --- NEW: Helper function to determine the brand glow colors ---
  const getTechGlowClass = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return 'hover:text-[#61DAFB] hover:border-[#61DAFB] hover:shadow-[0_0_12px_rgba(97,218,251,0.4)]';
    if (t.includes('python')) return 'hover:text-[#FFE873] hover:border-[#3776AB] hover:shadow-[0_0_12px_rgba(55,118,171,0.5)]';
    if (t.includes('fastapi')) return 'hover:text-[#009688] hover:border-[#009688] hover:shadow-[0_0_12px_rgba(0,150,136,0.4)]';
    if (t.includes('xgboost')) return 'hover:text-[#00A3DF] hover:border-[#00A3DF] hover:shadow-[0_0_12px_rgba(0,163,223,0.4)]';
    if (t.includes('leaflet')) return 'hover:text-[#BADA55] hover:border-[#BADA55] hover:shadow-[0_0_12px_rgba(186,218,85,0.4)]';
    if (t.includes('node')) return 'hover:text-[#339933] hover:border-[#339933] hover:shadow-[0_0_12px_rgba(51,153,51,0.4)]';
    if (t.includes('django')) return 'hover:text-[#44B78B] hover:border-[#44B78B] hover:shadow-[0_0_12px_rgba(68,183,139,0.4)]';
    if (t.includes('tailwind')) return 'hover:text-[#38B2AC] hover:border-[#38B2AC] hover:shadow-[0_0_12px_rgba(56,178,172,0.4)]';
    if (t.includes('mongo')) return 'hover:text-[#47A248] hover:border-[#47A248] hover:shadow-[0_0_12px_rgba(71,162,72,0.4)]';
    if (t.includes('postgres') || t.includes('sql')) return 'hover:text-[#336791] hover:border-[#336791] hover:shadow-[0_0_12px_rgba(51,103,145,0.4)]';
    
    // Default fallback (your signature purple)
    return 'hover:text-brand hover:border-brand hover:shadow-[0_0_12px_rgba(168,85,247,0.5)]';
  };

  return (
    <div className="fixed inset-0 bg-[#070a12]/95 backdrop-blur-[15px] flex justify-center items-center z-[9999] p-5">
      
      <div className="bg-slate-800 rounded-[24px] w-full max-w-[1100px] max-h-[95vh] border border-white/10 overflow-y-auto relative flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 bg-black/50 text-white border border-white/20 rounded-full w-[35px] h-[35px] cursor-pointer z-[100] flex justify-center items-center transition-all duration-200 hover:bg-red-500 hover:rotate-90"
        >
          ✕
        </button>

        <div className="relative w-full bg-[#0b1120] border-b-2 border-slate-700 flex justify-center items-center min-h-[300px]">
          <img 
            src={images[currentImageIndex] || "/no_image.jpg"} 
            alt={`${project.title} - Image ${currentImageIndex + 1}`} 
            className="w-full h-auto max-h-[60vh] block object-contain" 
          />

          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 text-white border border-white/20 rounded-full w-[45px] h-[45px] cursor-pointer z-[90] flex justify-center items-center transition-all duration-200 hover:bg-brand/80">←</button>
              <button onClick={nextImage} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 text-white border border-white/20 rounded-full w-[45px] h-[45px] cursor-pointer z-[90] flex justify-center items-center transition-all duration-200 hover:bg-brand/80">→</button>
              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-[90]">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.6)] ${currentImageIndex === index ? 'bg-slate-50 scale-125' : 'bg-white/30 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-8 md:py-10 md:px-14 bg-slate-800">
          
          {/* --- NEW: Title & Live Link Button Container --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
              {project.title}
            </h2>
            
            {/* Render the button ONLY if project.link exists */}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(168,85,247,0.8)] hover:-translate-y-1 hover:bg-white hover:text-brand hover:border-white"
              >
                <FiExternalLink size={20} />
                Visit Live Project
              </a>
            )}
          </div>

          <p className="text-slate-300 leading-relaxed text-lg mb-6">
            {project.longDescription || project.description}
          </p>

          <div className="mt-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Tech Stack</h3>
            <div className="flex gap-3 flex-wrap">
              {project.techStack?.map((tech, index) => (
                <span 
                  key={index} 
                  // Default dark styling, completely overrides to brand colors on hover!
                  className={`bg-slate-900 text-slate-300 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-700/80 transition-all duration-300 cursor-default ${getTechGlowClass(tech)}`}
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