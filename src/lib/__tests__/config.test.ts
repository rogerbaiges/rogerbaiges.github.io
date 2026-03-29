import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('config', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('getEnabledPages returns only enabled pages', async () => {
    vi.doMock('node:fs', () => ({
      default: {
        readFileSync: () => `
site:
  title: Test
  description: Test
  url: https://test.com
  language: en
profile:
  name: Test
  position: Test
  affiliation: Test
  university: Test
  email: test@test.com
  avatar: /test.jpg
  bio: Test
  bio_short: Test
social: {}
pages:
  home: true
  about: true
  research: true
  projects: false
  awards: false
  cv: false
  contact: true
  news: false
  publications: false
  teaching: false
  talks: false
  team: false
  positions: false
  collaborators: false
  service: false
  repositories: false
  blog: false
  gallery: false
  books: false
  media: false
  travel: false
theme:
  cursor_spotlight: false
  style: research
  palette: default
  random_theme: false
  avatars: []
publications:
  author_name: Test
  bibtex_file: papers.bib
  group_by_year: true
  show_badges: false
blog:
  posts_per_page: 10
  show_reading_time: true
  show_table_of_contents: true
  comments:
    enabled: false
    repo: ""
    repo_id: ""
    category: ""
    category_id: ""
`,
      },
    }));

    const { getEnabledPages } = await import('../config');
    const pages = getEnabledPages();
    const names = pages.map(page => page.name);

    expect(names).toContain('home');
    expect(names).not.toContain('about');
    expect(names).toContain('research');
    expect(names).toContain('contact');
    expect(names).not.toContain('projects');
    expect(names).not.toContain('blog');
  });
});
