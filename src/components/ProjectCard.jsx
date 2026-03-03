const ProjectCard = ({ title, description, image, onClick }) => {
  return (
    <div 
      className="bento-card col-span-1 md:col-span-4 row-span-1 !p-0 flex flex-col md:flex-row items-stretch cursor-pointer group hover:border-brand/50"
      onClick={onClick}
    >
      {/* Project Image */}
      <img 
        src={image || "/no_image.jpg"} 
        alt={title} 
        className="w-full md:w-[300px] h-[220px] md:h-auto min-h-[220px] object-cover border-b md:border-b-0 md:border-r border-slate-700 transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Project Content */}
      <div className="p-8 flex flex-col justify-center w-full z-10 bg-slate-800">
        <h2 className="text-2xl font-bold mb-2 text-slate-50 group-hover:text-brand transition-colors">
          {title}
        </h2>
        <p className="text-base text-slate-400 leading-relaxed">
          {description}
        </p>
        
        <span className="mt-4 text-brand font-semibold text-sm flex items-center gap-2">
          Click to expand <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;