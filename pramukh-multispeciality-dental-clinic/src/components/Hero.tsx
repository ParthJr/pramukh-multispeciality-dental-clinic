import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { BUSINESS_CONFIG } from '../config/business';

interface HeroProps {
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Stagger elements in hero
      gsap.fromTo(
        '.hero-stagger',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1
        }
      );

      // Image frame mask reveal
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.3 }
        );
      }
    }, containerRef);

    return () => ctx.revert(); // Clean up context on unmount
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full bg-[#F8F9FF] pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#C3C6CF]/30 overflow-hidden"
    >
      {/* Subtle technical background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundSize: '32px 32px',
          backgroundImage:
            'linear-gradient(to right, #12345a 1px, transparent 1px), linear-gradient(to bottom, #12345a 1px, transparent 1px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            {/* Eyebrow Badge */}
            <div className="hero-stagger inline-flex items-center gap-2 px-3 py-1.5 bg-[#EAF3FB] border border-[#2878D4]/40 text-[#12345A] font-headline text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 bg-[#2878D4]" />
              <span>{BUSINESS_CONFIG.name.toUpperCase()} · KUDASAN</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="hero-stagger font-headline text-3xl sm:text-4xl lg:text-5xl text-[#12345A] font-bold tracking-tight uppercase max-w-2xl leading-[1.12] mb-6"
            >
              CLARITY FOR YOUR DENTAL CARE DECISIONS.
            </h1>

            {/* Supporting Copy */}
            <p className="hero-stagger text-base sm:text-lg text-[#35465B] max-w-xl mb-8 leading-relaxed font-normal">
              Explore dental care options, understand the purpose of different treatments, and prepare for an informed conversation with your dental professional in Kudasan, Gandhinagar.
            </p>

            {/* CTAs */}
            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenConsultationModal()}
                className="inline-flex items-center justify-center bg-[#2878D4] hover:bg-[#12345A] text-white font-headline text-xs font-semibold px-7 py-3.5 transition-colors uppercase tracking-wider shadow-[0_2px_0_0_#12345A] focus:outline-none"
              >
                <span>REQUEST A CONSULTATION</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
              </button>

              <a
                href="#treatment-directory"
                className="inline-flex items-center justify-center bg-transparent hover:bg-[#EAF3FB] border border-[#12345A] text-[#12345A] font-headline text-xs font-semibold px-7 py-3.5 transition-colors uppercase tracking-wider text-center"
              >
                EXPLORE TREATMENTS
              </a>
            </div>

            {/* Trust Rating Badge / Social Proof */}
            <div className="hero-stagger flex items-center gap-4 p-3 bg-white border border-[#C3C6CF]/50 shadow-sm w-full sm:w-auto">
              <div className="flex items-center text-amber-500">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="font-headline text-lg text-[#12345A] ml-1 font-bold">
                  {BUSINESS_CONFIG.reputation.rating}
                </span>
              </div>
              <div className="h-6 w-px bg-[#C3C6CF]/50" />
              <div className="flex flex-col">
                <span className="font-headline text-xs font-bold text-[#12345A] leading-none uppercase">
                  {BUSINESS_CONFIG.reputation.label}
                </span>
                <span className="text-xs text-[#35465B] mt-0.5">
                  {BUSINESS_CONFIG.reputation.verifiedText}
                </span>
              </div>
              <a
                href={BUSINESS_CONFIG.reputation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-[#2878D4] hover:text-[#12345A] transition-colors p-1"
                aria-label="View Google Reviews"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Photography Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageFrameRef}
              className="relative p-3 bg-[#E5EEFF] border border-[#C3C6CF]/50 shadow-md"
            >
              {/* Technical coordinate accent badges */}
              <div className="absolute -top-2.5 -left-2.5 bg-[#12345A] text-white font-headline text-[10px] px-2 py-0.5 uppercase tracking-widest font-mono z-20">
                OP-01 // OPERATORY
              </div>
              <div className="absolute -bottom-2.5 -right-2.5 bg-[#2878D4] text-white font-headline text-[10px] px-2 py-0.5 uppercase tracking-widest font-mono z-20">
                CLASS-1 STERILITY
              </div>

              {/* Clinical Image Container */}
              <div className="relative overflow-hidden bg-[#DBE9FF] aspect-[4/3] border border-[#C3C6CF]/40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF5jj2JdDCBce-mPHtVaZcJfNIsOER6qJezghiKLa9UmhuGXxh_dOVA_PNep2cxGhzQpQ2hC-Fyz5HAyzNNC7FK10jXgBwEhjZdBbVVEGGfjek-3247pcIRNXsrDQ0uqI4kZTF97reblfnyBmSCvpJT09XslwvePU8cR1uOTvNgUxsRpuKN7rCoY9gpUOkUj9ML91TVssfrQrUVpFQAPmAS4nKWzAbsVwwlAfRwlM56LsnKXnoJd-7Yw"
                  alt="Pramukh Multispeciality Dental Clinic Operatory with sterile blue chair and digital diagnostic equipment"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12345A]/40 via-transparent to-transparent pointer-events-none" />

                {/* Technical Overlay Readout */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 border border-[#C3C6CF]/40 flex items-center justify-between">
                  <div>
                    <div className="font-headline text-xs font-bold text-[#12345A] uppercase">
                      Diagnostic Suite & Operatory
                    </div>
                    <div className="text-xs text-[#35465B]">
                      Radhe Signature, Kudasan · Gandhinagar
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#2878D4] text-[22px]">
                    verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
