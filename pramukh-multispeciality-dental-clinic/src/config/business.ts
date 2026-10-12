/**
 * Central configuration file for Pramukh Multispeciality Dental Clinic.
 * All business details, contact numbers, address, verified operating hours,
 * services, FAQs, and reviews are maintained here for easy updates and verifiability.
 */

export interface ServiceDetail {
  id: string;
  categoryNumber: string;
  title: string;
  subtitle: string;
  description: string;
  indicatorLabel: string;
  indicatorText: string;
  protocol: string;
  isSpotlight?: boolean;
  actionText: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  treatmentTag?: string;
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface ConsultationStep {
  stepNumber: string;
  title: string;
  description: string;
  phaseLabel: string;
  iconName: string;
}

export const BUSINESS_CONFIG = {
  name: "Pramukh Multispeciality Dental Clinic",
  shortName: "Pramukh Dental",
  tagline: "Precision Dental Healthcare & Surgical Stomatology",
  locationName: "Radhe Signature, Kudasan",
  
  address: {
    line1: "1st Floor, Radhe Signature, B-118/119",
    line2: "Opposite Sahajanand City, Kudasan",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382419",
    fullAddress: "1st Floor, Radhe Signature, B-118/119, opposite Sahajanand City, Kudasan, Gandhinagar, Gujarat 382419"
  },

  contact: {
    phoneDisplay: "098989 09100",
    phoneTel: "tel:09898909100",
    phoneFormatted: "+91 98989 09100",
    whatsappLink: "https://wa.me/919898909100?text=Hello%20Pramukh%20Dental%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.",
    emergencyNote: "Consultation bookings, patient follow-up, and emergency guidance available."
  },

  reputation: {
    rating: 4.9,
    maxRating: 5.0,
    reviewCount: 28,
    label: "28 Verified Google Reviews",
    verifiedText: "Verified Clinical Rating · Kudasan",
    googleMapsUrl: "https://maps.google.com/?q=Pramukh+Multispeciality+Dental+Clinic+Kudasan+Gandhinagar"
  },

  operatingHours: {
    weekdaySchedule: "Monday – Saturday: 09:30 AM – 08:30 PM",
    mondayNote: "Monday doors open at 10:00 AM",
    sundaySchedule: "Sunday: Strictly by prior appointment",
    days: [
      { day: "Monday", hours: "10:00 AM – 08:30 PM", note: "Opening at 10:00 AM" },
      { day: "Tuesday", hours: "09:30 AM – 08:30 PM" },
      { day: "Wednesday", hours: "09:30 AM – 08:30 PM" },
      { day: "Thursday", hours: "09:30 AM – 08:30 PM" },
      { day: "Friday", hours: "09:30 AM – 08:30 PM" },
      { day: "Saturday", hours: "09:30 AM – 08:30 PM" },
      { day: "Sunday", hours: "By Appointment Only", isSpecial: true }
    ]
  },

  coordinates: {
    lat: "23.1887° N",
    lng: "72.6288° E",
    landmark: "Opp. Sahajanand City, Kudasan"
  },

  clinicalStandards: [
    "Class-1 Bio-Barrier Sterilization Protocols",
    "Digital CBCT 3D Radiographic Diagnostics",
    "Autoclave Class B Ultrasonic Instrument Disinfection",
    "NABH Compliant Infection Prevention Guidelines"
  ],

  services: [
    {
      id: "implants",
      categoryNumber: "SURGICAL SPOTLIGHT",
      title: "DENTAL IMPLANTS & GUIDED SURGERY",
      subtitle: "RESTORATIVE IMPLANTOLOGY",
      description: "Permanent prosthetic replacement for single or multiple missing teeth using biocompatible titanium or zirconia fixtures. Comprehensive assessment includes jawbone density evaluation, CBCT 3D diagnostics, and digital surgical guide planning.",
      indicatorLabel: "WHEN CONSULTATION MAY BE USEFUL:",
      indicatorText: "If you are coping with tooth loss, struggling with removable dentures, or seeking long-term structural bite restoration without altering adjacent natural teeth.",
      protocol: "GUIDED 3D ASSESSMENT",
      isSpotlight: true,
      actionText: "ENQUIRE ABOUT IMPLANTS"
    },
    {
      id: "general-preventive",
      categoryNumber: "CATEGORY 01",
      title: "GENERAL & PREVENTIVE DENTISTRY",
      subtitle: "GUM & ORAL HEALTH MAINTENANCE",
      description: "Dental check-ups, comprehensive clinical examinations, ultrasonic scaling, oral prophylaxis, periodontal charting, and preventive care guidance to sustain gingival tissue health.",
      indicatorLabel: "CLINICAL INDICATOR:",
      indicatorText: "Routine 6-month maintenance, gum sensitivity, tartar buildup, or early cavity surveillance.",
      protocol: "ULTRASONIC PROPHYLAXIS",
      actionText: "CONSULT PREVENTIVE CARE"
    },
    {
      id: "cosmetic-whitening",
      categoryNumber: "CATEGORY 02",
      title: "COSMETIC DENTISTRY & WHITENING",
      subtitle: "AESTHETIC ENAMEL HARMONIZATION",
      description: "In-clinic LED teeth whitening evaluations, direct composite aesthetic bonding, ceramic veneers, and smile harmonization designed with conservative enamel conservation.",
      indicatorLabel: "CLINICAL INDICATOR:",
      indicatorText: "Intrinsic or extrinsic enamel discoloration, minor chipping, or uneven spacing between incisors.",
      protocol: "CONSERVATIVE ENAMEL BLEACHING",
      actionText: "CONSULT COSMETIC OPTIONS"
    },
    {
      id: "restorative-endodontics",
      categoryNumber: "CATEGORY 03",
      title: "RESTORATIVE DENTISTRY & ENDODONTICS",
      subtitle: "ROTARY RCT & CROWN PROSTHETICS",
      description: "Rotary endodontic therapy (Root Canal Treatment), precision-milled zirconia crowns, bridge prostheses, cast partial dentures, and biomimetic restorative inlays.",
      indicatorLabel: "CLINICAL INDICATOR:",
      indicatorText: "Severe dental pain, nocturnal throbbing, decayed structure, or broken functional cusps.",
      protocol: "MICRO-ROTARY ENDODONTICS",
      actionText: "CONSULT RESTORATIVE PROTOCOL"
    },
    {
      id: "orthodontics-aligners",
      categoryNumber: "CATEGORY 04",
      title: "ORTHODONTICS & CLEAR ALIGNERS",
      subtitle: "MALOCCLUSION CORRECTION",
      description: "Digital cephalometric malocclusion analysis, clear aligner planning, self-ligating brackets, and retention management for juvenile and adult teeth repositioning.",
      indicatorLabel: "CLINICAL INDICATOR:",
      indicatorText: "Crowding, anterior open bite, crossbites, or aesthetic alignment preference without metal brackets.",
      protocol: "CEPHALOMETRIC ALIGNER ANALYSIS",
      actionText: "CONSULT ALIGNER ASSESSMENT"
    },
    {
      id: "full-mouth-restoration",
      categoryNumber: "CATEGORY 05",
      title: "FULL-MOUTH RECONSTRUCTION & DENTURES",
      subtitle: "COMPREHENSIVE PROSTHODONTICS",
      description: "Complete bite rehabilitation combining fixed bridge work, implant-supported overdentures, and occlusal plane stabilization for compromised dentition.",
      indicatorLabel: "CLINICAL INDICATOR:",
      indicatorText: "Worn dentition, multiple missing teeth, severe bite collapse, or chewing impairment.",
      protocol: "OCCLUSAL REHABILITATION",
      actionText: "CONSULT FULL-MOUTH CARE"
    }
  ] as ServiceDetail[],

  consultationSteps: [
    {
      stepNumber: "01",
      title: "ENQUIRE",
      description: "Share your contact details and the primary reason for your enquiry via web form or direct phone call.",
      phaseLabel: "Step 1 · Verification",
      iconName: "send"
    },
    {
      stepNumber: "02",
      title: "CONSULT",
      description: "In-person consultation at Kudasan with targeted clinical examination and low-dose digital radiographs.",
      phaseLabel: "Step 2 · Operatory",
      iconName: "forum"
    },
    {
      stepNumber: "03",
      title: "REVIEW OPTIONS",
      description: "Review diagnostic findings with transparent comparison of all suitable treatment routes, costs, and timelines.",
      phaseLabel: "Step 3 · Joint Decision",
      iconName: "fact_check"
    },
    {
      stepNumber: "04",
      title: "PLAN NEXT STEPS",
      description: "Confirm appointment schedules, visit frequency, itemized estimates, and pre-procedure clinical protocols.",
      phaseLabel: "Step 4 · Execution",
      iconName: "event_available"
    }
  ] as ConsultationStep[],

  patientQuestions: [
    {
      number: "01",
      title: "Suitability & Alternatives",
      detail: "Are there non-surgical or alternate biomaterial options for my specific condition?"
    },
    {
      number: "02",
      title: "Realistic Expectations",
      detail: "What is the anticipated longevity, success rate, and aesthetic result of this procedure?"
    },
    {
      number: "03",
      title: "Risk & Post-Operative Considerations",
      detail: "What recovery window is expected, and what post-treatment guidelines must be followed?"
    },
    {
      number: "04",
      title: "Transparent Itemized Costs",
      detail: "Can I receive an itemized schedule covering diagnostic X-rays, lab fabrication, and visits?"
    },
    {
      number: "05",
      title: "Maintenance Schedule",
      detail: "How often should clinical prophylaxis or checkups occur after this restoration?"
    }
  ],

  faqs: [
    {
      id: "faq-1",
      number: "01",
      question: "What happens during a comprehensive dental check-up?",
      answer: "A comprehensive check-up entails soft-tissue oral screening, gingival periodontal probe assessment, tooth-by-tooth cavity and enamel structural evaluation, bite registration, and intraoral digital radiographs when indicated. We discuss clinical findings with you before initiating any treatment."
    },
    {
      id: "faq-2",
      number: "02",
      question: "What should I know before undergoing teeth whitening?",
      answer: "Whitening agents act upon organic chromogens within natural tooth enamel. Prior to whitening, a clinical check ensures that gum recession, active caries, or thin enamel are not present to avoid severe transient sensitivity. Please note that existing tooth-colored restorations, composite fillings, and ceramic crowns do not lighten with whitening bleach."
    },
    {
      id: "faq-3",
      number: "03",
      question: "How are dental implants assessed for clinical suitability?",
      answer: "Implant suitability depends on alveolar bone height and width, proximity to the maxillary sinus or mandibular nerve canal, occlusal load dynamics, and general systemic factors (such as controlled HbA1c levels). A Cone Beam Computed Tomography (CBCT) scan is commonly conducted to evaluate osseous dimensions before surgical fixture placement."
    },
    {
      id: "faq-4",
      number: "04",
      question: "What are the key differences between bridges, dentures, and implants?",
      answer: "Dentures are removable appliances resting on mucous membranes; bridges are fixed units anchored onto adjacent natural teeth (which require structural preparation); while implants are standalone titanium posts integrated directly into bone. Each method possesses distinctive biomechanical, functional, and financial parameters which we outline during consultation."
    },
    {
      id: "faq-5",
      number: "05",
      question: "How should I evaluate and compare different dental care options?",
      answer: "We encourage evaluating options on four clear criteria: biological invasiveness (how much healthy tooth structure is preserved), expected functional longevity, total clinical investment (both time and cost), and ongoing maintenance needs. We provide you with neutral, diagnostic clarity to make the right choice for your oral health."
    }
  ] as FaqItem[],

  reviews: [
    {
      id: "rev-1",
      author: "Prakash V.",
      rating: 5,
      date: "2 weeks ago",
      text: "Dr. and the staff at Pramukh Dental Clinic were extremely professional during my root canal treatment and crown placement. Very clean operatory in Radhe Signature, Kudasan. Highly recommended!",
      verified: true,
      treatmentTag: "Root Canal & Crown"
    },
    {
      id: "rev-2",
      author: "Anjali S.",
      rating: 5,
      date: "1 month ago",
      text: "Got my teeth cleaning and whitening done here. They explained every step clearly before starting. Zero pain and excellent hygiene standards.",
      verified: true,
      treatmentTag: "Teeth Whitening"
    },
    {
      id: "rev-3",
      author: "Jignesh Patel",
      rating: 5,
      date: "2 months ago",
      text: "I consulted Pramukh Dental for my father's dental implant treatment. They performed 3D scan evaluation and guided implant procedure smoothly. Outstanding quality of care in Gandhinagar.",
      verified: true,
      treatmentTag: "Dental Implants"
    },
    {
      id: "rev-4",
      author: "Meera Shah",
      rating: 5,
      date: "3 months ago",
      text: "Very polite doctors, genuine advice without suggesting unnecessary treatments. The location opposite Sahajanand City is very easy to find with convenient parking.",
      verified: true,
      treatmentTag: "General Consultation"
    }
  ] as ReviewItem[]
};
