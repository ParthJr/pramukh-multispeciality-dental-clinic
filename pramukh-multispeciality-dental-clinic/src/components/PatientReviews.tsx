import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export const PatientReviews: React.FC = () => {
  return (
    <section
      id="patient-reviews"
      className="w-full bg-white py-16 lg:py-24 border-b border-[#C3C6CF]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Metric Header Card */}
        <div className="bg-white border border-[#C3C6CF]/40 p-8 lg:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Big Metric */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b lg:border-b-0 lg:border-r border-[#C3C6CF]/30 pb-6 lg:pb-0 lg:pr-8">
              <div className="bg-[#EEF4FF] p-4 text-center min-w-[120px]">
                <div className="font-headline text-4xl text-[#12345A] font-bold">
                  {BUSINESS_CONFIG.reputation.rating}
                </div>
                <div className="flex justify-center text-amber-500 my-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px] fill-current">
                      star
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#35465B] uppercase font-semibold">
                  OUT OF 5.0
                </span>
              </div>

              <div>
                <div className="font-headline text-base text-[#12345A] uppercase font-bold">
                  PATIENT SATISFACTION
                </div>
                <p className="text-xs text-[#35465B] mt-1 leading-relaxed">
                  Verified feedback from patients visiting our Kudasan operatory for restorative, implant, and general dental care.
                </p>
                <div className="text-xs text-[#2878D4] uppercase font-mono font-bold mt-2">
                  {BUSINESS_CONFIG.reputation.label.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Reviews Action */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#12345A] font-headline text-sm font-bold">
                  <span className="material-symbols-outlined text-[#2878D4]">verified_user</span>
                  <span>Transparent Clinical Practice</span>
                </div>
                <p className="text-xs text-[#35465B] max-w-md leading-relaxed">
                  Patients consistently cite our detailed consultation, hygienic protocols, and pain-managed restorative treatments.
                </p>
              </div>

              <a
                href={BUSINESS_CONFIG.reputation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#12345A] hover:bg-[#2878D4] text-white font-headline text-xs font-semibold px-6 py-3.5 uppercase tracking-wider transition-colors shrink-0 shadow-sm"
              >
                <span>READ GOOGLE REVIEWS</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>

        {/* Patient Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUSINESS_CONFIG.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 bg-[#F8F9FF] border border-[#C3C6CF]/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-headline text-sm font-bold text-[#12345A]">
                      {rev.author}
                    </span>
                    {rev.verified && (
                      <span className="inline-flex items-center text-[10px] font-mono text-[#2878D4] bg-[#EAF3FB] px-1.5 py-0.5 border border-[#2878D4]/30 uppercase">
                        Verified Patient
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-[#35465B]">{rev.date}</span>
                </div>

                <div className="flex items-center text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px] fill-current">
                      star
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#35465B] leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              {rev.treatmentTag && (
                <div className="pt-3 border-t border-[#C3C6CF]/20 font-headline text-[11px] font-semibold text-[#12345A] uppercase">
                  Care Received: {rev.treatmentTag}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
