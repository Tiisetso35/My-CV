export const profile = {
  fullName: 'Tiisetso Rannyama',
  title: 'Software Engineering & Multimedia Student',
  summary:
    'Final-year Diploma in Software Engineering and Multimedia student at Limkokwing University of Creative Technology. I build responsive web applications with React.js and JavaScript, and I enjoy turning clear designs into accessible, maintainable interfaces. Currently seeking an internship or graduate position where I can contribute to real product work and keep growing as a front-end developer.',
  photo: 'https://ui-avatars.com/api/?name=Tiisetso+Rannyama&size=256&background=1f6feb&color=ffffff&bold=true',
};

export const contact = {
  email: 'tiisetsorannyama@gmail.com',
  phone: '+266 5000 0000',
  location: 'Maseru, Lesotho',
  github: 'https://github.com/Tiisetso35',
};

export const education = [
  {
    id: 'edu-1',
    qualification: 'Diploma in Software Engineering and Multimedia',
    institution: 'Limkokwing University of Creative Technology, Lesotho',
    years: '2024 - 2026',
    detail: 'Year 3, Semester 1. Coursework: Web Design II, Object Oriented Programming, Database Systems, Mobile Application Development.',
  },
  {
    id: 'edu-2',
    qualification: 'Foundation in Information Technology',
    institution: 'Limkokwing University of Creative Technology, Lesotho',
    years: '2023 - 2024',
    detail: 'Introduction to programming, computer systems and digital media production.',
  },
  {
    id: 'edu-3',
    qualification: 'Lesotho General Certificate of Secondary Education (LGCSE)',
    institution: 'Maseru High School',
    years: '2019 - 2022',
    detail: 'Subjects included Mathematics, Physical Science, English and Computer Studies.',
  },
];

export const skills = [
  { id: 'sk-1', name: 'React.js (components, props, hooks)', level: 85 },
  { id: 'sk-2', name: 'JavaScript (ES6+)', level: 82 },
  { id: 'sk-3', name: 'HTML5 & CSS3 / Responsive Design', level: 90 },
  { id: 'sk-4', name: 'Git & GitHub version control', level: 75 },
  { id: 'sk-5', name: 'UI/UX design (Figma, Adobe XD)', level: 70 },
  { id: 'sk-6', name: 'Teamwork & communication', level: 88 },
];

export const experience = [
  {
    id: 'exp-1',
    position: 'Front-End Developer (Student Project Team)',
    organisation: 'Limkokwing University, Faculty of ICT',
    period: 'Jan 2026 - Present',
    responsibilities: [
      'Develop responsive interfaces in React.js for faculty coursework projects.',
      'Translate Figma wireframes into reusable, prop-driven components.',
      'Review teammates\u2019 pull requests and maintain the shared Git repository.',
    ],
  },
  {
    id: 'exp-2',
    position: 'IT Support Assistant (Part-time)',
    organisation: 'Maluti Cabs, Maseru',
    period: 'Jun 2025 - Dec 2025',
    responsibilities: [
      'Maintained the company web presence and updated service content weekly.',
      'Provided first-line support for staff hardware, network and software issues.',
      'Documented recurring faults and their fixes to shorten resolution time.',
    ],
  },
];

export const projects = [
  {
    id: 'prj-1',
    name: 'Online Curriculum Vitae (this application)',
    tech: 'React.js, Vite, CSS3',
    description:
      'A component-based online CV built with functional components, props, useState and useEffect, featuring a dark/light theme, collapsible sections and a print-to-PDF option.',
  },
  {
    id: 'prj-2',
    name: 'Maluti Cabs Booking Interface',
    tech: 'HTML5, CSS3, JavaScript',
    description:
      'An academic project providing a ride-booking form with client-side validation, fare estimation and a responsive layout for mobile users.',
  },
  {
    id: 'prj-3',
    name: 'Campus Event Notice Board',
    tech: 'React.js, LocalStorage',
    description:
      'A personal project where students post and filter campus events; state is managed with hooks and persisted in the browser between visits.',
  },
];

export const references = [
  {
    id: 'ref-1',
    name: 'Mr. Liteboho Molaoa',
    role: 'Lecturer, Web Design II',
    organisation: 'Limkokwing University of Creative Technology',
    email: 'liteboho.molaoa@limkokwing.ac.ls',
  },
  {
    id: 'ref-2',
    name: 'Ms. Palesa Mokoena',
    role: 'Operations Manager',
    organisation: 'Maluti Cabs, Maseru',
    email: 'operations@malutacabs.co.ls',
  },
];
