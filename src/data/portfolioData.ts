export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI / ML' | 'Full Stack & APIs' | 'Data Analytics';
  description: string;
  metric: string;
  metricLabel: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  imageType: 'analytics' | 'terminal' | 'flow' | 'charts' | 'voice' | 'nodes';
  highlights: string[];
  architecture: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  readTime: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string[];
  takeaways: string[];
  url?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  keyAchievements: string[];
  tech: string[];
  credentialUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  details: string;
  subject?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  tag?: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
}

export interface AccomplishmentItem {
  id: string;
  title: string;
  award: string;
  description: string;
  organization: string;
  tag: string;
}

export const accomplishments: AccomplishmentItem[] = [
  {
    id: "acc-1",
    title: "Star Student Award — Q4 2025",
    award: "Quarterly Academic Excellence",
    description: "Awarded Star Student for the fourth quarter (Q4) of year 2025 in recognition of exceptional academic merit, consistent high performance, and initiative.",
    organization: "Dr M.G.R Educational and Research Institute",
    tag: "Excellence Honor"
  },
  {
    id: "acc-2",
    title: "Department Contribution Award",
    award: "Outstanding Contribution & Commitment",
    description: "Recognized for outstanding contribution and commitment to departmental initiatives and technical activities.",
    organization: "Dr M.G.R Educational and Research Institute",
    tag: "Department Honor"
  },
  {
    id: "acc-3",
    title: "Appreciation Award (Editorial Team, Tech Voice)",
    award: "Creative Input & Editorial Leadership",
    description: "Acknowledged for active involvement and creative input as part of the editorial team for the department newsletter (Tech Voice).",
    organization: "Dr M.G.R Educational and Research Institute",
    tag: "Editorial & Writing"
  }
];

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface SkillItem {
  name: string;
  category: string;
  level: number;
  levelLabel: 'Core Specialty' | 'Production Ready' | 'Proficient';
  experience: string;
  highlighted?: boolean;
  projects: string[];
  description: string;
  badgeColor?: string;
}

