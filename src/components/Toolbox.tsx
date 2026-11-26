import React from 'react';
import { Brain, Database, Code2, Cloud, Sparkles, Layers, BarChart3, PenTool } from 'lucide-react';

interface SkillCardData {
  id: string;
  title: string;
  percentage: number;
  icon: React.ReactNode;
  skills: string[];
  isNew?: boolean;
}

export const Toolbox: React.FC = () => {
  const cards: SkillCardData[] = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      percentage: 92,
      icon: <Brain className="w-5 h-5 text-[#1b4d3e]" />,
      skills: [
        'PyTorch',
        'TensorFlow',
        'Scikit-learn',
        'Machine Learning',
        'Deep Learning'
      ]
    },
    {
      id: 'genai-rag-llm',
      title: 'Generative AI, RAG & LLM Engineering',
      percentage: 94,
      icon: <Sparkles className="w-5 h-5 text-[#1b4d3e]" />,
      isNew: true,
      skills: [
        'RAG (Retrieval-Augmented Generation)',
        'LangChain',
        'LLM Integration',
        'Vector Databases',
        'Embeddings',
        'Semantic Search'
      ]
    },
    {
      id: 'data-eng',
      title: 'Data Engineering',
      percentage: 88,
      icon: <Layers className="w-5 h-5 text-[#1b4d3e]" />,
      skills: [
        'SQL',
        'Python',
        'NumPy',
        'Pandas',
        'ETL Pipelines',
        'Data Processing',
        'Data Integration'
      ]
    },
    {
      id: 'data-analytics-bi',
      title: 'Data Analytics & Business Intelligence',
      percentage: 90,
      icon: <BarChart3 className="w-5 h-5 text-[#1b4d3e]" />,
      skills: [
        'Power BI',
        'Tableau',
        'Microsoft Excel',
        'Pandas',
        'NumPy',
        'Data Visualization',
        'Exploratory Data Analysis (EDA)'
      ]
    },
    {
      id: 'software-backend',
      title: 'Software & Backend Development',
      percentage: 95,
      icon: <Code2 className="w-5 h-5 text-[#1b4d3e]" />,
      skills: [
        'Python',
        'FastAPI',
        'Django',
        'Flask',
        'REST APIs',
        'Postman',
        'Playwright',
        'Selenium',
        'React',
        'Backend Development'
      ]
    },
    {
      id: 'databases-storage',
      title: 'Databases & Data Storage',
      percentage: 91,
      icon: <Database className="w-5 h-5 text-[#1b4d3e]" />,
      isNew: true,
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Vector Databases',
        'Database Management',
        'SQL & NoSQL'
      ]
    },
    {
      id: 'devops-mlops-cloud',
      title: 'DevOps, MLOps & Cloud',
      percentage: 85,
      icon: <Cloud className="w-5 h-5 text-[#1b4d3e]" />,
      skills: [
        'Docker',
        'Git',
        'GitHub',
        'CI/CD',
        'Model Deployment',
        'Cloud Computing'
      ]
    },
    {
      id: 'design-and-writing',
      title: 'Design and Writing',
      percentage: 90,
      icon: <PenTool className="w-5 h-5 text-[#1b4d3e]" />,
      isNew: true,
      skills: [
        'Creative Writing',
        'Content Writing',
        'Graphic Design',
        'Blogging',
        'Canva',
        'WordPress',
        'Wix'
      ]
    }
  ];

  return (
    <section id="toolbox" className="py-16 md:py-24 border-b border-[#e5e5dc]/80 bg-[#f4f4f0]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-neutral-500 uppercase mb-2">
            04 / CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            A practical toolbox.
          </h2>
          <p className="text-sm text-neutral-600 mt-1 max-w-xl">
            The languages, frameworks, design tools, and infrastructure I rely on to build resilient systems.
          </p>
        </div>

        {/* 4 Categories in a Row Grid (2 Rows of 4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl sm:rounded-[24px] border border-neutral-200/90 p-4 sm:p-6 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon squircle on left, Badge & Percentage on right */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#eaf4ed] flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {card.isNew && (
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-[#1b4d3e] border border-emerald-200">
                        New
                      </span>
                    )}
                    <span className="text-xs font-mono font-medium text-neutral-400">
                      {card.percentage}%
                    </span>
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight mt-4 mb-2.5 leading-snug">
                  {card.title}
                </h3>

                {/* Forest Green Progress Bar */}
                <div className="h-1.5 w-full bg-[#ebebeb] rounded-full overflow-hidden mb-5">
                  <div
                    className="h-full rounded-full bg-[#1b4d3e] transition-all duration-700 ease-out"
                    style={{ width: `${card.percentage}%` }}
                  ></div>
                </div>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {card.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 rounded-full bg-[#f4f5f4] text-neutral-700 text-[11px] sm:text-xs font-medium border border-neutral-200/60 hover:bg-neutral-200/70 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
