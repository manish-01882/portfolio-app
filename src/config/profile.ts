import env from "./env";

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  image: string;
  live: string | null;
  date: string;
  status: "completed" | "in-progress" | "planned";
}

export interface ProfileConfig {
  name: string;
  firstName: string;
  lastName: string;
  handle: string;
  title: string;
  role: string;
  description: string;
  availableForWork: boolean;
  
  // Hero section settings
  typewriterNames: string[];
  resumeUrl: string;

  // About section details
  aboutBio: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
  };
  
  // Quick stats
  stats: {
    technologiesUsed: number;
    yearsOfExperience: number;
    projectsShipped: number;
    happyClients: number;
  };

  // Social & Contact links
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
    telegram: string;
  };

  // Featured Projects
  projects: ProjectItem[];
}

export const profileConfig: ProfileConfig = {
  name: "Manish Choudhary",
  firstName: "Manish",
  lastName: "Choudhary",
  handle: "@manish01882",
  title: "Data Science & AI Engineer | Software Engineer",
  role: "Data Science & AI Engineer",
  description:
    "Computer Science & Engineering graduate (GNDEC 2026) building data pipelines, designing relational schemas, and deploying ML models end-to-end. Experienced in medical imaging, time-series forecasting, GPU orchestration, and LLM systems.",
  availableForWork: env.NEXT_PUBLIC_AVAILABLE_STATUS,

  typewriterNames: ["Manish Choudhary", "AI Engineer", "Data Scientist", "Full-Stack Dev"],
  resumeUrl: "/manish_resume_ai_ml_eng.pdf",

  aboutBio: {
    paragraph1:
      "I am a Computer Science & Engineering graduate (GNDEC 2026) with experience across the data and AI lifecycle — from building ETL pipelines and schema normalization to cloud deployments on AWS and serverless GPU orchestration.",
    paragraph2:
      "Stack: Python, PyTorch, TensorFlow, FastAPI, Next.js, React, SQL (MySQL, Postgres/Neon), MongoDB, AWS S3, LangChain, HuggingFace Diffusers & Transformers.",
    paragraph3:
      "During my Data Science Internship at Sabudh Foundation, I led a 5-member team to build an automated student assessment system with async Gemini API, multi-table SQL queries, RAG web search, and PDF report cards.",
    paragraph4:
      "I thrive on solving complex technical challenges: medical imaging (0.983 AUROC TB detection), stock price time-series forecasting (1.22% MAPE), and multi-model AI music generation pipelines.",
    paragraph5:
      "Got a data pipeline, ML model deployment, or full-stack AI application to build? Let’s connect and create something impactful!",
  },

  stats: {
    technologiesUsed: 15,
    yearsOfExperience: 1,
    projectsShipped: 4,
    happyClients: 100,
  },

  socials: {
    github: env.NEXT_PUBLIC_GITHUB_USERNAME
      ? `https://github.com/${env.NEXT_PUBLIC_GITHUB_USERNAME}`
      : "https://github.com/manish-01882",
    linkedin: "https://www.linkedin.com/in/manish-choudhary-547b092b7/",
    twitter: "https://x.com/",
    email: "man01882@outlook.com",
    telegram: "https://t.me/",
  },

  projects: [
    {
      title: "AI Music Generation Platform",
      description:
        "Orchestrated 3 AI models (ACE-Step, Qwen2-7B, SDXL-Turbo) on Modal serverless GPUs with persistent caching. Features a 2-stage LLM lyrics pipeline, Inngest task queues, Prisma/Neon Postgres state machine, AWS S3 presigned URLs, and Next.js 15 global audio player.",
      tags: ["Python", "FastAPI", "Modal", "PyTorch", "Next.js 15", "AWS S3"],
      github: "https://github.com/manish-01882/ai-music-gen",
      image: "/projects/image.png",
      live: null,
      date: "2026",
      status: "completed",
    },
    {
      title: "TB-MTNet: AI-Powered Tuberculosis Detection",
      description:
        "An end-to-end medical imaging system analyzing chest X-rays to detect TB (0.983 AUROC) and severity (8.51 MAE) using a dual-head Inception-v3 + Transformer encoder. Deployed with FastAPI, U-Net lung segmentation, and Grad-CAM explainable heatmaps.",
      tags: ["PyTorch", "Deep Learning", "FastAPI", "Medical AI", "Grad-CAM"],
      github: "https://github.com/manish-01882/tb-mtnet",
      image: "/projects/tb-mtnet.png",
      live: null,
      date: "2026",
      status: "completed",
    },
    {
      title: "AI-Powered Stock Price Predictor",
      description:
        "Time-series forecasting system for next-day stock closing price prediction using a 4-layer LSTM trained on historical OHLCV data. Achieved 1.22% MAPE on Microsoft (MSFT) and 1.92% MAPE on Apple (AAPL). Deployed with FastAPI and Streamlit visualization dashboard.",
      tags: ["TensorFlow", "LSTM", "FastAPI", "Streamlit", "Pandas", "NumPy"],
      github: "https://github.com/manish-01882/ai_stock_forecast",
      image: "/projects/stock.png",
      live: null,
      date: "2025",
      status: "completed",
    },
  ],
};