export interface StackCategory {
  id: string;
  name: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export const initialProfile = {
  name: "Dharania Thananchayan",
  tagline: "builds intelligent software.",
  eyebrow: "Open to Software & AI Opportunities",
  roleTitle: "AI & Software Engineer",
  phone: "+91 9840148750",
  email: "dharaniathananchayan@gmail.com",
  linkedin: "https://www.linkedin.com/in/dharaniathananchayan/",
  github: "https://github.com/dharaniathananchayan",
  codolio: "https://codolio.com/profile/dharaniathananchayan",
  location: "Chennai, Tamil Nadu",
  timezone: "IST (UTC+5:30)",
  bio: "AI & Software Engineer building dependable backend architectures, practical AI solutions, and data-driven web applications.",
  aboutNarrative: "Hi, I’m Dharania! I’m an AI and Software Engineer who loves turning ambitious ideas into smart, reliable digital products. My journey combines a solid background in Information Technology with advanced data science studies through relevant coursework. Whether I’m architecting backend services, experimenting with generative AI and smart search tools, or shaping data into meaningful insights, I enjoy solving tricky technical puzzles that make people's lives easier. Over the course of my engineering internships and personal projects, I’ve had the chance to build everything from conversational assistants and computer vision models to full-fledged web applications.\n\nWhat sets me apart is my love for creativity alongside engineering. When I’m not coding, you’ll usually find me immersed in reading, writing technical articles, blogging about emerging tech trends, or designing visuals and web layouts. I believe great technology shouldn't just work well under the hood—it should also be easy to understand, beautifully presented, and fun to use.",
  avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  currentWork: "Advancing Data Science studies with IIT Madras while developing RAG and Text-to-SQL AI analyst systems.",
  stats: [
    { value: "2+", label: "Industry Internships" },
    { value: "5+", label: "Flagship Projects" },
    { value: "8", label: "Core Domains" },
    { value: "100%", label: "Committed to Delivery" }
  ]
};

export const educations: EducationItem[] = [
  {
    id: "edu-diploma",
    degree: "Diploma in Data Science",
    institution: "IIT Madras (Online Diploma Program)",
    period: "May 2026 — Present",
    location: "Chennai, Tamil Nadu",
    grade: "Advanced Track",
    details: "In-depth specialization in mathematical foundations, statistical learning, large-scale data algorithms, and predictive modeling."
  },
  {
    id: "edu-btech",
    degree: "Bachelor of Technology in Information Technology",
    institution: "Dr M.G.R Educational and Research Institute",
    period: "Oct 2022 — May 2026",
    location: "Chennai, Tamil Nadu",
    grade: "CGPA: 8.3",
    details: "Rigorous coursework in Data Structures, Database Systems, Object-Oriented Programming, Operating Systems, Machine Learning, and Computer Networks."
  },
  {
    id: "edu-grade12",
    degree: "Grade 12",
    institution: "Fatima Matriculation Higher Secondary School",
    period: "2021 — 2022",
    location: "Chennai, Tamil Nadu",
    grade: "Percentage: 80.3%",
    subject: "Computer Science",
    details: "Higher secondary education in Computer Science, establishing strong core foundations in programming, algorithms, and analytical mathematics."
  },
  {
    id: "edu-grade10",
    degree: "Grade 10",
    institution: "Fatima Matriculation Higher Secondary School",
    period: "2019 — 2020",
    location: "Chennai, Tamil Nadu",
    grade: "Percentage: 78.8%",
    details: "Secondary school education establishing foundational analytical skills, science, and mathematics."
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-archintx",
    role: "Python Developer Intern",
    company: "archintX",
    period: "Sep 2026 — Present",
    type: "Internship",
    location: "Remote / Chennai",
    description: "Architecting and maintaining Python backend services, streamlining database schemas, and building modular RESTful endpoints for scalable web applications.",
    keyAchievements: [
      "Architect and deploy modular RESTful API microservices using Python and FastAPI/Flask, enforcing strict schema validation and error-handling pipelines.",
      "Engineer relational database models and optimize complex SQL queries using SQLAlchemy, reducing average response latencies and database connection bottlenecks.",
      "Implement automated testing workflows with Pytest and execute code refactoring routines, boosting test coverage and ensuring zero regressions in production releases.",
      "Collaborate within an agile team, participating in peer code reviews, Git branching workflows, and standardizing clean code practices adhering to PEP 8 standards."
    ],
    tech: ["Python", "FastAPI", "Flask", "SQLAlchemy", "PostgreSQL", "REST APIs", "Pytest", "Git", "Code Optimization"]
  },
  {
    id: "exp-infosys",
    role: "Python Developer Intern",
    company: "Infosys Springboard",
    period: "Jul 2026 — Sep 2026",
    type: "Internship",
    location: "Virtual Internship 7.0",
    credentialUrl: "/certificates/internship-certificate-infosys.pdf",
    description: "Designed and engineered ShopSense, an enterprise-grade AI-driven multi-vendor e-commerce platform and analytics engine during Infosys Virtual Internship 7.0.",
    keyAchievements: [
      "Engineered ShopSense, a multi-vendor retail intelligence ecosystem featuring FastAPI asynchronous microservices, SQLAlchemy 2.0 ORM, and a responsive React 19 interface.",
      "Developed an autonomous dual-path generative AI suite integrating an inventory-grounded RAG shopping assistant and a conversational Text-to-SQL business analyst using Groq Cloud LLaMA-3.3-70B.",
      "Implemented predictive time-series inventory forecasting using ARIMA and Holt-Winters smoothing to compute automated Reorder Points (ROP) and proactively mitigate stockouts.",
      "Built personalized product recommendation algorithms leveraging Scikit-Learn TF-IDF vectorization and customer taste centroids with sub-50ms query turnaround.",
      "Delivered production-ready software adhering to structured agile milestones, incorporating automated Pytest test suites and Docker containerization."
    ],
    tech: ["Python", "FastAPI", "React 19", "Groq Cloud (LLaMA-3.3-70B)", "RAG & Text-to-SQL", "ARIMA Forecasting", "SQLAlchemy 2.0", "Docker", "Pytest"]
  },
  {
    id: "exp-rubixe",
    role: "AI Engineer Intern",
    company: "Rubixe AI Solutions",
    period: "May 2026 — Nov 2026",
    type: "Internship",
    location: "Remote / Chennai",
    credentialUrl: "/certificates/RX1795500611.pdf",
    description: "Contributed to machine learning lifecycles, developing data preprocessing pipelines, exploratory feature engineering, and model validation frameworks across client datasets.",
    keyAchievements: [
      "Constructed end-to-end exploratory data analysis (EDA) and data wrangling pipelines across structured datasets and image corpuses using Pandas, NumPy, and OpenCV.",
      "Trained, tuned, and evaluated supervised classification and regression models using Scikit-Learn, performing hyperparameter optimization via GridSearchCV.",
      "Implemented rigorous model evaluation frameworks analyzing ROC-AUC curves, confusion matrices, and precision-recall tradeoffs to benchmark production readiness.",
      "Collaborated with senior engineers to containerize ML inference workflows and develop lightweight REST endpoints for seamless model deployment."
    ],
    tech: ["Python", "Machine Learning", "Scikit-Learn", "OpenCV", "Data Preprocessing", "Feature Engineering", "Model Evaluation", "Pandas", "NumPy"]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-rubixe-ai",
    title: "AI Engineer Internship Completion",
    issuer: "Rubixe AI Solutions",
    tag: "Internship",
    date: "May 2026 — Nov 2026",
    credentialUrl: "/certificates/RX1795500611.pdf",
    description: "Successfully completed the AI Engineer Internship at Rubixe AI Solutions, contributing to machine learning lifecycles, developing data preprocessing pipelines, exploratory feature engineering, and model validation frameworks.",
    skills: ["AI Engineering", "Machine Learning", "Scikit-Learn", "OpenCV", "Python", "EDA"]
  },
  {
    id: "cert-iit-kharagpur",
    title: "Hands-on Approach to Advanced AI for Real-World Applications (HAAI) ++",
    issuer: "IIT Kharagpur AI4ICPS | Hub Foundation & TCS iON",
    tag: "Coursework",
    date: "Sep 2026",
    credentialUrl: "/certificates/haai-certificate.pdf",
    description: "Successfully completed advanced coursework on hands-on AI for real-world applications, organized jointly by IIT Kharagpur AI4ICPS Hub Foundation and TCS iON.",
    skills: ["Advanced AI", "Deep Learning", "Machine Learning", "TCS iON", "Real-World AI"]
  },
  {
    id: "cert-hcl-guvi",
    title: "Employability Enhancement Program",
    issuer: "HCL GUVI & Dr. M.G.R. Educational and Research Institute",
    tag: "Program",
    date: "Aug 2025 — Oct 2025",
    credentialUrl: "/certificates/hcl-guvi-employability.png",
    description: "Successfully participated in the Employability Enhancement Program conducted by HCL GUVI in collaboration with Dr. M.G.R. Educational and Research Institute, mastering Java, Python, and Full Stack technologies.",
    skills: ["Java", "Python", "Full Stack Technologies", "Object-Oriented Programming", "Software Engineering", "HCL GUVI"]
  },
  {
    id: "cert-infosys-python",
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    tag: "Certification",
    date: "Apr 2026",
    credentialUrl: "/certificates/infosys-python-foundation.jpg",
    description: "Successfully completed the Python Foundation Certification awarded by Infosys Springboard, demonstrating solid proficiency in core Python programming, data structures, and algorithmic problem-solving.",
    skills: ["Python", "Algorithms", "Data Structures", "Problem Solving", "Infosys Springboard"]
  },
  {
    id: "cert-nptel-python",
    title: "NPTEL - Python for Data Science",
    issuer: "NPTEL",
    tag: "Coursework",
    date: "Completed",
    credentialUrl: "/certificates/Python%20for%20Data%20science.pdf",
    description: "Gained hands-on experience in Python for Data Science through NPTEL, performing data manipulation, exploratory data analysis, and predictive modeling for data-driven problem solving.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Wrangling"]
  },
  {
    id: "cert-nptel-r",
    title: "NPTEL - Advanced R for Data Analytics",
    issuer: "NPTEL",
    tag: "Coursework",
    date: "Completed",
    credentialUrl: "/certificates/Advanced%20R%20Programming%20for%20Data%20Analytics%20in%20Business.pdf",
    description: "Gained hands-on experience in Advanced R for Data Analytics through NPTEL, performing statistical analysis, data visualization, and predictive modeling using industry-standard techniques.",
    skills: ["R Programming", "Statistical Modeling", "Data Visualization", "Predictive Analytics"]
  },
  {
    id: "cert-pumo-fullstack",
    title: "Python Full Stack Development",
    issuer: "Pumo Technovation",
    tag: "Coursework",
    date: "Jun 2025 — Dec 2025",
    credentialUrl: "/certificates/python-fullstack.pdf",
    description: "Completed intensive full-stack Python engineering coursework covering backend development, database architecture, REST APIs, and application deployment at Pumo Technovation.",
    skills: ["Python", "Full Stack Development", "Backend Architecture", "REST APIs", "SQL & Databases"]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "proj-skincancer",
    title: "Skin Cancer Detection and Classification System Using CNN-SVM",
    category: "AI / ML",
    description: "Medical computer vision pipeline combining CLAHE preprocessing, fine-tuned MobileNetV2 deep feature extraction, and dual-engine RBF-SVM classification for high-precision skin lesion diagnostic screening.",
    metric: "94.17% Accuracy",
    metricLabel: "0.871 ROC-AUC",
    tech: ["Python", "TensorFlow", "MobileNetV2", "Scikit-Learn", "OpenCV (CLAHE)", "NumPy", "Pandas", "Streamlit", "Gradio", "Joblib"],
    githubUrl: "https://github.com/dharaniathananchayan/skincancer-detection",
    imageType: "terminal",
    highlights: [
      "Leak-Free Image Preprocessing & Architecture: Utilizes the 10,015-image HAM10000 dataset with strict patient-level grouping (lesion_id) to prevent data leakage, enhancing lesion borders via OpenCV CLAHE and extracting 1,280-dimensional deep feature representations with a fine-tuned MobileNetV2 CNN.",
      "Dual-Engine Classification (>93% Accuracy Target): Combines a high-precision binary cancer screener achieving 94.17% accuracy (0.871 ROC-AUC) on confident cases with a multi-class RBF-SVM providing a 7-class subtype breakdown and 93.65% Top-3 differential diagnostic accuracy.",
      "Interactive Clinical Web Interfaces: Deploys ready-to-use Streamlit and Gradio web dashboards supporting real-time image uploads, automated validation, instant malignancy risk stratification, and downloadable clinical JSON reports.",
      "Optimized Edge Inference: Employs Scikit-Learn StandardScaler, Normalizer, and Joblib serialization for fast, sub-second inference."
    ],
    architecture: "Fine-tuned MobileNetV2 CNN backbone extracting 1,280-D feature vectors coupled with dual RBF-SVM classifiers (binary screening + 7-class subtype differential) served through Streamlit & Gradio web dashboards with CLAHE preprocessing."
  },
  {
    id: "proj-swiftsupport",
    title: "SwiftSupport – Intelligent Customer Support & Automated Incident Resolution Platform",
    category: "Full Stack & APIs",
    description: "Enterprise-grade incident resolution platform featuring automated LLM-based triage, smart dispatch, outage clustering, and real-time observability telemetry.",
    metric: "LLM Triage",
    metricLabel: "Prometheus + Grafana",
    tech: ["Python", "FastAPI", "React 18", "SQLAlchemy", "Pydantic", "JWT Auth", "Prometheus", "Grafana", "Docker", "Vite"],
    githubUrl: "https://github.com/dharaniathananchayan/swiftsupport",
    liveUrl: "https://swiftsupport-beta.vercel.app/",
    imageType: "analytics",
    highlights: [
      "Automated AI Triage & Summarization: Evaluates incoming customer inquiries instantly upon creation to categorize departments, determine priority/SLA deadlines, detect sentiment, and generate concise executive briefs.",
      "Smart Dispatch & Outage Clustering: Automatically assigns tickets to active, specialized agents based on skill set and real-time workload limits, while detecting incident spikes to group related tickets for bulk resolution.",
      "Role-Based Portals & Live Telemetry: Provides dedicated interfaces for Customers, Agents, and Administrators, backed by real-time Prometheus metrics (/metrics) and embedded Grafana dashboards tracking SLA breaches, ticket velocity, and team capacity.",
      "Production-Ready Containerization: Full stack engineered with FastAPI, SQLAlchemy 2.0, Pydantic, and React 18, containerized via Docker and Docker Compose."
    ],
    architecture: "Asynchronous Python FastAPI service with LLM triage engine, SQLite/PostgreSQL with SQLAlchemy ORM, JWT authentication & role-based access control, Prometheus metrics exporter, and React 18 Vite frontend."
  },
  {
    id: "proj-campusiq",
    title: "CampusIQ – AI-Powered Campus Event Intelligence & Management Platform",
    category: "Full Stack & APIs",
    description: "Campus event intelligence ecosystem featuring semantic vector matching, real-time discussion rooms, multi-turn AI event co-pilot, and dual-persona student/organizer command center.",
    metric: "0–100% Match",
    metricLabel: "Semantic Vector Search",
    tech: ["Python 3.10+", "FastAPI 0.115", "React 19", "TypeScript 5.8", "Tailwind CSS v4", "Sentence-Transformers", "Zustand", "Docker", "Celery", "Redis", "PostgreSQL 16"],
    githubUrl: "https://github.com/dharaniathananchayan/campusiq",
    liveUrl: "https://campusiq-gamma-eosin.vercel.app/login",
    imageType: "nodes",
    highlights: [
      "Semantic AI Matching & Automated Co-Pilot: Employs local sentence-transformer vector embeddings (all-MiniLM-L6-v2) to calculate real-time compatibility scores (0–100%) matching students to campus events based on interaction history, department, and skills, paired with a conversational AI assistant for instant event Q&A and a multi-turn organizer co-pilot that drafts complete events.",
      "Persistent Discussion Forums & Global Omni-Search: Features dedicated, real-time attendee Q&A rooms for each campus session with verified organizer badges, like reactions, and permanent thread persistence that survives page reloads, accompanied by an instant multi-entity omni-search engine that filters events, student profiles, and club organizers with live interactive modals.",
      "Dual-Persona Workspaces & Capacity Enforcement: Unifies a student discovery portal (one-click RSVP, ticket passes, schedule planner) with an organizer command center (multi-step event builder, capacity gating with atomic seat countdowns, check-in rosters, participant moderation, and live velocity analytics).",
      "Asynchronous Infrastructure: Backed by Celery + Redis background task queues, Alembic async migrations, and a Pytest async test suite."
    ],
    architecture: "FastAPI 0.115 async backend with SQLAlchemy 2.0 Async & Alembic, local sentence-transformers (all-MiniLM-L6-v2) vector scoring, Celery + Redis queueing, and a React 19 / TypeScript 5.8 / Tailwind CSS v4 frontend with Zustand."
  },
  {
    id: "proj-shopsense",
    title: "ShopSense – AI-Powered Multi-Vendor E-Commerce & Retail Analytics Platform",
    category: "AI / ML",
    description: "Enterprise multi-vendor commerce platform with dual-path generative AI (RAG shopping assistant & Text-to-SQL analyst), ARIMA predictive inventory forecasting, and multimodal Vision AI copy generation.",
    metric: "FastAPI + RAG",
    metricLabel: "Text-to-SQL & ARIMA",
    tech: ["Python", "FastAPI", "React 19", "Groq Cloud (LLaMA-3.3-70B)", "Statsmodels", "Scikit-Learn", "SQLAlchemy 2.0", "WebSockets", "Docker"],
    githubUrl: "https://github.com/dharaniathananchayan/shopsense",
    liveUrl: "https://shopsense-ebon.vercel.app",
    imageType: "flow",
    highlights: [
      "Conversational RAG Assistant & Text-to-SQL Business Intelligence: Delivers dual-path generative AI intelligence—featuring an autonomous RAG shopping chatbot for natural language product discovery and a conversational Text-to-SQL analyst allowing merchants to audit sales trends, inventory turnover, and revenue metrics using plain English queries with zero data leaks.",
      "Predictive Inventory Forecasting & Health Audits: Implements time-series statistical modeling (ARIMA & Holt-Winters smoothing) integrated with automated Reorder Point (ROP) and safety stock calculations to forecast demand, prevent costly stockouts, and proactively alert store owners to inventory anomalies.",
      "Multi-Role Ecosystem & Vision AI Studio: Unifies dedicated portals for Shoppers, Vendors, and Administrators backed by real-time WebSocket sales event streaming, paired with a multimodal Vision AI studio that analyzes uploaded product imagery to generate high-converting SEO copy, specs, and tags automatically.",
      "Customer Taste Centroids & Clustering: Leverages Scikit-Learn TF-IDF vectorization and cosine similarity taste centroids alongside RFM clustering for personalized merchant recommendations."
    ],
    architecture: "Modular FastAPI backend with WebSockets and SQLAlchemy 2.0 ORM, integrating Groq Cloud LLaMA-3.3-70B RAG/Text-to-SQL pipelines, statsmodels ARIMA forecasting, and a React 19 glassmorphism frontend."
  },
  {
    id: "proj-ragqa",
    title: "Autonomous Document RAG & Conversational Knowledge Engine",
    category: "AI / ML",
    description: "Decoupled document intelligence system featuring automated PDF ingestion, 384-dimensional dense vector embeddings in Pinecone, and ultra-low-latency hallucination-free retrieval using Groq Cloud LLaMA-3.3-70B.",
    metric: "LLaMA-3.3-70B",
    metricLabel: "Pinecone + LangChain",
    tech: ["Python", "FastAPI", "Streamlit", "Pinecone", "LangChain", "Groq Cloud API", "Sentence-Transformers", "Uvicorn"],
    githubUrl: "https://github.com/dharaniathananchayan/rag-qa-system",
    imageType: "charts",
    highlights: [
      "Automated Document Ingestion & Dense Semantic Indexing: Implements an automated ingestion pipeline utilizing PyPDFLoader and RecursiveCharacterTextSplitter (chunk size: 500, overlap: 100) paired with all-MiniLM-L6-v2 to vectorize unstructured PDF text into 384-dimensional dense embeddings, efficiently upserting chunks with UUIDs and document source metadata into Pinecone for high-throughput similarity matching.",
      "Context-Grounded Retrieval & Ultra-Low-Latency Inference: Deploys a top-k cosine similarity search retriever integrated with Groq Cloud’s ultra-fast LLaMA-3.3-70B-Versatile engine operating at low temperature (T=0.2), enforcing strict contextual prompt boundaries to eliminate hallucinations and generate precise, citation-grounded answers.",
      "Decoupled Client-Server Architecture & Conversational Interface: Architected with a clean separation of concerns featuring an asynchronous FastAPI service handling file parsing and vector queries via /upload and /ask endpoints, connected to a reactive Streamlit web interface with persistent chat session state and dynamic JSON ingestion diagnostics.",
      "Production Vector Indexing: Manages Pinecone vector database index with UUID-tagged vector metadata tracking, 100-character sliding overlap chunking, and local file ingestion staging."
    ],
    architecture: "FastAPI ASGI backend exposing asynchronous /upload and /ask endpoints, LangChain text processing pipeline with all-MiniLM-L6-v2 embeddings into Pinecone, Groq Cloud LLaMA-3.3-70B generation, and a Streamlit chat client."
  }
];

