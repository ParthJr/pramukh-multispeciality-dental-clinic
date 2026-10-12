import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ClinicIntroduction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.approach-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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

  const principles = [
    {
      number: '01',
      icon: 'upload_file',
      title: 'ASSESS',
      description: 'Discuss your specific concerns, oral health symptoms, and medical dental history with our clinical team.',
      phase: 'Phase I: Diagnostic Intake'
    },
    {
      number: '02',
      icon: 'quick_reference_all',
      title: 'EXPLAIN',
      description: 'Review diagnostic imaging findings, treatment alternatives, clinical benefits, limitations, and prognosis.',
      phase: 'Phase II: Clinical Consultation'
    },
    {
      number: '03',
      icon: 'assignment_turned_in',
      title: 'PLAN',
      description: 'Understand appropriate next steps, itemized fee schedules, visit timelines, and follow-up preventive schedules.',
      phase: 'Phase III: Care Execution'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about-clinic"
      className="w-full bg-[#EEF4FF] py-16 lg:py-24 border-b border-[#C3C6CF]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-headline text-xs font-semibold text-[#2878D4] uppercase tracking-wider block mb-3">
            OUR APPROACH
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#12345A] uppercase font-bold tracking-tight mb-4 leading-snug">
            INFORMED CARE STARTS WITH A CLEAR CONVERSATION.
          </h2>
          <p className="text-base sm:text-lg text-[#35465B] leading-relaxed">
            Understanding your concerns, reviewing relevant findings, and discussing suitable options are important parts of planning dental care at Pramukh Multispeciality Dental Clinic.
          </p>
        </div>

        {/* Three Numbered Principles with Thin Architectural Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#C3C6CF]/40 bg-white divide-y md:divide-y-0 md:divide-x divide-[#C3C6CF]/40 shadow-sm">
          {principles.map((item) => (
            <div
              key={item.number}
              className="approach-card p-8 lg:p-10 flex flex-col justify-between hover:bg-[#EEF4FF]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-headline text-3xl lg:text-4xl text-[#2878D4] font-mono font-bold">
                    {item.number}
                  </span>
                  <span className="material-symbols-outlined text-[#2878D4] text-[32px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline text-lg text-[#12345A] uppercase font-bold tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#35465B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C3C6CF]/30 font-headline text-xs font-bold text-[#12345A] uppercase">
                {item.phase}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
