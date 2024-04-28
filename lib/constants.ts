// export const cases = [
//   {
//     name: "Leslie Alexander",
//     gender: "Male",
//     age: "22",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     id: "1",
//     completed: "3h ago",
//   },
//   {
//     name: "Michael Foster",
//     gender: "Male",
//     age: "22",
//     imageUrl:
//       "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     id: "2",
//     completed: "3h ago",
//   },
//   {
//     name: "Dries Vincent",
//     gender: "Male",
//     age: "22",
//     imageUrl:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     id: "3",
//     completed: null,
//   },
//   {
//     name: "Lindsay Walton",
//     gender: "Male",
//     age: "22",
//     imageUrl:
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     id: "4",
//     completed: "3h ago",
//   },
//   {
//     name: "Courtney Henry",
//     gender: "Male",
//     age: "22",
//     imageUrl:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     id: "5",
//     completed: "3h ago",
//   },
//   {
//     name: "Tom Cook",
//     gender: "Male",
//     age: "22",
//     imageUrl:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     id: "6",
//   },
// ];

export const systemContent = `You, the chatbot, will play the role of a patient going to see the doctor. You will be interviewed by a doctor. Below, you’ll find a list of facts about you. Answer the questions that will be asked to you, and whatever is not in the list of facts below, invent it coherently such that it is consistent with the list of facts below. Please do not give extra information from the script, only answer what the doctor asks you and always stay in role.

Identification of the patient

Answer the questions I'll ask you, and whatever is out of the script, please invent it coherently. Please do not give away extra information from the list of facts above, only answer what the doctor asks you and always stay in character.

`;

import { contextualHello } from "./helpers";

export type ClinicalCase = {
  id: number;
  patientName: string;
  patientAvatar: string;
  age: number;
  gender: string;
  raceEthnicity: string;
  weight: number;
  height: string;
  importantPhysicalDetails: string;
  chiefComplaint: string;
  patientMedicalHistory: string;
  patientHealthBelief: string;
  patientPrimaryConcern: string;
  pastMedicalHistory: string;
  obGynHistory: string;
  medications: string;
  allergies: string;
  exposureHistory: string;
  immunizations: string;
  preventiveHealthcare: string;
  previousImportantTests: string;
  familyHistory: string;
  socialHistory: string;
  habits: string;
  patientBehavior: string;
  responsiveness: string;
  workingDiagnosis: string;
  diagnosisRationale: string;
  differentialDiagnosis: string;
  differentialDiagnosisRationales: string;
};

export const patient1: ClinicalCase = {
  id: 1,
  patientName: "John Doe",
  patientAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  age: 45,
  gender: "Male",
  raceEthnicity: "Caucasian",
  weight: 200,
  height: "6'0\"",
  importantPhysicalDetails: "Tattoo on left arm",
  chiefComplaint: "Persistent cough and chest pain",
  patientMedicalHistory: "Asthma, Type 2 Diabetes",
  patientHealthBelief: "Prefers natural remedies",
  patientPrimaryConcern: "Worsening of asthma",
  pastMedicalHistory: "No surgeries, asthma since childhood",
  obGynHistory: "N/A",
  medications: "Metformin, Albuterol",
  allergies: "Penicillin",
  exposureHistory: "Smoker, exposed to industrial dust",
  immunizations: "Up to date",
  preventiveHealthcare: "Annual flu shot",
  previousImportantTests: "Chest X-ray in 2022",
  familyHistory: "Father had heart disease",
  socialHistory: "Married, two children, engineer",
  habits: "Smoking, occasional alcohol",
  patientBehavior: "Cooperative",
  responsiveness: "Alert and responsive",
  workingDiagnosis: "Chronic bronchitis",
  diagnosisRationale:
    "Symptoms and exposure history suggest chronic bronchitis",
  differentialDiagnosis: "Pneumonia, COPD",
  differentialDiagnosisRationales:
    "Ruling out due to patient's smoking history and persistent symptoms",
};

