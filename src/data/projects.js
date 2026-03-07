export const projectsData = [
{
    id: 1,
    title: "Fokus RAG",
    description: "Multilingual Document Intelligence platform with strict English-German translation guardrails.",
    longDescription: "A full-stack Retrieval-Augmented Generation (RAG) application enabling users to securely upload and chat with PDF documents in real-time. Built with a FastAPI backend and React frontend, it utilizes LangChain, ChromaDB, and Cohere's Command-R model for precise document retrieval and contextual question-answering. The system features a custom-engineered 'Translation Guardrail' pipeline that strictly enforces UI-level language toggles (EN/DE) regardless of the document's native language, preventing LLM context drag and ensuring a flawless bilingual user experience.",
    link: "https://fokus-rag.vercel.app/", 
    github: "https://github.com/aswin8884/fokus-rag.git",
    techStack: ["React", "FastAPI", "Python", "LangChain", "Cohere AI", "ChromaDB", "Tailwind CSS"],
    images: ["projects/fokus_rag_img1.jpg", "projects/fokus_rag_img2.jpg", "projects/fokus_rag_img3.jpg"] 
},
  {
    id: 2,
    title: "AI-Powered EV Range Simulator",
    description: "Real-time telemetry analyzer using Machine Learning to predict EV battery range.",
    longDescription: "A sophisticated full-stack application that calculates real-world electric vehicle range. It uses an XGBoost ML model to analyze variables like cruising speed, ambient temperature, and climate control impact. Features a live geospatial interface that maps the vehicle's reachable radius based on current GPS coordinates.",
    link:"https://ev-project-jade.vercel.app/",
    github: "https://github.com/aswin8884/ai-career-app.git",
    techStack: ["React", "FastAPI", "Python", "XGBoost", "Leaflet"],
    images: ["projects/ev-project_img1.png", "projects/ev-project_img2.png", "projects/ev-project_img3.png"] 
},
{
    id: 3,
    title: "AI Career Path Predictor",
    description: "Machine Learning platform for career stability analysis and AI-driven transition roadmaps.",
    longDescription: "A comprehensive career intelligence tool designed to help professionals navigate industry shifts. The system utilizes a Scikit-Learn backend to predict job stability scores and integrates Google Gemini AI to generate personalized, step-by-step skill transition roadmaps. Features a modern dark-mode interface and real-time API communication between React and Django.",
    link: "https://ai-career-app-one.vercel.app/",
    github: "https://github.com/aswin8884/ai-career-app.git",
    techStack: ["React", "Django", "Python", "Google Gemini AI", "Tailwind CSS", "Scikit-Learn"],
    images: ["projects/ai_career_img1.png", "projects/ai_career_img2.png", "projects/ai_career_img3.png"] 
}
];