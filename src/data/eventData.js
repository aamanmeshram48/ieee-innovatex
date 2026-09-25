// ============================================================================
// IEEE INNOVATEX 2026 - EVENT DATA CONFIGURATION
// ============================================================================
// All content is modular and data-driven.
// Edit values below to update the event dates, schedules, speakers, or details.
// ============================================================================

export const EVENT_INFO = {
  name: 'IEEE INNOVATEX 2026',
  acronym: 'INNOVATEX 2026',
  organizers: 'IEEE IAS × IEEE RAS',
  collaborators: 'IEEE Industry Applications Society & IEEE Robotics and Automation Society',
  institution: 'Madhav Institute of Technology & Science (MITS)',
  location: 'MITS Gwalior, Madhya Pradesh, India',
  venueShort: 'MITS Gwalior',
  tagline: 'Where Ideas Become Innovation.',
  description:
    'An immersive technical experience exploring Artificial Intelligence, Robotics, Automation and the technologies shaping tomorrow.',
  
  // NOTE: Editable placeholder event date. Update as official schedule is finalized.
  datePlaceholder: '12 OCT 2026',
  dateFormatted: 'October 12, 2026',
  time: '10:00 AM – 05:00 PM IST',
  category: 'Technical Innovation Event',
  edition: 'Annual Technical Summit',
  contactEmail: 'ieee.innovatex@mitsgwalior.in',
};

// Navigation Links
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
];

// About Section Tracks / Feature Cards
export const ABOUT_FEATURES = [
  {
    number: '01',
    title: 'ARTIFICIAL INTELLIGENCE',
    subtitle: 'Intelligent Systems & Neural Models',
    description: 'Explore intelligent systems and emerging AI technologies.',
    details: 'From foundational deep learning to generative architectures and edge perception systems.',
    tag: 'Next-Gen AI',
    iconName: 'Cpu',
  },
  {
    number: '02',
    title: 'ROBOTICS',
    subtitle: 'Kinematics & Autonomous Systems',
    description: 'Discover autonomous systems, robotic platforms and real-world applications.',
    details: 'Kinematics, ROS-based controllers, computer vision navigation, and collaborative multi-agent robotics.',
    tag: 'Autonomy',
    iconName: 'Bot',
  },
  {
    number: '03',
    title: 'AUTOMATION',
    subtitle: 'Industrial Control & Cyber-Physical Tech',
    description: 'Understand how intelligent automation is transforming industries.',
    details: 'SCADA, smart manufacturing paradigms, real-time telemetry, and resilient cyber-physical pipelines.',
    tag: 'Industry 4.0',
    iconName: 'Zap',
  },
];

// Event Experience Benefits (Asymmetric Grid)
export const EXPERIENCE_BENEFITS = [
  {
    id: 'learn',
    keyword: 'LEARN',
    title: 'Pioneering Technical Insight',
    description: 'Gain exposure to emerging technologies.',
    detail: 'Deep dive into emerging frontiers of robotics and intelligent industrial compute directly from veteran practitioners.',
    span: 'col-span-12 md:col-span-7',
    gradient: 'from-cyan-500/10 via-slate-900/40 to-slate-900/60',
    borderColor: 'border-cyan-500/20 hover:border-cyan-400/40',
    accentColor: 'text-cyan-400',
    badge: '01 // KNOWLEDGE',
  },
  {
    id: 'build',
    keyword: 'BUILD',
    title: 'Practical Engineering Craft',
    description: 'Turn ideas into practical solutions.',
    detail: 'Hands-on demonstrations and live technical showcases that bridge algorithmic theory with physical execution.',
    span: 'col-span-12 md:col-span-5',
    gradient: 'from-blue-500/10 via-slate-900/40 to-slate-900/60',
    borderColor: 'border-blue-500/20 hover:border-blue-400/40',
    accentColor: 'text-blue-400',
    badge: '02 // PROTOTYPING',
  },
  {
    id: 'connect',
    keyword: 'CONNECT',
    title: 'Collaborative Ecosystem',
    description: 'Meet students and technology enthusiasts.',
    detail: 'Forge high-impact connections across IEEE student branches, university researchers, and industry visionaries.',
    span: 'col-span-12 md:col-span-5',
    gradient: 'from-purple-500/10 via-slate-900/40 to-slate-900/60',
    borderColor: 'border-purple-500/20 hover:border-purple-400/40',
    accentColor: 'text-purple-400',
    badge: '03 // COMMUNITY',
  },
  {
    id: 'innovate',
    keyword: 'INNOVATE',
    title: 'Unconstrained Horizons',
    description: 'Think beyond conventional solutions.',
    detail: 'Challenge baseline assumptions and develop resilient technologies engineered for next-generation socio-industrial needs.',
    span: 'col-span-12 md:col-span-7',
    gradient: 'from-indigo-500/10 via-slate-900/40 to-slate-900/60',
    borderColor: 'border-indigo-500/20 hover:border-indigo-400/40',
    accentColor: 'text-indigo-400',
    badge: '04 // FUTURE',
  },
];

