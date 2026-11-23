import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

interface NavbarProps {
  name: string;
}

export const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills & Stack', href: '#toolbox' },
    { name: 'Education', href: '#education' },
    { name: 'Accomplishments', href: '#proof' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f8f8f5]/90 backdrop-blur-md border-b border-[#e5e5dc] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-mono text-xs font-semibold shadow-xs group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-900 text-sm tracking-tight leading-none group-hover:text-black">
                {name}
              </span>
              <span className="text-[11px] text-neutral-500 font-mono tracking-tight flex items-center gap-1 mt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                AI &amp; Backend Engineer
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-md hover:text-neutral-950 hover:bg-neutral-200/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 shadow-xs transition-all hover:gap-2 active:scale-95"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5e5dc] bg-[#f8f8f5] px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200/60 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-200/60 flex items-center justify-between">
            <span className="text-xs text-neutral-500 flex items-center gap-1 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Opportunities
            </span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-900 text-white"
            >
              Contact Dharania
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
