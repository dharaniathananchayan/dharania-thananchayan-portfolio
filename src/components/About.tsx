import React from 'react';
import { Compass, Terminal, Mail, MapPin, Quote, FileText } from 'lucide-react';
import { LinkedinIcon, CodolioIcon, GithubIcon } from './SocialIcons';
import dharaniaPhoto from '../assets/dharania.jpg';

interface AboutProps {
  name: string;
  roleTitle: string;
  aboutNarrative: string;
  location: string;
  phone: string;
  email: string;
  linkedin?: string;
  github?: string;
  codolio?: string;
  currentWork: string;
  stats: { value: string; label: string }[];
}

export const About: React.FC<AboutProps> = ({
  name,
  aboutNarrative,
  location,
  email,
  linkedin,
  github,
  codolio,
  stats
}) => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#e5e5dc]/80 relative bg-[#f8f8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-neutral-500 uppercase mb-2">
            01 / ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Engineer by profession, curious by default.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (Narrative, Core Cards & Stats) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base text-neutral-700 leading-relaxed">
              {aboutNarrative.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Focus & Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-2 hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 mb-2">
                  <Terminal className="w-4 h-4 text-neutral-700" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm">
                  Backend &amp; System Architecture
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Crafting resilient services, clean APIs, and thoughtful database models designed to run smoothly behind the scenes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-2 hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 mb-2">
                  <Compass className="w-4 h-4 text-neutral-700" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm">
                  AI &amp; Intelligent Products
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Developing practical, human-centered AI—from generative assistants and smart search to computer vision models that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-4 border-t border-neutral-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/70 border border-neutral-200/70">
                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-mono tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-neutral-500 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Exact Profile Card from User Mockup */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Profile Card */}
            <div className="p-5 sm:p-7 rounded-[26px] sm:rounded-[32px] bg-white border border-neutral-200/90 shadow-xs">
              
              {/* Profile Avatar */}
              <div className="w-24 h-24 rounded-[26px] overflow-hidden mx-auto shadow-xs border border-neutral-200/60 bg-neutral-100">
                <img
                  src={dharaniaPhoto}
                  alt={name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name & Subtitle */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                  {name}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  ML Engineer • Data Scientist • Builder
                </p>
              </div>

              {/* Inset Light Grey Info Box */}
              <div className="mt-5 rounded-2xl bg-[#f5f6f4] border border-neutral-200/60 p-3.5 sm:p-4 space-y-2.5 sm:space-y-3 text-xs text-neutral-700">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-black font-medium truncate"
                  >
                    {email}
                  </a>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span className="font-medium truncate">{location}</span>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <LinkedinIcon className="w-4 h-4 text-neutral-500 shrink-0" />
                  <a
                    href={linkedin || "https://www.linkedin.com/in/dharaniathananchayan/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black font-medium truncate"
                  >
                    in/dharaniathananchayan
                  </a>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <GithubIcon className="w-4 h-4 text-neutral-500 shrink-0" />
                  <a
                    href={github || "https://github.com/dharaniathananchayan"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black font-medium truncate"
                  >
                    github/dharaniathananchayan
                  </a>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <CodolioIcon className="w-4 h-4 text-neutral-500 shrink-0" />
                  <a
                    href={codolio || "https://codolio.com/profile/dharaniathananchayan"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black font-medium truncate"
                  >
                    codolio/dharaniathananchayan
                  </a>
                </div>
              </div>

              {/* Resume Action Button */}
              <a
                href="/certificates/Dharania_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full py-3.5 px-6 rounded-xl bg-[#0f1115] hover:bg-black text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-98 group"
              >
                <FileText className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>View &amp; Download My Resume</span>
              </a>

            </div>

            {/* Quote Box Beneath Card */}
            <div className="rounded-2xl bg-[#ebf3ee] border border-[#dce8e0] p-4 sm:p-4.5 flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#1b4d3e] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-[13px] text-[#1b4d3e] font-medium leading-relaxed italic">
                &ldquo;First, solve the problem. Then, write the code — with clarity, speed, and precision.&rdquo;
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
