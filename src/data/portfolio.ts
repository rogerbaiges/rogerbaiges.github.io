export type OrganizationKey =
  | 'cvc'
  | 'serimag'
  | 'epfl'
  | 'lts4'
  | 'upc'
  | 'kuleuven'
  | 'barca'
  | 'aina'
  | 'bsc'
  | 'auditors'
  | 'hackupc'
  | 'generalitat';

export interface Organization {
  name: string;
  shortName: string;
  url: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoSurface?: 'light' | 'dark';
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  id: 'lts4' | 'cvc' | 'serimag';
  kind: 'Current Research' | 'Research Experience' | 'Industry Experience';
  organization: OrganizationKey;
  organizationLine: string;
  role: string;
  period: string;
  summary: string;
  preview: string;
  evidence: string;
  collaborator?: {
    name: string;
    role: string;
    href: string;
  };
  contributions: readonly string[];
  focus: readonly string[];
}

export interface EducationItem {
  id: 'epfl' | 'upc' | 'kuleuven';
  organization: OrganizationKey;
  period: string;
  degree: string;
  detail: string;
  href: string;
}

export interface ProjectItem {
  slug: string;
  name: string;
  year: string;
  context: string;
  description: string;
  outcome: string;
  technologies: readonly string[];
  links: readonly ExternalLink[];
  featuredOnHome?: boolean;
}

export interface AwardItem {
  year: string;
  title: string;
  organizer: string;
  description: string;
  organization?: OrganizationKey;
  homeProof?: string;
  links: readonly ExternalLink[];
  featuredOnHome?: boolean;
}

export interface ContactItem {
  label: string;
  display: string;
  href: string;
  icon: string;
}

export interface EvidenceItem {
  label: string;
  value: string;
  organization?: OrganizationKey;
  href: string;
}

export const site = {
  name: 'Roger Baiges Trilla',
  shortName: 'Roger Baiges',
  role: 'AI Researcher & Engineer',
  url: 'https://rogerbaiges.github.io',
  language: 'en',
  locale: 'en_US',
  email: 'rogerbaigestrilla@gmail.com',
  cvPath: '/files/RogerBaigesCV.pdf',
  portrait: '/images/profile.jpg',
  ogImage: '/images/og-card.png',
  description:
    'Roger Baiges Trilla is an AI researcher and engineer pursuing an M.Sc. at EPFL and beginning research at LTS4 on foundation models for spatial biology.',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/experience/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Awards', href: '/awards/' },
    { label: 'About', href: '/about/' },
    { label: 'CV', href: '/cv/' },
  ],
} as const;

export const hero = {
  role: 'AI Researcher & Engineer',
  heading: 'Hi, I’m Roger',
  introduction:
    'What excites me about AI is seeing a state-of-the-art idea leave the paper and change a real problem. I like making that happen, whether through research, industry, or something I build from scratch.',
  trajectory:
    'I am an M.Sc. student at EPFL, where I am beginning Topoformer at LTS4, combining topology and foundation models for spatial biology.',
  primaryAction: { label: 'Explore experience', href: '/experience/' },
  secondaryAction: { label: 'View CV', href: '/cv/' },
} as const;

