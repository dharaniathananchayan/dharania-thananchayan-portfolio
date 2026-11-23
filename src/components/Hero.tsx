import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, MapPin, Check } from 'lucide-react';

interface HeroProps {
  name: string;
  roleTitle: string;
  bio: string;
  location: string;
  timezone: string;
}

export const Hero: React.FC<HeroProps> = ({ name, roleTitle, bio, location, timezone }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [typedCommand, setTypedCommand] = useState('');
  const [isRunning, setIsRunning] = useState(true);

  // Type the command first, reveal logs sequentially, hold for 4 seconds, then repeat in a loop
  useEffect(() => {
    let isCancelled = false;
    let timerId: ReturnType<typeof setTimeout>;
    let typeIntervalId: ReturnType<typeof setInterval>;

    const commandText = 'uvicorn main:app --workers 4';

    const runCycle = () => {
      if (isCancelled) return;
      setActiveStep(0);
      setTypedCommand('');
      setIsRunning(true);

      let charIndex = 0;

      typeIntervalId = setInterval(() => {
        if (isCancelled) {
          clearInterval(typeIntervalId);
          return;
        }
        if (charIndex <= commandText.length) {
          setTypedCommand(commandText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeIntervalId);

          // Reveal subsequent steps sequentially
          timerId = setTimeout(() => {
            if (isCancelled) return;
            setActiveStep(1);

            timerId = setTimeout(() => {
              if (isCancelled) return;
              setActiveStep(2);

              timerId = setTimeout(() => {
                if (isCancelled) return;
                setActiveStep(3);

                timerId = setTimeout(() => {
                  if (isCancelled) return;
                  setActiveStep(4);

                  timerId = setTimeout(() => {
                    if (isCancelled) return;
                    setActiveStep(5);
                    setIsRunning(false);

                    // Pause for 4 seconds on complete state, then loop again
                    timerId = setTimeout(() => {
                      if (isCancelled) return;
                      runCycle();
                    }, 4000);

                  }, 400);
                }, 400);
              }, 400);
            }, 400);
          }, 300);
        }
      }, 35);
    };

    runCycle();

    return () => {
      isCancelled = true;
      clearInterval(typeIntervalId);
      clearTimeout(timerId);
    };
  }, []);

  const stackPills = [
    { name: 'Python', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'PyTorch & TensorFlow', color: 'bg-orange-50 text-orange-700 border-orange-200' },
    { name: 'RAG & LangChain', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'FastAPI & Django', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { name: 'SQL & PostgreSQL', color: 'bg-sky-50 text-sky-700 border-sky-200' },
    { name: 'Vector Databases', color: 'bg-violet-50 text-violet-700 border-violet-200' },
    { name: 'Docker & CI/CD', color: 'bg-slate-100 text-slate-800 border-slate-300' },
    { name: 'React', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' }
  ];

  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#e5e5dc]/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neutral-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Pill & Role */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300/80 bg-white/80 shadow-xs text-xs font-medium text-neutral-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Software &amp; AI Opportunities</span>
              </div>
              <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
                • {roleTitle}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-neutral-900 leading-[1.1] sm:leading-[1.08]">
              <span className="block text-neutral-900">{name}</span>
              <span className="block text-neutral-800 font-normal">builds intelligent</span>
              <span className="block text-neutral-950">software.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
              {bio}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-medium text-sm hover:bg-neutral-800 transition-all shadow-xs hover:shadow-md active:scale-98 w-full sm:w-auto text-center"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-neutral-300 bg-white/90 text-neutral-800 font-medium text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-2xs w-full sm:w-auto text-center"
              >
                <FileText className="w-4 h-4 text-neutral-500" />
                <span>Experience &amp; Academics</span>
              </a>
            </div>

            {/* Tech Stack Strip */}
            <div className="pt-6 border-t border-neutral-200/80">
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-3 font-semibold">
                Core Competencies &amp; Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {stackPills.map((tech) => (
                  <span
                    key={tech.name}
                    className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-transform hover:scale-105 cursor-default ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Clean, Neutral & Animated Terminal Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* macOS Animated Terminal Card */}
            <div className="rounded-[26px] border border-neutral-300/90 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all hover:shadow-[0_12px_36px_rgb(0,0,0,0.08)]">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#f5f5f1] border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400/80 border border-rose-500/30"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/30"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/30"></div>
                  <span className="ml-2 text-xs font-mono text-neutral-500 font-medium">
                    server.py
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-700">
                  <span className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-amber-500 animate-ping' : 'bg-emerald-500 animate-pulse'}`}></span>
                  <span>{isRunning ? 'booting' : 'online • 8000'}</span>
                </div>
              </div>

              {/* Terminal Body with Smooth Neutral Logs */}
              <div className="p-4 sm:p-5 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-[#0d1117] text-neutral-200 space-y-2 border border-neutral-800 shadow-inner min-h-[190px] flex flex-col justify-between">
                  
                  {/* Terminal Lines */}
                  <div className="space-y-2">
                    {/* Command Prompt */}
                    <div className="text-emerald-300 font-semibold text-xs flex items-center gap-1.5">
                      <span className="text-neutral-500">$</span>
                      <span>{typedCommand}</span>
                      {isRunning && (
                        <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse align-middle"></span>
                      )}
                    </div>

                    {/* Step 1: Framework Init */}
                    {activeStep >= 1 && (
                      <div className="text-neutral-300 text-[11px] flex items-center gap-1.5 animate-in fade-in duration-150">
                        <span className="text-emerald-400">✓</span>
                        <span>FastAPI backend initialized</span>
                      </div>
                    )}

                    {/* Step 2: Database Connection */}
                    {activeStep >= 2 && (
                      <div className="text-neutral-300 text-[11px] flex items-center gap-1.5 animate-in fade-in duration-150">
                        <span className="text-emerald-400">✓</span>
                        <span>Database &amp; schema connection verified</span>
                      </div>
                    )}

                    {/* Step 3: ML Inference Engine */}
                    {activeStep >= 3 && (
                      <div className="text-neutral-300 text-[11px] flex items-center gap-1.5 animate-in fade-in duration-150">
                        <span className="text-emerald-400">✓</span>
                        <span>Machine learning inference engine loaded</span>
                      </div>
                    )}

                    {/* Step 4: Health Check Passed */}
                    {activeStep >= 4 && (
                      <div className="text-neutral-300 text-[11px] flex items-center gap-1.5 animate-in fade-in duration-150">
                        <span className="text-emerald-400">✓</span>
                        <span>Health check passed • 24ms p95 latency</span>
                      </div>
                    )}

                    {/* Step 5: Active & Listening */}
                    {activeStep >= 5 && (
                      <div className="text-amber-300 text-[11px] font-semibold flex items-center gap-1.5 animate-in fade-in duration-200 pt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                        <span className="break-all">Server listening on http://127.0.0.1:8000</span>
                      </div>
                    )}
                  </div>

                  {/* Terminal Footer Indicator */}
                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                      <Check className="w-3 h-3" />
                      Status: 200 OK
                    </span>
                    <span className="bg-neutral-800 px-2 py-0.5 rounded text-neutral-300">
                      ⚡ 24ms latency
                    </span>
                  </div>

                </div>
              </div>

            </div>

            {/* Dark Location & Open Status Card */}
            <div className="p-4 rounded-2xl bg-neutral-950 text-white border border-neutral-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-semibold text-neutral-200">Available for Opportunities</span>
                </div>
                <p className="text-[11px] text-neutral-400 flex items-center gap-1 font-mono">
                  <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                  <span className="truncate">{location} • {timezone}</span>
                </p>
              </div>
              <a
                href="#contact"
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-200 border border-white/10 transition-colors text-center whitespace-nowrap self-start sm:self-auto"
              >
                Hire / Connect &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