export const stackCategories: StackCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    badge: "Flagship",
    description: "Deep learning frameworks, statistical modeling, neural network architectures, and machine learning pipelines.",
    skills: [
      {
        name: "PyTorch",
        category: "AI & Machine Learning",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Deep Learning & Tensors",
        highlighted: true,
        projects: ["Medical Imaging Pipelines", "Neural Network Prototyping"],
        description: "Tensor transformations, autograd engines, loss optimization, and neural network training pipelines.",
        badgeColor: "bg-orange-50 text-orange-700 border-orange-200"
      },
      {
        name: "TensorFlow",
        category: "AI & Machine Learning",
        level: 90,
        levelLabel: "Core Specialty",
        experience: "Deep Learning & CNN",
        highlighted: true,
        projects: ["Skin Cancer Detection", "Feature Extraction Backbone"],
        description: "Convolutional neural network architecture design, transfer learning, and tensor operations.",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
      },
      {
        name: "Scikit-learn",
        category: "AI & Machine Learning",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "Machine Learning",
        highlighted: true,
        projects: ["Skin Cancer (CNN-SVM)", "ShopSense Demand Forecast", "Rubixe AI Solutions"],
        description: "Classification, regression, SVM, Random Forests, K-Means clustering, and hyperparameter tuning.",
        badgeColor: "bg-orange-50 text-orange-700 border-orange-200"
      },
      {
        name: "Machine Learning",
        category: "AI & Machine Learning",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "Predictive Modeling",
        highlighted: true,
        projects: ["Rubixe AI Internship", "Predictive Analytics"],
        description: "Supervised and unsupervised learning, feature engineering, regularization, and model validation.",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
      },
      {
        name: "Deep Learning",
        category: "AI & Machine Learning",
        level: 90,
        levelLabel: "Core Specialty",
        experience: "Neural Architectures",
        highlighted: true,
        projects: ["Computer Vision Research", "CNN Feature Encoders"],
        description: "Convolutional backbones, activation functions, backpropagation dynamics, and loss landscape optimization.",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
      }
    ]
  },
  {
    id: "genai-rag-llm",
    name: "Generative AI, RAG & LLM Engineering",
    badge: "New Category",
    description: "Retrieval-augmented generation, vector search, embedding spaces, and production LLM orchestration.",
    skills: [
      {
        name: "RAG (Retrieval-Augmented Generation)",
        category: "Generative AI, RAG & LLM Engineering",
        level: 95,
        levelLabel: "Core Specialty",
        experience: "Context Retrieval Systems",
        highlighted: true,
        projects: ["Autonomous Document RAG", "ShopSense AI Assistant"],
        description: "Chunking strategies, dense vector retrieval, context injection, and hallucination reduction.",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
        name: "LangChain",
        category: "Generative AI, RAG & LLM Engineering",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "LLM Orchestration",
        highlighted: true,
        projects: ["Document RAG Pipeline", "Conversational Agents"],
        description: "Chains, retrieval agents, custom prompt templates, memory components, and output parsers.",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
      },
      {
        name: "LLM Integration",
        category: "Generative AI, RAG & LLM Engineering",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "Foundation Model APIs",
        highlighted: true,
        projects: ["ShopSense Platform", "Autonomous Document RAG"],
        description: "Structured JSON outputs, function calling, streaming completions, and API rate management.",
        badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
      },
      {
        name: "Vector Databases",
        category: "Generative AI, RAG & LLM Engineering",
        level: 90,
        levelLabel: "Production Ready",
        experience: "High-Dimensional Storage",
        highlighted: true,
        projects: ["Document RAG Knowledge Base", "Semantic Product Search"],
        description: "Index structures (HNSW, Flat), similarity search, metadata filtering, and collection management.",
        badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
      },
      {
        name: "Embeddings",
        category: "Generative AI, RAG & LLM Engineering",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Representation Learning",
        highlighted: true,
        projects: ["Sentence Transformers", "CampusIQ Semantic Match"],
        description: "Dense vector representations, sentence transformers, semantic distance metrics, and dimensionality analysis.",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        name: "Semantic Search",
        category: "Generative AI, RAG & LLM Engineering",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Neural Query Matching",
        highlighted: true,
        projects: ["CampusIQ Discovery Engine", "ShopSense Semantic Catalog"],
        description: "Cosine similarity, hybrid keyword-vector retrieval, reciprocal rank fusion, and relevance ranking.",
        badgeColor: "bg-violet-50 text-violet-700 border-violet-200"
      }
    ]
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    badge: "Pipelines",
    description: "Robust data extraction, automated transformation pipelines, and high-performance numerical computing.",
    skills: [
      {
        name: "SQL",
        category: "Data Engineering",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "Relational Querying",
        highlighted: true,
        projects: ["ShopSense (Text-to-SQL)", "SwiftSupport DB", "CampusIQ Schema"],
        description: "Complex joins, indexing, window functions, and query optimization for high throughput.",
        badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
      },
      {
        name: "Python",
        category: "Data Engineering",
        level: 96,
        levelLabel: "Core Specialty",
        experience: "Data Scripts & Automation",
        highlighted: true,
        projects: ["Data Transformation Engines", "ETL Scripts"],
        description: "High-speed batch processing, file streaming, schema validation, and multiprocessing workflows.",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        name: "NumPy",
        category: "Data Engineering",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Vectorized Computations",
        highlighted: false,
        projects: ["Skin Cancer Preprocessing", "IIT Madras Data Science Track"],
        description: "N-dimensional array broadcasting, linear algebra operations, matrix transformations, and slicing.",
        badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
      },
      {
        name: "Pandas",
        category: "Data Engineering",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "DataFrame Wrangling",
        highlighted: true,
        projects: ["ShopSense ETL", "Statistical Analysis Pipelines"],
        description: "Data cleaning, aggregation, grouping, pivot tables, and high-performance tabular manipulation.",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
      },
      {
        name: "ETL Pipelines",
        category: "Data Engineering",
        level: 90,
        levelLabel: "Production Ready",
        experience: "Data Pipeline Architecture",
        highlighted: true,
        projects: ["ShopSense Ingestion", "Analytics Aggregator"],
        description: "Automated extract, transform, and load workflows with validation, cleaning, and staging.",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
      },
      {
        name: "Data Processing",
        category: "Data Engineering",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Batch & Stream Processing",
        highlighted: false,
        projects: ["IIT Madras Data Projects", "Multi-Source Ingestion"],
        description: "Cleaning unstructured datasets, missing value imputation, normalization, and outlier detection.",
        badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
      },
      {
        name: "Data Integration",
        category: "Data Engineering",
        level: 88,
        levelLabel: "Production Ready",
        experience: "Multi-Source Ingestion",
        highlighted: false,
        projects: ["ShopSense Vendor Feeds", "CampusIQ Synchronization"],
        description: "Harmonizing heterogeneous data streams, REST endpoint polling, webhook sync, and schema reconciliation.",
        badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
      }
    ]
  },
  {
    id: "data-analytics-bi",
    name: "Data Analytics & Business Intelligence",
    badge: "Analytics",
    description: "Business intelligence reporting, time-series forecasting, and interactive data visualization.",
    skills: [
      {
        name: "Power BI",
        category: "Data Analytics & Business Intelligence",
        level: 90,
        levelLabel: "Core Specialty",
        experience: "Executive Dashboards",
        highlighted: true,
        projects: ["ShopSense Customer Analytics", "KPI Dashboards"],
        description: "DAX measures, interactive drill-downs, relationship modeling, and executive reports.",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
      },
      {
        name: "Tableau",
        category: "Data Analytics & Business Intelligence",
        level: 88,
        levelLabel: "Production Ready",
        experience: "Visual Analytics",
        highlighted: true,
        projects: ["ShopSense Forecasting Dashboard", "Trend Insights"],
        description: "Calculated fields, parameter actions, multi-axis charts, and visual storytelling.",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        name: "Microsoft Excel",
        category: "Data Analytics & Business Intelligence",
        level: 90,
        levelLabel: "Production Ready",
        experience: "Advanced Analytics",
        highlighted: false,
        projects: ["Financial & Vendor Modeling"],
        description: "VLOOKUP/XLOOKUP, Pivot Tables, conditional formatting, and statistical functions.",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
      },
      {
        name: "Pandas",
        category: "Data Analytics & Business Intelligence",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "Exploratory Analytics",
        highlighted: true,
        projects: ["Exploratory Data Analysis", "Customer Cohort Reports"],
        description: "Summary statistics, rolling averages, correlation matrices, and distribution metrics.",
        badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
      },
      {
        name: "NumPy",
        category: "Data Analytics & Business Intelligence",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Statistical Computations",
        highlighted: false,
        projects: ["Trend Analysis", "Percentile Calculations"],
        description: "Standard deviations, percentiles, correlation coefficients, and matrix math.",
        badgeColor: "bg-violet-50 text-violet-700 border-violet-200"
      },
      {
        name: "Data Visualization",
        category: "Data Analytics & Business Intelligence",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Insight Communication",
        highlighted: true,
        projects: ["ShopSense Analytics", "Medical Data Visualizer"],
        description: "Translating complex numerical distributions into intuitive charts, heatmaps, and executive dashboards.",
        badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        category: "Data Analytics & Business Intelligence",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "Dataset Diagnostics",
        highlighted: true,
        projects: ["Skin Lesion Dataset Exploration", "Demand Forecasting EDA"],
        description: "Hypothesis testing, skewness correction, univariate and bivariate analysis, and feature significance scoring.",
        badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
      }
    ]
  },
  {
    id: "software-backend",
    name: "Software & Backend Development",
    badge: "Architecture",
    description: "High-performance microservices, RESTful API architecture, and modern reactive frontends.",
    skills: [
      {
        name: "Python",
        category: "Software & Backend Development",
        level: 96,
        levelLabel: "Core Specialty",
        experience: "Primary Language",
        highlighted: true,
        projects: ["ShopSense Platform", "archintX Backend Services"],
        description: "Extensive experience building asynchronous backends, OOP design patterns, and modular packages.",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        name: "FastAPI",
        category: "Software & Backend Development",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "Async Microservices",
        highlighted: true,
        projects: ["SwiftSupport Backend", "CampusIQ API", "ShopSense Backend", "Document RAG"],
        description: "Asynchronous route handlers, Pydantic data schemas, dependency injection, and OpenAPI.",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
      },
      {
        name: "Django",
        category: "Software & Backend Development",
        level: 88,
        levelLabel: "Production Ready",
        experience: "Web Architecture",
        highlighted: true,
        projects: ["Enterprise Portal Services", "Admin Systems"],
        description: "Django REST Framework (DRF), ORM relationships, middleware, and user authentication.",
        badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
      },
      {
        name: "Flask",
        category: "Software & Backend Development",
        level: 86,
        levelLabel: "Production Ready",
        experience: "Lightweight Services",
        highlighted: false,
        projects: ["Microservices", "Worker Endpoints"],
        description: "Blueprint modular routing, Jinja templating, and lightweight API service layers.",
        badgeColor: "bg-neutral-100 text-neutral-800 border-neutral-300"
      },
      {
        name: "REST APIs",
        category: "Software & Backend Development",
        level: 95,
        levelLabel: "Core Specialty",
        experience: "API Protocol & Design",
        highlighted: true,
        projects: ["SwiftSupport APIs", "CampusIQ Endpoints", "ShopSense Services"],
        description: "Stateless architecture, status code standards, JWT authentication, and pagination.",
        badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
      },
      {
        name: "React",
        category: "Software & Backend Development",
        level: 85,
        levelLabel: "Production Ready",
        experience: "Interactive UI",
        highlighted: true,
        projects: ["CampusIQ (React 19)", "SwiftSupport (React 18)", "ShopSense UI"],
        description: "Component architecture, hooks, state management, and seamless REST API consumers.",
        badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
      },
      {
        name: "Backend Development",
        category: "Software & Backend Development",
        level: 94,
        levelLabel: "Core Specialty",
        experience: "System Architecture",
        highlighted: true,
        projects: ["archintX Internship", "Scalable Multi-Service Portals"],
        description: "Service layer separation, asynchronous event loops, rate limiting, and defensive error handling.",
        badgeColor: "bg-slate-50 text-slate-700 border-slate-200"
      }
    ]
  },
  {
    id: "databases-storage",
    name: "Databases & Data Storage",
    badge: "New Category",
    description: "Relational database schema modeling, document storage, and high-dimensional vector stores.",
    skills: [
      {
        name: "MySQL",
        category: "Databases & Data Storage",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "RDBMS Management",
        highlighted: true,
        projects: ["ShopSense Multi-Vendor DB", "Relational Schemas"],
        description: "Schema normalization, primary/foreign keys, indexing, and transactional integrity.",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        name: "PostgreSQL",
        category: "Databases & Data Storage",
        level: 90,
        levelLabel: "Core Specialty",
        experience: "Enterprise SQL & pgvector",
        highlighted: true,
        projects: ["CampusIQ Async Storage", "Enterprise DB Architecture"],
        description: "ACID compliance, JSONB queries, indexing (B-Tree, GIN), connection pooling, and pgvector.",
        badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
      },
      {
        name: "MongoDB",
        category: "Databases & Data Storage",
        level: 86,
        levelLabel: "Production Ready",
        experience: "NoSQL Documents",
        highlighted: false,
        projects: ["Document Storage Schemas"],
        description: "Document storage, aggregation pipelines, dynamic schemas, and indexing.",
        badgeColor: "bg-green-50 text-green-700 border-green-200"
      },
      {
        name: "Vector Databases",
        category: "Databases & Data Storage",
        level: 90,
        levelLabel: "Production Ready",
        experience: "High-Dimensional Embeddings",
        highlighted: true,
        projects: ["ChromaDB / FAISS RAG Stores", "CampusIQ Vector Index"],
        description: "Similarity search, approximate nearest neighbor (ANN), distance metrics, and vector persistence.",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
        name: "Database Management",
        category: "Databases & Data Storage",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Schema & Maintenance",
        highlighted: true,
        projects: ["Database Migration Engines", "Backup & Query Profiling"],
        description: "Alembic migrations, connection pooling, slow query analysis, and schema lifecycle management.",
        badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
      },
      {
        name: "SQL & NoSQL",
        category: "Databases & Data Storage",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Polyglot Persistence",
        highlighted: false,
        projects: ["Hybrid Storage Architecture", "ShopSense & CampusIQ"],
        description: "Selecting appropriate storage engines based on read/write characteristics, consistency, and structure.",
        badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
      }
    ]
  },
  {
    id: "devops-mlops-cloud",
    name: "DevOps, MLOps & Cloud",
    badge: "Operations",
    description: "Containerization, automated deployment pipelines, cloud infrastructure, and model lifecycle management.",
    skills: [
      {
        name: "Docker",
        category: "DevOps, MLOps & Cloud",
        level: 88,
        levelLabel: "Production Ready",
        experience: "Containerization",
        highlighted: true,
        projects: ["FastAPI Service Containers", "Multi-Stage Dockerfiles"],
        description: "Multi-stage builds, container isolation, environment parity, and Docker Compose orchestration.",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        name: "Git",
        category: "DevOps, MLOps & Cloud",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Version Control",
        highlighted: true,
        projects: ["All Project Repositories"],
        description: "Branching strategies, interactive rebasing, merge conflict resolution, and hooks.",
        badgeColor: "bg-orange-50 text-orange-700 border-orange-200"
      },
      {
        name: "GitHub",
        category: "DevOps, MLOps & Cloud",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Collaboration & Releases",
        highlighted: true,
        projects: ["Open Source Repositories", "Code Review Flows"],
        description: "Pull request reviews, issue tracking, branch protection rules, and release tagging.",
        badgeColor: "bg-neutral-100 text-neutral-800 border-neutral-300"
      },
      {
        name: "CI/CD",
        category: "DevOps, MLOps & Cloud",
        level: 85,
        levelLabel: "Production Ready",
        experience: "Continuous Integration",
        highlighted: true,
        projects: ["GitHub Actions Workflows", "Automated Pytest Pipelines"],
        description: "Automated test execution, linting checks, build validation, and deployment triggers.",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
      },
      {
        name: "Model Deployment",
        category: "DevOps, MLOps & Cloud",
        level: 86,
        levelLabel: "Production Ready",
        experience: "Inference Serving",
        highlighted: true,
        projects: ["FastAPI Model Serving", "CNN-SVM Inference Endpoint"],
        description: "Model serialization (ONNX, joblib), lightweight REST inference endpoints, and latency optimization.",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
        name: "Cloud Computing",
        category: "DevOps, MLOps & Cloud",
        level: 82,
        levelLabel: "Proficient",
        experience: "Cloud Services",
        highlighted: false,
        projects: ["Cloud Hosted APIs", "Storage Buckets & Compute"],
        description: "Virtual machine provisioning, object storage integration, environment variable security, and cloud deployment.",
        badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
      }
    ]
  },
  {
    id: "design-and-writing",
    name: "Design and Writing",
    badge: "New Category",
    description: "Visual design, CMS site design, narrative storytelling, technical blogging, and content strategy.",
    skills: [
      {
        name: "Creative Writing",
        category: "Design and Writing",
        level: 90,
        levelLabel: "Core Specialty",
        experience: "Editorial & Storytelling",
        highlighted: true,
        projects: ["Tech Voice Newsletter", "Creative Editorial Series"],
        description: "Engaging narrative structure, creative prose, metaphor crafting, and expressive audience communication.",
        badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
      },
      {
        name: "Content Writing",
        category: "Design and Writing",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Technical & Web Copy",
        highlighted: true,
        projects: ["Technical System Design Notes", "Product Documentation"],
        description: "Clear, concise technical explanations, documentation, user guides, and audience-tailored articles.",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
      },
      {
        name: "Graphic Design",
        category: "Design and Writing",
        level: 88,
        levelLabel: "Production Ready",
        experience: "Visual Communication",
        highlighted: true,
        projects: ["Editorial Layouts", "Banner & Asset Design"],
        description: "Visual balance, typography selection, aesthetic color harmony, and digital layout composition.",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
        name: "Blogging",
        category: "Design and Writing",
        level: 90,
        levelLabel: "Core Specialty",
        experience: "Online Publishing & Medium",
        highlighted: true,
        projects: ["Medium (@readmeandrepeat)", "Foundational Engineering Writeups"],
        description: "Long-form article publishing, SEO-friendly structured writing, and reader engagement.",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
      },
      {
        name: "Canva",
        category: "Design and Writing",
        level: 92,
        levelLabel: "Core Specialty",
        experience: "Digital Graphic Design",
        highlighted: true,
        projects: ["Visual Branding", "Presentation & Social Media Assets"],
        description: "Social media visual kits, presentation decks, infographics, and brand asset design.",
        badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
      },
      {
        name: "WordPress",
        category: "Design and Writing",
        level: 88,
        levelLabel: "Production Ready",
        experience: "CMS Architecture & Publishing",
        highlighted: false,
        projects: ["Blog Publishing Systems", "Content Site Administration"],
        description: "Theme customization, content layout management, SEO plugins, and editorial workflows.",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        name: "Wix",
        category: "Design and Writing",
        level: 86,
        levelLabel: "Production Ready",
        experience: "Web Layout & Design",
        highlighted: false,
        projects: ["Portfolio Site Prototypes", "Landing Page Layouts"],
        description: "Responsive visual web design, drag-and-drop page composition, and site styling.",
        badgeColor: "bg-neutral-100 text-neutral-800 border-neutral-300"
      }
    ]
  }
];