export const organizations: Record<OrganizationKey, Organization> = {
  cvc: {
    name: 'Computer Vision Center',
    shortName: 'CVC–LAMP',
    url: 'https://www.cvc.uab.es/',
    logo: '/images/logos/cvc.svg',
    logoWidth: 176,
    logoHeight: 65,
  },
  serimag: {
    name: 'Serimag',
    shortName: 'Serimag',
    url: 'https://www.serimag.com/en',
    logo: '/images/logos/serimag.png',
    logoWidth: 180,
    logoHeight: 48,
  },
  epfl: {
    name: 'École polytechnique fédérale de Lausanne',
    shortName: 'EPFL',
    url: 'https://www.epfl.ch/education/master/programs/computer-science/',
    logo: '/images/logos/epfl.png',
    logoWidth: 687,
    logoHeight: 200,
  },
  lts4: {
    name: 'Signal Processing Laboratory (LTS4), EPFL',
    shortName: 'LTS4 · EPFL',
    url: 'https://www.epfl.ch/labs/lts4/',
    logo: '/images/logos/epfl.png',
    logoWidth: 687,
    logoHeight: 200,
  },
  upc: {
    name: 'Universitat Politècnica de Catalunya',
    shortName: 'UPC',
    url: 'https://www.upc.edu/en/bachelors/artificial-intelligence-barcelona-fib',
    logo: '/images/logos/upc.png',
    logoWidth: 504,
    logoHeight: 111,
  },
  kuleuven: {
    name: 'KU Leuven',
    shortName: 'KU Leuven',
    url: 'https://www.kuleuven.be/english/',
    logo: '/images/logos/ku-leuven.svg',
    logoWidth: 159,
    logoHeight: 57,
  },
  barca: {
    name: 'Barça Innovation Hub',
    shortName: 'Barça Innovation Hub',
    url: 'https://barcainnovationhub.fcbarcelona.com/',
    logo: '/images/logos/barca-innovation-hub.webp',
    logoWidth: 223,
    logoHeight: 46,
    logoSurface: 'dark',
  },
  aina: {
    name: 'Projecte Aina',
    shortName: 'Aina',
    url: 'https://projecteaina.cat/',
    logo: '/images/logos/aina.png',
    logoWidth: 240,
    logoHeight: 68,
  },
  bsc: {
    name: 'Barcelona Supercomputing Center',
    shortName: 'BSC-CNS',
    url: 'https://www.bsc.es/',
    logo: '/images/logos/bsc.svg',
    logoWidth: 283,
    logoHeight: 69,
  },
  auditors: {
    name: 'Col·legi de Censors Jurats de Comptes de Catalunya',
    shortName: 'El Col·legi',
    url: 'https://www.auditorscensors.com/',
    logo: '/images/logos/auditors.svg',
    logoWidth: 200,
    logoHeight: 36,
  },
  hackupc: {
    name: 'HackUPC',
    shortName: 'HackUPC',
    url: 'https://hackupc.com/',
    logo: '/images/logos/hackupc.svg',
    logoWidth: 94,
    logoHeight: 94,
    logoSurface: 'dark',
  },
  generalitat: {
    name: 'Generalitat de Catalunya',
    shortName: 'Generalitat de Catalunya',
    url: 'https://web.gencat.cat/en/generalitat/',
    logo: '/images/logos/generalitat.webp',
    logoWidth: 600,
    logoHeight: 154,
  },
};

export const contacts: readonly ContactItem[] = [
  {
    label: 'Email',
    display: 'rogerbaigestrilla@gmail.com',
    href: 'mailto:rogerbaigestrilla@gmail.com',
    icon: '/images/icons/email.svg',
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/rogerbaigestrilla',
    href: 'https://www.linkedin.com/in/rogerbaigestrilla/',
    icon: '/images/icons/linkedin.png',
  },
  {
    label: 'GitHub',
    display: 'github.com/rogerbaiges',
    href: 'https://github.com/rogerbaiges',
    icon: '/images/icons/github.svg',
  },
  {
    label: 'Hugging Face',
    display: 'huggingface.co/baiges',
    href: 'https://huggingface.co/baiges',
    icon: '/images/icons/hugging-face.png',
  },
] as const;

export const evidence: readonly EvidenceItem[] = [
  {
    label: 'LTS4',
    value: 'Student researcher at EPFL',
    organization: 'lts4',
    href: '/experience/#lts4',
  },
  {
    label: 'CVC–LAMP',
    value: 'Research collaboration · LAMP',
    organization: 'cvc',
    href: '/experience/#cvc',
  },
  {
    label: 'UPC',
    value: '9.19/10 · Top 5% · 7 honors',
    organization: 'upc',
    href: 'https://www.upc.edu/en/bachelors/artificial-intelligence-barcelona-fib',
  },
  {
    label: 'Recognition',
    value: '4× winner · Barça: 3,500+ applicants',
    href: '/awards/',
  },
] as const;

