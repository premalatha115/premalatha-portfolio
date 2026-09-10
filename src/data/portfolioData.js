export const profile = {
  name: "Premalatha A",
  role: "Software Developer",
  focus: "Java · Spring Boot · Backend Systems",
  location: "Tirunelveli, Tamil Nadu, India",
  company: "Tata Consultancy Services",
  title: "Assistant System Engineer",
  experience: "1+ year",
  email: "premalatha110503@gmail.com",
  linkedin: "https://linkedin.com/in/premalatha115",
  leetcode: "https://leetcode.com/u/Premalatha77",
  github: "", // add your GitHub profile URL here
  resumeFile: "/resume.pdf",
  photo: "/photo.png",
};

export const education = [
  {
    degree: "M.E. Computer Science and Engineering",
    school: "SCAD College of Engineering and Technology",
    period: "2024 – 2026",
  },
  {
    degree: "B.E. Computer Science and Engineering",
    school: "SCAD College of Engineering and Technology",
    period: "2020 – 2024",
  },
];

export const introLine =
  "Software Developer with 1+ year of experience at Tata Consultancy Services working on enterprise application modernization and COBOL-to-Java migration.";

export const stats = [
  { value: "1+", label: "Years experience" },
  { value: "Java", label: "Primary backend language" },
  { value: "REST", label: "API development" },
  { value: "Full Stack", label: "Application development" },
];

export const aboutPoints = [
  "Currently modernizing enterprise applications at TCS, converting COBOL business logic into maintainable Java services.",
  "Experienced in Java development, debugging, application optimization, REST API development, SQL, Git, and backend application development.",
  "Currently developing an Angular frontend for a Java Spring Boot Employee Management application in my own time.",
  "Strong foundation in object-oriented programming, data structures and algorithms, DBMS, problem solving, and layered application architecture.",
];

export const heroStack = [
  "Java",
  "Spring Boot",
  "Angular",
  "React",
  "TypeScript",
  "Python",
  "SQL",
  "Docker",
  "Git",
  "AWS",
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Assistant System Engineer",
    period: "February 2025 – Present",
    location: "Chennai, Tamil Nadu",
    points: [
      "Contribute to a COBOL-to-Java application modernization project.",
      "Analyze legacy application modules and business logic.",
      "Convert legacy functionality into maintainable Java solutions.",
      "Develop and maintain Java application components.",
      "Perform coding, debugging, troubleshooting and application optimization.",
      "Analyze structured legacy system data and application behavior.",
      "Use Git and code review practices in a team setting.",
      "Collaborate with teammates to support project deliverables and support the transition toward modern Java-based development.",
    ],
  },
];

export const projects = [
  {
    id: "ems",
    featured: true,
    title: "Employee Management System",
    type: "Full-Stack Application · In Progress",
    description:
      "A full-stack Employee Management System with an Angular frontend and a Java Spring Boot backend, exposing employee records through RESTful APIs.",
    stack: ["Angular", "TypeScript", "Java", "Spring Boot", "MySQL", "Spring Data JPA", "Hibernate", "Docker", "Swagger / OpenAPI"],
    features: [
      "RESTful APIs built with Spring Boot for employee CRUD operations",
      "Angular components and services consuming the backend REST APIs",
      "Employee forms with validation for creating and updating records",
      "MySQL persistence via Spring Data JPA and Hibernate",
      "Layered architecture (Controller, Service, Repository, Entity) with exception handling",
      "API documentation via Swagger / OpenAPI",
      "Backend containerized with Docker for consistent deployment",
    ],
    architecture: ["Angular", "REST API", "Controller", "Service", "Repository", "MySQL"],
    github: "", // add repo URL
    demo: "", // add live demo URL if available
  },
  {
    id: "finance-tracker",
    featured: false,
    title: "Expense & Personal Finance Tracker API",
    type: "Backend API · In Progress",
    description:
      "A backend API for tracking personal income, expenses, budgets and spending categories, with monthly financial summaries.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs"],
    features: [
      "RESTful APIs for financial transaction management and CRUD operations",
      "Spring Data JPA and Hibernate for database interaction and ORM",
      "MySQL integration for transaction, budget, income and expense data",
      "Monthly expense summaries and budget tracking functionality",
      "Layered architecture with validation and exception handling",
    ],
    architecture: ["Client", "REST API", "Controller", "Service", "Repository", "MySQL"],
    github: "",
    demo: "",
  },
];

export const skillGroups = [
  { label: "Programming", items: ["Java", "Python", "SQL", "TypeScript"] },
  { label: "Backend", items: ["Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs"] },
  { label: "Frontend", items: ["Angular", "HTML", "CSS"] },
  { label: "Database", items: ["MySQL"] },
  { label: "DevOps / Tools", items: ["Git", "GitHub", "Bitbucket", "Docker", "Maven", "Swagger / OpenAPI", "Jenkins (basics)"] },
  { label: "Cloud", items: ["AWS (basics)"] },
  {
    label: "Software Engineering",
    items: ["OOP", "DSA", "DBMS", "Debugging", "Exception Handling", "Validation", "API Testing", "Layered Architecture", "System Design Fundamentals"],
  },
  { label: "Practices", items: ["Code Review", "Agile", "Problem Solving"] },
  { label: "Architecture", items: ["Controller–Service–Repository", "Layered Architecture", "Microservices (conceptual)"] },
];

export const buildApproach = [
  { step: "01", title: "Understand the problem", detail: "Clarify requirements and constraints before writing a line of code." },
  { step: "02", title: "Design the architecture", detail: "Sketch the layers and boundaries: controller, service, repository." },
  { step: "03", title: "Build REST APIs", detail: "Define contracts first, then implement endpoints against them." },
  { step: "04", title: "Implement business logic", detail: "Keep logic in the service layer, testable and framework-agnostic." },
  { step: "05", title: "Integrate the database", detail: "Model entities carefully with Spring Data JPA and Hibernate." },
  { step: "06", title: "Validate & handle exceptions", detail: "Fail predictably with clear, centralized error handling." },
  { step: "07", title: "Test the APIs", detail: "Exercise endpoints with realistic inputs before calling it done." },
  { step: "08", title: "Containerize & deploy", detail: "Package with Docker so the service runs the same everywhere." },
];

export const dsaJourney = {
  text: "Alongside delivery work, I keep building on data structures and algorithms, object-oriented design, and database fundamentals — the groundwork for solving unfamiliar problems, not just familiar ones.",
  tags: ["Data Structures", "Algorithms", "OOP", "DBMS", "Problem Solving"],
  leetcode: "https://leetcode.com/u/Premalatha77",
};

export const certifications = [
  { name: "Claude Architect Foundations", org: "Anthropic" },
  { name: "Azure Security Engineer Associate", org: "Microsoft" },
  { name: "AI Agents with Claude API in Python", org: "Udemy" },
  { name: "Python for Absolute Beginners", org: "Udemy" },
  { name: "Generative AI for Beginners", org: "Udemy" },
];

export const achievement = {
  title: "2nd Place — TCS Office Badminton Tournament",
  date: "November 2025",
};

export const currentlyLearning = [
  "React.js",
  "Advanced Spring Boot",
  "Microservices",
  "Docker",
  "Kubernetes",
  "AWS",
  "System Design",
  "Advanced DSA",
  "AI / LLM application development",
];

export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];
