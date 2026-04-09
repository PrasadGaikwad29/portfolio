import studynotion from "../assets/studynotion.png";
import blogapp from "../assets/blogapp.png";
import razorpay from "../assets/razorpay.png";
import discord from "../assets/discord.png";
import notebook from "../assets/notebook.png";
import devdetective from "../assets/devdetective.png";
import ecomzy from "../assets/ecomzy.png";
import courses from "../assets/courses.png";
import medium from "../assets/medium.png";

export const mainProjects = [
  {
    id: 1,
    title: "Study Notion",
    description:
      "Built a full-stack edtech platform enabling students to enroll, stream lectures, and track progress, while instructors can create and manage courses. Implemented authentication, protected routes, and scalable backend APIs to handle real-world user flows.",
    image: studynotion,
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
      "Redux",
      "JWT",
    ],
    liveUrl: "https://studynotion-edtech-project-zeta.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/studynotion-edtech-project",
    featured: true,
  },
  {
    id: 2,
    title: "Blogging App",
    description:
      "Developed a full-stack blogging platform with secure authentication, CRUD operations, and session management using JWT. Designed APIs and state management to support real-time content creation and editing workflows.",
    image: blogapp,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Context API", "JWT"],
    liveUrl: "https://blog-app-phi-sandy.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/Blog-App",
    featured: true,
  },
  {
    id: 3,
    title: "Razorpay",
    description:
      "Engineered a responsive frontend clone of a payment gateway with a focus on UI accuracy, reusable components, and smooth user interaction flows resembling real-world checkout systems.",
    image: razorpay,
    techStack: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    liveUrl: "https://razorpay-roan-two.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/Razorpay",
    featured: false,
  },
  {
    id: 4,
    title: "Discord",
    description:
      "Built a scalable chat application UI with channel-based navigation and modular components. Focused on responsive design patterns and clean architecture for real-time app simulation.",
    image: discord,
    techStack: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    liveUrl: "https://discord-phi-lake.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/Discord",
    featured: false,
  },
];
export const miniProjects = [
  {
    id: 5,
    title: "NoteBook",
    description:
      "Developed a note management application with persistent storage using localStorage and global state handling via Redux, enabling efficient CRUD operations.",
    image: notebook,
    techStack: [
      "React",
      "Redux",
      "Local Storage",
      "JavaScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://notebook-jet-two.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/notebook",
  },
  {
    id: 6,
    title: "Dev Detective",
    description:
      "Created a developer search tool integrating GitHub API to fetch and display user profiles dynamically, handling API responses and edge cases efficiently.",
    image: devdetective,
    techStack: ["JavaScript", "HTML5", "CSS"],
    liveUrl: "https://dev-detective-inky-two.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/dev-detective",
  },
  {
    id: 7,
    title: "Ecomzy",
    description:
      "Built an e-commerce frontend with product listing, cart functionality, and state management, focusing on user experience and scalable component design.",
    image: ecomzy,
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://ecomzy-git-main-prasadgaikwad29s-projects.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/ecomzy",
  },
  {
    id: 9,
    title: "Medium",
    description:
      "Developed a Medium-inspired blogging UI with Redux-based state management and API integration, focusing on clean content rendering and user interaction flows.",
    image: medium,
    techStack: ["React", "Redux", "Open Trivia API"],
    liveUrl: "https://medium-psi-indol.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/medium",
  },
  {
    id: 8,
    title: "Courses",
    description:
      "Designed a course management dashboard enabling structured content organization for students and instructors with a focus on usability and responsive layouts.",
    image: courses,
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://courses-vert-nine.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/courses",
  },
];