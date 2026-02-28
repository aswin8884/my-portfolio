import { motion } from 'framer-motion';

// We define your top recruiter-focused skills based on your CV here!
const skillsData = [
  { name: 'Python (Django, Flask)', percentage: 90, color: '#3b82f6' }, // Blue
  { name: 'JavaScript (React.js, Node.js)', percentage: 85, color: '#eab308' }, // Yellow
  { name: 'Data Science & Machine Learning', percentage: 80, color: '#10b981' }, // Green
  { name: 'DevOps & Cloud (Docker, AWS)', percentage: 75, color: '#8b5cf6' }, // Purple
];

const About = () => {
  return (
    <motion.div id="about"
      whileHover={{ scale: 1.01, transition: { type: "spring", stiffness: 300 } }}
      className="bento-card about-card"
    >
      <h2 style={{ color: '#a855f7' }}>Core Expertise</h2>
      
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            
            {/* The Text Above the Bar */}
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            
            {/* The Animated Bar */}
            <div className="progress-bar-bg">
              <motion.div 
                className="progress-bar-fill"
                style={{ backgroundColor: skill.color }}
                // This animation makes the bar grow from 0% to the actual percentage!
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              />
            </div>

          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;