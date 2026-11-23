import React from 'react';
import { Layers, Terminal, Activity, Sparkles, FileText, Cpu } from 'lucide-react';

interface GraphicProps {
  type: 'analytics' | 'terminal' | 'flow' | 'charts' | 'voice' | 'nodes';
}

export const ProjectCardGraphic: React.FC<GraphicProps> = ({ type }) => {
  switch (type) {
    case 'flow':
      // ShopSense: AI-Powered Multi-Vendor E-Commerce & Retail Analytics Platform
      return (
        <div className="w-full h-44 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200/70 p-3 rounded-xl border border-neutral-200/90 flex flex-col justify-between overflow-hidden relative group-hover:border-neutral-400 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              shopsense_engine.py
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200">
              FastAPI + RAG &amp; SQL
            </span>
          </div>

          <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-lg border border-neutral-200/80 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-800">
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                Multi-Vendor RAG &amp; Text-to-SQL
              </span>
              <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold">
                LLaMA-3.3-70B
              </span>
            </div>
            <div className="w-full bg-neutral-100 rounded-sm h-1.5 overflow-hidden">
              <div className="bg-blue-600 h-full w-[94%] rounded-sm"></div>
            </div>
            <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
              <span>ARIMA Demand Forecast</span>
              <span>Vision AI Studio</span>
            </div>
          </div>

          <div className="flex gap-1.5">
            <div className="flex-1 bg-white/80 rounded p-1.5 text-[10px] font-mono text-neutral-700 border border-neutral-200/60 truncate">
              SELECT vendor_id, predicted_stockout FROM inventory_forecast;
            </div>
          </div>
        </div>
      );

    case 'terminal':
      // Skin Cancer Detection and Classification System Using CNN-SVM
      return (
        <div className="w-full h-44 bg-[#0d1117] p-3 rounded-xl border border-neutral-800 flex flex-col justify-between font-mono text-xs text-neutral-300 overflow-hidden relative">
          <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-neutral-800 pb-1.5">
            <span className="flex items-center gap-1 text-emerald-400">
              <Terminal className="w-3 h-3" />
              cnn_svm_classifier.py
            </span>
            <span className="text-[10px] text-neutral-400">MobileNetV2 + RBF-SVM</span>
          </div>

          <div className="space-y-1 text-[11px] py-1 text-neutral-300">
            <p className="text-neutral-400">&gt; cnn.extract_features(HAM10000_sample)</p>
            <p className="text-emerald-400">&gt;&gt; Features: 1,280-dim representation extracted</p>
            <p className="text-cyan-400">&gt;&gt; Dual-SVM: 94.17% binary / 93.65% Top-3 diagnostic</p>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-neutral-800/80 text-[10px]">
            <span className="text-neutral-400">CLAHE In LAB: Active</span>
            <span className="text-emerald-400 font-bold tracking-wider">STREAMLIT + GRADIO</span>
          </div>
        </div>
      );

    case 'analytics':
      // SwiftSupport – Intelligent Customer Support & Automated Incident Resolution Platform
      return (
        <div className="w-full h-44 bg-gradient-to-b from-[#0e1726] to-[#0a0f1d] p-3 rounded-xl border border-neutral-800 flex flex-col justify-between overflow-hidden relative text-white">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Activity className="w-3.5 h-3.5" />
              SwiftSupport Observability
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
              /metrics + Grafana
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-200">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                LLM Triage &amp; Incident Clustering
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Live Active
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-8 pt-1">
              {[40, 65, 50, 85, 70, 95, 60, 80, 55, 90, 75, 100].map((val, i) => (
                <div key={i} className="flex-1 bg-white/10 rounded-t h-full flex items-end">
                  <div
                    className="bg-cyan-500 w-full rounded-t transition-all"
                    style={{ height: `${val}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 border-t border-neutral-800">
            <span>Automated SLA Routing</span>
            <span className="text-cyan-400 font-bold">FastAPI + React 18</span>
          </div>
        </div>
      );

    case 'charts':
      // Autonomous Document RAG & Conversational Knowledge Engine
      return (
        <div className="w-full h-44 bg-[#0a0f1d] p-3 rounded-xl border border-neutral-800 flex flex-col justify-between overflow-hidden relative text-white">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-purple-400">
              <FileText className="w-3.5 h-3.5" />
              Document RAG Pipeline
            </span>
            <span className="text-purple-300 font-bold text-[10px] bg-purple-500/20 px-1.5 py-0.5 rounded border border-purple-500/30">
              Pinecone Vector DB
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-neutral-200">
              <span className="font-mono text-[11px] text-purple-300">all-MiniLM-L6-v2 (384-D)</span>
              <span className="text-[10px] font-mono text-emerald-400">T = 0.2 (Zero Hallucination)</span>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 truncate">
              &gt; Chunk: 500 chars | Overlap: 100 | UUID metadata
            </div>
            <div className="w-full bg-white/10 rounded-sm h-1.5 overflow-hidden">
              <div className="bg-purple-500 h-full w-[96%] rounded-sm"></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 border-t border-neutral-800">
            <span>FastAPI ASGI + Streamlit</span>
            <span className="text-purple-400 font-bold">LLaMA-3.3-70B Versatile</span>
          </div>
        </div>
      );

    case 'nodes':
      // CampusIQ – AI-Powered Campus Event Intelligence & Management Platform
      return (
        <div className="w-full h-44 bg-[#0f172a] p-3 rounded-xl border border-neutral-800 flex flex-col justify-between overflow-hidden relative text-white">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Cpu className="w-3.5 h-3.5" />
              CampusIQ Event Intelligence
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
              Semantic Vector Matching
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-2 rounded-lg border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-200">
              <span className="text-neutral-300">Student Compatibility Score</span>
              <span className="text-emerald-400 font-mono font-bold text-xs">98.4% Match</span>
            </div>
            <div className="w-full bg-white/10 rounded-sm h-1.5 overflow-hidden">
              <div className="bg-emerald-500 h-full w-[98%] rounded-sm"></div>
            </div>
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
              <span>Atomic Capacity Gating</span>
              <span>Omni-Search Modals</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 border-t border-neutral-800">
            <span>Celery + Redis + Alembic</span>
            <span className="text-emerald-400 font-bold">React 19 + Tailwind v4</span>
          </div>
        </div>
      );

    case 'voice':
    default:
      return null;
  }
};
