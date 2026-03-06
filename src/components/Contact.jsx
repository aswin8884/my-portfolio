import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'; 
import { FaWhatsapp } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div id="contact" className="bento-card col-span-1 md:col-span-4 row-span-2 justify-center text-center">
      <h2 className="text-brand text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-slate-400 mb-8">
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>
      
      <div className="flex flex-row flex-wrap justify-center gap-4">
       {/* GitHub */}
<a 
  href={import.meta.env.VITE_GIT_HUB_LINK} 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-50 font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-[#333333] hover:border-[#333333]"
>
  <FiGithub size={20} /> GitHub
</a>

{/* LinkedIn */}
<a 
  href={import.meta.env.VITE_LINKEDIN_LINK} 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-50 font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5]"
>
  <FiLinkedin size={20} /> LinkedIn
</a>
        
        {/* Email */}
        <a href="mailto:aswinpulickal.professional@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-50 font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-[#ea4335] hover:border-[#ea4335]">
          <FiMail size={20} /> Email
        </a>
        {/* WhatsApp */}
        <a 
          href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hi%20Aswin,%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect!`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-50 font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-[#25D366] hover:border-[#25D366]"
        >
          <FaWhatsapp size={20} /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;