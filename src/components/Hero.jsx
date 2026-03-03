import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="bento-card col-span-1 md:col-span-4 row-span-2 bg-gradient-to-br from-violet-500 to-blue-500 flex flex-col md:flex-row items-center gap-8 md:gap-16 p-8 md:p-12">
      
      {/* Text Container */}
      <div className="flex-1 text-center md:text-left z-10 flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-[3.5rem] font-bold mb-4 leading-tight text-white">
          Hi, I'm Aswin.
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
          A Full Stack Developer & Data Science Specialist building scalable web applications and intelligent data solutions.
        </p>
      </div>

      {/* 3D Avatar Popout */}
      <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] shrink-0 mt-8 md:mt-0">
        <div className="absolute bottom-0 left-0 w-full h-full rounded-full bg-white/15 border-4 border-slate-50 shadow-2xl z-[1]"></div>
        
        <div className="absolute bottom-[4px] left-[4px] w-[calc(100%-8px)] h-[300px] md:h-[350px] rounded-b-full overflow-hidden z-[2] flex justify-center items-end">
          <img 
            src="/aswin_portfolio_dp.png" 
            alt="Aswin" 
            className="w-[210px] md:w-[260px] h-auto object-contain -mb-[10px] drop-shadow-[0px_-10px_15px_rgba(168,85,247,0.4)]"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;