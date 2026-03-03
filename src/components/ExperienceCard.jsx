import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';

const ExperienceCard = () => {
  return (
    <motion.div 
      id='experience'
      whileHover={{ scale: 1.01 }}
      className="bento-card col-span-1 md:col-span-4 row-span-2 justify-start overflow-y-auto pr-4 relative"
    >
      {/* Sticky Header */}
      <div className="sticky top-[-2rem] bg-slate-800/95 backdrop-blur-md pt-8 pb-4 mb-4 z-10">
        <h2 className="text-brand text-2xl font-bold m-0">Experience</h2>
      </div>
      
      <div className="flex flex-col ml-3">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`relative border-l-2 pl-6 ${index === experienceData.length - 1 ? 'border-transparent pb-0' : 'border-slate-700 pb-8'}`}
          >
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-brand shadow-[0_0_10px_rgba(168,85,247,0.6)] border-2 border-slate-800" />

            <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
              <h3 className="text-[1.15rem] text-slate-50 font-semibold m-0">{exp.role}</h3>
              <span className="text-xs font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full border border-brand/20">
                {exp.date}
              </span>
            </div>
            
            <h4 className="text-[0.95rem] text-slate-400 font-medium mb-3">{exp.company}</h4>
            <p className="text-[0.9rem] leading-relaxed text-slate-300 m-0">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;