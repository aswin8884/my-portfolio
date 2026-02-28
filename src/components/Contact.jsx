import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'; 
import { FaWhatsapp } from 'react-icons/fa'; // 1. Import the WhatsApp icon

const Contact = () => {
  return (
    <div id="contact" className="bento-card contact-card">
      <h2 style={{ color: '#a855f7', marginBottom: '1rem' }}>Let's Connect</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>
      
      <div className="social-links-container">
        <a href="https://github.com/aswin8884" target="_blank" rel="noreferrer" className="social-btn github-btn">
          <FiGithub size={20} /> GitHub
        </a>
        
        <a href="https://linkedin.com/in/aswin-pulickal-9aa4a42b0" target="_blank" rel="noreferrer" className="social-btn linkedin-btn">
          <FiLinkedin size={20} /> LinkedIn
        </a>
        
        <a href="mailto:aswinpulickal.professional@gmail.com" className="social-btn email-btn">
          <FiMail size={20} /> Email
        </a>

        <a href="https://wa.me/+4915510823207?text=Hi%20Aswin!" target="_blank" rel="noreferrer" className="social-btn whatsapp-btn">
          <FaWhatsapp size={20} /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;