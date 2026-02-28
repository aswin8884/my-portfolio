import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'contact'];
    
    // 1. Set up the modern Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section crosses into our viewing threshold, make it active
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        // This creates an invisible "trigger line" about 150px from the top of your screen.
        // It accounts perfectly for your sticky navbar!
        rootMargin: '-150px 0px -60% 0px' 
      }
    );

    // 2. Tell the observer to watch your sections
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    // 3. Special check for "Home" (when you scroll all the way back to the top)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveLink('home');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup when the component unmounts
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
          Aswin.
        </a>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#" className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#about" className={activeLink === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#experience" className={activeLink === 'experience' ? 'active' : ''}>Experience</a></li>
        <li><a href="#projects" className={activeLink === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;