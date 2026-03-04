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
    if (t.includes('django')) return 'hover:text-[#092e20] hover:bg-[#44B78B] hover:border-[#44B78B]';
    return 'hover:text-brand hover:border-brand hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]';
  };

  return (
    <div className="fixed inset-0 bg-[#070a12]/95 backdrop-blur-xl flex justify-center items-center z-[9999] p-4">
      <div className="bg-slate-800 rounded-[30px] w-full max-w-[1100px] max-h-[92vh] border border-white/10 overflow-hidden relative flex flex-col shadow-2xl">
        
        {/* Close */}
        <button onClick={onClose} className="absolute top-6 right-6 bg-black/40 hover:bg-red-500 text-white p-2 rounded-full z-[110] transition-all">
          <FiX size={24} />
        </button>

        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-[450px] bg-[#0b1120] flex justify-center items-center border-b border-white/5">
          <img 
            src={images[currentImageIndex]} 
            className="w-full h-full object-contain" 
            alt="Project Screenshot" 
          />
          
          {images.length > 1 && (
            <>
              <button onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-4 p-3 bg-black/50 text-white rounded-full hover:bg-brand transition-colors"><FiArrowLeft size={24}/></button>
              <button onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)} className="absolute right-4 p-3 bg-black/50 text-white rounded-full hover:bg-brand transition-colors"><FiArrowRight size={24}/></button>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h2>
            
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" 
                 className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-brand hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
                <FiExternalLink size={22} />
                Live Demo
              </a>
            )}
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-3xl">
            {project.longDescription || project.description}
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Technology Stack</h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech, i) => (
                <span key={i} className={`px-5 py-2.5 rounded-xl text-sm font-bold border border-white/5 bg-slate-900/50 text-slate-400 transition-all duration-300 ${getTechGlowClass(tech)}`}>
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