import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard'; // 1. Import it here
import Contact from './components/Contact';
import { projectsData } from './data/projects'; 

function App() {
  return (
    <div className="bento-grid">
      <Hero />
      <About />
      
      {/* 2. Place it here so it sits nicely in the grid */}
      <ExperienceCard /> 
      
  {projectsData.map((project) => (
        <ProjectCard 
          key={project.id}     
          title={project.title} 
          description={project.description} 
          longDescription={project.longDescription} /* NEW */
          techStack={project.techStack}             /* NEW */
          images={project.images}                   /* CHANGED FROM 'image' to 'images' */
        />
      ))}
      
      <Contact />
    </div>
  );
}

export default App;