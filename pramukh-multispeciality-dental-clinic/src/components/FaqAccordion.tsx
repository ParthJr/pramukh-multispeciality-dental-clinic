import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="patient-faq"
      className="w-full bg-[#EEF4FF] py-16 lg:py-24 border-b border-[#C3C6CF]/30"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-headline text-xs font-semibold text-[#2878D4] uppercase tracking-wider block mb-2">
            PATIENT EDUCATION
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#12345A] uppercase font-bold tracking-tight">
            QUESTIONS WORTH ASKING.
          </h2>
          <p className="text-sm sm:text-base text-[#35465B] mt-2">
            Clear, ethical clinical explanations regarding common oral health inquiries.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {BUSINESS_CONFIG.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const contentId = `faq-content-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="bg-white border border-[#C3C6CF]/40 overflow-hidden shadow-xs"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-[#EAF3FB] hover:bg-[#EEF4FF]/60 transition-colors"
                >
                  <span className="font-headline text-sm sm:text-base text-[#12345A] uppercase font-bold pr-4 leading-snug">
                    {faq.number}. {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#12345A] text-[22px] transform transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-2 border-t border-[#C3C6CF]/20 animate-in fade-in duration-200"
                  >
                    <p className="text-sm sm:text-base text-[#35465B] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
