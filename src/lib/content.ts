import james from "@/assets/james.jpg.asset.json";
import nataliia from "@/assets/nataliia.png.asset.json";

export const supportEmail = "info@doylemoneytree.com";

// Placeholder catalogue content — replace with the real titles, descriptions and files.
export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  sample: string;
  purchase?: string;
};

export type Study = {
  slug: string;
  title: string;
  subject: string;
  audience: string;
  sessions: number;
  summary: string;
  outline: string[];
};

export const books: Book[] = [
  {
    slug: "rooted-and-growing",
    title: "Rooted & Growing",
    subtitle: "Faith, family and stewardship",
    description:
      "A practical reflection on building a life — and a household — on lasting foundations.",
    sample:
      "Every tree that stands through the storm began as a seed that chose to go down before it went up…",
  },
];

export const studies: Study[] = [
  {
    slug: "follow-me",
    title: "Follow Me",
    subject: "The call of Jesus to His disciples in the Gospels",
    audience: "Small groups, adult Sunday school and new believers",
    sessions: 8,
    summary:
      "An eight-session journey through the moments Jesus said “Follow me,” and what that invitation means for us today.",
    outline: [
      "The first call by the sea",
      "Leaving the nets behind",
      "Following in the storm",
      "Following when it costs",
      "Following in service",
      "Following through failure",
      "Following after the resurrection",
      "Sent to invite others",
    ],
  },
];

export type Person = {
  name: string;
  title: string;
  bio: string[];
  photo: string;
  expertise: string[];
  qualifications: string[];
};

export const team: Person[] = [
  {
    name: "Dr. James Patrick Doyle, Jr.",
    title: "President — Doyle Money Tree Enterprises, LLC",
    photo: james.url,
    bio: [
      "Dr. James Patrick Doyle, Jr., is president of Doyle Money Tree Enterprises, LLC. He earned his doctorate from the University of Kansas in 1992 and devoted 37 years to public education, serving as a teacher, principal, middle management administrator, and superintendent of schools. His career provided extensive experience in teaching, organizational leadership, and the responsibilities of guiding schools and serving their communities.",
      "Following retirement, Dr. Doyle turned his attention to new areas of study and personal growth. He dedicated himself to learning the discipline of professional stock trading while deepening his study of Scripture. These pursuits reflect his continuing commitment to learning, careful analysis, and applying knowledge with purpose.",
      "His lifelong interest in education also found a new expression in writing materials for Bible study students. Through these works, he seeks to help readers understand biblical teaching, examine the Scriptures for themselves, and consider how God’s Word applies to everyday life.",
      "As president of Doyle Money Tree Enterprises, Dr. Doyle brings together his background in education, entrepreneurial interests, and Christian faith. His vision is to develop a business that provides useful services and meaningful publications while creating opportunities for others to contribute their knowledge and talents.",
    ],
    expertise: ["Education", "Organizational leadership", "Bible study writing"],
    qualifications: ["Doctorate, University of Kansas (1992)"],
  },
  {
    name: "Nataliia Kulyk",
    title: "Vice President — Professional Services",
    photo: nataliia.url,
    bio: [
      "Nataliia Kulyk holds a Master’s degree in Computer Science and Automation from Taras Shevchenko National University of Kyiv (2012). With a background in software development and programming, she brings a technology-driven perspective to the architectural and engineering industry.",
      "She has established professional connections with architects and licensed professional engineers in Poland and across multiple U.S. states. Passionate about innovation and AI integration, Nataliia focuses on bridging artificial intelligence with architectural design and engineering services to develop smarter, more efficient solutions for the built environment.",
    ],
    expertise: [
      "Software development", "AI integration", "Architectural & engineering coordination",
    ],
    qualifications: ["Master’s in Computer Science and Automation, Taras Shevchenko National University of Kyiv (2012)"],
  },
];
