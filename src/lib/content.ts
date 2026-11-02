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
  bio: string;
  expertise: string[];
  qualifications: string[];
};

export const team: Person[] = [
  {
    name: "Ivica Kolevski",
    title: "President — Doyle Money Tree Enterprises, LLC",
    bio: "Leads the company's overall vision and business development, bringing together its divisions and connecting clients with the professional knowledge they need to move forward.",
    expertise: ["Company leadership", "Business development", "Client relationships"],
    qualifications: ["Credentials to be added"],
  },
  {
    name: "Vice President",
    title: "Vice President — Professional Services",
    bio: "Develops and manages the technical services side: architectural design, civil and structural engineering coordination and MEP services — guiding each project from the first conversation through the agreed deliverables.",
    expertise: [
      "Architectural design",
      "Civil & structural coordination",
      "MEP services",
      "Project development",
    ],
    qualifications: ["Credentials to be added"],
  },
];
