import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      let currentActive = 'home'; // Default to home

      sections.forEach((section) => {
        if (section === 'home') return; // Skip home in the loop
        
        const element = document.getElementById(section);
        if (element) {
          // Get the section's position relative to the screen
          const rect = element.getBoundingClientRect();
          
          // If the top of the section crosses the top 300px of the screen, it becomes active
          // Because we loop in order, it will always grab the lowest section visible!
          if (rect.top <= 300) {
            currentActive = section;
          }
        }
      });

      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-[75px] flex justify-between items-center px-[5%] bg-darkBg/85 backdrop-blur-md z-[2000] border-b border-cardBorder">
      <div className="text-[1.8rem] font-extrabold text-slate-50">
        <a href="#">Aswin.</a>
      </div>
      
      <ul className="hidden md:flex gap-8 list-none">
        {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <a 
              href={item === 'home' ? '#' : `#${item}`} 
              className={`relative text-base font-medium capitalize transition-colors duration-300 ${
                activeLink === item ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
              } after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-brand after:rounded-full after:transition-all after:duration-300 ${
                activeLink === item ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;