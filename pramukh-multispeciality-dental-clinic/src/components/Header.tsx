import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/business';

interface HeaderProps {
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultationModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About the Clinic', href: '#about-clinic' },
    { label: 'Treatments', href: '#treatment-directory' },
    { label: 'Patient Information', href: '#patient-info' },
    { label: 'FAQ', href: '#patient-faq' },
    { label: 'Contact', href: '#contact-location' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-[#C3C6CF]/30 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(18,52,90,0.08)] py-3'
          : 'bg-[#FFFFFF] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Zone 1: Single Brand Logo Lockup */}
        <a href="#hero" className="flex items-center gap-3 shrink-0 group focus:outline-none">
          <div className="w-10 h-10 bg-[#12345A] text-white flex items-center justify-center font-bold text-lg group-hover:bg-[#2878D4] transition-colors">
            <span className="material-symbols-outlined text-[22px]">dentistry</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-[#12345A] text-lg leading-tight uppercase tracking-tight">
              {BUSINESS_CONFIG.shortName}
            </span>
            <span className="text-[11px] font-headline text-[#2878D4] tracking-wider uppercase font-semibold">
              Kudasan, Gandhinagar
            </span>
          </div>
        </a>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#35465B] hover:text-[#2878D4] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA & Phone Action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={BUSINESS_CONFIG.contact.phoneTel}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#12345A] hover:text-[#2878D4] transition-colors uppercase tracking-wider px-3 py-2 border border-[#35465B]/20"
          >
            <span className="material-symbols-outlined text-[16px] text-[#2878D4]">call</span>
            <span>{BUSINESS_CONFIG.contact.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenConsultationModal()}
            className="inline-flex items-center justify-center bg-[#12345A] hover:bg-[#2878D4] text-white font-headline text-xs font-semibold px-5 py-2.5 transition-all uppercase tracking-wider shadow-[0_2px_0_0_#12345A] focus:outline-none focus:ring-2 focus:ring-[#2878D4]"
          >
            Request a Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 text-[#12345A] hover:bg-[#F3F6FA] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined text-[26px]">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFFFF] border-b border-[#C3C6CF] px-6 py-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#12345A] hover:text-[#2878D4] py-2 border-b border-[#F3F6FA]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={BUSINESS_CONFIG.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#12345A] py-3 border border-[#12345A] uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call Clinic: {BUSINESS_CONFIG.contact.phoneDisplay}
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full bg-[#12345A] text-white font-headline text-xs font-semibold py-3 uppercase tracking-wider text-center"
              >
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
