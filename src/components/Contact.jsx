import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const iconStyle = {
    color: '#f8fafc',
    transition: 'color 0.3s ease',
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
      className="bento-card contact-card"
    >
      <h2>Let's connect</h2>
      <p style={{ marginTop: '0.5rem', color: '#94a3b8' }}>
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
        <a href="https://github.com/aswin8884" target="_blank" rel="noreferrer" style={iconStyle}> {/* [cite: 2] */}
            <FaGithub size={36} className="social-icon" /> 
        </a>
        <a href="https://linkedin.com/in/aswin-pulickal-9aa4a42b0" target="_blank" rel="noreferrer" style={iconStyle}> {/* [cite: 4, 2] */}
            <FaLinkedin size={36} className="social-icon" />
        </a>
        <a href="mailto:Aswinpulickal.professional@gmail.com" style={iconStyle}> {/* [cite: 2] */}
            <FaEnvelope size={36} className="social-icon" />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;