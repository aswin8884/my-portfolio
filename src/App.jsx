import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard'; 
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { projectsData } from './data/projects'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* 1. Navbar sits safely outside the grid */}
      <Navbar />
      
      {/* 2. The Bento Grid holds the rest of your portfolio */}
      <div className="bento-grid">
        <Hero />
        <About />
        <ExperienceCard />

        <div id="projects" className="bento-card projects-header-card">
          <h2>Featured Projects</h2>
          <p>A showcase of my recent work, technical experiments, and applications.</p>
        </div>
        
       {projectsData.map((project, index) => (
        <ProjectCard 
          key={project.id}     
          id={index === 0 ? "projects" : undefined} /* NEW: Gives the ID to only the first card! */
          title={project.title} 
          description={project.description} 
          longDescription={project.longDescription} 
          techStack={project.techStack}             
          images={project.images}                   
        />
      ))}
        
        <Contact />
        <ContactForm />
      </div>
    </>
  );
}

export default App;