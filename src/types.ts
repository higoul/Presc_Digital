
export interface Medication {
  name: string;
  details: string;
  category?: string;
}

export interface TreatmentBlock {
  title: string;
  medications: Medication[];
}

export type Specialty =
  | 'Dermatologia'
  | 'Otorrinolaringologia'
  | 'Gastroenterologia'
  | 'Infectologia/DSTs'
  | 'Pneumologia'
  | 'Cardiologia'
  | 'Neurologia'
  | 'Ginecologia/Obstetrícia'
  | 'Urologia'
  | 'Oftalmologia'
  | 'Reumatologia/Ortopedia'
  | 'Parasitologia'
  | 'Alergias e Imunologia'
  | 'Psiquiatria'
  | 'Hematologia'
  | 'Clínica Geral';

export interface Condition {
  id: number;
  title: string;
  cid: string;
  specialty?: Specialty;
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