// Event Schedule Timeline (Data-driven array)
// EDITABLE: Adjust timings, titles, or descriptions as needed.
export const SCHEDULE_TIMELINE = [
  {
    time: '10:00 AM',
    period: 'MORNING',
    title: 'Opening Ceremony',
    description: 'Inaugural address, lighting of the lamp, and opening remarks by IEEE Branch Counselors & Student Leaders.',
    location: 'Main Auditorium, MITS Gwalior',
    tag: 'Inaugural',
    active: false,
  },
  {
    time: '11:00 AM',
    period: 'MORNING',
    title: 'Keynote Session',
    description: 'Keynote address exploring autonomous systems, industrial neural networks, and frontiers of robotics.',
    location: 'Main Auditorium',
    tag: 'Keynote Address',
    active: true,
  },
  {
    time: '01:00 PM',
    period: 'AFTERNOON',
    title: 'Technical Innovation Session',
    description: 'Interactive project demonstrations, technical paper presentations, and hardware showcase.',
    location: 'Advanced Computing Lab & Foyer',
    tag: 'Showcase & Demos',
    active: false,
  },
  {
    time: '04:00 PM',
    period: 'EVENING',
    title: 'Closing & Networking',
    description: 'Certificate distribution, valedictory address, and open networking mixer with mentors.',
    location: 'Convention Center Grounds',
    tag: 'Valedictory',
    active: false,
  },
];

// Keynote Speakers
// EXACTLY 2 Keynote Speaker Cards
// IMPORTANT: Editable placeholder profiles as specified by technical task requirements.
// Replace placeholders with real speaker names, titles, and photo URLs when confirmed.
export const KEYNOTE_SPEAKERS = [
  {
    id: 'speaker-01',
    roleLabel: 'Speaker 01',
    name: 'Industry Expert',
    topic: 'Technology & Innovation',
    affiliation: 'Global Systems Engineering & Technical Research',
    bio: 'Pioneering technical advisor specializing in applied autonomy, distributed systems, and real-time computing infrastructure.',
    tags: ['Robotics', 'Systems Design', 'Hardware Autonomy'],
    socials: {
      linkedin: '#',
      twitter: '#',
    },
    // Placeholder avatar identifier
    avatarType: 'expert',
  },
  {
    id: 'speaker-02',
    roleLabel: 'Speaker 02',
    name: 'Technology Leader',
    topic: 'AI & Automation',
    affiliation: 'Advanced Robotics & Intelligent Automation Labs',
    bio: 'Distinguished researcher focused on self-adapting machine intelligence, industrial robotic manipulation, and automated workflows.',
    tags: ['Machine Learning', 'Industrial IoT', 'Automation'],
    socials: {
      linkedin: '#',
      twitter: '#',
    },
    // Placeholder avatar identifier
    avatarType: 'leader',
  },
];

// Footer Navigation & Social Links
export const FOOTER_LINKS = {
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Register', href: '#register' },
  ],
  socials: [
    { name: 'Instagram', href: 'https://instagram.com', label: '@ieee_innovatex2026' },
    { name: 'LinkedIn', href: 'https://linkedin.com', label: 'IEEE Student Branch MITS' },
    { name: 'GitHub', href: 'https://github.com', label: 'github.com/ieee-innovatex' },
  ],
  copyright: '© 2026 IEEE IAS × RAS | MITS Gwalior',
  disclaimer: 'All official IEEE and Chapter logos are trademarks of the Institute of Electrical and Electronics Engineers.',
};
