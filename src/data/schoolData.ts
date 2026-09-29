export interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string; desc?: string }[];
}

export const navigationData: NavItem[] = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About JRS",
    href: "#about",
    children: [
      { name: "About School", href: "#about", desc: "Our heritage, philosophy & campus" },
      { name: "Vision & Mission", href: "#about", desc: "Our core ethos and long-term vision" },
      { name: "Chairman & Principal's Message", href: "#about", desc: "Leadership desk" },
      { name: "Why JRS", href: "#features", desc: "Our key differentiators" },
    ],
  },
  {
    name: "Academics",
    href: "#stages",
    children: [
      { name: "CBSE Curriculum", href: "#stages", desc: "NCERT aligned holistic syllabus" },
      { name: "Pre-Primary (Nursery - UKG)", href: "#stages", desc: "Foundational stage" },
      { name: "Primary (Grades 1 - 5)", href: "#stages", desc: "Core literacy & numeracy" },
      { name: "Middle (Grades 6 - 8)", href: "#stages", desc: "STEM & specialization" },
      { name: "Secondary (Grades 9 - 10)", href: "#stages", desc: "CBSE Board preparation" },
    ],
  },
  {
    name: "Admissions",
    href: "#enquiry-form",
    children: [
      { name: "Online Enquiry", href: "#enquiry-form", desc: "Apply for 2026-27 intake" },
      { name: "Admission Procedure", href: "#enquiry-form", desc: "Registration guidelines" },
      { name: "Download Prospectus", href: "https://jrsinternationalschooluppal.com/wp-content/uploads/2020/05/JRS_International_School-Prospectus.pdf", desc: "Official school brochure (PDF)" },
    ],
  },
  {
    name: "Campus & Life",
    href: "#features",
    children: [
      { name: "Campus Infrastructure", href: "#features", desc: "Smart classrooms & labs" },
      { name: "Sports & Swimming Pool", href: "#features", desc: "Athletic track & courts" },
      { name: "Arts & Performing Arts", href: "#features", desc: "Music, dance & drama" },
      { name: "Safe Transport", href: "#contact", desc: "GPS-enabled school buses" },
    ],
  },
  {
    name: "Events",
    href: "#events",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const heroStats = [
  { value: "1:25", label: "Teacher-Student Ratio", subtext: "Individual focus on every child" },
  { value: "100%", label: "CBSE Academic Pass Rate", subtext: "Excellence in board examinations" },
  { value: "10+", label: "Acres Eco-Campus", subtext: "Pollution-free green environment" },
  { value: "25+", label: "Sports & Activity Clubs", subtext: "Comprehensive co-curriculars" },
];

export const fivePillars = [
  {
    id: "01",
    title: "Academic Excellence",
    description: "Comprehensive CBSE and NCERT syllabus taught by passionate faculty who inspire critical thinking and conceptual mastery.",
    iconName: "GraduationCap",
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "02",
    title: "Holistic Development",
    description: "Equally prioritizing sports, arts, drama, yoga, and leadership camps to shape balanced, thoughtful, and compassionate human beings.",
    iconName: "Sparkles",
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "03",
    title: "Best-In-Class Infrastructure",
    description: "World-class campus featuring smart digital classrooms, cutting-edge science and computing labs, swimming pool, and sports arenas.",
    iconName: "Building2",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "04",
    title: "Personal Attention",
    description: "A guaranteed 1:25 teacher-student ratio ensuring dedicated mentoring, continuous qualitative feedback, and remedial support.",
    iconName: "HeartHandshake",
    color: "from-violet-600 to-violet-700",
  },
  {
    id: "05",
    title: "Safe and Secure Campus",
    description: "Widespread 24/7 CCTV surveillance, vigilant security personnel, trained first-aid medical staff, and GPS-tracked school transport.",
    iconName: "ShieldCheck",
    color: "from-rose-600 to-rose-700",
  },
];

export const academicStages = [
  {
    stageNumber: "01",
    title: "Pre-Primary School",
    grades: "Playgroup • Nursery • LKG • UKG",
    description: "Nurturing early wonder, linguistic expression, social play, and foundational motor skills in a cheerful, caring environment.",
    features: ["Play-based interactive learning", "Phonics & multilingual exposure", "Art, music & sensory development", "Loving, caring educators"],
    image: "/ai-stage-preprimary.jpg",
  },
  {
    stageNumber: "02",
    title: "Primary School",
    grades: "Grades 1 to 5 (CBSE)",
    description: "Cultivating core literacy, arithmetic competence, environmental studies, and scientific inquiry through experiential classroom engagement.",
    features: ["NCERT aligned holistic curriculum", "Activity-driven learning methods", "Computers & coding foundations", "Public speaking & expression"],
    image: "/ai-stage-primary.jpg",
  },
  {
    stageNumber: "03",
    title: "Middle School",
    grades: "Grades 6 to 8 (CBSE)",
    description: "Transitioning to specialized disciplines, collaborative STEM projects, analytical reasoning, and rigorous co-curricular pursuits.",
    features: ["Subject-specialist educators", "Hands-on science & robotics labs", "Competitive Olympiad preparation", "Sports & performing arts specialization"],
    image: "/ai-stage-middle.jpg",
  },
  {
    stageNumber: "04",
    title: "Secondary School",
    grades: "Grades 9 & 10 (CBSE Board)",
    description: "Empowering adolescents for CBSE Board distinction, critical thinking, career orientation, and confident leadership for future careers.",
    features: ["Comprehensive board exam mastery", "Career counseling & guidance", "Leadership & community service", "Remedial & advanced mentoring"],
    image: "/ai-stage-secondary.jpg",
  },
];

export const leadershipMembers = [
  {
    name: "Mr. Jagdishwar Rao",
    role: "Chairman",
    organization: "JRS International School",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2022/11/chairman-1-2-278x300-1.jpg",
    bio: "Mr. Jagdishwar Rao is spearheading the school in the capacity of Chairman, carrying forward the visionary dream of Dr. C Rajal Rao. With vast experience in the co-operative banking sector where he instituted transformative changes, Mr. Rao brings unyielding commitment to educational quality and discipline.",
    quote: "Our vision is to turn JRS into one of the most outstanding educational institutions in Hyderabad, where no compromise is ever made on issues of quality, ethics, and character building.",
  },
  {
    name: "Mrs. Varsha Dani",
    role: "Principal",
    qualifications: "M.A., B.Ed., MBA",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-09-at-11.37.10-AM-scaled.jpeg",
    bio: "Mrs. Varsha Dani brings rich pedagogical leadership and passion for holistic child development. She believes in creating a learning ecosystem where academic rigor goes hand in hand with empathy, perseverance, and intellectual curiosity.",
    quote: "“Tamaso Ma Jyotirgamaya” — Lead me from darkness to light. Education is not merely acquiring knowledge, but nurturing confidence, compassion, and the courage to make a difference.",
  },
];

export const facilitiesList = [
  {
    title: "Athletics & Sports Complex",
    category: "Sports",
    desc: "Dedicated professional athletic track, basketball court, football and cricket grounds with certified coaches.",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/Untitled-1.webp",
  },
  {
    title: "Swimming Pool & Fitness",
    category: "Sports",
    desc: "Clean, hygienic swimming pool supervised by trained lifeguards along with yoga and meditation hall.",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2020/05/beyond.jpg",
  },
  {
    title: "Science & Innovation Labs",
    category: "Academic",
    desc: "Modern physics, chemistry, biology, and robotics laboratories equipped with state-of-the-art apparatus.",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2022/11/15.jpg",
  },
  {
    title: "Digital Smart Classrooms",
    category: "Infrastructure",
    desc: "Multimedia-enabled interactive smart classrooms with high-speed internet and ergonomic seating.",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/WhatsApp-Image-2025-09-24-at-10.55.24_58c56a7f.jpg",
  },
  {
    title: "Information & Media Center",
    category: "Academic",
    desc: "Well-stocked digital library featuring thousands of books, journals, encyclopedia, and quiet reading zones.",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2020/05/curriculum.jpg",
  },
  {
    title: "GPS-Enabled Safe Transport",
    category: "Infrastructure",
    desc: "Fleet of air-conditioned and well-maintained buses covering Uppal, Narapally, Boduppal, Peerzadiguda, Ghatkesar, and surrounding regions.",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/jrs-international-school.webp",
  },
  {
    title: "Arts, Dance & Music Studios",
    category: "Arts",
    desc: "Acoustically designed studios for vocal music, classical instruments, traditional dance, and visual arts.",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-25-at-3.45.29-PM.jpeg",
  },
  {
    title: "Secure Campus & Infirmary",
    category: "Safety",
    desc: "Full CCTV surveillance across all corners, gated access control, and dedicated infirmary with trained medical staff.",
    image: "https://jrsinternationalschooluppal.com/wp-content/uploads/2023/03/jrs-save.jpg",
  },
];

export const schoolEvents = [
  {
    title: "Sports Day & Athletic Meet",
    category: "Sports",
    date: "Annual Fest",
    desc: "Track and field competitions, drills, martial arts demonstrations, and trophy ceremonies celebrating athletic prowess.",
  },
  {
    title: "Food Carnival & Cultural Expo",
    category: "Celebration",
    date: "Campus Highlight",
    desc: "Students and parents celebrate diverse culinary cultures, handmade crafts, and entrepreneurial stalls.",
  },
  {
    title: "Inter-School Science Quiz & Olympiad",
    category: "Academic",
    date: "STEM Fest",
    desc: "Young scientists showcase innovative models, robotics experiments, and live science problem-solving.",
  },
  {
    title: "Pre-Primary Graduation Day",
    category: "Milestone",
    date: "Annual Event",
    desc: "A heartwarming ceremony celebrating our youngest learners stepping into the world of primary schooling.",
  },
  {
    title: "NIE (Newspaper in Education) Awards",
    category: "Academic",
    date: "Achievement",
    desc: "Recognizing outstanding student journalists, essayists, and creative writers in state-level forums.",
  },
  {
    title: "Teacher Training & Development Workshops",
    category: "Pedagogy",
    date: "Professional Growth",
    desc: "Continual skill enhancement sessions aligning our teaching faculty with modern global pedagogy and NEP 2020 standards.",
  },
];

export const parentTestimonials = [
  {
    quote: "Sending our child to JRS International School has been the best decision. The teachers don't merely teach to finish syllabus; their passion and personal care for each child's confidence is truly remarkable.",
    parentName: "K. Venkat Reddy",
    relation: "Parent of Grade 7 Student",
    rating: 5,
    tag: "CBSE Curriculum & Sports",
  },
  {
    quote: "The sprawling green campus away from pollution makes such a difference in child health and well-being. The 1:25 teacher ratio means our daughter gets dedicated attention whenever she faces any doubt.",
    parentName: "Pooja Sharma",
    relation: "Parent of Grade 4 Student",
    rating: 5,
    tag: "Campus Infrastructure & Safety",
  },
  {
    quote: "The perfect balance between Indian traditional values and modern scientific temper. My son has excelled not only in academics but also in swimming and robotics competitions.",
    parentName: "Dr. Srinivas Rao",
    relation: "Parent of Grade 9 Student",
    rating: 5,
    tag: "Holistic Development",
  },
];

export const faqsList = [
  {
    question: "What curriculum does JRS International School follow?",
    answer: "JRS International School strictly follows the Central Board of Secondary Education (CBSE) curriculum, integrated with NCERT textbooks and aligned with the National Education Policy (NEP 2020) framework. We focus on experiential and concept-based learning.",
  },
  {
    question: "What is the teacher-to-student ratio maintained at JRS?",
    answer: "We strictly maintain a low 1:25 teacher-to-student ratio. This ensures every student receives individualized attention, personalized guidance, and regular qualitative feedback.",
  },
  {
    question: "What age criteria apply for Pre-Primary and Grade 1 admissions?",
    answer: "As per the NEP and state guidelines, children should be 3+ years for Nursery, 4+ for LKG, 5+ for UKG, and 6+ years for Grade 1 as of the academic year intake date.",
  },
  {
    question: "Does the school provide safe transportation facilities?",
    answer: "Yes, JRS operates a fleet of secure, GPS-tracked buses with trained drivers and female attendants covering Uppal, Narapally, Boduppal, Peerzadiguda, Ghatkesar, Pocharam, Medipally, and neighboring localities.",
  },
  {
    question: "What sports and co-curricular activities are offered during school hours?",
    answer: "Our curriculum includes athletics, football, cricket, basketball, volleyball, swimming, skating, yoga, martial arts, robotics, music, classical dance, dramatics, art & craft, and debate clubs embedded within the regular school timetable.",
  },
  {
    question: "How can parents apply for admission for the academic year 2026-27?",
    answer: "Parents can fill out the online admission enquiry form on this website, download the school brochure, or visit the school campus directly at Korremula X Road, Narapally, Hyderabad for a personalized tour and counseling.",
  },
];

export const contactDetails = {
  address: "Korremula X Road, Narapally, Hyderabad, Telangana 500098",
  phones: ["+91 9281409674", "+91 9281409675", "+91 8367777545", "+91 8367777548"],
  email: "Jrsinternationalschool6@gmail.com",
  alternateEmail: "info@jrsinternationalschooluppal.com",
  website: "www.jrsinternationalschooluppal.com",
  timing: "Monday – Saturday: 8:30 AM – 4:30 PM",
  social: {
    facebook: "https://www.facebook.com/AtJRSSchool/",
    twitter: "https://twitter.com/AtJRSSchool",
    instagram: "https://www.instagram.com/jrs_international_school/",
    youtube: "https://www.youtube.com/channel/UCep-jmPHdWe-dCOYkAOCL1Q",
    whatsapp: "https://wa.me/+918367777548",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2792256295124!2d78.55607651529877!3d17.39838250706634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d739fb75a1%3A0xb3a2624674fea4ab!2sJRS%20International%20School!5e0!3m2!1sen!2sin!4v1588910166981!5m2!1sen!2sin",
  videoTourEmbed: "https://www.youtube.com/embed/LBvByB-S0O4",
  logoUrl: "/jrs-logo.png",
  logoWhiteUrl: "/jrs-logo-white.png",
  prospectusUrl: "http://jrsinternationalschooluppal.com/wp-content/uploads/2020/05/JRS_International_School-Prospectus.pdf",
};