export const experience: readonly ExperienceItem[] = [
  {
    id: 'lts4',
    kind: 'Current Research',
    organization: 'lts4',
    organizationLine: 'EPFL / Signal Processing Laboratory (LTS4)',
    role: 'Student Researcher, LTS4',
    period: 'Sep. 2026 – Present',
    summary:
      'Beginning Topoformer, a spatial-biology foundation model that combines topological representations with modern deep learning.',
    preview:
      'Combining topological representations and foundation models to learn the spatial structure of tissue.',
    evidence:
      'Beginning Topoformer with Jérémy Baffou at LTS4.',
    collaborator: {
      name: 'Jérémy Baffou',
      role: 'Doctoral Assistant at LTS4',
      href: 'https://people.epfl.ch/jeremy.baffou',
    },
    contributions: [
      'Exploring how topological data analysis and self-supervised foundation models can capture the spatial structure of multiplex tissue images.',
    ],
    focus: ['Topological data analysis', 'Foundation models', 'Spatial biology'],
  },
  {
    id: 'cvc',
    kind: 'Research Experience',
    organization: 'cvc',
    organizationLine: 'Computer Vision Center / LAMP Group',
    role: 'Undergraduate Researcher, LAMP Group',
    period: 'Feb. 2026 – Jun. 2026',
    summary:
      'Developed post-hoc activation-space repairs that recover compatibility lost during foundation-model adaptation without retraining downstream systems.',
    preview:
      'Studied compatibility failures introduced by foundation-model adaptation and built post-hoc repairs.',
    evidence:
      'Restored over 90% of lost performance in CLIP and DINO in the verified experimental setting.',
    collaborator: {
      name: 'Joost van de Weijer',
      role: 'Senior Researcher and LAMP Team Leader',
      href: 'https://lamp.cvc.uab.es/joost/',
    },
    contributions: [
      'Showed that adaptation can break compatibility with frozen classifiers, prototype banks, and retrieval indexes even when the underlying capability remains recoverable.',
      'Developed activation-space and readout-aware repairs that restored over 90% of lost performance in CLIP and DINO while preserving adapted-task accuracy, then extended the approach to Qwen retrieval.',
    ],
    focus: ['CLIP & DINO', 'Activation-space repair', 'Null-space projections', 'Qwen retrieval'],
  },
  {
    id: 'serimag',
    kind: 'Industry Experience',
    organization: 'serimag',
    organizationLine: 'Serimag / R&D',
    role: 'AI Researcher, R&D',
    period: 'Feb. 2025 – Jul. 2025',
    summary:
      'Turned a previously manual payroll-document workflow into Serimag’s first trainable extraction system under strict accuracy and data-privacy constraints.',
    preview:
      'Moved Serimag’s most challenging payroll document from fully manual processing to nearly 80% field-level automation.',
    evidence:
      'Nearly 80% field-level automation at the required 98% accepted-field accuracy threshold, sharply reducing repetitive human review.',
    contributions: [
      'Created Serimag’s first trainable approach for its most challenging payroll document type, replacing a fully manual starting point with an end-to-end AI pipeline.',
      'Reached nearly 80% field-level automation at the required 98% accepted-field accuracy threshold, sending only uncertain fields to human review and materially reducing repetitive work.',
    ],
    focus: ['Vision-language models', 'LoRA', 'Selective prediction', 'On-premises AI'],
  },
] as const;

export const education: readonly EducationItem[] = [
  {
    id: 'epfl',
    organization: 'epfl',
    period: 'Sep. 2026 – Jun. 2028 · Expected',
    degree: 'M.Sc. in Computer Science',
    detail: 'AI & Data Science specialization · Topoformer research at LTS4',
    href: 'https://www.epfl.ch/education/master/programs/computer-science/',
  },
  {
    id: 'upc',
    organization: 'upc',
    period: 'Sep. 2022 – Jun. 2026',
    degree: 'B.Sc. in Artificial Intelligence · 240 ECTS',
    detail: 'GPA 9.19/10 · Top 5% · 7 honors distinctions',
    href: 'https://www.upc.edu/en/bachelors/artificial-intelligence-barcelona-fib',
  },
  {
    id: 'kuleuven',
    organization: 'kuleuven',
    period: 'Sep. 2025 – Jan. 2026',
    degree: 'Erasmus+ Exchange Program in Artificial Intelligence',
    detail:
      'Graduate coursework in Advanced Machine Learning, Uncertainty in AI, Privacy, and Evolutionary Computation',
    href: 'https://www.kuleuven.be/english/',
  },
] as const;

export const trajectory = [
  {
    organization: 'upc' as OrganizationKey,
    period: '2022 – 2026',
    title: 'B.Sc. in Artificial Intelligence',
    detail: '9.19/10 · Top 5% · 7 honors',
    href: 'https://www.upc.edu/en/bachelors/artificial-intelligence-barcelona-fib',
  },
  {
    organization: 'serimag' as OrganizationKey,
    period: '2025',
    title: 'AI Researcher, R&D',
    detail: 'Private document intelligence',
    href: 'https://www.serimag.com/en',
  },
  {
    organization: 'kuleuven' as OrganizationKey,
    period: '2025 – 2026',
    title: 'Erasmus+ in Artificial Intelligence',
    detail: 'Graduate AI coursework',
    href: 'https://www.kuleuven.be/english/',
  },
  {
    organization: 'cvc' as OrganizationKey,
    period: 'Feb. – Jun. 2026',
    title: 'Researcher, LAMP Group',
    detail: 'Foundation-model compatibility',
    href: 'https://www.cvc.uab.es/',
  },
  {
    organization: 'lts4' as OrganizationKey,
    period: '2026 – Present',
    title: 'M.Sc. student & LTS4 researcher',
    detail: 'Topoformer / Foundation models for spatial biology',
    href: 'https://www.epfl.ch/labs/lts4/',
  },
] as const;

