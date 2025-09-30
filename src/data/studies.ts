export const studies = [
  {
    title: "B.A in French Language & Literature",
    institution: "University of Nairobi",
    description:
      "Comprehensive study of French language , literature and culture with focus on pedagogical approaches.Develped advanced proficiency in written and spoken French, analyzed classical and contemporary Francophone literature and explored French cultural history.Completed teaching practicum with emphasis on communicative language teaching technologies and cross cultural communication.",
    tags: [
      "French Literature Analysis",
      "Translation",
      "French Grammar",
      "Phonetics",
      "Academic Writing"
    ],
  },
  {
    title: "Dip. in Information and Communication Technology",
    institution: "Kenya Institute of Management",
    description:
      "Intense program covering modern ICT applications in educational settings . Studied  database management , web development, educational systems and digital content creation.Specialized in integrating technology tools into classrom instruction and developing multimedia learning resource.",
    tags: [
      "Database Management",
      "Multimedia Design",
      "Web Development",
      "IT Support",
      "Digital Content Creation"
    ],
  },
    {
    title: "Certificate in Public Speaking & Communication",
    institution: "Dale Carnegie Institute",
    description:
      "Proffessional development program focused on public speaking techniques, presentation skills and effective communication strategies. Covered voice projection, body language,audience engagement, speech structure and confidence building",
    tags: [
      "Public Speaking",
      "Speech Writing",
      "Leadership Prescence",
      "Communication Skills",
    ],
  },
    {
    title: "Certificate in Online Teaching & Learning",
    institution: "University of Edinburgh ( Virtual )",
    description:
      "Specialized certification in digital pedagogy and remote learning methodologies. Explored the best practices fro online course design, student engagement in virtual environments, assesment strategies for digital learning and effective use of educational platforms.Gained expertise in creating inclusive and accessible online learning experiences.",
    tags: [
      "Online Pedagogy",
      "Course Design",
      "Digital Assesment",
      "Remote Learning",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

