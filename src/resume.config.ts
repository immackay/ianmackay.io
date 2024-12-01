export interface ResumeConfig {
  options?: {
    showEducation?: boolean;
    showPublications?: boolean;
    showCoursework?: boolean;
    showInvolvement?: boolean;
    showProjects?: boolean;
    showSkills?: boolean;
  };
  name: string;
  contact: {
    location?: string;
    email?: string;
    phone?: string;
    linkedin?: string;
    website?: string;
    github?: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    location: string;
    timeframe: string;
    role: string;
    responsibilities?: Array<string>;
  }>;
  education: Array<{
    degree: string;
    minor: string;
    school: string;
    location: string;
  }>;
  publications?: Array<{
    name: string;
    journal: string;
    timeframe: string;
    summary?: string;
    link?: string;
  }>;
  coursework?: Array<{
    title: string;
    school: string;
    skills: Array<string>;
    application?: string;
  }>;
  involvement?: Array<{
    role: string;
    organization: string;
    school: string;
    timeframe: string;
    responsibilities: Array<string>;
  }>;
  projects?: Array<{
    name: string;
    skills: Array<string>;
    timeframe: string;
    summary: string;
  }>;
  skills: Array<{
    category: string;
    items: Array<string>;
  }>;
}

export const {
  options,
  name,
  contact,
  summary,
  experience,
  education,
  publications,
  coursework,
  involvement,
  projects,
  skills,
}: ResumeConfig = {
  options: {
    showEducation: true,
    showPublications: false,
    showCoursework: true,
    showInvolvement: true,
    showProjects: true,
    showSkills: true,
  },
  name: "Ian MacKay",
  contact: {
    linkedin: "in/immackay",
    website: "ianmackay.io",
    github: "immackay",
  },
  summary:
    "Driven lifelong developer with a strong background in cloud-native distributed systems, global-scale systems design, and full-stack web/mobile development. Experienced with team leadership, mentoring of junior developers, shipping high-impact features, and working with customers.",
  experience: [
    // {
    //   company: 'Swartz Group',
    //   location: 'Vancouver, BC',
    //   timeframe: 'July 2023 - Current',
    //   role: 'Senior Software Developer',
    //   responsibilities: [
    //     'Worked responsive front-end using Next.js',
    //     'Converted a Python API to Go resulting in a 15x increase in app responsiveness.',
    //     'Built and maintained data ingest pipelines to process over 40 million menu entries using Python and PostgreSQL',
    //     'Utilized Elasticsearch to optimize ',
    //   ]
    // },
    {
      company: "Amazon Web Services — RDS Oracle",
      location: "Vancouver, BC",
      timeframe: "March 2021 - July 2023",
      role: "Software Development Engineer",
      responsibilities: [
        "Lead a team of 5 developers on a feature enabling vertical scaling of compute resources to manage customer scale requirements.",
        "Biweekly on-call shifts for monitoring microservices and associated CI/CD pipelines, and addressing customer-facing and service issues as needed.",
        "Built automation and playbooks for region deployment based on manual experience.",
        "Reduced build times for a core service package by over 85% saving 40 minutes of developer time per build.",
        "Onboarded and mentored junior developers in team and SDE practices.",
        // 'Investigated and implemented customizable time zone functionality.',
        "Code owner of several core packages, responsible for code review, enforcement of coding standards, and source control management duties.",
      ],
    },
    {
      company: "AGvisorPRO Inc",
      location: "Calgary, AB",
      timeframe: "July 2020 - March 2021",
      role: "Software Developer",
      responsibilities: [
        "Built a prototype of the new web functionality using React Native from the ground up in under 40 hours.",
        "Optimized Laravel endpoints resulting in a 2x decrease in initial app load delay.",
        "Managed the continuous integration and deployment pipelines of the React Native repository, saving over 10 developer hours monthly.",
        "Improved and simplified over 400 endpoints to be in line with PHP 7.4 best practices.",
        "Provided guidance and mentorship regarding software engineering best practices to junior developers.",
      ],
    },
    {
      company: "Moose Health",
      location: "Sunnyvale, CA",
      timeframe: "May 2019 - April 2020",
      role: "Software Development Lead",
      responsibilities: [
        "Developed a dual-usage cross-platform mobile application from the ground up using React Native with Typescript.",
        "Hired, lead, and mentored a team of 2 developers using agile development methodologies.",
        "Managed deployment of company application to Android and iOS app stores.",
        "Created development plans for discussion in bi-weekly scrum planning.",
        // 'Interfaced collaboratively with marketing teams and gathered input from customer focus groups.',
        "Built a complete integrated pipeline for end to end testing and assisting developer workflows from PR to production.",
      ],
    },
    {
      company: "iDrill Drilling Technologies",
      location: "Calgary, AB",
      timeframe: "May 2018 - August 2018",
      role: "Software Developer",
      responsibilities: [
        "Fully implemented a prototype user-friendly frontend for use in harsh environments in under 30 days using JavaFX.",
        // 'Built a user friendly frontend for use in harsh environments using JavaFX.',
        "Implemented a backend that handled over 5000 requests per second using Java Spring Boot and MySQL.",
        "Integrated streaming sensor data resulting in real-time analytical capabilities with under 10ms of latency.",
        "Created a data and trajectory analysis dashboard using HTML5 and CSS3.",
      ],
    },
  ],
  education: [
    {
      school: "Thompson Rivers University",
      location: "Kamloops, BC",
      minor: "Minor in Computer Science",
      degree: "Bachelor of Science in Chemistry",
    },
  ],
  // publications: [
  //   {
  //     name: "Modulating the wnt signaling pathway with small molecules",
  //     journal: "Protein Science: A Publication of the Protein Society",
  //     timeframe: "April 2017",
  //     link: "https://doi.org/10.1002/pro.3122",
  //     summary:
  //       "A review of the extensive efforts focused on developing small molecules that have potential to either inhibit or activate the Wingless signalling pathway",
  //   },
  // ],
  coursework: [
    {
      title: "Behavioural Biometrics",
      school: "Thompson Rivers University",
      skills: ["Machine Learning", "Data Science", "Biometric Identification"],
      application:
        "Used Deeplearning4j to explore biometric identification using neural networks.",
    },
    // {
    //   title: 'Introduction to Data Science',
    //   school: 'Thompson Rivers University',
    //   skills: ['Data Analysis', 'Statistics'],
    //   application:
    //     'Wrote final paper in LaTeX on k-means clustering and ARIMA models using R and Python',
    // },
  ],
  involvement: [
    {
      role: "Digital Strategy Advisor/Research Computing Technology Advisor",
      organization: "Student Caucus",
      school: "Thompson Rivers University",
      timeframe: "September 2019 - May 2020",
      responsibilities: [
        "Gave recommendations for the smooth transition of over 1,500 classes to online learning.",
        "Strategized a cost-effective utilization plan for unused computing resources resulting in potential savings of over $10,000 annually.",
        "Wrote Standard Operating Practices regarding virtual education management for use by over 400 educators.",
        "Provided perspective on technical solutions to simplify virtual learning infrastructure that supports the education of over 20,000 students.",
      ],
    },
  ],
  projects: [
    {
      name: "Time Series Modelling and Object Clustering",
      skills: ["R", "ARIMA Models", "k-means clustering", "Python 3", "LaTeX"],
      timeframe: "2018",
      summary:
        "Modelled cryptocurrency prices using ARIMA models and regression methods, and used k-means clustering for the purpose of image segmentation.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "Java",
        "Typescript",
        "Python",
        "Go",
        "R",
        "Ruby",
        "Bash/Shell",
        "Objective-C",
        "Kotlin",
        "Swift",
        "C#",
        "Javascript",
        "HTML5",
        "CSS3",
        "PHP",
        "C",
      ],
    },
    {
      category: "Frameworks",
      items: [
        "React",
        "React Native",
        "Next.js",
        "Redux",
        "Mobx",
        "Vue",
        "Electron",
        "Node.js",
        "Laravel",
        "Tailwind",
        "Android",
        "Flutter",
        "Angular",
        "Deeplearning4j",
      ],
    },
    {
      category: "Miscellaneous",
      items: [
        "Amazon Web Services",
        "Google Cloud",
        "DevOps",
        "System Design",
        "Git",
        "Docker",
        "Data Science",
        "Machine Learning",
        "Agile Software Development",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Natural Learner",
        "Mentoring",
        "Leadership",
        "Technical Judgement",
        "Creative Problem Solving",
        "Communicating With Users",
      ],
    },
  ],
};