export const projects: readonly ProjectItem[] = [
  {
    slug: 'ipurdiar',
    name: 'IpurdIAr',
    year: '2026',
    context: 'Barça Innovation Hack · five-person team',
    description:
      'An agentic multimodal system combining player-tracking data, inferred match events, and time-aligned commentary to answer tactical questions with evidence-grounded explanations.',
    outcome: 'Won first prize after selection from more than 3,500 applicants.',
    technologies: ['LLM agents', 'Player tracking', 'Whisper'],
    links: [
      {
        label: 'Official feature',
        href: 'https://barcainnovationhub.fcbarcelona.com/blog/ipurdiar-football-analysis-chatbot/',
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: 'catgpt',
    name: 'CatGPT + Patufet',
    year: '2024',
    context: 'Independent project',
    description:
      'Trained and released a 111M-parameter Catalan GPT-style model from scratch, including a custom tokenizer and instruction-tuned variant, paired with the synthetic Patufet corpus.',
    outcome:
      'Released base and instruction-tuned models alongside a dataset collection that includes a 300M-token synthetic textbook corpus.',
    technologies: ['Language modelling', 'Pretraining', 'Synthetic data'],
    links: [
      { label: 'GitHub', href: 'https://github.com/rogerbaiges/CatGPT' },
      { label: 'Base model', href: 'https://huggingface.co/baiges/CatGPT' },
      { label: 'Instruction model', href: 'https://huggingface.co/baiges/CatGPT-IT' },
      { label: 'Patufet collection', href: 'https://huggingface.co/collections/pauhidalgoo/patufet' },
    ],
    featuredOnHome: true,
  },
  {
    slug: 'laia',
    name: 'LaIA',
    year: '2024',
    context: 'AINA Hack · four-person team',
    description:
      'A multimodal RAG assistant for Catalan public services, combining dynamic web retrieval with document and image understanding, speech interaction, and automated form completion.',
    outcome: 'Won first prize among 20 teams.',
    technologies: ['Multimodal RAG', 'Dynamic retrieval', 'Catalan AI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/pauhidalgoo/LaIA' },
      {
        label: 'Official result',
        href: 'https://www.bsc.es/es/noticias/noticias-del-bsc/aina-hack-una-hackat%C3%B3n-para-resolver-retos-de-la-administraci%C3%B3n-catalana-con-los-recursos-de-ia-del',
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: 'inventory-impairment',
    name: 'Inventory Impairment Prediction',
    year: '2024',
    context: 'AI & Auditing Challenge · three-person team',
    description:
      'A hybrid model for inventory-impairment analysis, combining a weighted indicator, time-series forecasts, autoencoder-derived similarity, and EBM explanations.',
    outcome: 'Won the Col·legi de Censors Jurats de Comptes de Catalunya challenge.',
    technologies: ['Time series', 'Autoencoders', 'Explainable ML'],
    links: [
      { label: 'GitHub', href: 'https://github.com/caiselvas/challenge-auditoria' },
      {
        label: 'Official challenge',
        href: 'https://www.auditorscensors.com/en/challenge--inteligencia-artificial-y-auditoria',
      },
    ],
  },
  {
    slug: 'pifia',
    name: 'PifIA',
    year: '2023',
    context: 'HackUPC · Bunge Challenge · three-person team',
    description:
      'An early Python prototype that interprets natural-language questions and filters Bunge’s supplied database to surface relevant data.',
    outcome: 'Won Bunge’s “Mission to Improve the Agribusiness Markets” sponsor challenge.',
    technologies: ['Python', 'Pandas', 'Natural-language queries'],
    links: [{ label: 'Devpost', href: 'https://devpost.com/software/pifia' }],
  },
  {
    slug: 'gptasty',
    name: 'GPTasty',
    year: '2025',
    context: 'Collaborative university project',
    description:
      'A hybrid meal-planning system combining recipe embeddings, knowledge-based rules, ontology reasoning, nutrition constraints, and image-based recipe recognition.',
    outcome: 'Public implementation spanning recommendation, nutrition, vision, and a web interface.',
    technologies: ['SBERT', 'Ontology reasoning', 'Computer vision'],
    links: [{ label: 'GitHub', href: 'https://github.com/abrilrisso/GPTasty' }],
  },
] as const;

export const awards: readonly AwardItem[] = [
  {
    year: '2026',
    title: 'Barça Innovation Hack · First prize',
    organizer: 'Barça Innovation Hub',
    description:
      'Won with IpurdIAr, a five-person agentic multimodal system for tactical football analysis, after selection from more than 3,500 applicants.',
    organization: 'barca',
    homeProof: '1st prize · Selected from 3,500+ applicants',
    links: [
      {
        label: 'Official feature',
        href: 'https://barcainnovationhub.fcbarcelona.com/blog/ipurdiar-football-analysis-chatbot/',
      },
    ],
    featuredOnHome: true,
  },
  {
    year: '2026',
    title: 'Elena Maseras Research Fellowship',
    organizer: 'Computer Vision Center',
    description:
      'Selected for CVC’s research fellowship for final-year undergraduates pursuing advanced work in computer vision and AI.',
    organization: 'cvc',
    homeProof: 'Competitive research fellowship',
    links: [{ label: 'Official programme', href: 'https://www.cvc.uab.es/internship/' }],
    featuredOnHome: true,
  },
  {
    year: '2024',
    title: 'AINA Hack · First prize',
    organizer: 'BSC-CNS · Eurecat',
    description:
      'Won with LaIA, a four-person multimodal assistant for Catalan public services, among 20 teams.',
    organization: 'aina',
    homeProof: '1st of 20 teams · 68 participants',
    links: [{ label: 'Official result', href: 'https://cidai.eu/en/ecosystems/hackatons/ainahack/' }],
    featuredOnHome: true,
  },
  {
    year: '2024',
    title: 'AI & Auditing Challenge · Winner',
    organizer: 'Col·legi de Censors Jurats de Comptes de Catalunya',
    description:
      'Won with a three-person inventory-impairment analysis system combining time-series, autoencoder, and explainable-model components.',
    organization: 'auditors',
    links: [
      { label: 'GitHub', href: 'https://github.com/caiselvas/challenge-auditoria' },
      {
        label: 'Official challenge',
        href: 'https://www.auditorscensors.com/en/challenge--inteligencia-artificial-y-auditoria',
      },
    ],
  },
  {
    year: '2023',
    title: 'HackUPC Bunge Challenge · Winner',
    organizer: 'HackUPC · Bunge',
    description:
      'Won Bunge’s sponsor challenge with PifIA, a three-person Python prototype for querying and filtering the supplied database.',
    organization: 'hackupc',
    links: [{ label: 'Devpost', href: 'https://devpost.com/software/pifia' }],
  },
  {
    year: '2022–2026',
    title: 'Seven UPC honors distinctions',
    organizer: 'Universitat Politècnica de Catalunya',
    description:
      'Honors across Computer Vision, NLP and Deep Learning, Reinforcement and Unsupervised Learning, Statistics, and Optimization.',
    organization: 'upc',
    links: [
      {
        label: 'Degree programme',
        href: 'https://www.upc.edu/en/bachelors/artificial-intelligence-barcelona-fib',
      },
    ],
  },
  {
    year: '2022',
    title: 'University Entrance Distinction',
    organizer: 'Government of Catalonia',
    description: 'Recognized for performance in the top 0.7% of the common examination phase.',
    organization: 'generalitat',
    homeProof: 'Top 0.7% of the examination cohort',
    links: [
      {
        label: 'School feature',
        href: 'https://agora.xtec.cat/insjoanguinjoan/general/acte-de-lliurament-de-les-distincions-pau-2022/',
      },
    ],
    featuredOnHome: true,
  },
] as const;

export const about = {
  paragraphs: [
    'I’m drawn to ambitious AI problems where a new technical idea could move research forward or unlock a genuinely useful product. I enjoy getting close to the state of the art, identifying the opportunity that matters, and doing the research and engineering needed to test it properly.',
    'I am now pursuing an M.Sc. at EPFL and beginning research at LTS4 on foundation models for spatial biology. That follows work on model adaptation at CVC–LAMP, private document intelligence at Serimag, a Catalan language model trained from scratch, and award-winning multimodal systems.',
  ],
  contactHeading: 'Let’s connect.',
  contactText:
    'I’m always interested in ambitious research, R&D, and technically differentiated AI projects.',
} as const;
