import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export const ContactLocation: React.FC = () => {
  return (
    <section
      id="contact-location"
      className="w-full bg-white py-16 lg:py-24 border-b border-[#C3C6CF]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Clinic Details & Timings (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-headline text-xs font-semibold text-[#2878D4] uppercase tracking-wider block mb-2">
                CLINICAL LOCATION
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#12345A] uppercase font-bold tracking-tight mb-8">
                VISIT PRAMUKH DENTAL CLINIC.
              </h2>

              {/* Details Cards */}
              <div className="space-y-6">
                {/* Address Card */}
                <div className="flex items-start gap-4 p-4 bg-[#F8F9FF] border border-[#C3C6CF]/40">
                  <span className="material-symbols-outlined text-[#2878D4] text-[24px] mt-1 shrink-0">
                    pin_drop
                  </span>
                  <div>
                    <div className="font-headline text-sm font-bold text-[#12345A] uppercase mb-1">
                      RADHE SIGNATURE, KUDASAN
                    </div>
                    <p className="text-xs sm:text-sm text-[#35465B] leading-relaxed">
                      {BUSINESS_CONFIG.address.line1},<br />
                      {BUSINESS_CONFIG.address.line2},<br />
                      {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Direct Phone Card */}
                <div className="flex items-start gap-4 p-4 bg-[#F8F9FF] border border-[#C3C6CF]/40">
                  <span className="material-symbols-outlined text-[#2878D4] text-[24px] mt-1 shrink-0">
                    call
                  </span>
                  <div>
                    <div className="font-headline text-sm font-bold text-[#12345A] uppercase mb-1">
                      DIRECT CLINICAL LINE
                    </div>
                    <a
                      href={BUSINESS_CONFIG.contact.phoneTel}
                      className="font-headline text-lg sm:text-xl text-[#2878D4] hover:text-[#12345A] font-bold font-mono transition-colors block"
                    >
                      {BUSINESS_CONFIG.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#35465B] mt-1">
                      {BUSINESS_CONFIG.contact.emergencyNote}
                    </p>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="flex items-start gap-4 p-4 bg-[#F8F9FF] border border-[#C3C6CF]/40">
                  <span className="material-symbols-outlined text-[#2878D4] text-[24px] mt-1 shrink-0">
                    schedule
                  </span>
                  <div>
                    <div className="font-headline text-sm font-bold text-[#12345A] uppercase mb-1">
                      CLINICAL OPERATING HOURS
                    </div>
                    <p className="text-xs sm:text-sm text-[#12345A] font-medium">
                      {BUSINESS_CONFIG.operatingHours.weekdaySchedule}
                    </p>
                    <p className="text-xs text-[#35465B] mt-0.5">
                      {BUSINESS_CONFIG.operatingHours.mondayNote} · {BUSINESS_CONFIG.operatingHours.sundaySchedule}
                    </p>

                    {/* Schedule Table */}
                    <div className="mt-3 pt-3 border-t border-[#C3C6CF]/20 text-xs font-mono space-y-1">
                      {BUSINESS_CONFIG.operatingHours.days.map((d) => (
                        <div key={d.day} className="flex justify-between text-[#35465B]">
                          <span className="font-medium">{d.day}:</span>
                          <span className={d.isSpecial ? 'text-[#2878D4] font-semibold' : ''}>
                            {d.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#C3C6CF]/30">
              <a
                href={BUSINESS_CONFIG.contact.phoneTel}
                className="inline-flex items-center gap-2 bg-[#12345A] hover:bg-[#2878D4] text-white font-headline text-xs font-semibold px-6 py-3.5 uppercase tracking-wider transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>CALL CLINIC: {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.reputation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-[#EEF4FF] border border-[#12345A] text-[#12345A] font-headline text-xs font-semibold px-6 py-3.5 uppercase tracking-wider transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">directions</span>
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Simulated Map View (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-[#F8F9FF] border border-[#C3C6CF]/50 p-3 h-full flex flex-col justify-between shadow-sm">
              {/* Map Header Readout */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C3C6CF]/30 px-2">
                <span className="font-headline text-xs text-[#12345A] font-mono">
                  COORDINATES: {BUSINESS_CONFIG.coordinates.lat}, {BUSINESS_CONFIG.coordinates.lng}
                </span>
                <span className="inline-flex items-center gap-1.5 font-headline text-xs text-[#2878D4] font-bold">
                  <span className="w-2 h-2 bg-[#2878D4] animate-pulse rounded-full" />
                  ACTIVE PRACTICE
                </span>
              </div>

              {/* Location Viewport */}
              <div className="w-full h-80 lg:h-full min-h-[360px] bg-cover bg-center border border-[#C3C6CF]/30 relative flex items-center justify-center bg-[#DBE9FF]">
                {/* Background Map Stylized Graphic */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-85"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPp-YW3tGbWW3bKfcZdrEFKMp7PZxO4Gp858kk4BIRrsFtBY59lKvU8VvVuYP4DTt0jkxr9QQNBMeeFjP3LMXxxMOsYIueaLjTSWI7xdIMHZmneBV7v4Q8RzZEmhVV5OXVXMUsB7-y-Q8YKaWd79jV-e8IvbnzYn8p6Hi_Rqmo3_qMWtrxPy5nokYuX6mvvXooUrXw8MD2oC_62kIs_S_d0UQhSwrFBWrsiILDdpy2vyL3QuEzvlNIKg')"
                  }}
                />
                <div className="absolute inset-0 bg-[#12345A]/25 backdrop-brightness-95" />

                {/* Custom Architectural Pin Overlay */}
                <div className="relative z-10 bg-white p-5 border border-[#12345A] shadow-xl max-w-xs text-center">
                  <div className="w-9 h-9 bg-[#12345A] text-white mx-auto mb-3 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">dentistry</span>
                  </div>

                  <div className="font-headline text-sm text-[#12345A] font-bold uppercase leading-tight">
                    {BUSINESS_CONFIG.name}
                  </div>

                  <div className="text-xs text-[#35465B] mt-1 font-medium">
                    1st Floor, Radhe Signature, Kudasan
                  </div>

                  <a
                    href={BUSINESS_CONFIG.reputation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-headline text-xs text-[#2878D4] font-bold uppercase hover:underline"
                  >
                    Open Interactive Google Map →
                  </a>
                </div>
              </div>

              {/* Bottom Landmark Context */}
              <div className="pt-3 mt-3 border-t border-[#C3C6CF]/30 px-2 flex items-center justify-between text-[11px] font-mono text-[#35465B]">
                <span>LANDMARK: {BUSINESS_CONFIG.coordinates.landmark.toUpperCase()}</span>
                <span>GANDHINAGAR · 382419</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
