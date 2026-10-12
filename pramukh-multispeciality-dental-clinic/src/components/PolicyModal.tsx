import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'governance' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'PRIVACY POLICY & PATIENT DATA PROTECTION',
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-[#35465B] leading-relaxed">
              <p>
                At <strong>{BUSINESS_CONFIG.name}</strong>, we strictly respect patient confidentiality and data privacy. Personal information submitted via this website (including full name, contact mobile numbers, and health notes) is processed solely for scheduling consultations and providing requested healthcare services.
              </p>
              <h4 className="font-headline font-bold text-[#12345A] uppercase text-xs">1. Data Storage & Security</h4>
              <p>
                Diagnostic records, medical histories, and contact details are stored in encrypted clinical systems adhering to healthcare data governance protocols. We do not sell, rent, or share personal data with third-party marketing entities.
              </p>
              <h4 className="font-headline font-bold text-[#12345A] uppercase text-xs">2. Communication Preferences</h4>
              <p>
                By requesting a consultation, you permit our clinical coordinators to communicate via direct telephone calls or WhatsApp messages regarding slot verification, appointment reminders, and pre-procedure instructions.
              </p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'TERMS OF MEDICAL & CLINICAL USE',
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-[#35465B] leading-relaxed">
              <p>
                The information provided on this website is published for educational and general informational purposes regarding dental procedures and clinical workflows at {BUSINESS_CONFIG.name}.
              </p>
              <h4 className="font-headline font-bold text-[#12345A] uppercase text-xs">1. Diagnostic Requirement</h4>
              <p>
                Content on this website does not constitute formal medical diagnosis or treatment planning. All dental care decisions require an in-person clinical examination, radiographic diagnostics (e.g. CBCT or intraoral X-rays), and personalized consultation with a licensed dental practitioner.
              </p>
              <h4 className="font-headline font-bold text-[#12345A] uppercase text-xs">2. Emergency Disclaimer</h4>
              <p>
                If you are experiencing severe dental trauma, uncontrolled facial swelling, or severe acute hemorrhage, please visit an emergency care facility immediately or call our direct clinical line at <strong>{BUSINESS_CONFIG.contact.phoneDisplay}</strong>.
              </p>
            </div>
          )
        };
      case 'governance':
        return {
          title: 'CLINICAL GOVERNANCE & STERILIZATION STANDARDS',
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-[#35465B] leading-relaxed">
              <p>
                Pramukh Multispeciality Dental Clinic operates in compliance with international dental sterilization and infection control benchmarks.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                {BUSINESS_CONFIG.clinicalStandards.map((std, i) => (
                  <li key={i} className="font-medium text-[#12345A]">
                    {std}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Operatory rooms, ultrasonic scalers, and handpieces undergo Class-B autoclave vacuum sterilization cycles between every individual patient visit.
              </p>
            </div>
          )
        };
      default:
        return { title: '', body: null };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12345A]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#12345A] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
      >
        <div className="flex items-center justify-between border-b border-[#C3C6CF]/40 pb-4 mb-6">
          <h3 id="policy-modal-title" className="font-headline font-bold text-[#12345A] text-base uppercase">
            {content.title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-[#12345A] hover:bg-[#EEF4FF] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <div className="mb-6">{content.body}</div>

        <div className="pt-4 border-t border-[#C3C6CF]/40 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#12345A] hover:bg-[#2878D4] text-white font-headline text-xs font-semibold px-6 py-2.5 uppercase tracking-wider transition-colors"
          >
            Close & Accept
          </button>
        </div>
      </div>
    </div>
  );
};
