import React from 'react';
import { ConsultationEnquiryForm } from './ConsultationEnquiryForm';

interface ConsultationModalProps {
  isOpen: boolean;
  serviceId?: string;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, serviceId, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12345A]/70 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="bg-white border border-[#12345A] max-w-3xl w-full my-8 p-4 sm:p-6 relative shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Request a Consultation"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#12345A] hover:bg-[#EEF4FF] transition-colors focus:outline-none"
          aria-label="Close form"
        >
          <span className="material-symbols-outlined text-[26px]">close</span>
        </button>

        <div className="pt-2">
          <ConsultationEnquiryForm
            initialServiceId={serviceId}
            onSubmittedSuccess={() => {
              // Option to autoclose after 5s or keep user feedback
            }}
          />
        </div>
      </div>
    </div>
  );
};
