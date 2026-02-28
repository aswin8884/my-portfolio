import { useState } from 'react'; // Notice useEffect is gone!
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal'; 

const ProjectCard = ({ id, title, description, longDescription, techStack, images }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      {/* --- THE STANDARD GRID CARD --- */}
      <motion.div id={id}
        layoutId={`card-container-${title}`} 
        whileHover={{ scale: 1.02 }}
        className="bento-card project-card"
        onClick={() => setIsExpanded(true)}
        style={{ cursor: 'pointer' }} 
      >
        <motion.img 
          layoutId={`image-${title}`}
          // The grid card now statically shows the first image in your array
          src={images && images.length > 0 ? images[0] : ""} 
          alt={title} 
          className="project-image"
        />
        
        <div className="project-content">
          <motion.h2 layoutId={`title-${title}`}>{title}</motion.h2>
          <p>{description}</p>
          <span style={{ color: '#a855f7', marginTop: '1rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
            Click to expand ➔
          </span>
        </div>
      </motion.div>

      {/* --- THE EXPANDED MODAL POPUP --- */}
      <AnimatePresence>
        {isExpanded && (
          <ProjectModal 
            title={title}
            longDescription={longDescription}
            techStack={techStack}
            images={images}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage} 
            setIsExpanded={setIsExpanded}
            // setIsHovering is completely gone
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;