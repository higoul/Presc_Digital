
export interface Medication {
  name: string;
  details: string;
  category?: string;
}

export interface TreatmentBlock {
  title: string;
  medications: Medication[];
}

export interface Condition {
  id: number;
  title: string;
  cid: string;
  differentialDiagnosis: string;
  initialConduct: string[];
  nonPharmaTreatment: string[];
  pharmaTreatments: TreatmentBlock[];
  proceduresInUnit?: string[];
  patientGuidance: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}
