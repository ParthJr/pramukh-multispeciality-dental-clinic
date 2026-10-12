import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_CONFIG } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

export const ConsultationProcess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="consultation-process"
      className="w-full bg-white py-16 lg:py-24 border-b border-[#C3C6CF]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-headline text-xs font-semibold text-[#2878D4] uppercase tracking-wider block mb-2">
            TRANSPARENT WORKFLOW
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#12345A] uppercase font-bold tracking-tight">
            A STRUCTURED CLINICAL JOURNEY
          </h2>
        </div>

        {/* 4-Stage Step Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {BUSINESS_CONFIG.consultationSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="process-step p-6 bg-[#EEF4FF] border border-[#C3C6CF]/40 flex flex-col justify-between relative group hover:border-[#2878D4] transition-colors"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#2878D4]">
                    {step.stepNumber}
                  </span>
                  <span className="material-symbols-outlined text-[#12345A] text-[24px]">
                    {step.iconName}
                  </span>
                </div>

                <h3 className="font-headline text-base text-[#12345A] uppercase font-bold mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#35465B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="text-[11px] font-mono text-[#35465B] uppercase tracking-wider pt-3 border-t border-[#C3C6CF]/30">
                {step.phaseLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
