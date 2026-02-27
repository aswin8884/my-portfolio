import { motion } from 'framer-motion';

const techColors = {
  "Python": "#3b82f6",      
  "Django": "#047857",      
  "SQLite": "#0ea5e9",      
  "Bootstrap": "#8b5cf6",   
  "React": "#06b6d4",       
  "Node.js": "#22c55e",     
  "Express": "#64748b",     
  "MongoDB": "#10b981",     
  "Pandas": "#1d4ed8",      
  "JavaScript": "#eab308",  
  "AWS": "#f97316",         
};

const ProjectModal = ({ 
  title, 
  longDescription, 
  techStack, 
  images, 
  currentImage, 
  setCurrentImage, 
  setIsExpanded 
}) => {

  const handleNext = (e) => {
    e.stopPropagation(); 
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsExpanded(false)} 
    >
      <motion.div 
        layoutId={`card-container-${title}`}
        className="modal-content"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="modal-close-btn" onClick={() => setIsExpanded(false)}>✕</button>
        
        <div className="modal-image-container">
          <motion.img 
            layoutId={`image-${title}`}
            src={images && images.length > 0 ? images[currentImage] : ""} 
            alt={title} 
            className="modal-image"
          />
          
          {/* Navigation Arrows and Dots */}
          {images && images.length > 1 && (
            <>
              <button className="nav-btn prev-btn" onClick={handlePrev}>❮</button>
              <button className="nav-btn next-btn" onClick={handleNext}>❯</button>
              
              {/* NEW: The Dot Indicators */}
              <div className="image-indicators">
                {images.map((_, index) => (
                  <button 
                    key={index} 
                    className={`dot ${currentImage === index ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index); // Allows clicking a dot to jump to that image!
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="modal-body">
          <motion.h2 layoutId={`title-${title}`} style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            {title}
          </motion.h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            {longDescription}
          </p>

          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>Tech Stack</h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {techStack.map((tech, index) => {
              const hoverColor = techColors[tech] || "#a855f7"; 
              
              return (
                <motion.span 
                  key={index} 
                  whileHover={{ backgroundColor: hoverColor, color: '#ffffff' }}
                  transition={{ duration: 0.2 }}
                  style={{ 
                    background: '#334155', 
                    padding: '0.4rem 1rem', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem',
                    cursor: 'default' 
                  }}
                >
                  {tech}
                </motion.span>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;