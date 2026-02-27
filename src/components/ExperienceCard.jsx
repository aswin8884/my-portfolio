import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';

const ExperienceCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
      className="bento-card experience-card"
      style={{ overflowY: 'auto' }} // Enables internal scrolling
    >
      <h2 style={{ marginBottom: '1.5rem', color: '#a855f7' }}>Experience</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experienceData.map((exp) => (
          <div key={exp.id} style={{ borderLeft: '2px solid #334155', paddingLeft: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem' }}>{exp.role}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#94a3b8', margin: '0.3rem 0' }}>
              <span>{exp.company}</span>
              <span>{exp.date}</span>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;