import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/business';

interface ConsultationEnquiryFormProps {
  initialServiceId?: string;
  onSubmittedSuccess?: (enquiryId: string) => void;
}

export const ConsultationEnquiryForm: React.FC<ConsultationEnquiryFormProps> = ({
  initialServiceId = '',
  onSubmittedSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [serviceInterest, setServiceInterest] = useState(initialServiceId || 'checkup');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('evening');
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [consentCheck, setConsentCheck] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    enquiryId: string;
    message: string;
    details: any;
  } | null>(null);

  // Today's date for date input min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || !/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number starting with 6-9.';
    }

    if (!serviceInterest) {
      newErrors.serviceInterest = 'Please select a service of interest.';
    }

    if (!consentCheck) {
      newErrors.consentCheck = 'Privacy consent is required to allow clinic staff to contact you.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          mobileNumber,
          serviceInterest,
          preferredDate,
          preferredTime,
          clinicalNotes,
          consentCheck
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to record enquiry on server.');
      }

      setSubmissionResult({
        enquiryId: data.enquiryId,
        message: data.message,
        details: data.data
      });

      if (onSubmittedSuccess) {
        onSubmittedSuccess(data.enquiryId);
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setServerError(
        err.message ||
          'Unable to reach consultation server right now. Please call us directly at 098989 09100.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-enquiry" className="w-full bg-[#EEF4FF] py-16 lg:py-24 border-b border-[#C3C6CF]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white border border-[#C3C6CF]/50 shadow-md p-6 sm:p-8 lg:p-12 relative">
          {/* Top Protocol Status Bar */}
          <div className="flex items-center justify-between border-b border-[#C3C6CF]/30 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#2878D4]" />
              <span className="font-headline text-xs font-bold text-[#12345A] uppercase">
                APPOINTMENT ENQUIRY PROTOCOL
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#35465B]">RESPONSE TIME: &lt; 4 HOURS</span>
          </div>

          <div className="mb-8">
            <h2 className="font-headline text-2xl sm:text-3xl text-[#12345A] uppercase font-bold tracking-tight mb-2">
              LET'S DISCUSS YOUR DENTAL CARE.
            </h2>
            <p className="text-xs sm:text-sm text-[#35465B] bg-[#EEF4FF] p-3 border border-[#C3C6CF]/30 inline-block w-full">
              <strong className="text-[#12345A] font-semibold">Please note:</strong> A submitted enquiry is not a confirmed appointment until the clinic contacts you to confirm availability.
            </p>
          </div>

          {submissionResult ? (
            /* Success Card */
            <div className="p-6 bg-[#EAF3FB] border-2 border-[#2878D4] text-[#12345A] space-y-4 animate-in fade-in">
              <div className="flex items-center gap-2 font-headline text-lg font-bold">
                <span className="material-symbols-outlined text-[#2878D4] text-[28px]">
                  check_circle
                </span>
                <span>ENQUIRY RECORDED SUCCESSFULLY</span>
              </div>

              <div className="text-xs font-mono bg-white p-3 border border-[#C3C6CF]/40">
                <span className="font-bold">REFERENCE ID:</span> {submissionResult.enquiryId}
              </div>

              <p className="text-sm text-[#35465B] leading-relaxed">
                Thank you, <strong className="text-[#12345A]">{submissionResult.details.fullName}</strong>. Our clinic coordinator will review your request and reach out at <strong className="text-[#12345A]">{submissionResult.details.mobileNumber}</strong> shortly to confirm slot availability.
              </p>

              <div className="pt-4 border-t border-[#C3C6CF]/30 flex flex-wrap gap-4 items-center justify-between">
                <a
                  href={BUSINESS_CONFIG.contact.phoneTel}
                  className="inline-flex items-center gap-2 text-xs font-headline font-bold text-[#2878D4] uppercase hover:underline"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  Need immediate help? Call 098989 09100
                </a>

                <button
                  onClick={() => {
                    setSubmissionResult(null);
                    setFullName('');
                    setMobileNumber('');
                    setClinicalNotes('');
                  }}
                  className="text-xs font-headline font-bold uppercase text-[#12345A] underline"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {serverError && (
                <div className="p-4 bg-[#FFDAD6] border border-[#BA1A1A] text-[#93000A] text-xs font-medium flex items-center justify-between">
                  <span>{serverError}</span>
                  <button
                    type="button"
                    onClick={() => setServerError(null)}
                    className="text-[#93000A] underline ml-2 font-bold"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="fullName" className="font-headline text-xs font-bold text-[#12345A] uppercase">
                    FULL NAME <span className="text-[#BA1A1A]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                    }}
                    placeholder="e.g. Ramesh Patel"
                    className={`w-full bg-white border px-4 py-3 text-sm text-[#0A1D30] focus:outline-none focus:border-[#2878D4] ${
                      errors.fullName ? 'border-[#BA1A1A]' : 'border-[#C3C6CF]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-[#BA1A1A] font-medium">{errors.fullName}</span>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="mobileNumber" className="font-headline text-xs font-bold text-[#12345A] uppercase">
                    MOBILE NUMBER (+91) <span className="text-[#BA1A1A]">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-[#EEF4FF] border border-r-0 border-[#C3C6CF] text-[#35465B] font-mono text-sm">
                      +91
                    </span>
                    <input
                      id="mobileNumber"
                      type="tel"
                      required
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        if (errors.mobileNumber) setErrors((prev) => ({ ...prev, mobileNumber: '' }));
                      }}
                      placeholder="98989 00000"
                      className={`w-full bg-white border px-4 py-3 text-sm text-[#0A1D30] focus:outline-none focus:border-[#2878D4] ${
                        errors.mobileNumber ? 'border-[#BA1A1A]' : 'border-[#C3C6CF]'
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <span className="text-[11px] text-[#BA1A1A] font-medium">{errors.mobileNumber}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Service Interest */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="serviceInterest" className="font-headline text-xs font-bold text-[#12345A] uppercase">
                    SERVICE OF INTEREST <span className="text-[#BA1A1A]">*</span>
                  </label>
                  <select
                    id="serviceInterest"
                    required
                    value={serviceInterest}
                    onChange={(e) => setServiceInterest(e.target.value)}
                    className="w-full bg-white border border-[#C3C6CF] px-4 py-3 text-sm text-[#0A1D30] focus:outline-none focus:border-[#2878D4]"
                  >
                    <option value="checkup">Comprehensive Check-up</option>
                    <option value="implants">Dental Implants & Surgery</option>
                    <option value="cosmetic">Teeth Whitening & Aesthetics</option>
                    <option value="restorative">Root Canal (RCT) & Crowns</option>
                    <option value="orthodontics">Braces / Clear Aligners</option>
                    <option value="full-mouth">Full-Mouth Reconstruction</option>
                    <option value="general">General Dental Consultation</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="preferredDate" className="font-headline text-xs font-bold text-[#12345A] uppercase">
                    PREFERRED DATE
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    min={todayStr}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-white border border-[#C3C6CF] px-4 py-3 text-sm text-[#0A1D30] focus:outline-none focus:border-[#2878D4]"
                  />
                </div>

                {/* Preferred Time */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="preferredTime" className="font-headline text-xs font-bold text-[#12345A] uppercase">
                    PREFERRED TIME WINDOW
                  </label>
                  <select
                    id="preferredTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-[#C3C6CF] px-4 py-3 text-sm text-[#0A1D30] focus:outline-none focus:border-[#2878D4]"
                  >
                    <option value="morning">Morning (10:00 AM – 01:00 PM)</option>
                    <option value="evening">Evening (05:00 PM – 08:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Symptom Notes */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="clinicalNotes" className="font-headline text-xs font-bold text-[#12345A] uppercase">
                  BRIEF DESCRIPTION OF SYMPTOMS OR GOALS (OPTIONAL)
                </label>
                <textarea
                  id="clinicalNotes"
                  rows={3}
                  value={clinicalNotes}
                  onChange={(e) => setClinicalNotes(e.target.value)}
                  placeholder="Tell us if you are experiencing tooth pain, seeking a tooth replacement, or requesting an overall consultation."
                  className="w-full bg-white border border-[#C3C6CF] px-4 py-3 text-sm text-[#0A1D30] focus:outline-none focus:border-[#2878D4]"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex flex-col space-y-1 pt-2">
                <div className="flex items-start gap-3">
                  <input
                    id="consentCheck"
                    type="checkbox"
                    required
                    checked={consentCheck}
                    onChange={(e) => {
                      setConsentCheck(e.target.checked);
                      if (errors.consentCheck) setErrors((prev) => ({ ...prev, consentCheck: '' }));
                    }}
                    className="w-4 h-4 mt-1 border border-[#C3C6CF] text-[#2878D4] focus:ring-0 rounded-none cursor-pointer"
                  />
                  <label htmlFor="consentCheck" className="text-xs text-[#35465B] cursor-pointer select-none leading-relaxed">
                    I agree to be contacted by Pramukh Multispeciality Dental Clinic regarding my enquiry via phone call or WhatsApp message.
                  </label>
                </div>
                {errors.consentCheck && (
                  <span className="text-[11px] text-[#BA1A1A] font-medium">{errors.consentCheck}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#C3C6CF]/30 flex items-center justify-between flex-wrap gap-4">
                <span className="text-[11px] font-mono text-[#35465B]">
                  LOCATION: KUDASAN, GANDHINAGAR
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2878D4] hover:bg-[#12345A] text-white font-headline text-xs font-semibold px-8 py-4 uppercase tracking-wider transition-colors shadow-[0_2px_0_0_#12345A] flex items-center gap-2 focus:outline-none disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>TRANSMITTING ENQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>REQUEST A CONSULTATION</span>
                      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
