import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01, transition: { type: "spring", stiffness: 300 } }}
      className="bento-card hero-card"
    >
      
      {/* 1. The Main Container (Animated) */}
      <motion.div 
        className="avatar-container"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: [0, -10, 0] }} 
        transition={{ opacity: { duration: 0.5 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      >
        
        {/* The solid white circle drawn in the background */}
        <div className="avatar-circle"></div>

        {/* The Magic Wrapper: Clips the bottom shirt corners, but leaves the top open! */}
        <div className="avatar-clip-wrapper">
          <img 
            src="/aswin_protfolio_dp.png"
            alt="Aswin's Developer Avatar" 
            className="hero-avatar-popout"
          />
        </div>

      </motion.div>

      {/* 2. The Text Section */}
      <div className="hero-text-container">
        <h1>Hi, I'm Aswin.</h1> 
        <p>
          I'm a Full Stack Developer and M.Sc. E-Government student based in Germany. 
          I specialize in building scalable web applications and data solutions.
        </p>
      </div>
      
    </motion.div>
  );
};

export default Hero;