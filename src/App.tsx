import { initialProfile, experiences } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Toolbox } from './components/Toolbox';
import { Foundations } from './components/Foundations';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';

export function App() {
  const profile = initialProfile;

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar name={profile.name} />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          name={profile.name}
          roleTitle={profile.roleTitle}
          bio={profile.bio}
          location={profile.location}
          timezone={profile.timezone}
        />

        {/* 01 / About Me */}
        <About
          name={profile.name}
          roleTitle={profile.roleTitle}
          aboutNarrative={profile.aboutNarrative}
          location={profile.location}
          phone={profile.phone}
          email={profile.email}
          linkedin={profile.linkedin}
          github={profile.github}
          codolio={profile.codolio}
          currentWork={profile.currentWork}
          stats={profile.stats}
        />

        {/* 02 / Experience & Education */}
        <Experience experiences={experiences} />

        {/* 03 / Projects with receipts */}
        <Projects />

        {/* 04 / Capabilities / Toolbox */}
        <Toolbox />

        {/* 05 / Technical Notes & Research */}
        <Foundations />

        {/* 06 / Proof & Endorsements */}
        <Testimonials />
      </main>

      {/* Dark Footer & Direct Inquiries */}
      <ContactSection
        name={profile.name}
        email={profile.email}
        phone={profile.phone}
        location={profile.location}
        timezone={profile.timezone}
        github={profile.github}
        linkedin={profile.linkedin}
        codolio={profile.codolio}
      />
    </div>
  );
}

export default App;
