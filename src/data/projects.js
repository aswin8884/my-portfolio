export const projectsData = [
  {
    id: 1,
    title: "AI-Powered EV Range Simulator",
    description: "Real-time telemetry analyzer using Machine Learning to predict EV battery range.",
    longDescription: "A sophisticated full-stack application that calculates real-world electric vehicle range. It uses an XGBoost ML model to analyze variables like cruising speed, ambient temperature, and climate control impact. Features a live geospatial interface that maps the vehicle's reachable radius based on current GPS coordinates.",
    link:"https://ev-project-jade.vercel.app/",
    techStack: ["React", "FastAPI", "Python", "XGBoost", "Leaflet"],
    images: ["projects/ev-project_img1.png", "projects/ev-project_img2.png", "projects/ev-project_img3.png"] 
},
{
    id: 2,
    title: "AI Career Path Predictor",
    description: "Machine Learning platform for career stability analysis and AI-driven transition roadmaps.",
    longDescription: "A comprehensive career intelligence tool designed to help professionals navigate industry shifts. The system utilizes a Scikit-Learn backend to predict job stability scores and integrates Google Gemini AI to generate personalized, step-by-step skill transition roadmaps. Features a modern dark-mode interface and real-time API communication between React and Django.",
    link: "https://ai-career-app-one.vercel.app/",
    techStack: ["React", "Django", "Python", "Google Gemini AI", "Tailwind CSS", "Scikit-Learn"],
    images: ["projects/ai_career_img1.png", "projects/ai_career_img2.png", "projects/ai_career_img3.png"] 
}
];