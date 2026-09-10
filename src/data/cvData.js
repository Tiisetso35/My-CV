import photo from '../assets/profile.jpg';

// All the CV information is kept in this one file.
// Change the values here and the whole CV updates.

export const person = {
  name: 'Tiisetso Rannyama',
  title: 'Software Engineering & Multimedia Student',
  summary:
    'I am a third-year Diploma in Software Engineering and Multimedia student at Limkokwing University of Creative Technology. I enjoy building simple, responsive websites with HTML, CSS, JavaScript and React, and I also work with Python, WordPress and design tools. I am looking for an internship where I can practise what I have learned and gain real work experience.',
  photo,
  email: 'tiisetsorannyama@gmail.com',
  phone: '+266 5000 0000',
  location: 'Maseru, Lesotho',
};

export const education = [
  {
    institution: 'Limkokwing University of Creative Technology, Lesotho',
    programme: 'Diploma in Software Engineering and Multimedia',
    year: 'Year 3, Semester 1 (2024 - 2026)',
  },
  {
    institution: 'Limkokwing University of Creative Technology, Lesotho',
    programme: 'Foundation in Information Technology',
    year: '2023 - 2024',
  },
  {
    institution: 'Makena High School, Mafeteng',
    programme: 'Lesotho General Certificate of Secondary Education (LGCSE)',
    year: '2021',
  },
  {
    institution: 'Makena High School, Mafeteng',
    programme: 'Junior Certificate (Form C)',
    year: '2019',
  },
];

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Python',
  'WordPress',
  'Multimedia and graphic design (Photoshop, Illustrator)',
];

export const experience = [
  {
    position: 'Web Design Intern (Student Placement)',
    organisation: 'Limkokwing University, Faculty of ICT',
    responsibilities: [
      'Updated pages of the faculty website using HTML and CSS.',
      'Helped other students with small React and JavaScript exercises.',
      'Prepared images and simple graphics for the web pages.',
    ],
  },
  {
    position: 'Car Wash Attendant (Part-time)',
    organisation: 'Local Car Wash, Mafeteng',
    responsibilities: [
      'Washed and cleaned customer vehicles to the required standard.',
      'Served customers, took their orders and handled payments.',
      'Worked as part of a small team to finish jobs on time.',
    ],
  },
];

export const projects = [
  {
    name: 'Online CV (this project)',
    description:
      'A single page CV website built with React components, props, useState and useEffect. It has Show/Hide buttons and a Print CV button.',
  },
  {
    name: 'Maluti Cabs Booking Page',
    description:
      'A class project with a booking form built in HTML, CSS and JavaScript. The form checks that all fields are filled in before submitting.',
  },
  {
    name: 'Campus Notice Board',
    description:
      'A small React practice project where students can add and remove notices. It uses useState to keep the list of notices.',
  },
];

export const references = [
  {
    name: 'Mr. Liteboho Molaoa',
    position: 'Lecturer, Web Design II',
    organisation: 'Limkokwing University of Creative Technology',
    email: 'liteboho.molaoa@limkokwing.ac.ls',
    phone: '+266 5000 0001',
  },
  {
    name: 'Khauta Rannyama',
    position: 'Supervisor',
    organisation: 'Local Car Wash, Mafeteng',
    phone: '+266 5994 3035',
  },
];
