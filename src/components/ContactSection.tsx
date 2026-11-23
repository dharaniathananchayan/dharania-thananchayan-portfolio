import React, { useState } from 'react';
import { ArrowUp, Check, Copy, FileText, Mail, MapPin, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodolioIcon } from './SocialIcons';

interface ContactSectionProps {
  name: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  github: string;
  linkedin: string;
  codolio?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  name,
  email,
  phone,
  location,
  timezone,
  github,
  linkedin,
  codolio
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquiryType, setInquiryType] = useState('Full-time');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName || !formData.senderEmail || !formData.message) {
      alert('Please fill out all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/xppdopzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.senderName,
          email: formData.senderEmail,
          inquiryType: inquiryType,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setSubmitError(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setSubmitError('Failed to send message. Please try again or email directly.');
        }
      }
    } catch {
      setSubmitError('Network error. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0b0d11] text-white pt-20 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-neutral-800">
          
          {/* Left Column (Heading, Details & Socials) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>OPEN FOR OPPORTUNITIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&#39;s build something <br />
              <span className="text-neutral-400 font-light">intelligent.</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
              Seeking software engineering, backend development, and AI/ML-driven roles where I can contribute and build impactful systems.
            </p>

            {/* Quick Action Contact Details */}
            <div className="pt-2 space-y-3">
              {/* Email */}
              <div className="flex items-center gap-2 max-w-full">
                <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between gap-3 w-full sm:w-auto min-w-0">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-neutral-200 truncate">{email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {copiedEmail && (
                  <span className="text-xs text-emerald-400 font-mono animate-in fade-in shrink-0">
                    Email copied!
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 max-w-full">
                <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between gap-3 w-full sm:w-auto min-w-0">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-neutral-200 truncate">{phone}</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy phone number to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {copiedPhone && (
                  <span className="text-xs text-emerald-400 font-mono animate-in fade-in shrink-0">
                    Phone copied!
                  </span>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono pt-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span className="truncate">{location} • {timezone}</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={codolio || "https://codolio.com/profile/dharaniathananchayan"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <CodolioIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Codolio Profile</span>
              </a>
            </div>

            {/* Resume Download / View Button */}
            <div className="pt-4">
              <a
                href="/certificates/Dharania_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-98 group w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>View &amp; Download My Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column (Contact Card) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl bg-white text-neutral-900 p-5 sm:p-8 shadow-2xl border border-neutral-200">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-950">Send a direct message</h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Leave a note with your opportunity or inquiry.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-3 bg-neutral-50 rounded-2xl border border-neutral-200 animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-neutral-900 text-base">Message Received</h4>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.senderName}. I have received your note regarding {inquiryType} and will get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ senderName: '', senderEmail: '', message: '' });
                    }}
                    className="mt-2 text-xs font-medium text-neutral-600 hover:text-neutral-950 underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry Type Chips */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2 font-semibold">
                      Inquiry Nature
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {['Full-time', 'Internship', 'Project', 'Freelance'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`text-xs font-medium py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                            inquiryType === type
                              ? 'bg-neutral-900 text-white border-neutral-900'
                              : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Recruiter or Hiring Manager"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Message / Role Details
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Role description, team overview, or project scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Error Notification */}
                  {submitError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 leading-relaxed">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Dharania'}</span>
                    {isSubmitting ? (
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Open for Immediate Joining &amp; Roles</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} {name}.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
