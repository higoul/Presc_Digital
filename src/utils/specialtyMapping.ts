import { Specialty } from '../types';

// Mapeamento de ID da condição para especialidade médica
export const SPECIALTY_MAPPING: Record<number, Specialty> = {
  // Dermatologia
  1: 'Dermatologia', // Abscesso/Furúnculo
  12: 'Dermatologia', // Celulite
  26: 'Dermatologia', // Dermatite de Contato
  27: 'Dermatologia', // Dermatite Seborreica
  31: 'Dermatologia', // Eczema
  33: 'Dermatologia', // Erisipela
  34: 'Dermatologia', // Escabiose
  41: 'Dermatologia', // Furunculose
  47: 'Dermatologia', // Herpes Genital
  48: 'Dermatologia', // Herpes Simples
  49: 'Dermatologia', // Herpes Zoster
  52: 'Dermatologia', // Impetigo
  53: 'Dermatologia', // Infecção de Pele e Partes Moles
  68: 'Dermatologia', // Micoses Cutâneas
  75: 'Dermatologia', // Onicomicose
  83: 'Dermatologia', // Psoríase
  84: 'Dermatologia', // Ptiríase Versicolor
  85: 'Dermatologia', // Queimaduras
  93: 'Dermatologia', // Urticária

  // Otorrinolaringologia
  3: 'Otorrinolaringologia', // Amigdalite Bacteriana
  13: 'Otorrinolaringologia', // Cerume Impactado
  36: 'Otorrinolaringologia', // Faringite Aguda
  60: 'Otorrinolaringologia', // Laringite Aguda
  74: 'Otorrinolaringologia', // Obstrução Nasal Crônica/Rinossinusite
  77: 'Otorrinolaringologia', // Otite Externa Aguda
  78: 'Otorrinolaringologia', // Otite Média Aguda
  87: 'Otorrinolaringologia', // Rinossinusite Aguda

  // Gastroenterologia
  7: 'Gastroenterologia', // Azia/Dispepsia Funcional Leve
  16: 'Gastroenterologia', // Cólica Biliar
  21: 'Gastroenterologia', // Constipação Funcional
  28: 'Gastroenterologia', // Diarreia Aguda
  35: 'Gastroenterologia', // Esofagite de Refluxo (DRGE)
  39: 'Gastroenterologia', // Fissura Anal
  42: 'Gastroenterologia', // Gastrite Aguda
  43: 'Gastroenterologia', // Gastroenterite Aguda
  46: 'Gastroenterologia', // Hemorróidas
  76: 'Gastroenterologia', // Obstipação
  89: 'Gastroenterologia', // Síndrome do Intestino Irritável

  // Infectologia/DSTs
  9: 'Infectologia/DSTs', // Cancro Mole
  15: 'Infectologia/DSTs', // Clamídia
  45: 'Infectologia/DSTs', // Gonorreia
  65: 'Infectologia/DSTs', // Linfogranuloma Venéreo
  82: 'Infectologia/DSTs', // Profilaxia Pós-Exposição Sexual (PEP)
  88: 'Infectologia/DSTs', // Sífilis

  // Pneumologia
  6: 'Pneumologia', // Asma Aguda Leve/Moderada
  30: 'Pneumologia', // DPOC Exacerbada
  55: 'Pneumologia', // Influenza - Gripe
  59: 'Pneumologia', // Insuficiência Respiratória Crônica
  81: 'Pneumologia', // Pneumonia Adquirida na Comunidade
  54: 'Pneumologia', // IVAS - Resfriado Comum

  // Cardiologia
  24: 'Cardiologia', // Crise Hipertensiva
  40: 'Cardiologia', // Flebite Superficial
  50: 'Cardiologia', // Hipertensão Arterial Sistêmica
  58: 'Cardiologia', // Insuficiência Cardíaca
  92: 'Cardiologia', // Trombose Venosa Profunda

  // Neurologia
  11: 'Neurologia', // Cefaleias Primárias
  23: 'Neurologia', // Crise Convulsiva/Epilepsia
  71: 'Neurologia', // Neuralgia Pós-Herpética
  72: 'Neurologia', // Neuropatia Periférica Diabética
  73: 'Neurologia', // Nevralgia do Trigêmeo
  79: 'Neurologia', // Paralisia Facial Periférica

  // Ginecologia/Obstetrícia
  62: 'Ginecologia/Obstetrícia', // Leucorreias - Candidíase Vulvovaginal
  63: 'Ginecologia/Obstetrícia', // Leucorreias - Tricomoníase
  64: 'Ginecologia/Obstetrícia', // Leucorreias - Vaginose Bacteriana
  66: 'Ginecologia/Obstetrícia', // Mastite Puerperal
  67: 'Ginecologia/Obstetrícia', // Metrorragia por Miomatose Uterina

  // Urologia
  14: 'Urologia', // Cistite Aguda/ITU Baixa
  17: 'Urologia', // Cólica Renal
  70: 'Urologia', // Neoplasia de Próstata

  // Oftalmologia
  8: 'Oftalmologia', // Calázio/Hordéolo
  18: 'Oftalmologia', // Conjuntivite Alérgica
  19: 'Oftalmologia', // Conjuntivite Bacteriana Aguda
  20: 'Oftalmologia', // Conjuntivite Viral

  // Reumatologia/Ortopedia
  22: 'Reumatologia/Ortopedia', // Contusão Muscular
  29: 'Reumatologia/Ortopedia', // Dor Lombar/Lombalgia
  38: 'Reumatologia/Ortopedia', // Fibromialgia
  61: 'Reumatologia/Ortopedia', // LER/DORT

  // Parasitologia
  5: 'Parasitologia', // Ascaridíase
  32: 'Parasitologia', // Enterobíase (Oxiuríase)
  44: 'Parasitologia', // Giardíase
  80: 'Parasitologia', // Pediculose
  91: 'Parasitologia', // Tricuríase

  // Alergias e Imunologia
  2: 'Alergias e Imunologia', // Alergias
  86: 'Alergias e Imunologia', // Rinite Alérgica

  // Psiquiatria
  56: 'Psiquiatria', // Insônia
  57: 'Psiquiatria', // Insônia no Idoso
  90: 'Psiquiatria', // Transtorno de Ansiedade Generalizada

  // Hematologia
  4: 'Hematologia', // Anemia Ferropriva Sintomática

  // Clínica Geral
  10: 'Clínica Geral', // Candidíase/Monilíase Oral
  25: 'Clínica Geral', // Dengue
  37: 'Clínica Geral', // Febre de Origem Indeterminada
  51: 'Clínica Geral', // Hipoglicemia
  69: 'Clínica Geral', // Mononucleose Infecciosa
};

export const getConditionSpecialty = (conditionId: number): Specialty => {
  return SPECIALTY_MAPPING[conditionId] || 'Clínica Geral';
};

export const SPECIALTY_LIST: Specialty[] = [
  'Clínica Geral',
  'Dermatologia',
  'Otorrinolaringologia',
  'Gastroenterologia',
  'Infectologia/DSTs',
  'Pneumologia',
  'Cardiologia',
  'Neurologia',
  'Ginecologia/Obstetrícia',
  'Urologia',
  'Oftalmologia',
  'Reumatologia/Ortopedia',
  'Parasitologia',
  'Alergias e Imunologia',
  'Psiquiatria',
  'Hematologia',
];
