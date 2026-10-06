// ─── ADD NEW CERTIFICATES HERE. Put the preview image in public/certs/. ───
// Titles, dates and IDs are copied from the certificate files. Add `url` only if you have a real verification link.
import { asset } from './site.js';

const c = (o) => ({ ...o, image: asset(`certs/${o.file}.webp`) });

export const certificates = [
  c({ title: 'Software Engineer', org: 'HackerRank', group: 'HackerRank', date: '20 Jul 2026', id: '88A6B71200B6', file: 'software-engineer' }),
  c({ title: 'Frontend Developer (React)', org: 'HackerRank', group: 'HackerRank', date: '25 Jul 2026', id: '75E70BB8E103', file: 'react' }),
  c({ title: 'JavaScript (Intermediate)', org: 'HackerRank', group: 'HackerRank', date: '18 Jul 2026', id: 'BE81F1BED13F', file: 'javascript' }),
  c({ title: 'Java (Basic)', org: 'HackerRank', group: 'HackerRank', date: '5 Jul 2026', id: '32B6847DE744', file: 'java-basic' }),
  c({ title: 'SQL (Advanced)', org: 'HackerRank', group: 'HackerRank', date: '5 Jul 2026', id: 'ADDBD0351337', file: 'sql-advanced' }),
  c({ title: 'Introduction to JIRA', org: 'Atlassian', group: 'Atlassian', date: '6 Jul 2026', id: '10434628', file: 'jira' }),
  c({ title: 'AI DevOps Analyst', org: 'NASSCOM / Skill India Digital Hub', group: 'NASSCOM', date: '24 Jul 2026', file: 'ai-devops' }),
  c({ title: 'Software Test Engineer', org: 'NASSCOM / Skill India Digital Hub', group: 'NASSCOM', date: '12 Aug 2026', file: 'software-test-engineer' }),
  c({ title: 'Data Science & Analytics', org: 'HP LIFE / HP Foundation', group: 'Other', date: '2 Dec 2025', file: 'hp-life' }),
  c({ title: 'Data Analytics Job Simulation', org: 'Deloitte (via Forage)', group: 'Other', date: '5 Dec 2025', file: 'deloitte' }),
];
