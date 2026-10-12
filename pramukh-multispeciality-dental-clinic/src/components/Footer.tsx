import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'governance') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="w-full bg-[#12345A] text-white border-t border-[#C3C6CF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#C3C6CF]/20">
          {/* Brand & Address Column (2 cols) */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[#12345A] text-[22px]">
                  dentistry
                </span>
              </div>
              <span className="font-headline font-bold text-lg text-white tracking-tight uppercase">
                {BUSINESS_CONFIG.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#EAF1FF]/90 max-w-sm mb-6 leading-relaxed">
              Advanced technical stomatology, surgical implantology, and micro-endodontic protocols designed to deliver precision healthcare and restorative certainty in Kudasan, Gandhinagar.
            </p>

            <div className="space-y-3 text-xs text-[#EAF1FF]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#599FFE] text-[18px] mt-0.5 shrink-0">
                  location_on
                </span>
                <span>{BUSINESS_CONFIG.address.fullAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#599FFE] text-[18px] shrink-0">
                  call
                </span>
                <a href={BUSINESS_CONFIG.contact.phoneTel} className="hover:text-[#599FFE] transition-colors font-mono">
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#599FFE] text-[18px] shrink-0">
                  schedule
                </span>
                <span>{BUSINESS_CONFIG.operatingHours.weekdaySchedule}</span>
              </div>
            </div>
          </div>

          {/* Treatments Column */}
          <div>
            <div className="font-headline text-xs font-bold text-[#599FFE] uppercase tracking-wider mb-4 pb-2 border-b border-[#C3C6CF]/20">
              Treatments
            </div>
            <ul className="space-y-2.5 text-xs text-[#EAF1FF]/90">
              <li>
                <a href="#treatment-directory" className="hover:text-[#599FFE] transition-colors">
                  Guided Implantology
                </a>
              </li>
              <li>
                <a href="#treatment-directory" className="hover:text-[#599FFE] transition-colors">
                  Rotary Endodontics (RCT)
                </a>
              </li>
              <li>
                <a href="#treatment-directory" className="hover:text-[#599FFE] transition-colors">
                  Full-Mouth Reconstruction
                </a>
              </li>
              <li>
                <a href="#treatment-directory" className="hover:text-[#599FFE] transition-colors">
                  Orthodontics & Clear Aligners
                </a>
              </li>
              <li>
                <a href="#treatment-directory" className="hover:text-[#599FFE] transition-colors">
                  Teeth Whitening & Aesthetics
                </a>
              </li>
              <li>
                <a href="#treatment-directory" className="hover:text-[#599FFE] transition-colors">
                  Preventive Oral Hygiene
                </a>
              </li>
            </ul>
          </div>

          {/* Patient Resources Column */}
          <div>
            <div className="font-headline text-xs font-bold text-[#599FFE] uppercase tracking-wider mb-4 pb-2 border-b border-[#C3C6CF]/20">
              Patient Resources
            </div>
            <ul className="space-y-2.5 text-xs text-[#EAF1FF]/90">
              <li>
                <a href="#patient-info" className="hover:text-[#599FFE] transition-colors">
                  5 Consultation Questions
                </a>
              </li>
              <li>
                <a href="#patient-faq" className="hover:text-[#599FFE] transition-colors">
                  Patient Education FAQ
                </a>
              </li>
              <li>
                <a href="#consultation-process" className="hover:text-[#599FFE] transition-colors">
                  4-Step Clinical Journey
                </a>
              </li>
              <li>
                <a href="#patient-reviews" className="hover:text-[#599FFE] transition-colors">
                  Google Patient Reviews
                </a>
              </li>
              <li>
                <a href="#contact-location" className="hover:text-[#599FFE] transition-colors">
                  Directions & Parking
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Compliance */}
          <div>
            <div className="font-headline text-xs font-bold text-[#599FFE] uppercase tracking-wider mb-4 pb-2 border-b border-[#C3C6CF]/20">
              Compliance & Legal
            </div>
            <ul className="space-y-2.5 text-xs text-[#EAF1FF]/90 mb-6">
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-[#599FFE] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-[#599FFE] transition-colors text-left"
                >
                  Terms of Medical Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('governance')}
                  className="hover:text-[#599FFE] transition-colors text-left"
                >
                  Clinical Governance
                </button>
              </li>
            </ul>

            <div className="p-3 bg-[#00355C]/60 border border-[#C3C6CF]/30 text-[11px] leading-relaxed text-[#EAF1FF]/80">
              <span className="font-semibold text-[#599FFE] block mb-1">NABH COMPLIANT</span>
              Clinical facility adhering strictly to Class-1 bio-barrier sterilization protocols.
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-[#EAF1FF]/70 max-w-2xl leading-relaxed">
            <span className="font-medium text-white">Diagnostic Notice:</span> Information provided is for educational purposes. Consultations and diagnostic evaluation are required for clinical treatment planning. © 2025–2026 Pramukh Multispeciality Dental Clinic. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[11px] font-mono text-[#EAF1FF]/70 shrink-0">
            <button
              onClick={() => onOpenPolicy('governance')}
              className="hover:text-[#599FFE] transition-colors uppercase"
            >
              Clinical Governance
            </button>
            <span className="text-[#C3C6CF]">|</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#599FFE] transition-colors uppercase"
            >
              Statutory Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
