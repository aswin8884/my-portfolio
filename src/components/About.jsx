import { FiDownload } from 'react-icons/fi';

const About = () => {
  const majorSkills = [
    { 
      name: "Python (Django, FastAPI)", 
      percentage: 90, 
      color: "from-[#3776AB] to-[#05998b]", 
      glow: "shadow-[0_0_20px_rgba(5,153,139,0.5)]" 
    },
    { 
      name: "Machine Learning & Data Science", 
      percentage: 90, 
      color: "from-[#4F46E5] to-[#A855F7]", 
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]" 
    },
    { 
      name: "React.js & JavaScript", 
      percentage: 85, 
      color: "from-[#3178C6] to-[#61DAFB]", 
      glow: "shadow-[0_0_20px_rgba(97,218,251,0.5)]" 
    },
    { 
      name: "Databases (SQL & NoSQL)", 
      percentage: 85, 
      color: "from-[#00758F] to-[#47A248]", 
      glow: "shadow-[0_0_20px_rgba(71,162,72,0.5)]" 
    }
  ];

  const secondarySkills = {
    "Databases & Tools": ["PostgreSQL", "MongoDB", "SQL", "Git", "Power BI"],
    "DevOps & Cloud": ["Docker", "AWS (EC2)", "CI/CD", "TDD", "RESTful APIs"]
  };

  // --- NEW: Helper function to determine the brand glow colors for secondary skills ---
  const getSkillGlowClass = (skill) => {
    const s = skill.toLowerCase();
    if (s.includes('postgres')) return 'hover:text-[#336791] hover:border-[#336791] hover:shadow-[0_0_12px_rgba(51,103,145,0.4)]';
    if (s.includes('mongo')) return 'hover:text-[#47A248] hover:border-[#47A248] hover:shadow-[0_0_12px_rgba(71,162,72,0.4)]';
    if (s.includes('sql') && !s.includes('no')) return 'hover:text-[#00758F] hover:border-[#00758F] hover:shadow-[0_0_12px_rgba(0,117,143,0.4)]'; // MySQL Blue
    if (s.includes('git')) return 'hover:text-[#F05032] hover:border-[#F05032] hover:shadow-[0_0_12px_rgba(240,80,50,0.4)]';
    if (s.includes('power bi')) return 'hover:text-[#F2C811] hover:border-[#F2C811] hover:shadow-[0_0_12px_rgba(242,200,17,0.4)]';
    if (s.includes('docker')) return 'hover:text-[#2496ED] hover:border-[#2496ED] hover:shadow-[0_0_12px_rgba(36,150,237,0.4)]';
    if (s.includes('aws')) return 'hover:text-[#FF9900] hover:border-[#FF9900] hover:shadow-[0_0_12px_rgba(255,153,0,0.4)]';
    if (s.includes('ci/cd')) return 'hover:text-[#2088FF] hover:border-[#2088FF] hover:shadow-[0_0_12px_rgba(32,136,255,0.4)]'; // GitHub Actions Blue
    if (s.includes('tdd')) return 'hover:text-[#10B981] hover:border-[#10B981] hover:shadow-[0_0_12px_rgba(16,185,129,0.4)]'; // Emerald Green
    if (s.includes('rest')) return 'hover:text-[#FF6C37] hover:border-[#FF6C37] hover:shadow-[0_0_12px_rgba(255,108,55,0.4)]'; // Postman Orange
    
    // Fallback to the brand purple
    return 'hover:text-brand hover:border-brand hover:shadow-[0_0_12px_rgba(168,85,247,0.5)]';
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
                    className={`bg-slate-900 text-slate-300 border border-slate-700/80 px-3 py-1.5 rounded-lg text-sm transition-all duration-300 cursor-default shadow-sm ${getSkillGlowClass(skill)}`}
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