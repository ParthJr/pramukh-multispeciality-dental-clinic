import type { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed'
    });
  }

  const { fullName, mobileNumber, serviceInterest, preferredDate, preferredTime, clinicalNotes, consentCheck } = req.body || {};

  // Validation 1: Full Name
  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'FULL_NAME_REQUIRED',
      message: 'Please provide a valid full name (at least 2 characters).'
    });
  }

  // Validation 2: Mobile Number (Indian 10-digit)
  const cleanMobile = (mobileNumber || '').toString().replace(/\D/g, '');
  if (!cleanMobile || !/^[6-9]\d{9}$/.test(cleanMobile)) {
    return res.status(400).json({
      success: false,
      error: 'INVALID_MOBILE_NUMBER',
      message: 'Please provide a valid 10-digit Indian mobile number (e.g., 98989 09100).'
    });
  }

  // Validation 3: Privacy Consent
  if (!consentCheck) {
    return res.status(400).json({
      success: false,
      error: 'CONSENT_REQUIRED',
      message: 'Privacy consent is required to allow clinic staff to contact you.'
    });
  }

  const enquiryId = 'PDK-' + Math.floor(100000 + Math.random() * 900000);

  return res.status(200).json({
    success: true,
    enquiryId,
    message: 'Your consultation enquiry has been successfully logged with Pramukh Dental Clinic.',
    receivedAt: new Date().toISOString(),
    data: {
      fullName: fullName.trim(),
      mobileNumber: `+91 ${cleanMobile}`,
      serviceInterest: serviceInterest || 'General Consultation',
      preferredDate: preferredDate || 'Flexible / Unspecified',
      preferredTime: preferredTime || 'Evening (05:00 PM – 08:30 PM)',
      notes: (clinicalNotes || '').trim()
    }
  });
}
