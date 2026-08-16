export type DiagramKind = 'repair' | 'football' | 'catgpt' | 'laia';

export interface WorkItem {
  id: string;
  number: string;
  context: string;
  title: string;
  statement: string;
  ownership: string;
  result: string;
  details: readonly string[];
  diagram?: DiagramKind;
  href?: string;
  linkLabel?: string;
}

export const labContent = {
  name: 'Roger Baiges Trilla',
  shortName: 'Roger Baiges',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'About', href: '#about' },
  ],
  hero: {
    eyebrow: 'AI Researcher & Engineer · Incoming M.Sc. at EPFL',
    headline: 'I build and improve advanced AI systems.',
    paragraph:
      'I combine research into how modern models learn and adapt with the engineering needed to turn them into reliable systems for complex, real-world problems.',
    primaryCta: 'Explore selected work',
    secondaryCta: 'Download CV',
    cvHref: '/files/RogerBaigesCV.pdf',
    researchSignal: {
      label: 'Research',
      value: 'Over 90% of lost performance restored',
      detail: 'CLIP and DINO',
    },
    industrySignal: {
      label: 'Industry',
      value: 'Nearly 80% field-level automation',
      detail: '98% accepted-field accuracy threshold',
    },
  },
  proof: [
    { number: '01', label: 'CVC–LAMP Researcher', detail: 'Model adaptation and repair' },
    { number: '02', label: 'UPC · 9.19/10 · Top 5%', detail: '7 honors distinctions' },
    { number: '03', label: '4× AI Hackathon Winner', detail: 'Multimodal and agentic systems' },
  ],
  work: [
    {
      id: 'activation-repair',
      number: '01',
      context: 'Research Experience · CVC–LAMP',
      title: 'Activation-Space Repair',
      statement:
        'Model adaptation can break compatibility even when the underlying capability remains recoverable.',
      ownership:
        'Proposed late-intermediate activation-space repairs that work through frozen downstream layers.',
      result: 'Restored over 90% of lost performance in CLIP and DINO.',
      details: [
        'Readout-aware null-space constraints preserve adapted-task accuracy.',
        'Extended to Qwen retrieval without rebuilding the index.',
      ],
      diagram: 'repair',
    },
    {
      id: 'serimag',
      number: '02',
      context: 'Industry Experience · Serimag R&D',
      title: 'On-Premises Document Intelligence',
      statement:
        'The company’s hardest banking document type needed trainable extraction under strict data and accuracy constraints.',
      ownership:
        'Pioneered Serimag’s first trainable extraction prototype, including on-premises VLM fine-tuning and evaluation.',
      result:
        'Reached nearly 80% field-level automation at the required 98% accepted-field accuracy threshold.',
      details: [
        'Sensitive data remained on premises.',
        'Uncertain fields were routed to manual review.',
      ],
    },
    {
      id: 'ipurdiar',
      number: '03',
      context: 'Agentic Multimodal System · Barça Innovation Hack Winner',
      title: 'IpurdIAr',
      statement:
        'A tactical-football system that turns synchronized match evidence into grounded answers for complex questions.',
      ownership:
        'Built an agent that autonomously selects tools across tracking data, inferred events, and time-aligned commentary.',
      result: 'Won the Barça Innovation Hack.',
      details: ['Tracking and inferred events', 'Time-aligned commentary', 'Autonomous tool selection'],
      diagram: 'football',
      href: 'https://github.com/FLOOREES/IpurdIArs-more-than-a-hack',
      linkLabel: 'View project',
    },
    {
      id: 'catgpt',
      number: '04',
      context: 'Language Model · Independent Project',
      title: 'CatGPT + Patufet',
      statement:
        'An end-to-end Catalan language-model stack built to investigate low-resource model training from first principles.',
      ownership:
        'Trained a 111M-parameter GPT-style model from scratch with a custom tokenizer, plus base and instruction-tuned variants.',
      result: 'Created a 300M-token synthetic Catalan corpus.',
      details: ['Custom tokenizer', 'Base model', 'Instruction-tuned variant'],
      diagram: 'catgpt',
      href: 'https://github.com/rogerbaiges/CatGPT',
      linkLabel: 'View project',
    },
    {
      id: 'laia',
      number: '05',
      context: 'Multimodal RAG · AINA Hack Winner',
      title: 'LaIA',
      statement:
        'A multimodal assistant that makes Catalan public-service procedures easier to navigate across formats.',
      ownership:
        'Built a retrieval and reasoning flow spanning documents, images, speech, web retrieval, and form completion.',
      result: 'Won the AINA Hack.',
      details: ['Multimodal inputs', 'Web retrieval', 'Guided form completion'],
      diagram: 'laia',
      href: 'https://github.com/pauhidalgoo/LaIA',
      linkLabel: 'View project',
    },
  ] satisfies readonly WorkItem[],
  education: [
    {
      number: '01',
      institution: 'EPFL',
      degree: 'Incoming M.Sc. in Computer Science',
      detail: 'AI & Data Science specialization',
      period: '2026–2028 · Incoming',
    },
    {
      number: '02',
      institution: 'UPC',
      degree: 'B.Sc. in Artificial Intelligence',
      detail: '9.19/10 · Top 5% · 7 honors distinctions',
      period: '2022–2026',
    },
    {
      number: '03',
      institution: 'KU Leuven',
      degree: 'Erasmus+ in Artificial Intelligence',
      detail: 'Advanced machine-learning coursework',
      period: '2025–2026',
    },
  ],
  recognition: [
    {
      title: 'Four AI hackathon wins',
      detail: 'Including Barça Innovation Hack and AINA Hack',
    },
    {
      title: 'Elena Maseras Fellowship',
      detail: '2026',
    },
    {
      title: 'University Entrance Distinction',
      detail: 'Government of Catalonia · 2022',
    },
  ],
  about: {
    eyebrow: 'About Roger',
    headline: 'Research depth, engineering discipline, and the instinct to build.',
    paragraph:
      'I’m Roger Baiges Trilla, an AI researcher and engineer based in Barcelona. I work where model behavior, training, and demanding applications meet—from repairing compatibility in foundation models to building private document-intelligence systems and multimodal agents.',
    note:
      'In September 2026, I join EPFL’s M.Sc. in Computer Science to specialize in AI & Data Science.',
  },
  contact: {
    eyebrow: 'Start a conversation',
    headline: 'Let’s work on difficult AI problems.',
    paragraph: 'Open to research collaborations, ambitious AI systems, and deep-tech opportunities.',
    email: 'rogerbaigestrilla@gmail.com',
    emailHref: 'mailto:rogerbaigestrilla@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rogerbaigestrilla/' },
      { label: 'GitHub', href: 'https://github.com/rogerbaiges' },
      { label: 'Hugging Face', href: 'https://huggingface.co/baiges' },
    ],
  },
} as const;

export const diagramStages: Record<DiagramKind, readonly (readonly string[])[]> = {
  repair: [
    ['Original compatibility'],
    ['Model adaptation'],
    ['Compatibility failure'],
    ['Activation-space repair'],
  ],
  football: [['Tracking', 'Events', 'Commentary'], ['Tool selection'], ['Tactical answer']],
  catgpt: [['Corpus'], ['Tokenizer'], ['Pretraining'], ['Instruction tuning']],
  laia: [['Document', 'Image', 'Voice'], ['Retrieval & reasoning'], ['Guided procedure']],
};
