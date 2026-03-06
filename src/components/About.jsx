import { FiDownload } from 'react-icons/fi';

const About = () => {
  const majorSkills = [
    { 
      name: "Python (Django, FastAPI)", 
      percentage: 90, 
      color: "from-emerald-400 to-emerald-600", 
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
    },
    { 
      name: "React.js & JavaScript", 
      percentage: 85, 
      color: "from-blue-400 to-blue-600", 
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
    },
    { 
      name: "Machine Learning & Data Science", 
      percentage: 80, 
      color: "from-purple-400 to-purple-600", 
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
    }
  ];

  const secondarySkills = {
    "Databases & Tools": ["PostgreSQL", "MongoDB", "SQL", "Git", "Power BI"],
    "DevOps & Cloud": ["Docker", "AWS (EC2)", "CI/CD", "TDD", "RESTful APIs"]
  };

   return (
    <div id="about" className="bento-card col-span-1 md:col-span-4 md:row-span-3 justify-start">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-brand text-3xl font-bold">About Me</h2>
        
      {/* Download CV Button (Secure Cloud Link) */}
        <a 
          href={import.meta.env.VITE_CV_DOWNLOAD_LINK} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 border border-slate-600 text-slate-50 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand hover:border-white"
        >
          <FiDownload size={18} />
          Download CV
        </a>
      </div>

      <p className="text-slate-400 mb-10 leading-relaxed text-[0.95rem] md:text-base">
        I am a Full Stack Developer and M.Sc. student in E-Government at the University of Koblenz. 
        I specialize in building scalable web applications and RESTful APIs, with a strong focus on clean code, 
        Test-Driven Development (TDD), and leveraging my expertise to build impactful data solutions.
      </p>

      <div className="flex flex-col gap-6 mb-10">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-2 border-b border-slate-700/50 pb-2">
          Core Expertise
        </h3>
        
        {majorSkills.map(skill => (
          <div key={skill.name} className="w-full group">
            <div className="flex justify-between mb-2 font-medium text-slate-50 text-sm">
              <span className="tracking-wide">{skill.name}</span>
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{skill.percentage}%</span>
            </div>
          
            <div className="w-full h-3.5 bg-[#0b1120] rounded-full overflow-hidden border border-slate-700/80 shadow-inner">
              
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${skill.color} ${skill.glow} relative`} 
                style={{ width: `${skill.percentage}%` }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 rounded-full"></div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-2 border-b border-slate-700/50 pb-2">
          Technical Arsenal
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(secondarySkills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-brand mb-3">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-slate-900 text-slate-300 border border-slate-700/80 px-3 py-1.5 rounded-lg text-sm hover:border-brand hover:text-white hover:bg-slate-800 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;