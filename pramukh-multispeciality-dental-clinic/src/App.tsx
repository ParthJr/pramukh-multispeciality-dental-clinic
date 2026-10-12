import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClinicIntroduction } from './components/ClinicIntroduction';
import { TreatmentDirectory } from './components/TreatmentDirectory';
import { PatientInformation } from './components/PatientInformation';
import { ConsultationProcess } from './components/ConsultationProcess';
import { FaqAccordion } from './components/FaqAccordion';
import { PatientReviews } from './components/PatientReviews';
import { ConsultationEnquiryForm } from './components/ConsultationEnquiryForm';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'terms' | 'governance' | null>(null);

  const handleOpenConsultationModal = (serviceId?: string) => {
    setSelectedServiceForModal(serviceId);
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultationModal = () => {
    setIsConsultationModalOpen(false);
    setSelectedServiceForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-[#0A1D30] flex flex-col font-sans">
      {/* Top Header Navigation */}
      <Header onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenConsultationModal={handleOpenConsultationModal} />

        {/* Clinic Introduction: Our Approach */}
        <ClinicIntroduction />

        {/* Treatment Directory: Services & Surgical Spotlight */}
        <TreatmentDirectory onOpenConsultationModal={handleOpenConsultationModal} />

        {/* Patient Information: 5 Recommended Questions */}
        <PatientInformation onOpenConsultationModal={handleOpenConsultationModal} />

        {/* Consultation Process: 4-Step Clinical Journey */}
        <ConsultationProcess />

        {/* FAQ Accordion: Patient Education */}
        <FaqAccordion />

        {/* Patient Reviews & Google Ratings */}
        <PatientReviews />

        {/* Validated Consultation Enquiry Form */}
        <ConsultationEnquiryForm />

        {/* Contact & Location Section */}
        <ContactLocation />
      </main>

      {/* Footer Navigation & Statutory Notices */}
      <Footer onOpenPolicy={(type) => setActivePolicyModal(type)} />

      {/* Policy Modal Overlay */}
      <PolicyModal
        type={activePolicyModal}
        onClose={() => setActivePolicyModal(null)}
      />

      {/* Quick Consultation Popup Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        serviceId={selectedServiceForModal}
        onClose={handleCloseConsultationModal}
      />
    </div>
  );
}
