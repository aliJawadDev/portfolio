export const profile = {
  name: 'Ali Jawad',
  fullName: 'Muhammad Ali Jawad',
  role: 'Software engineer moving into autonomous vehicles',
  intro:
    'I build connected systems, from device telemetry to the cloud. Right now I study Autonomous Vehicle Engineering at THI Ingolstadt, where I focus on embedded systems, sensor fusion and software defined vehicles.',
  location: 'Ingolstadt, Germany',
  email: 'immalijawad@gmail.com',
  linkedin: 'https://www.linkedin.com/in/m-ali-jawad',
  tags: [
    'Full-Stack Development',
    'IoT',
    'Embedded Systems',
    'C/C++',
    'Python',
    'AI & Automation',
    'Linux',
  ]
}

export const phrases = [
  `${profile.name}`,
  'a Builder',
  'a Curious Mind',
  'Always Exploring',
  'In Build Mode',
  'a Problem Solver',
  'a Code Enthusiast',
  'Into AI & IoT',
  'a Tech Explorer',
  'Driven by Curiosity',
  'Always Experimenting',
  'Just Getting Started',
]


export const about = {
  paragraphs: [
    "I'm curious about how things work, from software and AI to embedded systems and connected devices.",
    "I enjoy learning by building, experimenting with new ideas, and solving problems that push me beyond what I already know.",
    "For me, every challenge is a chance to understand something better and turn knowledge into something useful."
  ],

  stats: [
    { value: '01', label: 'Curious Mind' },
    { value: '02', label: 'Software & Hardware' },
    { value: '03', label: 'Learn by Building' },
    { value: '∞', label: 'Things to Explore' },
  ],
}


export const mindset = [
  {
    step: '01',
    title: 'Input',
    question: 'What data do we need, where does it come from, and what type is it?',
    description:
      'Identify the required data, find its source, and understand what type of data we are working with.',
  },
  {
    step: '02',
    title: 'Process',
    question: 'What do we need to do with the data?',
    description:
      'Determine what operations, logic, or calculations we need to perform to get the desired result.',
  },
  {
    step: '03',
    title: 'Output',
    question: 'Where should the result go, and in what form?',
    description:
      'Decide where to send the result, how to present it, and whether to store it or transmit it to another system.',
  },
]



export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'C#', 'Node.js', 'Dart'],
  },
  {
    group: 'Frontend and mobile',
    items: ['React', 'React Native', 'Expo', 'Flutter', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    group: 'Backend and APIs',
    items: ['Express', 'REST APIs', 'WebSockets', 'Odoo modules'],
  },
  {
    group: 'IoT and real time',
    items: ['ThingsBoard', 'MQTT style telemetry', 'Live dashboards', 'WebSocket streaming'],
  },
  {
    group: 'Test automation',
    items: ['Appium', 'Playwright', 'Selenium', 'Regression testing'],
  },
  {
    group: 'Data and tools',
    items: ['MongoDB', 'Relational design', 'Git', 'Linux CLI', 'Android Studio', 'Unity'],
  },
]

export const experience = [
  {
    title: 'Software Developer Intern',
    org: 'Embinx (Epteck GmbH Branch)',
    place: 'Faisalabad, Pakistan',
    period: 'May 2025 to May 2026',
    points: [
      'Built ThingsBoard dashboards monitoring 500+ devices across 10+ types, with real time telemetry visualization.',
      'Cut stored data payload by 50% by reworking rule chain processing with abbreviation mapping and unified alarm handling.',
      'Implemented WebSocket based two way communication for sub second live data streaming.',
      'Added remote control of motors and valves through the ThingsBoard RPC API from central SCADA style dashboards.',
      'Designed and ran 50+ automated mobile and web tests with Appium, Playwright and Selenium.',
      'Developed 7+ Odoo ERP modules, a Python tool that generates Word documents from Excel data, and an AI assisted CV screening tool using a Hugging Face LLM.',
    ],
  },
  {
    title: 'Freelance Web Developer',
    org: 'Self employed',
    place: 'Faisalabad, Pakistan',
    period: 'Apr 2021 to Nov 2024',
    points: [
      'Delivered full stack web apps with React, Node.js, Express and MongoDB, plus cross platform mobile apps with React Native and Expo, consistently on deadline.',
    ],
  },
  {
    title: 'Computer Science Tutor',
    org: 'Private',
    place: 'Remote',
    period: 'Jul 2022 to May 2025',
    points: [
      'Taught computer science concepts to international students across Pakistan, the UAE and Saudi Arabia.',
    ],
  },
]

export const education = [
  {
    title: 'B.Eng. Autonomous Vehicle Engineering',
    org: 'Technische Hochschule Ingolstadt',
    period: 'Oct 2025 to present',
    detail:
      'Embedded systems, sensor fusion, vehicle dynamics, control systems, ADAS and autonomous navigation.',
  },
  {
    title: 'A Levels, Cambridge International',
    org: 'Faisalabad, Pakistan',
    period: 'Nov 2023 to Nov 2024',
    detail: 'Physics (B), Mathematics (B), Computer Science (A).',
  },
]

export const languages = [
  { name: 'English', level: 'C1' },
  { name: 'German', level: 'A2, improving' },
  { name: 'Urdu', level: 'Native' },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