export const patient2: ClinicalCase = {
  id: 2,
  patientName: "Mary Smith",
  patientAvatar:
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  age: 30,
  gender: "Female",
  raceEthnicity: "Hispanic",
  weight: 130,
  height: "5'4\"",
  importantPhysicalDetails: "Scar on right knee",
  chiefComplaint: "Severe abdominal pain",
  patientMedicalHistory: "IBS diagnosed in 2020",
  patientHealthBelief: "Trusts medical science fully",
  patientPrimaryConcern: "Pain interfering with daily activities",
  pastMedicalHistory: "Appendectomy at age 12",
  obGynHistory: "Regular menstrual cycles, no pregnancies",
  medications: "Ibuprofen as needed",
  allergies: "None",
  exposureHistory: "Works in a daycare center",
  immunizations: "HPV, Hepatitis B",
  preventiveHealthcare: "Regular dental checkups",
  previousImportantTests: "Ultrasound in 2021",
  familyHistory: "Mother with hypothyroidism",
  socialHistory: "Single, enjoys hiking and painting",
  habits: "Vegetarian, regular exercise",
  patientBehavior: "Anxious about health",
  responsiveness: "Very communicative",
  workingDiagnosis: "IBS flare-up",
  diagnosisRationale: "Symptoms align with historical IBS issues",
  differentialDiagnosis: "Gallstones, ulcerative colitis",
  differentialDiagnosisRationales:
    "Considering GI issues due to symptoms and history",
};

export const patient3: ClinicalCase = {
  id: 3,
  patientName: "Alice Johnson",
  patientAvatar:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  age: 58,
  gender: "Female",
  raceEthnicity: "African American",
  weight: 165,
  height: "5'6\"",
  importantPhysicalDetails: "Wears hearing aids",
  chiefComplaint: "Difficulty walking and joint pain",
  patientMedicalHistory: "Hypertension, osteoarthritis",
  patientHealthBelief: "Skeptical of surgeries",
  patientPrimaryConcern: "Loss of mobility",
  pastMedicalHistory: "Knee surgery in 2010",
  obGynHistory: "Post-menopausal",
  medications: "Lisinopril, Paracetamol",
  allergies: "Shellfish",
  exposureHistory: "Retired school teacher",
  immunizations: "Shingles vaccine received",
  preventiveHealthcare: "Biannual health screenings",
  previousImportantTests: "MRI of the knee in 2019",
  familyHistory: "Mother had osteoporosis",
  socialHistory: "Widowed, enjoys reading and knitting",
  habits: "Non-smoker, light drinker",
  patientBehavior: "Patient and understanding",
  responsiveness: "Somewhat slow due to hearing loss",
  workingDiagnosis: "Progressed osteoarthritis",
  diagnosisRationale: "Clinical presentation and past medical history",
  differentialDiagnosis: "Rheumatoid arthritis, gout",
  differentialDiagnosisRationales: "Considering other joint-related diseases",
};

type CaseCompletion = {
  completed: boolean;
};

export type StudentClinicalCase = ClinicalCase & CaseCompletion;

export const cases: StudentClinicalCase[] = [
  { ...patient1, completed: false },
  { ...patient2, completed: false },
  { ...patient3, completed: true },
];

export const greetings = [
  {
    text: "%s. - How are you feeling today?",
    strings: [contextualHello()],
  },
  // {
  //   text: "%s! - Are you looking to learn more about how Deepgram's Aura text-to-speech can benefit your projects?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s. - Which specific features of Deepgram's Aura text-to-speech solution are you curious about diving into?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Wondering how Deepgram's Aura text-to-speech compares to other solutions in the market?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s. - Have you thought about how Deepgram's Aura text-to-speech can revolutionize your apps?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Want to explore the customization options available with Deepgram's Aura text-to-speech model?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Interested in the types of voices Deepgram's Aura has?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Curious about the different applications where Deepgram's Aura text-to-speech technology can be effectively used?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - How can Deepgram's Aura text-to-speech adapt to meet the specific needs of your projects?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Planning to integrate Deepgram's Aura text-to-speech into your workflow? Let's discuss how to get started!",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s! - Considering Deepgram's Aura text-to-speech for your business? What features are you interested in learning more about?",
  //   strings: [contextualHello()],
  // },
  // {
  //   text: "%s. - Ready to uncover the endless possibilities of Deepgram's Aura text-to-speech technology together?",
  //   strings: [contextualHello()],
  // },
];

export const silentMp3: string = `data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`;
