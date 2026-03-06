import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { projectsData } from './data/projects'; 

function App() {
  // State to track which project is currently clicked open in the modal
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Navbar />
      
      <main className="grid grid-cols-1 md:grid-cols-4 auto-rows-[auto] md:auto-rows-[220px] gap-6 w-full max-w-[1100px]">
        
        <Hero />
        
        <About />
        
        <ExperienceCard />
        
        {/* Projects Section Header Card */}
        <div 
          id="projects" 
          className="bento-card col-span-1 md:col-span-4 row-span-1 flex flex-col items-center justify-center text-center bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700"
        >
          <h2 className="text-brand text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
          <p className="text-slate-400 text-lg">A showcase of my recent work, technical experiments, and applications.</p>
        </div>

        {/* Map through your projects data and render a card for each */}
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}     
            title={project.title} 
            description={project.description} 
            image={project.images ? project.images[0] : null} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
        
        <Contact />
        
        <ContactForm />

      </main>

      {/* Render the Modal ONLY if a project is clicked */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}

export default App;