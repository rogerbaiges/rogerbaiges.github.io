import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';

export interface ProfileHighlight {
  label: string;
  value: string;
  description: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface ProfileContent {
  hero: {
    eyebrow: string;
    statement: string;
    summary: string;
    note: string;
    metrics?: string[];
  };
  highlights: ProfileHighlight[];
  contact: {
    intro: string;
    location: string;
    links: ContactLink[];
  };
}

export interface ResearchContent {
  overview: string;
  current_project: {
    title: string;
    organization: string;
    summary: string;
    thesis_note: string;
    questions: string[];
    methods: string[];
    findings?: string[];
  };
  interests: { title: string; description: string }[];
  future_direction: string;
  publication_note: string;
}

export interface CVEducation {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CVExperience {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export interface CVSkillGroup {
  category: string;
  items: string[];
}

export interface CVAward {
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export interface CVData {
  education: CVEducation[];
  experience: CVExperience[];
  skills: CVSkillGroup[];
  awards: CVAward[];
  service: { role: string; organization: string; years: string }[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  url?: string;
  github?: string;
  featured?: boolean;
  order: number;
  content: string;
}

function readYamlFile<T>(relativePath: string, fallback: T): T {
  try {
    const fullPath = path.resolve(process.cwd(), relativePath);
    return (yaml.parse(fs.readFileSync(fullPath, 'utf-8')) as T) || fallback;
  } catch {
    return fallback;
  }
}

function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } | null {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return null;

  return {
    data: (yaml.parse(match[1]) as Record<string, any>) || {},
    content: match[2].trim(),
  };
}

export function loadProfileContent(): ProfileContent {
  return readYamlFile<ProfileContent>('src/content/profile.yml', {
    hero: {
      eyebrow: '',
      statement: '',
      summary: '',
      note: '',
      metrics: [],
    },
    highlights: [],
    contact: {
      intro: '',
      location: '',
      links: [],
    },
  });
}

export function loadResearchContent(): ResearchContent {
  return readYamlFile<ResearchContent>('src/content/research.yml', {
    overview: '',
    current_project: {
      title: '',
      organization: '',
      summary: '',
      thesis_note: '',
      questions: [],
      methods: [],
      findings: [],
    },
    interests: [],
    future_direction: '',
    publication_note: '',
  });
}

export function loadCVData(): CVData {
  return readYamlFile<CVData>('src/content/cv/cv.yml', {
    education: [],
    experience: [],
    skills: [],
    awards: [],
    service: [],
  });
}

export function loadProjects(): ProjectEntry[] {
  const projectsDir = path.resolve(process.cwd(), 'src/content/projects');
  const projects: ProjectEntry[] = [];

  try {
    const dirs = fs.readdirSync(projectsDir).filter(dir => fs.statSync(path.join(projectsDir, dir)).isDirectory());

    for (const dir of dirs) {
      const indexPath = path.join(projectsDir, dir, 'index.md');
      if (!fs.existsSync(indexPath)) continue;

      const parsed = parseFrontmatter(fs.readFileSync(indexPath, 'utf-8'));
      if (!parsed) continue;

      const { data, content } = parsed;
      projects.push({
        title: data.title || '',
        description: data.description || '',
        category: data.category || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        image: data.image || '',
        url: data.url || '',
        github: data.github || '',
        featured: Boolean(data.featured),
        order: Number(data.order ?? 999),
        content,
      });
    }
  } catch {}

  return projects.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
  });
}
