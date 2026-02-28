import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // The IDs of the sections we want to track
      const sections = ['about', 'experience', 'projects', 'contact'];
      
      // Default to home if we are at the very top
      let currentSection = 'home'; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Calculates where the element is on the screen
          const rect = element.getBoundingClientRect();
          
          // If the element's top edge passes the 200px mark from the top of the screen, it becomes active!
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      
      setActiveLink(currentSection);
    };

    // Listen for scrolling
    window.addEventListener('scroll', handleScroll);
    
    // Run it once immediately when the page loads
    handleScroll();

    // Cleanup the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
          
        </a>
      </div>
      
      <ul className="navbar-links">
        <li>
          <a 
            href="#" 
            className={activeLink === 'home' ? 'active' : ''} 
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeLink === 'about' ? 'active' : ''} 
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            className={activeLink === 'experience' ? 'active' : ''} 
          >
            Experience
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeLink === 'projects' ? 'active' : ''} 
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeLink === 'contact' ? 'active' : ''} 
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;