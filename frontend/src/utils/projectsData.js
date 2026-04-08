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
      "A full-stack edtech platform that enables students to enroll in courses, watch lectures, and track progress, while instructors can create and manage content with a seamless learning experience.",
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
      "A full-stack blogging platform where users can create, edit, and publish articles with authentication, rich text support, and secure JWT-based user sessions.",
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
      "Frontend clone of a payment gateway UI with responsive design, interactive checkout flow, and clean component-based architecture.",
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
      "Frontend clone of a real-time chat app UI with channel-based layout, responsive design, and reusable components for seamless user experience.",
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
    description: "Notebook to make notes and keep track of them.",
    image: notebook,
    techStack: [
      "React",
      "redux",
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
      "help to find developers github profile using github username.",
    image: devdetective,
    techStack: ["JavaScript", "HTML5", "CSS"],
    liveUrl: "https://dev-detective-inky-two.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/dev-detective",
  },
  {
    id: 7,
    title: "Ecomzy",
    description: "A E commerce platform to buy and sell products.",
    image: ecomzy,
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://ecomzy-git-main-prasadgaikwad29s-projects.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/ecomzy",
  },
  {
    id: 9,
    title: "Medium",
    description:
      "Dynamic quiz app with timer, score tracking, and category filters.",
    image: medium,
    techStack: ["React", "Redux", "Open Trivia API"],
    liveUrl: "https://medium-psi-indol.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/medium",
  },
  {
    id: 8,
    title: "Courses",
    description:
      "A dashboard to manage courses for the students, and instructors.",
    image: courses,
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://courses-vert-nine.vercel.app/",
    githubUrl: "https://github.com/PrasadGaikwad29/courses",
  },
];
