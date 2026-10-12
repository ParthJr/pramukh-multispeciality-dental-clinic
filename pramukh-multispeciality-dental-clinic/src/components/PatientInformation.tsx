import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

interface PatientInformationProps {
  onOpenConsultationModal: () => void;
}

export const PatientInformation: React.FC<PatientInformationProps> = ({ onOpenConsultationModal }) => {
  return (
    <section
      id="patient-info"
      className="w-full bg-[#12345A] text-white py-16 lg:py-24 border-b border-[#C3C6CF]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Empowering Message */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00355C] border border-[#599FFE]/40 text-[#599FFE] font-headline text-xs font-semibold uppercase tracking-wider mb-6">
              PATIENT EMPOWERMENT INITIATIVE
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white uppercase font-bold tracking-tight mb-6 leading-tight">
              KNOW WHAT TO ASK.<br />UNDERSTAND WHAT COMES NEXT.
            </h2>

            <p className="text-base sm:text-lg text-[#EAF1FF]/90 max-w-xl leading-relaxed mb-8">
              An informed patient makes confident decisions. During your visit at Pramukh Dental, we ensure you have dedicated time to examine every facet of your proposed treatment.
            </p>

            <button
              onClick={onOpenConsultationModal}
              className="inline-flex items-center justify-center bg-[#599FFE] hover:bg-white hover:text-[#12345A] text-[#003569] font-headline text-xs font-bold px-8 py-4 uppercase tracking-wider transition-all shadow-[0_2px_0_0_#001f3a]"
            >
              PREPARE FOR YOUR CONSULTATION
            </button>
          </div>

          {/* Right Column: 5 Questions Checklist Panel */}
          <div className="lg:col-span-6 bg-[#00355C]/70 border border-[#C3C6CF]/30 p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
            <div className="font-headline text-xs font-bold text-[#599FFE] uppercase tracking-wider mb-6 border-b border-[#C3C6CF]/20 pb-3">
              RECOMMENDED CONSULTATION QUESTIONS
            </div>

            <ul className="space-y-4">
              {BUSINESS_CONFIG.patientQuestions.map((q) => (
                <li key={q.number} className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-[#2878D4] flex items-center justify-center text-white font-mono text-xs font-bold shrink-0 mt-0.5">
                    {q.number}
                  </span>
                  <div>
                    <span className="font-headline text-sm font-semibold text-white block">
                      {q.title}
                    </span>
                    <span className="text-xs text-[#EAF1FF]/80 leading-relaxed block mt-0.5">
                      {q.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
