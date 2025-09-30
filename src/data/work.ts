import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Senior French  Instructor & ICT Coordinator ",
    company: "Academy of Excellence",
    region: "Nairobi , Kenya",
    description:
      "Led french language instruction for intermediate to advanced students while coordinating ICT integration across departments. Developed  iinovative blended learning curricula that increased student engagement by 35% and implemented digital assessment tools",
    technologies: [
      "French Language",
      "Curriculum Design",
      "Educational Technology",
      "Google Workspace",
      "Zoom",
      "Moodle",
 
    ],
  },
  {
    title: "Freelance Public Speaking Coach",
    company: "Independence Practice",
    region: "Nairobi , Kenya",
    description:
      "Provided personalized coaching to proffessionals, students and aspiring speakers to enhance their public speaking confidence and presentation skills.Conducted over hundred individual coaching sessions with over 95% client satisfation rate and measurable improvement in communication clarity and confidence.",
    technologies: [
      "Public Speaking",
      "Interview Coaching",
      "Voice Training",
      "Communication Coaching",
      "Presentation Skills",

    ],
  },
  {
    title: "French Teacher & Digital Learning Specialist",
    company: "Westlands Secondary School",
    region: "Nairobi, Kenya",
    description:
      "Taught french language to students across all proficiency levels while pioneering the school digital transformation initiative",
    technologies: [
      "Interactive Whiteboards",
      "Student Assesment",
    
    ],
  },
  {
    title: "Junior French Teacher",
    company: "Alliance High School",
    region: "Nairobi , Kenya",
    description:
      "Started my teaching career focussing on foundational French language instruction for secondary school students.Developed engaging lesson plans incoporating cultural elements,organized French cultural events and established peer tutoring programs. Collaborated with experienced educators to refine teaching methodologies and classroom managment techniques.",
    technologies: [
      "Student Mentoring",
      "French Language Training",
      "Cultural Education",
      "Peer Collaboration",
 
    ],
  },
];

export type WorkItem = (typeof work)[number];

