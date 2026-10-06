// ─── Personal info, links and static copy. Edit here. ───
export const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

export const profile = {
  name: 'Rohan Arun Chavan',
  role: 'Java Full Stack Developer',
  headline: 'Building scalable web applications with Java, Spring Boot & React.',
  intro:
    'BCA graduate and Java Full Stack Developer who builds real applications: REST APIs, secured backends, relational databases and React interfaces connected end to end.',
  email: 'rohanchavan5604@gmail.com',
  phone: '9665885942',
  location: 'Sangli, Maharashtra, India',
  photo: asset('images/profile.webp'),
  resume: asset('resume/Rohan_Arun_Chavan_Resume.pdf'),
};

export const social = {
  github: 'https://github.com/rohanchavan5604-ai',
  linkedin: 'https://linkedin.com/in/rohan-chavan-45-',
  leetcode: 'https://leetcode.com/u/CWVDJW0Q3h/',
  email: `mailto:${profile.email}`,
};

export const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Education', 'Contact'];

export const about = {
  paragraphs: [
    'I am a BCA graduate and Full Stack Developer with hands-on experience in Java, Spring Boot, Spring Data JPA, REST APIs, React.js, JavaScript and relational databases.',
    'My practical work covers frontend and backend development, CRUD operations, database integration, authentication and authorization, and connecting React frontends to Spring Boot services.',
  ],
  highlights: ['Frontend development', 'Backend development', 'REST API development', 'CRUD operations', 'Database integration', 'Authentication', 'Authorization', 'Frontend-backend integration'],
  languages: 'English, Hindi, Marathi',
};

export const experience = {
  title: 'Java Full Stack Trainee',
  company: 'HefShine Softwares Pvt. Ltd., Pune',
  points: [
    'Developed full-stack web applications using Java, Spring Boot, React.js, REST APIs and relational databases (MySQL/PostgreSQL).',
    'Built RESTful backend services with CRUD operations, input validation, global exception handling and database integration using Spring Data JPA and Hibernate.',
    'Developed responsive frontend interfaces using HTML, CSS, JavaScript and React.js, integrated with backend REST APIs.',
    'Used Git, GitHub, Maven and Postman for version control, build management and API testing.',
  ],
  tags: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'MySQL', 'PostgreSQL', 'Spring Data JPA', 'Hibernate', 'Validation', 'Exception Handling', 'Git', 'GitHub', 'Maven', 'Postman'],
};

export const education = [
  { degree: 'BCA (Computer Applications)', school: 'Shivaji University, Kolhapur', year: '2026', score: 'CGPA: 6.88' },
  { degree: 'HSC (XII – Science)', school: 'Maharashtra State Board', year: '2023', score: '48.67%' },
  { degree: 'SSC (X)', school: 'Maharashtra State Board', year: '2021', score: '74.80%' },
];

export const aboutCards = [
  { icon: 'Server', title: 'Java & Spring Boot', text: 'Backend services with Spring Data JPA, Hibernate and Spring Security.' },
  { icon: 'Layers', title: 'Full Stack Development', text: 'React.js interfaces integrated with Spring Boot REST APIs.' },
  { icon: 'Network', title: 'REST API Development', text: 'CRUD endpoints with input validation and global exception handling.' },
  { icon: 'Database', title: 'Database Integration', text: 'MySQL and PostgreSQL through Spring Data JPA and Hibernate.' },
];

export const whatIBuild = [
  { icon: 'Server', title: 'Backend APIs', text: 'Layered REST services in Spring Boot.' },
  { icon: 'Boxes', title: 'Full Stack Applications', text: 'Java backends with React or JavaScript frontends.' },
  { icon: 'Database', title: 'Database-driven Apps', text: 'Relational data with JPA and SQL.' },
  { icon: 'ShieldCheck', title: 'Authentication Systems', text: 'Role-based access with Spring Security.' },
  { icon: 'Sparkles', title: 'AI-powered Applications', text: 'Semantic job matching; meeting summaries in progress.' },
];
