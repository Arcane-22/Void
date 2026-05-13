export interface PersonalData {
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  nationality: string;
  gender: string;
}

export interface ProfessionalData {
  primarySubject: string;
  secondarySubject: string;
  highestQualification: string;
  fieldOfStudy: string;
  yearsOfExperience: string;
  currentInstitution: string;
  previousInstitution: string;
  shortBio: string;
}

export interface DocumentsData {
  identityProof: File | null;
  academicCertificates: File[];
}

export interface VerificationFormData {
  personal: PersonalData | null;
  professional: ProfessionalData | null;
  documents: DocumentsData | null;
}