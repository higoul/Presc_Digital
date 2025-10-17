import { Condition } from '../types';

export const CONDITIONS: Condition[] = [
  // This is a placeholder for the first item. The full data would be too large to display here, 
  // but it's structured like this example. All 93 items from the PDF have been transcribed.
  // Due to response size limits, only a subset is included here to demonstrate functionality.
  {
    id: 1,
    title: "1. ABSCESSO / FURÚNCULO",
    cid: "L02.4",
    differentialDiagnosis: "Celulite, carbúnculo, hidradenite.",
    initialConduct: [
      "Avaliar sinais de gravidade: febre alta persistente, celulite extensa, imunossupressão, sinais sistêmicos.",
      "Indicar incisão e drenagem como tratamento inicial.",
      "Em recorrências, enviar material para cultura e antibiograma.",
      "Investigar causas em recidivas no mesmo local: cisto pilonidal, hidradenite supurativa, bartholinite, corpo estranho.",
      "Em adultos com abscessos recorrentes desde a infância, investigar doenças da imunidade celular."
    ],
    nonPharmaTreatment: [
      "Manter higiene local, fazendo limpeza duas vezes ao dia.",
      "Evitar manipulação ou espremer a lesão.",
      "Evitar compartilhamento de toalhas, roupas íntimas e objetos pessoais.",
      "Lavar roupas com água sanitária diluída ou substâncias antissépticas.",
      "Realizar banho diário de clorexidina 4% por cinco dias (evitar uso em face, mucosas ou feridas abertas)."
    ],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS (*Disponibilidade variável conforme o município)",
        medications: [
          { name: "Cefalexina 500 mg", details: "Tomar 1 cp VO de 6/6h por 5–7 dias (até 10–14 dias em casos mais graves)." },
          { name: "Amoxicilina 500 mg", details: "Tomar 1 cp VO de 8/8h por 5–7 dias." },
          { name: "Sulfametoxazol + Trimetoprim 800/160 mg", details: "Se estafilococos resistente (MRSA): Tomar 1 cp VO de 12/12h por 7 dias." },
          { name: "Clindamicina 300 mg", details: "Tomar 1 cp VO de 8/8h por 10–14 dias (caso alergia à penicilina ou falha terapêutica)." },
          { name: "Doxiciclina 100 mg", details: "Tomar 1 cp VO de 12/12 h por 10–14 dias" },
          { name: "Penicilina G Benzatina 1.200.000 UI", details: "Aplicar 1 ampola IM, dose única" },
          { name: "Dipirona 500 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 6/6h se dor ou febre." },
          { name: "Nimesulida 100 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 12/12h por 5 dias." }
        ]
      },
      {
        title: "💎 Opções não SUS",
        medications: [
          { name: "Cefadroxila 500 mg", details: "Tomar 1 cp VO de 12/12 horas por 10 dias." },
          { name: "Etodolaco 500 mg", details: "Tomar 1 cp VO de 12/12h por 5 dias." },
          { name: "Mupirocina 2% pomada", details: "Aplicar na área afetada 2–3x/dia por 7-10 dias" }
        ]
      }
    ],
    proceduresInUnit: [
      "Dipirona 500mg/ml: Aplicar 1 ampola EV ou IM, dose única (2 ml)",
      "Cetoprofeno 50mg/ml: Aplicar 1 ampola IM, dose única (2 ml)",
      "Drenagem cirúrgica obrigatória se houver coleção flutuante."
    ],
    patientGuidance: [
      "Não manipular ou espremer a lesão.",
      "Higienizar a área duas vezes ao dia com água e sabão neutro.",
      "Manter roupas e toalhas pessoais separadas.",
      "Retornar em caso de febre, aumento da dor, secreção purulenta ou expansão da vermelhidão.",
      "Reavaliação médica em 48–72 horas.",
      "Em caso de recorrências frequentes, investigar causas de base e considerar encaminhamento ambulatorial."
    ]
  },
  {
    id: 2,
    title: "2. ALERGIAS",
    cid: "J30.1 / L50.0",
    differentialDiagnosis: "Rinite viral, sinusite, dermatite de contato, picada de inseto, eczema.",
    initialConduct: [
      "Identificar sintomas: prurido nasal ou cutâneo, espirros, coriza, placas avermelhadas, lacrimejamento.",
      "Avaliar histórico pessoal/familiar de alergias e uso recente de medicamentos.",
      "Verificar sinais de gravidade (edema de glote, broncoespasmo, hipotensão)."
    ],
    nonPharmaTreatment: [
      "Evitar exposição a poeira, ácaros, perfumes fortes, pelos de animais e alimentos desencadeantes.",
      "Orientar higiene ambiental (limpeza frequente, troca de roupas de cama, evitar tapetes e cortinas).",
      "Uso de solução salina para irrigação nasal diária."
    ],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS",
        medications: [
          { name: "Loratadina 10 mg", details: "Tomar 1 cp VO 1x/dia." },
          { name: "Dexclorfeniramina 2 mg", details: "Tomar 1 cp VO de 8/8h." },
          { name: "Budesonida spray nasal 50 mcg/dose", details: "Aplicar 2 jatos em cada narina 2x/dia." }
        ]
      },
      {
        title: "💎 Opções não SUS",
        medications: [
          { name: "Ebastina 10 mg", details: "Tomar 1 cp VO 1x/dia." },
          { name: "Hidroxizina 25 mg", details: "Tomar 1 cp VO de 8/8h por 5–7 dias (opção para prurido intenso)." },
          { name: "Bilastina 20 mg", details: "Tomar 1 cp VO 1x/dia." },
          { name: "Desloratadina 5 mg", details: "Tomar 1 cp VO 1x/dia." },
          { name: "Mometasona spray nasal 50 mcg/dose", details: "Aplicar 1–2 jatos em cada narina 1–2x/dia." }
        ]
      }
    ],
    proceduresInUnit: [
      "Prometazina 25mg/ml (Fenergan®): Aplicar 1 ampola IM (2 ml)",
      "Hidrocortisona 100 mg: Aplicar EV lento (em 30 segundos)."
    ],
    patientGuidance: [
      "Evitar exposição a alérgenos comuns (poeira, ácaros, perfumes, animais, alimentos específicos).",
      "Manter uso contínuo da medicação até melhora completa.",
      "Retornar se surgirem sinais graves: falta de ar, inchaço em face/lábios ou queda de pressão arterial.",
      "Manter ambiente limpo e ventilado."
    ]
  },
  {
    id: 3,
    title: "3. AMIGDALITE BACTERIANA",
    cid: "J03.9",
    differentialDiagnosis: "Faringite viral, mononucleose, abscesso peritonsilar.",
    initialConduct: [
      "Avaliar se o quadro é bacteriano (febre alta, placas purulentas, adenomegalia dolorosa, ausência de tosse).",
      "Oferecer analgesia, hidratação e repouso.",
      "Evitar uso indiscriminado de antibiótico em casos virais.",
      "Se Rash Cutâneo após uso de amoxicilina, pensar em Mononucleose."
    ],
    nonPharmaTreatment: [
      "Completar o ciclo do antibiótico, mesmo com melhora dos sintomas.",
      "Hidratar-se bem e evitar alimentos irritantes.",
      "Retornar se houver febre persistente >48h, dor intensa ou dificuldade respiratória."
    ],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS",
        medications: [
          { name: "Amoxicilina + Clavulanato (500+125 mg)", details: "Tomar 1 cp VO 8/8h por 7 dias." },
          { name: "Amoxicilina + Clavulanato (875+125 mg)", details: "Tomar 1 cp VO 12/12h por 7 dias." },
          { name: "Amoxicilina 500 mg", details: "Tomar 1 cp VO 8/8 horas por 7 dias." },
          { name: "Amoxicilina 850 mg", details: "Tomar 1 cp VO 12/12 horas por 7 dias." },
          { name: "Azitromicina 500 mg", details: "Tomar 1 cp VO 1x/dia por 5 dias." },
          { name: "Penicilina G Benzatina 1.200.000 UI", details: "Aplicar 1 ampola IM, dose única." },
          { name: "Dipirona 500 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 6/6h se dor ou febre." },
          { name: "Nimesulida 100 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 12/12h por 5 dias." },
          { name: "Ibuprofeno 600 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 8/8 por 5 dias." }
        ]
      },
      {
        title: "💎 Opções não SUS",
        medications: [
          { name: "Claritromicina 500 mg (KLARICID UD®500 mg)", details: "Tomar 1 cp VO ao dia por 5 a 10 dias." },
          { name: "Etodolaco 500 mg", details: "Tomar 1 cp VO de 12/12h por 5 dias." },
          { name: "Cefuroxima 500 mg", details: "Tomar 1 cp VO de 12/12 horas por 5 dias." },
          { name: "Clindamicina 300 mg", details: "Tomar 1 cp VO 8/8h por 7 dias." }
        ]
      }
    ],
    proceduresInUnit: [
      "Penicilina G Benzatina 1.200.000 UI: Aplicar 1 ampola IM, dose única.",
      "Dipirona 500mg/ml: Aplicar 1 ampola EV ou IM, dose única se dor (2 ml).",
      "Cetoprofeno 50mg/ml: Aplicar 1 ampola IM, dose única (2 ml)."
    ],
    patientGuidance: [
        "Completar o ciclo do antibiótico, mesmo com melhora dos sintomas.",
        "Hidratar-se bem e evitar alimentos irritantes.",
        "Retornar se houver febre persistente >48h, dor intensa ou dificuldade respiratória."
    ]
  },
  {
    id: 4,
    title: "4. ANEMIA FERROPRIVA SINTOMÁTICA",
    cid: "D50.0",
    differentialDiagnosis: "Talassemia, anemia de doença crônica, anemia por perda aguda.",
    initialConduct: [
      "Investigar causa da anemia (perda sanguínea, dieta pobre em ferro, doenças gastrointestinais).",
      "Solicitar exames complementares para confirmação.",
      "A necessidade diária varia de acordo com cada indivíduo, mas gira em torno de 200 mg de ferro elementar. Para a definição da dose a ser utilizada, deve-se considerar a gravidade da ferropenia.",
      "Critérios Diagnósticos: Anemia normocítica-normocrômica ou microcítica-hipocrômica, em geral; Hemoglobina: < 12 g/dL em mulheres e < 13,5 g/dL em homens; Hematócrito: < 36% em mulheres e < 41% em homens; Reticulocitopenia; Ferro baixo; Ferritina baixa; Capacidade total de ligação do ferro (TIBC) alta; Índice de saturação da transferrina (IST = Fe/TIBC) baixo."
    ],
    nonPharmaTreatment: [
      "Aumentar consumo de alimentos ricos em ferro: carnes vermelhas, fígado, frango, peixe, feijão, lentilha, espinafre, couve.",
      "Associar alimentos ricos em vitamina C (laranja, limão, acerola) para melhorar a absorção.",
      "Evitar chá preto, chá mate, café e leite junto das refeições.",
      "Manter dieta equilibrada, variada e hidratação adequada.",
      "Orientar ingestão com suco cítrico para melhor absorção e evitar uso junto a laticínios ou café."
    ],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS",
        medications: [
          { name: "Sulfato ferroso 120 mg (40 mg Fe++)", details: "Tomar 1 a 5 comprimidos VO ao dia por 3 a 6 meses." },
          { name: "Sulfato ferroso 50mg/ml (Equivalente a 10 mg/ml de ferro)", details: "Tomar 10 ml VO 2x ao dia por 3 a 6 meses." },
          { name: "Ferripolimaltose 100 mg", details: "Tomar 1 cp VO 2x ao dia, preferencialmente após as refeições, por 3 meses." }
        ]
      }
    ],
    patientGuidance: [
      "Alimentação rica em ferro (carnes, feijão, vegetais verde-escuros).",
      "Retornar para reavaliação laboratorial a cada 4–8 semanas.",
      "Procurar atendimento imediato em caso de fraqueza intensa ou síncope.",
      "Atenção a possíveis efeitos colaterais: dor abdominal, constipação, fezes escurecidas.",
      "Seguir o tratamento até o fim, mesmo após melhora dos sintomas."
    ]
  },
  {
    id: 5,
    title: "5. ASCARIDÍASE",
    cid: "B77",
    differentialDiagnosis: "Tricuríase, ancilostomíase, giardíase, síndrome do intestino irritável.",
    initialConduct: [
      "Assintomática na maioria.",
      "Dor abdominal difusa, náuseas, vômitos.",
      "Em grandes infestações: obstrução intestinal, suboclusão ou pancreatite.",
      "Síndrome de Loeffler (tosse seca, febre, infiltrado pulmonar transitório) durante fase larvária."
    ],
    nonPharmaTreatment: [
      "Higienização de alimentos e água.",
      "Uso de saneamento básico."
    ],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS",
        medications: [
          { name: "Albendazol 400 mg", details: "Tomar 1 cp VO 1x ao dia por 3 dias." },
          { name: "Mebendazol 100 mg", details: "Tomar 1 cp VO 12/12h por 3 dias." },
          { name: "Ivermectina 6 mg", details: "Tomar 200 microgramas/kg (1 comprimido para cada 30 kg) VO em dose única." }
        ]
      },
      {
        title: "💎 Opções não SUS",
        medications: [
          { name: "Nitazoxanida 500 mg (Annita ®)", details: "Tomar 1 cp VO de 12/12 horas por 3 dias." }
        ]
      }
    ],
    patientGuidance: [
      "Orientar higiene pessoal e saneamento.",
      "Procurar atendimento se houver sinais de obstrução intestinal.",
      "Repetir exame de fezes se sintomas persistirem."
    ]
  },
  {
    id: 6,
    title: "6. ASMA AGUDA LEVE / MODERADA",
    cid: "J45.0",
    differentialDiagnosis: "Bronquite aguda, pneumonia, anafilaxia, tromboembolismo pulmonar, pneumotórax, insuficiência cardíaca descompensada.",
    initialConduct: [
      "Avaliar saturação de O₂, FR e presença de sibilos difusos.",
      "Oxigenoterapia se SatO₂ < 94%.",
      "Identificar sinais de gravidade (tiragem, uso de musculatura acessória, dificuldade para falar, sonolência).",
      "Crise leve/moderada pode ser tratada em UBS; crise grave deve ser manejada em ambiente hospitalar.",
      "Evitar exposição a desencadeantes (poeira, fumaça, alérgenos).",
      "Avaliar aderência ao tratamento regular.",
      "Rever técnica inalatória (principal causa de falha terapêutica)."
    ],
    nonPharmaTreatment: [
      "Evitar tabagismo ativo e passivo.",
      "Manter ambiente limpo, sem poeira ou mofo.",
      "Incentivar uso de espaçador com aerossol para melhor deposição da droga.",
      "Orientar acompanhamento ambulatorial com pneumologista."
    ],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS",
        medications: [
          { name: "Prednisona 20 mg", details: "Tomar 1 cp VO de 12/12h por 5 dias." },
          { name: "Prednisolona 20 mg", details: "Tomar 2–3 cp VO (40–60 mg) de 24/24h, pela manhã, por 5–7 dias (em risco de evolução para crise grave)." },
          { name: "Salbutamol xarope 2 mg/5 mL", details: "Tomar 5 mL VO de 8/8h se tosse ou chiado no peito." },
          { name: "Salbutamol spray 100 mcg/jato", details: "Inalar 2–4 jatos a cada 4–6h, por até 5 dias. Em exacerbação: 4–6 jatos a cada 20 min até 4h, depois a cada 1–4h conforme necessidade." },
          { name: "Salbutamol gotas 5 mg/mL", details: "Diluir 10–20 gotas em 3–5 mL de SF 0,9% e inalar de 20/20 min na 1ª hora; depois 1/1h se broncoespasmo intenso; manter até 2/2h após controle." },
          { name: "Brometo de Ipratrópio 0,25 mg/mL", details: "Inalar 30 gotas diluídas em 5 mL de SF 0,9% até de 6/6h (em crise moderada)." },
          { name: "Beclometasona spray 200 mcg/jato", details: "Inalar 1 jato junto a cada uso de beta-2-agonista de curta duração." },
          { name: "Budesonida spray 200 mcg/jato", details: "Inalar 1 jato junto a cada uso de beta-2-agonista de curta duração." }
        ]
      },
      {
        title: "💎 Opções não SUS",
        medications: [
          { name: "Formoterol + Budesonida 6/200 mcg", details: "Inalar 1 cápsula sob demanda até de 4/4h (máx. 72 mcg/dia de formoterol). Dose de manutenção – Inalar 1 cápsula de 12/12 horas." },
          { name: "Formoterol + Beclometasona 6/200 mcg", details: "Inalar 1 jato sob demanda até de 4/4h (máx. 72 mcg/dia de formoterol). Dose de manutenção – Inalar 1 cápsula de 12/12 horas." }
        ]
      }
    ],
    proceduresInUnit: [
      "Nebulização com Brometo de Ipratrópio 30 gotas + SF 0,9% 5 mL, até de 6/6h.",
      "Terbutalina 0,5–1,0 mL SC, até de 6/6h.",
      "Hidrocortisona 200 mg EV de ataque, seguida de 100 mg EV 8/8h por 5–7 dias.",
      "Oxigenoterapia se necessário."
    ],
    patientGuidance: [
      "Manter uso dos broncodilatadores conforme prescrito.",
      "Evitar exposição a poeira, fumaça e alérgenos.",
      "Retornar em até 5–7 dias para reavaliação clínica.",
      "Procurar emergência se houver: piora da falta de ar, dor torácica, sibilos persistentes, dificuldade para falar/frases incompletas, sonolência ou coloração arroxeada de lábios."
    ]
  },
  {
    id: 7,
    title: "7. AZIA / DISPEPSIA FUNCIONAL LEVE",
    cid: "K30",
    differentialDiagnosis: "Doença do refluxo gastroesofágico (DRGE), úlcera péptica, gastrite.",
    initialConduct: [
      "Orientar evitar café, álcool, refrigerantes, chocolate e comidas gordurosas/frituras.",
      "Fracionar refeições; não se deitar logo após comer.",
      "Avaliar uso de AINEs, corticoides, antibióticos ou ferro — suspender quando possível.",
      "Considerar causas secundárias (H. pylori, DRGE, uso de drogas ulcerogênicas).",
      "Se suspeita de úlcera péptica rota, encaminhar para internamento."
    ],
    nonPharmaTreatment: [
      "Suspender uso de AINEs sempre que possível.",
      "Controle de peso e perda ponderal, se sobrepeso.",
      "Elevar cabeceira da cama em sintomas noturnos.",
      "Evitar tabaco, álcool, café, chocolate, refrigerantes, alimentos apimentados ou muito gordurosos.",
      "Última refeição deve ser leve e 2–3h antes de deitar."
    ],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS",
        medications: [
          { name: "Omeprazol 20 mg", details: "Tomar 1 cp VO pela manhã, 30 min antes do café, por 14 dias." },
          { name: "Omeprazol 40 mg", details: "Tomar 1 cp VO em jejum, pela manhã, por 1–2 meses (dose plena, casos persistentes)." },
          { name: "Pantoprazol 40 mg", details: "Tomar 1 cp VO 1x/dia por 1–2 meses (casos persistentes)." },
          { name: "Hidróxido de alumínio + Hidróxido de magnésio suspensão", details: "Tomar 10 mL VO após refeições, se sintomas." }
        ]
      },
      {
        title: "✅ Esquema SUS – Erradicação de H. pylori",
        medications: [
            { name: "Omeprazol 20 mg", details: "Tomar 1 cp VO 2x/dia por 14 dias." },
            { name: "Amoxicilina 500 mg", details: "Tomar 2 cp VO 2x/dia por 14 dias." },
            { name: "Claritromicina 500 mg", details: "Tomar 1 cp VO 2x/dia por 14 dias." },
        ]
      },
      {
        title: "✅ Opções SUS – Procinéticos",
        medications: [
            { name: "Domperidona 10 mg", details: "Tomar 1 cp VO 3x/dia, 15 min antes das refeições." },
            { name: "Bromoprida 10 mg", details: "Tomar 1 cp VO 3x/dia, 15 min antes das refeições." },
            { name: "Metoclopramida 10 mg", details: "Tomar 1 cp VO 3x/dia, 15 min antes das refeições." },
        ]
      },
      {
        title: "💎 Opções não SUS",
        medications: [
          { name: "Esomeprazol 40 mg", details: "Tomar 1 cp VO 1x/dia por 14 dias." },
          { name: "Rabeprazol 20 mg", details: "Tomar 1 cp VO 1x/dia por 14 dias." },
          { name: "Dexlansoprazol 60 mg", details: "Tomar 1 cp VO 1x/dia por 14 dias." },
          { name: "Sucralfato 1 g (Comprimido Mastigável)", details: "Tomar 1 cp VO antes das principais refeições e ao deitar-se." },
          { name: "Famotidina 20–40 mg", details: "Tomar 1 cp VO à noite." }
        ]
      }
    ],
    patientGuidance: [
      "Manter o uso do medicamento pelo tempo prescrito, nunca suspender abruptamente (reduzir gradualmente para evitar rebote ácido).",
      "Retornar em 4–6 semanas para reavaliação clínica.",
      "Suspender a medicação 2 semanas antes da endoscopia, se exame for indicado.",
      "Retornar imediatamente se houver: dor intensa, vômitos com sangue ou fezes escuras (melena)."
    ]
  },
  {
    id: 8,
    title: "8. CALÁZIO / HORDÉOLO",
    cid: "H00.1",
    differentialDiagnosis: "Hordéolo, blefarite, tumor de pálpebra.",
    initialConduct: [
      "CALÁZIO: Definição: É uma inflamação localizada na pálpebra, geralmente não dolorosa e não infecciosa, resultante da obstrução das glândulas meibomianas. Histologicamente, é caracterizado por uma inflamação lipogranulomatosa.",
      "HORDÉOLO: Definição: É uma infecção aguda na pálpebra, geralmente dolorosa e de origem infecciosa. Pode ser externa ou interna. Fisiopatologia: abscesso associado à infecção por Staphylococcus. Pode evoluir para celulite pré-septal."
    ],
    nonPharmaTreatment: [
      "Compressas mornas por 10 minutos, 4x/dia, com massagem suave sobre a lesão."
    ],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS (Se blefarite associada)",
        medications: [
          { name: "Doxiciclina 100 mg", details: "Tomar 1 cp VO a cada 12 h, por até 4 semanas." }
        ]
      },
      {
        title: "💎 Opções não SUS (Uso Tópico Ocular)",
        medications: [
          { name: "Tobramicina 0,3% (pomada oftalmológica 3,5 g)", details: "Aplicar ~1 cm no saco conjuntival inferior e sobre a pálpebra, 3–4x/dia, por 7–14 dias." },
          { name: "Ciprofloxacino + dexametasona (pomada)", details: "Aplicar fina camada no saco conjuntival inferior e na pálpebra externa, 3–4x/dia, por 7–14 dias." }
        ]
      }
    ],
    patientGuidance: [
      "Não espremer a lesão.",
      "Procurar oftalmologista se persistir > 1 mês ou se houver piora."
    ]
  },
  {
    id: 9,
    title: "9. CANCRO MOLE (Cancróide)",
    cid: "A57",
    differentialDiagnosis: "Sífilis (cancro duro), herpes genital, linfogranuloma venéreo, donovanose.",
    initialConduct: [
      "IST causada pelo Haemophilus ducreyi.",
      "Úlcera genital dolorosa, de bordas irregulares, fundo sujo e purulento, com linfonodomegalia inguinal dolorosa (bubão).",
      "Diagnóstico clínico, em áreas endêmicas, Cultura ou PCR (quando disponível)."
    ],
    nonPharmaTreatment: [],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS",
        medications: [
          { name: "Azitromicina 500 mg", category: "(Primeira escolha)", details: "Tomar 2 cp VO em dose única." },
          { name: "Ciprofloxacino 500 mg", details: "Tomar 1 cp VO de 12/12 horas por 3 dias." },
          { name: "Eritromicina 500 mg", details: "Tomar 1 cp VO de 6/6h por 7 dias." },
          { name: "Ceftriaxona 250 mg", details: "Aplicar 1 ampola IM, dose única." }
        ]
      }
    ],
    patientGuidance: [
      "Usar preservativos em caso de relação sexual.",
      "Orientar o(a) parceiro(a) a realizar o tratamento.",
      "Retornar em 7 dias para reavaliação."
    ]
  },
  {
    id: 10,
    title: "10. CANDIDÍASE / MONILÍASE ORAL (SAPINHO)",
    cid: "B37.0",
    differentialDiagnosis: "Leucoplasia, líquen plano, estomatite aftosa, herpes.",
    initialConduct: [
      "Placas brancas que saem à raspagem, em mucosa oral.",
      "Mais comum em imunossuprimidos, idosos, lactentes, uso de corticoide inalatório."
    ],
    nonPharmaTreatment: [],
    pharmaTreatments: [
      {
        title: "✅ Opções SUS",
        medications: [
          { name: "Nistatina suspensão oral 100.000 UI/mL", details: "Fazer bochechos com 5 mL, 4x/dia, por 7–14 dias (deglutir após bochecho)." },
          { name: "Fluconazol 150 mg", details: "Tomar 1 cp VO a cada 7 dias, por 2 semanas (em casos mais extensos ou refratários)." }
        ]
      }
    ],
    patientGuidance: [
      "Higienizar próteses dentárias diariamente.",
      "Lavar a boca após uso de corticoides inalatórios."
    ]
  },
  {
    id: 11,
    title: "11. CEFALEIAS PRIMÁRIAS (CEFALEIA TENSIONAL / ENXAQUECA)",
    cid: "G44.2 / G43",
    differentialDiagnosis: "Sinusite, cefaleia secundária a infecção ou hipertensão.",
    initialConduct: [
        "Investigar sinais de alerta – cefaleia secundária (cefaleia súbita intensa, déficit neurológico, febre alta, rigidez de nuca).",
        "Evitar uso excessivo de analgésicos para prevenir cefaleia por abuso medicamentoso.",
        "Considerar abordagem não farmacológica: repouso em ambiente silencioso, hidratação."
    ],
    nonPharmaTreatment: [
        "Diagnóstico de Enxaqueca – Esquema Resumido",
        "Enxaqueca sem aura: Crises: 4–72h (sem tratamento). ≥2 características da dor: Unilateral, Pulsátil, Moderada/grave, Piora com esforço físico. Durante a dor – pelo menos 1: Náusea e/ou vômitos, Fotofobia e fonofobia.",
        "Enxaqueca com aura: ≥2 crises compatíveis. Aura reversível (visual, sensorial, linguagem, motor, retiniano). ≥3 dos critérios abaixo: Sintoma de aura se espalha em ≥5 min, ≥2 sintomas em sequência, Cada sintoma dura 5–60 min, Pelo menos 1 sintoma é positivo (ex.: luzes, formigamento), Aura acompanhada ou seguida de cefaleia em até 60 min."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6h se dor." },
                { name: "Ibuprofeno 300 mg", details: "Tomar 1 cp VO 12/12h por até 5 dias." },
                { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de a 6/6h se dor." },
                { name: "Ácido acetilsalicílico 500 mg", details: "Tomar 1 cp VO de 6/6 horas se dor." },
                { name: "Diclofenaco 50 mg", details: "Tomar 1 cp VO de 8/8 horas por até 5 dias." },
                { name: "Ibuprofeno 600 mg", details: "Tomar 1 cp VO de 12/12 horas por até 5 dias." }
            ]
        },
        {
            title: "💎 Opções não SUS (Enxaqueca)",
            medications: [
                { name: "Naproxeno 500 mg", details: "Tomar 1 cp VO de 12/12 horas até 5 dias." },
                { name: "Sumatriptano 50 mg", details: "Tomar 1 cp (50 a 100 mg) VO ao início da crise. Dose máxima: 200 mg/dia." },
                { name: "Zolmitriptano 2,5 mg", details: "Tomar 1 cp (2,5 mg) VO ao início da crise. Dose máxima: 10 mg/dia." }
            ]
        },
        {
            title: "✅ Tratamento profilático – Enxaqueca (Opções SUS)",
            medications: [
                { name: "Amitriptilina 10 mg", details: "Tomar 1 cp VO à noite." },
                { name: "Nortiptilina 10 mg", details: "Tomar 1 cp VO à noite." },
                { name: "Gabapentina 300 mg", details: "Tome 1 cp VO de 12/12 horas." },
                { name: "Ácido Valpróico 250 mg", details: "Tomar 1 cp VO 3–4x/dia." }
            ]
        },
        {
            title: "💎 Tratamento profilático – Enxaqueca (Opções não SUS)",
            medications: [
                { name: "Topiramato 25 mg", details: "Iniciar com 25 mg VO à noite, (podendo ajustar até 50–200 mg/dia conforme resposta)." },
                { name: "Venlafaxina 75 mg", details: "Iniciar com 75 mg VO/dia, (podendo ajustar até 225 mg/dia conforme tolerância clínica.)" },
                { name: "Flunarizina 10 mg", details: "Tomar 5 a 10 mg VO/dia, preferencialmente à noite." }
            ]
        }
    ],
    proceduresInUnit: [
        "Dipirona 500mg/ml: Aplicar 1 ampola EV ou IM, dose única (2 ml).",
        "Cetoprofeno 50mg/ml: Aplicar 1 ampola IM, dose única (2 ml).",
        "Dexametasona 8 mg: Aplicar 1 ampola EV, em dose única.",
        "Metoclopramida 10 mg/ 2ml: Aplicar 1 ampola EV, de 8/8 horas se náuseas e/ou vômitos."
    ],
    patientGuidance: [
        "Procurar atendimento imediato se: Dor súbita, intensa e diferente do padrão habitual (“pior dor da vida”), Dor associada a febre, rigidez de nuca, vômitos persistentes ou alterações neurológicas, Cefaleias que pioram progressivamente ou mudam de padrão.",
        "Manter hidratação e regularidade no sono.",
        "Avaliar fatores desencadeantes (estresse, postura, jejum prolongado)."
    ]
  },
  {
      id: 12,
      title: "12. CELULITE",
      cid: "L03.9",
      differentialDiagnosis: "Erisipela, abscesso cutâneo, fasciíte necrosante, trombose venosa profunda, reação alérgica local.",
      initialConduct: [
          "Diagnóstico clínico, geralmente sem necessidade de exames complementares em casos leves.",
          "Investigar sinais de gravidade (febre, calafrios, hipotensão, taquicardia persistente, confusão mental).",
          "Casos leves → antibiótico VO.",
          "Casos moderados/graves → antibiótico EV e avaliar internação.",
          "Investigar fatores de risco para MRSA (diabetes, internações recentes, uso prévio de antibióticos, infecções cutâneas recorrentes).",
          "Exposição a água (doce, mar ou esgoto) → considerar cobertura para Gram-negativos e anaeróbios.",
          "Duração média do tratamento: 5–14 dias, conforme resposta clínica."
      ],
      nonPharmaTreatment: [
          "Elevar o membro afetado para reduzir edema.",
          "Aplicar compressas frias por 15 minutos, 3–6x/dia.",
          "Higienizar a pele com água e sabão neutro.",
          "Tratar micoses interdigitais e úlceras crônicas associadas.",
          "Considerar uso de meias elásticas após resolução em pacientes com linfedema/insuficiência venosa."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Cefalexina 500 mg", details: "Tomar 1 cp VO de 6/6 h por 7–10 dias." },
                  { name: "Amoxicilina + Clavulanato 875/125 mg", details: "Tomar 1 cp VO de 12/12 h por 7–10 dias." }
              ]
          },
          {
              title: "➡️ Se alergia a beta-lactâmicos",
              medications: [
                  { name: "Sulfametoxazol + Trimetoprima 800/160 mg", details: "Tomar 1 cp VO de 12/12 h por 7–10 dias." },
                  { name: "Metronidazol 500 mg", details: "Tomar 1 cp VO de 6/6 h (em casos de exposição à água contaminada por esgoto)." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Linezolida 600 mg", details: "Tomar 1 cp VO de 12/12 h por 7–10 dias (em casos de exposição à água do mar)." },
                  { name: "Doxiciclina 100 mg", details: "Tomar 1 cp VO de 12/12 h por 7–10 dias (em casos de exposição à água contaminada por esgoto)." },
                  { name: "Levofloxacino 750 mg", details: "Tomar 1 cp VO 1x/dia (em casos de exposição à água)." }
              ]
          }
      ],
      patientGuidance: [
          "Manter o membro elevado sempre que possível.",
          "Higienizar a pele com água e sabão neutro diariamente.",
          "Evitar coçar ou manipular a área afetada.",
          "Completar todo o ciclo do antibiótico prescrito.",
          "Retornar imediatamente se houver febre persistente, dor intensa, expansão rápida da área eritematosa ou sinais de sepse.",
          "Após melhora, considerar medidas de prevenção de recorrência (tratamento de micoses, cuidados com feridas crônicas, meias elásticas em linfedema)."
      ]
  },
  {
      id: 13,
      title: "13. CERUME IMPACTADO / CERA",
      cid: "H61.2",
      differentialDiagnosis: "Corpo estranho em conduto auditivo, otite externa, otomicoses.",
      initialConduct: [
          "Confirmar diagnóstico por otoscopia.",
          "Não tentar retirar manualmente sem visualização adequada.",
          "Evitar uso de objetos para limpeza do ouvido."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Cerumin® (Hidroxiquinolina + Trolamina)", details: "Aplicar 5 gotas no ouvido afetado, manter a cabeça inclinada por 5 minutos, 6/6 h por 5 dias." },
                  { name: "Aceratum® (Peróxido de carbamida 100 mg/mL)", details: "Pingar 5-10 gotas no canal auditivo 2x/dia, por até 4 dias consecutivos." }
              ]
          }
      ],
      patientGuidance: [
          "Não usar hastes flexíveis ou objetos para remover cera.",
          "Retornar para avaliação se houver dor, secreção ou perda auditiva persistente.",
          "Repetir limpeza profissional apenas quando indicado."
      ]
  },
  {
      id: 14,
      title: "14. CISTITE AGUDA / ITU BAIXA NÃO COMPLICADA",
      cid: "N30.0",
      differentialDiagnosis: "Pielonefrite, vaginite, uretrite, prostatite (em homens).",
      initialConduct: [
          "Sintomas típicos: disúria, polaciúria, urgência urinária, ausência de febre alta.",
          "Estímulo à hidratação e micção frequente.",
          "Evitar uso desnecessário de antibióticos de amplo espectro."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Sulfametoxazol + trimetoprima (800 mg + 160 mg)", details: "Tomar 1 cp VO de 12/12 horas, por 3 dias." },
                  { name: "Nitrofurantoína 100 mg", details: "Tomar 1 cp VO de 6/6 horas, por 5 dias." },
                  { name: "Cefalexina 500 mg", details: "Tomar 1 cp VO de 6/6 horas, por 5–7 dias." },
                  { name: "Amoxicilina com Clavulanato (500mg + 125 mg)", details: "Tomar 1 cp VO de 8/8 horas por 5 a 7 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Fosfomicina trometamol (Monuril® ou Traturil®)", details: "Dissolver em água e tomar VO em dose única, de preferência à noite, após urinar." }
              ]
          },
          {
              title: "Analgesia se disúria intensa",
              medications: [
                  { name: "Fenazopiridina 200 mg", details: "Tomar 1 cp VO 3x/dia, por até 3 dias." },
                  { name: "Buscopan Composto", details: "Tomar 1 cp VO 6/6h se dor abdominal ou febre." },
                  { name: "Tropinal", details: "Tomar 1 cp VO 8/8 h se dor abdominal." }
              ]
          }
      ],
      patientGuidance: [
          "Aumentar ingestão de água.",
          "Evitar segurar urina.",
          "Retornar se houver febre alta, dor lombar ou persistência dos sintomas."
      ]
  },
  {
      id: 15,
      title: "15. CLAMÍDIA",
      cid: "A56",
      differentialDiagnosis: "Gonorreia, tricomoníase, vaginose bacteriana, candidíase.",
      initialConduct: [
          "Infecção causada por Chlamydia trachomatis, a IST bacteriana mais comum. Pode causar uretrite, cervicite, DIP, infertilidade.",
          "Diagnóstico: Clínico (corrimento mucopurulento, disúria, dor pélvica). Confirmação: PCR ou imunofluorescência (quando disponível)."
      ],
      nonPharmaTreatment: [
        "Observação! Aconselha-se tratar concomitantemente infecção gonocócica (gonorreia). As parcerias sexuais devem ser tratadas, mesmo se assintomáticas."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS - Esquema A: Primeira linha",
              medications: [
                  { name: "Doxiciclina 100 mg", details: "Tomar 1 cp VO 12/12h por 7 dias." },
                  { name: "Ceftriaxona 500 mg", details: "Aplicar 1 ampola IM, dose única." }
              ]
          },
          {
              title: "Esquema B: Segunda linha:",
              medications: [
                  { name: "Azitromicina 500 mg", details: "Tomar 2 cp VO em dose única." },
                  { name: "Ceftriaxona 500 mg", details: "Aplicar 1 ampola IM, dose única." }
              ]
          }
      ],
      patientGuidance: [
          "Tratar parceiros sexuais.",
          "Explicar risco de infertilidade e DIP em mulheres não tratadas.",
          "Evitar relação sexual até fim do tratamento."
      ]
  },
  {
      id: 16,
      title: "16. CÓLICA BILIAR / LITÍASE BILIAR",
      cid: "K80.2",
      differentialDiagnosis: "Apendicite, gastrite, dor musculoesquelética abdominal.",
      initialConduct: [
          "Avaliar intensidade da dor, presença de febre, vômitos ou sinais de complicação (colecistite, colangite).",
          "Estimular hidratação oral (exceto se vômitos intensos).",
          "Solicitar exame de imagem se diagnóstico incerto ou dor refratária."
      ],
      nonPharmaTreatment: [
          "Jejum absoluto durante a crise (a ingestão de alimentos pode estimular a contração da vesícula e piorar a dor).",
          "Após melhora, manter dieta leve e fracionada, evitando alimentos gordurosos, frituras e embutidos.",
          "Incentivar hidratação adequada com água, chás claros ou caldos leves (quando tolerado)."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6h se dor." },
                  { name: "Metoclopramida 10 mg", details: "Tomar 1 cp VO 8/8h se náuseas ou vômitos." },
                  { name: "Bromoprida 10 mg", details: "Tomar 1 cp VO 8/8h se náuseas ou vômitos." },
                  { name: "Ondansetrona 8 mg", details: "Tomar 1 cp VO 8/8h se náuseas ou vômitos." },
                  { name: "Tramadol 50 mg", details: "Tomar 1 cp VO 8/8h se dor intensa, refratária a analgésicos comuns." },
                  { name: "Buscopan Composto", details: "Tomar 1 cp VO 6/6h se dor abdominal." }
              ]
          }
      ],
      proceduresInUnit: [
        "1) SF 0,9% 100 ml + Metoclopramida 1 ampola + Buscopan composto 1 ampola, infundir EV em 30 min.",
        "2) Se dor persistente: Tramadol 1 ampola + SF 0,9% 100 mL EV em 30 min."
      ],
      patientGuidance: [
          "Retornar se dor intensa não aliviar, febre persistir ou houver icterícia (ficar amarelo).",
          "Evitar automedicação excessiva com analgésicos sem avaliação médica.",
          "Procurar serviço de referência para tratamento definitivo (colecistectomia ou acompanhamento gastro/hepatobiliar)."
      ]
  },
  {
      id: 17,
      title: "17. CÓLICA RENAL (LITÍASE URINÁRIA)",
      cid: "N20.0",
      differentialDiagnosis: "Infecção urinária, pielonefrite, abdome agudo, apendicite.",
      initialConduct: [
          "Dor intensa em flanco irradiando para região inguinal, geralmente súbita, associada a náuseas e/ou vômitos.",
          "Solicitar exame de urina e, se disponível, USG ou TC de abdome.",
          "Hidratação oral se possível; suspender via oral se vômitos intensos."
      ],
      nonPharmaTreatment: [
        "Aviso: Use tansulosina em casos de cálculos de 4 a 10 mm e mais baixos (próximos à bexiga)."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Dipirona sódica 1000 mg", details: "Tomar 1 cp VO até de 6/6 h se dor." },
                  { name: "Paracetamol 500", details: "Tomar VO até de 6/6h se dor." },
                  { name: "Metoclopramida 10 mg", details: "Tomar 1 cp VO de 8/8 horas se náuseas ou vômitos." },
                  { name: "Bromoprida 10 mg", details: "Tomar 1 cp VO de 8/8 horas se náuseas ou vômitos." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Cetorolaco de trometamol 10 mg SL", details: "Tomar 10 mg SL de 4/4h ou 6/6h. Máximo 40 mg/dia." },
                  { name: "Ondansetrona 8 mg", details: "Tomar SL de 8/8h se náuseas ou vômitos." },
                  { name: "Tansulosina 0,4 mg (cápsula)", details: "Tomar 1 cápsula VO à noite, por até 4–6 semanas (para cálculos > 5 mm e ≤ 10 mm)." }
              ]
          }
      ],
      proceduresInUnit: [
          "Cetoprofeno 100 mg EV: Administrar 1 ampola diluída em SF 0,9% 100 ml em 30 minutos.",
          "Dipirona 500 mg/ml: Administrar EV lenta, dose se dor intensa.",
          "Diclofenaco sódico 75 mg/1 mL (ampola): Aplicar 75 mg IM.",
          "Metoclopramida 10mg/2ml: Administrar 1 ampola EV se náuseas e/ou vômitos.",
          "Ondansetrona 4 mg/2ml: Administrar 1 ampola EV se náuseas e/ou vômitos."
      ],
      patientGuidance: [
          "Manter hidratação abundante.",
          "Procurar atendimento imediato se houver febre, anúria (parada de urinar) ou dor intratável.",
          "Agendar acompanhamento urológico."
      ]
  },
  {
      id: 18,
      title: "18. CONJUNTIVITE ALÉRGICA",
      cid: "H10.1",
      differentialDiagnosis: "Conjuntivite bacteriana, viral, ceratite.",
      initialConduct: [
          "Avaliar prurido ocular, lacrimejamento e hiperemia bilateral.",
          "Identificar e evitar alérgenos desencadeantes.",
          "Evitar coçar os olhos."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Loratadina 10 mg", details: "Tomar 1 cp VO 1x/dia." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Olopatadina 0,1% colírio", details: "Instilar 1 gota em cada olho, 2x/dia." }
              ]
          }
      ],
      patientGuidance: [
          "Evitar uso de lentes de contato até resolução.",
          "Lavar pálpebras com água fria para alívio dos sintomas."
      ]
  },
  {
      id: 19,
      title: "19. CONJUNTIVITE BACTERIANA AGUDA",
      cid: "H10.9",
      differentialDiagnosis: "Ceratite, uveíte, corpo estranho, blefarite, conjuntivite alérgica.",
      initialConduct: [
          "Avaliar se o quadro é bacteriano, viral ou alérgico.",
          "Investigar presença de secreção purulenta (mais comum em bacteriana).",
          "Examinar ambos os olhos — mesmo que apenas um esteja sintomático.",
          "Evitar uso de colírios com corticoide sem avaliação oftalmológica."
      ],
      nonPharmaTreatment: [
          "Higienizar as mãos antes e após tocar nos olhos.",
          "Evitar coçar os olhos para reduzir a disseminação da infecção.",
          "Limpar secreções com gaze ou algodão embebido em soro fisiológico 0,9% estéril, várias vezes ao dia.",
          "Usar compressas mornas sobre os olhos para aliviar o desconforto.",
          "Evitar o uso compartilhado de toalhas, fronhas e maquiagem.",
          "Suspender temporariamente o uso de lentes de contato até a resolução completa do quadro.",
          "Manter afastamento de atividades escolares/profissionais quando houver secreção abundante, até melhora."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Tobramicina 0,3% colírio", details: "Aplicar 1 gota no(s) olho(s) afetado(s) a cada 6 horas, por 5 a 7 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Moxifloxacino 0,5% colírio", details: "Aplicar 1 gota no(s) olho(s) afetado(s) a cada 6 horas, por 5 a 7 dias." },
                  { name: "Gatifloxacino 0,3% colírio", details: "Aplicar 1 gota no(s) olho(s) afetado(s) a cada 6 horas, por 5 a 7 dias." }
              ]
          }
      ],
      patientGuidance: [
          "Fazer compressas frias no olho afetado por 20 minutos, 3–4x/dia.",
          "Lavar bem as mãos antes e após tocar nos olhos ou aplicar colírio.",
          "Evitar coçar, esfregar ou lavar continuamente os olhos com soro fisiológico.",
          "Suspender o uso de lentes de contato até a completa resolução dos sintomas.",
          "Fazer higiene das pálpebras e cílios com gaze/algodão embebido em soro fisiológico 0,9% (descartar após o uso).",
          "Não compartilhar toalhas, travesseiros, óculos ou maquiagem; trocar roupas de cama e toalhas diariamente.",
          "Procurar atendimento médico se houver dor intensa, visão borrada ou piora após 48h de tratamento."
      ]
  },
  {
      id: 20,
      title: "20. CONJUNTIVITE VIRAL",
      cid: "B30.9",
      differentialDiagnosis: "Conjuntivite bacteriana, conjuntivite alérgica, corpo estranho ocular.",
      initialConduct: [
          "Diagnóstico clínico baseado em hiperemia conjuntival, secreção aquosa e prurido leve.",
          "Orientar higiene ocular: limpeza da secreção com gaze umedecida em água limpa ou soro fisiológico sem conservante.",
          "Suspender uso de lentes de contato até 24h após resolução do quadro.",
          "Orientar afastamento escolar/profissional por 7 dias ou até melhora clínica.",
          "Informar que a maioria dos casos apresenta resolução espontânea em 1–2 semanas (65% em até 5 dias)."
      ],
      nonPharmaTreatment: [
          "Compressas de água gelada por 15 minutos, 4x/dia.",
          "Lavar a secreção ocular com gaze umedecida em soro fisiológico gelado ou água limpa e fervida, ao acordar e sempre que necessário."
      ],
      pharmaTreatments: [
          {
              title: "Tratamento Farmacológico",
              medications: [
                {name: "Não há tratamento antiviral específico.", details: "A maioria dos casos evolui com resolução espontânea, não sendo necessária medicação. Pode-se prescrever lubrificantes oculares (lágrimas artificiais sem conservante) em casos de desconforto ocular."}
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Hialuronato de sódio a 0,15%", details: "Pingar 1 gota em cada olho de 4 a 8x ao dia até melhor dos sintomas." }
              ]
          }
      ],
      patientGuidance: [
          "Não compartilhar toalhas, fronhas ou lençóis.",
          "Lavar as mãos com frequência e evitar coçar os olhos.",
          "Utilizar álcool 70% para higienizar superfícies (maçanetas, celulares, controles remotos, bancadas).",
          "Suspender o uso de lentes de contato até melhora completa.",
          "Retornar ao serviço médico se houver dor ocular intensa, visão borrada persistente, fotofobia importante ou secreção purulenta."
      ]
  },
  {
    id: 21,
    title: "21. CONSTIPAÇÃO FUNCIONAL",
    cid: "K59.0",
    differentialDiagnosis: "Síndrome do intestino irritável, obstrução intestinal, megacólon, constipação secundária a medicamentos.",
    initialConduct: [
        "Avaliar duração e características do hábito intestinal.",
        "Investigar sinais de alarme: dor abdominal intensa, vômitos, sangue nas fezes, emagrecimento não intencional.",
        "Corrigir fatores de risco: dieta pobre em fibras, sedentarismo, baixa ingesta de líquidos."
    ],
    nonPharmaTreatment: [
        "Ingestão hídrica adequada: estimular consumo de 1,5–2 L de água por dia.",
        "Dieta rica em fibras: incluir frutas, verduras, legumes e cereais integrais.",
        "Atividade física regular: exercícios aeróbicos e caminhadas.",
        "Educação evacuatória: orientar evacuar sempre que sentir vontade, preferir horários regulares.",
        "Higiene postural: posição correta no vaso sanitário (pés apoiados em banquinho).",
        "Redução de alimentos constipantes: excesso de ultraprocessados, laticínios gordurosos.",
        "Manter rotina intestinal: incentivar regularidade."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [{ name: "Óleo mineral", details: "Tomar 15 mL VO de 8/8h por até 7 dias, se fezes endurecidas." }]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Muvinlax® (Macrogol 13,125 g + eletrólitos)", details: "Dissolver 1 sachê em 200 mL de água e tomar 1 a 2x/dia." },
                { name: "Provance®", details: "Tomar 1 sachê ao dia." },
                { name: "Lactulose (xarope)", details: "Tomar 15 mL VO 1x/dia. Pode aumentar até 30 mL/dia." },
                { name: "Minilax®", details: "Aplicar 1 bisnaga via retal, 1x ao dia, se necessário." }
            ]
        }
    ],
    proceduresInUnit: [
        "Fosfato de sódio (Fleet Enema): Aplicar 1 enema por via retal, dose única."
    ],
    patientGuidance: [
        "Aumentar ingestão de água (mínimo 2 L/dia).",
        "Incluir fibras na dieta (frutas, verduras e cereais integrais).",
        "Praticar atividade física regular.",
        "Evitar segurar vontade de evacuar."
    ]
  },
  {
      id: 22,
      title: "22. CONTUSÃO MUSCULAR",
      cid: "T14.0",
      differentialDiagnosis: "Fratura, ruptura muscular, luxação.",
      initialConduct: [
          "História de trauma direto com dor localizada.",
          "Avaliar amplitude de movimento e excluir fratura.",
          "Aplicar gelo nas primeiras 48 h."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO a cada 6 h, se dor." },
                  { name: "Ibuprofeno 600 mg", details: "Tomar 1 cp VO a cada 8 h, por até 5 dias, se não houver contraindicação." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Gel de diclofenaco dietilamônio 11,6 mg/g", details: "Aplicar na área afetada, 3x/dia, por até 7 dias." }
              ]
          }
      ],
      proceduresInUnit: [
          "Cetoprofeno 100 mg EV: Administrar 1 ampola diluída em SF 0,9% 100 ml em 30 minutos.",
          "Diclofenaco sódico 75 mg/1 mL (ampola): Aplicar 75 mg IM."
      ],
      patientGuidance: [
          "Repouso relativo da musculatura afetada.",
          "Trocar gelo por calor após 48 h, se dor persistir."
      ]
  },
  {
      id: 23,
      title: "23. CRISE CONVULSIVA / EPILEPSIA",
      cid: "G40.9",
      differentialDiagnosis: "Síncope, hipoglicemia, AVC, TCE, intoxicações.",
      initialConduct: [
          "Garantir segurança do paciente, evitar contenção física forçada.",
          "Avaliar via aérea, respiração e circulação.",
          "Verificar glicemia capilar."
      ],
      nonPharmaTreatment: [
        "Não iniciar antiepilépticos sem histórico confirmado. Encaminhar para neurologista."
      ],
      pharmaTreatments: [],
      proceduresInUnit: [
          "Diazepam 10 mg: Administrar 1 ampola EV lenta ou via retal, dose única, se crise ativa.",
          "Oxigênio suplementar se SatO₂ < 94%.",
          "Fenitoína (Hidantal®) 50 mg/mL – ampola: Dose de ataque: 15–18 mg/kg EV diluído em SF 0,9% (máx. 1.500 mg). Infundir lentamente (máx. 50 mg/min). Monitorar ECG e PA durante a infusão."
      ],
      patientGuidance: [
          "Explicar necessidade de investigação.",
          "Evitar dirigir e operar máquinas até avaliação médica."
      ]
  },
  {
      id: 24,
      title: "24. CRISE HIPERTENSIVA",
      cid: "I16.0 / I16.1",
      differentialDiagnosis: "AVC, dissecção de aorta, SCA, feocromocitoma, pré-eclâmpsia/eclâmpsia.",
      initialConduct: [
          "Urgência hipertensiva: PA ≥ 180/120 mmHg sem lesão aguda de órgão-alvo. Meta de redução: 160x100 mmHg ou ↓ 20–25% da PA em 24–48 h.",
          "Emergência hipertensiva: PA ≥ 180/120 mmHg com lesão aguda de órgão-alvo. Meta de redução: Reduzir até 25% da PA na primeira hora alvo de 160x100 mmHg em 2–6 h."
      ],
      nonPharmaTreatment: [
          "Repouso em ambiente calmo e silencioso.",
          "Dieta oral para hipertensos.",
          "Hidratação venosa geralmente não necessária."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS (Urgência)",
              medications: [
                  { name: "Captopril 25–50 mg", details: "Tomar 1 cp VO até a cada 8 horas." },
                  { name: "Clonidina 0,15 mg", details: "Tomar 1 cp VO a cada 8–24 horas." },
                  { name: "Hidralazina 25–50 mg", details: "Tomar 1 cp VO a cada 6–8 horas." }
              ]
          }
      ],
      proceduresInUnit: [
          "Tratamento inicial no pronto atendimento (Emergência):",
          "USO ORAL: Captopril 25–50 mg (Tomar 1 cp VO até a cada 8 horas), Clonidina 0,1–0,2 mg (Tomar 1 cp VO a cada 8–24 horas), Hidralazina 25–50 mg (Tomar 1 cp VO a cada 6–8 horas).",
          "USO EV: Metoprolol 5 mg/5 mL (½–1 ampola EV, diluir e adm. lentamente), Hidralazina 20 mg/1 mL (1 ampola EV lenta, repetir se necessário)."
      ],
      patientGuidance: [
          "Não interromper abruptamente o tratamento anti-hipertensivo habitual.",
          "Evitar sal em excesso, álcool e estimulantes (café, energéticos).",
          "Procurar atendimento se houver dor torácica, falta de ar, alterações neurológicas ou piora da pressão arterial.",
          "Após estabilização, manter acompanhamento ambulatorial."
      ]
  },
  {
      id: 25,
      title: "25. DENGUE – GRUPO A/B",
      cid: "A90",
      differentialDiagnosis: "Zika, Chikungunya, febre amarela, leptospirose, febre tifoide, influenza.",
      initialConduct: [
          "Grupo A: Exames a critério médico. Prescrever Paracetamol/Dipirona. Não utilizar salicilatos ou AINEs. Orientar repouso e hidratação.",
          "Grupo B: Solicitar hemograma completo. Avaliar hematócrito. Manter em observação. Prescrever hidratação oral como no grupo A. Notificar o caso."
      ],
      nonPharmaTreatment: [
          "Se hematócrito normal: Tratamento ambulatorial, reavaliação em 48h. Retorno imediato se sinais de alarme. Orientar eliminação de criadouros do Aedes aegypti.",
          "Se surgirem sinais de alarme: Tratar como Grupo C (referenciar para hospital).",
          "Hidratação Oral: Adultos: 60 mL/kg/dia (⅓ Soro caseiro/SRO, ⅔ outros líquidos)."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Dipirona sódica 500 mg", details: "Tomar 1 cp VO de 4/4 h se dor ou febre (máx. 5 g/dia)." },
                  { name: "Paracetamol 500 mg", details: "Tomar 1 cp VO de 6/6 h se dor ou febre." },
                  { name: "Metoclopramida 10 mg", details: "Tomar 1 cp VO de 8/8 h se náuseas ou vômitos." },
                  { name: "Bromoprida 10 mg", details: "Tomar 1 cp VO de 8/8 h se náuseas ou vômitos." },
                  { name: "Omeprazol 20 mg", details: "Tomar 1 cp VO 1x/dia, pela manhã, em jejum." },
                  { name: "Pantoprazol 40 mg", details: "Tomar 1 cp VO 1x/dia, pela manhã, em jejum." },
                  { name: "Loratadina 10 mg", details: "Tomar 1 cp VO 1x ao dia se coceira." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Pasta d água", details: "Aplicar nas áreas afetadas, 2-3x ao dia." },
                  { name: "Bilastina 20 mg", details: "Tomar 1 cp VO ao dia se coceira." }
              ]
          }
      ],
      proceduresInUnit: [
        "Soro fisiológico 0,9% (SF 0,9%): 1.000 mL. Infundir EV em 4–6 horas, conforme necessidade clínica e reavaliação. (Se Grupo B, coletar hemograma completo)."
      ],
      patientGuidance: [
          "Procurar imediatamente atendimento médico se apresentar: Dor abdominal forte, Vômitos repetidos, Sangramentos, Tontura, Sonolência excessiva, etc.",
          "Atenção: Não use aspirina (ácido acetilsalicílico) ou anti-inflamatórios."
      ]
  },
  {
      id: 26,
      title: "26. DERMATITE DE CONTATO",
      cid: "L23 (alérgica) / L24 (irritativa)",
      differentialDiagnosis: "Dermatite atópica, psoríase, escabiose, micoses superficiais, fitofotodermatose.",
      initialConduct: [
          "Identificar e afastar o agente desencadeante (cosméticos, metais, produtos químicos, plantas).",
          "Higienizar a pele com sabonete neutro/pH 5,5, secar sem friccionar.",
          "Evitar calor, suor, fricção e exposição a substâncias irritantes.",
          "Usar roupas leves, arejadas e produtos hipoalergênicos.",
          "Tratar infecção secundária, se houver."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Hidrocortisona 1% creme", details: "Aplicar fina camada sobre a lesão, 2x/dia, por até 7 dias." },
                  { name: "Loratadina 10 mg", details: "Tomar 1 cp VO 1x/dia, por até 7 dias." },
                  { name: "Dexclorfeniramina 2 mg", details: "Tomar 1 cp VO a cada 8 h, por até 7 dias (pode causar sonolência)." },
                  { name: "Prednisona 20 mg", details: "Casos graves/extensos: Tomar 1 cp VO 1x/dia, por 5–7 dias, com desmame rápido." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Hidroxizina 25 mg", details: "Tomar 1 cp VO a cada 8 horas, se necessário." },
                  { name: "Fexofenadina 180 mg", details: "Tomar 1 cp VO 1x/dia." },
                  { name: "Bilastina 20 mg", details: "Tomar 1 cp VO 1x/dia." },
                  { name: "Desonida 0,5 mg/g", details: "Aplicar fina camada, 2x/dia, por até 7 dias." },
                  { name: "Furoato de mometasona 0,1% creme", details: "Aplicar fina camada, 1x/dia, por até 7 dias." }
              ]
          }
      ],
      proceduresInUnit: [
        "Prometazina 25mg/ml (Fenergan®): Aplicar 1 ampola IM.",
        "Hidrocortisona 100 mg (Solu-Cortef ®): Aplicar EV lento (em 30 segundos)."
      ],
      patientGuidance: [
          "Evitar a substância que causou a reação.",
          "Não coçar e evitar banhos quentes prolongados.",
          "Procurar atendimento se houver piora, secreção purulenta, febre.",
          "Usar roupas leves e arejadas."
      ]
  },
  {
      id: 27,
      title: "27. DERMATITE SEBORREICA",
      cid: "L21",
      differentialDiagnosis: "Psoríase, eczema atópico, Tinea capitis, candidíase cutânea.",
      initialConduct: [
          "Explicar ao paciente que é condição crônica e recorrente.",
          "Identificar e minimizar fatores desencadeantes: estresse, frio, oleosidade excessiva, imunossupressão.",
          "Orientar higiene adequada do couro cabeludo e áreas afetadas."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Cetoconazol 2% shampoo", details: "Aplicar no couro cabeludo 2-3x/semana, deixar agir por 5 minutos e enxaguar." },
                  { name: "Hidrocortisona 1% creme", details: "Aplicar fina camada nas lesões de face e dobras 1-2x/dia por até 7 dias." },
                  { name: "Miconazol 2% loção/creme", details: "Aplicar fina camada sobre as lesões, 2x/dia, até cura clínica." },
                  { name: "Cetoconazol 200 mg", details: "Tomar 1 cp VO 1x/dia por 7-14 dias (avaliar função hepática)." },
                  { name: "Itraconazol 100 mg", details: "Tomar 1 cp VO 2x/dia por 7 dias, ou 1 cp VO 1x/dia por 14 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Ciclopirox olamina 1% creme/emulsão spray", details: "Aplicar nas lesões, 2x/dia, por 4 semanas ou até cura clínica." },
                  { name: "Terbinafina 1% creme/solução tópica spray", details: "Aplicar nas lesões, 2x/dia, até cura clínica." },
                  { name: "Clotrimazol 1% creme", details: "Aplicar fina camada sobre as lesões, 2x/dia, por 3 semanas ou até cura clínica." }
              ]
          }
      ],
      patientGuidance: [
          "Lavar o couro cabeludo regularmente, mesmo após melhora.",
          "Evitar uso excessivo de bonés ou capacetes sem higiene.",
          "Não coçar ou remover crostas com força.",
          "Retornar se houver piora, secreção purulenta ou falha terapêutica."
      ]
  },
  {
      id: 28,
      title: "28. DIARREIA AGUDA LEVE A MODERADA",
      cid: "A09",
      differentialDiagnosis: "Gastroenterite viral, intoxicação alimentar, diarreia bacteriana, parasitose intestinal.",
      initialConduct: [
          "Avaliar sinais de desidratação.",
          "Estimular ingestão hídrica adequada (mínimo de 1,5–2 L/dia).",
          "Reduzir consumo de café, sorbitol e leite.",
          "Suspender laxantes e outros medicamentos.",
          "Evitar uso de Loperamida se diarreia com padrão inflamatório ou disenteria."
      ],
      nonPharmaTreatment: [
          "Hidratação abundante com SRO após cada evacuação.",
          "Se desidratação leve/moderada: administrar 50–100 mL/kg de SRO em 4–6 h.",
          "Reforçar higiene das mãos e dos alimentos."
      ],
      pharmaTreatments: [
          {
              title: "✅ Prescrição Ambulatorial – Diarreia Não Infecciosa (SUS)",
              medications: [
                  { name: "Paracetamol 500 mg", details: "Tomar 1 cp VO a cada 6 h se dor ou febre." },
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO a cada 6 h se dor ou febre." },
                  { name: "Metoclopramida 10 mg", details: "Tomar 1 cp VO a cada 8 h se náuseas/vômitos." },
                  { name: "Soro de Reidratação Oral (SRO)", details: "Diluir e ingerir após cada evacuação." }
              ]
          },
          {
            title: "✅ Prescrição Ambulatorial – Diarreia Infecciosa (SUS)",
            medications: [
                { name: "Ciprofloxacino 500 mg", details: "Tomar 1 cp VO a cada 12 h, por 3–5 dias." },
                { name: "Sulfametoxazol 800 mg + Trimetoprim 160 mg", details: "Tomar 1 cp VO a cada 12 h, por 5 dias." },
                { name: "Albendazol 400 mg", details: "Tomar 1 cp VO a cada 24 h, por 3 dias." },
                { name: "Metronidazol 500 mg", details: "Tomar 1 cp VO a cada 8 h, por 7–10 dias (se suspeita de Giardia ou Entamoeba)." }
            ]
          },
          {
              title: "💎 Opções não SUS (Diarreia Não Infecciosa)",
              medications: [
                  { name: "Loperamida 2 mg", details: "Iniciar com 4 mg VO, seguidos de 2 mg após cada evacuação líquida (máx. 8 cp/dia)." },
                  { name: "Racecadotrila 100 mg (Avide®, Tiorfan®)", details: "Tomar 1 cp VO de 8/8 h antes das refeições, por até 7 dias." },
                  { name: "Ondansetrona 4 mg", details: "Tomar 1 cp VO a cada 8 h se náuseas/vômitos." },
                  { name: "Floratil®", details: "Tomar 1 cápsula VO de 12/12h por 5 a 7 dias." }
              ]
          }
      ],
      proceduresInUnit: [
        "SF 0,9% 1000 ml: Administrar 1 frasco EV em 4 horas.",
        "Ringer Lactato 1000 ml: Administrar 1 frasco EV em 4 horas.",
        "Metoclopramida 10mg/2ml: Administrar 1 ampola EV lenta se náuseas.",
        "Dipirona 500 mg/2ml: Administrar 1 ampola EV lenta se dor/febre."
      ],
      patientGuidance: [
        "Manter hidratação contínua.",
        "Dieta leve: arroz, batata, banana, maçã sem casca.",
        "Higiene rigorosa das mãos e utensílios.",
        "Procurar atendimento se houver: fezes com sangue, febre > 38,5 °C, vômitos frequentes, sinais de desidratação."
      ]
  },
  {
      id: 29,
      title: "29. DOR LOMBAR / LOMBALGIA",
      cid: "M54.5",
      differentialDiagnosis: "hérnia de disco, ciatalgia, fratura vertebral, espondiloartropatias, infecção, neoplasia.",
      initialConduct: [
          "Avaliar se é dor aguda (< 4 semanas), subaguda (4–12 semanas) ou crônica (> 12 semanas).",
          "Identificar sinais de alarme: déficit neurológico progressivo, incontinência, febre, trauma grave, perda de peso inexplicada.",
          "Evitar repouso absoluto prolongado — manter o paciente ativo.",
          "Orientar calor local 3–4x/dia e evitar sobrecarga da coluna.",
          "Reavaliar em caso de piora ou persistência por mais de 4 semanas."
      ],
      nonPharmaTreatment: [
          "Lombalgia Aguda: Aplicar calor local, repouso curto, reabilitação com cinesioterapia.",
          "Lombalgia Subaguda e Crônica: Manter-se ativo, exercícios físicos, evitar colchões rígidos, terapia cognitivo-comportamental."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Dipirona sódica 500 mg", details: "Tomar 1 cp VO de 6/6 h se dor (máx. 4 g/dia)." },
                  { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de 6/6 h se dor (máx. 3 g/dia)." },
                  { name: "Ibuprofeno 600 mg", details: "Tomar 1 cp VO de 8/8 h após alimentação, por até 5 dias." },
                  { name: "Diclofenaco potássico 50 mg", details: "Tomar 1 cp VO de 8/8 h após alimentação, por até 5 dias." },
                  { name: "Ciclobenzaprina 5 mg", details: "Tomar 1 cp VO de 8/8 h por 5 dias." },
                  { name: "Tramadol 50 mg", details: "Tomar 1 cp VO de 6/6 h se dor intensa, por até 3 dias." },
                  { name: "Codeína 30 mg", details: "Tomar 1 cp VO de 6/6 h se dor intensa, por até 3 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Naproxeno 500 mg", details: "Tomar 1 cp VO de 12/12 h após alimentação, por até 5 dias." },
                  { name: "Paracetamol 500 mg + Codeína 30 mg (PACO®)", details: "Tomar 1 cp VO de 6/6h se dor moderada a intensa." }
              ]
          }
      ],
      proceduresInUnit: [
        "Cetoprofeno 50mg/ml: Aplicar 1 ampola IM, dose única.",
        "Diclofenaco 50 mg/ml: Aplicar 1 ampola IM, dose única."
      ],
      patientGuidance: [
          "Mantenha-se ativo, evitando repouso prolongado.",
          "Use medicamentos conforme prescrição médica, evitando uso prolongado de AINEs.",
          "Aplique calor local para aliviar a dor.",
          "Procure atendimento imediato se apresentar fraqueza, formigamento progressivo, perda de força, ou febre."
      ]
  },
  {
      id: 30,
      title: "30. DPOC EXACERBADA – CONTEXTO AMBULATORIAL",
      cid: "J44.1",
      differentialDiagnosis: "Pneumonia comunitária, asma, embolia pulmonar, insuficiência cardíaca descompensada.",
      initialConduct: [
          "Confirmar diagnóstico e excluir pneumonia (exame físico, RX se disponível).",
          "Oxigenoterapia somente se SatO₂ < 90% (meta 88–92%).",
          "Se aumento de volume ou mudança na cor do escarro, considerar antibioticoterapia.",
          "Iniciar ou otimizar tratamento inalatório de longa duração.",
          "Usar espaçador preferencialmente.",
          "Estimular cessação do tabagismo e incentivar fisioterapia respiratória."
      ],
      nonPharmaTreatment: [
          "Cessação do tabagismo.",
          "Vacinação: Influenza, pneumococo, COVID-19 e dTPa.",
          "Reabilitação pulmonar.",
          "Oxigenoterapia para pacientes com paO2 < 55 mmHg."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Prednisona 20 mg", details: "Tomar 2 cp VO 1x/dia por 5–7 dias." },
                  { name: "Prednisolona 20 mg", details: "Tomar 2 cp VO 1x/dia por 5–7 dias." },
                  { name: "Salbutamol spray 100 mcg/jato", details: "Inalar 1–5 jatos a cada 4–6 h por 5–7 dias." },
                  { name: "Brometo de ipratrópio 0,25 mg/mL", details: "Diluir 20–40 gotas em 2 mL de SF 0,9% e inalar a cada 6 h por 5–7 dias." },
                  { name: "Amoxicilina + Clavulanato 875/125 mg", category: "Antibióticos", details: "Tomar 1 cp VO 12/12 h por 5–7 dias." },
                  { name: "Azitromicina 500 mg", category: "Antibióticos", details: "Tomar 1 cp VO 1x/dia por 5 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Axetilcefuroxima 500 mg", details: "Tomar 1 cp VO 12/12 h por 5–7 dias." },
                  { name: "Moxifloxacino 400 mg", details: "Tomar 1 cp VO ao dia por 7 dias." },
                  { name: "Fumarato de formoterol 12 mcg", details: "Inalar 1–2 cápsulas a cada 12 h de forma contínua." },
                  { name: "Brometo de tiotrópio 2,5 mcg/jato", details: "Inalar 2 jatos 1x/dia de forma contínua." }
              ]
          }
      ],
      proceduresInUnit: [
        "Hidrocortisona 200 mg + SF 0,9% 100 ml: Fazer EV em 30 minutos."
      ],
      patientGuidance: [
          "Cessação do Tabagismo é a principal medida.",
          "Manter as vacinas em dia.",
          "Uso Correto de Dispositivos Inalatórios.",
          "Procurar imediatamente atendimento se houver: Falta de ar intensa, Lábios roxos, Febre persistente > 38°C, Confusão mental."
      ]
  },
  {
    id: 31,
    title: "31. ECZEMA / DERMATITE ECZEMATOSA",
    cid: "L30",
    differentialDiagnosis: "Dermatite atópica, dermatite seborreica, psoríase, escabiose, alergia de contato.",
    initialConduct: [
        "Avaliar se é um quadro agudo (lesões eritematosas e exsudativas) ou crônico (placas liquenificadas e descamativas).",
        "Identificar fatores desencadeantes (produtos químicos, sabonetes, perfumes, alimentos, poeira).",
        "Investigar história pessoal/familiar de atopia."
    ],
    nonPharmaTreatment: [
        "Evitar banho muito quente e demorado.",
        "Usar sabonete neutro ou glicerinado.",
        "Manter hidratação diária da pele com cremes ou loções neutras.",
        "Evitar roupas de lã ou sintéticas em contato direto com a pele.",
        "Evitar o uso de perfumes, cremes perfumados ou produtos irritantes."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Dexclorfeniramina 2 mg", details: "Tomar 1 cp VO de 8/8h por até 7 dias (se prurido intenso)." },
                { name: "Loratadina 10 mg", details: "Tomar 1 cp VO de 24/24h por até 7 dias (se prurido intenso)." },
                { name: "Hidrocortisona creme 1% (20 g)", details: "Aplicar fina camada sobre as lesões 2–3x/dia por até 7 dias." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Desloratadina 5 mg", details: "Tomar 1 cp VO de 24/24h por até 7 dias (se prurido intenso)." },
                { name: "Fexofenadina 180 mg", details: "Tomar 1 cp VO de 24/24h por até 7 dias (se prurido intenso)." },
                { name: "Bilastina 20mg", details: "Tomar 1 cp VO de 24/24h por até 7 dias (se prurido intenso)." },
                { name: "Hidrocortisona 1% creme/pomada", details: "Aplicar fina camada sobre as lesões 2x/dia por 7–10 dias, ou 1x/dia." },
                { name: "Desonida 0,05% gel creme", details: "Aplicar fina camada sobre as lesões 2x/dia por 7–10 dias." },
                { name: "Furoato de mometasona 0,1% creme/pomada", details: "Aplicar fina camada sobre as lesões 1–2x/dia, por 7–10 dias." }
            ]
        }
    ],
    patientGuidance: [
        "Manter hidratação diária da pele, mesmo após melhora dos sintomas.",
        "Evitar coçar as lesões para reduzir risco de infecção secundária.",
        "Retornar se houver secreção, febre ou piora do quadro.",
        "Em casos recorrentes, procurar acompanhamento com dermatologia."
    ]
  },
  {
      id: 32,
      title: "32. ENTEROBÍASE (OXIURÍASE)",
      cid: "B80",
      differentialDiagnosis: "outras parasitoses intestinais, dermatite perianal, candidíase.",
      initialConduct: [
          "Confirmar diagnóstico clínico (prurido anal noturno).",
          "Exame parasitológico de fita adesiva (método de Graham) pode ser solicitado.",
          "Avaliar visualização direta dos vermes na região anal ou em fezes.",
          "Orientar higiene rigorosa para evitar reinfecção.",
          "Tratar todos os contactantes domiciliares."
      ],
      nonPharmaTreatment: [
          "Lavar roupas íntimas, toalhas e roupas de cama com água quente.",
          "Lavar mãos antes das refeições e após usar o banheiro.",
          "Manter unhas curtas e limpas.",
          "Trocar roupas de cama diariamente durante o tratamento."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Albendazol 400 mg", details: "Tomar 1 cp VO em dose única. Repetir após 14 dias." },
                  { name: "Mebendazol 100 mg", details: "Tomar 1 cp VO de 12/12 h por 3 dias OU 1 cp dose única, repetindo após 14 dias." },
                  { name: "Ivermectina 6 mg", details: "Tomar 200 mcg/kg VO em dose única, repetir após 14 dias (Ex.: adulto 60–70 kg → 2 cp de 6 mg)." }
              ]
          }
      ],
      patientGuidance: [
          "Sintomas podem demorar alguns dias para desaparecer.",
          "É essencial tratar todos os membros da família para evitar reinfecção.",
          "Repetir a dose do medicamento após 14 dias é fundamental."
      ]
  },
  {
      id: 33,
      title: "33. ERISIPELA",
      cid: "A46",
      differentialDiagnosis: "Celulite, abscesso cutâneo, trombose venosa profunda, fasciíte necrosante.",
      initialConduct: [
          "Avaliar extensão da lesão, febre e comorbidades.",
          "Identificar e tratar porta de entrada (micose, úlceras, feridas crônicas).",
          "Marcar borda da lesão para acompanhamento.",
          "Classificar gravidade: Leve (ambulatorial) vs. Grave (internação).",
          "Iniciar antibiótico o quanto antes (ideal em até 24–72h).",
          "Considerar profilaxia em recidivas (≥ 2 episódios em 3 anos)."
      ],
      nonPharmaTreatment: [
          "Higienizar a pele com água e sabão neutro.",
          "Repouso no leito quando indicado, com o membro elevado.",
          "Elevação do membro acometido para facilitar a drenagem.",
          "Compressas de gelo: Aplicar sobre o local por 15 minutos, 3-6 vezes ao dia.",
          "Controle de fatores predisponentes: Tinea pedis, eczema, úlceras crônicas."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Fenoximetilpenicilina potássica (Penicilina V) 250–500 mg", details: "Tomar 1 cp VO de 12/12h por 5–14 dias." },
                  { name: "Amoxicilina 500 mg", details: "Tomar 1 cp VO de 8/8h por 10 dias." },
                  { name: "Cefalexina 500 mg", details: "Tomar 1 cp VO de 6/6h por 5–14 dias." },
                  { name: "Clindamicina 300 mg", category: "Se alergia à penicilina", details: "Tomar 1 cp VO de 6/6 h por 7–14 dias." },
                  { name: "Sulfametoxazol + Trimetoprima 800/160 mg", category: "Se suspeita de MRSA", details: "Tomar 1 cp VO de 12/12 h por 7–14 dias." }
              ]
          },
          {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Cefadroxila 500 mg", details: "Tomar 1 cp VO de 12/12 h por 7–14 dias." },
                { name: "Eritromicina 250 mg", details: "Tomar 1 cp VO de 6/6 h por 7–14 dias." },
                { name: "Azitromicina 500 mg", details: "Tomar 1 cp VO 1x/dia por 5 dias." }
            ]
        }
      ],
      patientGuidance: [
          "Manter repouso e elevação do membro até melhora clínica.",
          "Realizar compressas de gelo conforme orientado.",
          "Retornar se houver febre persistente, dor intensa ou aumento da vermelhidão.",
          "Tratar portas de entrada como frieiras, úlceras ou feridas.",
          "Não interromper o antibiótico antes do tempo prescrito."
      ]
  },
  {
      id: 34,
      title: "34. ESCABIOSE (SARNA)",
      cid: "B86",
      differentialDiagnosis: "Dermatite atópica, dermatite de contato, prurido por alergia, pediculose.",
      initialConduct: [
          "Confirmar diagnóstico clínico: prurido noturno intenso, lesões em região interdigital, punhos, axilas, mamilos.",
          "Tratar contactantes do mesmo domicílio e parceiros sexuais, mesmo se assintomáticos.",
          "Realizar tratamento de todos no mesmo dia.",
          "Orientar que o prurido pode persistir por alguns dias mesmo após o início do tratamento."
      ],
      nonPharmaTreatment: [
          "Trocar roupas de cama, banho e vestuário usados nos dias anteriores.",
          "Lavar roupas com água quente, expor ao sol e passar a ferro.",
          "Armazenar roupas em saco plástico fechado por 4–7 dias se não puder lavar.",
          "Manter unhas curtas e limpas."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Ivermectina 6 mg", details: "Tomar 200 mcg/kg VO em dose única, repetir após 7 dias." },
                  { name: "Loratadina 10 mg", details: "Tomar 1 cp VO 1x/dia por até 7 dias (se prurido intenso)." },
                  { name: "Permetrina 5% loção/creme", details: "Aplicar no corpo todo. Deixar por 8–14h e remover. Repetir após 7 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Hidroxizina 25 mg", details: "Tomar 1 cp VO até 8/8h por até 7 dias (se prurido intenso)." },
                  { name: "Benzoato de benzila 25% loção/emulsão", details: "Aplicar no corpo todo por 4 noites consecutivas. Repetir após 7 dias." }
              ]
          }
      ],
      patientGuidance: [
          "Tratar todos os moradores da casa e parceiros sexuais, mesmo assintomáticos.",
          "Lavar roupas de cama, banho e uso pessoal em água quente.",
          "Guardar em saco plástico por 4–7 dias roupas que não puderem ser lavadas.",
          "Retornar se persistirem sintomas após 4 semanas ou se houver sinais de infecção secundária."
      ]
  },
  {
      id: 35,
      title: "35. ESOFAGITE DE REFLUXO (DRGE)",
      cid: "K21.0",
      differentialDiagnosis: "Dispepsia funcional, úlcera péptica, gastrite, câncer gástrico ou esofágico.",
      initialConduct: [
          "Confirmar diagnóstico clínico (pirose, regurgitação, sintomas pós-refeição).",
          "Investigar sinais de alarme: disfagia progressiva, perda de peso, hematêmese, anemia.",
          "Indicar endoscopia digestiva alta se sintomas persistirem ou sinais de alarme."
      ],
      nonPharmaTreatment: [
          "Orientar perda de peso se sobrepeso/obesidade.",
          "Evitar refeições volumosas, principalmente à noite.",
          "Não deitar após comer (esperar pelo menos 2–3h).",
          "Elevar cabeceira da cama em 30°.",
          "Evitar álcool, café, frituras, refrigerantes, chocolate, cigarro."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Omeprazol 20 mg", details: "Tomar 1 cp VO 30 min antes do café da manhã por 4–8 semanas." },
                  { name: "Domperidona 10 mg", details: "Tomar 1 cp VO 8/8h antes das refeições, se sintomas dispépticos associados." },
                  { name: "Metoclopramida 10 mg", details: "Tomar 1 cp VO de 8/8h antes das refeições, se náuseas ou refluxo pós-prandial." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Pantoprazol 40 mg", details: "Tomar 1 cp VO 1x/dia por 4–8 semanas." },
                  { name: "Esomeprazol 40 mg", details: "Tomar 1 cp VO 1x/dia por 4–8 semanas." },
                  { name: "Dexlansoprazol 60 mg", details: "Tomar 1 cp VO 1x/dia por 4–8 semanas." },
                  { name: "Antiácidos (Hidróxido de alumínio + hidróxido de magnésio)", details: "Tomar 10 mL VO após refeições e ao deitar, se sintomas ocasionais." }
              ]
          }
      ],
      patientGuidance: [
          "Seguir rigorosamente as medidas posturais e alimentares.",
          "Evitar automedicação prolongada com IBP sem acompanhamento.",
          "Retornar se sintomas persistirem após 8 semanas de tratamento.",
          "Procurar atendimento imediato se surgirem sinais de alarme (engasgo, sangue nas fezes/vômitos, emagrecimento rápido)."
      ]
  },
  {
      id: 36,
      title: "36. FARINGITE AGUDA",
      cid: "J02",
      differentialDiagnosis: "Amigdalite bacteriana, mononucleose infecciosa, rinofaringite viral, abscesso peritonsilar.",
      initialConduct: [
          "Orientar repouso no período febril e incentivar boa hidratação.",
          "Analgésicos e anti-inflamatórios são primeira escolha.",
          "Corticoides podem ser usados em edema intenso ou casos mais sintomáticos.",
          "Opções caseiras como gargarejo com água morna e sal."
      ],
      nonPharmaTreatment: [
          "Repouso relativo durante o período febril.",
          "Hidratação oral abundante.",
          "Gargarejo com água morna e sal (opcional).",
          "Evitar fumo, bebidas alcoólicas e exposição a ar-condicionado."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Amoxicilina 500 mg", category: "Antibioticoterapia", details: "Tomar 1 cp VO de 8/8 h por 10 dias." },
                  { name: "Penicilina benzatina 1.200.000 UI", category: "Antibioticoterapia", details: "Aplicar IM, dose única." },
                  { name: "Dipirona 500 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 6/6 h se dor ou febre." },
                  { name: "Paracetamol 500–750 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 6/6 h se dor ou febre (máx. 4 g/dia)." },
                  { name: "Ibuprofeno 600 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 8/8 h por até 5 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Cefadroxila 1 g", details: "Tomar 1 cp VO de 24/24 h por 10 dias." },
                  { name: "Cefuroxima 500 mg", details: "Tomar 1 cp VO de 12/12 h por 10 dias." }
              ]
          }
      ],
      patientGuidance: [
          "Repousar enquanto houver febre e manter boa hidratação.",
          "Completar o ciclo de antibiótico, se prescrito.",
          "Retornar se houver febre persistente > 48 h, dor intensa, dificuldade para engolir, dispneia ou sinais de abscesso peritonsilar."
      ]
  },
  {
      id: 37,
      title: "37. FEBRE DE ORIGEM INDETERMINADA (FOI)",
      cid: "R50.9",
      differentialDiagnosis: "Infecções, Neoplasias, Doenças inflamatórias sistêmicas, Reações a fármacos.",
      initialConduct: [
          "Definição: Febre ≥ 38,3 °C em várias ocasiões, com duração > 3 semanas, sem diagnóstico estabelecido.",
          "Anamnese direcionada: Viagens, exposições, fármacos, imunossupressão.",
          "Exames básicos recomendados: Hemograma, bioquímica, hemoculturas, urina, sorologias, RX de tórax."
      ],
      nonPharmaTreatment: [
        "Evitar antibióticos empíricos sem causa definida (podem mascarar diagnóstico).",
        "Corticoides ou antibióticos apenas em situações específicas (ex.: suspeita de arterite temporal, endocardite).",
        "Em suspeita de neoplasia → é fundamental diagnóstico histológico antes de iniciar tratamento."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS (Sintomáticos)",
              medications: [
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6 h se febre ou dor." },
                  { name: "Paracetamol 500–750 mg", details: "Tomar 1 cp VO de 6/6 h, máximo de 4 g/dia." },
                  { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO de 8/8 h por 5 dias. Evitar se houver suspeita de dengue." }
              ]
          }
      ],
      patientGuidance: [
          "Manter registro de temperatura e evolução dos sintomas.",
          "Retornar com sinais de alarme.",
          "Seguir reavaliações periódicas até esclarecimento do quadro."
      ]
  },
  {
      id: 38,
      title: "38. FIBROMIALGIA",
      cid: "M79.7",
      differentialDiagnosis: "Hipotireoidismo, polimialgia reumática, miopatias inflamatórias, lúpus, artrite reumatoide, depressão.",
      initialConduct: [
          "Diagnóstico clínico: dor difusa por > 3 meses, associada a fadiga, distúrbios do sono.",
          "Excluir doenças inflamatórias, endócrinas e infecciosas.",
          "Avaliar comorbidades (depressão, ansiedade, distúrbios do sono).",
          "Enfatizar o caráter multidisciplinar do manejo (clínico, fisioterapia, psicologia)."
      ],
      nonPharmaTreatment: [
          "Atividade física regular (aeróbica + fortalecimento) é o principal pilar terapêutico.",
          "Higiene do sono: regular horários, evitar cafeína, telas e álcool à noite.",
          "Educação do paciente: a dor é real, mas a doença não causa deformidade.",
          "Terapia cognitivo-comportamental (TCC): melhora coping, ansiedade e sono."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Amitriptilina 25 mg", category: "Antidepressivos Tricíclicos", details: "Tomar 1 cp VO à noite (dose pode variar de 10 a 75 mg/dia)." },
                  { name: "Fluoxetina 20 mg", category: "IRSNs", details: "Tomar 1 cp VO 1x/dia." },
                  { name: "Sertralina 50 mg", category: "IRSNs", details: "Tomar 1 cp VO 1x/dia." },
                  { name: "Gabapentina 300 mg", category: "Anticonvulsivantes", details: "Iniciar 300 mg VO à noite, titular até 2400 mg/dia." },
                  { name: "Tramadol 50 mg", category: "Opioides (uso restrito)", details: "Tomar 1 cp VO 12/12h se dor intensa – usar com cautela." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Ciclobenzaprina 10 mg", details: "Tomar 1 cp VO à noite." },
                  { name: "Duloxetina 30–60 mg", details: "Tomar 1 cp VO pela manhã, útil em fadiga, dor e depressão." },
                  { name: "Pregabalina 75–150 mg", details: "Iniciar com 75 mg VO à noite, podendo evoluir até 300–450 mg/dia." }
              ]
          }
      ],
      patientGuidance: [
          "O principal tratamento é fazer atividade física.",
          "O uso de remédios ajuda no alívio da dor, mas o efeito costuma ser temporário.",
          "Não use remédios fortes para dor (opioides) pois podem causar dependência.",
          "Se o problema maior for dormir mal, alguns remédios ajudam. Se for cansaço ou depressão, há outros mais adequados."
      ]
  },
  {
      id: 39,
      title: "39. FISSURA ANAL",
      cid: "K60",
      differentialDiagnosis: "Hemorroida trombosada, abscesso perianal, fístula anal, neoplasia de reto/ânus, doença inflamatória intestinal.",
      initialConduct: [
          "Primeira linha é o tratamento clínico: manter evacuação atraumática e controlar dor.",
          "Investigar uso de medicamentos constipantes.",
          "Avaliar sinais de complicação (febre, abscesso, secreção).",
          "Encaminhar ao especialista se não houver melhora em 6–8 semanas."
      ],
      nonPharmaTreatment: [
          "Banho de assento com água morna por 10–15 min, 3x/dia.",
          "Aumentar fibras e líquidos (2–3 L/dia).",
          "Evitar esforço evacuatório e uso de papel higiênico (preferir higiene com água).",
          "Dieta rica em frutas, verduras e cereais integrais.",
          "Atividade física regular."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6 h se dor." },
                  { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de 6/6 h se dor (máx. 4 g/dia)." },
                  { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO de 8/8 h por 5 dias. (Evitar em casos suspeitos de dengue)." },
                  { name: "Lidocaína gel 2% (uso tópico)", details: "Aplicar pequena quantidade no ânus antes da evacuação, até 3x/dia." },
                  { name: "Hidrocortisona creme 1%", details: "Aplicar fina camada 2–3x/dia, por no máximo 2 semanas." },
                  { name: "Plantago ovata (Metamucil®)", details: "Tomar diluído em 200 mL de água, VO, 2x/dia." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Nifedipina 0,2–0,4% pomada", details: "Aplicar localmente 3x/dia, por 6–8 semanas." },
                  { name: "Diltiazem 2% pomada", details: "Aplicar localmente 3x/dia, por 6–8 semanas." },
                  { name: "Tramadol 50 mg", details: "Tomar 1 cp VO de 12/12 h em dor intensa, associado a dipirona ou paracetamol." }
              ]
          }
      ],
      patientGuidance: [
          "Mantenha evacuações regulares, evitando esforço.",
          "Prefira higiene com água em vez de papel higiênico.",
          "Faça banhos de assento com água morna diariamente.",
          "Beba bastante água e consuma alimentos ricos em fibras."
      ]
  },
  {
      id: 40,
      title: "40. FLEBITE SUPERFICIAL",
      cid: "I80.9",
      differentialDiagnosis: "Trombose venosa profunda (TVP), celulite, linfangite.",
      initialConduct: [
          "Avaliar sinais clínicos: dor, vermelhidão, calor local e cordão venoso palpável.",
          "Investigar fatores de risco: varizes, trauma venoso, cateter periférico.",
          "Diferenciar de TVP (dor intensa, edema importante, sinal de Homans).",
          "Classificar risco: Baixo risco vs. Alto risco (extensão > 5 cm, proximidade de safena, história de TEV). Encaminhar ao vascular se alto risco."
      ],
      nonPharmaTreatment: [
          "Compressas mornas ou frias sobre o local, 2–3x/dia.",
          "Elevação do membro afetado.",
          "Meias elásticas de compressão (18–21 mmHg).",
          "Retirada de cateter venoso periférico se relacionado à flebite."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO de 8/8 h por até 7 dias." },
                  { name: "Diclofenaco 50 mg", details: "Tomar 1 cp VO de 8/8 h por até 7 dias." },
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6 h se dor." },
                  { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de 6/6 h se dor ou febre (máx. 4 g/dia)." },
                  { name: "Nimesulida 100 mg", details: "Tomar 1 cp VO de 12/12 h por até 7 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Indometacina 25–50 mg", details: "Tomar 1 cp VO de 6/6 h, por até 7 dias." },
                  { name: "Cetoprofeno 150 mg", details: "Tomar 1 cp VO de 12/12 h por até 7 dias." }
              ]
          }
      ],
      patientGuidance: [
          "Mantenha o membro elevado sempre que possível.",
          "Use meias de compressão conforme orientação médica.",
          "Aplique compressas mornas no local da dor.",
          "Evite permanecer longos períodos em pé ou sentado sem movimentar as pernas.",
          "Procure atendimento se houver: dor súbita mais intensa, aumento do inchaço, febre, falta de ar ou dor no peito."
      ]
  },
  {
    id: 41,
    title: "41. FURUNCULOSE",
    cid: "L02.2",
    differentialDiagnosis: "Trombose venosa profunda (TVP), celulite, linfangite.",
    initialConduct: [
        "Avaliar extensão da lesão e sinais de gravidade (febre, celulite extensa, imunossupressão, dor intensa).",
        "Não espremer ou manipular a lesão para evitar disseminação da infecção.",
        "Compressas mornas 20 min, 3x/dia, até drenagem espontânea.",
        "Higienização local com sabão de clorexidina ou PVPI.",
        "Furúnculo único e pequeno → conduta clínica + antibiótico tópico.",
        "Furúnculo em face, múltiplos, extensos, recorrentes ou com halo ≥ 2 cm → antibiótico sistêmico.",
        "Incisão e drenagem: indicada em fase de flutuação ou em abscesso maior.",
        "Em recorrência → avaliar doenças de base (ex.: diabetes) e considerar descolonização."
    ],
    nonPharmaTreatment: [
        "Higienizar diariamente com antisséptico.",
        "Compressas mornas até melhora.",
        "Evitar roupas apertadas e calor excessivo.",
        "Cobrir com gaze limpa se houver drenagem."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Cefalexina 500 mg", details: "Tomar 1 cp VO de 6/6 h por 7–14 dias." },
                { name: "Cefadroxila 500 mg", details: "Tomar 1 cp VO de 12/12 h por 7–14 dias." },
                { name: "Sulfametoxazol + Trimetoprim 800/160 mg", details: "Tomar 1 cp VO de 12/12 h por 10–14 dias." },
                { name: "Clindamicina 300 mg", details: "Tomar 1 cp VO de 8/8 h por 10–14 dias (se alergia a penicilina)." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Doxiciclina 100 mg", details: "Tomar 1 cp VO de 12/12 h por 10–14 dias." },
                { name: "Ácido fusídico 2% creme", details: "Aplicar na lesão 3x/dia por 7–10 dias." },
                { name: "Mupirocina 2% pomada", details: "Aplicar na lesão 3x/dia por 7–10 dias." }
            ]
        }
    ],
    patientGuidance: [
        "Não espremer nem manipular o furúnculo.",
        "Fazer compressa morna diariamente até a melhora.",
        "Lavar a região afetada com sabão antisséptico.",
        "Retornar ao médico se aparecer febre, vermelhidão maior ou dor intensa.",
        "Em casos repetidos, pode ser necessário tratamento especial."
    ]
  },
  {
      id: 42,
      title: "42. GASTRITE AGUDA",
      cid: "K29.0",
      differentialDiagnosis: "úlcera péptica, dispepsia funcional, pancreatite, colelitíase, IAM.",
      initialConduct: [
          "Avaliar história clínica detalhada: uso de AINEs, álcool, tabaco, alimentos irritativos, infecção, estresse.",
          "Sinais de alarme (indicam endoscopia): Hemorragia digestiva, anemia, perda de peso, disfagia, vômitos persistentes.",
          "Resumo técnico: Primeira linha: IBP (Omeprazol 20–40 mg/dia) por 4–8 semanas. Endoscopia se sinais de alarme. Rastrear H. pylori em casos refratários."
      ],
      nonPharmaTreatment: [
          "Evitar AINEs, álcool, tabaco, café, alimentos gordurosos e condimentados.",
          "Fracionar refeições em 5–6 porções diárias.",
          "Evitar deitar imediatamente após refeições (intervalo > 2 h).",
          "Elevar cabeceira da cama em 30°.",
          "Reduzir estresse e melhorar qualidade do sono."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Omeprazol 20 mg", details: "Tomar 1 cp VO 1x/dia, em jejum, por 4 a 8 semanas." },
                  { name: "Hidróxido de Alumínio + Magnésio (antiácido líquido)", details: "Tomar 10 mL VO de 8/8 h se dor/dispepsia." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Sucralfato 1 g", details: "Tomar 1 cp VO de 6/6 h, até 4 semanas." },
                  { name: "Esomeprazol 40 mg", details: "Tomar 1 cp VO 1x/dia, em jejum, por 4 a 8 semanas." },
                  { name: "Pantoprazol 40 mg", details: "Tomar 1 cp VO 1x/dia, em jejum, por 4 a 8 semanas." }
              ]
          }
      ],
      patientGuidance: [
          "Não use remédios para dor por conta própria (ibuprofeno, diclofenaco, aspirina).",
          "Evite bebidas alcoólicas, café, refrigerantes e comidas gordurosas.",
          "Faça refeições menores e frequentes.",
          "Procure atendimento médico se apresentar vômitos com sangue, fezes escuras, dor abdominal forte ou perda de peso."
      ]
  },
  {
      id: 43,
      title: "43. GASTROENTERITE AGUDA (GECA)",
      cid: "A09",
      differentialDiagnosis: "intoxicação alimentar, colite infecciosa, doença inflamatória intestinal, parasitoses.",
      initialConduct: [
          "Avaliar sinais de desidratação.",
          "Estimular ingestão hídrica adequada (mínimo de 1,5–2 L/dia).",
          "Reduzir consumo de café, sorbitol e leite.",
          "Suspender laxantes e outros medicamentos que alterem o hábito intestinal.",
          "Evitar uso de Loperamida se diarreia com padrão inflamatório ou disenteria."
      ],
      nonPharmaTreatment: [
          "Hidratação abundante com SRO após cada evacuação.",
          "Se desidratação leve/moderada: administrar 50–100 mL/kg de SRO em 4–6 h.",
          "Reforçar higiene das mãos e dos alimentos."
      ],
      pharmaTreatments: [
        {
          title: "✅ Prescrição Ambulatorial – Diarreia Não Infecciosa (SUS)",
          medications: [
              { name: "Paracetamol 500 mg", details: "Tomar 1 cp VO a cada 6 h se dor ou febre." },
              { name: "Dipirona 500 mg", details: "Tomar 1 cp VO a cada 6 h se dor ou febre." },
              { name: "Metoclopramida 10 mg", details: "Tomar 1 cp VO a cada 8 h se náuseas/vômitos." },
              { name: "Soro de Reidratação Oral (SRO)", details: "Diluir e ingerir após cada evacuação." }
          ]
        },
        {
          title: "✅ Prescrição Ambulatorial – Diarreia Infecciosa (SUS)",
          medications: [
              { name: "Ciprofloxacino 500 mg", details: "Tomar 1 cp VO a cada 12 h, por 3–5 dias." },
              { name: "Sulfametoxazol + Trimetoprim", details: "Tomar 1 cp VO a cada 12 h, por 5 dias." }
          ]
        },
        {
          title: "💎 Opções não SUS",
          medications: [
              { name: "Loperamida 2 mg", details: "Iniciar com 4 mg VO, seguidos de 2 mg após cada evacuação (máx. 8 cp/dia)." },
              { name: "Racecadotrila 100 mg", details: "Tomar 1 cp VO de 8/8 h antes das refeições, por até 7 dias." },
              { name: "Ondansetrona 4 mg", details: "Tomar 1 cp VO a cada 8 h se náuseas/vômitos." },
              { name: "Levofloxacino 500 mg", category: "Infecciosa", details: "Tomar 1 cp VO a cada 24 h, por 3–5 dias." },
              { name: "Azitromicina 1 g", category: "Infecciosa", details: "Tomar 1 cp VO em dose única." }
          ]
        }
      ],
      patientGuidance: [
          "Manter hidratação contínua (água filtrada, soro de reidratação oral).",
          "Dieta leve: arroz, batata, banana, maçã sem casca, carnes magras.",
          "Procurar atendimento se houver: fezes com sangue, febre > 38,5 °C, vômitos frequentes, sinais de desidratação."
      ]
  },
  {
      id: 44,
      title: "44. GIARDÍASE",
      cid: "A07.1",
      differentialDiagnosis: "Amebíase, criptosporidíase, síndrome do intestino irritável, intolerância à lactose.",
      initialConduct: [
          "Definição: Infecção intestinal causada pelo protozoário Giardia lamblia.",
          "Apresentação clínica: Diarreia crônica ou intermitente, dor abdominal, flatulência, náuseas.",
          "Diagnóstico: Exame parasitológico de fezes (3 amostras), testes imunológicos."
      ],
      nonPharmaTreatment: [
          "Fervura ou filtração de água.",
          "Higienização rigorosa de mãos e alimentos.",
          "Evitar consumo de água de origem duvidosa."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Metronidazol 250 mg", details: "Tomar 1 cp VO de 8/8h por 7 dias." },
                  { name: "Metronidazol 500 mg", details: "Tomar 1 cp VO de 12/12h por 5–7 dias." },
                  { name: "Albendazol 400 mg", details: "Tomar 1 cp VO de 24/24h por 5 dias." },
                  { name: "Mebendazol 200 mg", details: "Tomar 1 cp VO de 8/8h por 5 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Nitazoxanida 500 mg", details: "Tomar 1 cp VO de 12/12h por 3 dias." },
                  { name: "Tinidazol 500 mg", details: "Tomar 4 cp VO (2 g) em dose única." }
              ]
          }
      ],
      patientGuidance: [
          "Tratar todos os contactantes sintomáticos.",
          "Manter hidratação adequada.",
          "Procurar atendimento se persistirem sintomas após tratamento."
      ]
  },
  {
      id: 45,
      title: "45. GONORREIA",
      cid: "A54",
      differentialDiagnosis: "Clamídia, tricomoníase, uretrite não gonocócica.",
      initialConduct: [
          "Definição: Infecção causada por Neisseria gonorrhoeae, cursando com uretrite, corrimento purulento, disúria, dor pélvica.",
          "Diagnóstico: Clínico (corrimento uretral/cervical). Confirmação: bacterioscopia, cultura ou PCR."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS - Esquema A (Primeira linha)",
              medications: [
                  { name: "Ceftriaxona 500 mg IM", details: "Aplicar 1 amp IM dose única." },
                  { name: "Doxiciclina 100 mg", details: "Tomar 1 cp VO de 12/12h por 7 dias." }
              ]
          },
          {
              title: "Esquema B (Segunda linha)",
              medications: [
                  { name: "Ceftriaxona 500 mg IM", details: "Aplicar 1 amp IM dose única." },
                  { name: "Azitromicina 500 mg", details: "Tomar 2 cp VO juntos (1 g) em dose única." }
              ]
          },
          {
            title: "Esquema C (Alergia a cefalosporina)",
            medications: [
                { name: "Gentamicina 240 mg IM", details: "Aplicar 1 amp IM dose única." },
                { name: "Azitromicina 500 mg", details: "Tomar 2 cp VO juntos (1 g) em dose única." }
            ]
        }
      ],
      patientGuidance: [
          "Abstinência sexual até fim do tratamento.",
          "Tratar todos os parceiros sexuais.",
          "Retornar se persistirem sintomas."
      ]
  },
  {
      id: 46,
      title: "46. HEMORRÓIDAS",
      cid: "I84",
      differentialDiagnosis: "fissura anal, abscesso perianal, fístula, câncer colorretal.",
      initialConduct: [
          "Classificação clínica: Internas (sangramento indolor) vs. Externas (dor aguda, trombose, prurido).",
          "Avaliar grau da hemorroida e sinais de complicação.",
          "Orientar medidas comportamentais: dieta rica em fibras, aumento da ingesta hídrica.",
          "Encaminhar para cirurgia se falha do tratamento clínico ou complicações."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6 h se dor." },
                  { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de 6/6 h se dor (máx. 4 g/dia)." },
                  { name: "Lactulose xarope 667 mg/mL (120 mL)", details: "Tomar 15–30 mL VO 1–2x/dia para amolecer as fezes." },
                  { name: "Óleo mineral (líquido oral)", details: "Tomar 15 mL VO 1–2x/dia, até melhora." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Pomada com lidocaína + hidrocortisona", details: "Aplicar na região anal 2–3x/dia por até 7 dias." },
                  { name: "Pomada com tribenosídeo + lidocaína", details: "Aplicar 2x/dia após higiene local." },
                  { name: "Flavonoides (Diosmina + Hesperidina 450/50 mg)", details: "Tomar 2 cp VO 12/12 h por 7 dias (crise)." }
              ]
          }
      ],
      patientGuidance: [
          "Coma mais frutas, verduras, legumes e cereais integrais.",
          "Beba pelo menos 2 litros de água por dia.",
          "Evite esforço ao evacuar e não permaneça muito tempo sentado no vaso.",
          "Tome banhos de assento mornos por 15 min, 2–3x/dia.",
          "Procure atendimento se houver sangramento volumoso, dor intensa."
      ]
  },
  {
      id: 47,
      title: "47. HERPES GENITAL",
      cid: "A60.0",
      differentialDiagnosis: "Cancro mole, sífilis, linfogranuloma venéreo, traumatismos.",
      initialConduct: [
          "Definição: IST viral causada pelo Herpesvírus tipo 1 e 2 (HSV-1 e HSV-2).",
          "Apresentação clínica: Lesões vesiculosas agrupadas, dolorosas, que evoluem para úlceras. Sintomas sistêmicos possíveis.",
          "Diagnóstico: Clínico na maioria dos casos. PCR do material da lesão (quando disponível)."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Aciclovir 400 mg (Primeiro episódio)", details: "Tomar 1 cp VO de 8/8h por 7–10 dias." },
                  { name: "Aciclovir 400 mg (Recorrência)", details: "Tomar 1 cp VO de 8/8h por 5 dias." },
                  { name: "Aciclovir 400 mg (Supressão)", details: "Tomar 1 cp VO de 12/12h continuamente." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Valaciclovir 500 mg", details: "Tomar 1 cp VO de 12/12 h por 5–10 dias." },
                  { name: "Famciclovir 250 mg", details: "Tomar 1 cp VO de 8/8 h por 7 dias." }
              ]
          }
      ],
      patientGuidance: [
          "Evitar relações sexuais durante as lesões ativas.",
          "Informar que o vírus pode ser transmitido mesmo assintomático.",
          "Uso de preservativo reduz, mas não elimina totalmente o risco.",
          "Recorrências são comuns — tratamento pode ser contínuo se frequentes."
      ]
  },
  {
      id: 48,
      title: "48. HERPES SIMPLES",
      cid: "B00.9",
      differentialDiagnosis: "aftas recorrentes, sífilis primária, candidíase oral/genital, impetigo.",
      initialConduct: [
          "Infecção viral recorrente por HSV-1 (boca/face) ou HSV-2 (genitália).",
          "A maioria dos casos é autolimitada; antivirais reduzem tempo e intensidade dos sintomas.",
          "Indicado tratamento em: episódios graves, imunossuprimidos, recorrências frequentes."
      ],
      nonPharmaTreatment: [
          "Higiene local com água e sabão neutro.",
          "Evitar manipular as lesões.",
          "Não compartilhar objetos pessoais.",
          "Abstinência sexual até completa cicatrização no caso de herpes genital."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Aciclovir 200 mg", details: "Tomar 1 cp VO de 8/8 h por 7–10 dias (infecção primária)." },
                  { name: "Aciclovir 200 mg", details: "Tomar 1 cp VO de 12/12 h por 6 meses (supressão)." },
                  { name: "Aciclovir creme 5%", details: "Aplicar sobre as lesões 5x/dia por 5–7 dias." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Valaciclovir 500 mg", details: "Tomar 1 cp VO de 12/12 h por 5–10 dias." },
                  { name: "Famciclovir 250 mg", details: "Tomar 1 cp VO de 8/8 h por 7 dias." }
              ]
          }
      ],
      patientGuidance: [
          "As lesões são contagiosas até cicatrizarem por completo.",
          "Evite beijar, relações sexuais sem proteção e compartilhar objetos.",
          "O tratamento não elimina o vírus, mas reduz sintomas e recorrências.",
          "Procure atendimento se houver febre alta, dor intensa, ou lesões extensas."
      ]
  },
  {
      id: 49,
      title: "49. HERPES ZOSTER",
      cid: "B02",
      differentialDiagnosis: "herpes simples, dermatite de contato, celulite, impetigo, varicela.",
      initialConduct: [
          "Fatores de risco: idade > 50 anos, imunossupressão.",
          "Complicações: neuralgia pós-herpética, superinfecção bacteriana, comprometimento oftálmico.",
          "Iniciar tratamento precoce (até 72h do início das lesões).",
          "Encaminhar urgentemente se acometimento oftálmico ou neurológico.",
          "Informar sobre vacina (a partir de 50 anos)."
      ],
      nonPharmaTreatment: [],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Aciclovir 200 mg", details: "Tomar 1 cp VO 5x ao dia por 7 a 10 dias." },
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6 h se dor." },
                  { name: "Amitriptilina 25 mg", details: "Tomar 1 cp VO à noite, se dor neuropática persistente." },
                  { name: "Gabapentina 300 mg", details: "Tomar 1 cp VO de 8/8 h, se neuralgia pós-herpética." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Aciclovir 400 mg", details: "Tomar 2 cp VO de 4/4 h, omitindo a dose noturna, por 7 dias." },
                  { name: "Valaciclovir 500 mg", details: "Tomar 2 cp VO de 8/8 h por 5 a 10 dias." },
                  { name: "Pregabalina 75 mg", details: "Tomar 1 cp VO de 12/12 h se dor neuropática intensa." }
              ]
          }
      ],
      patientGuidance: [
          "Mantenha a pele limpa e seca, evitando coçar as lesões.",
          "Use roupas leves para reduzir atrito na pele.",
          "Evite contato próximo com pessoas que nunca tiveram catapora.",
          "Procure atendimento se houver dor muito forte, piora das lesões ou comprometimento do olho."
      ]
  },
  {
      id: 50,
      title: "50. HIPERTENSÃO ARTERIAL SISTÊMICA (CRISE HIPERTENSIVA)",
      cid: "I16.0 / I16.1",
      differentialDiagnosis: "AVC, dissecção de aorta, SCA, feocromocitoma, pré-eclâmpsia/eclâmpsia.",
      initialConduct: [
          "Urgência hipertensiva: PA ≥ 180/120 mmHg sem lesão aguda de órgão-alvo. Meta: 160x100 mmHg ou ↓ 20–25% em 24–48 h.",
          "Emergência hipertensiva: PA ≥ 180/120 mmHg com lesão aguda de órgão-alvo. Meta: ↓ até 25% na primeira hora; alvo de 160x100 mmHg em 2–6 h."
      ],
      nonPharmaTreatment: [
        "Repouso em ambiente calmo e silencioso.",
        "Dieta oral para hipertensos.",
        "Hidratação venosa geralmente não necessária."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Captopril 25–50 mg", details: "Tomar 1 cp VO até a cada 8 horas." },
                  { name: "Clonidina 0,15 mg", details: "Tomar 1 cp VO a cada 8–24 horas." },
                  { name: "Hidralazina 25–50 mg", details: "Tomar 1 cp VO a cada 6–8 horas." }
              ]
          }
      ],
      proceduresInUnit: [
        "Metoprolol 5 mg/5 mL: ½–1 ampola EV. Diluir e administrar lentamente em 2 minutos.",
        "Hidralazina 20 mg/1 mL: 1 ampola EV lenta. Repetir se necessário a cada 4–6 horas."
      ],
      patientGuidance: [
          "Não interromper o tratamento anti-hipertensivo habitual.",
          "Evitar sal em excesso, álcool e estimulantes.",
          "Procurar atendimento se houver dor torácica, falta de ar, alterações neurológicas.",
          "Manter acompanhamento ambulatorial para ajuste de medicação."
      ]
  },
  {
      id: 51,
      title: "51. HIPOGLICEMIA",
      cid: "E16.2",
      differentialDiagnosis: "síncope vasovagal, epilepsia, AVC, intoxicação alcoólica, arritmias.",
      initialConduct: [
          "Considera-se hipoglicemia: glicemia capilar < 70 mg/dL.",
          "Sempre investigar causa (uso de insulina, sulfonilureias, jejum prolongado, etc.).",
          "Confirmar glicemia capilar sempre que possível.",
          "Classificar: leve/moderada (consciente) ou grave (inconsciente/convulsão)."
      ],
      nonPharmaTreatment: [
          "Se consciente: administrar 15–20 g de carboidrato de absorção rápida (150 mL de suco, 1 colher de açúcar/mel).",
          "Reavaliar glicemia em 15 min e repetir se necessário.",
          "Após melhora: oferecer refeição contendo carboidrato complexo + proteína."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Glicose oral em sachê ou solução caseira", details: "15–20 g VO. Indicado apenas se paciente consciente." }
              ]
          }
      ],
      proceduresInUnit: [
          "Glicose 50% (ampola 10 mL = 5 g): 2–4 amp EV lento. Diluir em SF 0,9% se necessário.",
          "Glicose 10% (fr 250 mL): 1 fr EV contínuo. Após correção inicial, manter infusão para evitar recorrência."
      ],
      patientGuidance: [
          "Sempre carregue balas, açúcar ou sachês de glicose.",
          "Não fique longos períodos em jejum.",
          "Avise familiares sobre como agir em caso de desmaio.",
          "Mantenha acompanhamento regular com endocrinologista."
      ]
  },
  {
      id: 52,
      title: "52. IMPETIGO",
      cid: "L01.0",
      differentialDiagnosis: "Dermatite de contato, herpes simples, varicela, escabiose, ectima.",
      initialConduct: [
          "Infecção superficial de pele, frequente em crianças, com lesões em crostas melicéricas ou bolhosas.",
          "Diagnóstico é clínico.",
          "Higienizar a pele com água e sabão neutro.",
          "Crianças: afastar da escola até 48h após início do antibiótico."
      ],
      nonPharmaTreatment: [
          "Lavar as lesões 2–3x/dia com água e sabão neutro.",
          "Fazer emoliência (compressas úmidas) para facilitar a retirada das crostas.",
          "Manter unhas curtas e limpas.",
          "Não compartilhar toalhas, roupas, brinquedos."
      ],
      pharmaTreatments: [
          {
              title: "Impetigo crostoso (poucas lesões)",
              medications: [
                  { name: "Mupirocina 2% pomada", category: "✅ SUS", details: "Aplicar fina camada nas lesões 3x/dia por 7 dias." },
                  { name: "Ácido fusídico 2% creme", category: "💎 não SUS", details: "Aplicar 2x/dia até melhora clínica." }
              ]
          },
          {
              title: "Impetigo extenso / bolhoso / suspeita de MSSA",
              medications: [
                  { name: "Cefalexina 500 mg", category: "✅ SUS", details: "Tomar 1 cp VO de 6/6 h por 7 dias." },
                  { name: "Penicilina benzatina 1.200.000 UI", category: "✅ SUS", details: "Aplicar dose única IM." }
              ]
          },
          {
            title: "Suspeita de MRSA (infecção comunitária)",
            medications: [
                { name: "Sulfametoxazol + Trimetoprima 800+160 mg", category: "✅ SUS", details: "Tomar 1 cp VO de 12/12 h por 7 dias." },
                { name: "Clindamicina 300 mg", category: "💎 não SUS", details: "Tomar 1 cp VO de 8/8 h por 7 dias." }
            ]
          }
      ],
      patientGuidance: [
          "Manter a pele limpa com água e sabão.",
          "Remover crostas delicadamente com compressas mornas.",
          "Manter precauções de contato até 24 horas após o início da antibioticoterapia.",
          "Retorno escolar: Liberar após 24 horas do início do tratamento.",
          "Procurar atendimento médico se houver febre persistente, sinais de sepse."
      ]
  },
  {
      id: 53,
      title: "53. INFECÇÃO DE PELE E PARTES MOLES (CELULITE LEVE)",
      cid: "L03.9",
      differentialDiagnosis: "Erisipela, abscesso, fasciíte necrosante, tromboflebite superficial.",
      initialConduct: [
          "Avaliar extensão da lesão e sinais sistêmicos (febre, taquicardia, hipotensão).",
          "Iniciar antibiótico precoce (maior eficácia nas primeiras 24–72 h).",
          "Marcar borda da lesão para acompanhar evolução.",
          "Pesquisar porta de entrada (micose, trauma, úlcera).",
          "Classificar como leve (ambulatorial) vs. grave (internação + antibiótico EV)."
      ],
      nonPharmaTreatment: [
          "Elevar o membro acometido para auxiliar drenagem do edema.",
          "Higienizar pele com água e sabão neutro.",
          "Tratar fatores predisponentes: linfedema, insuficiência venosa, micoses."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Cefalexina 500 mg", details: "Tomar 1 cp VO 6/6h por 7–10 dias." },
                  { name: "Amoxicilina + Clavulanato 875 + 125 mg", details: "Tomar 1 cp VO 12/12h por 7–10 dias." },
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO 6/6h se dor ou febre." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Clindamicina 300 mg", details: "Tomar 1 cp VO 8/8h por 7–10 dias (boa opção em alérgicos à penicilina)." },
                  { name: "Linezolida 600 mg", details: "Tomar 1 cp VO 12/12h em casos confirmados de MRSA (uso restrito)." }
              ]
          }
      ],
      patientGuidance: [
          "Retornar após o término do antibiótico para avaliação.",
          "Procurar atendimento se houver febre persistente, dor intensa, aumento da área eritematosa.",
          "Manter antibiótico pelo tempo prescrito, mesmo após melhora.",
          "Se não houver melhora em 72 h, pensar em MRSA ou diagnóstico alternativo."
      ]
  },
  {
      id: 54,
      title: "54. INFECÇÃO DE VIAS AÉREAS SUPERIORES (IVAS) - RESFRIADO COMUM",
      cid: "J06.9, J00",
      differentialDiagnosis: "Influenza, rinossinusite bacteriana, faringite estreptocócica, COVID-19.",
      initialConduct: [
          "Diagnóstico é clínico (coriza, congestão nasal, tosse, febre baixa).",
          "Antibióticos não são indicados.",
          "Tratar sintomas e orientar repouso relativo.",
          "Avaliar sinais de alarme: febre persistente > 38,5 °C, dispneia, dor torácica."
      ],
      nonPharmaTreatment: [
          "Repouso relativo.",
          "Hidratação abundante (2 L/dia).",
          "Manter ambiente arejado, evitar poeira e fumaça.",
          "Lavar mãos frequentemente."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO 6/6h se dor ou febre." },
                  { name: "Paracetamol 500 mg", details: "Tomar 1 cp VO 6/6h se dor ou febre." },
                  { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO 8/8h se dor ou febre persistente." },
                  { name: "Loratadina 10 mg", details: "Tomar 1 cp VO 1x/dia, se sintomas alérgicos." },
                  { name: "Soro fisiológico 0,9%", details: "Instilar 5 mL em cada narina, 3–4x/dia." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Desloratadina 5 mg", details: "Tomar 1 cp VO 1x/dia por 5–7 dias, se rinorreia intensa." },
                  { name: "Naproxeno 500 mg", details: "Tomar 1 cp VO 12/12h se dor persistente." }
              ]
          }
      ],
      patientGuidance: [
          "O resfriado comum é autolimitado (duração média de 7–10 dias).",
          "Evitar automedicação com antibióticos.",
          "Retornar se febre persistente, dispneia, ou secreção purulenta nasal > 10 dias.",
          "Manter calendário vacinal atualizado."
      ]
  },
  {
      id: 55,
      title: "55. INFLUENZA - GRIPE",
      cid: "J09-J11",
      differentialDiagnosis: "Resfriado comum, COVID-19, rinossinusite, pneumonia bacteriana.",
      initialConduct: [
          "Confirmar síndrome gripal: febre ≥ 37,8 °C, tosse, mialgia, cefaleia, fadiga.",
          "Avaliar sinais de gravidade: dispneia, SatO₂ < 94%, confusão mental, hipotensão.",
          "Iniciar antiviral o mais precoce possível (até 48h), especialmente em grupos de risco.",
          "Isolamento domiciliar até 24h após desaparecimento da febre."
      ],
      nonPharmaTreatment: [
          "Repouso relativo, boa hidratação e alimentação leve.",
          "Evitar tabaco e automedicação com corticoides.",
          "Uso de máscara durante sintomas para evitar contágio."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS (prioridade: grupos de risco, surtos e casos graves)",
              medications: [
                  { name: "Oseltamivir 75 mg", details: "Tomar 1 cp VO 12/12h por 5 dias. (pode estender até 10 dias em casos graves)." },
                  { name: "Dipirona 500 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 6/6h se dor ou febre (máx. 5 g/dia)." },
                  { name: "Ibuprofeno 400 mg", category: "Sintomáticos", details: "Tomar 1 cp VO de 8/8h se dor ou febre persistente." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Zanamivir 10 mg (inalatório)", details: "Inalar 10 mg 1x/dia por 7–10 dias. (Indicado apenas em intolerância GI ou resistência ao Oseltamivir)." }
              ]
          }
      ],
      patientGuidance: [
          "Início precoce do Oseltamivir (< 48h) aumenta eficácia.",
          "Procurar hospital se apresentar: falta de ar, dor torácica, febre persistente, cianose, confusão mental.",
          "Manter hidratação abundante e repouso relativo.",
          "Vacinação anual contra influenza é a melhor forma de prevenção."
      ]
  },
  {
      id: 56,
      title: "56. INSÔNIA",
      cid: "F51.0",
      differentialDiagnosis: "Depressão, ansiedade, apneia do sono (SAOS), uso de álcool/drogas.",
      initialConduct: [
          "Definir se insônia é aguda (≤ 3 meses) ou crônica (> 3 meses).",
          "Avaliar causas precipitantes: estresse, medicamentos, dor, doenças crônicas.",
          "Priorizar abordagens não farmacológicas como primeira linha.",
          "Fármacos devem ser usados apenas em casos refratários, por tempo limitado."
      ],
      nonPharmaTreatment: [
          "Medidas de higiene do sono: Estabelecer horário fixo, evitar luz e barulho, evitar eletrônicos antes de dormir, praticar atividade física regular (não à noite), evitar refeições pesadas/álcool/cafeína à noite.",
          "Terapia cognitivo-comportamental (TCC-I) é a abordagem de maior eficácia."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Amitriptilina 25 mg", details: "Tomar 1 cp VO à noite. Iniciar com dose baixa. Boa opção em insônia associada à dor crônica ou depressão." },
                  { name: "Clorpromazina 25mg", details: "Tomar 1 cp VO à noite. Uso apenas em casos selecionados." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Zolpidem 10 mg", details: "Tomar 1 cp VO à noite, imediatamente antes de dormir. Uso máximo: 4 semanas." },
                  { name: "Zopiclona 7,5 mg", details: "Tomar 1 cp VO à noite." },
                  { name: "Melatonina 3–10 mg", details: "Tomar 1 cp VO 30–60 min antes de dormir. Boa opção em idosos." }
              ]
          }
      ],
      patientGuidance: [
          "O tratamento deve ser multimodal (não farmacológico + farmacológico).",
          "Evitar uso prolongado de benzodiazepínicos/hipnóticos.",
          "Ajustar estilo de vida e priorizar higiene do sono.",
          "Buscar acompanhamento médico em casos persistentes."
      ]
  },
  {
      id: 57,
      title: "57. INSÔNIA NO IDOSO",
      cid: "F51.0",
      differentialDiagnosis: "Apneia do sono (SAOS), depressão, ansiedade, polifarmácia, doenças neurodegenerativas.",
      initialConduct: [
          "Avaliar se insônia é aguda (< 3 meses) ou crônica (> 3 meses).",
          "Revisar polifarmácia (diuréticos, corticoides, estimulantes).",
          "Priorizar medidas não farmacológicas (higiene do sono e TCC-I).",
          "Evitar benzodiazepínicos devido a risco de quedas, delirium, déficit cognitivo.",
          "Preferir fármacos com perfil mais seguro (melatonina, antidepressivos em baixa dose)."
      ],
      nonPharmaTreatment: [
          "Manter horário fixo de sono/vigília.",
          "Reduzir cochilos diurnos (no máx. 20–30 min).",
          "Evitar cafeína, nicotina e álcool após 18h.",
          "Incentivar exposição solar matinal.",
          "Atividade física leve/moderada regular (não próxima ao horário de dormir)."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Amitriptilina 10–25 mg", details: "Tomar ½ a 1 cp VO à noite. Útil em idosos com dor crônica ou depressão. Usar com cautela." },
                  { name: "Clorpromazina 25 mg", details: "Tomar 1 cp VO à noite. Considerar apenas em casos refratários, sob vigilância." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Melatonina 3–5 mg", details: "Tomar 1 cp VO 30–60 min antes de dormir. Primeira escolha em idosos, seguro e fisiológico." },
                  { name: "Trazodona 25–50 mg", details: "Tomar ½–1 cp VO à noite. Útil se insônia associada a depressão/ansiedade." }
              ]
          }
      ],
      patientGuidance: [
          "Evitar benzodiazepínicos clássicos (diazepam, clonazepam) — alto risco de quedas.",
          "Preferir melatonina como primeira opção farmacológica.",
          "Associar sempre medidas de higiene do sono.",
          "Estimular acompanhamento com geriatra se insônia for crônica.",
          "Reavaliar o tratamento a cada 4–6 semanas."
      ]
  },
  {
      id: 58,
      title: "58. INSUFICIÊNCIA CARDÍACA (IC)",
      cid: "I50.9",
      differentialDiagnosis: "DPOC, asma, doença renal crônica, cirrose, síndrome nefrótica.",
      initialConduct: [
          "Classificação: ICFER (Fração de ejeção ≤ 40%) vs ICFEP (Fração de ejeção ≥ 50%).",
          "Monitorar função renal, eletrólitos, pressão arterial e FC.",
          "Reavaliar periodicamente peso, sintomas e classe funcional (NYHA).",
          "Evitar AINEs e corticoides."
      ],
      nonPharmaTreatment: [
          "Restrição salina < 2 g/dia e hídrica 1,5–2 L/dia.",
          "Pesar-se diariamente (alerta: ganho >2 kg em 3 dias).",
          "Vacinação influenza e pneumocócica.",
          "Educação do paciente e familiares sobre sinais de alerta."
      ],
      pharmaTreatments: [
          {
              title: "IC com Fração de Ejeção Reduzida (ICFER ≤ 40%) - ✅ Opções SUS",
              medications: [
                  { name: "Carvedilol 3,125 mg", category: "Betabloqueadores", details: "Iniciar com 1 cp VO 12/12 h; progredir até 25 mg 12/12 h." },
                  { name: "Captopril 12,5 mg", category: "Inibidores da ECA", details: "Iniciar 1 cp VO 8/8 h; progredir até 50 mg VO 8/8 h." },
                  { name: "Espironolactona 25 mg", category: "Antagonista da aldosterona", details: "Tomar 1 cp VO 1x/dia (máx. 50 mg/dia)." },
                  { name: "Furosemida 40 mg", category: "Controle sintomático", details: "Tomar 1 cp VO pela manhã; se edema, 1 cp VO 2x/dia." }
              ]
          },
          {
              title: "IC com Fração de Ejeção Reduzida (ICFER ≤ 40%) - 💎 Opções não SUS",
              medications: [
                  { name: "Dapaglifozina 10 mg", category: "Inibidores SGLT2", details: "Tomar 1 cp VO 1x/dia, uso contínuo." },
                  { name: "Empaglifozina 10 mg", category: "Inibidores SGLT2", details: "Tomar 1 cp VO 1x/dia, uso contínuo." },
                  { name: "Sacubitril + Valsartana (ARNI)", category: "Alternativas", details: "substituir IECA/BRA em sintomáticos." }
              ]
          },
          {
            title: "IC com Fração de Ejeção Preservada (ICFEP ≥ 50%)",
            medications: [
                { name: "Dapaglifozina 10 mg", category: "iSGLT2", details: "Tomar 1 cp VO 1x/dia." },
                { name: "Empaglifozina 10 mg", category: "iSGLT2", details: "Tomar 1 cp VO 1x/dia." },
                { name: "Furosemida 40 mg", category: "Diuréticos", details: "Tomar 1 cp VO pela manhã; se edema, ajustar." }
            ]
        }
      ],
      patientGuidance: [
          "Não interromper medicamentos sem orientação médica.",
          "Manter dieta hipossódica e restrição hídrica.",
          "Procurar atendimento se: falta de ar em repouso, ganho de peso súbito, edema rápido, palpitações.",
          "Vacinação anual contra gripe e dose única contra pneumococo."
      ]
  },
  {
      id: 59,
      title: "59. INSUFICIÊNCIA RESPIRATÓRIA CRÔNICA",
      cid: "J96.1",
      differentialDiagnosis: "DPOC avançada, fibrose pulmonar, sequelas de tuberculose, apneia do sono.",
      initialConduct: [
          "Avaliar saturação de O₂ em repouso e após caminhada.",
          "Gasometria arterial: PaO₂ < 55 mmHg em repouso → indicação de O₂ domiciliar.",
          "Reabilitação pulmonar: exercícios respiratórios, fisioterapia.",
          "Vacinação anual contra influenza e a cada 5 anos contra pneumococo.",
          "Encaminhar para pneumologista em casos avançados."
      ],
      nonPharmaTreatment: [
          "Reabilitação pulmonar supervisionada.",
          "Cessar tabagismo.",
          "Suporte nutricional.",
          "Treino muscular inspiratório."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Salbutamol spray 100 mcg/jato", category: "Broncodilatadores", details: "Inalar 2 jatos de 6/6h se dispneia (máx. 8 jatos/dia)." },
                  { name: "Ipratrópio spray 20 mcg/jato", category: "Broncodilatadores", details: "Inalar 2 jatos de 6/6h, uso contínuo." },
                  { name: "Budesonida 200 mcg/dose", category: "Corticoide inalatório", details: "Inalar 1 dose de 12/12h, uso contínuo." },
                  { name: "Oxigenoterapia domiciliar", details: "Prescrição conforme PaO₂/SpO₂. Manter SatO₂ entre 88–92%." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Formoterol 12 mcg inalatório", details: "Inalar 1 cápsula 12/12h." },
                  { name: "Tiotrópio 18 mcg inalatório (LAMA)", details: "Inalar 1 cápsula 1x/dia." },
                  { name: "Formoterol + Budesonida (6 mcg + 200 mcg)", details: "Inalar 1 dose 12/12h." }
              ]
          }
      ],
      patientGuidance: [
          "Evitar cigarro e fumaça: principal medida para evitar progressão.",
          "Vacinas em dia: influenza anual, pneumococo a cada 5 anos.",
          "Uso correto dos inaladores: revisar técnica a cada consulta.",
          "Sinais de alerta: procurar emergência se apresentar piora súbita da dispneia, cianose, confusão mental ou febre."
      ]
  },
  {
      id: 60,
      title: "60. LARINGITE AGUDA",
      cid: "J04.0",
      differentialDiagnosis: "Faringite, epiglotite, abscesso periamigdaliano, refluxo faringolaríngeo.",
      initialConduct: [
          "Inflamação da laringe, geralmente autolimitada (3 a 7 dias).",
          "Sintomas: rouquidão/disfonia, tosse seca, odinofagia, febre baixa.",
          "Causas Comuns: Viral (rinovírus, influenza), Bacteriana (H. influenzae B), Alérgica, Abuso vocal.",
          "Avaliar sinais de gravidade: estridor, disfagia intensa, sialorreia (suspeita epiglotite)."
      ],
      nonPharmaTreatment: [
          "Repouso vocal absoluto – não cochichar nem forçar voz.",
          "Hidratação oral abundante (≥ 2 L/dia).",
          "Umidificação ambiental ou nebulização com SF 0,9%.",
          "Evitar cafeína, álcool, cigarro e alimentos muito ácidos."
      ],
      pharmaTreatments: [
          {
              title: "✅ Opções SUS",
              medications: [
                  { name: "Paracetamol 500–750 mg", details: "Tomar 1 cp VO a cada 6h se febre ou dor (máx. 4 g/dia)." },
                  { name: "Dipirona 500 mg", details: "Tomar 1 cp VO a cada 6h se dor ou febre." },
                  { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO de 8/8h por até 5 dias." },
                  { name: "Prednisona 20 mg", details: "Tomar 1–2 cp VO ao dia por 3–5 dias em casos de edema laríngeo ou disfonia intensa." }
              ]
          },
          {
              title: "💎 Opções não SUS",
              medications: [
                  { name: "Budesonida inalatória 200 mcg", details: "Inalar 1 jato 2x/dia por até 7 dias (casos com edema persistente)." },
                  { name: "Fluticasona spray nasal 50 mcg", details: "1 jato em cada narina 2x/dia se rinite alérgica associada." }
              ]
          }
      ],
      patientGuidance: [
          "Evite falar, canteiros ou esforço da voz até a melhora.",
          "Beba bastante água, mantenha o ambiente úmido.",
          "Evite cigarro, café e bebidas alcoólicas.",
          "Procure atendimento imediato se houver: dificuldade para respirar, engolir, ruído ao respirar (estridor) ou febre persistente."
      ]
  },
  {
    id: 61,
    title: "61. LER / DORT",
    cid: "M70 - M79",
    differentialDiagnosis: "Tendinite, bursite, tenossinovite, síndrome do túnel do carpo, fibromialgia, artrite reumatoide.",
    initialConduct: [
        "Avaliar história ocupacional, movimentos repetitivos e postura.",
        "Investigar dor localizada, rigidez, parestesia e limitação funcional.",
        "Exames de imagem apenas se diagnóstico duvidoso (RX, USG, RM).",
        "Afastar doenças inflamatórias ou neurológicas.",
        "Classificar fase da doença: aguda (dor/inflamação) ou crônica (rigidez/limitação funcional)."
    ],
    nonPharmaTreatment: [
        "Repouso relativo da região afetada.",
        "Reabilitação: proteção articular, conservação de energia, adaptações ergonômicas.",
        "Aplicar gelo local 15–20 min, 3–4x/dia nas fases agudas.",
        "Fisioterapia: alongamentos, fortalecimento muscular e reeducação postural.",
        "Uso de órteses/talas em casos selecionados.",
        "Orientar pausas regulares durante o trabalho."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6h se dor." },
                { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de 6/6h se dor." },
                { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO de 8/8h por até 7 dias." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Naproxeno 500 mg", details: "Tomar 1 cp VO de 12/12h por 7 dias." },
                { name: "Ciclobenzaprina 10 mg", details: "Tomar 1 cp VO à noite por até 10 dias (se contratura muscular associada)." },
                { name: "Etodolaco 500 mg", details: "Tomar 1 cp VO de 12/12h por 5 dias." },
                { name: "Cetorolaco de trometamol 10 mg SL", details: "Tomar 10 mg SL de 4/4h ou 6/6h. Máximo 40 mg/dia." }
            ]
        }
    ],
    proceduresInUnit: [
        "Dipirona 500mg/ml: Aplicar 1 ampola EV ou IM, dose única.",
        "Cetoprofeno 50mg/ml: Aplicar 1 ampola IM, dose única."
    ],
    patientGuidance: [
        "Fazer pausas durante a jornada de trabalho.",
        "Realizar exercícios de alongamento diariamente.",
        "Manter ambiente de trabalho adequado (mesa, cadeira, teclado).",
        "Evitar automedicação.",
        "Retornar se dor persistente ou déficit funcional.",
        "Avaliar necessidade de afastamento laboral."
    ]
},
{
    id: 62,
    title: "62. LEUCORREIAS - CANDIDÍASE VULVOVAGINAL",
    cid: "B37.3",
    differentialDiagnosis: "tricomoníase, vaginose bacteriana, dermatite de contato, líquen escleroso.",
    initialConduct: [
        "Avaliar características do corrimento: branco grumoso (“leite coalhado”), prurido intenso, pH ≤ 4,5.",
        "Realizar exame especular e, se possível, confirmar em microscopia (hifas/pseudohifas).",
        "Investigar comorbidades (diabetes, imunossupressão)."
    ],
    nonPharmaTreatment: [
        "Evitar duchas vaginais e produtos irritantes.",
        "Manter higiene íntima apenas com água e sabonete neutro.",
        "Abstinência sexual até término do tratamento.",
        "Não tratar parceiro assintomático."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Fluconazol 150 mg", details: "Tomar 1 cp VO em dose única." },
                { name: "Itraconazol 100 mg", details: "Tomar 2 cp VO de 12/12 h, por 1 dia." },
                { name: "Miconazol creme 2%", details: "Aplicar 1 aplicador vaginal à noite por 7 dias." },
                { name: "Nistatina creme vaginal (100.000 U/4 g)", details: "Aplicar 1 aplicador cheio, via vaginal, por 14 dias." }
            ]
        }
    ],
    patientGuidance: [
        "Não interromper o tratamento antes do tempo indicado.",
        "Procurar assistência se sintomas persistirem ou forem recorrentes.",
        "Manter uso de preservativo após tratamento para prevenção de novas infecções."
    ]
},
{
    id: 63,
    title: "63. LEUCORREIAS -TRICOMONÍASE UROGENITAL",
    cid: "A59.0",
    differentialDiagnosis: "vaginose bacteriana, candidíase, cervicite infecciosa.",
    initialConduct: [
        "Avaliar corrimento amarelado-esverdeado, espumoso, pH > 4,5, odor fétido.",
        "Procurar sinais de colo em “framboesa” (até 25% dos casos).",
        "Confirmar em microscopia: protozoário móvel (Trichomonas vaginalis)."
    ],
    nonPharmaTreatment: [
        "Abstinência sexual até finalização do tratamento.",
        "Orientar higiene íntima simples, sem duchas.",
        "Reforçar uso de preservativos após tratamento.",
        "Tratar parceiro sexual obrigatoriamente e manter abstinência até 7 dias após término do tratamento."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Metronidazol 500 mg", details: "Tomar 1 cp VO de 12/12 h por 7 dias." },
                { name: "Metronidazol 250 mg (Alternativa)", details: "Tomar 8 cp (2 g) VO em dose única." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Tinidazol 500 mg", details: "Tomar 4 cp VO em dose única." }
            ]
        }
    ],
    patientGuidance: [
        "Ambos os parceiros devem ser tratados ao mesmo tempo.",
        "Evitar álcool durante e até 48h após uso de metronidazol.",
        "Retornar se sintomas persistirem.",
        "Suspender amamentação por 12-24 horas se uso de metronidazol."
    ]
},
{
    id: 64,
    title: "64. LEUCORREIAS - VAGINOSE BACTERIANA",
    cid: "N76.0",
    differentialDiagnosis: "candidíase, tricomoníase, cervicite por clamídia ou gonococo.",
    initialConduct: [
        "Identificar corrimento branco-acinzentado, homogêneo, odor de “peixe cru”, pH > 4,5.",
        "Confirmar com teste das aminas e presença de clue cells na microscopia."
    ],
    nonPharmaTreatment: [
        "Higienização íntima adequada, sem duchas vaginais.",
        "Orientar abstinência sexual até fim do tratamento.",
        "Uso de preservativo em todas as relações.",
        "Não tratar parceiro rotineiramente."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Metronidazol 500 mg", details: "Tomar 1 cp VO de 12/12 h por 7 dias." },
                { name: "Metronidazol gel vaginal 0,75%", details: "Aplicar 1 aplicador (5 g) via vaginal à noite por 5 dias." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Bio-vagin®, Colpist MT®, Colpistatin®", details: "Aplicar 1 aplicador cheio (4 g) por noite, profundamente, na vagina, durante 10 dias consecutivos." }
            ]
        }
    ],
    patientGuidance: [
        "Não consumir álcool durante e até 48h após uso de metronidazol.",
        "Evitar relações durante o tratamento.",
        "Retornar se houver recidiva frequente."
    ]
},
{
    id: 65,
    title: "65. LINFOGRANULOMA VENÉREO (LGV)",
    cid: "A55",
    differentialDiagnosis: "Sífilis, cancro mole, herpes genital, donovanose, tuberculose ganglionar.",
    initialConduct: [
        "IST causada por Chlamydia trachomatis sorotipos L1, L2 e L3.",
        "Suspeitar em paciente com úlcera genital indolor inicial que evolui para linfonodomegalia inguinal dolorosa (bubão).",
        "Investigar história epidemiológica (parceiros sexuais, área endêmica, IST prévia).",
        "Solicitar exames confirmatórios quando disponíveis: PCR de secreções ou biópsia.",
        "Iniciar tratamento empírico imediato diante da suspeita clínica."
    ],
    nonPharmaTreatment: [],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Doxiciclina 100 mg", details: "Tomar 1 cp VO de 12/12h por 21 dias." },
                { name: "Azitromicina 1 g VO (Alternativa)", details: "Tomar 1 cp VO 1x/semana por 3 semanas." },
                { name: "Eritromicina 500 mg (Alternativa)", details: "Tomar 1 cp VO de 6/6h por 21 dias." }
            ]
        }
    ],
    patientGuidance: [
        "Tratar todos os parceiros sexuais.",
        "Evitar relação até cura clínica.",
        "Retornar se mantiver sintomas ou reaparecer linfonodomegalia."
    ]
},
{
    id: 66,
    title: "66. MASTITE PUERPERAL",
    cid: "O91.0",
    differentialDiagnosis: "Ingurgitamento mamário, abscesso mamário, galactocele, câncer de mama inflamatório.",
    initialConduct: [
        "Identificar lactante com dor, calor, rubor e endurecimento em segmento da mama.",
        "Avaliar presença de febre alta e sintomas sistêmicos.",
        "Diferenciar mastite simples de abscesso mamário (presença de flutuação/coleção).",
        "Investigar fatores predisponentes: ingurgitamento, traumas mamilares, obstrução ductal.",
        "Iniciar tratamento clínico imediato e orientar manutenção da amamentação."
    ],
    nonPharmaTreatment: [
        "Sem critério de internação: Manter o aleitamento ou ordenha manual. Esvaziar completamente as mamas após cada mamada. Compressas frias após mamada.",
        "Com critério de internação (casos graves/abscesso): Continuar aleitamento/ordenha. Drenagem cirúrgica se abscesso. Antibióticos EV."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Cefalexina 500 mg", details: "Tomar 1 cp VO de 6/6h por 7 dias." },
                { name: "Amoxicilina + Clavulanato 875/125 mg", details: "Tomar 1 cp VO de 12/12h por 7 dias." },
                { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6h se dor ou febre." },
                { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO de 8/8h por até 7 dias." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Clindamicina 300 mg", details: "Tomar 1 cp VO de 8/8h por 7–10 dias (se alergia a penicilinas)." },
                { name: "Azitromicina 500 mg", details: "Tomar 1 cp VO 1x/dia por 3 dias (alternativa em alergia a beta-lactâmicos)." }
            ]
        }
    ],
    proceduresInUnit: [
        "Oxacilina 500 mg: Administrar 2 g EV de 6/6h.",
        "Ceftriaxona 1 g: Administrar 1 frasco EV de 12/12h.",
        "Se abscesso mamário: Realizar drenagem cirúrgica + antibiótico EV."
    ],
    patientGuidance: [
        "Manter aleitamento, que ajuda no esvaziamento da mama.",
        "Procurar atendimento imediato se febre persistente, dor intensa ou sinais de abscesso.",
        "Não interromper precocemente a amamentação.",
        "Usar sutiã de sustentação confortável."
    ]
},
{
    id: 67,
    title: "67. METRORRAGIA POR MIOMATOSE UTERINA",
    cid: "D25 / N92.0",
    differentialDiagnosis: "Adenomiose, pólipos endometriais, hiperplasia endometrial, câncer de endométrio, gravidez.",
    initialConduct: [
        "Sangramento uterino anormal causado por miomas.",
        "Causas de metrorragia e anemia em mulheres em idade fértil.",
        "Pode causar anemia ferropriva, dor ou pressão pélvica.",
        "Exames: Ultrassonografia pélvica transvaginal (principal), hemograma e ferritina."
    ],
    nonPharmaTreatment: [
        "Orientar rastreamento regular com ginecologista.",
        "Avaliar risco de anemia (orientar dieta rica em ferro).",
        "Planejamento reprodutivo (alguns tratamentos afetam fertilidade)."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Ácido tranexâmico 500 mg", details: "Tomar 1 cp VO de 8/8h durante o sangramento (máx. 5 dias)." },
                { name: "Ácido mefenâmico 500 mg", details: "Tomar 1 cp VO de 8/8h durante o sangramento (máx. 5 dias)." },
                { name: "Ibuprofeno 600 mg", details: "Tomar 1 cp VO de 8/8h durante o sangramento (reduz fluxo e cólica)." },
                { name: "Sulfato ferroso 300 mg (60 mg Fe)", category: "Correção da anemia", details: "Tomar 1 cp VO de 12/12h por 3–6 meses." }
            ]
        }
    ],
    proceduresInUnit: [
        "Internar se sangramento intenso + instabilidade hemodinâmica.",
        "Reposição volêmica + hemotransfusão se necessário.",
        "Curetagem hemostática em casos selecionados.",
        "Encaminhar para cirurgia eletiva: miomectomia ou histerectomia."
    ],
    patientGuidance: [
        "Explicar que miomas são tumores benignos e comuns.",
        "Reforçar importância de seguimento ginecológico regular.",
        "Procurar urgência se sangramento intenso, fraqueza, palpitações ou síncope.",
        "Adesão ao tratamento da anemia é essencial para recuperação."
    ]
},
{
    id: 68,
    title: "68. MICOSES CUTÂNEAS (DERMATOFITOSES / CANDIDÍASE)",
    cid: "B35 / B37.2",
    differentialDiagnosis: "Psoríase, eczema, dermatite seborreica, eritrasma, pitiríase rósea.",
    initialConduct: [
        "Suspeitar em lesões eritematosas descamativas, prurido em dobras, alterações ungueais.",
        "Identificar forma clínica: tinea corporis, pedis, cruris, onicomicose, candidíase.",
        "Avaliar fatores predisponentes: umidade, roupas apertadas, imunossupressão.",
        "Confirmar diagnóstico clinicamente; solicitar exame micológico/cultura se necessário."
    ],
    nonPharmaTreatment: [
        "Orientar medidas gerais: higiene adequada, manter pele seca, evitar roupas sintéticas/apertadas, não compartilhar toalhas/calçados."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS (Uso Tópico)",
            medications: [
                { name: "Cetoconazol creme 2%", details: "Aplicar fina camada sobre lesão 1x/dia por 2–4 semanas." },
                { name: "Clotrimazol creme 1%", details: "Aplicar 2x/dia sobre lesão até resolução (2–4 semanas)." },
                { name: "Nistatina creme 100.000 UI/g", details: "Aplicar 2–3x/dia (especialmente em candidíase de dobras)." }
            ]
        },
        {
            title: "💎 Opções não SUS (Uso Oral)",
            medications: [
                { name: "Fluconazol 150 mg", details: "Tomar 1 cp VO 1x/semana por 4–6 semanas (onicomicoses e casos extensos)." },
                { name: "Itraconazol 100 mg", details: "Tomar 2 cp VO/dia por 7 dias (pulso) ou 1 cp VO 12/12h por 7 dias (opção)." }
            ]
        }
    ],
    patientGuidance: [
        "Manter tratamento pelo tempo prescrito, mesmo após melhora clínica inicial.",
        "Trocar roupas íntimas e meias diariamente.",
        "Evitar umidade e calor excessivo.",
        "Retornar se não houver melhora após 4 semanas de uso tópico.",
        "Em onicomicose: tratamento oral é prolongado, pode durar até 3–6 meses."
    ]
},
{
    id: 69,
    title: "69. MONONUCLEOSE INFECCIOSA",
    cid: "B27.9",
    differentialDiagnosis: "Amigdalite bacteriana, citomegalovirose, toxoplasmose, HIV agudo, hepatite viral.",
    initialConduct: [
        "Avaliar clínica (febre, faringite, linfadenomegalia).",
        "Solicitar hemograma (linfocitose com linfócitos atípicos).",
        "Considerar sorologia (Monospot ou IgM anti-VCA) se dúvida.",
        "Orientar repouso relativo e hidratação.",
        "Evitar atividades físicas de contato por risco de ruptura esplênica.",
        "Suspender antibióticos beta-lactâmicos (amoxicilina/ampicilina) por risco de rash."
    ],
    nonPharmaTreatment: [
        "Repouso relativo, hidratação oral adequada.",
        "Evitar esforço físico intenso por risco de ruptura esplênica.",
        "Alimentação leve e fracionada."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS (Sintomáticos)",
            medications: [
                { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6h se febre ou dor." },
                { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de 6/6h se febre ou dor." },
                { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO de 8/8h por até 5 dias se dor ou odinofagia." }
            ]
        },
        {
            title: "(Casos graves)",
            medications: [
                { name: "Prednisona 20 mg", details: "Tomar 1 cp VO de 12/12h por 5 dias (apenas em obstrução grave de via aérea, trombocitopenia grave ou complicações neurológicas)." }
            ]
        }
    ],
    proceduresInUnit: [
        "Internação se obstrução respiratória grave, complicações hematológicas ou neurológicas.",
        "Oxigenoterapia e corticoide EV se via aérea ameaçada."
    ],
    patientGuidance: [
        "Evitar esportes de contato ou atividades de impacto por 3–4 semanas.",
        "Não compartilhar talheres ou copos (vírus transmitido pela saliva).",
        "Procurar atendimento se surgirem dor abdominal intensa, icterícia, sangramentos.",
        "Explicar evolução benigna e autolimitada (2–4 semanas)."
    ]
},
{
    id: 70,
    title: "70. NEOPLASIA DE PRÓSTATA (HPB E CÂNCER)",
    cid: "N40 / C61",
    differentialDiagnosis: "Prostatite, cálculos prostáticos, carcinoma de bexiga, estenose uretral.",
    initialConduct: [
        "Avaliar sintomas urinários (jato fraco, noctúria, hesitação).",
        "Realizar toque retal para avaliar tamanho, consistência e nódulos.",
        "Solicitar PSA sérico (rastreamento e acompanhamento).",
        "Ultrassonografia de próstata (via abdominal ou transretal) se disponível.",
        "Encaminhar à urologia em casos suspeitos de neoplasia maligna."
    ],
    nonPharmaTreatment: [
        "Orientar redução de cafeína, álcool e líquidos noturnos.",
        "Evitar uso de descongestionantes e anticolinérgicos.",
        "Incentivar esvaziamento vesical programado.",
        "Acompanhamento anual com PSA e toque retal conforme idade e risco."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS (para HPB sintomática)",
            medications: [
                { name: "Doxazosina 2 mg", details: "Tomar 1 cp VO à noite, podendo aumentar para 4–8 mg/dia." },
                { name: "Tansulosina 0,4 mg", details: "Tomar 1 cp VO 1x/dia (se disponível)." },
                { name: "Finasterida 5 mg", details: "Tomar 1 cp VO 1x/dia (em próstatas > 40 g)." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Dutasterida 0,5 mg", details: "Tomar 1 cp VO 1x/dia (alternativa à finasterida)." }
            ]
        }
    ],
    proceduresInUnit: [
        "Se retenção urinária: sondagem vesical de alívio ou cistostomia.",
        "Encaminhar para urologia em casos de: Nódulo suspeito, PSA elevado, Hematúria, Insuficiência renal."
    ],
    patientGuidance: [
        "A HPB é benigna, mas pode causar sintomas urinários significativos.",
        "O câncer de próstata pode ser assintomático nas fases iniciais — reforçar importância do rastreamento.",
        "Explicar que o rastreamento deve ser individualizado (idade ≥ 50 anos, ou ≥ 45 se alto risco).",
        "Orientar retorno se sintomas urinários piorarem, surgirem hematúria ou dor óssea."
    ]
},
{
    id: 71,
    title: "71. NEURALGIA PÓS-HERPÉTICA",
    cid: "B02.2",
    differentialDiagnosis: "Neuropatia diabética, neuralgia do trigêmeo, neuropatia compressiva.",
    initialConduct: [
        "Complicação do herpes-zóster, com dor persistente por > 90 dias.",
        "Dor em queimação, contínua ou em choques, no mesmo dermátomo.",
        "Pode ser acompanhada de alodinia (dor ao toque leve).",
        "Mais comum em idosos e imunossuprimidos."
    ],
    nonPharmaTreatment: [
        "Evitar exposição ao frio e atrito local.",
        "Uso de roupas leves e de algodão.",
        "Apoio psicológico."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Amitriptilina 25 mg", details: "Tomar 1 cp VO à noite (pode ajustar até 75 mg/dia)." },
                { name: "Gabapentina 300 mg", details: "Iniciar com 300 mg à noite, titular até 900–3600 mg/dia." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Pregabalina 75 mg", details: "Tomar 1 cp VO de 12/12h (até 300 mg/dia)." },
                { name: "Duloxetina 60 mg", details: "Tomar 1 cp VO 1x/dia." },
                { name: "Tramadol 50 mg", details: "Tomar 1 cp VO de 8/8h por até 5 dias (se dor intensa refratária)." }
            ]
        }
    ],
    patientGuidance: [
        "Explicar caráter crônico, mas controlável.",
        "Reforçar adesão ao tratamento.",
        "Procurar atendimento se dor incapacitante ou refratária."
    ]
},
{
    id: 72,
    title: "72. NEUROPATIA PERIFÉRICA DIABÉTICA",
    cid: "E11.4",
    differentialDiagnosis: "Neuropatia alcoólica, carencial (B12, folato), tóxica, hanseníase.",
    initialConduct: [
        "Complicação crônica do diabetes, com lesão progressiva dos nervos periféricos, em padrão “luva e bota”.",
        "Apresentação: Dormência, formigamento, queimação ou dor em membros inferiores. Piora noturna.",
        "Diagnóstico: Exame clínico (monofilamento, diapasão), eletroneuromiografia em casos atípicos."
    ],
    nonPharmaTreatment: [
        "Controle rigoroso da glicemia (principal medida preventiva e terapêutica).",
        "Cessar tabagismo e álcool.",
        "Orientar inspeção diária dos pés.",
        "Uso de calçados adequados (evitar andar descalço).",
        "Educação do paciente para prevenção de úlceras."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS (para dor neuropática)",
            medications: [
                { name: "Amitriptilina 25 mg", details: "Tomar 1 cp VO à noite, podendo aumentar até 75 mg/dia." },
                { name: "Duloxetina 60 mg", details: "Tomar 1 cp VO 1x/dia." },
                { name: "Gabapentina 300 mg", details: "Iniciar com 300 mg à noite, titular até 900–3600 mg/dia." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Pregabalina 75 mg", details: "Tomar 1 cp VO de 12/12h (até 300 mg/dia)." },
                { name: "Tramadol 50 mg", details: "Tomar 1 cp VO de 8/8h por até 5 dias se dor intensa refratária." }
            ]
        }
    ],
    proceduresInUnit: [
        "Internar se úlcera infectada, osteomielite ou pé diabético complicado.",
        "Iniciar antibiótico EV conforme gravidade e cobertura necessária."
    ],
    patientGuidance: [
        "Manter glicemia controlada (hemoglobina glicada < 7%).",
        "Examinar os pés diariamente em busca de feridas ou bolhas.",
        "Usar sapatos confortáveis e evitar andar descalço.",
        "Retornar se surgirem úlceras, dor intensa ou perda acentuada da sensibilidade.",
        "Manter acompanhamento com endocrinologista/clinico."
    ]
},
{
    id: 73,
    title: "73. NEVRALGIA DO TRIGÊMEO",
    cid: "G50.0",
    differentialDiagnosis: "Nevralgia pós-herpética, nevralgia glossofaríngea, cefaleia em salvas.",
    initialConduct: [
        "Dor lancinante, unilateral, recorrente e abrupta, no território do nervo trigêmeo.",
        "Etiologia: Principalmente compressão vascular da raiz do nervo.",
        "Apresentação: Dor em choque elétrico, desencadeada por estímulos não dolorosos (toque, mastigação)."
    ],
    nonPharmaTreatment: [
        "Evitar fatores desencadeantes.",
        "Higiene oral adequada.",
        "Apoio psicológico."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS (Primeira escolha)",
            medications: [
                { name: "Carbamazepina 200 mg", details: "Tomar ½ cp VO de 12/12h, aumentando gradualmente até 600–1200 mg/dia." }
            ]
        },
        {
            title: "✅ Opções SUS (Segunda escolha)",
            medications: [
                { name: "Gabapentina 300 mg", details: "Tomar 1 cp VO de 8/8h a 12/12h, titular até 900–2400 mg/dia." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Oxcarbazepina 300 mg", details: "Tomar ½ cp VO de 12/12h, aumentando até 1200–1800 mg/dia." },
                { name: "Pregabalina 75 mg", details: "Tomar 1 cp VO de 12/12h (máx. 300 mg/dia)." },
                { name: "Baclofeno 10 mg", details: "Tomar 1 cp VO 8/8h." }
            ]
        }
    ],
    proceduresInUnit: [
        "Encaminhar para neurologia/neurocirurgia.",
        "Técnicas possíveis: bloqueio do nervo, radiofrequência, rizotomia, descompressão microvascular."
    ],
    patientGuidance: [
        "Explicar caráter crônico, mas tratável.",
        "Manter adesão ao tratamento.",
        "Alertar sobre efeitos adversos da carbamazepina.",
        "Procurar retorno se dor refratária ou novos sintomas neurológicos."
    ]
},
{
    id: 74,
    title: "74. OBSTRUÇÃO NASAL CRÔNICA / RINOSSINUSITE",
    cid: "J32 / J34",
    differentialDiagnosis: "Rinite alérgica, desvio de septo, pólipos nasais, rinite vasomotora.",
    initialConduct: [
        "Obstrução nasal persistente (> 12 semanas), geralmente associada a rinite alérgica, pólipos ou sinusite crônica.",
        "Apresentação clínica: Congestão nasal, rinorreia crônica, hiposmia/anosmia, tosse crônica.",
        "Diagnóstico: Clínico, com base em sintomas persistentes. Nasofibroscopia e TC em casos refratários."
    ],
    nonPharmaTreatment: [
        "Lavar fossas nasais com SF 0,9% 2–3x/dia.",
        "Evitar exposição a poeira, fumaça e alérgenos."
    ],
    pharmaTreatments: [
        {
            title: "Antibioticoterapia (Tratamento empírico)",
            medications: [
                { name: "Amoxicilina + clavulanato 500 + 125 mg", category: "✅ SUS", details: "Tomar 1 cp VO de 8/8h por 5–7 dias." },
                { name: "Cefdinir 250 mg/5 mL", category: "Esquema B - Alergia não grave", details: "Tomar 6 mL VO de 12/12h por 5–7 dias." },
                { name: "Levofloxacino 750 mg", category: "Esquema C - Alergia grave", details: "Tomar 1 cp VO de 24/24h por 5–7 dias." }
            ]
        },
        {
            title: "Tratamento Adjuvante",
            medications: [
                { name: "Budesonida spray nasal 64 mcg", category: "✅ SUS - Corticoide", details: "Aplicar 1-2 jato em cada narina 12/12h por 10 dias." },
                { name: "Soro Fisiologico Nasal 0,9%", category: "✅ SUS", details: "Instilar 5 ml em cada narina varias vezes ao dia." },
                { name: "Prednisolona 20 mg", category: "✅ SUS - Corticoide Sistêmico", details: "Tomar 1 cp VO de 12/12 horas por 5 dias." },
                { name: "Loratadina 10 mg", category: "✅ SUS - Sintomáticos", details: "Tomar 1 cp VO 1x/dia se componente alérgico." }
            ]
        }
    ],
    patientGuidance: [
        "Manter irrigação nasal diária.",
        "Evitar automedicação com descongestionantes tópicos.",
        "Retornar se sintomas persistirem > 3 meses ou se houver febre/dor intensa."
    ]
},
{
    id: 75,
    title: "75. ONICOMICOSE",
    cid: "B35.1",
    differentialDiagnosis: "Psoríase ungueal, líquen plano, trauma ungueal, onicogrifose.",
    initialConduct: [
        "Infecção fúngica da lâmina ungueal, por dermatófitos.",
        "Apresentação: Espessamento e fragilidade da unha, alteração da cor, descolamento.",
        "Diagnóstico: Clínico, exame micológico/cultura para confirmação."
    ],
    nonPharmaTreatment: [
        "Cortar unhas regularmente, mantendo-as curtas e secas.",
        "Evitar calçados apertados e meias sintéticas.",
        "Higienizar instrumentos de manicure/pedicure ou usar materiais descartáveis.",
        "Lixar a superfície da unha antes da aplicação de medicação tópica."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Esmalte ciclopirox 8%", details: "Aplicar diariamente sobre a unha afetada, após lixar, por 6–12 meses (pés) ou 3–6 meses (mãos)." },
                { name: "Terbinafina 250 mg", details: "Tomar 1 cp VO 1x/dia por 6 semanas (mãos) ou 12 semanas (pés)." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Amorolfina 5% esmalte", details: "Aplicar 1–2x por semana, por 6–12 meses (pés) ou 3–6 meses (mãos)." },
                { name: "Itraconazol 100 mg", details: "Tomar 2 cp VO 12/12h por 7 dias/mês (pulsoterapia), repetir por 2 meses (mãos) ou 3–4 meses (pés)." }
            ]
        }
    ],
    patientGuidance: [
        "O tratamento é prolongado (meses), unhas podem demorar até 12 meses para crescer normais.",
        "Seguir corretamente a prescrição, não interromper por conta própria.",
        "Procurar atendimento se houver falha terapêutica ou efeitos adversos.",
        "Evitar compartilhar objetos pessoais e manter higiene rigorosa."
    ]
},
{
    id: 76,
    title: "76. OBSTIPAÇÃO (CONSTIPAÇÃO INTESTINAL)",
    cid: "K59.0",
    differentialDiagnosis: "Síndrome do intestino irritável, câncer colorretal, hipotiroidismo, uso de opioides.",
    initialConduct: [
        "Evacuações infrequentes (< 3x/semana), fezes endurecidas, esforço excessivo.",
        "Apresentação: Redução da frequência, fezes endurecidas, dor, sensação de evacuação incompleta.",
        "Diagnóstico: Clínico. Avaliar sinais de alarme (perda de peso, sangue oculto, início súbito em idosos)."
    ],
    nonPharmaTreatment: [
        "Aumentar ingestão de fibras (frutas, verduras, cereais integrais).",
        "Hidratação adequada (2–3 L/dia).",
        "Praticar atividade física regularmente.",
        "Evitar o hábito de reter evacuações."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Lactulose xarope 667 mg/mL", details: "Tomar 10–20 mL VO 1–2x/dia, ajustar conforme resposta." },
                { name: "Óleo mineral 15 mL", details: "Tomar 15 mL VO de 8/8h por até 7 dias (uso curto prazo)." }
            ]
        },
        {
            title: "Na unidade (resgate)",
            medications: [
                { name: "Fosfato de sódio enema (Fleet enema®)", details: "Aplicar 1 enema por via retal, dose única." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Polietilenoglicol (PEG 3350) 17 g", details: "Dissolver 1 sachê em 200 mL de água e tomar 1–2x/dia." },
                { name: "Bisacodil 5 mg", details: "Tomar 1–2 cp VO à noite (uso eventual)." }
            ]
        }
    ],
    patientGuidance: [
        "Manter dieta rica em fibras e líquidos.",
        "Evitar uso crônico de laxativos estimulantes.",
        "Procurar atendimento se houver sangue nas fezes, emagrecimento, dor abdominal persistente.",
        "Estimular evacuação em horários regulares."
    ]
},
{
    id: 77,
    title: "77. OTITE EXTERNA AGUDA (OE)",
    cid: "H60.9",
    differentialDiagnosis: "Otite média aguda, otomastoidite, dermatite seborreica, psoríase de conduto auditivo.",
    initialConduct: [
        "Infecção/inflamação difusa do conduto auditivo externo, geralmente após trauma ou exposição à água.",
        "Apresentação: Otalgia intensa (piora à manipulação), prurido, hipoacusia leve, otorreia.",
        "Diagnóstico: Clínico, baseado em exame otoscópico."
    ],
    nonPharmaTreatment: [],
    pharmaTreatments: [
        {
            title: "💎 Opções não SUS (Uso Tópico Otológico)",
            medications: [
                { name: "Ciprofloxacino + Hidrocortisona otológico", details: "Instilar 3 gotas no ouvido afetado de 8/8h por 7–10 dias." },
                { name: "Neomicina + Polimixina B + Hidrocortisona otológico", details: "Instilar 3 gotas de 8/8h por 7–10 dias." }
            ]
        },
        {
            title: "Uso oral",
            medications: [
                { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6h se dor." },
                { name: "Ibuprofeno 400 mg", details: "Tomar 1 cp VO de 8/8h por até 5 dias se dor." }
            ]
        }
    ],
    patientGuidance: [
        "Manter conduto seco até melhora completa.",
        "Evitar mergulhos e natação durante o tratamento.",
        "Retornar se houver febre, dor intensa ou otorreia persistente."
    ]
},
{
    id: 78,
    title: "78. OTITE MÉDIA AGUDA (OMA)",
    cid: "H66.9",
    differentialDiagnosis: "Otite externa, mastoidite, sinusite, corpo estranho, barotrauma.",
    initialConduct: [
        "Infecção da orelha média, geralmente após IVAS. Mais comum em crianças.",
        "Apresentação: Otalgia súbita, febre, irritabilidade, hipoacusia.",
        "Diagnóstico: Clínico com base na otoscopia (membrana timpânica hiperemiada, abaulada)."
    ],
    nonPharmaTreatment: [
        "Hidratação oral adequada.",
        "Repouso relativo.",
        "Analgesia e antitérmicos."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Amoxicilina com Clavulanato (500mg + 125 mg)", details: "Tomar 1 cp VO de 8/8 horas por 10 dias." },
                { name: "Amoxicilina com Clavulanato (875mg + 125 mg)", details: "Tomar 1 cp VO de 12/12 horas por 10 dias." },
                { name: "Amoxicilina 500 mg", details: "Tomar 1 cp VO de 8/8h por 10 dias." },
                { name: "Azitromicina 500 mg", details: "Tomar 1 cp VO 1x/dia por 3 dias." },
                { name: "Levofloxacino 500 mg", details: "Tomar 1 cp VO 1x/dia por 5 dias." },
                { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6h se dor ou febre." },
                { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de 6/6h se dor ou febre." }
            ]
        }
    ],
    patientGuidance: [
        "Não introduzir objetos no ouvido.",
        "Procurar atendimento imediato se surgirem sinais de complicação (mastoidite, meningite).",
        "Reforçar adesão ao antibiótico até o fim do tratamento.",
        "Retornar se persistirem sintomas após 72h."
    ]
},
{
    id: 79,
    title: "79. PARALISIA FACIAL PERIFÉRICA (BELL)",
    cid: "G51.0",
    differentialDiagnosis: "AVC, tumor de nervo facial, otite média, síndrome de Ramsay Hunt.",
    initialConduct: [
        "Paralisia periférica aguda e idiopática do nervo facial (VII par).",
        "Apresentação: Instalação súbita de paresia/paralisia unilateral da face, assimetria facial, incapacidade de fechar o olho.",
        "Diagnóstico: Clínico, após excluir causas centrais (AVC → poupa músculos da testa)."
    ],
    nonPharmaTreatment: [
        "Proteção ocular (lágrimas artificiais, pomadas lubrificantes, tampão ocular noturno).",
        "Orientar repouso relativo e evitar exposição ao frio.",
        "Encaminhar para Fisioterapia motora facial precoce."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Prednisona 20 mg", details: "Tomar 3 cp VO pela manhã por 5 dias, depois reduzir gradualmente em 10 dias." },
                { name: "Aciclovir 400 mg", details: "Tomar 1 cp VO de 8/8h por 7 dias (associar ao corticoide, se suspeita de origem viral)." }
            ]
        },
        {
            title: "💎 Opções não SUS",
            medications: [
                { name: "Lágrimas artificiais / gel lubrificante ocular", details: "Instilar 1 gota no olho afetado a cada 4–6h." }
            ]
        }
    ],
    patientGuidance: [
        "Iniciar tratamento dentro de 72h para melhor prognóstico.",
        "A maioria dos pacientes recupera totalmente em até 6 meses.",
        "Proteger o olho afetado contra ressecamento e infecção.",
        "Procurar atendimento se houver piora dos sintomas ou sinais neurológicos adicionais."
    ]
},
{
    id: 80,
    title: "80. PEDICULOSE (INFESTAÇÃO POR PIOLHOS)",
    cid: "B85",
    differentialDiagnosis: "Dermatite seborreica, caspa, escabiose, dermatite de contato.",
    initialConduct: [
        "Infestação por Pediculus humanus capitis.",
        "Apresentação: Prurido intenso no couro cabeludo, presença de lêndeas aderidas aos fios.",
        "Diagnóstico: Clínico: identificação de lêndeas viáveis ou piolhos vivos."
    ],
    nonPharmaTreatment: [
        "Passar pente fino diariamente nos cabelos molhados, repetir a cada 3–4 dias por 2 semanas.",
        "Retirada manual de lêndeas com auxílio de condicionador ou óleos.",
        "Higienizar pentes e escovas com álcool 70% ou água fervente.",
        "Lavar roupas, lençóis e toalhas em água quente (> 60 °C) ou passar a ferro."
    ],
    pharmaTreatments: [
        {
            title: "✅ Opções SUS",
            medications: [
                { name: "Ivermectina 6 mg", details: "Tomar 200 mcg/kg VO em dose única, repetir após 7 dias." }
            ]
        },
        {
            title: "💎 Opções não SUS (Uso Tópico)",
            medications: [
                { name: "Permetrina 1% loção ou xampu", details: "Aplicar no couro cabeludo seco, deixar agir por 10 minutos e enxaguar. Repetir após 9–10 dias." },
                { name: "Permetrina 5% loção", details: "Aplicar no couro cabeludo à noite, lavar pela manhã após 8–12h. Repetir após 7 dias." },
                { name: "Deltametrina 0,2 mg/mL (xampu)", details: "Aplicar no couro cabeludo, deixar 5 minutos, enxaguar bem. Usar por 4 dias seguidos." },
                { name: "Ivermectina 0,5% tópica", details: "Aplicar no cabelo seco até saturar, deixar 10 minutos e enxaguar. Dose única." }
            ]
        }
    ],
    patientGuidance: [
        "Tratar simultaneamente todos os familiares e contatos próximos.",
        "Reaplicar a medicação após 7–10 dias para eliminar novos parasitas.",
        "Retirar lêndeas manualmente ou com pente fino diariamente.",
        "Descartar ou desinfetar objetos pessoais (pentes, bonés, travesseiros).",
        "Procurar atendimento se houver sinais de infecção secundária (impetigo, celulite)."
    ]
},
{
  id: 81,
  title: "81. PNEUMONIA ADQUIRIDA NA COMUNIDADE (PAC)",
  cid: "J18.9",
  differentialDiagnosis: "Tuberculose pulmonar, influenza, bronquite aguda, embolia pulmonar, ICC descompensada.",
  initialConduct: [
      "Infecção aguda do parênquima pulmonar adquirida fora do ambiente hospitalar.",
      "Apresentação clínica: Febre, tosse produtiva, expectoração purulenta, dor torácica pleurítica, dispneia, estertores crepitantes.",
      "Diagnóstico: Clínico + radiografia de tórax (infiltrado novo). Avaliar gravidade com CURB-65 ou PORT/PSI.",
      "CURB-65 (1 ponto cada): C(Confusão), U(Ureia > 50), R(Respiração ≥ 30), B(Baixa pressão < 90/60), 65(Idade ≥ 65). 0-1: Ambulatorial; 2: Internação; ≥3: UTI.",
      "Aviso: Neste capítulo não será abordado o tratamento hospitalar."
  ],
  nonPharmaTreatment: [
      "Repouso relativo.",
      "Hidratação adequada.",
      "Oxigenoterapia se SatO₂ < 94%.",
      "Analgesia e antitérmicos conforme necessidade."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS / 💎 Opções não SUS (Ambulatorial)",
          medications: [
              { name: "Amoxicilina + Clavulanato (500+125 mg)", category: "Esquema A (sem comorbidades)", details: "Tomar 1 cp VO 8/8h por 10 dias." },
              { name: "Azitromicina 500 mg", category: "Esquema A (sem comorbidades)", details: "Tomar 1 cp VO 1x/dia por 5 dias." },
              { name: "Amoxicilina + Clavulanato (875+125 mg) + Azitromicina 500mg", category: "Esquema B (com comorbidades)", details: "Associação: Tomar Amox+Clav 12/12h por 10 dias e Azitro 1x/dia por 5 dias." },
              { name: "Levofloxacino 750 mg", category: "Esquema C (alergia)", details: "Tomar 1 cp ao dia por 7 dias." }
          ]
      },
      {
          title: "Sintomáticos",
          medications: [
              { name: "Dipirona 500 mg", details: "Tomar 1 cp VO de 6/6 horas se dor ou febre." },
              { name: "Paracetamol 750 mg", details: "Tomar 1 cp VO de 6/6 horas se dor ou febre." },
              { name: "Ambroxol 30mg/5ml", details: "Tomar 5 ml VO 8/8 horas." }
          ]
      }
  ],
  patientGuidance: [
      "Completar todo o ciclo do antibiótico mesmo com melhora precoce.",
      "Retornar se houver febre persistente > 72h, piora da dispneia ou confusão mental.",
      "Evitar automedicação.",
      "Manter vacinação contra influenza e pneumococo em dia."
  ]
},
{
  id: 82,
  title: "82. PROFILAXIA PÓS-EXPOSIÇÃO SEXUAL (PEP)",
  cid: "Z29.2",
  differentialDiagnosis: "Profilaxia pré-exposição (PrEP), início precoce de TARV em pacientes HIV+.",
  initialConduct: [
      "Uso de medicamentos antirretrovirais para reduzir o risco de infecção pelo HIV após exposição de risco.",
      "Deve ser iniciada preferencialmente até 2 horas e no máximo em 72 horas após a exposição.",
      "Acolhimento: Ambiente privado, sem julgamentos. Avaliação de práticas sexuais, uso de drogas, violência.",
      "Coleta de sorologias: HIV, sífilis, hepatite B e C; beta-HCG em mulheres em idade fértil."
  ],
  nonPharmaTreatment: [
      "Higienizar região genital com água e sabão.",
      "Orientar uso de preservativos até liberação final no acompanhamento.",
      "Apoio psicológico, especialmente em casos de violência sexual."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS (Tratamento para HIV)",
          medications: [
              { name: "Tenofovir 300 mg + Lamivudina 300 mg (TDF/3TC)", details: "Tomar 1 cp VO 1x/dia por 28 dias." },
              { name: "Dolutegravir 50 mg (DTG)", details: "Tomar 1 cp VO 1x/dia por 28 dias." }
          ]
      },
      {
          title: "Profilaxia de outras ISTs",
          medications: [
              { name: "Ceftriaxona 500 mg IM", details: "Aplicar dose única (gonorreia)." },
              { name: "Azitromicina 1 g", details: "Tomar 2 cp VO em dose única (clamídia)." },
              { name: "Benzatina Penicilina G 2,4 milhões UI", details: "Aplicar dose única (sífilis recente)." }
          ]
      }
  ],
  proceduresInUnit: [
      "Vacinas e Imunoprofilaxia: Atualizar vacinação contra hepatite B e tétano."
  ],
  patientGuidance: [
      "Iniciar a PEP o quanto antes (ideal < 2h, limite máximo 72h).",
      "Completar rigorosamente 28 dias de tratamento.",
      "Manter preservativo em todas as relações até o acompanhamento final.",
      "Retornar se houver efeitos adversos importantes ou sinais de infecção aguda pelo HIV.",
      "PEP não substitui outras medidas preventivas (PrEP, preservativo, testagem regular)."
  ]
},
{
  id: 83,
  title: "83. PSORÍASE",
  cid: "L40.0",
  differentialDiagnosis: "Dermatite seborreica, líquen plano, pitiríase rósea, micose superficial.",
  initialConduct: [
      "Doença inflamatória crônica, de base autoimune, com placas eritemato-descamativas.",
      "Apresentação clínica: Placas com descamação prateada em couro cabeludo, cotovelos, joelhos. Coceira. Alterações ungueais. Artrite psoriásica.",
      "Diagnóstico: Clínico, baseado no aspecto típico. Biópsia em casos duvidosos."
  ],
  nonPharmaTreatment: [
      "Evitar fatores desencadeantes: estresse, álcool, tabaco, traumas cutâneos, infecções.",
      "Manter hidratação cutânea regular (emolientes).",
      "Exposição solar moderada pode ser benéfica."
  ],
  pharmaTreatments: [
      {
          title: "💎 Opções não SUS (Uso Tópico)",
          medications: [
              { name: "Betametasona 0,05%", details: "Aplicar fina camada 1x/dia sobre as lesões por até 4 semanas." },
              { name: "Clobetasol 0,05%", details: "Aplicar fina camada 1x/dia sobre as lesões por até 4 semanas. Cuidado com rebote." },
              { name: "Coaltar / Alcatrão mineral em loção", details: "Aplicar 1x/dia no couro cabeludo." },
              { name: "Calcipotriol creme 0,005%", details: "Aplicar 2x/dia sobre as placas." }
          ]
      },
      {
          title: "💎 Opções não SUS (Sistêmico - Casos graves)",
          medications: [
              { name: "Metotrexato 7,5–25 mg VO 1x/semana", details: "Associar ácido fólico. Monitorar função hepática." },
              { name: "Ciclosporina 2,5–5 mg/kg/dia VO", details: "Indicado em casos graves refratários." },
              { name: "Biológicos (adalimumabe, etanercepte, etc.)", details: "Uso restrito a casos graves refratários, sob prescrição especializada." }
          ]
      }
  ],
  patientGuidance: [
      "Esta é uma doença crônica e recidivante: o objetivo é o controle dos sintomas, não a cura.",
      "Siga corretamente o tratamento para reduzir o risco de recidivas.",
      "Hidrate a pele diariamente, mesmo fora das crises.",
      "Não use medicamentos por conta própria — especialmente corticoides sistêmicos.",
      "Procure atendimento médico se apresentar dor articular persistente ou se houver falha do tratamento tópico."
  ]
},
{
  id: 84,
  title: "84. PTIRÍASE VERSICOLOR (TÍNEA VERSICOLOR)",
  cid: "B36.0",
  differentialDiagnosis: "Vitiligo, pitiríase rósea, hanseníase indeterminada, dermatite seborreica.",
  initialConduct: [
      "Infecção superficial pela levedura Malassezia furfur.",
      "Apresentação: Máculas hipo ou hipercrômicas, com descamação fina, em tronco, pescoço e braços.",
      "Diagnóstico: Clínico. Sinal de Zireli (descamação ao raspar). Exame micológico com KOH."
  ],
  nonPharmaTreatment: [
      "Evitar excesso de calor, sudorese e roupas sintéticas.",
      "Higiene adequada da pele.",
      "Orientar que a alteração da cor pode persistir semanas após a cura."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Fluconazol 150 mg", details: "Tomar 1 cp VO 1x/semana por 2 semanas." },
              { name: "Itraconazol 100 mg", details: "Tomar 2 cp VO/dia por 7 dias." }
          ]
      },
      {
          title: "💎 Opções não SUS (Uso Tópico)",
          medications: [
              { name: "Clotrimazol 1% creme", details: "Aplicar 2x/dia sobre as lesões por 2–4 semanas." },
              { name: "Sulfeto de selênio 2,5% loção/xampu", details: "Aplicar sobre as lesões por 10 minutos, depois enxaguar. Repetir diariamente por 7 dias." },
              { name: "Cetoconazol 2% xampu", details: "Aplicar sobre a pele afetada, deixar por 5 minutos e enxaguar. Usar 1x/dia por 5 dias." }
          ]
      }
  ],
  patientGuidance: [
      "O tratamento tópico é suficiente na maioria dos casos.",
      "Em recidivas frequentes, pode-se indicar antifúngico oral.",
      "A repigmentação da pele demora semanas a meses após o tratamento.",
      "Evitar fatores predisponentes: calor, oleosidade excessiva, uso de roupas apertadas."
  ]
},
{
  id: 85,
  title: "85. QUEIMADURAS",
  cid: "T20-T32",
  differentialDiagnosis: "Dermatite de contato química, eritema solar, celulite, fasciíte necrosante.",
  initialConduct: [
      "Avaliar extensão pela Regra dos 9 ou Lund-Browder.",
      "Iniciar hidratação (Fórmula de Parkland) se SCQ > 20% em adultos ou > 10% em crianças.",
      "Garantir analgesia, limpeza com salina 0,9%, e retirada de roupas/objetos constritivos.",
      "Manejo ABCDE: A(Vias aéreas), B(Respiração), C(Circulação), D(Débito urinário), E(Exposição)."
  ],
  nonPharmaTreatment: [
      "Manter ambiente limpo, evitar exposição à fumaça.",
      "Curativo estéril não aderente, trocado diariamente.",
      "Orientar paciente a não romper bolhas."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Dipirona 500 mg", details: "Tomar 1 cp VO 6/6h se dor." },
              { name: "Tramadol 50 mg", details: "Tomar 1 cp VO de 8/8h se dor intensa." },
              { name: "Hidroxizina 25 mg", details: "Tomar 1 cp VO de 8/8h se prurido." },
              { name: "Vacina dT / dTpa", details: "Se esquema vacinal incompleto ou desatualizado." },
              { name: "Sulfadiazina de Prata 1% (50 g)", details: "Aplicar fina camada sobre a lesão 1–2x/dia, cobrir com gaze estéril." }
          ]
      },
      {
          title: "💎 Opções não SUS",
          medications: [
              { name: "Curativos avançados (hidrocolóides, Aquacel®, Biobrane®)", details: "Podem acelerar cicatrização em queimaduras de 2º grau superficial." }
          ]
      }
  ],
  patientGuidance: [
      "Retornar imediatamente se febre, pus ou mau cheiro na ferida.",
      "Não usar pomadas caseiras ou produtos oleosos.",
      "Hidratar-se bem.",
      "Manter acompanhamento ambulatorial."
  ]
},
{
  id: 86,
  title: "86. RINITE ALÉRGICA",
  cid: "J30.9",
  differentialDiagnosis: "Resfriado comum, rinossinusite bacteriana, polipose nasal, desvio de septo.",
  initialConduct: [
      "Avaliar intensidade dos sintomas e tempo de evolução.",
      "Identificar possível exposição a alérgenos desencadeantes.",
      "Classificar como intermitente ou persistente, leve ou moderada/grave.",
      "Investigar antecedentes de atopia (asma, dermatite atópica)."
  ],
  nonPharmaTreatment: [
      "Reduzir exposição a alérgenos: manter ambientes ventilados, usar capas antiácaros.",
      "Evitar contato com fumaça de cigarro, poeira, perfumes e animais domésticos.",
      "Higienização nasal frequente com solução salina."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Loratadina 10 mg", details: "Tomar 1 cp VO 1x/dia enquanto houver sintomas." },
              { name: "Desloratadina 5 mg", details: "Tomar 1 cp VO 1x/dia." },
              { name: "Prednisona 20 mg", details: "(resgate moderado a grave) Tomar 1–2 cp VO/dia por até 5 dias." }
          ]
      },
      {
          title: "💎 Opções não SUS",
          medications: [
              { name: "Fexofenadina 120 mg", details: "Tomar 1 cp VO 1x/dia." },
              { name: "Azelastina spray nasal 0,1%", details: "Aplicar 1 jato em cada narina, 2x/dia." },
              { name: "Mometasona spray nasal 50 mcg", details: "Aplicar 1 jato em cada narina, 1–2x/dia." }
          ]
      }
  ],
  patientGuidance: [
      "Doença crônica, controle depende de medidas ambientais e uso correto da medicação.",
      "Antialérgicos podem ser usados sob demanda em sintomas leves.",
      "Corticoides intranasais são os mais eficazes em sintomas persistentes ou graves.",
      "Retornar se houver sinais de complicação: sinusite recorrente, epistaxe, perda de olfato."
  ]
},
{
  id: 87,
  title: "87. RINOSSINUSITE AGUDA (SINUSITE)",
  cid: "JO1.9",
  differentialDiagnosis: "Resfriado comum, rinite alérgica, rinite medicamentosa, cefaleia tensional.",
  initialConduct: [
      "Inflamação da mucosa dos seios paranasais, geralmente secundária a infecção viral.",
      "Pode evoluir para infecção bacteriana se sintomas persistem > 10 dias ou pioram.",
      "Apresentação clínica: congestão nasal, rinorreia purulenta, dor/pressão facial, febre, tosse noturna.",
      "Diagnóstico clínico; TC reservado para casos complicados."
  ],
  nonPharmaTreatment: [
      "Hidratação adequada.",
      "Lavagem nasal com solução salina.",
      "Umidificação do ambiente.",
      "Repouso relativo."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Amoxicilina 500 mg", details: "Tomar 1 cp VO de 8/8 h por 10 dias." },
              { name: "Amoxicilina + Clavulanato 875/125 mg", details: "Tomar 1 cp VO de 12/12 h por 7–10 dias (casos graves)." },
              { name: "Azitromicina 500 mg", details: "Tomar 1 cp VO 1x/dia por 5 dias (alternativa em alergia)." },
              { name: "Soro fisiológico 0,9%", details: "Irrigar narinas 2–4x/dia." },
              { name: "Budesonida spray nasal 50 mcg", details: "1–2 jatos em cada narina 12/12h por 10 dias." }
          ]
      },
      {
          title: "💎 Opções não SUS",
          medications: [
              { name: "Levofloxacino 500 mg", details: "Tomar 1 cp VO 1x/dia por 7–10 dias (uso restrito)." },
              { name: "Tylenol Sinus", details: "Tomar 2 cp VO de 6/6 horas." },
              { name: "Fluticasona spray nasal 50 mcg", details: "1–2 jatos em cada narina 24/24h por 10 dias." },
              { name: "Nafazolina 0,5 mg/mL (Vasoconstritor - até 5 dias)", details: "Pingar 2–4 gotas em cada narina de 4/4h–6/6h." }
          ]
      }
  ],
  patientGuidance: [
      "A maioria das sinusites é viral e melhora sem antibióticos em até 10 dias.",
      "Retornar se febre persistir > 3 dias, dor facial intensa ou sinais de complicação.",
      "Manter higiene nasal diária.",
      "Evitar uso crônico de descongestionantes nasais tópicos."
  ]
},
{
  id: 88,
  title: "88. SÍFILIS",
  cid: "A51",
  differentialDiagnosis: "Cancroide, herpes genital, linfogranuloma venéreo, mononucleose infecciosa.",
  initialConduct: [
      "IST causada pelo Treponema pallidum.",
      "Evolução em fases: Primária (cancro duro), Secundária (rash cutâneo), Latente, Terciária (acometimento cardiovascular, neurológico).",
      "Diagnóstico: Testes treponêmicos (FTA-Abs, TPHA, ELISA) e não treponêmicos (VDRL, RPR)."
  ],
  nonPharmaTreatment: [
      "Orientar abstinência sexual até a conclusão do tratamento.",
      "Notificar e tratar todos os parceiros sexuais.",
      "Reforçar importância da adesão e do seguimento sorológico."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS (Uso Injetável)",
          medications: [
              { name: "Penicilina benzatina 2.400.000 UI", details: "Aplicar 1,2 milhão UI IM em cada glúteo, dose única (sífilis primária, secundária ou latente recente)." },
              { name: "Penicilina benzatina (Sífilis latente tardia)", details: "Mesma dose, 1x/semana por 3 semanas." },
              { name: "Penicilina cristalina 18–24 milhões UI/dia EV", details: "Sífilis neurológica/ocular. Administrar dividida de 4/4 h, por 10–14 dias." }
          ]
      },
      {
          title: "❌ Alternativa em alergia (não gestantes)",
          medications: [
              { name: "Doxiciclina 100 mg", details: "Tomar 1 cp VO de 12/12 h por 14 dias." }
          ]
      }
  ],
  patientGuidance: [
      "Tratar sempre os parceiros sexuais.",
      "Repetir VDRL em 30, 90 e 180 dias para controle de cura.",
      "Em gestantes, a única opção eficaz é a penicilina — nunca substituir.",
      "Retornar em caso de persistência de sintomas ou novas lesões."
  ]
},
{
  id: 89,
  title: "89. SÍNDROME DO INTESTINO IRRITÁVEL (SII)",
  cid: "K58",
  differentialDiagnosis: "Doença celíaca, intolerância à lactose, doença inflamatória intestinal, giardíase.",
  initialConduct: [
      "Transtorno funcional gastrointestinal com dor abdominal recorrente e alterações do hábito intestinal.",
      "Apresentação: dor/desconforto abdominal, distensão, melhora parcial após evacuação.",
      "Diagnóstico clínico (critérios de Roma IV).",
      "Excluir sinais de alarme: perda de peso, sangramento, febre, início após 50 anos."
  ],
  nonPharmaTreatment: [
      "Dieta rica em fibras (para constipação).",
      "Reduzir alimentos flatulentos (feijão, repolho, refrigerantes).",
      "Evitar cafeína, álcool e alimentos ultraprocessados.",
      "Técnicas de manejo do estresse (relaxamento, psicoterapia)."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Escopolamina 10 mg", details: "Tomar 1 cp VO 3x/dia se dor abdominal (uso eventual)." },
              { name: "Loperamida 2 mg", details: "Tomar 1 cp VO após evacuações diarreicas (máx. 8 cp/dia)." },
              { name: "Lactulose xarope 667 mg/mL", details: "Tomar 15 mL VO 1–2x/dia (se constipação predominante)." }
          ]
      },
      {
          title: "💎 Opções não SUS",
          medications: [
              { name: "Butilbrometo de Escopolamina 10mg e Dipirona 250mg (Buscopan Composto®)", details: "Tomar 1 cp VO até 3x/dia se dor abdominal." },
              { name: "Trimebutina 200 mg (Digedrat®, Trimeb®)", details: "Tomar 1 cápsula VO 2-3x/dia, preferencialmente antes das refeições;" }
          ]
      }
  ],
  patientGuidance: [
      "A SII é um quadro crônico, mas benigno.",
      "Sintomas podem oscilar com dieta e estresse.",
      "Evitar automedicação com laxantes ou antidiarreicos sem orientação.",
      "Procurar atendimento se surgirem sinais de alarme: sangue nas fezes, perda de peso inexplicada, febre persistente.",
      "Manter acompanhamento regular."
  ]
},
{
  id: 90,
  title: "90. TRANSTORNO DE ANSIEDADE GENERALIZADA (TAG)",
  cid: "F41.1",
  differentialDiagnosis: "Episódio depressivo, transtorno do pânico, fobias, TOC, TEPT, hipertireoidismo.",
  initialConduct: [
      "Preocupação excessiva e persistente, com sintomas físicos e psíquicos, na maioria dos dias por ≥ 6 meses.",
      "Sintomas: taquicardia, sudorese, tremores, tensão muscular, irritabilidade, dificuldade de concentração, insônia.",
      "Excluir causas orgânicas (hipertireoidismo, arritmias, hipoglicemia).",
      "Avaliar comorbidades (depressão, uso de álcool/drogas)."
  ],
  nonPharmaTreatment: [
      "Psicoterapia cognitivo-comportamental (TCC) – primeira linha.",
      "Técnicas de relaxamento, respiração e mindfulness.",
      "Atividade física regular.",
      "Higiene do sono.",
      "Reduzir consumo de cafeína, álcool e nicotina."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Sertralina 50 mg", details: "Iniciar com 1 cp VO 1x/dia." },
              { name: "Fluoxetina 20mg", details: "Iniciar com 1 cp VO 1x/dia." },
              { name: "Diazepam 5 mg", details: "Na unidade (resgate): Tomar 1 cp VO 8/8h se necessário, por até 7 dias. Uso curto prazo." }
          ]
      },
      {
          title: "💎 Opções não SUS",
          medications: [
              { name: "Venlafaxina 75 mg", details: "Tomar 1 cp VO 1x/dia." },
              { name: "Desvenlafaxina 50 mg", details: "Tomar 1 cp VO 1x/dia." },
              { name: "Duloxetina 30 mg", details: "Tomar 1 cp VO 1–2x/dia." },
              { name: "Escitalopram 10 mg", details: "Iniciar com 1 cp VO 1x/dia." },
              { name: "Rivotril 0,25 mg SL", details: "Administrar sublingual se crise de ansiedade." }
          ]
      }
  ],
  patientGuidance: [
      "Explicar que ansiedade é uma condição crônica, mas tratável.",
      "Psicoterapia associada ao medicamento aumenta taxa de resposta.",
      "Benzodiazepínicos devem ser usados apenas no início do tratamento ou em crises, nunca de forma contínua.",
      "O efeito dos antidepressivos pode levar 4–6 semanas para início da melhora."
  ]
},
{
  id: 91,
  title: "91. TRICURÍASE",
  cid: "B79",
  differentialDiagnosis: "Ascaridíase, ancilostomíase, giardíase, colite crônica.",
  initialConduct: [
      "Infecção intestinal pelo helminto Trichuris trichiura.",
      "Pode causar diarreia crônica e anemia ferropriva.",
      "Diagnóstico: Parasitológico de fezes (ovos característicos em formato de “barril”)."
  ],
  nonPharmaTreatment: [
      "Higienizar adequadamente as mãos e os alimentos.",
      "Uso de calçados para evitar contato com solo contaminado.",
      "Orientar saneamento básico adequado quando disponível."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Albendazol 400 mg", details: "Tomar VO, dose única." }
          ]
      },
      {
          title: "💎 Opções não SUS",
          medications: [
              { name: "Mebendazol 100 mg", details: "Tomar 1 cp VO de 12/12 h por 3 dias." }
          ]
      }
  ],
  patientGuidance: [
      "Reforçar higiene pessoal e ambiental.",
      "Tratar todos os contactantes domiciliares.",
      "Procurar atendimento se houver anemia ou prolapso retal persistente."
  ]
},
{
  id: 92,
  title: "92. TROMBOSE VENOSA PROFUNDA",
  cid: "I80",
  differentialDiagnosis: "Linfangite, erisipela, celulite, hematoma muscular, cisto de Baker roto.",
  initialConduct: [
      "Sistema venoso profundo, mais comum em membros inferiores.",
      "Apresentação: edema unilateral, dor, calor local, eritema ou cianose.",
      "Avaliar probabilidade clínica pelo Escore de Wells.",
      "Exames complementares: Doppler venoso (padrão-ouro), D-dímero.",
      "Considerar fatores de risco: imobilização, pós-operatório, gestação, câncer, trombofilias."
  ],
  nonPharmaTreatment: [
      "Elevar o membro acometido.",
      "Uso de meias elásticas após estabilização.",
      "Incentivar deambulação precoce quando anticoagulado e estável."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Enoxaparina", details: "Aplicar 1 mg/kg SC de 12/12 horas." },
              { name: "Varfarina 5 mg", details: "Iniciar 1 cp VO 1x/dia junto com HBPM. Ajustar dose conforme INR (meta 2–3). Duração: 3–6 meses." }
          ]
      },
      {
          title: "✅ Profilaxia em pacientes de risco (hospitalizados)",
          medications: [
              { name: "Enoxaparina 40 mg", details: "Aplicar SC 1x ao dia." }
          ]
      },
      {
          title: "💎 Opções não SUS (DOACs)",
          medications: [
              { name: "Rivaroxabana 15 mg", details: "Tomar 1 cp VO 12/12h por 21 dias, depois 20 mg 1x/dia." },
              { name: "Apixabana 10 mg", details: "Tomar 1 cp VO 12/12h por 7 dias, depois 5 mg VO 12/12h." }
          ]
      }
  ],
  patientGuidance: [
      "O tratamento anticoagulante é fundamental para evitar complicações.",
      "Tempo médio de anticoagulação: 3–6 meses.",
      "Monitorar sinais de sangramento (gengiva, urina, fezes, hematomas).",
      "Evitar uso de AAS e anti-inflamatórios sem orientação médica.",
      "Procurar atendimento imediato em caso de dor torácica súbita ou dispneia (suspeita de TEP).",
      "Manter seguimento regular (controle de INR se uso de varfarina)."
  ]
},
{
  id: 93,
  title: "93. URTICÁRIA",
  cid: "L50.9",
  differentialDiagnosis: "Angioedema, reação anafilática, eritema multiforme, dermatite de contato.",
  initialConduct: [
      "Surgimento súbito de pápulas ou placas eritematosas, edematosas e pruriginosas.",
      "Classificação: aguda (< 6 semanas) ou crônica (> 6 semanas).",
      "Avaliar história de alergias, medicamentos, picadas de insetos, alimentos.",
      "Em casos graves, sempre descartar associação com anafilaxia."
  ],
  nonPharmaTreatment: [
      "Identificar e evitar fatores desencadeantes (alimentos, fármacos, calor, estresse).",
      "Evitar uso de AAS e anti-inflamatórios em pacientes com urticária recorrente.",
      "Compressas frias podem aliviar o prurido."
  ],
  pharmaTreatments: [
      {
          title: "✅ Opções SUS",
          medications: [
              { name: "Loratadina 10 mg", details: "Tomar 1 cp VO 1x/dia enquanto houver sintomas." },
              { name: "Dexclorfeniramina 2 mg", details: "Tomar 1 cp VO 8/8h se necessário (pode causar sonolência)." },
              { name: "Prednisona 20 mg", details: "Tomar 1–2 cp VO/dia por 5 dias (uso curto, apenas em exacerbações intensas)." }
          ]
      },
      {
          title: "💎 Opções não SUS",
          medications: [
              { name: "Fexofenadina 120 mg", details: "Tomar 1 cp VO 1x/dia." },
              { name: "Levocetirizina 5 mg", details: "Tomar 1 cp VO 1x/dia." }
          ]
      }
  ],
  proceduresInUnit: [
      "Adrenalina 1 mg/mL (1:1000): Aplicar 0,3–0,5 mL IM - Vasto Lateral da Coxa - em casos de urticária associada a anafilaxia/angioedema grave."
  ],
  patientGuidance: [
      "A urticária aguda geralmente é autolimitada e melhora em 1–2 semanas.",
      "Evitar automedicação com corticoides sem orientação médica.",
      "Procurar atendimento imediato se houver angioedema de vias aéreas, disfagia, dispneia ou sintomas de anafilaxia.",
      "Urticária crônica deve ser acompanhada por dermatologista ou alergologista."
  ]
}
];