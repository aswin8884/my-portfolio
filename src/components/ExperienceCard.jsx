import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';

const ExperienceCard = () => {
  return (
    <motion.div 
      id='experience'
      whileHover={{ scale: 1.01, transition: { type: "spring", stiffness: 300 } }}
      className="bento-card experience-card"
    >
      <div className="experience-header">
        <h2>Experience</h2>
      </div>
      
      <div className="timeline-container">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="timeline-item"
          >
            <div className="timeline-node" />

            <div className="timeline-item-header">
              <h3 className="timeline-role">{exp.role}</h3>
              <span className="timeline-date">{exp.date}</span>
            </div>
            
            <h4 className="timeline-company">{exp.company}</h4>
            <p className="timeline-desc">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;