export const articles: ArticleItem[] = [
  {
    id: "art-ml-workflow",
    title: "Machine Learning Workflow: 8 Steps to Build Your First ML Model",
    readTime: "6 min read",
    date: "2025",
    tag: "Machine Learning",
    url: "https://medium.com/@readmeandrepeat/machine-learning-workflow-8-steps-to-build-your-first-ml-model-d26607766c5d",
    excerpt: "A complete, beginner-friendly walkthrough of the end-to-end machine learning lifecycle—from problem formulation and data cleaning to training, evaluation, and iteration.",
    content: [
      "Building your very first machine learning model can feel overwhelming when confronted with mathematical theory, code libraries, and countless algorithmic choices. However, every successful machine learning solution follows a disciplined, step-by-step workflow that transforms messy real-world data into reliable predictive capability.",
      "The process begins with defining the exact problem: deciding whether the goal requires classification, regression, or unsupervised clustering. From there, data collection and robust data cleaning lay the groundwork—handling missing values, removing outliers, and encoding categorical variables so algorithms can process information without distortion.",
      "Once exploratory data analysis (EDA) uncovers foundational distributions and correlations, feature engineering extracts maximum signal. By splitting the dataset into training and testing partitions, developers can train their candidate algorithms and objectively benchmark generalization performance before fine-tuning hyperparameters."
    ],
    takeaways: [
      "Data cleaning and preprocessing account for over 70% of a model's real-world predictive quality.",
      "Always partition your dataset into train/test splits before feature scaling or transformation to prevent data leakage.",
      "Start with simple benchmark algorithms before scaling to complex ensembles or deep learning architectures."
    ]
  },
  {
    id: "art-ml-terminology",
    title: "Machine Learning Terminology: 13 Essential Terms Every Beginner Should Know",
    readTime: "5 min read",
    date: "2025",
    tag: "ML Fundamentals",
    url: "https://medium.com/@readmeandrepeat/machine-learning-terminology-13-essential-terms-every-beginner-should-know-edb9e23eeeeb",
    excerpt: "Demystifying the foundational jargon of AI and data science: features, labels, overfitting, bias-variance tradeoffs, loss functions, and hyperparameters explained simply.",
    content: [
      "Diving into artificial intelligence and machine learning often feels like learning an entirely new language. Industry articles and tutorials throw around terms like hyperparameters, overfitting, loss functions, and variance without grounding them in practical context.",
      "This guide breaks down 13 indispensable concepts every aspiring engineer must master. We unpack the distinction between algorithms and models, clarify how features and labels interact in supervised learning versus unlabeled clustering, and explore the lifecycle transition from model training to production inference.",
      "Understanding the delicate balance between bias and variance, alongside diagnosing underfitting and overfitting, equips builders with the mental models necessary to debug model behaviors, choose proper evaluation metrics, and optimize learning algorithms effectively."
    ],
    takeaways: [
      "An algorithm is the set of learning rules; a model is the trained artifact that produces predictions.",
      "Balancing bias (underfitting) and variance (overfitting) is the central challenge in predictive modeling.",
      "Loss functions evaluate performance during training, while evaluation metrics quantify business and real-world success."
    ]
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Dharania demonstrated tremendous problem-solving abilities and dedication during AI development. Quickly grasped complex ML workflows and contributed clean, reliable Python implementations.",
    name: "Engineering Mentor",
    role: "Lead AI Engineer",
    company: "Rubixe AI Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    quote: "Exceptional academic performance combined with hands-on technical execution. Dharania's projects in RAG systems and computer vision demonstrate a rare depth in both software engineering and data science.",
    name: "Department Faculty",
    role: "Professor of Information Technology",
    company: "Dr M.G.R Educational & Research Institute",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];
