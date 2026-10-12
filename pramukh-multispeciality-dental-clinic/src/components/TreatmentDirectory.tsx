import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_CONFIG } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

interface TreatmentDirectoryProps {
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const TreatmentDirectory: React.FC<TreatmentDirectoryProps> = ({ onOpenConsultationModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.treatment-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedFilter]);

  const spotlightService = BUSINESS_CONFIG.services.find((s) => s.isSpotlight);
  const regularServices = BUSINESS_CONFIG.services.filter((s) => !s.isSpotlight);

  const filterOptions = [
    { id: 'all', label: 'All Services' },
    { id: 'implants', label: 'Implants & Surgery' },
    { id: 'preventive', label: 'Preventive & Cleanings' },
    { id: 'cosmetic', label: 'Cosmetic & Whitening' },
    { id: 'restorative', label: 'Root Canal & Crowns' },
    { id: 'ortho', label: 'Aligners & Ortho' }
  ];

  const filteredServices = regularServices.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'implants' && service.id.includes('implant')) return true;
    if (selectedFilter === 'preventive' && service.id.includes('preventive')) return true;
    if (selectedFilter === 'cosmetic' && service.id.includes('cosmetic')) return true;
    if (selectedFilter === 'restorative' && service.id.includes('restorative')) return true;
    if (selectedFilter === 'ortho' && service.id.includes('ortho')) return true;
    return true;
  });

  return (
    <section
      ref={sectionRef}
      id="treatment-directory"
      className="w-full bg-[#F8F9FF] py-16 lg:py-24 border-b border-[#C3C6CF]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-headline text-xs font-semibold text-[#2878D4] uppercase tracking-wider block mb-2">
              EXPLORE DENTAL SERVICES
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#12345A] uppercase font-bold tracking-tight">
              UNDERSTAND YOUR OPTIONS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#35465B] max-w-md leading-relaxed">
            Every clinical intervention is tailored to individual diagnostic evaluation. Below are primary pathways offered at Kudasan, Gandhinagar.
          </p>
        </div>

        {/* Filter Segmented Control Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs font-headline font-semibold uppercase tracking-wider transition-colors whitespace-nowrap focus:outline-none ${
                selectedFilter === tab.id
                  ? 'bg-[#12345A] text-white shadow-sm'
                  : 'bg-white text-[#35465B] border border-[#C3C6CF]/40 hover:bg-[#EAF3FB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Feature Spotlight Card: Dental Implants */}
        {spotlightService && (selectedFilter === 'all' || selectedFilter === 'implants') && (
          <div className="treatment-card mb-12 bg-white border border-[#C3C6CF]/50 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Container (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-[#DBE9FF] border-b lg:border-b-0 lg:border-r border-[#C3C6CF]/30">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPttKZqmmqeacnTNsTfyvzLLQyR0ySY9doh6qeykm_NWDw0e2JaBXwONVXPUiBT52IWrJYG-pCJmCjJMHTmm96PvsfxkjxSuk_h8klN7PPhlUdIY0FRVSJZDoq2UAXNOWdGUafuBy5Xs_Up4OnQqxJkp-GTBuUnLYCmwkwuKkmXMoJBFV54xFU45ABEqhosyO6bRCorNmriQHD9qVGr2q70FZthEg3A5nqbKMDxiXaFtLf2_V439YaQA"
                  alt="Clinical dental implant model and precision surgical instruments tray"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#12345A] text-white font-headline text-[11px] font-semibold px-3 py-1 uppercase tracking-wider">
                  SURGICAL SPOTLIGHT
                </div>
              </div>

              {/* Content Container (7 cols) */}
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 bg-[#2878D4]" />
                    <span className="font-headline text-xs text-[#2878D4] uppercase tracking-wider font-semibold">
                      {spotlightService.subtitle}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl text-[#12345A] uppercase font-bold mb-4">
                    {spotlightService.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#35465B] leading-relaxed mb-6">
                    {spotlightService.description}
                  </p>

                  <div className="bg-[#EEF4FF] p-4 border border-[#C3C6CF]/30 mb-8">
                    <div className="font-headline text-xs text-[#12345A] uppercase font-bold mb-1">
                      {spotlightService.indicatorLabel}
                    </div>
                    <p className="text-xs text-[#35465B] leading-relaxed">
                      {spotlightService.indicatorText}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#C3C6CF]/30">
                  <span className="font-headline text-xs text-[#35465B] uppercase tracking-wider font-mono">
                    PROTOCOL: {spotlightService.protocol}
                  </span>
                  <button
                    onClick={() => onOpenConsultationModal(spotlightService.id)}
                    className="inline-flex items-center gap-2 bg-[#12345A] hover:bg-[#2878D4] text-white font-headline text-xs font-semibold px-6 py-3 uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>{spotlightService.actionText}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Services Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="treatment-card bg-white p-8 border border-[#C3C6CF]/40 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-headline text-xs text-[#2878D4] uppercase tracking-wider font-semibold">
                    {service.categoryNumber}
                  </span>
                  <span className="material-symbols-outlined text-[#12345A] text-[24px]">
                    dentistry
                  </span>
                </div>

                <h4 className="font-headline text-lg text-[#12345A] uppercase font-bold mb-3">
                  {service.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#35465B] mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="p-3 bg-[#EEF4FF] border border-[#C3C6CF]/20 mb-6">
                  <span className="font-headline text-[11px] text-[#12345A] uppercase block font-bold mb-1">
                    {service.indicatorLabel}
                  </span>
                  <p className="text-xs text-[#35465B]">{service.indicatorText}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C3C6CF]/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#35465B] uppercase">
                  {service.protocol}
                </span>
                <button
                  onClick={() => onOpenConsultationModal(service.id)}
                  className="inline-flex items-center text-[#2878D4] hover:text-[#12345A] font-headline text-xs font-semibold uppercase tracking-wider"
                >
                  <span>{service.actionText}</span>
                  <span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
